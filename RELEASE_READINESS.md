# Final release-readiness audit

Audit date: **18 November 2026 (Asia/Dhaka)**.

**Decision: code checks pass; public-release sign-off is pending manual browser QA and the approved canonical domain.** No Git staging, commit, push, deployment, domain provisioning, or external service changes were performed. The approved Interactive V2 layout, palette, typography, and artwork were retained.

## Issues fixed

1. **Featured-project detection on wide screens.** Percentage IntersectionObserver margins were based on viewport width and could collapse the vertical detection band. They now use viewport-height-derived pixel margins and recreate the observer on resize, with cleanup. Automatic tracking is desktop-only so the mobile context does not change height above the reader. This corrects the geometry; rendered scroll tracking still needs browser verification. [IntersectionObserver specification](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserver-rootmargin).
2. **Quick Find focus and keyboard handling.** The native modal now explicitly contains Tab/Shift+Tab, closes before navigation makes the destination focusable, and restores the opener on dismissal. Mobile-menu Escape no longer competes with an open dialog. Shortcut auto-repeat and IME composition are ignored; search result counts are announced. Browser focus and assistive-technology behavior remain unverified.
3. **Homepage title.** An explicit title now includes Shakil Mahmud; the same-segment title template had left the name out of the homepage title.
4. **Duplicate main landmarks and streaming-only content.** Removed the unnecessary global loading screen. Production responses now contain one main landmark, unique IDs, and main content outside hidden streaming containers. Error and not-found screens remain.
5. **Canonical configuration.** `NEXT_PUBLIC_SITE_URL` must be a valid HTTP(S) origin without credentials, a subpath, query, or fragment. Invalid settings fail clearly rather than silently emitting wrong URLs. Missing configuration keeps pages non-indexable, the sitemap empty, and public canonical/social URLs absent. Twitter metadata is explicitly specific to each page.
6. **Starter leftovers.** Removed the unused Next.js favicon and five starter SVG assets. The custom `icon.svg` remains. Replaced the starter README and clarified the historical handoff/deployment instructions.
7. **Commit protection and audit coverage.** Added ignore rules for local audit artifacts, private folders, key files, and credential containers. Expanded checks to inspect all internal anchor destinations, static HTML semantics, optimized images, JavaScript/CSS assets, metadata configuration, and commit candidates.

## Executed checks

| Check | Result and scope |
| --- | --- |
| `npm run lint` | Passed, including Next.js and configured JSX accessibility rules |
| `npx tsc --noEmit` | Passed |
| `npm run build` | Passed; no application/metadata warnings |
| Production HTTP/HTML audit | All 18 pages returned 200; 44 distinct internal route/anchor destinations and 18 asset/metadata requests passed |
| Missing paths | Unknown project, research, and general routes render the custom missing-page screen with 404 or streamed noindex handling |
| Archive logic | All categories, case-insensitive/trimmed keywords, multiple words, combined category/search, empty results, and reset/default dataset passed |
| Quick Find logic | 21 unique section/project/research destinations; empty, matching, multiword, and no-result searches passed |
| Motion logic | OS-reduced default, normal default, saved Off, explicit On override, and invalid stored values passed as pure-function tests |
| Showcase geometry | Positive height-based detection bands tested for 320×720, 390×844, 768×1024, and 1440×900 calculations; this is not a viewport rendering test |
| Static HTML accessibility | One main and H1 per page, unique IDs/titles, English language, image alt text, no nested link/button controls, external-link rel attributes |
| Metadata | Titles, descriptions, Open Graph and Twitter tags checked on all 18 pages. Both missing-domain and configured-domain paths tested |
| Configured-domain test | Temporary **local-only** origin `http://127.0.0.1:3001`; canonical/OG URLs, Twitter/OG image URLs, indexability, robots sitemap declaration, and 18 sitemap entries passed. No `.env` file was created. Final build restored without a public origin |
| Social artwork | `/og` returned PNG, 1200×630; standalone image visually inspected: readable text with no cropping. Local artifact is under ignored `.audit/` |
| Public portrait | 800×1000 JPEG; original and Next.js optimized-image URL returned successfully |
| Production dependencies | `npm audit --omit=dev --json`: zero reported vulnerabilities at audit time |
| Git hygiene | Commit-candidate and staged-index scans, 12 representative ignore-rule probes, and image metadata checks passed; no staged files |
| Whitespace | `git diff --check` passed |

These checks validate HTTP responses, source logic, static markup, and generated assets. They do **not** establish browser interaction correctness, visual fidelity, full WCAG conformance, or measured Core Web Vitals.

## Page inventory

All paths below passed the production HTTP/HTML checks.

| Page | Path |
| --- | --- |
| Home | `/` |
| Project archive | `/projects` |
| Research index | `/research` |
| CareerPath AI | `/projects/careerpath-ai` |
| MOT-SSL-GRU dashboard | `/projects/mot-ssl-gru-dashboard` |
| Personal Automation System | `/projects/personal-automation-system` |
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

## External links

| Destination | Result |
| --- | --- |
| `https://github.com/shakil212` | HTTP 200 |
| `https://shakilmahmud-portfolio.vercel.app` | HTTP 200, normalized to trailing slash |
| `https://www.linkedin.com/in/shakil-mahmud212` | HTTP 999; automation access not confirmed. **Manual check required.** The supplied URL was retained |
| `mailto:shakilmahmud212121@gmail.com` | Address matches the approved content; no email was sent and mailbox deliverability was not tested |

No broken internal routes/anchors or missing linked runtime assets were found. External HTTP success does not verify project claims or account ownership.

## Genuine assets and placeholders

| Item | Current state |
| --- | --- |
| Portrait | Genuine supplied public photograph; optimized with `next/image` |
| Three featured artworks | Original **Illustrative concept** diagrams for CareerPath AI, MOT-SSL-GRU, and Personal Automation; not authentic project screenshots |
| Project screenshots | No authentic screenshots supplied for any of the nine project entries. `reference/screenshots/` contains portfolio design references, not project evidence |
| Project links | Personal Portfolio has the supplied live URL. The other eight have no supplied source/demo/report links; no guessed links are rendered |
| Research evidence | Six summaries with correct maturity/limitations. No public manuscripts, full findings, or additional individual-contribution evidence supplied |
| Résumé | `resumeUrl` remains null; no reviewed PDF exists and no download action is shown. The source comment with `/resume.pdf` is an example only |
| Domain | Not yet approved/configured. This is a release gate, not a fabricated live URL |
| Social card | Original generated portfolio graphic; not a project screenshot or achievement claim |
| Documentation examples | GitHub repository/username instructions are examples for a future approved release, not live project links |

The factual record remains `src/content/portfolio.ts`. MVP, demonstrator, unpublished, conceptual, academic-design, and in-development qualifications are preserved. No employers, metrics, research results, field validation, production readiness, or new accomplishments were added. Content consistency was checked against the supplied record, not independently verified against private source documents.

Missing evidence and the résumé do not create broken controls; they are transparently omitted or explained. Genuine replacements can be added after review.

## Privacy and commit review

- Scanned tracked files plus non-ignored untracked files that ordinary staging could include, and the staged index. Nothing is staged.
- No credential patterns, private-key material, embedded credential URLs, token patterns, or Bangladesh mobile numbers were found. No environment files, private office documents, résumé PDFs, credential containers, or build/dependency directories are current commit candidates.
- The only public personal material is the owner-supplied identity, professional history, email/social contacts, and intentionally public portrait.
- The portrait, five reference PNGs, and the embedded reference-HTML image had no EXIF, XMP, or IPTC metadata.
- `.env*`, `.next`, `node_modules`, `.vercel`, local `.audit` output, private/secrets folders, `.aws`, `.ssh`, and common key containers are ignored. Ignore rules do not excuse reviewing files before staging.
- Scope: current candidate files and staged content; Git history and every possible secret encoding were not exhaustively audited. Re-run `node scripts/audit-repository.mjs` after adding assets or changing content.

## Required manual browser QA

The browser access host was unavailable during this audit. In the previous implementation session, native Chrome control also stopped because it could not verify the browser URL. No alternate browser automation was used. **None of the visual/interaction checks below is claimed to have passed.**

| CSS width | Layout review | Interaction review |
| --- | --- | --- |
| 320 px | Not executed | Not executed |
| 390 px | Not executed | Not executed |
| 768 px | Not executed | Not executed |
| 1440 px | Not executed | Not executed |

At each width:

1. Compare against the approved screenshots; check overflow, wrapping, readability, artwork cropping, header, floating dock, and contact email. Test zoom and short viewport heights as well.
2. Tab from the skip link through navigation, filters, project links, research disclosures, and contact. Confirm visible focus, readable order, and no obscured focused controls.
3. Open/close mobile navigation; use each section link; Escape returns focus appropriately. Test header navigation from a direct project/research URL.
4. Combine category filters with search, test zero matches and reset, and listen for the live result count. Open every project, use previous/next, browser Back, and direct refresh.
5. Open Quick Find from the header, dock, Ctrl/Cmd+K, and `/` outside fields. Test arrow wrapping, Enter, no results, mouse/touch choices, Tab/Shift+Tab containment, Escape/backdrop close, opener restoration, and destination focus. Ensure typing `/` in search fields does not trigger it.
6. Scroll all three featured projects in both directions. Verify the active context and chapter links, release at section end, no overlap, and no mobile pinning or layout jumps.
7. Set Motion Off, reload, and navigate between routes. Test OS reduced motion with no saved preference, explicit overrides, unavailable local storage, and all content/navigation with animations disabled.
8. Check browser console/network errors, slow-load/image-failure behavior, and JavaScript-disabled content. Static HTML checks reduce risk but do not substitute for this test.
9. Use a screen reader to check the dialog, combobox results, route announcements, disclosures, image descriptions, and status updates. Inspect computed contrast over gradients and focus states. Main palette calculations were 17.45:1 body, 6.90:1 muted/surface, 9.13:1 primary-button text, and 8.53:1 accent/surface; this is not a complete contrast audit.
10. Measure Lighthouse/Core Web Vitals in production mode; inspect portrait sizing, CLS, and scroll responsiveness. No performance score is claimed.

## Remaining release gates

1. Complete the manual browser matrix and resolve any findings.
2. Verify the LinkedIn destination manually.
3. Choose the approved public origin, configure `NEXT_PUBLIC_SITE_URL`, rebuild, and re-run metadata/route checks with `PORTFOLIO_EXPECT_SITE_URL` set to that same origin.
4. Review the intended Git diff/assets, then obtain explicit owner approval before push or deployment.
