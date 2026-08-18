import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faDatabase,
  faBolt,
  faLayerGroup,
  faBrain,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const totems = [
  { id: "api", label: "API", icon: faServer, tone: "accent" as const, height: "h-32", delay: "0s" },
  { id: "cache", label: "Cache", icon: faBolt, tone: "accent-3" as const, height: "h-24", delay: "0.4s" },
  { id: "database", label: "Database", icon: faDatabase, tone: "accent-2" as const, height: "h-36", delay: "0.8s" },
  { id: "queue", label: "Queue", icon: faLayerGroup, tone: "accent" as const, height: "h-28", delay: "1.2s" },
  { id: "ai", label: "AI", icon: faBrain, tone: "accent-2" as const, height: "h-32", delay: "1.6s" },
  { id: "infra", label: "Infra", icon: faCloud, tone: "accent-3" as const, height: "h-24", delay: "2s" },
];

const toneVar: Record<(typeof totems)[number]["tone"], string> = {
  accent: "var(--accent)",
  "accent-2": "var(--accent-2)",
  "accent-3": "var(--accent-3)",
};

export function HeroVisual() {
  return (
    <div
      aria-hidden
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          transform: "perspective(300px) rotateX(55deg)",
          transformOrigin: "bottom",
        }}
      />

      <div className="relative flex h-full items-end justify-center gap-4 px-6 pb-10 sm:gap-6 sm:px-10">
        {totems.map((totem) => (
          <div
            key={totem.id}
            className="animate-totem-float flex flex-col items-center gap-3"
            style={{ animationDelay: totem.delay }}
          >
            <div
              className={cn(
                "flex w-12 items-center justify-center rounded-t-md rounded-b-sm border sm:w-14",
                totem.height
              )}
              style={{
                borderColor: toneVar[totem.tone],
                background: `linear-gradient(180deg, color-mix(in srgb, ${toneVar[totem.tone]} 22%, var(--card)), var(--card))`,
                boxShadow: `0 0 24px 2px color-mix(in srgb, ${toneVar[totem.tone]} 55%, transparent), inset 0 0 12px color-mix(in srgb, ${toneVar[totem.tone]} 35%, transparent)`,
              }}
            >
              <FontAwesomeIcon
                icon={totem.icon}
                className="size-4 sm:size-5"
                style={{ color: toneVar[totem.tone] }}
              />
            </div>

            <div
              className="h-1.5 w-10 rounded-full opacity-70 blur-[3px] sm:w-12"
              style={{ background: toneVar[totem.tone] }}
            />

            <span className="text-[11px] font-medium text-muted sm:text-xs">{totem.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
