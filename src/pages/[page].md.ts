// GEO/AIO: markdown version of each static page at /<page>.md
// (e.g. /about.md, /pricing.md). Linked from each page's
// <link rel="alternate" type="text/markdown"> and from /llms.txt.
import { staticPages, mdResponse } from '../lib/markdown-pages.mjs';

export function getStaticPaths() {
  return staticPages
    .filter((p) => p.slug !== 'index')
    .map((p) => ({ params: { page: p.slug }, props: { markdown: p.markdown } }));
}

export function GET({ props }: { props: { markdown: string } }) {
  return mdResponse(props.markdown);
}
