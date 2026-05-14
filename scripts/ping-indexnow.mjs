#!/usr/bin/env node
// Submit recently-modified URLs to IndexNow so Bing/Yandex/Microsoft pick up
// new posts within minutes instead of days. Google ignores IndexNow but the
// other engines respect it, and crawl signal flows downhill.

import { execSync } from 'node:child_process';

const HOST = 'shortnsweetdigital.com';
const KEY = '440324299b6a6a49452aec88249a7edd';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Files touched in the most recent commit.
const changed = execSync('git diff-tree --no-commit-id --name-only -r HEAD', { encoding: 'utf8' })
  .split('\n').filter(Boolean);

const urls = [];
for (const f of changed) {
  if (f.startsWith('src/content/blog/') && f.endsWith('.md')) {
    const slug = f.replace('src/content/blog/', '').replace(/\.md$/, '');
    urls.push(`https://${HOST}/blog/${slug}/`);
  }
  if (f === 'src/pages/index.astro') urls.push(`https://${HOST}/`);
  if (f === 'src/pages/blog/index.astro') urls.push(`https://${HOST}/blog/`);
  if (f === 'src/pages/about.astro') urls.push(`https://${HOST}/about/`);
}

if (urls.length === 0) {
  console.log('[indexnow] no eligible URLs changed; skipping');
  process.exit(0);
}

console.log(`[indexnow] submitting ${urls.length} URL(s):`);
urls.forEach((u) => console.log('  - ' + u));

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});
console.log(`[indexnow] status ${res.status}`);
if (!res.ok) {
  console.warn(await res.text());
  // Non-fatal — deploy already shipped.
  process.exit(0);
}
