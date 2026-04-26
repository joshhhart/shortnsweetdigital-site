// Postbuild: scan src/content/blog/, render the latest 6 posts into the
// homepage carousel placeholder in dist/index.html. SEO-friendly because the
// markup is in the static HTML (not JS-rendered).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const INDEX = join(ROOT, 'dist/index.html');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    fm[kv[1]] = v;
  }
  return fm;
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fmt(d) {
  // Force UTC interpretation so a YYYY-MM-DD frontmatter date doesn't shift
  // to the previous day in negative-offset timezones.
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

const posts = readdirSync(BLOG_DIR)
  .filter(f => f.endsWith('.md'))
  .map(f => {
    const md = readFileSync(join(BLOG_DIR, f), 'utf8');
    const fm = parseFrontmatter(md);
    if (!fm || fm.draft === 'true') return null;
    const slug = f.replace(/\.md$/, '');
    return { slug, title: fm.title, description: fm.description, pubDate: fm.pubDate, heroImage: fm.heroImage };
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  .slice(0, 6);

const cards = posts.map(p => `
  <a href="/blog/${escape(p.slug)}/" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;background:rgba(15,23,42,0.65);border:1px solid rgba(5,100,209,0.22);border-radius:16px;overflow:hidden;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease" onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='rgba(82,113,255,0.55)';this.style.boxShadow='0 16px 40px rgba(5,100,209,0.25)'" onmouseout="this.style.transform='';this.style.borderColor='rgba(5,100,209,0.22)';this.style.boxShadow=''">
    ${p.heroImage ? `<img src="${escape(p.heroImage)}" alt="${escape(p.title)}" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block">` : `<div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#0564D1,#5271FF);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:1.05rem;text-align:center;padding:0 20px;font-family:Open Sans,sans-serif">${escape(p.title.slice(0, 60))}</div>`}
    <div style="padding:22px 22px 24px;display:flex;flex-direction:column;gap:10px;flex:1;font-family:Open Sans,sans-serif">
      <time datetime="${escape(p.pubDate)}" style="color:#5271FF;font-size:0.78rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase">${fmt(p.pubDate)}</time>
      <h3 style="margin:0;font-size:1.18rem;line-height:1.3;color:#fff;font-weight:700">${escape(p.title)}</h3>
      <p style="margin:0;color:#cbd5e1;font-size:0.93rem;line-height:1.5;flex:1">${escape((p.description || '').slice(0, 140))}</p>
      <span style="color:#5271FF;font-weight:700;font-size:0.88rem;margin-top:4px">Read post →</span>
    </div>
  </a>`).join('');

const grid = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px">${cards}</div>`;

let html = readFileSync(INDEX, 'utf8');
if (!html.includes('BLOG_CAROUSEL_ITEMS')) {
  console.warn('[inject-blog-carousel] no BLOG_CAROUSEL_ITEMS marker in dist/index.html — skipping');
  process.exit(0);
}
html = html.replace('<!-- BLOG_CAROUSEL_ITEMS -->', grid);
writeFileSync(INDEX, html);
console.log(`[inject-blog-carousel] injected ${posts.length} posts into homepage carousel`);
