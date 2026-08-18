export const techStack = [
  {
    domain: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    domain: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Flask", "Async SQLAlchemy", "REST APIs"],
  },
  {
    domain: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Weaviate", "FAISS", "Vector Databases"],
  },
  {
    domain: "AI",
    items: [
      "LLMs",
      "Anthropic",
      "Gemini",
      "Ollama",
      "LangChain",
      "Embeddings",
      "RAG",
      "Document Intelligence",
    ],
  },
  {
    domain: "ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "Linear Regression", "Logistic Regression", "Random Forest"],
  },
  {
    domain: "Infrastructure",
    items: ["Docker", "Docker Compose", "NGINX", "AWS", "Cloudflare", "Portainer", "GitHub Actions"],
  },
  {
    domain: "Frontend",
    items: ["React", "Vite", "Redux Toolkit", "TanStack Query", "Material UI", "Framer Motion"],
  },
  {
    domain: "Automation & Tooling",
    items: ["Web Scraping (BeautifulSoup)", "Multithreading", "Microsoft Graph API", "JSON"],
  },
] as const;

export const whatIBuild = [
  {
    title: "Backend Systems",
    description: "APIs, services, authentication, databases, queues, real-time systems.",
  },
  {
    title: "AI & LLM Applications",
    description:
      "Document intelligence, retrieval systems, vector search, LLM integrations.",
  },
  {
    title: "Data Engineering",
    description:
      "Large-scale processing, batch pipelines, duplicate detection, structured data workflows.",
  },
  {
    title: "Automation",
    description:
      "Email automation, scraping, workflow automation, background processing.",
  },
  {
    title: "Infrastructure",
    description:
      "Docker, NGINX, VPS deployment, CI/CD, networking, production operations.",
  },
] as const;

export const philosophy = [
  "Build for reliability before building for scale — most systems fail from neglected edge cases, not traffic.",
  "Prefer the simple architecture that works over the impressive one that might.",
  "Understand a system end-to-end before changing it. Debugging what you don't understand is guessing.",
  "Automate what repeats. If it's the third time by hand, it should be a script.",
  "Design for failure — retries, idempotency, and recovery paths aren't optional extras.",
  "Measure before optimizing. Intuition about bottlenecks is wrong more often than it's right.",
  "Keep infrastructure understandable. Cleverness that only you can operate is a liability.",
  "Use AI where it creates real value — grounded, retrieval-backed, and verifiable, not decorative.",
  "A system that can't be deployed and maintained by someone else isn't finished.",
] as const;
