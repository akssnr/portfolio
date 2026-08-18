import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `About ${siteConfig.name}, ${siteConfig.role} based in ${siteConfig.location}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow="About" title={siteConfig.name} />

      <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted">
        <p>
          I&apos;m a {siteConfig.role.toLowerCase()} based in {siteConfig.location}. My work spans
          backend development, data engineering, AI/LLM applications, automation, and production
          infrastructure — designing, building, deploying, and operating systems that have to keep
          working after the demo is over.
        </p>
        <p>
          My path here wasn&apos;t linear. I started in Mechanical Engineering (B.E., Rungta
          College of Engineering &amp; Technology, CSVTU, 2016), moved through operations, and
          transitioned into software engineering — then into backend, data, and AI systems as the
          work demanded it. That path shows up in how I approach engineering: understand the whole
          system before touching a part of it, and treat reliability as a first-class requirement,
          not an afterthought.
        </p>
        <p>
          I&apos;m currently an AI Developer at Kaycomm Services, building the semantic engine
          behind search, recommendations, and content understanding for UrbanPillar and
          CornerSpaces — alongside an AI-driven workflow website builder, LLM data pipelines, and
          the Docker/Portainer infrastructure it all runs on. Before that, at The CodeWise, I built
          AI-powered document parsing and summarization tools (LangChain, Weaviate) and scalable
          FastAPI backends, and owned the VPS/NGINX side of getting them into production. Alongside
          that: document-intelligence systems built on retrieval-augmented generation, large-scale
          batch data processing, and automation tooling for email and web-scale data collection.
        </p>
        <p>
          I care about systems that are simple enough to actually operate, reliable enough to trust
          under load, and built with the assumption that something will eventually fail — so the
          system needs a way to recover.
        </p>
      </div>
    </div>
  );
}
