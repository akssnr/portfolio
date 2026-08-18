export type TimelineEntry = {
  period: string;
  title: string;
  summary: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "07/2012 – 06/2016",
    title: "B.E. Mechanical Engineering",
    summary:
      "Rungta College of Engineering & Technology (CSVTU), Bhilai — First Class. Foundation in systems thinking that carried into engineering work.",
    tags: ["Education"],
  },
  {
    period: "Early career",
    title: "Operations",
    summary:
      "Started in operations-focused roles before transitioning into software — brought a practical, process-first mindset into engineering work.",
    tags: ["Operations"],
  },
  {
    period: "06/2024 – 08/2025",
    title: "Software Developer, The CodeWise",
    summary:
      "Pune (Onsite). Built AI-powered document parsing and summarization tools (LLMs, LangChain, Weaviate). Deployed scalable FastAPI backends with async SQLAlchemy, JWT auth, and external API integrations. Owned VPS deployments — Docker, NGINX, Portainer, CI/CD, domain/subdomain setups — and resolved production auth issues including cross-subdomain session handling.",
    tags: ["Backend", "AI", "Infrastructure"],
  },
  {
    period: "08/2025 – Present",
    title: "AI Developer, Kaycomm Services",
    summary:
      "Pune. Building the Semantic Engine powering search, recommendations, and content understanding for UrbanPillar and CornerSpaces. Also: an AI-driven workflow website builder, LLM data pipelines for content generation, Vastu analysis via floor-plan interpretation, and full-stack Docker + Portainer production infrastructure.",
    tags: ["AI", "Backend", "Infrastructure"],
  },
];
