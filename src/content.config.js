import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod"; // not from "astro:content": deprecated since Astro 6, removed in 8

const productsCollection = defineCollection({
    loader: file("src/data/products.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        price: z.number(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        rating: z.object({
            rate: z.number(),
            count: z.number(),
        }),
    }),
});

export const collections = { products: productsCollection };