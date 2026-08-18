import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/content/projects";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Case studies across backend systems, AI/LLM applications, data engineering, and automation.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies"
        description="Production systems and engineering work, in detail — problem, architecture, decisions, and outcome."
      />
      <div className="mt-14">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
