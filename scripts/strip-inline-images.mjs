#!/usr/bin/env node
// Strip inline image markdown from every committed blog post body. The hero
// image is rendered by the layout; inline images were placeholder Unsplash
// URLs the LLM hallucinated, identical across every post.

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOG_DIR = 'src/content/blog';

async function main() {
  const files = (await fs.readdir(BLOG_DIR)).filter((f) => f.endsWith('.md'));
  let touched = 0;
  for (const f of files) {
    const full = path.join(BLOG_DIR, f);
    const md = await fs.readFile(full, 'utf8');
    const m = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!m) continue;
    const [, fm, body] = m;
    // Remove standalone image lines and shrink consecutive blank lines.
    const cleaned = body
      .replace(/^\s*!\[[^\]]*]\([^)]+\)\s*$/gm, '')
      .replace(/\n{3,}/g, '\n\n');
    if (cleaned === body) continue;
    await fs.writeFile(full, `---\n${fm}\n---\n${cleaned}`);
    console.log(`[stripped] ${f}`);
    touched++;
  }
  console.log(`done — touched ${touched} file(s)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
