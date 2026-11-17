# Repository guidance for Codex

Project: Shakil Mahmud's original dark interactive personal portfolio for recruiters. Existing Next.js App Router, TypeScript, Tailwind CSS, ESLint project, already equipped with `motion`, `gsap`, `lucide-react`.

- Do not recreate the project or replace it with a one-file HTML page, iframe, or `dangerouslySetInnerHTML` reproduction.
- Read `CODEX_TASK.md` and inspect `reference/interactive-v2.html` before changes. `reference/screenshots/` contains design reference screenshots.
- Treat `src/content/portfolio.ts` as the authoritative public-content data source. Preserve factual stage labels, limitations, and links; do not invent details.
- `reference/interactive-v2.html` is the target design and interaction reference, NOT the implementation. Compose accessible React components.
- Use CSS for sticky layout. Use Motion for React for interaction transitions and GSAP ScrollTrigger only when justified; cleanup listeners/animations.
- Never commit secrets, API keys, private documents, `node_modules/`, `.next/`, `.env.local`, or unreviewed resumes. The supplied portrait is intentionally public.
- Motion Off and reduced-motion users must see all content and get the same functionality.
- Verify TypeScript, lint, production build, local navigation and responsive UI. Report what you did and what remains untested.
- Do not push to GitHub, provision services, purchase domains, or deploy on the user's behalf without explicit approval.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
