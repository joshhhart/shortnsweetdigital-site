#!/usr/bin/env node
// Daily SEO post pipeline — runs the same Claude Code skill packs the local
// LaunchAgent uses (claude-seo + claude-blog), but headlessly via the
// Claude Agent SDK so it can run in a GitHub Actions runner.
//
// Pipeline (mirrors README "How posts get published automatically"):
//   1. Pick keyword         (seo skill)
//   2. Draft post           (claude-blog skill)
//   3. Hero image           (banana-claude / Nano Banana — TODO, optional)
//   4. Audio                (xAI TTS — handled here, not by the agent)
//   5. 19-point audit       (seo-audit skill)
//   6. Smoke build          (workflow step, not here)
//   7. Commit & push        (workflow step, not here)

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { query } from '@anthropic-ai/claude-agent-sdk';

const BLOG_DIR  = 'src/content/blog';
const AUDIO_DIR = 'public/audio';

const today = new Date().toISOString().slice(0, 10);

// The SDK tries to spawn a bundled native binary under
// node_modules/@anthropic-ai/claude-agent-sdk-<platform>/claude. On Ubuntu
// runners that subpackage isn't always installed, so fall back to the global
// `claude` CLI we installed in the workflow.
let pathToClaudeCodeExecutable;
try {
  pathToClaudeCodeExecutable = execSync('which claude', { encoding: 'utf8' }).trim();
} catch {
  pathToClaudeCodeExecutable = undefined;
}

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

// Run the agent until it terminates. Returns concatenated assistant text.
async function runAgent(prompt) {
  let out = '';
  for await (const msg of query({
    prompt,
    options: {
      // Allow file ops + shell so the skills can write the .md, run audits, etc.
      allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep'],
      permissionMode: 'bypassPermissions',
      cwd: process.cwd(),
      pathToClaudeCodeExecutable,
    },
  })) {
    if (msg.type === 'assistant') {
      for (const block of msg.message.content) {
        if (block.type === 'text') out += block.text;
      }
    }
  }
  return out;
}

// ---------- Steps 1, 2, 5: orchestrated through the agent ----------
async function generateAndAuditPost(existingKeywords, keywordOverride) {
  const keywordLine = keywordOverride
    ? `Use this exact target keyword: "${keywordOverride}".`
    : `Pick the next high-intent keyword we have not yet covered. Already covered:\n${existingKeywords.map(k => `- ${k}`).join('\n')}`;

  const prompt = `You are running the Short n Sweet Digital daily SEO publishing pipeline.
Today's date is ${today}. The repository root is the current working directory.

Use the installed skills (claude-seo, claude-blog, and their sub-skills under
~/.claude/skills/seo-* and ~/.claude/skills/blog-*). Follow each skill's
instructions verbatim — do not improvise around them.

Steps:

1. KEYWORD
   ${keywordLine}

2. DRAFT
   Use the claude-blog skill to write a long-form post for that keyword.
   Site context: Short n Sweet Digital is a GoHighLevel white-label agency for
   small businesses and other agencies. Tone, length, and structure should
   match the existing posts in src/content/blog/ (read 2 of them first).

3. AUDIT
   Run the claude-seo 19-point audit (skills/seo-audit) on the draft.
   If the audit reports issues, FIX THEM YOURSELF and re-audit. Do not stop
   to ask the user. Do not list "recommended actions" as next steps — apply
   them. Iterate until the audit passes (no critical or high-severity items)
   or you have iterated 3 times. The bar is "publishable," not "perfect."

4. WRITE FILE
   Save the final post to src/content/blog/${today}-<slug>.md with frontmatter
   matching src/content/config.ts:
     - title (<= 70 chars)
     - description (<= 160 chars)
     - pubDate: ${today}
     - tags: [...]
     - targetKeyword: "<keyword>"
     - auditPassed: true
     - draft: false
   <slug> is the keyword, lowercased, non-alphanumerics replaced with hyphens.

5. REPORT
   When done, the LAST line of your final message MUST be exactly:
     RESULT: <slug>
   Where <slug> matches the filename you wrote. This line is mandatory —
   the pipeline will fail without it. Do not append anything after it.

Begin.`;

  const text = await runAgent(prompt);
  const m = text.match(/RESULT:\s*([a-z0-9-]+)/);
  if (m) return m[1];

  // Fallback: agent wrote a file but forgot the RESULT line. Find any post
  // dated today that was added during this run.
  const files = await fs.readdir(BLOG_DIR);
  const todays = files.filter(f => f.startsWith(`${today}-`) && f.endsWith('.md'));
  if (todays.length === 1) {
    const slug = todays[0].replace(`${today}-`, '').replace(/\.md$/, '');
    console.warn(`[warn] Agent did not emit RESULT, recovered slug from filesystem: ${slug}`);
    return slug;
  }
  console.error('Agent transcript:\n', text);
  throw new Error(
    `Agent did not emit RESULT: <slug>. Found ${todays.length} dated files for ${today}: ${todays.join(', ')}`,
  );
}

// ---------- Step 4: audio via xAI TTS ----------
async function generateAudio(slug) {
  if (!process.env.XAI_API_KEY) {
    console.warn('[skip] XAI_API_KEY missing');
    return;
  }
  const voiceId = process.env.XAI_VOICE_ID || 'jivoallzgwzv';

  const mdPath = path.join(BLOG_DIR, `${today}-${slug}.md`);
  const md = await fs.readFile(mdPath, 'utf8');
  const body = md.replace(/^---[\s\S]*?---\n/, '');
  const text = body.replace(/[#>*_`[\]()]/g, '').slice(0, 4500);

  const res = await fetch('https://api.x.ai/v1/tts', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.XAI_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ text, voice_id: voiceId, language: 'en' }),
  });
  if (!res.ok) throw new Error(`xAI TTS ${res.status}: ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const audioName = `${today}-${slug}.mp3`;
  await fs.writeFile(path.join(AUDIO_DIR, audioName), buf);

  const patched = md.replace(/^---\n([\s\S]*?)\n---/, (_, fm) => {
    const line = `audio: /audio/${audioName}`;
    const next = /^audio:.*$/m.test(fm) ? fm.replace(/^audio:.*$/m, line) : `${fm}\n${line}`;
    return `---\n${next}\n---`;
  });
  await fs.writeFile(mdPath, patched);
}

async function main() {
  const existing = await listExistingKeywords();
  const slug = await generateAndAuditPost(existing, process.env.KEYWORD_OVERRIDE);
  console.log(`[ok] post written: ${today}-${slug}`);
  await generateAudio(slug);
  console.log('[ok] done');
}

main().catch((e) => { console.error(e); process.exit(1); });
