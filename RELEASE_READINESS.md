# Interactive V3 production-readiness audit

Audit date: **22 November 2026 (Asia/Dhaka)**.

## Recommendation: NO-GO for public release

The application builds and the executed production HTTP, content, metadata, and repository checks pass. Public release is **not yet signed off**: the approved canonical origin is unset, browser/assistive-technology/performance validation remains unperformed, and LinkedIn could not be verified automatically. A development-only dependency advisory also remains open for remediation or explicit risk review.

This audit covers the existing Interactive V3 working tree, including the approved cinematic motion, custom cursor, visual refinements, and six icon-only social links. It supersedes the 18 November V2 audit; historical results are not treated as fresh evidence. No dependencies, public facts, project/research content, artwork, routes, navigation destinations, or Contact layout were changed. Nothing was staged, committed, pushed, provisioned, or deployed.

## Confirmed issue and minimal fixes

**Reduced-motion inconsistency:** a saved Motion On preference could suppress decorative effects through `effectsEnabled` while still enabling CSS dialog animation, smooth scrolling, and Motion's general animation policy through `enabled`.

- `src/components/motion/MotionProvider.tsx`: the root motion attribute and `MotionConfig` now use the same effective preference as the cursor, parallax, reveals, and social hover effects. The saved preference is retained; OS reduced motion suppresses the actual effects.
- `src/components/navigation/FloatingDock.tsx`: Back to top uses instant scrolling whenever effects are disabled, including reduced motion with a saved On preference.
- `src/app/globals.css`: the reduced-motion media query disables animation, transition, and smooth scrolling independently of hydration or stored preference. Normal-motion styling/timing are preserved.
- `scripts/verify-portfolio.mjs`: added production-markup assertions for six unique accessible icon-only links, exact central-data URLs, secure new-tab attributes, mailto behavior, preserved email CTA, and all six research status/limitation texts.
- `RELEASE_READINESS.md`: replaced historical results with this audit and explicit release gates.

Existing uncommitted V3 work was preserved. Hash comparison against an ignored local baseline distinguishes these five audit changes from earlier work. The motion fix is confirmed by source review and compilation; live OS-toggle behavior remains a browser test.

## Executed validation

Commands used Windows `npm.cmd` / `npx.cmd` equivalents. Sandbox cache-write failures on TypeScript/Next.js were rerun with the required local access and passed; initial cache failures were not application failures.

| Check | Confirmed result |
| --- | --- |
| `npm run lint` | Passed after code changes; configured Next.js, TypeScript, and JSX accessibility rules |
| `npx tsc --noEmit` | Passed after code changes |
| `npm run build` | Passed; 26 generated build entries including framework/metadata entries; 18 portfolio pages |
| `node scripts/verify-portfolio.mjs` | Passed against production `next start`: all 18 pages, 44 unique internal routes/anchors, 21 runtime asset/metadata requests |
| Configured-origin production audit | Passed again using temporary loopback origin `http://127.0.0.1:3210`; no public domain selected or deployment performed |
| Final build restoration | Rebuilt without canonical-origin configuration; generated homepage has no canonical/test-origin URL and retains noindex |
| Archive/Quick Find pure functions | Categories, combined searches, whitespace/case handling, multiple terms, empty results, reset dataset, 21 unique command destinations |
| Motion/showcase pure functions | Stored/default preference cases and positive height-based observer bands at all four requested dimensions; not rendered interaction tests |
| Static HTML accessibility | One main and H1 per page, English language, unique IDs/titles, image alt text, no nested link/button controls, external rel attributes |
| Contact markup | Six unique named icon-only anchors; exact supplied URLs; five secure new-tab links; email mailto and original CTA retained |
| Content | All nine project stages/limitations and six research stages/limitations match central data |
| Missing paths | Unknown project, research, and general routes render helpful missing-page UI with HTTP 404 or streamed noindex handling |
| `node scripts/audit-repository.mjs` | Passed: 68 candidate files, zero staged files, 12 protected-path probes, one embedded reference image; no pattern/metadata findings |
| `npm audit --omit=dev --json` | Passed: zero reported production dependency vulnerabilities at audit time |
| `npm audit --json` | Exit 1: eight moderate entries in development tooling; zero high/critical entries; details below |
| Package/lockfile | Root dependency declarations match lockfile; installed versions inspected; fresh `npm ci` not performed |
| `git diff --check` | Passed |

`scripts/test-utils.mjs` was exercised through the route script; it is not a standalone test suite. Temporary production servers bound only to loopback and stopped after each audit. HTTP/static checks do not establish browser correctness, WCAG conformance, or performance scores.

## Responsive review: source checked, rendering untested

The browser inventory reported **“The browser access host is unavailable.”** Native Chrome inspection then stopped because it could not determine the current URL confidently enough to enforce policy. Computer use ended there. No alternate browser driver, new browser installation, or Lighthouse run was attempted.

| CSS width | Source/layout review | Browser result |
| --- | --- | --- |
| 320 px | Mobile navigation; one-column archive/about; static showcase context; narrow typography; wrapping social row | **Not executed** |
| 390 px | Mobile layout; wrapping filters/social links and flexible email text; native cursor | **Not executed** |
| 768 px | Desktop navigation and CSS-sticky showcase begin; two-column archive; fine-pointer-only cursor/parallax | **Not executed** |
| 1440 px | Capped container; three-column archive; sticky showcase and desktop effects | **Not executed** |

The social row requires 372 px for six 52 px links and five 12 px gaps; narrower containers permit wrapping. Focus-visible, touch-active, and reduced-motion styles are present. This confirms declared sizes and layout intent, not computed hit areas or rendered overflow. Short-height sticky behavior, artwork cropping, focus obstruction, zoom/reflow, and real touch use remain release checks.

## Accessibility, keyboard, motion, and cleanup

Confirmed by source/static review:

- Skip link and focusable main/section destinations; descriptive route titles support the framework route announcer.
- Native navigation/social links, buttons for settings/filters, and native details/summary disclosures. Search inputs are labeled; filters expose pressed state; result counts use polite status announcements.
- Quick Find has a named native modal, combobox/listbox relationships, selected-result IDs, arrows/Enter, Tab containment, Escape/backdrop dismissal, and opener restoration. IME composition and shortcut auto-repeat are excluded. Same-page section activation closes the modal before focusing the destination.
- Showcase layout uses CSS sticky positioning and a height-based IntersectionObserver band rebuilt on resize. Inactive context is inert/aria-hidden. Automatic context observation is disabled below 768 px; project/chapter links remain available.
- The decorative pointer-events:none cursor runs only for desktop fine pointers with effects enabled and Quick Find closed. Native cursor fallbacks cover Contact, fields, dialogs, editing/selection, keyboard input, blur, resize, and scrolling. GSAP tweens, listeners, and scheduled frames have cleanup.
- Reveal, parallax, spotlight, magnetic controls, media queries, section tracking, and showcase observation have corresponding cleanup. Reveal content is visible in server HTML and restores transforms on focus/cleanup. No unbounded timer or uncancelled recurring animation loop was found in source review.
- Six social anchors are declared 52 x 52 px, with accessible names and decorative SVGs hidden from assistive technology. Local brand definitions retain their Lucide license notice; Mail uses installed Lucide.

Solid-color contrast calculations: body/background **17.45:1**, muted/surface **6.90:1**, resting social icon/background **12.55:1**, social focus color/background **12.60:1**. Gradients, transparency, images, and all rendered states were not comprehensively measured.

Actual keyboard order/focus restoration, screen-reader announcements, cross-route hash focus, mobile modal behavior, active chapter tracking, cursor stability, preference changes, runtime heap cleanup, and JavaScript-disabled navigation remain unverified.

## Performance, images, and fonts

Measured on the missing-origin production build without a browser:

| Resource | Raw bytes | Locally estimated gzip bytes |
| --- | ---: | ---: |
| Homepage HTML | 95,109 | 15,099 |
| 11 homepage script resources combined | 866,418 | 281,024 |
| One stylesheet | 65,387 | 15,140 |

These are fetched asset sizes and local compression estimates, not browser transfer/execution measurements, and exclude subsequent navigation/prefetch traffic. Shared Motion/GSAP code loads even when effects are disabled on touch/reduced-motion devices; measure mobile parsing/interaction cost before considering bundle splitting.

- Portrait: genuine **800 x 1000 JPEG**, **148,358 bytes**; `next/image`, lazy loading, async decoding, responsive sizes, and CSS aspect-ratio space reservation.
- Optimized HTTP requests returned WebP: **384 x 480 / 9,636 bytes**, **640 x 800 / 18,236 bytes**, and requested 1080 width capped to the original **800 x 1000 / 24,550 bytes**.
- System font stacks (Arial/Helvetica, Georgia/Times, Courier New) require no external font downloads. No typography replacement was made.
- Illustrations use CSS/SVG/React. Checked script, stylesheet, and image resources are same-origin. No third-party runtime media, analytics, or autoplay video was introduced.
- Pointer/scroll processing is generally frame-throttled and uses reusable setters/tweens or Motion primitives. Source analysis does not prove a smooth frame rate.
- **Lighthouse, LCP, INP, CLS, long tasks, CPU throttling, memory profiling, and field Web Vitals were not measured.**

## Metadata, SEO, and social artwork

All 18 pages have unique descriptive titles, descriptions, and corresponding OG/Twitter text. Dynamic routes await promised params and generate known static slugs.

No `.env*` file or process-level `NEXT_PUBLIC_SITE_URL` is configured. The app therefore intentionally omits canonical/public social-image URLs, emits noindex/nofollow, disallows crawling in `/robots.txt`, and serves an empty sitemap. This avoids an invented domain but blocks an indexable public release.

A second local build used `http://127.0.0.1:3210` solely as a test origin. Production assertions confirmed canonical/OG URLs, absolute OG/Twitter images, indexability, robots sitemap declaration, and **18 sitemap entries**. Parser tests reject malformed origins, credentials, subpaths, queries, and fragments. No `.env` file was written. The final build was restored without the test origin and checked for its absence.

`/og` returned a **1200 x 630 PNG**. The generated image was opened and visually inspected: name, headline, disciplines, and location are readable without clipping. This is standalone image inspection, not browser or social-platform preview testing. `/icon.svg` and linked assets returned successfully. Real-domain HTTPS, redirects, crawler access, and social card caches remain unverified.

## Route inventory

All pages below returned HTTP 200 in both production audit configurations.

| Page | Path |
| --- | --- |
| Home | `/` |
| Project archive | `/projects` |
| Research index | `/research` |
| CareerPath AI | `/projects/careerpath-ai` |
| MOT-SSL-GRU dashboard | `/projects/mot-ssl-gru-dashboard` |
| Personal Automation | `/projects/personal-automation-system` |
| Corporate training prototype | `/projects/corporate-training-skill-evaluation` |
| PHARVO | `/projects/pharvo` |
| Personal Portfolio | `/projects/personal-portfolio` |
| iNotify | `/projects/inotify` |
| YouTube Video App | `/projects/youtube-video-app` |
| Project Savior | `/projects/project-savior` |
| MOT-SSL-GRU manuscript | `/research/mot-ssl-gru-zero-day-iot-intrusion-detection` |
| Prompted, Not Taught | `/research/prompted-not-taught-generative-ai-in-education` |
| EcoToken-BN | `/research/ecotoken-bn-sustainable-bangla-nlp` |
| FGAP | `/research/fgap-feature-gated-adaptive-probing` |
| Continual learning | `/research/memory-efficient-task-free-continual-learning` |
| Generative scaffolding | `/research/cognitive-state-driven-generative-scaffolding` |

Previous/next project links, section hashes, cross-links, and archive destinations resolved against rendered documents. Browser Back/Forward and hydrated navigation were not tested.

## External destinations

Fresh unauthenticated HTTP GET checks on 22 November 2026:

| Destination | Result |
| --- | --- |
| [Facebook](https://www.facebook.com/shakilmahmud2121) | HTTP 200; title identifies Shakil Mahmud |
| [Instagram](https://www.instagram.com/shakil__735/) | HTTP 200; title identifies Shakil Mahmud / shakil__735 |
| [YouTube](https://www.youtube.com/@LifeBytesWithShakil) | HTTP 200; title identifies LifeBytes With Shakil |
| [LinkedIn](https://www.linkedin.com/in/shakil-mahmud212) | HTTP 999; automation access unconfirmed; **manual verification required** |
| [GitHub](https://github.com/shakil212) | HTTP 200; title identifies shakil212 / Shakil Mahmud |
| [Previous portfolio](https://shakilmahmud-portfolio.vercel.app) | HTTP 200; normalized to trailing-slash URL |
| `mailto:shakilmahmud212121@gmail.com` | Matches approved data; mail application launch/deliverability untested; no message sent |

HTTP success and matching titles do not establish account ownership or verify project claims. Supplied URLs were preserved.

## Genuine content and placeholders

`src/content/portfolio.ts` is authoritative and unchanged by this audit.

- Nine projects retain their MVP, built, prototype, academic-design, demonstrator, or in-development labels. CareerPath hardening, no live model inference in the dashboard, PHARVO's non-deployed scope, and Savior's lack of field validation stay explicit.
- Six research entries retain unpublished/course/team, working-manuscript, conceptual, or proposed status. EcoToken estimates are not measured savings; FGAP claims no verified performance.
- The portrait is genuine supplied material. Three featured artworks are labeled **Illustrative concept**; archive decoration is not presented as screenshots.
- No authentic project screenshots are supplied. Only Personal Portfolio has a public project/demo URL. The other eight omit unavailable source/demo/report controls. Public manuscripts and fuller research evidence are also absent and explicitly described as such.
- `resumeUrl` remains null: no unreviewed PDF or broken download action.
- Internship dates, expected May 2027 graduation, achievements, and the 22-interview team study are preserved. This is consistency review, not independent verification against private evidence.
- Historical V2 wording in handoff documents and the decorative `Interactive 02` hero label remain. They are nonblocking legacy labels; changing approved visible branding was outside these minimal fixes.

## Repository security and environment

The repository script scanned tracked/non-ignored untracked candidates and the staged index. No configured credential patterns, private-key material, credential URLs, phone-number patterns, private office/PDF documents, or generated/dependency directories were flagged among candidates. The public/reference images and embedded reference image had no flagged EXIF/XMP/IPTC metadata. `.env*`, `.next`, `node_modules`, `.vercel`, `.audit`, private/secrets folders, key containers, `.aws`, and `.ssh` are ignored. Nothing is staged. Git history and every possible secret encoding were not exhaustively scanned.

**Open dependency finding:** eight moderate audit entries stem from one advisory propagating through development-only ESLint/TypeScript tooling. Installed `minimatch` **10.2.6** is used by `@typescript-eslint/typescript-estree` **8.72.2**, which declares `^10.2.2`. Crafted glob patterns at optimization level 2 or above can exhaust resources; the patched version is **11.0.1**, outside that declared major range. See [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). Application routes do not invoke this development parser, and production auditing reports zero findings. No forced major override or broad update was applied. Resolve via a compatible upstream update or separately tested override/risk review before release sign-off.

Tested runtime: **Node 24.12.0**, **npm 11.6.2**, **Next.js 16.4.6**, **TypeScript 5.9.3**. Installed Next.js requires Node >=20.9.0. The project does not pin a Node engine; select a supported hosting runtime and validate a fresh lockfile install before deployment. Hosting configuration was not provisioned or inspected.

The only application environment reference is the public site origin. No account integration, secret-bearing data source, mutation endpoint, or third-party runtime script was found. Local production HTML does not set CSP, HSTS, nosniff, frame policy, or an explicit referrer policy. Hosting headers remain untested; evaluate compatible hardening and HTTPS on the chosen host. Avoid an untested CSP that changes static rendering or breaks framework scripts/motion.

## Outstanding manual tests and release gates

1. **Public origin:** choose the actual approved HTTPS origin; set `NEXT_PUBLIC_SITE_URL` at build time; rebuild and run the route audit with matching `PORTFOLIO_EXPECT_SITE_URL` and local `PORTFOLIO_TEST_URL`. Verify public redirects, robots, sitemap, canonicals, and social cards after any separately approved deployment.
2. **320/390/768/1440 px browser matrix:** compare approved design; inspect overflow, artwork/text wrapping, Contact email/icons, header/dock overlap, short heights, landscape, 200% zoom and 400% reflow.
3. **Keyboard/screen reader:** skip link, all controls/disclosures, visible unobscured focus, Tab order, route announcements and icon names with NVDA/VoiceOver. Quick Find from both buttons, Ctrl/Cmd+K and slash outside editable fields; arrows, Enter, no results, IME, Tab containment, Escape/backdrop, opener restoration, same-page/cross-route focus.
4. **Showcase/cursor/motion:** scroll chapters both ways; active context, section-end release, mobile stacking, keyboard jumps. Cursor idle/link/VIEW states, native fallbacks, selection, scroll, blur, route changes, touch/pen, and no stranded hidden cursor. Motion Off persistence and OS reduced motion with saved On/Off/default, live OS changes, and blocked storage; all content/actions remain usable.
5. **Navigation/failures:** every direct route, refresh, Back/Forward, mobile menu dismissal, all social new tabs, LinkedIn, and mail handler. Browser console/network, slow/image-failure loading, JavaScript-disabled content, and error recovery.
6. **Measured performance:** production Lighthouse mobile/desktop; LCP/CLS/INP or appropriate lab proxies, long tasks, scroll frame rate, and memory/cleanup after repeated interactions. No score is available yet.
7. **Tooling/release hygiene:** resolve or explicitly review the development advisory, validate a fresh lockfile install on target Node, review intended diff/public assets, and obtain explicit owner authorization before committing/pushing/deploying.

The open domain and browser-validation gates alone are sufficient for **NO-GO** today. Passing local code/HTTP checks is not public-release approval.
