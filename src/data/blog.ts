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
  'blog.categories.n8n',
  'blog.categories.nifi'
];

export const blogPosts: BlogPost[] = [
  { id: 'n8n-workflow-traceability', titleKey: 'blog.posts.7.title', descriptionKey: 'blog.posts.7.description', categoryKey: 'blog.categories.n8n', publishedAt: '2026-10-04', href: '/blog/n8n' },
  { id: 'apache-nifi-kafka', titleKey: 'blog.posts.6.title', descriptionKey: 'blog.posts.6.description', categoryKey: 'blog.categories.nifi', publishedAt: '2026-08-20', featured: true, href: '/blog/nifi' }
];
