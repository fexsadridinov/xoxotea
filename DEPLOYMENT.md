# Local development and deployment

Production: https://xoxotea.vercel.app/ru/

Repository: https://github.com/fexsadridinov/xoxotea

Vercel project: `grow-field-os/xoxotea` (project ID `prj_1EWcGDyY3DNzOo7MRVc4rzmzH5fF`).

## Local development

Use Node 24 and the package.json-pinned pnpm 11.19.0. GitHub CLI and Vercel CLI are installed and authenticated on the continuation Mac. Credentials and `.vercel` project metadata are local and ignored by Git.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000/ru/. Validation commands are `pnpm build`, `pnpm lint`, `pnpm test:model`, and `python3 scripts/qa/static-audit.py` after the build. See `scripts/qa/README.md` for browser audit runners.

## GitHub and Vercel

Changes pushed to a review branch receive a Vercel preview. Merging an approved release into `main` triggers production deployment. Preserve the previous branches and use fast-forward pulls; do not force-reset the portable history.

```sh
gh pr list --repo fexsadridinov/xoxotea
vercel project inspect xoxotea --scope grow-field-os
vercel inspect xoxotea.vercel.app --scope grow-field-os
vercel env ls --scope grow-field-os
```

To connect a different local checkout after signing in:

```sh
vercel login
vercel link --yes --scope grow-field-os --project xoxotea
```

Both the repository and dashboard use Next.js, `pnpm build`, `.next` output metadata, and Node 24.x. The portable static export remains `out`; do not change Vercel's output setting back to `out`.

Direct CLI access is configured. A Vercel MCP plugin is not available in the current task; CLI authentication does not imply an MCP connection.

## Remaining work

- Live lead delivery requires an owner-supplied endpoint and recipient workflow; calendar booking requires its actual URL. No environment variables were found in the Vercel project. Never put private secrets in `NEXT_PUBLIC_*` variables.
- Media consistency and the real 36-frame turntable remain unresolved. The static fallback is deliberate. The Higgsfield plugin was rechecked; no additional paid job was submitted.
- Physical Android 60fps remains unverified, and the final recorded mobile LCP does not consistently meet 2.2 seconds. See `ACCEPTANCE.md` and `ASSETS.md`.
