# Start here — Shakil Mahmud Interactive V2 → Codex → Vercel

**Historical setup instructions:** the app has now been implemented in this existing project. Use `README.md` to run it and `RELEASE_READINESS.md` for the current release status. The original handoff instructions below are retained for context; do not recopy them over the implementation.

This is a **handoff kit**, not a completed Next.js application. Your current `student-portfolio` installation is the application. Do not run `create-next-app` again.

## Copy into the existing project

Extract this archive, then copy its contents (including `reference/`, `AGENTS.md`, `CODEX_TASK.md`, `DEPLOY_TO_VERCEL.md`, `src/content/portfolio.ts`, and `public/images/shakil-portrait.jpg`) into the root of your existing `student-portfolio` project. Preserve any changed application files; review before overwriting an existing `portfolio.ts`.

These files serve different purposes:
- `reference/interactive-v2.html` — the approved V2 design and interactions reference; Codex should inspect it, not embed it in the final site.
- `reference/screenshots/*.png` — target screenshots for visual comparison.
- `reference/vivid-motion-design-implementation.md` — deeper visual and motion study.
- `src/content/portfolio.ts` — factual public content.
- `public/images/shakil-portrait.jpg` — optional public headshot.
- `AGENTS.md` — concise persistent Codex guidance.
- `CODEX_TASK.md` — full implementation specification.
- `DEPLOY_TO_VERCEL.md` — local tests, GitHub and Vercel steps.

## One prompt for Codex

> I want to implement the approved Interactive V2 portfolio in this EXISTING Next.js project. Read `AGENTS.md`, `CODEX_TASK.md`, all `reference/` design files and `src/content/portfolio.ts`. Inspect the current project first, then implement all phases in `CODEX_TASK.md` as working reusable Next.js code. Preserve existing work. Run lint, TypeScript and a production build. Do not fabricate personal information, screenshots or links. Do not push or deploy until I approve.

## When Codex finishes

Follow `DEPLOY_TO_VERCEL.md`. Do not deploy until the content, public imagery, links and build checks have been reviewed.
