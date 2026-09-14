# Localization and refinement acceptance — 14 September 2026

Russian localization and zero-minimum calculator changes are complete. The existing review branch remains a draft because the previously required generated-media and physical-device gates remain open.

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
- Main merge is withheld under the earlier mandatory ship gate. The Vercel branch preview requires sign-in; a sign-in page is not counted as public site verification.

## Evidence

`audit/responsive.json`, `audit/final-layout.json`, `audit/localization.json`, `audit/static.json`, `audit/interactions.json`, `audit/metrics.json`, and `audit/SCREENSHOTS.md`. Full reproducible Lighthouse reports remain excluded from git; compact exact measurements are committed. Generated-media provenance and owner inputs remain in `ASSETS.md` and `ASSUMPTIONS.md`.

## Publication status

The completed localization is saved in the local Git checkout. Automatic approval review repeatedly rejected uploading the Russian PDF to the public `fexsadridinov/xoxotea` repository, citing missing explicit disclosure authorization. Repository visibility and pre-existing source/PDF content were verified; the block remained. The new localization has not been published, and the prior draft preview must not be presented as containing it. Explicit user approval to publish the completed website and localized PDFs is needed before retrying.
