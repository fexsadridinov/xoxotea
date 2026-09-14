# Localization and refinement acceptance — 14 September 2026

Russian localization and zero-minimum calculator changes are complete. The owner authorized publication on 14 September 2026; PR #5 is merged and deployed. The generated-media, performance, physical-device and live-integration gates below remain open.

## Verified

- Production build, TypeScript and lint pass. Eleven model tests pass, including original worked scenarios, all zero/maximum combinations, invalid inputs and locale-aware negative currency formatting.
- Nine routes at seven widths (360/390/430/768/1024/1440/1920): 63 complete section/layout cases, without page/text overflow or runtime exceptions. Final header/font geometry is checked separately at the same 63 combinations.
- Axe: no violations on all nine routes at 390 and 1440px. Localized document language, one primary heading, unique IDs, local links/media targets and alternate URLs pass static checks.
- All three languages at mobile/desktop sizes pass keyboard language navigation, route preservation, zero controls, preserved maxima, reset, localized form validation/downloads and confirmation focus.
- Disabled browser storage and back navigation work. Dynamic reduced motion cancels animations and releases sticky sections. Progress, three parallax depths, galleries, scroll-driven scenarios, currency switching, input sensitivity and press feedback are measured.
- Ukrainian, English and Russian one-pagers are model-derived, rendered and visually inspected. Russian section screenshots reviewed at mobile and desktop sizes.

## Final lab measurements

Scores are performance / accessibility / best practices / SEO.

| Locale | Mobile scores | Mobile LCP | Desktop scores | Desktop LCP | CLS mobile / desktop |
| --- | --- | --- | --- | --- | --- |
| UK | 96 / 100 / 100 / 100 | 2.734 s | 100 / 100 / 100 / 100 | 0.582 s | 0 / 0 |
| RU | 93 / 100 / 100 / 100 | 2.770 s | 100 / 100 / 100 / 100 | 0.577 s | 0 / 0 |
| EN | 99 / 100 / 100 / 100 | 2.031 s | 100 / 100 / 100 / 100 | 0.534 s | 0 / 0 |

The final run does not consistently pass the mobile LCP <2.2 s gate. Earlier refinement runs reached 2.18 s on Russian, but the final run above is the acceptance result; performance is not represented as an unconditional pass. Zero CLS is measured on all six homepage/device combinations. Post-interaction JavaScript is **140,239 bytes gzip**, below 220 KB.

Environment: local gzip production export, Chromium 153, Lighthouse 13.4.1. Mobile uses default simulated throttling; desktop uses 1440×900, 40 ms RTT, 10,240 Kbps and CPU multiplier 1. These are lab results, not physical-device measurements or deployed field data.

## Numeric scope

The user authorized lower minima on 14 September. The economic source is therefore no longer byte-for-byte identical to main: zero ticket now returns an explicitly undefined gross margin instead of throwing. All four controls start at zero; maxima, steps, default presets, positive-ticket formulas and planning constants remain intact. At all-zero editable inputs, other fixed costs remain 120,000 UAH/month. The Russian interface explains this directly. See `LOCALIZATION.md`.

## Remaining production gates

- Cup consistency: the working six-drink previews still differ in framing, proportions or temperature; base lid markings remain unresolved.
- The real 36-frame turntable is absent after the generation service rejected it for insufficient credits. The site labels its static view; no fabricated sequence is used.
- Physical Android 60fps is not verified.
- Live lead delivery and calendar are not configured. Local form downloads are explicitly unsent. The endpoint contract now matches the implementation.
- PR #5 was merged after the owner authorized publication. The production domain is publicly accessible; protected preview URLs are not used as evidence of public availability. Publication does not certify the remaining quality gates.

## Evidence

`audit/responsive.json`, `audit/final-layout.json`, `audit/localization.json`, `audit/static.json`, `audit/interactions.json`, `audit/metrics.json`, and `audit/SCREENSHOTS.md`. Full reproducible Lighthouse reports remain excluded from git; compact exact measurements are committed. Generated-media provenance and owner inputs remain in `ASSETS.md` and `ASSUMPTIONS.md`.

## Publication status

The owner explicitly authorized GitHub publication and Vercel deployment on 14 September 2026, superseding the earlier publication hold. The implementation checkpoint `49595e1` was pushed and merged through PR #5 as `caeeaa3a40422fe647b04f6e0998d4ff7ce3c876`.

Vercel reported production deployment `dpl_5RvyVPA46D9pSjbWqY5jDYrGszgW` Ready. All nine routes returned HTTP 200 without authentication and with the expected server HTML language. The public Russian PDF matched the local release byte-for-byte. The Mac production build (including TypeScript), lint, 11 model tests, and static route audit passed.

Direct Vercel CLI access is linked to `grow-field-os/xoxotea`. Dashboard settings have been reconciled with `vercel.json`: Next.js, `pnpm build`, `.next`, Node 24.x. No project environment variables are configured, so live leads and calendar booking remain unavailable. Existing performance measurements above remain the historical lab results; no new Lighthouse result is claimed.
