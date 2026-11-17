# Deploy Shakil Mahmud's portfolio (Windows + VS Code)

**Release gate:** first review `RELEASE_READINESS.md`, complete the outstanding browser checks, and obtain the owner's approval. This guide does not authorize a Git push or deployment.

## 1. After Codex completes the app

From a VS Code PowerShell terminal inside the `student-portfolio` root:

```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Open http://localhost:3000 and check the actual website. For an optional production-mode local test, stop `npm run dev` and run `npm run start` after a successful build. Keep `node_modules`, `.next`, `.env.local`, credentials and private documents out of Git. Review the public portrait and any PDF you intend to publish.

Sanity checks:
- Header, hero, selected work, archive, research, about, contact.
- Filters + search, reset, project detail routes on refresh, Quick Find Ctrl/Cmd+K, Escape, next/previous if present, floating dock, motion off, reduced motion.
- Browser responsive widths 320, 390, 768, 1440.
- Email, GitHub, LinkedIn. Hide links that do not exist. Upload a reviewed resume and set `portfolio.contact.resumeUrl` only if you want to expose a download.

## 2. Create an empty GitHub repository

Visit https://github.com/new; name it `student-portfolio` (or choose a different name). Make it private while reviewing, or public if ready. Don't initialize it with README/.gitignore/license because your local project already exists.

In project terminal:

```powershell
git status
```

Create the Git repository only if it isn't initialized already:

```powershell
git init
```

Review `.gitignore`. It should ignore `node_modules`, `.next`, `.env*` (with any safe example exceptions), and local secrets. Run:

```powershell
git add .
git commit -m "Build interactive portfolio"
git branch -M main
git remote -v
```

If no `origin` remote exists, add it with YOUR real GitHub username:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/student-portfolio.git
git push -u origin main
```

If `origin` exists, do NOT blindly add a second one: check its URL and push to the intended repository. If Git requests authentication, sign into Git Credential Manager/GitHub (don't put passwords in commands).

## 3. Import in Vercel

1. Sign in at https://vercel.com/.
2. Click Add New > Project and connect your GitHub account when asked.
3. Import your `student-portfolio` repository.
4. Keep Framework Preset: **Next.js** (usually auto-detected).
5. Root Directory: `./` if `package.json` is at repo root.
6. Keep default build settings unless the repo has documented special configuration.
7. Set `NEXT_PUBLIC_SITE_URL` to the approved absolute public origin (no path, query, or credentials), then rebuild. This is a public domain setting, not a secret. It enables canonical links, sitemap URLs, social-image metadata, and indexing. Without it, this app intentionally remains non-indexable. Never put secrets in source files or `NEXT_PUBLIC_` variables.
8. Click Deploy. After successful deployment, open the provided `*.vercel.app` URL and test it again.

Vercel generally generates preview deployments for non-production branches/PRs and updates production when pushing to your configured production branch (typically main). Every push can trigger a deployment; you don't need to manually upload files every time.

## 4. Post-deployment

- Check project details by directly loading `/projects/careerpath-ai` on the production domain.
- Check keyboard shortcuts, motion mode, small-screen navigation and public contacts.
- Update site metadata, site URL, sitemap/canonical when actual deployed domain is known.
- A custom domain is optional: Project Settings > Domains, then follow the provided DNS instructions.
- Check accessibility and performance after assets have loaded; fix slow or unstable scroll behavior before sharing in applications.

## Troubleshooting

**Build fails on Vercel:** run `npm run build` locally and review Vercel's build log, Node version and dependency lockfile. Codex should fix the real error rather than disable TypeScript or lint.

**Reference HTML shows but real site doesn't:** you might have only copied the demo; ensure Codex created proper Next.js route files under `src/app/` and components under `src/components/`.

**Missing image:** use `/images/shakil-portrait.jpg` and ensure asset sits at `public/images/shakil-portrait.jpg`.

**Resume 404:** either place a reviewed PDF under `public/` and update `resumeUrl`, or hide the button until available.

**Env-var issue:** enter variables in Vercel Project Settings > Environment Variables; avoid public prefixes for secrets; redeploy after changes.

**Project fails only when opened directly:** check Next.js App Router paths, dynamic `slug` generation and links. The built app should work on refresh, not only with client navigation.

Official docs: https://vercel.com/docs/git | https://vercel.com/docs/frameworks/full-stack/nextjs | https://nextjs.org/docs/app/getting-started/deploying
