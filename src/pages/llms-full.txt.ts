// GEO/AIO: /llms-full.txt — the entire site's content as one markdown file,
// for AI systems that prefer a single fetch over crawling.
import { getCollection } from 'astro:content';
import { staticPages, postToMarkdown, SITE_URL, SITE_NAME, SITE_SUMMARY, mdResponse } from '../lib/markdown-pages.mjs';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const parts = [
    `# ${SITE_NAME} — Full Site Content\n\n> ${SITE_SUMMARY}\n\nCanonical site: ${SITE_URL}/ · Index: ${SITE_URL}/llms.txt`,
    ...staticPages.map((p) => `<!-- Page: ${SITE_URL}${p.path} -->\n\n${p.markdown.trim()}`),
    ...posts.map((p) => `<!-- Post: ${SITE_URL}/blog/${p.id}/ -->\n\n${postToMarkdown(p).trim()}`),
  ];

  return mdResponse(parts.join('\n\n---\n\n') + '\n');
}
