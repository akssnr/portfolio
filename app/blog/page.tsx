import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Notes on backend architecture, AI/LLM engineering, and infrastructure.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading
        eyebrow="Blog"
        title="Engineering notes"
        description="Backend architecture, AI/LLM engineering, infrastructure, and production debugging."
      />

      <div className="mt-14">
        {blogPosts.length === 0 ? (
          <p className="text-sm text-muted">No posts yet — check back soon.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {blogPosts.map((post) => (
              <li key={post.slug} className="py-6">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
