export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

// Empty until the first post is written. Architecture is ready — see /blog and /blog/[slug].
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
