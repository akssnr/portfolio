"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const stack = [
  { id: "frontend", label: "Frontend", tech: ["React", "Vite", "Redux Toolkit", "TanStack Query"] },
  { id: "api", label: "API", tech: ["Node.js", "Express", "FastAPI", "REST"] },
  { id: "services", label: "Services", tech: ["Background Jobs", "Real-time (Socket.IO)", "Auth"] },
  { id: "database", label: "Database", tech: ["PostgreSQL", "MySQL", "Prisma"] },
  { id: "cache", label: "Cache", tech: ["Redis"] },
  { id: "queue", label: "Queue", tech: ["BullMQ", "Redis"] },
  { id: "ai", label: "AI", tech: ["LLMs", "RAG", "Vector Search", "Ollama"] },
  { id: "infrastructure", label: "Infrastructure", tech: ["Docker", "NGINX", "AWS", "GitHub Actions"] },
] as const;

export function EngineeringGraph() {
  const [active, setActive] = useState<(typeof stack)[number]["id"]>(stack[0].id);
  const activeNode = stack.find((n) => n.id === active) ?? stack[0];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      <ol className="flex flex-col rounded-xl border border-border bg-card p-2">
        {stack.map((node) => (
          <li key={node.id}>
            <button
              type="button"
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
              className={cn(
                "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                active === node.id
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-background"
              )}
            >
              {node.label}
            </button>
          </li>
        ))}
      </ol>

      <div className="rounded-xl border border-border bg-card p-8">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">
          {activeNode.label}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {activeNode.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
