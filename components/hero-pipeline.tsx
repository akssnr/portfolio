import Link from "next/link";
import {
  heroPipeline,
  recoveryPatterns,
  type PipelineStage,
  type RecoveryPattern,
} from "@/content/hero-pipeline";

/**
 * GEOMETRY — single source of truth.
 * These constants generate the gutter SVG's path data AND are published as
 * inline custom properties that the `hero-run` keyframe in globals.css reads.
 * The drawing and the animation therefore cannot drift. Never hardcode these
 * numbers in the JSX below, and never hardcode pixels in the keyframe.
 */
const ROW = 48; // px, height of one stage row
const GUTTER = 40; // px, fixed width of the rail column
const RAIL_X = 28; // px, x-centre of the main rail inside the gutter
const LANE_X = 10; // px, x-centre of the dashed recovery lane
const DOT = 6; // px, diameter of the travelling dot

const H = ROW * heroPipeline.stages.length;
const centreY = (i: number) => i * ROW + ROW / 2;

function PipelineRow({ stage }: { stage: PipelineStage }) {
  return (
    <li className="flex flex-col justify-center pl-[52px]" style={{ height: ROW }}>
      <p className="truncate text-[12.5px] font-medium leading-tight text-foreground">
        {stage.label}
      </p>
      <p className="mt-0.5 truncate font-mono text-[11px] leading-tight text-muted">
        {stage.note}
      </p>
    </li>
  );
}

function PipelineGutter() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0"
      style={{ width: GUTTER, height: H }}
    >
      <svg width={GUTTER} height={H} viewBox={`0 0 ${GUTTER} ${H}`} fill="none">
        <line
          x1={RAIL_X}
          y1={centreY(0)}
          x2={RAIL_X}
          y2={centreY(heroPipeline.stages.length - 1)}
          stroke="var(--muted)"
          strokeWidth="1"
          shapeRendering="crispEdges"
        />

        {heroPipeline.stages.map((s, i) => (
          <rect
            key={s.label}
            x={RAIL_X - 4}
            y={centreY(i) - 4}
            width="8"
            height="8"
            rx="2"
            fill="var(--card)"
            stroke="var(--muted)"
            strokeWidth="1"
          />
        ))}

        {/* Recovery path: leaves BELOW Database Write, climbs the outside, and
            terminates ON Batch Loader. It is geometrically incapable of reaching
            Raw Data Source — that is what proves "resumes, not restarts". */}
        <path
          d={`M${RAIL_X} ${centreY(3) + 4} V${centreY(3) + 14} H${LANE_X} V${centreY(1)} H${RAIL_X - 10}`}
          stroke="var(--accent-2)"
          strokeWidth="1"
          strokeDasharray="3 3"
          fill="none"
          shapeRendering="crispEdges"
        />
        <path
          d={`M${RAIL_X - 10} ${centreY(1) - 3.5} L${RAIL_X - 4} ${centreY(1)} L${RAIL_X - 10} ${centreY(1) + 3.5} Z`}
          fill="var(--accent-2)"
        />
      </svg>

      {/* The one moving element. Plain DOM span — no SVG transform semantics. */}
      <span
        className="animate-hero-run absolute left-0 top-0 rounded-full bg-accent motion-reduce:hidden"
        style={{ width: DOT, height: DOT }}
      />

      {/* Reduced-motion resting frame: the completed run, parked on Monitoring. */}
      <span
        className="absolute rounded-full bg-accent motion-safe:hidden"
        style={{
          width: DOT,
          height: DOT,
          left: RAIL_X - DOT / 2,
          top: centreY(heroPipeline.stages.length - 1) - DOT / 2,
        }}
      />
    </div>
  );
}

function RecoveryRow({ pattern }: { pattern: RecoveryPattern }) {
  return (
    <li>
      <Link
        href={`/projects/${pattern.slug}`}
        className="group/row -mx-1.5 grid grid-cols-[4.5rem_1fr] items-start gap-x-3 rounded-md px-1.5 py-1 transition-colors hover:bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]"
      >
        <span className="rounded border border-border px-1.5 py-0.5 text-center font-mono text-[11px] text-foreground transition-colors group-hover/row:border-accent">
          {pattern.verb}
        </span>
        <span className="text-[11.5px] leading-relaxed text-muted">
          {pattern.mechanism}
        </span>
      </Link>
    </li>
  );
}

export function HeroPipeline() {
  return (
    <section
      aria-labelledby="hero-pipeline-title"
      className="hero-pipeline w-full rounded-xl border border-border bg-card"
      style={
        {
          "--row": `${ROW}px`,
          "--rail-x": `${RAIL_X}px`,
          "--lane-x": `${LANE_X}px`,
        } as React.CSSProperties
      }
    >
      <h2 id="hero-pipeline-title" className="sr-only">
        Run trace of a batch pipeline that resumes from its last completed batch,
        and the recovery patterns behind four production systems
      </h2>

      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b border-border px-5 py-3.5 sm:px-6">
        <p className="text-[13px] font-medium text-foreground">{heroPipeline.title}</p>
        <p className="rounded border border-border px-1.5 py-0.5 font-mono text-[10.5px] text-muted">
          {heroPipeline.metric}
        </p>
      </header>

      <figure className="px-5 py-4 sm:px-6">
        <div className="relative">
          <PipelineGutter />
          <ol className="relative">
            {heroPipeline.stages.map((s) => (
              <PipelineRow key={s.label} stage={s} />
            ))}
          </ol>
        </div>

        <figcaption className="mt-3 flex items-start gap-2 text-[11.5px] leading-relaxed text-muted">
          <span
            aria-hidden
            className="mt-[7px] h-0 w-[18px] shrink-0 border-t border-dashed border-[var(--accent-2)]"
          />
          <span>
            <span className="sr-only">
              The dashed recovery path runs from Database Write back to Batch
              Loader, skipping Raw Data Source:{" "}
            </span>
            {heroPipeline.legend}
          </span>
        </figcaption>
      </figure>

      <div className="border-t border-border px-5 py-4 sm:px-6">
        <p className="text-sm leading-relaxed text-foreground">
          Most systems fail from neglected edge cases, not traffic.
        </p>
        <p
          id="hero-patterns-label"
          className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted"
        >
          Four systems &middot; four recovery paths
        </p>
        <ul aria-labelledby="hero-patterns-label" className="mt-3 flex flex-col gap-1">
          {recoveryPatterns.map((p) => (
            <RecoveryRow key={p.verb} pattern={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
