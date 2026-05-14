import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { remarkInternalLinks } from './src/lib/remark-internal-links.mjs';
import { remarkAffiliateLinks } from './src/lib/remark-affiliate-links.mjs';

import react from '@astrojs/react';

const SITE_URL = 'https://shortnsweetdigital.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [remarkInternalLinks, remarkAffiliateLinks],
  },
  integrations: [sitemap(), robotsTxt({
    sitemap: true,
    policy: [{ userAgent: '*', allow: '/' }],
  }), react()],
});