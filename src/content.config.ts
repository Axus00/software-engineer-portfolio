import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { defaultLang, ui, type TranslationKey } from "./i18n/ui";

const translationKey = z.custom<TranslationKey>(
    (value) => typeof value === 'string' && value in ui[defaultLang],
    { error: 'Translation key not found in src/i18n/ui.ts' },
);

const logo = z.object({ name: z.string(), svg: z.string(), background: z.string() });

const projects = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: './src/components/content/projects'}),
    schema: z.object({
        title: z.string(),
        descriptionKey: translationKey,
        order: z.number(),
        repository: z.url().optional(),
        demoUrl: z.url().optional(),
        image: z.string(),
        technologies: z.array(z.object({ name: z.string(), svg: z.string(), color: z.string() })),
        isPublic: z.boolean().optional(),
        isReady: z.boolean().optional(),
        isEarlyProject: z.boolean().optional(),
    })
})

const blog = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: './src/components/content/blog'}),
    schema: z.object({
        titleKey: translationKey,
        descriptionKey: translationKey,
        categoryKey: translationKey,
        publishedAt: z.iso.date(),
        featured: z.boolean().optional(),
        href: z.string().optional(),
    })
})

const experiences = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: './src/components/content/experiences'}),
    schema: z.object({
        roleKey: translationKey,
        company: z.string(),
        companyLogo: logo,
        periodKey: translationKey,
        descriptionKey: translationKey,
        tagKey: translationKey.optional(),
        order: z.number(),
        subItems: z.array(z.object({
            labelKey: translationKey,
            contentKey: translationKey,
            subLogo: logo.optional(),
        })).optional(),
    })
})

const messages = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: './src/components/content/messages'}),
    schema: ({ image }) => z.object({
        messageKey: translationKey,
        userName: z.string(),
        positionKey: translationKey,
        photo: image(),
        year: z.number(),
        order: z.number(),
    })
})

export const collections = { projects, blog, experiences, messages };
