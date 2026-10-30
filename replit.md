# ToolNest AI

An AI-powered toolkit for everyday writing, content creation, and productivity.

## Run & Operate

- `pnpm dev` — run the app in development
- `pnpm build` — create a production build
- `pnpm start` — run the production build
- Required env: `GEMINI_API_KEY` for the AI generation tools

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS
- Gemini API integration through a server-side route

## Where things live

- `app/` — routes and page UI
- `components/` — shared interface components
- `components/tools/` — reusable AI tool runner
- `lib/tools-config.ts` — tool metadata and configuration
- `lib/gemini.ts` — server-side Gemini prompt and API logic

## Architecture decisions

- AI requests run through one server-side API route so the API key stays private.
- The shared tool runner keeps the individual tool pages consistent and easy to extend.

## Product

ToolNest AI provides a searchable directory of writing and productivity tools, including AI writing, rewriting, summarization, title generation, idea generation, social post generation, and YouTube script generation.

## User preferences

No additional preferences recorded.

## Gotchas

- Copy `.env.example` to `.env.local` and add a valid `GEMINI_API_KEY` before using generation tools.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

## Rules for future work

- GitHub (mahadeen81-oss/toolnest-ai, branch main) is the source of truth. Always pull the latest main before starting any task.
- The live site is https://usetoolnest.net. Never change SITE_URL in app/sitemap.ts or app/robots.ts.
- Never change the Google verification codes in app/layout.tsx, the contact email in app/contact/page.tsx, or the retry logic in app/api/generate/route.ts, unless I explicitly ask.
- Never edit or refactor existing tools or pages unless I explicitly ask. Only add new things.
- Never push directly to main. Work on a new branch and tell me the branch name so I can test the Vercel preview first.

## Content quality rules

### Word counts
- Every tool page must have at least 300 visible words (tool UI plus guide). Every article must have at least 900 visible words.
- Check the production-rendered word count after each content task and report it.

### Articles
- Each article needs a different structure, section order, and opening/closing style. Never reuse one template of one paragraph per H2.
- Every article shows author "Mohammad almahadeen", a real published date (from git history) and a last updated date, and a featured image with alt text.
- No fake statistics, fake studies, fake quotes, invented personal experience, or exaggerated promises.

### Tools and privacy
- Every tool page keeps its ToolGuide: how to use, example, tips, limitations, FAQ.
- Privacy wording must match the code. AI tools: text is sent to Google Gemini; ToolNest has no accounts and keeps no input history on its pages. Browser-only tools: say so only after verifying in the code that nothing is sent or stored. Never promise "no storage" or "fully private". Link to /privacy-policy.
- Privacy answers must be worded differently on each page.
- Examples that show numbers must be labeled as illustrative.

### SEO
- Each page needs a unique title (30-60 chars) and meta description (90-155 chars), exactly one H1, a self-referencing canonical, and alt text on images.
- Every tool needs at least 2 incoming internal links, and every article links to at least 1 relevant tool using real routes only.

### Process
- Do not modify protected files without my explicit permission: layout.tsx, sitemap.ts, robots.ts, contact/page.tsx, api/generate/route.ts, lib/gemini.ts.
- Restore next-env.d.ts to match origin/main before every commit.
