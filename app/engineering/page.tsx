import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { EngineeringGraph } from "@/components/engineering-graph";
import { PageGlow } from "@/components/page-glow";
import { ScrollReveal } from "@/components/scroll-reveal";
import { whatIBuild, philosophy } from "@/content/tech-stack";

export const metadata: Metadata = buildMetadata({
  title: "Engineering",
  description: "How systems fit together — from frontend to infrastructure — and how I think about building them.",
  path: "/engineering",
});

export default function EngineeringPage() {
  return (
    <div className="relative">
      <PageGlow />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Engineering"
            title="What I build, and how the pieces connect"
            description="Hover a layer to see what it's made of."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-14">
            <EngineeringGraph />
          </div>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-8px_var(--accent)]">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-14">
          <ScrollReveal>
            <SectionHeading eyebrow="Philosophy" title="How I think about building systems" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {philosophy.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
