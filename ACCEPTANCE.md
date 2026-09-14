# V2 acceptance — 14 September 2026

**Draft preview deployed; production merge remains blocked by the requested ship gates.**

| Check | Result |
| --- | --- |
| Production export / TypeScript / lint | PASS |
| Approved economics source | SHA-256 identical to main: `95de80b5dcd56cfc6bbc69848916763ffee3ea973ae5fd126c126112d2c0e4d6` |
| Six economics tests | PASS; three worked scenarios, loss case, rent sensitivity, invalid input |
| 360 / 390 / 430 / 768 / 1024 / 1440 / 1920, all six routes | PASS: 42 cases; no visible text or page overflow and no runtime exceptions |
| Axe accessibility, all six routes at 390 / 1440 | PASS: no violations; duplicate navigation landmark labels fixed |
| Reduced motion | PASS: zero active animations, canvas hidden, economics pin becomes normal document flow |
| Local Lighthouse mobile | 97 performance / 100 accessibility / 100 best practices / 100 SEO |
| Local Lighthouse desktop | 100 in all four categories |
| LCP < 2.2 seconds | FAIL: mobile 2.484 s; desktop 0.586 s |
| Zero CLS | NOT EXACTLY ZERO: mobile 0.00124; desktop 0.00325 |
| JavaScript < 220 KB gzip after interaction | PASS: 146,302 bytes |
| Cup system | FAIL: improved grape/matcha/peach still differ in framing, proportions or temperature; base lid markings unresolved |
| 36-frame cup rotation | BLOCKED: generation rejected for insufficient usable credits; empty manifest selects static fallback |
| All ten motion behaviors at 60fps on physical Android | NOT VERIFIED; missing sequence prevents full motion acceptance |
| Main merge | Withheld because mandatory asset and performance gates fail |

Lighthouse is a local production export delivered with gzip, Chromium 153 and Lighthouse 13.4.1. Mobile uses default simulated throttling; desktop uses 1440×900, 40 ms RTT, 10,240 Kbps and CPU multiplier 1. These are lab results, not deployed field data. Font naming metadata was subsequently updated to honor the source font's reserved name, without changing glyphs or layout.

## Verified interaction behavior

`audit/interactions.json` records the filling progress indicator, three distinct parallax depths, mobile gallery through item 06, desktop gallery through its last group, base/conservative/upside scroll cycling, currency conversion, validation, unsent-request download, masked route navigation and 0.97 press feedback. Pointer handling now uses delegation so feedback also works after the contact form is reset.

The conservative case displays 77,540 ₴ EBITDA. Increasing rent by 5,000 ₴ changes it to 72,540 ₴; USD shows $1,727 at the preserved 42 UAH/USD assumption. Base and upside remain 373,955 ₴ and 729,230 ₴ in the independent model tests. Real lead delivery and the calendar remain unconfigured and are never represented as connected.

## Evidence

- `audit/responsive.json`: all 42 route/viewport cases and reduced-motion state.
- `audit/interactions.json`: measured controls and post-interaction JavaScript.
- `audit/metrics.json`: exact Lighthouse metrics.
- `audit/screenshots/`: mobile and desktop viewport captures of all seven sections.
- `audit/asset-provenance.json` and `ASSETS.md`: completed generations, exact final prompts and rejected quality gates.
- `ASSUMPTIONS.md`: every grouped owner question.

The public draft-only `__qa.html` harness is removed. The Vercel `.next` override is retained and the main-branch deployment fix has been reconciled. The current public asset tree contains only drinks, technical SVG graphics and the bilingual one-pagers; no people, hands, interiors, storefronts or street imagery.
