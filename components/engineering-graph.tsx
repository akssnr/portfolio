"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TechNote = { name: string; note: string };

const stack: { id: string; label: string; summary: string; tech: TechNote[] }[] = [
  {
    id: "frontend",
    label: "Frontend",
    summary: "Client applications — what the user actually touches.",
    tech: [
      { name: "React", note: "Component-based UI, the base of every client app I build." },
      { name: "Vite", note: "Dev server and build tooling — fast HMR, small production bundles." },
      { name: "Redux Toolkit", note: "Predictable client-side state for anything shared across views." },
      { name: "TanStack Query", note: "Server-state caching, refetching, and sync — keeps API calls out of components." },
    ],
  },
  {
    id: "api",
    label: "API",
    summary: "The contract between clients and backend services.",
    tech: [
      { name: "Node.js", note: "JS runtime for backend services that share code/types with the frontend." },
      { name: "Express", note: "Routing and middleware for Node APIs — auth, validation, error handling." },
      { name: "FastAPI", note: "Async Python framework for AI/data services — used where the workload is Python-native." },
      { name: "REST", note: "Standard request/response contract — predictable, cacheable, easy to version." },
    ],
  },
  {
    id: "services",
    label: "Services",
    summary: "Work that doesn't belong on the request/response path.",
    tech: [
      { name: "Background Jobs", note: "Notifications, media processing, scheduled tasks — moved off the request path." },
      { name: "Real-time (Socket.IO)", note: "Push live updates (chat, status changes) instead of polling." },
      { name: "Auth", note: "JWT sessions plus Google OAuth / Firebase phone-OTP for web and mobile sign-in." },
    ],
  },
  {
    id: "database",
    label: "Database",
    summary: "System of record — the data that has to be right.",
    tech: [
      { name: "PostgreSQL", note: "Relational store of choice — data with real relationships (users, listings, transactions)." },
      { name: "MySQL", note: "Relational storage on projects where it was already the standard." },
      { name: "Prisma", note: "Type-safe ORM and migrations over Postgres — schema changes without hand-written SQL." },
    ],
  },
  {
    id: "cache",
    label: "Cache",
    summary: "Absorbing load before it reaches the database.",
    tech: [
      { name: "Redis", note: "In-memory cache for sessions and hot reads — cuts repeated load off Postgres." },
    ],
  },
  {
    id: "queue",
    label: "Queue",
    summary: "Reliable async work with retries built in.",
    tech: [
      { name: "BullMQ", note: "Redis-backed job queue — retry policies instead of fire-and-forget calls." },
      { name: "Redis", note: "Backing store for queue state and job persistence." },
    ],
  },
  {
    id: "ai",
    label: "AI",
    summary: "Where language models actually earn their place.",
    tech: [
      { name: "LLMs", note: "Generation and reasoning over text — used where retrieval alone isn't enough." },
      { name: "RAG", note: "Grounds LLM answers in retrieved source content instead of unguided model memory." },
      { name: "Vector Search", note: "Semantic retrieval over embeddings — finds passages by meaning, not keyword match." },
      { name: "Ollama", note: "Self-hosted local inference — keeps documents and inference on infrastructure I control." },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    summary: "Getting all of the above into production, and keeping it there.",
    tech: [
      { name: "Docker", note: "Containerized, reproducible deployments — each service isolated and independently restartable." },
      { name: "NGINX", note: "Reverse proxy, TLS termination, and routing in front of every service." },
      { name: "AWS", note: "S3 for media storage, plus cloud infrastructure where a managed service beats self-hosting." },
      { name: "GitHub Actions", note: "CI pipeline — build and test gate deployment before it reaches production." },
    ],
  },
];

export function EngineeringGraph() {
  const [active, setActive] = useState<string>(stack[0].id);
  const activeNode = stack.find((n) => n.id === active) ?? stack[0];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      <ol className="flex flex-col rounded-xl border border-border bg-card p-2 lg:self-start">
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

      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">
          {activeNode.label}
        </p>
        <p className="mt-2 text-sm text-muted">{activeNode.summary}</p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {activeNode.tech.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border bg-background px-4 py-3"
            >
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
