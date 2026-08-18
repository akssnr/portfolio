import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/experience-timeline";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description: "Career timeline from Mechanical Engineering through Backend, Data, and AI Systems.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Mechanical Engineering to Backend / AI Systems"
        description="Engineering breadth built through real transitions, not a single track."
      />
      <div className="mt-14">
        <ExperienceTimeline />
      </div>
    </div>
  );
}
