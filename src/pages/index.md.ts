// GEO/AIO: markdown version of the homepage at /index.md.
import { staticPages, mdResponse } from '../lib/markdown-pages.mjs';

export function GET() {
  return mdResponse(staticPages.find((p) => p.slug === 'index')!.markdown);
}
