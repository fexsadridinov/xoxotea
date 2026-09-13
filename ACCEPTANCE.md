# Acceptance audit — 13 September 2026

**Reviewable draft; not production-ready.** The implementation is committed for review. Real lead delivery, owner facts and the strict mobile LCP gate remain open. No deployment or merge is claimed.

## Measured Lighthouse results

Production static export, gzip HTTP delivery, Chromium 153, Lighthouse 13.4.1. Mobile uses Lighthouse's default simulated Slow 4G / mobile CPU settings. Desktop uses 1440×900, 40 ms RTT, 10,240 Kbps, CPU multiplier 1. These are local lab results, not Vercel field data.

| Category | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 92 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| Largest contentful paint | 3.4 s | 0.7 s |
| Landing transfer | 514.9 KB | 535.9 KB |
| Modern JS after calculator interaction | 151.5 KB | 151.5 KB |

KB means 1,000 bytes. Transfers include initial scripts, fonts, selected imagery, the chosen hero clip and near-viewport lazy assets; they do not mean every asset downloaded by scrolling through the entire site. The original unused mobile clip and pour clip are not fetched by the landing route. `audit/metrics.json` records exact values and throttle configuration. Full reports can be regenerated with `scripts/qa/lighthouse.mjs`.

## Protocol audit

| # | Requirement | Result | Evidence / remaining fix |
| --- | --- | --- | --- |
| 1 | 360 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920 screenshots | PASS | No document overflow, flagged text overflow or text below 15px. Hero sizing corrected at 360 and 1920. JPEG evidence in `audit/screenshots/`. |
| 2 | Lighthouse and performance budgets | PARTIAL | Category targets met in the recorded run. **Mobile LCP 3.4 s fails <2.0 s.** Hero transfer reduced 411→73 KB; posters are preloaded; animation imports deferred; font subset dependency preloaded. Remaining work: profile the video paint/hydration dependency on the actual preview and bring LCP below 2 s before approval. |
| 3 | Bilingual content and route-preserving toggle | PASS | Matching JSON shapes; root/menu/investors/press toggle to English counterparts and English document language after hydration. English landmarks also carry server-rendered language attributes. All active prose is sourced from the JSON files; units, symbols, paths and protocol values are code constants. |
| 4 | Ukrainian spelling and formatting | PASS | Миколаїв, Ukrainian copy, spaced thousands and ₴ checked. Source assumptions intentionally retain the required `[[ASSUMPTION: ...]]` marker. |
| 5 | Three independently worked economic examples | PASS | Six model tests; see worked table below. Browser input recomputes conservative EBITDA to 77 540 ₴. |
| 6 | Investor facts sourced or labeled | PASS WITH OWNER GATES | Market publisher links and dates are visible; local audience/footfall/competition, costs and terms are labeled assumptions. These local claims are not represented as verified. |
| 7 | Form validation, errors, confirmation and real destination | PARTIAL | Whitespace name and invalid contact rejected; fixture 500 error and 201 success verified; data-room intent and ref/UTM captured. Unconfigured form downloads a request explicitly marked **not sent**. **Real destination not connected or verified.** Configure endpoint and perform one authorized delivery test. |
| 8 | Reduced motion | PASS | No video source loaded in reduced-motion mode; CSS scroll motion/transitions disabled. Runtime preference changes remove sources. Data-saver and 2G/3G use posters. |
| 9 | Keyboard-only navigation | PASS | Skip link, carousel, controls and form stops have visible outlines; no interactive stop without focus styling in the recorded traversal. |
| 10 | Build, type checking, lint and production console | PASS | `pnpm build`, lint and six model tests pass. Browser audit records no runtime errors or warning/error console messages. |
| 11 | Responsive optimized media, dimensions and page weight | PASS / ASSET QA OPEN | AVIF + WebP at 480/960/1600, explicit dimensions, lazy loading; three silent video concepts and lightweight mobile derivative. Detailed byte/dimension inventory in `audit/asset-sizes.json`. Ceramic texture output rejected; four seamless tiles and exact video seam continuity are not certified. |
| 12 | Would a stranger believe the brand already has 40 stores? | NOT CERTIFIED | The design provides a coherent product/space system. Actual operating proof is absent: approved founder portrait/CV, real location, supplier evidence and traction. The site clearly says pre-launch. Supply that evidence; do not fabricate stores or endorsements. |

Detailed financial disclosures intentionally remain visible and can exceed the brief's three-line paragraph limit on small screens. This is an open editorial refinement, not a claim of a complete copy-format pass.

## Worked model checks

All three use 30 trading days, direct cost 56 ₴/cup, transaction fee 3%, rent 55 000 ₴, staffing 210 000 ₴, other fixed costs 120 000 ₴ and funding 2 100 000 ₴. These are planning assumptions.

| Scenario | Cups/day | Ticket | Revenue/month | Contribution/cup | EBITDA/month | Simple payback |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Conservative | 130 | 180 ₴ | 702 000 ₴ | 118.60 ₴ | 77 540 ₴ | 27.1 months |
| Base | 190 | 195 ₴ | 1 111 500 ₴ | 133.15 ₴ | 373 955 ₴ | 5.6 months |
| Upside | 260 | 205 ₴ | 1 599 000 ₴ | 142.85 ₴ | 729 230 ₴ | 2.9 months |

Contribution = ticket × 0.97 − 56. EBITDA = cups/day × 30 × contribution − 385 000. Payback = funding / positive EBITDA; negative EBITDA returns no payback. This steady-state simplification excludes ramp-up, financing, taxes, depreciation, replacement capital and working-capital changes. It is not investor yield or distributable cash.

## Owner inputs before launch

Connect the real lead endpoint, monitored email, calendar, canonical domain and analytics domain. Confirm site/address/hours/socials, final menu/allergens, founder portrait/CV, quotes/permits/traction, and investment terms. `ASSUMPTIONS.md` groups every content assumption as a question. The map currently shows Mykolaiv only and loads on demand.

## Asset service limitation

Higgsfield returned `nsfw` for the ceramic texture correction (job 500a5c44-bb81-4716-8d36-2ca79dab7e61). It was not retried. The original tea still-life image is archived but rejected for the texture role and unused by the site. Corrected takeaway packaging and counter handoff were reviewed and accepted. All visuals are concepts, not photographs of an operating store.
