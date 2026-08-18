export type ProjectDecision = { question: string; answer: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  techHighlights: string[];
  diagram: string[];
  overview: string;
  challenge: string;
  architectureNote: string;
  implementation: string[];
  technologies: string[];
  decisions: ProjectDecision[];
  reliability: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "semantic-engine-urbanpillar-cornerspaces",
    name: "Semantic Engine — UrbanPillar & CornerSpaces",
    category: "Backend Systems",
    shortDescription:
      "AI Developer at Kaycomm Services: the semantic engine powering search, recommendations, and content understanding for UrbanPillar and CornerSpaces, plus the workflow website builder and infrastructure it runs on.",
    techHighlights: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Semantic Search",
      "LLM Data Pipelines",
      "Docker",
    ],
    diagram: [
      "User",
      "Frontend / Mobile",
      "API / Backend",
      "Authentication",
      "PostgreSQL",
      "Redis / Queue",
      "External Services",
      "AWS / Cloud Infrastructure",
    ],
    overview:
      "UrbanPillar and CornerSpaces are property-tech products that need listings, search, and content to actually understand what a user is looking for — not just match keywords. At Kaycomm Services, I built the semantic engine behind that: search, recommendations, and content understanding, plus an AI-driven workflow website builder that automates page and content generation, and the LLM data pipelines feeding both.",
    challenge:
      "Semantic search over property listings has to reconcile two things at once: understanding unstructured intent (\"3BHK near a good school\") and structured constraints (price, location, layout) — while staying fast enough for an interactive product. On top of that, the workflow website builder has to generate correct, on-brand pages automatically, not just plausible-looking ones.",
    architectureNote:
      "Clients talk to a Node.js/Express API layer. Auth runs through JWT plus Google OAuth and Firebase phone/OTP. PostgreSQL is the system of record; Redis backs caching, sessions, and BullMQ background jobs; Socket.IO handles real-time events (live listing updates, chat). Media goes to AWS S3 and Cloudinary, payments through Stripe, maps through Mapbox. The semantic engine sits behind that API layer: listing and content data gets processed through an LLM data pipeline (topics, blog content, AI-generated images) and indexed for semantic retrieval, which powers search/recommendations and a Vastu-analysis module that interprets floor plans for spatial reasoning. The workflow website builder consumes the same content pipeline to automate page generation. The whole stack — API, data pipelines, and the company's internal HRMS system — runs containerized on a VPS behind NGINX / Nginx Proxy Manager, managed through Docker + Portainer, with CI/CD automation handling deployment and domains/SSL/reverse proxy owned end-to-end.",
    implementation: [
      "Built the semantic engine that powers intelligent search, recommendations, and content understanding across UrbanPillar and CornerSpaces.",
      "Built an AI-driven workflow website builder that automates page and content generation.",
      "Created LLM data engine pipelines for topics, blog content, and AI-generated images.",
      "Implemented a Vastu-analysis module using floor-plan interpretation and spatial reasoning.",
      "Authentication layered across JWT sessions, Google OAuth, and Firebase phone/OTP for web and mobile sign-in.",
      "Background jobs (notifications, media processing, scheduled tasks) moved off the request path into BullMQ workers backed by Redis; real-time features (chat, live listing status) run over Socket.IO instead of polling.",
      "Media uploads routed through S3 / Cloudinary and payments through Stripe, keeping the API stateless and PCI scope out of the app server.",
      "Developed core modules for the company's internal HRMS system.",
      "Own full-stack Docker + Portainer deployments, CI/CD automation, and performance optimization; manage VPS, domains, SSL, and reverse proxy for production infrastructure.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "JWT",
      "Google OAuth",
      "Firebase Auth",
      "AWS S3",
      "Cloudinary",
      "Stripe",
      "Mapbox",
      "Python",
      "LLMs",
      "Semantic Search",
      "Docker",
      "Portainer",
      "NGINX",
      "Nginx Proxy Manager",
      "GitHub Actions",
      "Cloudflare",
    ],
    decisions: [
      {
        question: "Why a dedicated semantic engine instead of search-as-a-feature inside the API?",
        answer:
          "Search, recommendations, and content understanding all draw on the same semantic index. Centralizing it means the workflow website builder and the Vastu module can reuse the same retrieval layer instead of each rebuilding their own.",
      },
      {
        question: "Why PostgreSQL over a document store?",
        answer:
          "The domain is relational — listings, users, transactions, and permissions all reference each other. Prisma on top of PostgreSQL gives type-safe queries and migrations without hand-rolled SQL for every change.",
      },
      {
        question: "Why Redis-backed queues instead of doing work inline?",
        answer:
          "Anything that isn't needed to answer the current request (emails, media processing, notifications) shouldn't block it. BullMQ on Redis moves that work off the request path and gives retries for free.",
      },
      {
        question: "Why generate website content through an LLM pipeline rather than hand-authoring pages?",
        answer:
          "Property listings and content pages scale with inventory. An LLM data pipeline that turns structured listing data into topics, blog content, and images keeps content current without a manual authoring bottleneck.",
      },
      {
        question: "Why Docker + Portainer on a VPS instead of a managed PaaS?",
        answer:
          "Full control over networking, cost, and the ability to run the API, data pipelines, and the internal HRMS system on shared infrastructure without per-service platform overhead.",
      },
    ],
    reliability: [
      "Background jobs run through BullMQ with retry policies instead of fire-and-forget calls.",
      "NGINX / Nginx Proxy Manager terminate TLS and isolate services behind a reverse proxy.",
      "CI/CD automation catches build failures before they reach production containers.",
      "Docker isolation keeps services (API, workers, pipelines, HRMS) independently restartable without taking the whole stack down.",
      "Domain, SSL, and infrastructure ownership means production issues get diagnosed and fixed end-to-end, not handed off.",
    ],
    outcome:
      "A live, multi-service platform in production — handling authentication, real-time messaging, media, payments, and maps — with the semantic engine, AI workflow website builder, and LLM data pipelines running on top of it for UrbanPillar and CornerSpaces.",
  },
  {
    slug: "querymate-document-intelligence",
    name: "QueryMate & Oxtract — Document Intelligence",
    category: "AI & LLM Applications",
    shortDescription:
      "AI-powered document parsing, summarization, and semantic retrieval built at The CodeWise — QueryMate for LLM-powered document summarization, Oxtract applying the same pipeline pattern to parsing pension documents.",
    techHighlights: ["FastAPI", "Python", "LangChain", "Weaviate", "RAG"],
    diagram: [
      "Document Upload",
      "Processing Pipeline",
      "Embedding / Vector Store",
      "Semantic Retrieval",
      "LLM Response",
      "Result",
    ],
    overview:
      "Raw documents aren't queryable. QueryMate turns them into a system that can answer questions and produce summaries grounded in their actual content. Oxtract applies the same pipeline shape to a harder document type: multi-stage pension-document parsing, extracting and organizing key insights via semantic search.",
    challenge:
      "Getting retrieval right matters more than the model: the pipeline has to chunk and embed documents in a way that preserves meaning, then retrieve the right passages before the LLM ever sees the question — otherwise the model answers confidently and wrongly. Pension documents raise the bar further — dense, multi-section, and inconsistent in structure — which is why Oxtract needed a multi-stage pipeline rather than a single parse-and-embed pass.",
    architectureNote:
      "A FastAPI service (async SQLAlchemy, JWT auth, file uploads) accepts document uploads and runs them through LangChain for parsing and chunking before embedding content into Weaviate. At query time the same pipeline embeds the question, retrieves the most relevant chunks, and grounds the LLM's summary or answer in them. A separate, lighter pipeline — Ollama plus scraping — handles domain enrichment and industry classification where a full RAG pass isn't needed.",
    implementation: [
      "Built AI-powered document parsing and summarization (QueryMate) using LLMs, LangChain, and Weaviate as the vector store.",
      "Built Oxtract's multi-stage pipeline for pension documents — parse, segment, embed, retrieve — to extract and organize key insights via semantic search.",
      "Integrated a lightweight GenAI pipeline (Ollama + scraping) for domain enrichment and industry classification, kept separate from the full RAG path for latency and cost.",
      "Deployed FastAPI backends with async SQLAlchemy, JWT auth, file uploads, and external API integrations.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Weaviate",
      "Ollama",
      "Async SQLAlchemy",
      "JWT",
      "RAG",
    ],
    decisions: [
      {
        question: "Why FastAPI?",
        answer:
          "Async-first and lightweight for an I/O-bound pipeline (document parsing, embedding calls, retrieval) without the overhead of a heavier framework.",
      },
      {
        question: "Why Weaviate as the vector store?",
        answer:
          "A managed vector database with built-in hybrid search meant not having to hand-roll index management for two different document pipelines (QueryMate and Oxtract) sharing the same retrieval infrastructure.",
      },
      {
        question: "Why a separate Ollama pipeline instead of routing everything through the full RAG stack?",
        answer:
          "Domain enrichment and industry classification don't need grounded, cited retrieval — a lighter local-inference pass is faster and cheaper, and keeps the heavier LangChain/Weaviate pipeline reserved for where grounding actually matters.",
      },
    ],
    reliability: [
      "Retrieval is grounded in the document's own content — responses reference retrieved passages rather than unconstrained generation.",
      "Pipeline stages (parse → chunk → embed → retrieve → respond) are separated so a failure in one stage doesn't silently corrupt the others.",
      "Oxtract's multi-stage structure isolates pension-document parsing failures from the retrieval and extraction stages downstream.",
    ],
    outcome:
      "Two working document-intelligence pipelines — QueryMate for general document summarization and retrieval, Oxtract for structured pension-document extraction — sharing a common FastAPI/LangChain/Weaviate foundation.",
  },
  {
    slug: "large-scale-data-processing",
    name: "Large-Scale Data Processing",
    category: "Data Engineering",
    shortDescription:
      "Batch processing pipeline built to reliably work through 25M+ records (~4GB) with duplicate detection and controlled memory usage.",
    techHighlights: ["Batch Processing", "Memory Management", "Duplicate Detection", "SQL"],
    diagram: [
      "Raw Data Source",
      "Batch Loader",
      "Validation / Dedup",
      "Database Write",
      "Monitoring",
    ],
    overview:
      "Processing 25M+ records (roughly 4GB of data) in one pass isn't a matter of writing a script that works — it's making sure it doesn't run out of memory, stall on duplicates, or leave the dataset in a half-processed state if it fails partway through.",
    challenge:
      "At this volume, naive approaches break: loading everything into memory at once isn't viable, duplicate detection across the full dataset needs an efficient strategy, and any failure mid-run has to be recoverable without reprocessing everything from scratch.",
    architectureNote:
      "Data is read and processed in bounded batches rather than loaded wholesale, with validation and duplicate detection applied per batch before writes hit the database. Progress is tracked so failures don't require a full restart.",
    implementation: [
      "Batch-based reads keep memory usage bounded regardless of total dataset size.",
      "Duplicate detection applied at the batch level to avoid comparing every record against the full dataset in memory.",
      "Database writes structured to minimize lock contention and round-trips under sustained load.",
      "Progress tracking so a failure mid-run doesn't mean starting over.",
    ],
    technologies: ["Python", "SQL", "Batch Processing"],
    decisions: [
      {
        question: "Why batch processing instead of a single bulk load?",
        answer:
          "At ~4GB / 25M+ records, loading everything into memory at once isn't reliable. Bounded batches keep memory usage predictable regardless of total volume.",
      },
      {
        question: "Why handle duplicate detection per batch?",
        answer:
          "Comparing every record against the entire dataset in memory doesn't scale. Structuring detection around batches keeps the working set manageable.",
      },
    ],
    reliability: [
      "Bounded memory usage regardless of total dataset size.",
      "Progress tracking allows recovery without reprocessing completed batches.",
      "Validation applied before writes to avoid corrupting the database with malformed records.",
    ],
    outcome:
      "A batch pipeline that reliably processes the full 25M+ record dataset without memory exhaustion or unrecoverable failures mid-run.",
  },
  {
    slug: "multi-tenant-email-automation",
    name: "Multi-Tenant Email Automation",
    category: "Automation",
    shortDescription:
      "Bulk email automation system built on Microsoft Graph, supporting multiple tenants with reliable, batched, error-tolerant delivery.",
    techHighlights: ["Microsoft Graph", "Multi-Tenant Auth", "Batch Processing", "Error Handling"],
    diagram: [
      "Trigger / Schedule",
      "Tenant Auth (Microsoft Graph)",
      "Batching Layer",
      "Send + Retry",
      "Delivery Log",
    ],
    overview:
      "Sending email at scale across multiple tenants means every tenant has its own authentication context, its own rate limits, and its own failure modes — the system has to isolate them from each other while still processing efficiently.",
    challenge:
      "Multi-tenant Graph API auth adds a layer of complexity beyond single-account email automation: each tenant needs isolated credentials and token handling, and a failure or rate limit on one tenant can't be allowed to stall or corrupt processing for the others.",
    architectureNote:
      "Each tenant authenticates independently against Microsoft Graph. Outgoing messages are grouped into batches rather than sent one-by-one, with retry logic around transient failures and rate limits, and delivery outcomes logged per message rather than assumed.",
    implementation: [
      "Per-tenant authentication against Microsoft Graph, keeping credentials and token refresh isolated per tenant.",
      "Messages grouped into batches to reduce request overhead and respect Graph API rate limits.",
      "Retry logic around transient failures, distinguishing recoverable errors (rate limits, timeouts) from permanent ones (invalid recipient).",
      "Per-message delivery logging so failures are visible and traceable rather than silent.",
    ],
    technologies: ["Microsoft Graph API", "OAuth", "Batch Processing", "Python"],
    decisions: [
      {
        question: "Why batch sends instead of one request per email?",
        answer:
          "Graph API rate limits make per-message requests inefficient at volume. Batching reduces request count and makes throughput predictable.",
      },
      {
        question: "Why isolate auth per tenant?",
        answer:
          "A shared credential model would mean one tenant's token issue or rate limit affects every other tenant. Isolation keeps failures contained.",
      },
    ],
    reliability: [
      "Retry logic separates transient failures (retryable) from permanent ones (logged and skipped).",
      "Per-tenant isolation means one tenant's failure doesn't block others.",
      "Delivery logging gives visibility into what sent, what failed, and why.",
    ],
    outcome:
      "A multi-tenant automation system that reliably batches and delivers email across isolated tenant contexts without cross-tenant failure propagation.",
  },
  {
    slug: "distributed-web-scraper",
    name: "Distributed Web Scraper",
    category: "Automation",
    shortDescription:
      "Multithreaded, fault-tolerant scraper with proxy rotation, resumable runs, and persistent storage for large-scale data collection.",
    techHighlights: ["Multithreading", "Proxy Rotation", "Fault Tolerance", "MySQL"],
    diagram: [
      "URL Queue",
      "Worker Threads",
      "Proxy Pool",
      "Retry / Resume Logic",
      "MySQL Storage",
    ],
    overview:
      "Scraping at scale fails in predictable ways — blocked IPs, dropped connections, and processes that die halfway through a run. The scraper had to be built around those failure modes from the start, not patched afterward.",
    challenge:
      "Any long-running scrape will hit rate limits, blocks, and network failures. The system needed to keep working through individual failures, avoid losing progress on a crash, and not duplicate work already completed.",
    architectureNote:
      "A queue of target URLs is worked by multiple threads in parallel, each routed through a rotating proxy pool to distribute load and avoid blocks. Retry logic handles transient failures, run state is persisted so an interrupted run can resume rather than restart, and results are written to MySQL as JSON-structured records.",
    implementation: [
      "Multithreaded workers pull from a shared URL queue for parallel throughput.",
      "Proxy rotation distributes requests across a proxy pool to reduce blocking.",
      "Run state persisted so an interrupted process can resume from where it left off instead of restarting.",
      "Retry logic around transient network failures, with results written to MySQL for durable, queryable storage.",
    ],
    technologies: ["Python", "Multithreading", "MySQL", "JSON", "Proxy Infrastructure"],
    decisions: [
      {
        question: "Why persist run state for resumability?",
        answer:
          "Long-running scrapes will eventually hit a crash, block, or manual stop. Without resumability, any interruption means redoing completed work.",
      },
      {
        question: "Why MySQL for storage over flat files?",
        answer:
          "Structured, queryable storage makes it possible to check progress, dedupe, and inspect results mid-run instead of parsing output files after the fact.",
      },
    ],
    reliability: [
      "Retry logic around transient failures instead of letting individual errors kill the run.",
      "Resumable state means crashes or restarts don't lose completed work.",
      "Proxy rotation reduces the chance of the entire run being blocked at the source.",
    ],
    outcome:
      "A distributed scraper capable of large-scale, long-running data collection that survives individual failures without losing progress.",
  },
  {
    slug: "elixir-pharma-document-automation",
    name: "Elixir — Pharma Document Automation",
    category: "Automation",
    shortDescription:
      "Automated pharma document generation using dynamic PDF templates, streamlining regulatory workflows that previously relied on manual drafting.",
    techHighlights: ["Python", "Dynamic PDF Templating", "Automation"],
    diagram: [
      "Regulatory Data Input",
      "Template Engine",
      "Dynamic PDF Generation",
      "Validation",
      "Output Document",
    ],
    overview:
      "Pharma regulatory submissions require large numbers of structured documents generated from underlying data. Producing them by hand doesn't scale and invites transcription errors in a domain where errors carry regulatory weight.",
    challenge:
      "Regulatory documents have strict formatting and content requirements that can't drift between submissions, but the underlying data changes every time — the system has to keep every generated document structurally consistent while the content varies.",
    architectureNote:
      "Dynamic PDF templates are parameterized by regulatory data and rendered programmatically, separating the fixed document structure (required by regulation) from the variable content (specific to each submission).",
    implementation: [
      "Built a dynamic PDF template system parameterized by structured regulatory data.",
      "Automated generation of documents from input data, replacing manual drafting.",
      "Validation applied against generated output to catch structural issues before documents leave the pipeline.",
    ],
    technologies: ["Python", "PDF Generation", "Template Automation"],
    decisions: [
      {
        question: "Why dynamic templates instead of editing static documents per submission?",
        answer:
          "Regulatory formatting requirements are fixed, but the data behind each submission isn't. A template parameterized by data means one maintained format produces every output correctly, instead of hand-editing documents and risking drift.",
      },
      {
        question: "Why validate generated output rather than trust the template?",
        answer:
          "A template can be logically correct and still produce a malformed document if the input data is incomplete or shaped unexpectedly. Validation catches that before a document reaches a regulatory workflow.",
      },
    ],
    reliability: [
      "Structural validation runs on every generated document before it's treated as final output.",
      "Fixed template structure means formatting can't silently drift between submissions.",
    ],
    outcome:
      "Automated, template-driven document generation that replaced manual PDF drafting for pharma regulatory workflows.",
  },
  {
    slug: "labschecks",
    name: "LabsChecks",
    category: "Backend Systems",
    shortDescription:
      "Health-tech platform helping users compare diagnostic tests, get recommendations, and book lab services across multiple cities.",
    techHighlights: ["Python", "Backend APIs", "Multi-City Data"],
    diagram: [
      "User",
      "Search / Compare",
      "Recommendation Logic",
      "Booking Flow",
      "Lab Partner Integration",
      "Confirmation",
    ],
    overview:
      "Comparing diagnostic tests across labs is fragmented — pricing, test names, and availability differ by provider and by city. LabsChecks centralizes comparison, recommendation, and booking into a single flow.",
    challenge:
      "The same diagnostic test is often listed under different names, prices, and bundles by different labs in different cities. Making that comparable — and then booking against a real lab partner's availability — means normalizing inconsistent data before recommendation logic can mean anything.",
    architectureNote:
      "The backend aggregates test and lab data across cities into a normalized comparison layer. Recommendation logic ranks options against user needs, and the booking flow integrates with lab partner scheduling to confirm availability.",
    implementation: [
      "Built the comparison engine that normalizes test/lab data across multiple cities and providers.",
      "Built recommendation logic to help users choose between comparable options.",
      "Built the booking flow, integrating with lab partner scheduling for confirmation.",
    ],
    technologies: ["Python", "REST APIs", "Backend Services"],
    decisions: [
      {
        question: "Why normalize test data before building recommendations?",
        answer:
          "Recommendation logic is only as good as the data underneath it. Without normalizing test names, pricing, and bundles across labs first, any ranking would be comparing things that aren't actually comparable.",
      },
      {
        question: "Why integrate directly with lab partner scheduling instead of a manual booking handoff?",
        answer:
          "A recommendation that can't be booked against real availability isn't useful. Direct integration keeps the comparison-to-booking flow in one system instead of dropping the user into a separate manual process.",
      },
    ],
    reliability: [
      "Booking flow has to handle partner-lab availability changes and failures gracefully rather than confirming bookings that can't be fulfilled.",
      "Normalized comparison data reduces the chance of surfacing incorrect pricing or test information.",
    ],
    outcome:
      "A working platform for comparing, recommending, and booking diagnostic tests across multiple cities and lab partners.",
  },
  {
    slug: "cicd-automation",
    name: "CI/CD Automation",
    category: "Infrastructure",
    shortDescription:
      "Automated CI/CD pipelines using Docker Compose and NGINX, reused across production deployments to keep releases smooth, reliable, and scalable.",
    techHighlights: ["Docker Compose", "NGINX", "CI/CD", "Portainer"],
    diagram: [
      "Code Push",
      "CI Pipeline (Build / Test)",
      "Docker Image",
      "Compose Deployment",
      "NGINX Routing",
      "Production",
    ],
    overview:
      "Manual deployment doesn't scale and invites drift between environments. This is the deployment tooling — Docker Compose orchestration plus NGINX routing — that underpins reliable releases across production services.",
    challenge:
      "Multi-container deployments (API, database, proxy, background services) need to start up, network, and route correctly together, every time, without a manual step at each stage that can be skipped or done inconsistently.",
    architectureNote:
      "A CI pipeline builds Docker images on push. Docker Compose orchestrates the multi-container deployment — networking services together with secure, environment-specific configs. NGINX sits in front as the single entry point for routing and TLS.",
    implementation: [
      "Built automated CI/CD pipelines from code push through to running containers.",
      "Structured Docker Compose deployments with secure configs and network-bridged services.",
      "Configured NGINX as the routing layer in front of containerized services.",
      "Reused this pipeline pattern across multiple production deployments rather than building bespoke tooling per project.",
    ],
    technologies: ["Docker", "Docker Compose", "NGINX", "Portainer", "GitHub Actions"],
    decisions: [
      {
        question: "Why Docker Compose over deploying containers individually?",
        answer:
          "Production services aren't single containers — API, database, proxy, and background workers all need to start up and network together correctly. Compose makes that coordination declarative instead of a manual runbook.",
      },
      {
        question: "Why standardize NGINX as the entry point across services?",
        answer:
          "A single, consistent routing and TLS layer means every service is reachable the same way, instead of each one handling its own exposure and certificates differently.",
      },
    ],
    reliability: [
      "A repeatable pipeline removes the manual steps that cause drift between what's deployed and what's expected.",
      "Secure, environment-specific configs keep credentials isolated per deployment.",
      "The same pattern reused across projects means fixes and improvements compound instead of being re-solved per project.",
    ],
    outcome:
      "A standardized CI/CD pattern in active use across production deployments, from code push to routed, running services.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
