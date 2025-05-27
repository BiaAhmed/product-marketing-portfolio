import { defineCollection, z } from 'astro:content';

/* ───────────────────────────────────────── whoami ───────────────────────────────────────── */
const whoami = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

/* ───────────────────────────────────────── writing ──────────────────────────────────────── */
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

/* ───────────────────────────────────────── resource ──────────────────────────────────────── */
const resource = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    showTldr: z.boolean().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().optional(),
  }),
});

/* ───────────────────────────────────────── ship ─────────────────────────────────────────── */
const ship = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ship_count: z.number(),
    category: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().optional(),
  }),
});

/* ───────────────────────────────────────── contact ──────────────────────────────────────── */
const contact = defineCollection({
  type: 'content',               // markdown/MDX front‑matter for the contact page
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
  }),
});

/* ───────────────────────────────────────── export ───────────────────────────────────────── */
export const collections = { whoami, writing, resource, ship, contact };
