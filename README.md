# Shakil Mahmud — Interactive V2 portfolio

An original dark portfolio built in the existing Next.js App Router project with TypeScript, Tailwind CSS, Motion, and the supplied public content. The approved reference is in `reference/`; it is not embedded in the app.

## Run locally

```text
npm run dev
```

Open the printed localhost URL. On PowerShell with script execution disabled, use `npm.cmd` and `npx.cmd`.

## Validate

```text
npm run lint
npx tsc --noEmit
npm run build
npm run start
node scripts/verify-portfolio.mjs
node scripts/audit-repository.mjs
```

The route check defaults to `http://127.0.0.1:3000`; `PORTFOLIO_TEST_URL` selects another local server. If the build uses a canonical domain, pass the same origin as `PORTFOLIO_EXPECT_SITE_URL`. The smoke check does not replace browser, responsive, or screen-reader testing.

## Content and release

- Public facts: `src/content/portfolio.ts`.
- Nine case studies: `/projects/[slug]`; six research notes: `/research/[slug]`.
- All project artwork is explicitly illustrative. The portrait is the supplied public photograph.
- A résumé download appears only after a reviewed public PDF is supplied and configured.
- Set `NEXT_PUBLIC_SITE_URL` to the approved HTTP(S) origin before an approved public release. Missing configuration keeps pages non-indexable and omits canonicals and absolute social-image URLs. The social artwork itself is available at `/og`.
- Read [IMPLEMENTATION_NOTES.md](IMPLEMENTATION_NOTES.md) and [RELEASE_READINESS.md](RELEASE_READINESS.md) for verification results, limitations, and manual checks.

No push or deployment is authorized until the owner approves it.
