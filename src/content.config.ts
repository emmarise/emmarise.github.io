import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(['active', 'experimenting', 'shipped']),
    tech: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    phase: z.enum(['idea', 'building', 'alpha', 'shipped']).default('building'),
    featured: z.boolean().default(false),
    stars: z.number().default(0),
    lastCommit: z.string().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['travel', 'food', 'pets']),
    date: z.coerce.date(),
    coverImage: z.string(),
    images: z.array(z.string()).default([]),
    location: z.string().optional(),
  }),
});

export const collections = { projects, stories };
