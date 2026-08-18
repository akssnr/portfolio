# akshaysoner.in

Personal portfolio for **Akshay Soner** — Backend / Systems Engineer. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

See [PLAN.md](./PLAN.md) for the full stack/infra rationale and [knowledge.md](./knowledge.md) for the content/design brief this site is built against.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4, dark-mode-first via `next-themes`
- **Motion:** Framer Motion (installed, used sparingly — most animation is CSS)
- **Forms:** Route Handler (`app/api/contact/route.ts`) + Resend + Zod validation
- **Content:** typed data files in `content/` (no CMS — see `content/projects.ts`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/                    routes (App Router)
  page.tsx               home
  about/ experience/ projects/ engineering/ contact/ blog/
  projects/[slug]/        case-study pages, data-driven from content/projects.ts
  api/contact/route.ts    contact form handler
  sitemap.ts robots.ts    SEO
components/              reusable UI (Navbar, Hero, ProjectCard, CaseStudy, ...)
content/                 structured content: projects.ts, experience.ts, tech-stack.ts, blog.ts
lib/                     site-config.ts (single source for name/links/email), seo.ts, utils.ts
public/                  resume.pdf, static assets
assets/                  source files (resume, photos, certificates) not served directly
```

Adding a project = adding one entry to `content/projects.ts`. No component changes needed.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=   # from resend.com — needed for the contact form to actually send email
```

Without it, the contact form still validates input but returns a 503 instead of silently failing (see `app/api/contact/route.ts`).

## Before launch — placeholders to replace

Search `lib/site-config.ts` and `content/experience.ts` for `TODO`:

- Real email address (currently `hello@akshaysoner.in`)
- LinkedIn / GitHub URLs
- Verify employer names / dates in the experience timeline
- Confirm `assets/resume/AKSHAY-KUMAR-SONER.pdf` is the version to publish (it's already copied to `public/resume.pdf`)
- Replace default favicon (`app/favicon.ico`) and add an OG image

## Deployment

Target: **Vercel**, domain **akshaysoner.in**.

1. Push this repo to GitHub.
2. Import into Vercel → framework auto-detected as Next.js.
3. Add `RESEND_API_KEY` in Vercel → Project Settings → Environment Variables.
4. Vercel → Domains → add `akshaysoner.in`, follow the DNS instructions shown there (apex A/ALIAS record + `www` CNAME, or delegate nameservers to Vercel).
5. Verify a sending domain in Resend (e.g. `mail.akshaysoner.in`) and add its SPF/DKIM/DMARC records for the contact form to send mail.

Every push to `main` deploys to production; every PR gets a preview URL automatically.
