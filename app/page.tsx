import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { TechStackSection } from "@/components/tech-stack";
import { ScrollReveal } from "@/components/scroll-reveal";
import { whatIBuild, philosophy } from "@/content/tech-stack";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal>
          <SectionHeading eyebrow="What I Build" title="Engineering domains" />
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading eyebrow="Selected Work" title="Production systems and case studies" />
              <Link
                href="/projects"
                className="hidden shrink-0 items-center gap-1 text-sm font-medium text-foreground sm:flex"
              >
                All projects
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-3.5" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal>
          <SectionHeading eyebrow="Technology" title="Tools I build production systems with" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-10">
            <TechStackSection />
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <ScrollReveal>
            <SectionHeading eyebrow="Engineering Philosophy" title="How I think about building systems" />
          </ScrollReveal>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {philosophy.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Have a system to build, automate, or scale?
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
