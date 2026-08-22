// GEO/AIO: raw-markdown version of every blog post at /blog/<slug>.md,
// sitting alongside the HTML route /blog/<slug>/. AI crawlers and answer
// engines get the clean source instead of parsing rendered HTML.
import { getCollection } from 'astro:content';
import { postToMarkdown, mdResponse } from '../../lib/markdown-pages.mjs';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export function GET({ props }: { props: { post: any } }) {
  return mdResponse(postToMarkdown(props.post));
}
