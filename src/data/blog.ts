import type { TranslationKey } from '../i18n/ui';

export interface BlogPost {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  categoryKey: TranslationKey;
  publishedAt: string;
  featured?: boolean;
  href?: string;
}

export const blogCategories: TranslationKey[] = [
  'blog.categories.nifi'
];

export const blogPosts: BlogPost[] = [
  { id: 'apache-nifi-kafka', titleKey: 'blog.posts.6.title', descriptionKey: 'blog.posts.6.description', categoryKey: 'blog.categories.nifi', publishedAt: '2026-08-20', featured: true, href: '/blog/nifi' }
];
