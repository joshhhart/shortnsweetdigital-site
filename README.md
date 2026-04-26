# Short n Sweet Digital — site

Astro static site, deployed to GitHub Pages. New blog post every weekday,
published automatically by a LaunchAgent on Josh's Mac that runs
`scripts/daily-seo-job.sh` at 08:00 local.

## Layout

```
site/
├── astro.config.mjs             site URL + sitemap + robots.txt integrations
├── src/
│   ├── content/
│   │   ├── config.ts            blog schema (targetKeyword, auditPassed, etc.)
│   │   └── blog/                Markdown posts — one file per post
│   ├── layouts/
│   │   ├── BaseLayout.astro     html/head/SEO/OG/Twitter tags
│   │   └── BlogPost.astro       post template with JSON-LD, audio, CTA
│   ├── components/
│   │   ├── CTA.astro            GHL trial CTA with UTM tagging
│   │   └── AudioPlayer.astro    MP3 player for the podcast version
│   └── pages/
│       ├── index.astro          homepage with 6 latest posts
│       ├── blog/index.astro     full post index
│       ├── blog/[...slug].astro dynamic post routing
│       └── rss.xml.js           RSS feed
├── public/
│   ├── images/                  hero images (Nano Banana output)
│   ├── audio/                   ElevenLabs MP3s
│   └── favicon.svg
└── .github/workflows/deploy.yml GitHub Pages deploy on push to main
```

## Local dev

```bash
cd site
npm install
npm run dev    # http://localhost:4321
```

## First-time GitHub Pages setup

1. Push this repo to GitHub (e.g. `github.com/joshh/agentic-jimmy-site`).
2. In the repo's **Settings → Pages**, set **Source** to "GitHub Actions".
3. In **Settings → Environments → github-pages**, allow deploys from `main`.
4. The first push to `main` triggers `.github/workflows/deploy.yml`, which
   builds the site and deploys it.
5. Update `SITE_URL` in `astro.config.mjs` to your real domain (or the
   `<user>.github.io/<repo>` URL if you're not on a custom domain).

## Custom domain (optional)

1. Add a file `public/CNAME` containing just your domain, e.g.
   `agenticjimmy.com`.
2. In your DNS provider, add A records for GitHub Pages and/or a CNAME for
   `www`. GitHub's docs:
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. Enable HTTPS in **Settings → Pages** once the DNS resolves.

## Adding a post manually

Create `src/content/blog/YYYY-MM-DD-my-slug.md`:

```md
---
title: "Post title"
description: "Meta description, 140–160 chars."
pubDate: 2026-04-24
tags: ["ghl", "comparison"]
targetKeyword: "gohighlevel vs lovable"
heroImage: /images/my-slug.jpg
audio: /audio/my-slug.mp3
auditPassed: false
draft: false
---

Post body in Markdown.
```

Drafts (`draft: true`) are excluded from the build. The daily pipeline sets
`auditPassed: true` only after passing the 19-point claude-seo audit.

## How posts get published automatically

`scripts/daily-seo-job.sh` runs at 08:00 via LaunchAgent. It hands Claude
Code an orchestration prompt that:

1. Picks a keyword (claude-seo)
2. Drafts the post (claude-blog)
3. Generates the hero image (banana-claude / Nano Banana)
4. Generates the audio (ElevenLabs API)
5. Runs the 19-point audit (claude-seo)
6. `npm run build` as a smoke test
7. `git commit && git push` — GitHub Action deploys

Logs: `~/Library/Logs/agentic-jimmy-seo/YYYY-MM-DD.log`
