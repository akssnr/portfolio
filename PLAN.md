# STACK + INFRA PLAN — akshaysoner.in

Based on knowledge.md spec (sec 19, 37). Confirmed best-fit, not deviated.

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR/SSG for SEO, RSC for perf, file routing matches sec31 IA |
| Lang | TypeScript (strict) | matches your backend TS/Node experience, catches errors early |
| Styling | Tailwind CSS v4 | fast, no runtime cost, restrained design system per sec16 |
| UI primitives | shadcn/ui + Radix | accessible, unstyled, no bloat, no generic template look |
| Motion | Framer Motion (scoped, not global) | sec18 micro-interactions, respects prefers-reduced-motion |
| Content | Velite (or Contentlayer alt) + MDX | structured project/blog data per sec32, type-safe |
| Diagrams | hand-built SVG/React components | sec8/29 — avoid heavy libs (no mermaid/reactflow runtime cost) |
| Theme | next-themes | dark-primary + light, persisted, sec17 |
| Fonts | next/font (self-hosted) | perf, sec20 |
| Forms | Route Handler + Resend + zod validation | sec15/35, no exposed secrets |
| SEO | next-sitemap/app/sitemap.ts, app/robots.ts, metadata API, schema-dts JSON-LD | sec21 |
| Analytics | Vercel Web Analytics (or Plausible) | privacy-friendly, optional |
| Errors | Sentry (free tier, optional) | prod visibility |
| Pkg mgr | pnpm | fast installs |
| Lint/format | ESLint + Prettier + TS strict | DX |

Reject: heavy animation libs, CMS (overkill for solo portfolio — content lives in typed data files per sec32), separate backend (Next.js Route Handlers cover contact form + optional cached GitHub API).

## 2. Infra / Deployment

- **Host:** Vercel — native Next.js, edge CDN, image optim, zero-config preview deploys per PR. Best perf/SEO ROI, minimal ops.
- **Domain:** akshaysoner.in
  - Point domain nameservers (or A/ALIAS + CNAME) to Vercel per their domain docs.
  - Apex `akshaysoner.in` → Vercel (A/ALIAS record), `www` → CNAME → redirect to apex (or vice versa, pick one canonical).
- **DNS:** Cloudflare (DNS-only, not proxied) optional layer for easier record mgmt — skip proxy/orange-cloud so Vercel's own CDN/TLS handles edge, avoid double-CDN conflicts.
- **Email (contact form):** Resend, verify sending subdomain (e.g. `mail.akshaysoner.in`) with SPF/DKIM/DMARC records.
- **CI/CD:** GitHub repo → Vercel auto-deploy `main` → prod, PRs → preview URLs.
- **Secrets:** `.env.local` local, Vercel dashboard env vars prod. `.env.example` committed (sec35/36).
- **Resume:** static PDF in `/public/resume.pdf`, swappable, download button links direct (sec14).
- **Monitoring:** Vercel Speed Insights + Web Vitals built-in.

Not self-hosting on VPS/Docker for the site itself — that's your production case-study material (Project 1), not this site's infra. Keeps deploy simple, fast, cheap (free tier covers this scale).

## 3. Repo Structure (sec31–33)

```
app/
  page.tsx                 (home)
  about/page.tsx
  experience/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  engineering/page.tsx
  contact/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  api/contact/route.ts
  sitemap.ts
  robots.ts
  layout.tsx
components/
  Navbar, Hero, SectionHeading, ProjectCard, ProjectGrid,
  ExperienceTimeline, TechStack, ArchitectureDiagram, MetricCard,
  CaseStudy, ContactSection, Footer, ThemeToggle, MobileNav
content/
  projects/*.mdx (or .ts structured data)
  blog/*.mdx
lib/
  seo.ts, mdx.ts, utils.ts
public/
  resume.pdf, og-image.png, favicon, images/
```

## 4. Open Items — need from you before content build

- Resume file (or placeholder + note)
- Real email, LinkedIn, GitHub links
- Confirm case study details safe to publish (Project 1 abstraction level)
- Any existing brand colors/logo, or greenfield design system

## 5. Status

Scaffold done — Next.js 16 + TS + Tailwind v4 app, all routes building and lint-clean (`npm run build`, `npm run lint`). Resume found at `assets/resume/AKSHAY-KUMAR-SONER.pdf`, copied to `public/resume.pdf` and wired to the navbar download button.

Remaining before launch: fill placeholders (email/LinkedIn/GitHub, README "Before launch" section), verify experience timeline dates/employers, get a Resend API key for the contact form, then deploy to Vercel + point akshaysoner.in DNS per README §Deployment.
