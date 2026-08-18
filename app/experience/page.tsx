import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageGlow } from "@/components/page-glow";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description: "Career timeline from Mechanical Engineering through Backend, Data, and AI Systems.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="relative">
      <PageGlow />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Mechanical Engineering to Backend / AI Systems"
            description="Engineering breadth built through real transitions, not a single track."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-14">
            <ExperienceTimeline />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
