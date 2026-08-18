import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-8px_var(--accent)]"
    >
      <p className="text-xs font-medium tracking-wide text-accent uppercase">
        {project.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techHighlights.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
        View case study
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
