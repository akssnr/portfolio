import { timeline } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
      {timeline.map((entry) => (
        <li key={entry.title} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]" />
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            {entry.period}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">{entry.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{entry.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
