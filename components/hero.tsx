import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { HeroVisual } from "@/components/hero-visual";
import { SplitText } from "@/components/split-text";
import { AuroraBackground } from "@/components/aurora-background";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:flex-row lg:items-center lg:pb-28 lg:pt-32">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium tracking-wide text-accent uppercase">
            {siteConfig.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <SplitText text="I build backend systems, AI-powered applications, and production infrastructure." />
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{siteConfig.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        <div className="w-full lg:flex-1">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
