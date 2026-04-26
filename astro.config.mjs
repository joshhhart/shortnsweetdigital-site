import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const SITE_URL = 'https://joshhhart.github.io/agentic-jimmy-site';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: true,
      policy: [{ userAgent: '*', allow: '/' }],
    }),
  ],
});
