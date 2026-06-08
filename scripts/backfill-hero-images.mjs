#!/usr/bin/env node
// Generate hero images for every blog post that's missing `heroImage:` in
// frontmatter. One-off — run via the backfill-hero-images workflow.

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOG_DIR  = 'src/content/blog';
const IMAGE_DIR = 'public/images';

if (!process.env.XAI_API_KEY) {
  console.error('XAI_API_KEY missing'); process.exit(1);
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function generate(slug, title, keyword) {
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
    console.warn(`[skip] ${slug}: xAI ${res.status} ${await res.text()}`);
    return null;
  }
  const json = await res.json();
  const url = json?.data?.[0]?.url;
  if (!url) { console.warn(`[skip] ${slug}: no url in response`); return null; }
  const imgRes = await fetch(url);
  if (!imgRes.ok) { console.warn(`[skip] ${slug}: download ${imgRes.status}`); return null; }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const imgName = `${slug}.jpg`;
  await fs.writeFile(path.join(IMAGE_DIR, imgName), buf);
  return `/images/${imgName}`;
}

function patchFrontmatter(fm, key, value) {
  const line = `${key}: "${value}"`;
  if (new RegExp(`^${key}:.*$`, 'm').test(fm)) {
    return fm.replace(new RegExp(`^${key}:.*$`, 'm'), line);
  }
  return `${fm}\n${line}`;
}

async function main() {
  const files = (await fs.readdir(BLOG_DIR))
    .filter(f => f.endsWith('.md'))
    .sort();

  for (const f of files) {
    const fullSlug = f.replace(/\.md$/, '');
    const md = await fs.readFile(path.join(BLOG_DIR, f), 'utf8');
    const fmMatch = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fmMatch) { console.warn(`[skip] ${f}: no frontmatter`); continue; }
    const [, frontmatter, body] = fmMatch;

    if (/^heroImage:\s*\S/m.test(frontmatter)) {
      const ref = frontmatter.match(/^heroImage:\s*["']?(.+?)["']?\s*$/m)[1];
      const refPath = ref.startsWith('/') ? path.join('public', ref) : ref;
      if (await fileExists(refPath)) {
        console.log(`[ok]   ${f}: already has hero (${ref})`);
        continue;
      }
      console.log(`[fix]  ${f}: heroImage points to missing file ${ref}, regenerating`);
    } else {
      console.log(`[gen]  ${f}: no heroImage, generating`);
    }

    const title = (frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m) || [])[1] || fullSlug;
    const keyword = (frontmatter.match(/^targetKeyword:\s*["']?(.+?)["']?\s*$/m) || [])[1] || title;

    const heroPath = await generate(fullSlug, title, keyword);
    if (!heroPath) continue;

    const newFm = patchFrontmatter(frontmatter, 'heroImage', heroPath);
    await fs.writeFile(path.join(BLOG_DIR, f), `---\n${newFm}\n---\n${body}`);
    console.log(`[done] ${f}: ${heroPath}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
