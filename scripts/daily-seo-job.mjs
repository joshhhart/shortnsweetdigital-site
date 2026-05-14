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
import sharp from 'sharp';

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

// Content category rotation. Comparisons were dominating; rotating across these
// categories spreads our keyword footprint and stops the blog from reading
// like seven variations of one post.
const CATEGORIES = [
  {
    id: 'comparison',
    label: 'Comparison',
    desc: 'Head-to-head "X vs Y" between GoHighLevel and another platform.',
    examples: ['gohighlevel vs hubspot', 'gohighlevel vs activecampaign', 'yext vs synup vs uberall'],
  },
  {
    id: 'use-case',
    label: 'Vertical use case',
    desc: 'GoHighLevel for a specific industry. High-intent local search.',
    examples: ['gohighlevel for chiropractors', 'gohighlevel for med spas', 'gohighlevel for real estate agents', 'gohighlevel for hvac companies'],
  },
  {
    id: 'how-to',
    label: 'How-to / tutorial',
    desc: 'Specific GoHighLevel feature setup or workflow tutorial.',
    examples: ['how to set up gohighlevel sub-accounts', 'how to white-label gohighlevel', 'gohighlevel saas mode setup', 'gohighlevel calendar automation setup'],
  },
  {
    id: 'migration',
    label: 'Migration guide',
    desc: 'How to switch from another platform to GoHighLevel.',
    examples: ['migrate from mailchimp to gohighlevel', 'migrate from hubspot to gohighlevel', 'export contacts from activecampaign to gohighlevel'],
  },
  {
    id: 'pricing',
    label: 'Pricing / ROI',
    desc: 'Pricing breakdown, ROI math, or "is X worth it" search intent.',
    examples: ['gohighlevel pricing 2026', 'is gohighlevel worth it', 'gohighlevel saas pro vs unlimited'],
  },
  {
    id: 'agency-playbook',
    label: 'Agency playbook',
    desc: 'Tactics specifically for agencies running GoHighLevel under white-label.',
    examples: ['how to price gohighlevel for clients', 'gohighlevel white-label client onboarding', 'gohighlevel agency snapshot templates'],
  },
  {
    id: 'integration',
    label: 'Integration guide',
    desc: 'Connecting GoHighLevel to other tools (Stripe, Zapier, Make, etc).',
    examples: ['gohighlevel stripe integration', 'gohighlevel zapier setup', 'gohighlevel make.com automation'],
  },
  {
    id: 'feature-deep-dive',
    label: 'Feature deep dive',
    desc: 'One GoHighLevel feature explained at depth.',
    examples: ['gohighlevel workflows explained', 'gohighlevel pipelines tutorial', 'gohighlevel ai assistant guide'],
  },
];

// Look at the most recent posts and pick a category that hasn't been used
// lately. Falls back to a deterministic round-robin if classification is fuzzy.
async function pickCategory() {
  const files = (await fs.readdir(BLOG_DIR))
    .filter((f) => f.endsWith('.md'))
    .sort()
    .reverse()
    .slice(0, 8);
  const recent = new Set();
  for (const f of files) {
    const md = await fs.readFile(path.join(BLOG_DIR, f), 'utf8');
    const kw = (md.match(/^targetKeyword:\s*["']?(.+?)["']?\s*$/m) || [])[1] || '';
    const k = kw.toLowerCase();
    if (/\bvs\b/.test(k)) recent.add('comparison');
    else if (/\bfor\b/.test(k) && !/^how/.test(k)) recent.add('use-case');
    else if (/^how to/.test(k) || /\bsetup\b|\btutorial\b/.test(k)) recent.add('how-to');
    else if (/\bmigrate|migration|switch from|export from\b/.test(k)) recent.add('migration');
    else if (/pricing|worth it|cost/.test(k)) recent.add('pricing');
    else if (/agency|white.?label|snapshot|reseller/.test(k)) recent.add('agency-playbook');
    else if (/integration|integrate|stripe|zapier|make\.com/.test(k)) recent.add('integration');
    else if (/workflow|pipeline|feature|explained|deep dive/.test(k)) recent.add('feature-deep-dive');
  }
  // Prefer a category not used in the last 8 posts.
  const unused = CATEGORIES.filter((c) => !recent.has(c.id));
  const pool = unused.length > 0 ? unused : CATEGORIES;
  return pool[Math.floor(Math.random() * pool.length)];
}

async function pickKeyword(existing) {
  if (process.env.KEYWORD_OVERRIDE) return process.env.KEYWORD_OVERRIDE;

  const seoSkill = await loadSkill('claude-seo', 'skills', 'seo');
  const category = await pickCategory();
  console.log(`[step1] category=${category.id}`);

  const system = `You are an SEO strategist for Short n Sweet Digital, a GoHighLevel
white-label agency for small businesses and other marketing agencies. Use the
following SEO skill instructions to guide your selection:

${seoSkill}

TODAY'S CATEGORY: ${category.label}
What that means: ${category.desc}
Example keywords in this category (for shape, not to copy verbatim):
${category.examples.map((e) => '  ' + e).join('\n')}

Pick a high-intent keyword that fits THIS category. Do not default to a
"gohighlevel vs ..." comparison unless the category is "Comparison".

Output ONLY the chosen keyword on a single line. No preamble, no explanation.

CRITICAL FORMAT RULES (any violation = your output is invalid):
- All lowercase.
- The word "versus" must be written as "vs". NEVER "vrs", "vrs.", "vs.", "verus", "verses".
- No quotes, no punctuation at the end, no parentheses.
- 3-8 words.`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 64,
    system,
    messages: [{
      role: 'user',
      content: `Pick the next high-intent keyword we should target in the "${category.label}" category. Must NOT duplicate any of these we have already covered:\n${existing.map(k => `- ${k}`).join('\n')}\n\nReturn one keyword that fits today's category.`,
    }],
  });
  return textOf(r).trim()
    .replace(/^["']|["']$/g, '')
    .toLowerCase()
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

Output format: the response MUST begin with the literal three characters \`---\`
on the first line (the YAML frontmatter opener) and end with the last line of
the post body. NO code fences anywhere — not \`\`\`yaml, not \`\`\`markdown, not \`\`\`.
NO commentary before or after. NO preamble like "Here is the post:". The first
byte of your reply is \`-\`.

Hard rules for the body:
- Do NOT include any inline image markdown. No \`![alt](url)\`. The hero image
  is rendered automatically by the layout, and a section image will be injected
  programmatically after the draft is written. Posting stock-photo URLs from
  Unsplash or similar is forbidden.
- Do NOT invent statistics. If you cite a number, link to the source.
- Use H2 (\`##\`) for top-level sections so the table of contents picks them up.
- AFFILIATE LINKS: Every link to gohighlevel.com (any path, any subdomain) MUST
  include the query parameter \`fp_ref=shortnsweet53\`. Example:
  \`https://www.gohighlevel.com/pricing?fp_ref=shortnsweet53\`. This applies to
  citation links and CTAs alike. Missing it costs us revenue.

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
    `Match the post structure to the keyword's intent. If the keyword is a comparison (X vs Y), use the comparison shape. If it's a how-to, use numbered steps. If it's a use case for a specific industry, lead with the vertical's problems and how GHL solves them. If it's a migration guide, structure as a step-by-step switch playbook. Do not force every post into a "vs" comparison frame.`,
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
  // xAI returns a square (~1024x1024); Open Graph wants 1.91:1 (1200x630).
  // Cover-crop so the same file serves both the hero AND the social card.
  const cropped = await sharp(buf)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  const imgName = `${today}-${slug}.jpg`;
  await fs.writeFile(path.join(IMAGE_DIR, imgName), cropped);
  return `/images/${imgName}`;
}

// ---------- Step 3.6: inline section images ----------
// Generate one xAI image per chosen H2, return body with image markdown
// inserted right after that H2.
async function generateInlineImages(slug, title, body) {
  if (!process.env.XAI_API_KEY) return body;

  // Find H2 headings; pick middle ones (skip intro and conclusion).
  const headings = [];
  const re = /^##\s+(.+)$/gm;
  let m;
  while ((m = re.exec(body)) !== null) {
    headings.push({ text: m[1].trim(), index: m.index, end: m.index + m[0].length });
  }
  if (headings.length < 4) return body; // not worth fragmenting a short post

  // Skip first and last H2; pick two evenly spaced from the rest.
  const candidates = headings.slice(1, -1);
  const picks = candidates.length <= 2
    ? candidates
    : [candidates[Math.floor(candidates.length / 3)], candidates[Math.floor((2 * candidates.length) / 3)]];

  // Walk pick list in reverse so indexes stay valid after splicing.
  let out = body;
  for (let i = picks.length - 1; i >= 0; i--) {
    const h = picks[i];
    const imgPath = await generateSectionImage(slug, title, h.text, i + 1);
    if (!imgPath) continue;
    const insertAt = h.end;
    const alt = h.text.replace(/"/g, '');
    out = out.slice(0, insertAt) + `\n\n![${alt}](${imgPath})\n` + out.slice(insertAt);
  }
  return out;
}

async function generateSectionImage(slug, postTitle, sectionTitle, idx) {
  const prompt = `Editorial section illustration for a marketing blog post about "${postTitle}". This section is titled "${sectionTitle}". Modern flat illustration, dark navy background (#0b1120), accent blues (#3b9bff, #5271FF), clean geometric shapes representing the concept, no text, no logos, 16:9 composition. Distinct from a hero image — more focused, conceptual.`;

  const res = await fetch('https://api.x.ai/v1/images/generations', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.XAI_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ model: 'grok-imagine-image', prompt, n: 1, response_format: 'url' }),
  });
  if (!res.ok) {
    console.warn(`[warn] xAI inline image ${idx} ${res.status}: ${await res.text().catch(() => '')}`);
    return null;
  }
  const json = await res.json();
  const url = json?.data?.[0]?.url;
  if (!url) return null;
  const imgRes = await fetch(url);
  if (!imgRes.ok) return null;
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const imgName = `${today}-${slug}-s${idx}.jpg`;
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
  // Strip wrapping code fences the model sometimes adds despite the prompt.
  // Examples we want to tolerate:
  //   ```yaml\n---\n...\n---\n...\n```
  //   ```\n---\n...\n---\n...\n```
  //   ```markdown\n---\n...\n---\n...\n```
  let cleaned = doc.trim();
  const fence = cleaned.match(/^```[a-zA-Z]*\n([\s\S]*?)\n```$/);
  if (fence) cleaned = fence[1].trim();
  // Some drafts have a leading BOM or stray newline before frontmatter.
  cleaned = cleaned.replace(/^﻿/, '').replace(/^\s+/, '');

  const m = cleaned.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Drafted post missing frontmatter:\n${cleaned.slice(0, 400)}`);
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
  // Defense in depth: strip any inline image markdown the model produced
  // despite the prompt rule. The hero image is enough.
  body = body.replace(/^\s*!\[[^\]]*]\([^)]+\)\s*$/gm, '').replace(/\n{3,}/g, '\n\n');
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

  // Inject 2 unique section images so the body isn't a wall of text.
  const beforeLen = body.length;
  body = await generateInlineImages(slug, title, body);
  if (body.length > beforeLen) console.log(`[step3.6] inline images inserted`);

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
