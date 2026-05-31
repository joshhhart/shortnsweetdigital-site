import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { remarkInternalLinks } from './src/lib/remark-internal-links.mjs';
import { remarkAffiliateLinks } from './src/lib/remark-affiliate-links.mjs';

import react from '@astrojs/react';

const SITE_URL = 'https://shortnsweetdigital.com';

export default defineConfig({
  site: SITE_URL,
  // Canonicalize to trailing-slash URLs — matches build.format: 'directory'
  // and prevents Google indexing both /blog/foo and /blog/foo/ as duplicates.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [remarkInternalLinks, remarkAffiliateLinks],
  },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: true,
      // Explicit allow for every major search + AI crawler. Cloudflare's AI
      // Audit may still intercept at the edge — disable it in dashboard to
      // make this authoritative.
      policy: [
        { userAgent: '*', allow: '/' },
        // AI search engines / answer engines
        { userAgent: 'GPTBot',            allow: '/' },
        { userAgent: 'ChatGPT-User',      allow: '/' },
        { userAgent: 'OAI-SearchBot',     allow: '/' },
        { userAgent: 'ClaudeBot',         allow: '/' },
        { userAgent: 'Claude-Web',        allow: '/' },
        { userAgent: 'anthropic-ai',      allow: '/' },
        { userAgent: 'PerplexityBot',     allow: '/' },
        { userAgent: 'Perplexity-User',   allow: '/' },
        { userAgent: 'Google-Extended',   allow: '/' },
        { userAgent: 'Applebot-Extended', allow: '/' },
        { userAgent: 'Bytespider',        allow: '/' },
        { userAgent: 'CCBot',             allow: '/' },
        { userAgent: 'Amazonbot',         allow: '/' },
        { userAgent: 'meta-externalagent',allow: '/' },
        { userAgent: 'Diffbot',           allow: '/' },
        { userAgent: 'YouBot',            allow: '/' },
        { userAgent: 'cohere-ai',         allow: '/' },
      ],
    }),
    react(),
  ],
});