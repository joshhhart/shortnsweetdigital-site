import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
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
