# Interactive V2 implementation

**Final audit, 18 November 2026:** see [RELEASE_READINESS.md](RELEASE_READINESS.md) for the current release decision, verified results, fixes, missing genuine assets, privacy checks, and the unexecuted browser matrix. It supersedes the original verification notes below.

The existing App Router project now contains the V2 homepage, `/projects`, nine project routes, `/research`, and six research-note routes. Public facts come from `src/content/portfolio.ts`; the supplied record has not been expanded with new accomplishments or outcomes.

## Architecture

- Server-rendered page content, biography, contact, research disclosures, and case studies.
- Scoped client components for archive filters, featured-work tracking, navigation, Quick Find, and motion settings.
- Native CSS sticky positioning and a desktop IntersectionObserver with height-based pixel margins and resize cleanup for the featured rail. GSAP is not needed for this interaction.
- Motion for the short featured-context transition; CSS for headline and command-dialog entrance. No content starts hidden.
- Native modal dialog for Quick Find, with combobox/listbox semantics, arrow-key selection, Enter, Escape, Ctrl/Cmd+K, and `/` outside editable fields. Native dialog contains focus and makes the background inert; the opener is restored on close.
- Motion defaults to the operating-system preference and can be overridden with the dock. Preferences persist when local storage is available. Scroll updates and pointer spotlight are throttled to animation frames and listeners are cleaned up.
- Project artwork is original explanatory HTML/CSS, explicitly labeled **Illustrative concept**. The actual portrait uses `next/image`.

## Local development

Run `npm run dev` and open the printed localhost URL. On Windows systems that block PowerShell npm scripts, use `npm.cmd` / `npx.cmd` for the equivalent commands.

Required checks:

```text
npm run lint
npx tsc --noEmit
npm run build
node scripts/verify-portfolio.mjs
```

The smoke check expects a server at `http://127.0.0.1:3000`. Set `PORTFOLIO_TEST_URL` to check a different local port. It checks all routes, content qualifications, combined archive filters, assets, metadata, and missing-page handling. It is not a browser interaction test.

## Before an approved deployment

Set `NEXT_PUBLIC_SITE_URL` to the approved absolute public origin and rebuild. This enables indexing, route canonicals, sitemap URLs, and absolute Open Graph/Twitter image URLs. Without that setting, pages are non-indexable and no public domain is assumed. Values containing credentials, a path, query, or fragment are rejected. The social card is served at `/og`.

No deployment, Git push, external service, analytics, or new dependency was added. The existing user edits to project setup and reference material are preserved.

## Genuine material still absent

- Reviewed public résumé PDF: the download action is conditional and currently absent.
- Authentic project screenshots and public source/demo/report links for most projects: case studies state what is available. The existing portfolio link is retained.
- Detailed research methods, findings, and individual contribution records beyond the supplied summaries: research pages explicitly state these limits.

## Executed verification

- `npm run lint`: passed after correcting the smoke script's reserved variable name.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed without application or metadata warnings; routes prerender successfully.
- `node scripts/verify-portfolio.mjs`: the final production audit covers 18 page routes, 44 internal route/anchor destinations, 18 assets, three missing paths, content qualifications, static HTML semantics, and search/filter/motion/metadata logic. Both missing-domain and temporary local-origin configurations were checked.
- `node scripts/audit-repository.mjs`: checks commit candidates, the staged index, protected ignore paths, credential patterns, and image metadata. No findings.
- `npm audit --omit=dev --json`: no reported production dependency vulnerabilities at audit time.
- `git diff --check`: passed.

## Browser review checklist

The browser connector was unavailable. Native Chrome control then stopped because it could not determine the current URL. Visual, keyboard, and console checks could not be executed in this session.

At **320, 390, 768, and 1440 CSS pixels**, check:

1. No horizontal overflow; hero actions, cards, artwork captions, and contact email remain readable.
2. Desktop featured context tracks all three artwork frames and releases at the end; mobile projects stack without pinning.
3. Search and category filters combine; reset and the empty state work.
4. Quick Find opens from both launchers and shortcuts; arrows/Enter navigate; Tab stays in the dialog; Escape returns focus.
5. Mobile navigation opens, closes, and returns focus after Escape.
6. Motion Off persists across reloads, reduced-motion defaults to Off, and all routes/content remain usable.
7. Open a project directly, follow next/previous, return to the archive, expand research, and reach Contact.
8. Inspect the browser console, keyboard focus visibility, and screen-reader announcements.
