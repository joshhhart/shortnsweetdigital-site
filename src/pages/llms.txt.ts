// GEO/AIO: /llms.txt per the llmstxt.org spec — a curated markdown index of
// the site for AI crawlers and answer engines. Every entry links to the
// markdown (.md) version of the page.
import { getCollection } from 'astro:content';
import { staticPages, SITE_URL, SITE_NAME, SITE_SUMMARY, mdResponse } from '../lib/markdown-pages.mjs';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const comparisons = posts.filter((p) => /\bvs\b|vrs/i.test(p.data.targetKeyword || p.id));
  const guides = posts.filter((p) => !comparisons.includes(p));

  const postLine = (p: any) =>
    `- [${p.data.title}](${SITE_URL}/blog/${p.id}.md): ${p.data.description}`;

  const body = `# ${SITE_NAME}

> ${SITE_SUMMARY}

Pricing: Starter $97/mo (one account), Unlimited $297/mo (unlimited client sub-accounts), SaaS Pro $497/mo (white-label reseller with Stripe billing). All plans include a 14-day free trial with month-to-month billing and no long-term contracts. Founded by Josh Hart; serves the US.

Every page on this site is also available as clean markdown: append \`.md\` to the page URL without its trailing slash (e.g. ${SITE_URL}/pricing.md, ${SITE_URL}/blog/<slug>.md). The complete site content in one file: ${SITE_URL}/llms-full.txt

## Main pages

${staticPages.map((p) => `- [${p.title}](${SITE_URL}/${p.slug}.md): ${p.description}`).join('\n')}

## GoHighLevel comparisons

${comparisons.map(postLine).join('\n')}

## Guides & playbooks

${guides.map(postLine).join('\n')}

## Optional

- [Blog RSS feed](${SITE_URL}/rss.xml)
- [Sitemap](${SITE_URL}/sitemap-index.xml)
`;

  return mdResponse(body);
}
