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
  'blog.categories.ai',
  'blog.categories.architecture',
  'blog.categories.nifi',
  'blog.categories.career',
];

export const blogPosts: BlogPost[] = [
  { id: 'apache-nifi-kafka', titleKey: 'blog.posts.6.title', descriptionKey: 'blog.posts.6.description', categoryKey: 'blog.categories.nifi', publishedAt: '2026-08-20', featured: true, href: '/blog/nifi' },
  { id: 'agentes-llm-produccion', titleKey: 'blog.posts.0.title', descriptionKey: 'blog.posts.0.description', categoryKey: 'blog.categories.ai', publishedAt: '2026-07-24' },
  { id: 'arquitectura-limpia-apis', titleKey: 'blog.posts.1.title', descriptionKey: 'blog.posts.1.description', categoryKey: 'blog.categories.architecture', publishedAt: '2026-06-18' },
  { id: 'microservicios-con-criterio', titleKey: 'blog.posts.2.title', descriptionKey: 'blog.posts.2.description', categoryKey: 'blog.categories.nifi', publishedAt: '2026-05-30' },
  { id: 'ingeniero-t-shaped', titleKey: 'blog.posts.5.title', descriptionKey: 'blog.posts.5.description', categoryKey: 'blog.categories.career', publishedAt: '2026-02-16' },
];
