import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { EngineeringGraph } from "@/components/engineering-graph";
import { whatIBuild, philosophy } from "@/content/tech-stack";

export const metadata: Metadata = buildMetadata({
  title: "Engineering",
  description: "How systems fit together — from frontend to infrastructure — and how I think about building them.",
  path: "/engineering",
});

export default function EngineeringPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Engineering"
        title="What I build, and how the pieces connect"
        description="Hover a layer to see what it's made of."
      />

      <div className="mt-14">
        <EngineeringGraph />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whatIBuild.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-14">
        <SectionHeading eyebrow="Philosophy" title="How I think about building systems" />
        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {philosophy.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
