import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro v6 Content Layer: the blog collection now uses the glob loader
// instead of the legacy `type: 'content'`. Entry ids are derived from the
// filename (e.g. 2026-05-04-foo.md -> "2026-05-04-foo"), matching the old
// slug behavior so all /blog/<slug>/ URLs stay identical.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Astro v6 enforces these as hard build errors (v4 only warned). The
    // SEO-ideal caps are title<=70 / description<=160, but enforcing them
    // here would fail the build on existing long posts. We keep generous
    // sanity bounds and handle real length trimming at generation time.
    title: z.string().max(140),
    description: z.string().max(260),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    audio: z.string().optional(), // path to /public/audio/*.mp3
    tags: z.array(z.string()).default([]),
    // Primary target keyword for this post — used by the audit skill
    targetKeyword: z.string().optional(),
    // Set to true only after the 19-point audit passes
    auditPassed: z.boolean().default(false),
    // Draft posts are excluded from the build in production
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
