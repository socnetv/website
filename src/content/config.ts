import { defineCollection,z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
// import { z } from "zod";

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

  
export const collections = {
	// news:  newsCollection,
	docs: defineCollection({ schema: docsSchema() }),
};
