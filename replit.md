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
