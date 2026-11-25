# Interactive V3 professional career expansion

## Implementation record · 26 November 2026, Asia/Dhaka

The existing Next.js portfolio now presents Shakil Mahmud as a Computer Science & Engineering undergraduate interested in technology, business and innovation. The hero gives his identity, location and availability. The About section explains how his software projects, user interviews and process designs support technical and corporate pathways. The new directories use the existing dark palette, serif headings and lavender focus treatments.

### Recruiter experience and content

| Area | Implementation |
| --- | --- |
| Career focus | Six pathways cover software and technology, AI and data, design and digital, business and corporate, people and customer-focused roles, and research and innovation. Each disclosure connects role interests to specific project evidence, coursework and transferable abilities. |
| Skills | Fourteen searchable categories cover programming, web and software, AI/ML, data and MIS, UI/UX, Microsoft Office and administration, business operations, digital content, QA and support, research, development tools, additional academic exposure, professional skills and languages. The directory names concrete Excel capabilities, including formulas and charts. Bangla has native proficiency and English has working proficiency. Related-work links connect each applicable category to a case study. |
| Education | UIU in Dhaka, BSc in Computer Science and Engineering, Data Science major in progress, June 2022 to May 2027 expected. Neural Networks, present in the previous record, is retained separately as additional academic exposure. |
| Experience | One timeline entry records the remote CodeAlpha Artificial Intelligence & Machine Learning internship, January through March 2026. |
| Project archive | Eleven distinct project case studies. Digital Wheelchair with Advanced Functionality and Eid Salami join the nine existing entries. Career focus combines with discipline and keyword filters on both archive surfaces. Case studies link to related interests and coursework where supported. The earlier published portfolio link is labeled explicitly. |
| Research | All six existing routes and stage qualifications are retained. The MOT-SSL-GRU course manuscript and dashboard are separate records. The HCI team report retains its 22 interviews. EcoToken-BN identifies formula-derived estimates, FGAP has one conceptual research entry, and both proposed research topics retain their limitations. |
| Recognition and training | First Runner-up in both the Object-Oriented Programming Contest and Electronics Lab Contest. Two Google introductions are dated April 2026 and the Kaggle / Google AI Agents intensive is dated December 2025. University project-show presentations, academic teamwork and technical presentations are listed separately. |
| Learning interests | HR and recruitment, digital marketing, software QA, business development and IT support have their own section. Visitors can distinguish current study from demonstrated capabilities and employment. |
| Contact and identity | The original six icon-only social links retain their accessible names. The existing Instagram configuration already contained the requested handle. The contact invitation, page metadata and local social card use the updated professional identity. |

### Academic coursework

The course names below are the fifteen supplied for the academic record. Career and project connections indicate subject relevance. Grades, credits and completion dates were not supplied.

| Subject | Courses |
| --- | --- |
| Programming and computing fundamentals | Structured Programming Language · Data Structure and Algorithms · Object-Oriented Programming |
| Artificial intelligence and data science | Artificial Intelligence · Machine Learning · Data Mining · Digital Image Processing |
| Software engineering and system design | Software Engineering · System Analysis and Design · Human-Computer Interaction |
| Database, systems and networking | Database Management System · Operating System · Computer Network · Computer Security |
| Business and management | Project Management |

### Files changed in this expansion

| Change | Files |
| --- | --- |
| Modified content, search and metadata | `src/content/portfolio.ts`, `src/lib/portfolio.ts`, `src/lib/commands.ts`, `src/lib/metadata.ts` |
| Modified pages and social image | `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/projects/[slug]/page.tsx`, `src/app/og/route.tsx` |
| Modified sections and archive | `src/components/sections/About.tsx`, `Hero.tsx`, `Contact.tsx`, `FeaturedWork.tsx`, `ResearchList.tsx` in the same directory, and `src/components/projects/ProjectArchive.tsx` |
| Modified navigation and motion | `src/components/layout/Header.tsx`, `SiteChrome.tsx` in the same directory, `src/components/navigation/CommandPalette.tsx`, `src/components/motion/CustomCursor.tsx` |
| Added sections | `src/components/sections/AcademicProfile.tsx`, `CareerFocus.tsx` and `SkillsDirectory.tsx` |
| Added shared UI and navigation | `src/components/ui/DirectoryEntry.tsx`, `ProjectLinks.tsx` in the same directory, `src/components/navigation/FragmentNavigation.tsx`, `src/app/professional-profile.css` |
| Modified verification and documentation | `scripts/verify-portfolio.mjs`, `eslint.config.mjs`, `README.md`, `RELEASE_READINESS.md` |

The working tree already contained edits to the package manifest, lockfile, featured showcase, floating dock and readiness report. The earlier audit is preserved below. No application dependency was added for this expansion.

The owner supplied an Eid Salami description and a wheelchair presentation credit. Their case studies use only those details. The portfolio omits unsupported implementation stacks, deployment URLs, certificate identifiers, project outcomes, field validation, unverified research performance, private résumé documents and phone numbers.

### Verification and release decision

**GO for local recruiter review. NO-GO for public release.** The production build has no owner-approved canonical origin. Its deliberate noindex, robots and sitemap safeguards are functioning. Public hosting, external social previews and field performance require a separately approved release.

| Check | Result | Evidence and scope |
| --- | --- | --- |
| ESLint, TypeScript, production build | PASS | `npm.cmd run lint`, `npx.cmd --no-install tsc --noEmit` and `npm.cmd run build` exited successfully on the final source. Next generated 28 static outputs. |
| Routes, navigation and assets | PASS | The production verifier checked 20 distinct pages, 72 unique internal destinations and 21 assets, including the social image, robots and sitemap. All Quick Find destinations exist. Missing routes returned the expected missing-page behavior. |
| Recruiter content and filtering | PASS | Assertions check the exact 15 course names in source and rendered HTML, six career categories, fourteen skill groups, five learning groups, eleven projects and six research records. A people-focused Systems Design search for training resolves to the employee-development prototype. |
| Four responsive browser journeys | PASS | Headless Chrome at 320 × 720, 390 × 844, 768 × 1024 and 1440 × 900. Homepage client/scroll widths matched at 320/320, 390/390, 768/768 and 1440/1440. Expanded pathway and course content, research, and both new case studies fit. All six Contact targets measured 52 × 52 CSS pixels. [Browser results](.audit/career-expansion/browser.json) |
| Interactive navigation and accessibility | PASS for exercised journeys | Keyboard Ctrl+K, arrows, Enter, Tab containment, Escape and opener restoration. Selecting a course opened its disclosure and focused the course. Selecting a skill after searching Excel cleared the old filter and focused the requested category. The empty skills and project states reset successfully. The mobile menu returned focus to its trigger. Browser Back/Forward returned to the correct case study and career disclosure. |
| Motion and progressive enhancement | PASS for exercised journeys | Motion Off survived reload and allowed navigation. Under emulated reduced motion, decorative effects stayed off and a keyboard course jump worked. The desktop featured context tracked the requested chapter, VIEW appeared over the illustration and keyboard input restored the native cursor. Opening a skills group with JavaScript disabled exposed its contents. |
| Case study browser loads | PASS | Chrome directly opened all 11 project pages and all six research pages at 390px, with a visible main heading and matching document/client widths. The four interactive journeys logged no console or page errors. |
| Instagram and Contact | PASS | The rendered Contact group contains six unique icon-only links with accessible names. Instagram already pointed to the requested destination. An unauthenticated GET returned HTTP 200 at the same URL. The mail link uses the owner's supplied address. [Instagram profile](https://www.instagram.com/shakil__735/) |
| Production dependency audit | PASS | `npm.cmd audit --omit=dev` reported zero vulnerabilities. |
| Development dependency audit | FAIL | The full npm audit reported eight moderate affected-package entries through the existing TypeScript ESLint tooling chain, up from seven entries in the previous report. They reference one minimatch advisory. No forced fix or dependency change was applied. [GitHub advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) |
| Public indexing | FAIL for release | Local noindex, disallow-all robots, empty sitemap and absent canonical are expected for an unconfigured origin. The route verifier also checks a configured fixture origin without assigning a public domain. |
| Assistive technology and field conditions | NOT TESTED | Screen-reader and voice-control sessions, real devices, field INP, production HTTPS and hosting response headers, external social-platform previews, mail delivery and a clean deployment installation. |

The repository scan checked 75 candidate files, the staged index, twelve protected-path ignore rules and image metadata. It found no matches and there were zero staged files. The public assets directory contains only the supplied portrait. Requests to `/.env.local`, `/.git/config`, `/private/resume.pdf` and an ignored audit JSON path all returned 404 in the local production server. The scan covers its documented patterns and current files.

### Performance and accessibility measurements

Lighthouse 13.6.0 ran against the loopback production server in headless Chrome 157. The mobile runs used simulated throttling at 390 × 844. The desktop run used the desktop preset at 1440 × 900. Measurements cover homepage navigation.

| Final run | Performance | Accessibility | Best practices | SEO | LCP | Total blocking time | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Desktop](.audit/career-expansion/final-desktop.json) | 100 | 100 | 100 | 66 | 0.33 s | 1 ms | 0 |
| [Mobile 1](.audit/career-expansion/final-mobile-1.json) | 93 | 100 | 100 | 66 | 1.12 s | 302 ms | 0 |
| [Mobile 2](.audit/career-expansion/final-mobile-2.json) | 76 | 100 | 100 | 66 | 1.20 s | 1,136 ms | 0 |
| [Mobile 3](.audit/career-expansion/final-mobile-3.json) | 93 | 100 | 100 | 66 | 1.07 s | 316 ms | 0 |

**Mobile performance remains variable.** The median score of 93 exceeded the requested target of 90 and the previous recorded score of 86. One final run fell to 76. Final median blocking time was 316 ms, versus the previous recorded 563 ms. All three runs exceeded the historical 200 ms follow-up target. The desktop score matched the previous 100. The intentional noindex policy accounts for the SEO score of 66.

The first expansion measurements were [99 desktop](.audit/career-expansion/desktop.json) and [69 mobile](.audit/career-expansion/mobile.json). The mobile trace included a 2.82 s unattributed long task. Quick Find and the desktop-only GSAP cursor now load on demand, closed skill groups defer their contents with a native no-script fallback, and related-work links inside the directories use ordinary anchors. The final mobile homepage had 1,459 DOM elements, down from 1,658 in the first expansion measurement. A single run cannot isolate the effect of any one change.

The initial accessibility audit reproduced the earlier warning on all three featured artwork links. The illustrations and their clickable overlays now have separate accessible names. All four final reports had zero failed accessibility audit references. The keyboard retest also caught a timing issue when a Quick Find result was filtered out of the skills directory. The final implementation restores the unfiltered category before opening it and moving focus.

Representative local screenshots include the [desktop hero](.audit/career-expansion/hero-1440.png), [tablet hero](.audit/career-expansion/hero-768.png), [mobile career evidence](.audit/career-expansion/career-390.png), [skills at 320px](.audit/career-expansion/skills-320.png), [mobile coursework](.audit/career-expansion/course-390.png) and [Contact at 320px](.audit/career-expansion/contact-320.png). The complete earlier audit follows with its original measurements and coverage limits.

## Historical Interactive V3 audit · 24 November 2026

Updated **24 November 2026 (Asia/Dhaka)**. Evidence was collected on 22–24 November; report timestamps identify each run. This continues the existing audit and supersedes the earlier “browser/performance untested” summary. Historical evidence is retained in `.audit/release-review/prior-readiness.md`.

## Recommendation: NO-GO for public release

The production build, route checks, requested responsive layouts, and production dependency audit pass. Public release remains blocked by the missing approved canonical origin and incomplete interactive accessibility/motion validation. Mobile main-thread blocking and an open development-only advisory also require follow-up. An automated accessibility score of 100 does **not** establish WCAG conformance.

The V3 design, central portfolio content, links, and existing work were preserved. Changes were limited to confirmed layout and accessibility defects. No dependency upgrades, public-domain selection, push, or deployment were performed by this audit. A separate checkpoint commit (`ddf1f89`) appeared during the resumed session; this audit did not create or undo it. Subsequent changes remain in the working tree.

## Test methods and limitations

- **Executed browser rendering:** Lighthouse 13.6.0 using installed headless Chrome 157, production `next start` on `http://127.0.0.1:3000`. All 18 portfolio pages loaded in browser audits. Read-only custom Lighthouse gathering measured document geometry, social targets, sticky CSS, and motion attributes. Screenshots were opened and visually reviewed for the requested homepage areas and representative detail pages.
- **Executed technical tests:** ESLint, TypeScript, production build, existing route/content/search/motion/metadata assertions, HTTP assets/external destinations, repository scan, and npm audits.
- **Source review:** modal implementation, keyboard handlers, cursor conditions/cleanup, parallax, magnetic controls, reveal cleanup, focus and navigation logic. These are not interactive passes.
- **Interactive browser testing NOT TESTED:** browser inventory still returns `The browser access host is unavailable`. The earlier native Chrome attempt was stopped by Computer Use because it could not determine the current URL confidently enough to enforce policy. No alternate interaction driver was used to bypass that stop. No Ctrl+K, real cursor hover, keyboard traversal, modal interaction, screen reader, or browser-history test was completed.
- Full-page screenshots preserve the original viewport using a local Lighthouse screenshot gatherer. Earlier standard Lighthouse full-page captures stretched the `100svh` hero while resizing the viewport; those are **not valid layout evidence**. Use the `release-*-home.png`, `route-390-*.png`, and `final-*.webp` files linked below.
- Desktop captures have a 15px vertical scrollbar: 768/1440 CSS viewports have 753/1425px content widths. This is expected, not overflow. Screenshots of a whole page do not prove sticky transitions or scrolling smoothness.
- One overlapping build temporarily invalidated the test environment. Measurements were paused; the production server was restarted after it finished. Final measurements used a stable build. Initial build-lock/cache failures and Chrome temporary-directory cleanup warnings are tooling incidents, not application passes or app failures.

## PASS / FAIL / NOT TESTED matrix

| Area | Status | Verified scope and remaining limitation |
| --- | --- | --- |
| 320 × 720 homepage | **PASS** | Hero/header, stacked artwork/cards, wrapped filters, Contact and footer; document/client 320/320px |
| 390 × 844 homepage | **PASS** | Same areas; document/client 390/390px |
| 768 × 1024 homepage | **PASS after fix** | Two-column archive and artwork fit; document/client 753/753px; prior overflow reproduced and corrected |
| 1440 × 900 homepage | **PASS** | Desktop navigation, hero, three-column archive, featured artworks, six Contact icons and footer; document/client 1425/1425px |
| Detail/index layouts | **PASS in tested sizes** | All 17 project/research routes rendered at 390px; representative CareerPath detail also checked at 320/768/1440px. Other detail routes at other widths NOT TESTED |
| Automated accessibility | **PASS for scored checks; open warning** | Final homepage scores 100; heading-order defect fixed; named icon links, contrast and target-size checks pass in measured states. Experimental artwork label warning remains |
| Wordmark, chapter, motion and dock names | **PASS after fixes** | See accessible-name evidence below; not a screen-reader or speech-control usability test |
| Contact target sizes | **PASS** | All six measured 52 × 52px; 320px wraps 4+2, 390px wraps 5+1, larger widths fit one row |
| Quick Find/search/filter logic | **PASS, technical only** | Pure-function tests cover searches, categories, combined terms, empty results and reset; 21 unique command destinations |
| Navigation and all page routes | **PASS, HTTP/static/browser-load only** | 18 pages, 44 unique internal destinations/anchors, 21 assets; all browser direct-route loads completed |
| Ctrl+K, live filters, keyboard/focus/modal, Back/Forward | **NOT TESTED** | Interactive host unavailable; exact manual steps below |
| Reduced-motion default | **PASS, emulated default** | 1440px Chrome forced reduced-motion: media query true, root motion/effects off, custom cursor absent, full document still fits |
| Cursor default mounting | **PASS, DOM inspection only** | Absent at 320/390; mounted at desktop widths with effects on; absent under reduced-motion emulation |
| Cursor VIEW/selection/fallbacks, magnetism, reveals, parallax, sticky transitions | **NOT TESTED interactively** | Source and static states reviewed; no hover/scroll interaction or smoothness claim |
| Lint / TypeScript / build / route audit | **PASS** | Rerun after final source edits; evidence below |
| Lighthouse desktop/mobile | **PERFORMED** | Final scores and timings below; field CWV and INP NOT TESTED |
| Public SEO/indexability | **FAIL — release blocker** | No approved origin; noindex/nofollow, disallow-all robots, empty sitemap and omitted canonical/absolute social URLs |
| OG endpoint/image | **PASS locally** | `/og` returns readable 1200 × 630 PNG; public social-platform preview NOT TESTED |
| Production dependencies | **PASS** | npm audit excluding dev: zero reported vulnerabilities |
| Full dependency audit | **FAIL — moderate dev advisory** | 7 moderate entries; one minimatch advisory; no high/critical entries; no forced upgrade |
| Secrets/private-file exclusion | **PASS within scan scope** | Repository script and HTTP probes pass; not an exhaustive history/secret-encoding audit |
| Hosting HTTPS/headers/redirects/fresh install/real devices | **NOT TESTED** | No deployment or hosting configuration performed |

## Responsive screenshots and confirmed fixes

The earlier 16-run homepage matrix covered `/`, `/#work`, `/#archive`, and `/#contact` at each requested width. All 16 post-artwork-fix documents fit. Final full-page captures complete the gallery/footer and 1440px review. The final label-only edits do not change the CSS; final desktop/mobile Lighthouse and the targeted desktop name retest verify those edits separately.

| Viewport | Final homepage evidence | Visual observations |
| --- | --- | --- |
| 320 × 720 | [Full page](.audit/release-review/release-320-home.png), [hero](.audit/release-review/release-320-home-part-0.png), [Contact/footer](.audit/release-review/release-320-home-part-8.png) | Menu button fits; title wraps; CTA buttons stack; archive is one column; email and icons fit |
| 390 × 844 | [Full page](.audit/release-review/release-390-home.png), [cards](.audit/release-review/release-390-home-part-3.png), [Contact/footer](.audit/release-review/release-390-home-part-7.png) | Readable wrapping, no document overflow, sixth social icon wraps intentionally |
| 768 × 1024 | [Full page](.audit/release-review/release-768-home.png), [cards](.audit/release-review/release-768-home-part-2.png), [Contact/footer](.audit/release-review/release-768-home-part-5.png) | Corrected artwork fits, two-column cards and all six icons fit |
| 1440 × 900 | [Full page](.audit/release-review/release-1440-home.png), [hero/navigation](.audit/release-review/release-1440-home-part-0.png), [artwork](.audit/release-review/release-1440-home-part-1.png), [archive](.audit/release-review/release-1440-home-part-2.png), [Contact/footer](.audit/release-review/release-1440-home-part-5.png) | Desktop layout verified; typography, artwork bounds, three-column cards and footer remain intact |

**R-01 — Medium, FIXED: homepage horizontal overflow at 768 × 1024.** Reproduction: load `/` or `/#contact` at 768px; inspect `documentElement.scrollWidth` and featured artwork right edges. Before: 769px scroll width versus 753px client width; artwork intrinsic minimum height/aspect ratio forced it beyond the column. `src/app/visual-refinements.css` now gives `.project-art` `width:100%; min-width:0`. After: 753/753px in both the 16-run matrix and final capture. [Before report](.audit/release-review/tablet-768-contact.report.html), [before screenshot](.audit/release-review/tablet-768-viewport-full.png), [after report](.audit/release-review/release-768-home.report.html).

**R-02 — Medium, FIXED: featured case-study overflow at 390 × 844.** Routes: `/projects/careerpath-ai`, `/projects/mot-ssl-gru-dashboard`, `/projects/personal-automation-system`. Reproduction: direct-load each at 390px and inspect document width/artwork/right-edge text. Before: scroll width 396px versus client 390px; the mobile grid's automatic minimum width expanded the content. Mobile `.case-grid` now uses `minmax(0,1fr)`. All three retest at 390/390px, accessibility 100. CareerPath also fits at 320/768/1440px. [Before screenshot](.audit/release-review/before-route-390-projects-careerpath-ai.png), [after screenshot](.audit/release-review/route-390-projects-careerpath-ai.png), [after report](.audit/release-review/route-390-projects-careerpath-ai.report.html).

**A-01 — Medium, FIXED: archive heading order.** `/projects`, 390 × 844. Reproduction: inspect heading outline/run Lighthouse; H1 was followed by project H3s. Added a visually hidden H2 “Project results” before the archive. Retest accessibility rises from 98 to 100, heading-order passes. [Before evidence](.audit/release-review/before-route-390-projects.report.json), [after report](.audit/release-review/route-390-projects.report.html).

**A-02 — Medium, PASS after fixes: visible text/accessibility-name mismatches.** `/` at desktop and detail routes such as `/projects/careerpath-ai` at 1440 × 900. Reproduction: inspect the wordmark, active chapter and floating dock with Lighthouse's `label-content-name-mismatch`. Wordmark now derives its name from separated visible text. Motion names include their visible On/Off state. Chapter names include number and short label, with an explicit text separator. Quick Find's dock name includes its visible shortcut, also separated in markup. These changes preserve appearance and interaction. Final desktop/mobile homepage reports flag only the three artwork anchors, with no wordmark/chapter/motion-control name failures. The targeted 1440px CareerPath retest has no label mismatch and accessibility 100: [targeted report](.audit/release-review/release-labels-case.report.html).

**A-03 — Medium, OPEN/manual adjudication: illustrative artwork link names.** `/`, all four tested widths. Reproduction: run `label-content-name-mismatch`; the three `.art-link` anchors are flagged because their concise “Read … case study” labels differ from visible text inside the explanatory artwork. The child is a named `role=img` and much of its text is decorative/aria-hidden. This experimental, unweighted audit does not lower the 100 accessibility score. Do not treat the score as resolving the warning: verify link announcements and voice activation with assistive technology. No verbose artwork-text label or design change was imposed merely to silence the rule.

## Final Lighthouse and performance investigation

Production `/`, installed Chrome 157 / Lighthouse 13.6.0, fresh navigation per run, sequential desktop/mobile runs without simultaneous builds. Desktop uses the Lighthouse desktop preset (1× CPU, simulated 40ms RTT/10,240Kbps); mobile uses 4× CPU, simulated 150ms RTT/1,638.4Kbps. Local server latency, host CPU, simulation and run-to-run variability limit comparison with real users. Reports retain full settings and trace assets.

| Mode | Performance | Accessibility | Best practices | SEO | FCP | LCP | Speed index | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Desktop 1440 × 900 | 100 | 100 | 100 | 66 | 0.39s | 0.39s | 0.78s | 19ms | 0 |
| Mobile 390 × 844 | 86 | 100 | 100 | 66 | 1.25s | 1.25s | 1.80s | 563ms | 0 |

[Desktop HTML report](.audit/release-review/release-desktop.report.html) · [Mobile HTML report](.audit/release-review/release-mobile.report.html) · [Desktop JSON](.audit/release-review/release-desktop.report.json) · [Mobile JSON](.audit/release-review/release-mobile.report.json). Trace/devtools files use the same `release-desktop`/`release-mobile` prefix.

- **Desktop**, 24 Nov 2026, 15:50:45 Dhaka: 3 reported long tasks, longest 149ms; JavaScript execution 0.28s; estimated unused JavaScript 55.0KiB. Forced-reflow source rows total approximately 308.6ms; see trace for attribution.
- **Mobile**, 24 Nov 2026, 15:51:32 Dhaka: 9 reported long tasks, longest 409ms; JavaScript execution 1.20s; estimated unused JavaScript 55.1KiB. Forced-reflow source rows total approximately 162.8ms; see trace for attribution.

Final mobile TBT is 563ms (above the proposed 200ms follow-up target). Both runs report CLS 0 during navigation; this does not cover scrolling or interaction. Lighthouse's SEO failure identifies the noindex meta directive and robots.txt directly. No report has a runtime error.

The initial 22 November runs had desktop/mobile performance scores 89/89 and TBT 274.5/441.5ms. A 24 November run immediately before the final label-only correction measured 100/94 and TBT 2/277ms. These are observed separate runs, **not evidence that label/layout changes caused a performance improvement**. Preserve all results rather than cherry-picking the best run. Target mobile TBT <=200ms for follow-up; the project had no pre-existing formal performance budget.

**P-01 — Medium, OPEN: mobile main-thread work.** Route `/`, 390 × 844, Lighthouse mobile settings. Reproduction: run `.audit/release-review/run-performance.ps1`; inspect `long-tasks`, `bootup-time`, unused JS and forced-reflow details. Earlier current-tree trace work was concentrated in the React/framework chunk `3iz8_hoapa1o_.js` and a GSAP/motion-containing chunk; source inspection confirms both client framework work and shared effects code are shipped. Attribution to a specific component or solely to GSAP is not established. Next work is a stable-device repeated trace and component-level profiling, then a separately tested change to hydration/bundle scheduling if warranted. No speculative animation rewrite was made.

LCP and CLS here are **lab navigation measurements**. INP, field p75 Core Web Vitals, post-interaction shifts, scroll frame rate, dropped frames, repeated-route memory cleanup and real-device responsiveness are **NOT TESTED**. TBT is not INP. A previous BFCache audit cited host memory pressure (`CacheLimitPrunedOnCriticalMemoryPressure`); that is not proof of broken browser history.

Images and loading: source portrait is 800 × 1000 JPEG (148,358 bytes), rendered with `next/image`, responsive sizing, lazy loading and reserved aspect ratio. Fresh image HTTP probes returned WebP: 384 × 480 / 9,636 bytes; 640 × 800 / 18,236 bytes; requested 1080 width capped to 800 × 1000 / 24,550 bytes. System fonts avoid external font downloads. No third-party runtime analytics or media found. Shared Motion/GSAP code remains in client bundles even when some effects are disabled; downloaded code and active animation are distinct. [HTTP evidence](.audit/release-review/http-evidence.json).

## Functionality and accessibility coverage

All pages below returned successfully in the final production HTTP audit. All 17 non-home pages also have 390px Lighthouse reports and screenshots under `route-390-<path-with-hyphens>.*`; affected routes were retested after their fixes.

| Group | Routes |
| --- | --- |
| Main | `/`, `/projects`, `/research` |
| Projects | `/projects/careerpath-ai`, `/projects/mot-ssl-gru-dashboard`, `/projects/personal-automation-system`, `/projects/corporate-training-skill-evaluation`, `/projects/pharvo`, `/projects/personal-portfolio`, `/projects/inotify`, `/projects/youtube-video-app`, `/projects/project-savior` |
| Research | `/research/mot-ssl-gru-zero-day-iot-intrusion-detection`, `/research/prompted-not-taught-generative-ai-in-education`, `/research/ecotoken-bn-sustainable-bangla-nlp`, `/research/fgap-feature-gated-adaptive-probing`, `/research/memory-efficient-task-free-continual-learning`, `/research/cognitive-state-driven-generative-scaffolding` |

Executed assertions cover categories, multi-term/case/whitespace searches, empty results, reset data, motion preference combinations, showcase observer geometry, unique titles/IDs, one main/H1, image alternatives, no nested interactive controls, missing-page handling, exact social URLs and safe new-tab rel attributes. Previous/next links and hash destinations resolve. They do not establish hydrated click behavior or focus restoration.

Source review confirms native controls, skip link, focusable destinations, labeled search, pressed filter state, polite result announcements, a named native Quick Find dialog, combobox/listbox associations, arrows/Enter/Escape handlers, Tab containment and opener restoration. The framework route announcer has descriptive page titles. Actual screen-reader announcements remain NOT TESTED.

The six Contact names and target rectangles were checked in rendered DOM. Fresh unauthenticated GETs on 24 November returned Facebook 200 (Shakil Mahmud), Instagram 200 (matching handle/title), YouTube 200 (LifeBytes With Shakil), GitHub 200 (shakil212), and previous portfolio 200. LinkedIn returned 999: **unverified**, not proven broken. Email matches `mailto:shakilmahmud212121@gmail.com`; handler launch and delivery are NOT TESTED, and no mail was sent. Earlier Instagram checks sometimes reached a login wall. HTTP success does not prove ownership or interactive destination behavior.

Motion/cursor review: the lavender cursor is pointer-events:none, gated by desktop/fine pointer/effects/closed Quick Find; native fallbacks cover fields, dialogs, keyboard/selection/blur/scroll. Magnetic controls, parallax, reveal, spotlight and observers have cleanup. CSS handles sticky layout. Inactive featured context is inert/aria-hidden. The existing reduced-motion consistency fix uses the effective preference for root attributes, MotionConfig and scroll behavior; CSS separately suppresses animation/transitions/smooth scrolling. These source findings and the forced-reduced default capture do not prove live toggles, saved-On overrides, animation timing or cursor fallback behavior.

## SEO, environment and security

**S-01 — High/public-release blocker, OPEN: no approved origin.** All 18 pages; viewport independent. Reproduction: build without `NEXT_PUBLIC_SITE_URL`, inspect `/`, `/robots.txt`, `/sitemap.xml`, and Lighthouse `is-crawlable`. The final build intentionally emits noindex/nofollow and robots disallow `/`, omits canonical/public OG image URLs, and has no sitemap URLs. This explains the SEO score of 66; it is a deliberate safe fallback, not a reason to remove noindex prematurely. Choose the actual approved HTTPS origin, set it at build time, rebuild, then rerun the route audit with matching `PORTFOLIO_EXPECT_SITE_URL` and local `PORTFOLIO_TEST_URL`.

Metadata parser/configuration assertions pass for fixture origins and 18 route entries. An earlier audit recorded a configured-loopback-origin build; it was not repeated in this resumed session and is not claimed as a fresh public-domain verification. Unique titles/descriptions and OG/Twitter text pass. `/og` returned a visually inspected 1200 × 630 PNG: [social card](.audit/social-card.png). Public HTTPS, redirects, crawler access and social preview caches are NOT TESTED.

**S-02 — Moderate, OPEN: development dependency advisory.** Viewport/route not applicable; reproduce with `npm.cmd audit --json`. The final audit reports 7 moderate affected-package entries from [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249), not 7 independent vulnerabilities. Installed `@typescript-eslint/typescript-estree` 8.72.2 uses minimatch 10.2.6 through `^10.2.2`; the vulnerable optimized glob processing can amplify resource use. The patched minimatch is 11.0.1. Fresh registry metadata shows upstream parser 8.74.0 now depends on `^11.0.1`, offering a compatible tooling-update candidate to test separately. No override, forced upgrade, or root package/lockfile mutation was applied. Earlier audit evidence counted eight affected entries; the latest feed reports 7. Production-only audit reports zero. [Full audit](.audit/release-review/audit-all-final.json), [production audit](.audit/release-review/audit-production-final.json), [upstream metadata](.audit/release-review/advisory-upstream.json).

Repository scan: 68 candidate files, zero staged, 12 protected-path probes, one embedded reference image, no findings. `.env*`, private/secrets directories, keys, `.aws`, `.ssh`, `.next`, dependencies, `.vercel` and `.audit` are excluded by ignore rules. HTTP `/.env.local`, `/.git/config`, `/private/resume.pdf` return 404. Public/reference images had no flagged metadata. Git history and all secret encodings were not exhaustively scanned.

**S-03 — Low/hardening follow-up, OPEN:** local production HTML has no explicit CSP, HSTS, nosniff, frame or referrer policy. Reproduce with an HTTP header request to `/`; any viewport. Hosting may add policies, so production header protection is NOT TESTED. Evaluate compatible policies on the chosen HTTPS host; no untested CSP or hosting changes were introduced.

Runtime inspected: Node 24.12.0, npm 11.6.2, Next 16.4.6, TypeScript 5.9.3. No Node engine pin; fresh `npm ci` on the target runtime and hosting configuration remain NOT TESTED. The only application environment setting found is the public origin. No secret-bearing service integration or mutation API was found.

Public facts remain sourced from `src/content/portfolio.ts`: nine projects and six research entries retain explicit stages and limitations; featured art remains labeled illustrative; no fake product screenshots, unavailable demo/source/manuscript links, or resume were added. This is content consistency review, not independent factual verification.

## Final command evidence

| Command | Result | Evidence |
| --- | --- | --- |
| `npm.cmd run lint` | PASS | [lint-final.txt](.audit/release-review/lint-final.txt) |
| `npx.cmd tsc --noEmit --incremental false` | PASS | [typescript-final.txt](.audit/release-review/typescript-final.txt), empty output on success |
| `npm.cmd run build` | PASS, 26 generated entries including framework/metadata, 18 portfolio pages | [build-final.txt](.audit/release-review/build-final.txt) |
| `node scripts/verify-portfolio.mjs` | PASS: 18 pages, 44 destinations, 21 assets and logic checks | [routes-final.txt](.audit/release-review/routes-final.txt) |
| `node scripts/audit-repository.mjs` | PASS | [security-final.txt](.audit/release-review/security-final.txt) |
| `npm.cmd audit --omit=dev --json` | PASS, zero | [audit-production-final.json](.audit/release-review/audit-production-final.json) |
| `npm.cmd audit --json` | FAIL/exit 1, 7 moderate dev entries | [audit-all-final.json](.audit/release-review/audit-all-final.json) |
| `git diff --check` | PASS | [diff-check-final.txt](.audit/release-review/diff-check-final.txt) |

Local audit scripts, reports, traces and screenshots remain ignored in `.audit/release-review/`; they are not production dependencies. `release-summary.json` indexes current responsive/route results. Reproduction scripts are `run-matrix.ps1`, `run-routes.ps1`, `run-final-visual.ps1`, and `run-performance.ps1`.

## Precise outstanding manual verification

Record browser/device/version, route, viewport, steps, expected/actual result and a screenshot/video for each failure. These checks are **NOT TESTED**, not implied passes from source review.

1. **Keyboard and focus — `/`, 1440 × 900 and 390 × 844:** reload; use only Tab/Shift+Tab/Enter/Space. Activate skip link, header, cards, filters, disclosures, six Contact icons and dock. Focus must be visible, ordered and not obscured by header/dock. At mobile width open/close Menu and confirm focus behavior. Repeat with 200% zoom and 400% reflow; short-height and landscape layouts are also outstanding.
2. **Quick Find — `/` and `/projects`, both widths:** focus each opener, press Ctrl+K (Cmd+K on macOS), verify input focus and named modal. Search `careerpath`, `python`, a mixed-case query, and `zzzz-no-result`; verify results/no-results. Use arrows, Enter, Tab/Shift+Tab, Escape and backdrop. Focus must remain inside while open and return to the correct opener on dismissal. Activate a same-page section and a cross-route result; verify destination focus, URL and announcement. Shortcut must not hijack editable text/IME composition; test slash behavior outside editable controls.
3. **Archive — `/#archive` and `/projects`, 320/390/768/1440px:** operate every category with keyboard and pointer; combine with `python`, clear, use a no-result query, then reset All. Counts, pressed state and live announcements must match visible cards without clipping. Open every project/research link, refresh, then Back/Forward; confirm expected route/hash/scroll state.
4. **Cursor/motion — `/`, desktop fine pointer:** move across plain text, links, artwork and magnetic CTAs. Verify lavender idle/link/VIEW appearance, click accuracy and text selection. Enter search/dialog/Contact, leave the window, resize, scroll and navigate; native cursor must remain available and no overlay may intercept input. Repeat with keyboard and touch/pen fallback. Scroll featured chapters in both directions and past section end; sticky context must track and release correctly. Check parallax, reveals and transitions without hidden content or jumps.
5. **Motion preferences — `/` and a detail route:** switch Motion Off, reload, navigate, then On. Enable OS reduced motion with stored On, Off and default; also change it while the page is open. Cursor/decorative effects/smooth scrolling must stop, all content remain visible, and every control remain usable. Repeat with storage blocked. The headless reduced-motion default check covers only one of these combinations.
6. **Assistive technology — NVDA/Chrome or VoiceOver/Safari:** read landmarks/headings and all six icon names; open Quick Find, hear selected results/status, navigate routes and confirm title announcements. Review the three artwork links for meaningful names and voice-control activation. Check focus visibility over gradients and activated states; automated contrast checks cover only measured states.
7. **Destinations/loading/performance:** open all six Contact links including LinkedIn in a normal browser; verify intended profile/new-tab behavior and email-handler address without sending. Test slow network/image failure/JavaScript disabled and review console/network. Profile repeated interactions on a stable mobile device; collect field CWV after an independently authorized release.

Release sign-off requires the approved public origin/configuration, completion of the critical interactive checks above, resolution or explicit review of the remaining accessibility warning and dev advisory, and review of mobile blocking-time evidence. These gates justify **NO-GO today** despite passing local build, route and responsive checks.
