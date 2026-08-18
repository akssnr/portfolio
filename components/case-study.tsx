import type { Project } from "@/content/projects";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { SectionHeading } from "@/components/section-heading";

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12 first:border-t-0 first:pt-0">
      <p className="text-xs font-medium tracking-wide text-accent uppercase">{index}</p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground">{title}</h2>
      <div className="mt-5 max-w-3xl">{children}</div>
    </section>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <header className="mb-4">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {project.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.shortDescription}
        </p>
      </header>

      <Section index="01" title="Overview">
        <p className="text-base leading-relaxed text-muted">{project.overview}</p>
      </Section>

      <Section index="02" title="Challenge">
        <p className="text-base leading-relaxed text-muted">{project.challenge}</p>
      </Section>

      <Section index="03" title="Architecture">
        <p className="mb-6 text-base leading-relaxed text-muted">{project.architectureNote}</p>
        <ArchitectureDiagram nodes={project.diagram} />
      </Section>

      <Section index="04" title="Implementation">
        <ul className="flex flex-col gap-3">
          {project.implementation.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section index="05" title="Technologies">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section index="06" title="Engineering Decisions">
        <div className="flex flex-col gap-6">
          {project.decisions.map((d) => (
            <div key={d.question}>
              <p className="font-medium text-foreground">{d.question}</p>
              <p className="mt-2 text-base leading-relaxed text-muted">{d.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="07" title="Reliability">
        <ul className="flex flex-col gap-3">
          {project.reliability.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section index="08" title="Outcome">
        <p className="text-base leading-relaxed text-muted">{project.outcome}</p>
      </Section>

      <div className="mt-4 border-t border-border pt-10">
        <SectionHeading title="More work" className="mb-6" />
      </div>
    </article>
  );
}
