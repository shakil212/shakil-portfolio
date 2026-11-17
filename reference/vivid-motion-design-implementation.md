# Shakil Mahmud — Vivid Motion–Inspired Portfolio Design Implementation

**Purpose:** Codex-ready design direction for the existing `student-portfolio` Next.js project.
**Source:** `Vivid_Motion_Portfolio_Design_Study(1).docx` provided by the portfolio owner, November 14, 2026.
**Creative boundary:** Translate general interaction principles into an original visual identity. Do **not** copy Vivid Motion's code, brand assets, text, imagery, or exact layouts.

## 1. Context and audience

- Portfolio owner: **Shakil Mahmud**
- Education: BSc Computer Science and Engineering, Data Science major, United International University; graduation expected May 2027.
- Positioning: Student developer and researcher presenting full-stack software, AI/ML explorations, human-centered research, and workflow/system design.
- Primary audience: Employers recruiting interns and entry-level talent.
- Goal: Recruiters can learn who Shakil is in 10 seconds, identify useful projects within 30 seconds, and inspect credible evidence and contact details within 1–2 minutes.
- Use the existing real portfolio data from `src/content/portfolio.ts` when available. Do not overwrite or fabricate personal details.

## 2. Visual system

- Background: `#0B0B0E`
- Surface: `#19191F`
- Primary text: `#F4F1EC`
- Secondary text: `#91909B`
- Accent: `#C7A6F8` (used sparingly for focus, primary action, and active controls)
- Typography: **Geist** for display, headings, and body text; a restrained monospaced face for metadata and status labels. Original typography composition, not an exact clone of the reference site's licensed serif type.
- Layout character: large headlines, considered whitespace, asymmetrical editorial grids, image- or diagram-led project storytelling, thin separators, rounded media, pill-shaped controls.
- Project artwork carries its own color palette; UI chrome stays subdued.

## 3. Pages and flow

### Homepage
1. Minimal header: name/wordmark, `Work`, `Research`, `About`, `Contact`, and a resume action **only if a reviewed PDF path exists**.
2. First screen: “Shakil Mahmud,” accurate CSE/Data Science description, concise positioning, **Explore Work** and **Contact Me**. Keep CTAs visible without scrolling.
3. Selected work: 3 genuine projects in an editorial gallery with one desktop sticky context rail: project name, category, status, and Shakil's contribution remain readable as images/diagrams advance.
4. A visible route into the complete project archive.
5. Research shortlist: compact reading rows, accurate maturity labels; link to details.
6. About: authentic portrait (if available), short biography, CodeAlpha internship, UIU education, achievements, and skills tied to project evidence.
7. Contact finale: email, GitHub, LinkedIn, and opportunity availability; no artificial client/office sections.

### Work archive
- Filters: `All`, `Software`, `AI & Research`, `Systems Design`, `Hardware & IoT`.
- Use accessible buttons or links, indicate selected state, keep keyboard interaction intuitive.
- Each card shows an authentic image/diagram when available, title, short description, category, project maturity/status, and a link to a case study.
- Cards must stay usable if an image fails to load or JavaScript is disabled.

### Project detail
- Desktop: sticky or fixed-in-flow compact context column beside an advancing evidence gallery, **without** stealing the main scrolling behavior.
- Mobile: stack the context and gallery, no sticky/pinned gallery.
- Each case study must contain: objective, Shakil's contribution, technology, implementation/process, genuine evidence, limitations, current status, links only when verified.
- Use captions explaining what each screenshot or diagram demonstrates. Never invent UI screens or project outcomes.

### Research detail
- Question, method, findings or current hypothesis, individual contribution, limitations, and publication/maturity status.
- Separate research manuscripts from associated dashboard demonstrators.
- Do not present unpublished, ongoing, or conceptual work as peer-reviewed or experimentally validated.

## 4. Three featured project sequences

1. **CareerPath AI — Full-stack MVP**
   - Candidate evidence: actual user-profile screen, career-guidance flow, and a simple labeled architecture diagram of Next.js → Django REST Framework → PostgreSQL.
   - State accurately: deployment hardening is ongoing.
2. **MOT-SSL-GRU — Research demonstrator**
   - Candidate evidence: real Streamlit submission page, experiment notes, and pipeline-state view.
   - State accurately: dashboard does **not** integrate live trained-model inference. Unpublished course research is a separate artifact.
3. **Personal Automation System — Built Python utility**
   - Candidate evidence: bilingual schedule/reminder or notification example using sanitized content, and a clearly labeled explanatory workflow diagram.

If authentic screenshots are not available, use elegantly designed **labeled evidence placeholders** (not fictitious UI renders) and maintain accessible project links.

## 5. Motion specification

### Entry
- Headline lines reveal in approximately **450 ms**, staggered by **60 ms**.
- Never hide the identity, navigation, or meaningful first-screen content while animation is pending.

### Featured projects
- Desktop only: **sticky context rail** alongside naturally scrolling project visual panels.
- Active project label updates as each project crosses roughly the viewport midpoint. Crossfade active label in approximately **180 ms**.
- Rail releases after the third featured project; do not pin the whole page or hijack scrolling.
- Use IntersectionObserver when suitable; GSAP/ScrollTrigger only where it provides a clear advantage.

### Links and cards
- On fine-pointer hover only, project cover may scale up to **1.02 over 220 ms**.
- Keep title/status/caption visible even without hover.
- Clear visible lavender focus indicator; Enter activates cards; one tap opens them.

### Optional video
- Add a showreel/play dialog **only** if a genuine walkthrough video is supplied.
- Use a poster, load player on user request, provide proper controls, return focus to the play control on close, and support Escape.
- Never insert a fake showreel merely to imitate the reference.

### Mobile and reduced motion
- At around **767 px and below**, stack featured projects and project details; remove sticky context rail and hover-only treatments.
- `prefers-reduced-motion: reduce`: disable parallax, pinning, transforms and staggered entrances; all text and links remain immediately visible.
- Avoid lengthy marquees, cursor followers, and arbitrary loading screens.

## 6. Technical implementation

Existing dependencies: Next.js, TypeScript, Tailwind CSS, Motion for React (`motion`), GSAP (`gsap`), and `lucide-react`.

Suggested organization:

```text
src/
  app/
    page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    research/[slug]/page.tsx
    globals.css
  components/
    layout/Header.tsx
    sections/Hero.tsx
    sections/FeaturedWork.tsx
    sections/ResearchHighlights.tsx
    sections/About.tsx
    sections/Contact.tsx
    projects/ProjectCard.tsx
    projects/ProjectCaseStudy.tsx
    motion/Reveal.tsx
    motion/FeaturedWorkObserver.tsx
  content/portfolio.ts
```

Keep the main page as server-rendered as possible. Mark only animation and filter widgets as client components. Use semantic HTML, keyboard-operable controls, `next/image`, real alt text, optimized fonts, and SEO metadata. Use an isolated CSS token system. Do not introduce unnecessary new libraries.

## 7. Implementation order (work in these phases)

1. Inspect repository and existing real content; note missing screenshot and resume assets rather than inventing them.
2. Build a beautiful **static** homepage, navigation, work archive, project routes, research views, and contact section.
3. Build the three authentic featured project storytelling sequences and captions.
4. Add restrained entrance animation, active-project rail, desktop hover, and focus behaviors.
5. Add responsive and reduced-motion fallbacks.
6. Check accessibility, links, metadata, image failures, and runtime performance.
7. Run ESLint, TypeScript validation, and the production build; resolve errors.

## 8. Acceptance criteria

- At **320, 390, 768, and 1440 px**, a visitor can open a project, return to the archive, change a category filter, read a research item, and reach contact.
- All of the above work with keyboard navigation, and under reduced-motion settings.
- Project labels and maturity/status agree between the homepage, archive, and case pages.
- No empty or invented demo links, no fabricated screenshots, no invented publication or performance claims.
- Missing images preserve a meaningful project title and destination.
- Core content remains legible while animation scripts load and when they fail.
- `npm run lint` and `npm run build` succeed; run `npx tsc --noEmit` as an additional check.

## 9. Codex starting instruction

> I already initialized `student-portfolio` with Next.js, TypeScript, Tailwind, and the App Router and installed `motion`, `gsap`, and `lucide-react`. Read `VIVID_MOTION_DESIGN_IMPLEMENTATION.md` and `src/content/portfolio.ts` completely. This spec distills the attached design study into implementation requirements. Keep all real profile information accurate and build my original dark cinematic portfolio in the specified phases. Do not recreate the repository. First inspect the existing files, then implement the static site before animation. Prioritize a sticky-context featured-work sequence for CareerPath AI, MOT-SSL-GRU, and Personal Automation System, with appropriate mobile and reduced-motion fallbacks. Run lint, TypeScript, and build checks. Tell me what you changed and what genuine screenshots or links I still need to provide.
