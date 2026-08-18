const nodes = [
  { id: "api", label: "API", x: 20, y: 20 },
  { id: "cache", label: "Cache", x: 80, y: 15 },
  { id: "db", label: "Database", x: 15, y: 55 },
  { id: "queue", label: "Queue", x: 55, y: 50 },
  { id: "ai", label: "AI", x: 85, y: 55 },
  { id: "infra", label: "Infra", x: 45, y: 85 },
];

const edges: [string, string][] = [
  ["api", "cache"],
  ["api", "db"],
  ["api", "queue"],
  ["queue", "ai"],
  ["db", "infra"],
  ["queue", "infra"],
];

export function HeroVisual() {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card"
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {edges.map(([a, b], i) => {
          const from = byId[a];
          const to = byId[b];
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--border)"
              strokeWidth="0.4"
              className="motion-safe:animate-pulse"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: "4s" }}
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}
