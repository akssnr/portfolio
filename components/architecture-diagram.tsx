export function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <ol className="flex flex-col">
        {nodes.map((node, i) => (
          <li key={node} className="relative flex flex-col items-center">
            <div className="w-full max-w-xs rounded-lg border border-border bg-background px-4 py-3 text-center text-sm font-medium text-foreground">
              {node}
            </div>
            {i < nodes.length - 1 ? (
              <div className="relative h-8 w-px bg-border">
                <span
                  className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-accent motion-safe:animate-diagram-flow"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
