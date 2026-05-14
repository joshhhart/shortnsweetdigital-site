#!/usr/bin/env node
// Rewrite every gohighlevel.com link in src/content/blog/*.md to include
// fp_ref=shortnsweet53. The remark plugin handles this at build time too,
// but rewriting the source means the affiliate code is visible in the
// authored markdown and any future migration.

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOG_DIR = 'src/content/blog';
const AFFILIATE = 'shortnsweet53';
const HOSTS = /^(?:www\.|app\.)?gohighlevel\.com$/i;

function withAffiliate(href) {
  try {
    const u = new URL(href);
    if (!HOSTS.test(u.hostname)) return href;
    if (u.searchParams.get('fp_ref')) return href;
    u.searchParams.set('fp_ref', AFFILIATE);
    return u.toString();
  } catch {
    return href;
  }
}

async function main() {
  const files = (await fs.readdir(BLOG_DIR)).filter((f) => f.endsWith('.md'));
  let touched = 0, links = 0;
  for (const f of files) {
    const full = path.join(BLOG_DIR, f);
    const md = await fs.readFile(full, 'utf8');
    let count = 0;
    // Markdown links: [text](url)
    let next = md.replace(/(\[[^\]]+\])\((https?:\/\/[^)\s]+)\)/g, (m, label, url) => {
      const updated = withAffiliate(url);
      if (updated !== url) count++;
      return `${label}(${updated})`;
    });
    // Raw URLs in prose: <https://...> or bare URLs
    next = next.replace(/<(https?:\/\/[^>]+)>/g, (m, url) => {
      const updated = withAffiliate(url);
      if (updated !== url) count++;
      return `<${updated}>`;
    });
    if (count === 0) continue;
    await fs.writeFile(full, next);
    console.log(`[fixed] ${f}: ${count} link(s)`);
    touched++;
    links += count;
  }
  console.log(`done — touched ${touched} file(s), rewrote ${links} link(s)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
