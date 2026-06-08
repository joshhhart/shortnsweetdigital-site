#!/usr/bin/env node
// One-off: rewrite over-long titles (> 60 chars) and descriptions (> 155 chars)
// in existing blog posts so SERPs stop truncating them. Uses the Anthropic SDK
// for the rewrite — needs ANTHROPIC_API_KEY set.

import fs from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';

const BLOG_DIR = 'src/content/blog';
const MODEL = 'claude-haiku-4-5-20251001';
const TITLE_MAX = 60;
const DESC_MAX = 155;

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY missing'); process.exit(1);
}
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function extractFm(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : null;
}

function getField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  return m ? m[1] : '';
}

function setField(fm, key, value) {
  const line = `${key}: ${JSON.stringify(value)}`;
  return fm.replace(new RegExp(`^${key}:.*$`, 'm'), line);
}

async function rewrite(kind, original, keyword, max) {
  const system = `You are an SEO copy editor. Rewrite ${kind === 'title' ? 'titles' : 'meta descriptions'} so they fit Google's SERP display limit, keep the target keyword, and read naturally. No clickbait, no emoji, no padding phrases like "complete guide" / "in 2026" / "honest pick" unless they replace something already present. Reply with ONLY the rewritten ${kind}, no quotes, no preamble.`;
  const user = `Target keyword: ${keyword}
Hard ceiling: ${max} characters
Original (${original.length} chars): ${original}

Rewrite to <= ${max} chars while keeping the keyword present.`;

  const r = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 200,
    system,
    messages: [{ role: 'user', content: user }],
  });
  const text = r.content.filter(b => b.type === 'text').map(b => b.text).join('').trim()
    .replace(/^["']|["']$/g, '');
  return text;
}

function clip(s, max) {
  if (s.length <= max) return s;
  const window = s.slice(0, max);
  const lastBreak = Math.max(window.lastIndexOf(' '), window.lastIndexOf('—'), window.lastIndexOf(':'));
  const cutAt = lastBreak > max - 20 ? lastBreak : max;
  return s.slice(0, cutAt).replace(/[\s—:.,;]+$/, '');
}

async function main() {
  const files = (await fs.readdir(BLOG_DIR)).filter(f => f.endsWith('.md'));
  let touched = 0;
  for (const f of files) {
    const full = path.join(BLOG_DIR, f);
    const md = await fs.readFile(full, 'utf8');
    const split = extractFm(md);
    if (!split) continue;
    let { fm, body } = split;

    const title = getField(fm, 'title');
    const description = getField(fm, 'description');
    const keyword = getField(fm, 'targetKeyword') || title;
    let changed = false;

    if (title.length > TITLE_MAX) {
      let rewritten = await rewrite('title', title, keyword, TITLE_MAX);
      if (rewritten.length > TITLE_MAX) rewritten = clip(rewritten, TITLE_MAX);
      console.log(`[title] ${f}\n  was (${title.length}): ${title}\n  now (${rewritten.length}): ${rewritten}`);
      fm = setField(fm, 'title', rewritten);
      changed = true;
    }
    if (description.length > DESC_MAX) {
      let rewritten = await rewrite('description', description, keyword, DESC_MAX);
      if (rewritten.length > DESC_MAX) rewritten = clip(rewritten, DESC_MAX);
      console.log(`[desc]  ${f}\n  was (${description.length}): ${description}\n  now (${rewritten.length}): ${rewritten}`);
      fm = setField(fm, 'description', rewritten);
      changed = true;
    }
    if (changed) {
      await fs.writeFile(full, `---\n${fm}\n---\n${body}`);
      touched++;
    }
  }
  console.log(`\ndone — rewrote ${touched} file(s)`);
}

main().catch(e => { console.error(e); process.exit(1); });
