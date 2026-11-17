# CODEX TASK — Implement Shakil Mahmud's approved Interactive V2 design

You are a senior creative frontend engineer, UX designer and Next.js reviewer working in an ALREADY INITIALIZED `student-portfolio` Next.js App Router project.

## 0 — Inspect first

- The project already uses TypeScript, Tailwind CSS, ESLint, App Router, `src/` and `@/*` alias. `motion`, `gsap` and `lucide-react` were installed.
- Do NOT run create-next-app, make another nested app, replace the repo wholesale, or discard existing user changes.
- Read `reference/interactive-v2.html` in full, including its CSS and JavaScript behavior; inspect `reference/screenshots/*.png` for intended look and spacing. Read `reference/vivid-motion-design-implementation.md` for the motion system.
- Read `src/content/portfolio.ts` in full; use it as the single source of truth for public facts and project statuses.
- Inspect git status and existing components; reuse working code. First explain a compact component plan; then implement, not just describe.

## 1 — Required outcome

Recreate the **approved Shakil Mahmud Interactive V2 demo** as a real Next.js + React site with original, recruiter-friendly cinematic dark design and smooth behavior. The existing HTML is a visual/interaction specification, NOT code to paste into JSX or iframe. Preserve the same overall identity, spacing rhythm, contrast, visual hierarchy, meaningful illustrations, dark backgrounds, lavender highlights and mobile styling. Don't copy third-party intellectual property from vividmotion.co.

Target palette: near-black #0B0B0E; surface #19191F; ivory #F4F1EC; muted #91909B; lavender #C7A6F8. Editorial serif-inspired display headings and clean, legible body; use next/font if convenient, with a resilient fallback. Use the included original headshot `public/images/shakil-portrait.jpg` in About.

## 2 — Pages and components

**Home `/`:** fixed desktop header and mobile nav; polished hero with Shakil's name/identity, headline, Explore Work and Contact; animated progress bar; V2 floating dock and active-section state; selected work; project archive; research; about/education/internship/skills/recognition; final contact block and footer.

**Case studies `/projects/[slug]`:** each published project in `portfolio.ts` should have its own shareable, directly accessible page (rather than relying only on a modal). Display accurate summary, category, maturity, contribution, tools, limitations, real evidence, valid links only and back navigation. Generate routes from the typed data.

**Archive `/projects`:** accessible filters (All, Software, AI & Research, Systems Design, Hardware & IoT) plus immediate search and result count. Reuse the homepage archive component if appropriate. Ensure search/filter state and empty states work.

**Research:** present status clearly; optionally add `/research` if the content benefits from its own page.

Suggested components: `Header`, `Hero`, `ScrollProgress`, `FeaturedWork`, `ProjectArchive`, `ProjectCard`, `ProjectDialog` (optional quick view), `CommandPalette`, `FloatingDock`, `ResearchList`, `About`, `Contact`, `Footer`, and appropriate hooks.

## 3 — Interactions to faithfully recreate

1. **Hero & section flow:** tasteful headline/stagger reveals, good typographic timing, scroll-linked but never scroll-hijacked storytelling. Content is accessible without scrolling effects or JS choreography.
2. **Featured work:** desktop sticky left context rail + three project artwork frames on the right. Update active title, category, technology and stage as each artwork reaches the scroll focus threshold. Implement clickable chapter jumps. On mobile, stack sections and eliminate pinning.
3. **Quick Find:** visible launcher, Ctrl/Cmd+K shortcut, optionally `/` outside editable fields. Search website sections and projects/research; arrow keys, Enter and Escape; proper modal semantics, tab containment and focus restoration. Make keyboard shortcuts discoverable.
4. **Archive:** category filters AND keyword search, live counts, reset action, visible status and descriptive preview links; keyboard and screen reader support.
5. **Project details:** optional accessible quick-view dialog with next/previous and Escape (if implemented); make each project also open its canonical `/projects/[slug]` page and work when linked directly.
6. **Research details:** accessible method/status/detail explanations; distinguish unpublished manuscripts from in-progress/idea-stage work.
7. **Controls:** floating navigation/quick-find/motion toggle/back-to-top; save motion preference locally if appropriate; scroll progress and active nav; modest pointer spotlight only for fine-pointer devices.
8. **Microinteractions:** restrained hover lift and easing, focus treatments, intentional entrance animation, no obtrusive cursor effects or autoplay media.
9. **Motion preferences:** default respects `prefers-reduced-motion`; override with on/off UI while retaining all content and working navigation. Avoid mismatched server/client hydration.
10. **Performance:** no scroll polling without requestAnimationFrame, expensive repaint loops, animation leaks, or massive inlined base64 headshots. Refer to actual `public/images/shakil-portrait.jpg` rather than the demo's embedded data URI.

## 4 — Non-negotiable truth in content

Do not invent employers, metrics, awards, production deployments, app features, links, fake screenshots or published research claims. When authentic screenshots are missing, use original explanatory illustrations clearly labeled **Illustrative concept**.

Specific stage constraints:
- CareerPath AI: full-stack MVP; hardening ongoing, not production-validated.
- MOT-SSL-GRU dashboard: research demonstrator, **not** live trained-model inference.
- MOT-SSL-GRU manuscript: completed, unpublished university-course research.
- Prompted, Not Taught: unpublished university team HCI report based on 22 interviews.
- EcoToken-BN: working manuscript, formula-derived energy estimates, not measured hardware improvement.
- FGAP: conceptual design, no verified performance.
- PHARVO: academic workflow/system design, not deployed pharmacy software.
- Project Savior: in development, no field validation.
- CodeAlpha AI/ML internship: Jan–Mar 2026; do not overstate tasks or outcomes.
- UIU CSE/Data Science: expected graduation May 2027.

Do not add a phone number by default. Show a Resume download action only when a user-reviewed public PDF actually exists. Real email/GitHub/LinkedIn links are in content data; don't guess project repos or demo URLs.

## 5 — Architecture and design rules

- Use App Router, TypeScript and Tailwind with maintainable modular code; static content in server components where possible, interactions in scoped client components.
- Reuse data from `src/content/portfolio.ts`, adding typed helpers without redundant hard-coded arrays.
- Implement `next/image` on real image assets; size assets appropriately; use semantic HTML, heading hierarchy, alt text and visible keyboard focus.
- Avoid nested links, interactive divs without keyboard semantics, inaccessible dynamic content, click traps and broken anchor behavior.
- Use `motion/react` for UI animation; register `gsap/ScrollTrigger` only in client-side scope if genuinely needed, with cleanup.
- Desktop and mobile should feel deliberate rather than merely scaled-down. Test 320, 390, 768 and 1440 CSS pixel widths; no horizontal overflow.
- SEO: correct title/description, Open Graph metadata, canonical host after deployment, sitemap if useful, and no placeholder URLs presented as live.

## 6 — Implementation order

Phase A: inspect existing repo, compare reference files, plan components and route structure.
Phase B: implement design tokens, layout, header, hero, About, Contact and correctly wired content; make static design functional.
Phase C: implement selected-work sticky context, project archive, individual project routes and research sections.
Phase D: add Quick Find, project quick views if useful, scroll progress, floating dock, motion settings, active sections.
Phase E: polish animations, mobile, keyboard/focus, reduced-motion, loading/failure states and imagery.
Phase F: run `npm run lint`, `npx tsc --noEmit`, `npm run build`; resolve failures; review available viewport/browser testing; explain manual checks if browser automation unavailable.

After each phase, keep the app running. Do not stop after writing a plan. Save changes. Do NOT push to GitHub or deploy until I ask.

## 7 — Acceptance criteria

- The working Next.js app feels visually close to the provided *Interactive V2* demo, without being a one-file port.
- Hero, work, archive, research, about and contact display real, properly qualified content.
- Desktop featured work rail tracks the visible selected project and doesn't overlap neighboring sections.
- Project filter + search work together; reset returns full archive; all cards have direct case-study links.
- Quick Find opens with keyboard shortcut and closes with Escape; focused control returns focus on close.
- Motion toggle works; reduced-motion mode remains readable and navigable.
- Keyboard-only user can use all controls; modal (if built) has correct focus handling.
- Responsive widths 320/390/768/1440, clean console, no broken assets/links, no invented accomplishments.
- Lint + TypeScript + production build pass. Report any checks not actually executed.

Begin by listing the files you inspected and a short execution plan, then **build the complete working website**, not merely a mockup.
