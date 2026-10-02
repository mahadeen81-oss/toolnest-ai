# ToolNest AI

Simple AI tools for everyday work — writing, content creation and productivity.
Built with Next.js 14 (App Router), React, TypeScript and Tailwind CSS.

## 1. What was built

A real, functional web app (not a static mockup):

- **Pages:** Home, AI Tools (searchable/filterable directory), About, Contact,
  Privacy Policy, Terms of Service, plus one page per tool.
- **7 working AI tools**, each with input fields, a Generate button, a loading
  state, an output panel, Copy and Clear — all sharing one component
  (`components/tools/ToolRunner.tsx`) so adding a new tool later is just:
  1. Add its prompt logic to `lib/gemini.ts`
  2. Add its metadata to `lib/tools-config.ts`
  3. Add a page under `app/tools/<slug>/page.tsx` that renders `<ToolRunner />`
     with the right fields.
- **One shared API route** (`app/api/generate/route.ts`) that all tools call.
  It validates the request, builds the right prompt server-side, and calls
  Gemini. The API key never reaches the browser — it's read from
  `process.env.GEMINI_API_KEY` inside `lib/gemini.ts`, which only the API
  route imports.
- **Monetization placeholders** (`components/AdPlaceholder.tsx`) for a banner,
  a sidebar slot, and a premium upsell — clearly labeled, no real ad code yet.
- **SEO basics**: per-page titles/descriptions via Next.js `metadata`, Open
  Graph tags in the root layout, semantic HTML, clean URLs (`/tools/ai-writer`, etc).
- **Input validation**: required-field checks in the UI, plus server-side
  checks (missing fields, oversized input) in the API route.
- Mobile-first, responsive Tailwind styling with visible keyboard focus states
  and `prefers-reduced-motion` support.

### ⚠️ Not yet run/tested in this environment
This sandbox has no network access, so `npm install` could not be run here
(confirmed: npm returned a 403 trying to reach the registry). The code was
written carefully and follows standard Next.js 14 App Router patterns, but
you should run it locally (steps below) and fix anything that surfaces on
first build — treat this as a strong, complete first draft rather than a
tested build.

## 2. How to run it

```bash
# 1. Install dependencies
npm install

# 2. Add your Gemini API key
cp .env.example .env.local
# then edit .env.local and paste your real key into GEMINI_API_KEY

# 3. Run the dev server
npm run dev
# open http://localhost:3000
```

For production:

```bash
npm run build
npm start
```

## 3. Where the Gemini API key goes

- Get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).
- Put it in `.env.local` (already git-ignored) as `GEMINI_API_KEY=...` —
  **never** rename it to start with `NEXT_PUBLIC_`, since that prefix is
  what makes Next.js env vars visible in the browser bundle.
- It's only ever read in `lib/gemini.ts`, which is only imported by
  `app/api/generate/route.ts` (a server-only route handler). No client
  component touches it.
- When deploying (Vercel, etc.), set `GEMINI_API_KEY` as a server-side
  environment variable in your hosting dashboard, not in any client config.
- `GEMINI_MODEL` is optional and defaults to `gemini-3.7-flash`. Check
  [ai.google.dev](https://ai.google.dev) for the current recommended model
  name before you launch, since Google updates these over time.

## 4. What to build next for real users & monetization

1. **Run and fix the first build.** Untested code, however careful, needs a
   real `npm run build` pass — check the terminal for type errors and
   Tailwind class issues.
2. **Rate limiting.** Add per-IP or per-session limits on `/api/generate` so
   one user can't burn through your Gemini quota (e.g. Upstash Ratelimit or
   a simple in-memory/Redis counter).
3. **Analytics.** Add privacy-respecting analytics (e.g. Plausible, or GA4)
   to learn which tools people actually use.
4. **Real legal pages.** Replace the placeholder Privacy Policy and Terms
   with reviewed copy — required before AdSense will approve the site.
5. **Domain + hosting.** Deploy to Vercel (simplest for Next.js), attach a
   custom domain, and confirm HTTPS.
6. **AdSense application.** Once there's real content, traffic, and the
   legal pages are in place, apply for AdSense and swap `AdPlaceholder`
   slots for real ad units.
7. **Error monitoring.** Add something like Sentry so failed Gemini calls in
   production don't go unnoticed.
8. **More tools.** The architecture is built to make this cheap — each new
   tool is one prompt function, one config entry, one page.
