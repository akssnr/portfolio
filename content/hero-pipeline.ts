import { projects } from "@/content/projects";

const PIPELINE_SLUG = "large-scale-data-processing";

const source = projects.find((p) => p.slug === PIPELINE_SLUG);
if (!source) {
  throw new Error(
    `content/hero-pipeline.ts: project "${PIPELINE_SLUG}" not found in content/projects.ts`
  );
}

/**
 * One annotation per stage, aligned by index to `source.diagram`.
 * Every string is a compression of prose in content/projects.ts for this
 * project. Keep each under 30 characters: the pipeline rows are fixed-height
 * and the annotation truncates rather than wrapping (see PipelineRow).
 */
const STAGE_NOTES = [
  "not loaded wholesale", // architectureNote: "bounded batches rather than loaded wholesale"
  "bounded batches, flat memory", // implementation[0] + reliability[0]
  "dedup before writes", // implementation[1] + reliability[2]
  "locks and round-trips minimized", // implementation[2]
  "progress tracked", // implementation[3]
] as const;

if (source.diagram.length !== STAGE_NOTES.length) {
  throw new Error(
    "content/hero-pipeline.ts: STAGE_NOTES is out of sync with projects.ts diagram[] " +
      `(${STAGE_NOTES.length} notes vs ${source.diagram.length} stages)`
  );
}

export type PipelineStage = { label: string; note: string };

export const heroPipeline: {
  slug: string;
  title: string;
  metric: string;
  legend: string;
  stages: PipelineStage[];
} = {
  slug: source.slug,
  title: source.name,
  metric: "25M+ records · ~4GB · single pass",
  legend:
    "on failure, the run resumes from the last completed batch — it does not restart.",
  stages: source.diagram.map((label, i) => ({ label, note: STAGE_NOTES[i] })),
};

export type RecoveryPattern = {
  verb: string;
  mechanism: string;
  slug: string;
};

/**
 * Four systems, four disciplines, four recovery paths. Each `mechanism` is a
 * compression of a single `reliability[]` line on the project it links to —
 * one source per row, never blended across projects.
 *
 * Rule for future edits: a mechanism states WHAT THE SYSTEM DOES. Never an
 * adjective, never "robust" / "production-grade" / "enterprise". The moment a
 * row describes quality instead of behaviour it has become a marketing bullet.
 * Keep each under 56 characters.
 */
export const recoveryPatterns: RecoveryPattern[] = [
  {
    verb: "resume",
    mechanism: "Bounded batches; completed work is never redone.",
    slug: "large-scale-data-processing", // Data Engineering — reliability[1]
  },
  {
    verb: "retry",
    mechanism: "Transient failures retried, permanent ones logged.",
    slug: "multi-tenant-email-automation", // Automation — reliability[0]
  },
  {
    verb: "ground",
    mechanism: "Retrieval before generation, so answers cite passages.",
    slug: "querymate-document-intelligence", // AI & LLM — reliability[0]
  },
  {
    verb: "isolate",
    mechanism: "Per-service containers, independently restartable.",
    slug: "semantic-engine-urbanpillar-cornerspaces", // Backend — reliability[3]
  },
];
