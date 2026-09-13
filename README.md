# XoXo Tea

Bilingual pre-launch tea brand and investor website. Next.js 16 App Router, TypeScript, Tailwind v4, Framer Motion. Static export for Vercel.

## Run

Node 22+ and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm test:model
pnpm typecheck
```

`pnpm build` creates Next.js build metadata in `.next/` and the static export in `out/`. `vercel.json` selects the Next.js framework preset and sets legacy-language redirects. Let Vercel detect the output automatically; do not set an Output Directory override to `out` in either `vercel.json` or the project dashboard. The Next.js builder needs `.next/routes-manifest.json` even for static exports. See [Vercel's routes-manifest troubleshooting guide](https://github.com/vercel/vercel/blob/main/errors/now-next-routes-manifest.md).

No server runtime is required for pages. The repository's existing stack is retained. Tailwind v4's active tokens are in `src/app/globals.css`; `tailwind.config.ts` is a typed inspection mirror.

## Content

All active user-facing prose lives in `content/uk.json` and `content/en.json`. Keep matching keys and array positions. Ukrainian is default; English URLs have `/en`. `src/components/investor/Experience.tsx` composes the server-rendered sections. Client boundaries are limited to financial inputs, imagery loader, motion, form state and instrumentation.

Financial assumptions live in `src/lib/store-model.ts`, with matching disclosure in both content files. If model constants change, update disclosures, worked examples and regenerate PDFs. Store scenarios use the repository's latest 130/190/260 cups/day and 180/195/205 UAH tickets, rather than an older conversation's 85/140/220 inputs.

## Connect real lead delivery

Set these public build-time environment variables in the hosting project, then rebuild:

- `NEXT_PUBLIC_SITE_URL`: actual canonical production origin. The fallback `https://xoxotea.vercel.app` is an unverified assumption.
- `NEXT_PUBLIC_LEAD_ENDPOINT`: owner-approved HTTPS receiving endpoint.
- `NEXT_PUBLIC_CONTACT_EMAIL`: verified monitored fallback email.
- `NEXT_PUBLIC_CALENDAR_URL`: actual booking URL.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: registered Plausible domain.

Do not put private API tokens in `NEXT_PUBLIC_*`. With a static export, use an external form endpoint that accepts JSON and supports your site's origin. The endpoint must validate input server-side, enforce origin/rate limits, reject honeypots, store the request durably and return 2xx only after accepting it. See `LEAD-CONTRACT.md`. The client alone is not an anti-spam boundary.

Until configured, forms save a text request to the visitor's device and clearly state that it was not sent. Calendar/social links are not fabricated. Acceptance for real delivery and analytics is blocked until configuration and one authorized end-to-end delivery test.

## Assets

Generated campaign set: 19 still outputs and three clips; the ceramic texture output is rejected for its requested role (see ASSETS.md). `public/press/asset-manifest.json` records exact prompts, generation results and provenance. Images have 480/960/1600 AVIF and WebP derivatives. Videos are muted H.264. `ASSETS.md` documents slots, dimensions and replacement budgets. Replace every derivative of a slot together and keep dimensions stable. The 4 texture files are a library, not automatically downloaded as page decoration.

Logo SVGs and ZIP: `public/press/`. PDFs: `public/assets/`. `scripts/documents.py` reproduces bilingual one-pagers and menus using ReportLab and DejaVu Sans; inspect rendered PDFs after changes.

## Validation

`tests/model.test.mjs` contains three independently worked scenarios, a negative EBITDA case, sensitivity and invalid-input checks. `audit/` contains browser and Lighthouse evidence; `ACCEPTANCE.md` distinguishes measured passes from owner-input blockers. Do not call the site production-ready while blocked gates remain.
