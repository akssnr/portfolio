import { techStack } from "@/content/tech-stack";

export function TechStackSection() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {techStack.map((group) => (
        <div key={group.domain}>
          <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            {group.domain}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
