import type { Project } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project, i) => (
        <ScrollReveal key={project.slug} delay={(i % 2) * 0.08} className="h-full">
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
