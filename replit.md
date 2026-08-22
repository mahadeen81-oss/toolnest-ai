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
