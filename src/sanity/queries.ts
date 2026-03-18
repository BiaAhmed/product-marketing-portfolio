export interface SanitySlug {
  current: string;
}

export interface SanityBlogPost {
  title: string;
  slug: SanitySlug;
  publishedAt?: string;
  excerpt?: string;
  coverImage?: unknown;
  tags?: string[];
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityCaseStudy {
  title: string;
  slug: SanitySlug;
  company?: string;
  companyLogo?: unknown;
  category?: string;
  tags?: string[];
  challenge?: string;
  approach?: string;
  action?: string;
  results?: string;
  keyLearning?: string;
  metrics?: { label?: string; value?: string; description?: string }[];
  testimonial?: { quote?: string; author?: string; role?: string; image?: unknown };
  howIDidIt?: string[];
  body?: unknown[];
  order?: number;
  excerpt?: string;
  coverImage?: unknown;
}

export interface SanityResource {
  title: string;
  slug: SanitySlug;
  description?: string;
  resourceType?: string;
  link?: string;
  body?: unknown[];
  publishedAt?: string;
  tags?: string[];
  comingSoon?: boolean;
}

export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  title, slug, publishedAt, excerpt, coverImage, tags
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  title, slug, publishedAt, excerpt, coverImage, tags, body, seoTitle, seoDescription
}`;

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(order asc) {
  title, slug, company, companyLogo, category, tags,
  challenge, approach, action, results, keyLearning,
  metrics, testimonial, howIDidIt, body
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]`;

export const allResourcesQuery = `*[_type == "resource"] | order(publishedAt desc) {
  title, slug, description, resourceType, link, tags, comingSoon, body, publishedAt
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
