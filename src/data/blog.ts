import { getCollection } from 'astro:content';
import type { TranslationKey } from '../i18n/ui';

export const blogCategories: TranslationKey[] = [
  'blog.categories.n8n',
  'blog.categories.nifi'
];

export async function getBlogPosts() {
  const entries = await getCollection('blog');

  return entries
    .map(({ id, data }) => ({ id, ...data }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
