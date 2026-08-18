import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { TechStackSection } from "@/components/tech-stack";
import { whatIBuild, philosophy } from "@/content/tech-stack";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="What I Build" title="Engineering domains" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Selected Work" title="Production systems and case studies" />
            <Link
              href="/projects"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-foreground sm:flex"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Technology" title="Tools I build production systems with" />
        <div className="mt-10">
          <TechStackSection />
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Engineering Philosophy" title="How I think about building systems" />
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
      </section>
    </>
  );
}
