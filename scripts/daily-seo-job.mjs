#!/usr/bin/env node
// Daily SEO post pipeline — server-side port of scripts/daily-seo-job.sh.
//
// Mirrors the 7 LaunchAgent steps:
//   1. Pick a keyword
//   2. Draft the post
//   3. Generate hero image
//   4. Generate audio (ElevenLabs)
//   5. Run the 19-point audit
//   6. Smoke build (handled by the workflow, not here)
//   7. Commit & push (handled by the workflow, not here)
//
// Steps 1, 2, and 5 use the Anthropic API directly. Port the prompts from your
// existing claude-seo / claude-blog / banana-claude skills into the TODO blocks.

import fs from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-opus-4-7';
const BLOG_DIR = 'src/content/blog';
const AUDIO_DIR = 'public/audio';
const IMAGE_DIR = 'public/images';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function slugify(s) {
  return s.toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
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

// ---------- Step 1: keyword pick ----------
async function pickKeyword(existing) {
  if (process.env.KEYWORD_OVERRIDE) return process.env.KEYWORD_OVERRIDE;

  // TODO: paste the full claude-seo keyword-picker prompt here.
  const sys = `You are an SEO strategist for Short n Sweet Digital, a GoHighLevel
white-label agency. Pick ONE high-intent comparison keyword we have not yet
covered. Return only the keyword, no quotes, no commentary.`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 64,
    system: sys,
    messages: [{
      role: 'user',
      content: `Already covered keywords:\n${existing.join('\n')}\n\nPick the next one.`,
    }],
  });
  return r.content[0].text.trim();
}

// ---------- Step 2: draft ----------
async function draftPost(keyword) {
  // TODO: paste the full claude-blog drafting prompt here. Must return YAML
  // frontmatter (title, description, pubDate, tags, targetKeyword, draft:true,
  // auditPassed:false) followed by the markdown body.
  const sys = `You write long-form SEO posts for Short n Sweet Digital. Output
strict Astro frontmatter then markdown body. Set auditPassed:false, draft:true.`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 8000,
    system: sys,
    messages: [{ role: 'user', content: `Target keyword: ${keyword}\nDate: ${today}` }],
  });
  return r.content[0].text.trim();
}

// ---------- Step 3: hero image ----------
async function generateHeroImage(slug) {
  // TODO: port banana-claude / Nano Banana call here.
  // Save to: public/images/${today}-${slug}.png
  console.warn('[skip] hero image generation not implemented yet');
  return null;
}

// ---------- Step 4: audio ----------
async function generateAudio(slug, markdownBody) {
  if (!process.env.ELEVENLABS_API_KEY) {
    console.warn('[skip] ELEVENLABS_API_KEY missing');
    return null;
  }
  const voiceId = process.env.ELEVENLABS_VOICE_ID || 'JBFqnCBsd6RMkjVDRZzb';
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const text = markdownBody.replace(/[#>*_`[\]()]/g, '').slice(0, 4500);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': process.env.ELEVENLABS_API_KEY,
      'content-type': 'application/json',
      accept: 'audio/mpeg',
    },
    body: JSON.stringify({ text, model_id: 'eleven_turbo_v2_5' }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = path.join(AUDIO_DIR, `${today}-${slug}.mp3`);
  await fs.writeFile(out, buf);
  return `/audio/${today}-${slug}.mp3`;
}

// ---------- Step 5: 19-point audit ----------
async function runAudit(markdown) {
  // TODO: paste your 19-point audit prompt. Must return JSON: {pass: bool, issues: []}
  const sys = `Run the 19-point Short n Sweet SEO audit on the post. Reply with
strict JSON only: {"pass": boolean, "issues": string[]}.`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 2000,
    system: sys,
    messages: [{ role: 'user', content: markdown }],
  });
  const txt = r.content[0].text.trim();
  const json = txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1);
  return JSON.parse(json);
}

// ---------- glue ----------
function splitFrontmatter(doc) {
  const m = doc.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('Drafted post missing frontmatter');
  return { frontmatter: m[1], body: m[2] };
}

function patchFrontmatter(fm, patches) {
  let out = fm;
  for (const [k, v] of Object.entries(patches)) {
    const line = `${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`;
    out = out.match(new RegExp(`^${k}:.*$`, 'm'))
      ? out.replace(new RegExp(`^${k}:.*$`, 'm'), line)
      : `${out}\n${line}`;
  }
  return out;
}

async function main() {
  const existing = await listExistingKeywords();
  const keyword = await pickKeyword(existing);
  const slug = slugify(keyword);
  console.log(`keyword=${keyword} slug=${slug}`);

  const draft = await draftPost(keyword);
  let { frontmatter, body } = splitFrontmatter(draft);

  const audit = await runAudit(draft);
  if (!audit.pass) {
    console.error('Audit failed:', audit.issues);
    process.exit(2);
  }

  const audioPath = await generateAudio(slug, body);
  const heroPath  = await generateHeroImage(slug);

  frontmatter = patchFrontmatter(frontmatter, {
    pubDate: today,
    targetKeyword: keyword,
    auditPassed: true,
    draft: false,
    ...(audioPath && { audio: audioPath }),
    ...(heroPath && { heroImage: heroPath }),
  });

  const filename = path.join(BLOG_DIR, `${today}-${slug}.md`);
  await fs.writeFile(filename, `---\n${frontmatter}\n---\n${body}`);
  console.log(`wrote ${filename}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
