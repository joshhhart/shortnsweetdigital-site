#!/usr/bin/env node
// Daily SEO post pipeline.
//
// Architecture: plain Anthropic SDK (no Claude Code agent loop) with the
// claude-seo + claude-blog SKILL.md files inlined as system prompts. Each step
// is one small API call so we stay well under per-minute token caps.
//
// Steps:
//   1. Keyword pick    — system = seo skill, user = covered list
//   2. Draft           — system = blog skill + blog-write, user = keyword + style refs
//   3. Audit           — system = seo-audit + blog-audit, user = draft → JSON verdict
//   4. Audio (xAI TTS) — generated from the final post body
//   5/6. Build + commit — handled by the workflow, not here

import fs from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';

const BLOG_DIR  = 'src/content/blog';
const AUDIO_DIR = 'public/audio';
const IMAGE_DIR = 'public/images';
const SKILLS    = '.skills'; // workflow clones the two repos in here

const MODEL = 'claude-haiku-4-5-20251001';
const today = new Date().toISOString().slice(0, 10);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ---------- helpers ----------
function slugify(s) {
  return s.toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function readIfExists(p) {
  try { return await fs.readFile(p, 'utf8'); }
  catch { return ''; }
}

async function loadSkill(...parts) {
  return readIfExists(path.join(SKILLS, ...parts, 'SKILL.md'));
}

function textOf(message) {
  return message.content.filter(b => b.type === 'text').map(b => b.text).join('');
}

async function listExistingKeywords() {
  const files = await fs.readdir(BLOG_DIR);
  const keywords = [];
  for (const f of files) {
    if (!f.endsWith('.md')) continue;
    const txt = await fs.readFile(path.join(BLOG_DIR, f), 'utf8');
    const m = txt.match(/^targetKeyword:\s*["']?(.+?)["']?\s*$/m);
    if (m) keywords.push(m[1]);
  }
  return keywords;
}

async function loadStyleRefs() {
  // Two most recent posts (excluding drafts) as style anchors.
  const files = (await fs.readdir(BLOG_DIR)).filter(f => f.endsWith('.md')).sort().reverse();
  const refs = [];
  for (const f of files.slice(0, 2)) {
    refs.push(await fs.readFile(path.join(BLOG_DIR, f), 'utf8'));
  }
  return refs.join('\n\n----\n\n');
}

// ---------- Step 1: keyword pick ----------
async function pickKeyword(existing) {
  if (process.env.KEYWORD_OVERRIDE) return process.env.KEYWORD_OVERRIDE;

  const seoSkill = await loadSkill('claude-seo', 'skills', 'seo');
  const system = `You are an SEO strategist for Short n Sweet Digital, a GoHighLevel
white-label agency for small businesses and other marketing agencies. Use the
following SEO skill instructions to guide your selection:

${seoSkill}

Output ONLY the chosen keyword on a single line. No preamble, no explanation.

CRITICAL FORMAT RULES (any violation = your output is invalid):
- All lowercase.
- The word "versus" must be written as "vs". NEVER "vrs", "vrs.", "vs.", "verus", "verses".
- Each separator between brand names must be the literal two characters: v + s, lowercase, surrounded by single spaces.
- No quotes, no punctuation at the end, no parentheses.
- 3-7 words.

Examples of valid output:
  gohighlevel vs hubspot
  gohighlevel vs activecampaign
  yext vs synup vs uberall

Examples of invalid output (do not produce):
  GoHighLevel vs HubSpot          (uppercase)
  yext vrs synup                  (typo: vrs)
  "gohighlevel vs zoho crm"       (quotes)
  what is gohighlevel?            (question/punctuation)`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 64,
    system,
    messages: [{
      role: 'user',
      content: `Pick the next high-intent keyword we should target. Must NOT duplicate any of these we have already covered:\n${existing.map(k => `- ${k}`).join('\n')}\n\nReturn one keyword.`,
    }],
  });
  return textOf(r).trim()
    .replace(/^["']|["']$/g, '')
    .toLowerCase()
    // Belt-and-suspenders: model occasionally outputs typos despite the prompt.
    .replace(/\bv(?:rs|er[sus]+|s\.)\b/g, 'vs');
}

// ---------- Step 2: draft ----------
async function draftPost(keyword, styleRefs, auditFeedback = '') {
  const blogSkill   = await loadSkill('claude-blog', 'skills', 'blog');
  const blogWrite   = await loadSkill('claude-blog', 'skills', 'blog-write');

  const system = `You are a long-form blog writer for Short n Sweet Digital, a
GoHighLevel white-label agency. Follow these skill instructions verbatim:

${blogSkill}

${blogWrite}

Output a complete Astro markdown post starting with YAML frontmatter. Do not
wrap the response in code fences. Do not add any commentary before or after.

Required frontmatter fields (must validate against src/content/config.ts):
  title (<= 70 chars)
  description (<= 160 chars)
  pubDate: ${today}
  tags: [an array of 3-6 strings]
  targetKeyword: "${keyword}"
  auditPassed: false
  draft: false`;

  const userParts = [
    `Target keyword: ${keyword}`,
    `Today: ${today}`,
    `Site context: Short n Sweet Digital is a GoHighLevel white-label agency that helps small businesses and other agencies. The CTA at the end should link to GoHighLevel via the affiliate URL https://www.gohighlevel.com/?fp_ref=shortnsweet53.`,
    `Tone, length, structure, and frontmatter style must match these two recent posts:\n\n${styleRefs}`,
  ];
  if (auditFeedback) {
    userParts.push(`A previous draft failed audit. Address EVERY issue below and produce a new full draft:\n\n${auditFeedback}`);
  }

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 8000,
    system,
    messages: [{ role: 'user', content: userParts.join('\n\n') }],
  });
  return textOf(r).trim();
}

// ---------- Step 3: audit ----------
async function auditPost(draft) {
  const seoAudit  = await loadSkill('claude-seo', 'skills', 'seo-audit');
  const blogAudit = await loadSkill('claude-blog', 'skills', 'blog-audit');

  const system = `You are an SEO + blog auditor. Apply these skill rubrics:

${seoAudit}

${blogAudit}

Reply with strict JSON only, no markdown, no commentary, no code fences:
  {"pass": boolean, "issues": string[]}
Set pass=true if the post is publishable (no critical or high-severity issues).
Minor polish items go in issues but do not block. Cap issues at 8.`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 1200,
    system,
    messages: [{ role: 'user', content: draft }],
  });
  const txt = textOf(r).trim();
  const json = extractFirstJsonObject(txt);
  if (!json) throw new Error(`Audit returned non-JSON: ${txt.slice(0, 500)}`);
  return JSON.parse(json);
}

// Walk the string respecting string literals and escapes, return the first
// balanced top-level {...} block as a string. Robust against prose around the
// JSON or `}` characters inside issue strings.
function extractFirstJsonObject(txt) {
  let depth = 0, start = -1, inString = false, escape = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (escape) { escape = false; continue; }
    if (c === '\\') { escape = true; continue; }
    if (c === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (c === '{') { if (depth === 0) start = i; depth++; }
    else if (c === '}') { depth--; if (depth === 0 && start >= 0) return txt.slice(start, i + 1); }
  }
  return null;
}

// ---------- Step 3.5: hero image (xAI image gen) ----------
async function generateHeroImage(slug, title, keyword) {
  if (!process.env.XAI_API_KEY) {
    console.warn('[skip] XAI_API_KEY missing — skipping hero image');
    return null;
  }
  const prompt = `Editorial hero image for a marketing blog post titled "${title}". Subject: ${keyword}. Modern flat illustration, dark navy background (#0b1120), accent blues (#3b9bff, #5271FF), clean geometric shapes, no text, no logos, 16:9 composition.`;

  const res = await fetch('https://api.x.ai/v1/images/generations', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.XAI_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'grok-imagine-image',
      prompt,
      n: 1,
      response_format: 'url',
    }),
  });
  if (!res.ok) {
    console.warn(`[warn] xAI image ${res.status}: ${await res.text()} — continuing without hero`);
    return null;
  }
  const json = await res.json();
  const url = json?.data?.[0]?.url;
  if (!url) {
    console.warn(`[warn] xAI image response missing url:`, JSON.stringify(json).slice(0, 300));
    return null;
  }
  const imgRes = await fetch(url);
  if (!imgRes.ok) {
    console.warn(`[warn] failed to download generated image: ${imgRes.status}`);
    return null;
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const imgName = `${today}-${slug}.jpg`;
  await fs.writeFile(path.join(IMAGE_DIR, imgName), buf);
  return `/images/${imgName}`;
}

// ---------- Step 4: audio (xAI custom voice) ----------
async function summarizeForPodcast(title, body) {
  // Strip markdown structure that wouldn't read well in audio.
  const cleaned = body
    .replace(/!\[[^\]]*]\([^)]+\)/g, '')              // images
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')           // links → text
    .replace(/`{1,3}[^`]*`{1,3}/g, '')                // code
    .replace(/[#>*_`]/g, '')
    .trim();

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 1200,
    system: `You write tight 2-3 minute podcast intros that summarize a written
blog post. Voice: conversational, first-person plural ("we"), confident, no
hype. Skip URLs, image captions, statistics tables, and pricing grids — those
are the article's job, not the audio's. Open with a hook, give 3-4 takeaways
the listener walks away with, end with a short pointer to read the full post.
Output ONLY the script. No stage directions, no headers, no markdown.`,
    messages: [{
      role: 'user',
      content: `Title: ${title}\n\nFull post body:\n${cleaned}`,
    }],
  });
  return textOf(r).trim();
}

async function generateAudio(slug, title, body) {
  if (!process.env.XAI_API_KEY) {
    console.warn('[skip] XAI_API_KEY missing — skipping audio');
    return null;
  }
  const voiceId = process.env.XAI_VOICE_ID || 'e4kvdtv4zyv3';

  let script;
  try {
    script = await summarizeForPodcast(title, body);
    console.log(`[step4] podcast script: ${script.length} chars`);
  } catch (e) {
    console.warn(`[warn] podcast summary failed (${e.message}) — skipping audio`);
    return null;
  }

  const res = await fetch('https://api.x.ai/v1/tts', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.XAI_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ text: script, voice_id: voiceId, language: 'en' }),
  });
  if (!res.ok) {
    console.warn(`[warn] xAI TTS ${res.status}: ${await res.text()} — continuing without audio`);
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const audioName = `${today}-${slug}.mp3`;
  await fs.writeFile(path.join(AUDIO_DIR, audioName), buf);
  return `/audio/${audioName}`;
}

// ---------- glue ----------
function splitFrontmatter(doc) {
  const m = doc.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Drafted post missing frontmatter:\n${doc.slice(0, 400)}`);
  return { frontmatter: m[1], body: m[2] };
}

function formatYamlValue(v) {
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (typeof v === 'string') {
    // Bare ISO date — leave unquoted so YAML parses it as a Date.
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
    return JSON.stringify(v);
  }
  return JSON.stringify(v);
}

function patchFrontmatter(fm, patches) {
  let out = fm;
  for (const [k, v] of Object.entries(patches)) {
    const line = `${k}: ${formatYamlValue(v)}`;
    out = new RegExp(`^${k}:.*$`, 'm').test(out)
      ? out.replace(new RegExp(`^${k}:.*$`, 'm'), line)
      : `${out}\n${line}`;
  }
  return out;
}

async function main() {
  const existing = await listExistingKeywords();
  const keyword = await pickKeyword(existing);
  const slug = slugify(keyword);
  console.log(`[step1] keyword="${keyword}" slug=${slug}`);

  const styleRefs = await loadStyleRefs();

  let draft = await draftPost(keyword, styleRefs);
  console.log(`[step2] drafted ${draft.length} chars`);

  let audit = await auditPost(draft);
  let attempts = 1;
  while (!audit.pass && attempts < 3) {
    console.warn(`[step3] audit failed (attempt ${attempts}):`, audit.issues);
    draft = await draftPost(keyword, styleRefs, audit.issues.join('\n- '));
    audit = await auditPost(draft);
    attempts++;
  }
  if (!audit.pass) {
    console.warn(`[step3] proceeding despite remaining issues after 3 attempts:`, audit.issues);
  } else {
    console.log(`[step3] audit passed`);
  }

  let { frontmatter, body } = splitFrontmatter(draft);
  const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  const title = titleMatch ? titleMatch[1] : keyword;
  frontmatter = patchFrontmatter(frontmatter, {
    pubDate: today,
    targetKeyword: keyword,
    auditPassed: audit.pass,
    draft: false,
  });

  const heroPath = await generateHeroImage(slug, title, keyword);
  if (heroPath) {
    frontmatter = patchFrontmatter(frontmatter, { heroImage: heroPath });
    console.log(`[step3.5] wrote ${heroPath}`);
  }

  const audioPath = await generateAudio(slug, title, body);
  if (audioPath) {
    frontmatter = patchFrontmatter(frontmatter, { audio: audioPath });
    console.log(`[step4] wrote ${audioPath}`);
  }

  const filename = path.join(BLOG_DIR, `${today}-${slug}.md`);
  await fs.writeFile(filename, `---\n${frontmatter}\n---\n${body}`);
  console.log(`[done] ${filename}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
