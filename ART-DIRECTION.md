# Investor positioning and visual refinement

## Positioning

The hero presents a modern tea business designed to grow from a pilot in Mykolaiv into a network across Ukraine. It invites the visitor to explore the economics and become a partner. Category-building language expresses the project ambition; it does not claim global invention, an empty competitive market or guaranteed investment performance. All three languages and PDFs use the same positioning.

## Reference review

- HEYTEA official website, https://www.heytea.com/ and https://www.heytea.com/products (visually inspected 14 September 2026): white surfaces, loosely drawn black illustrations, broad spacing, isolated product photography.
- Official HEYTEA Google Play listing, https://play.google.com/store/apps/details?id=com.heytea.overseago : ordering/customization screenshots show clean drink thumbnails on white, alongside concise product information. The screenshot is a visual reference, not a claim that the XoXo site takes orders.
- Local owner-provided store proposal: the garden and gathering themes inform original botanical and two-cup drawings. The file named Brandbook duplicates that store proposal rather than providing a separate visual identity manual.

No HEYTEA mascot, logo, product image or website image is shipped. LineArt.tsx contains original open pen-like paths for sprout, leaves, a small storefront and two cups. The arch/fluting panel, gradient cup diagrams, decorative floor-plan boxes and floating progress cups are removed from rendered pages. Functional market charts and financial comparisons remain.

## New product imagery

Higgsfield product-photoshoot workflow produced a six-core contact sheet and a four-seasonal contact sheet, with the first used as a cup/lighting reference for the second. Both were visually inspected. Request model: nano_banana_pro; returned job metadata reports nano_banana_2. The backend alias is recorded rather than silently relabeled.

- Core: c39d33f1-648e-4ce8-9d81-331e446e43d7
- Seasonal: b9a45b9a-a69c-47d8-a464-f5236c1b042e

Two preflight estimates were 2 credits per sheet; no refinements were submitted. Ten cell crops exported as 600 x 600 WebP files total 80,222 bytes. Their source jobs, crop boxes and checksums are in audit/catalogue-assets.json. Full originals remain in ignored Sources/generated/. Cup contents follow the existing inventory: pearls only for C03/C04, no tea in C04, no foam on C05/S02, no coconut in S04. Images are labeled as visual concepts, not photographs of validated production servings.

## Interaction refinement

Native navigation replaces the blocking full-screen wipe. Pointer-following movement and obsolete gallery/cup handlers are removed. The scroll handler caches section links and batches updates into requestAnimationFrame. Number animations track and cancel their frames on cleanup or reduced-motion changes. Native links, details, keyboard interactions, readable progress and the existing calculator remain. Reduced-motion behavior is preserved in code; no new physical-device or reduced-motion emulation result is claimed.

## Verification

Build/TypeScript, lint, 11 model tests and 2 inventory tests. Browser layout checks: nine routes at 360, 390, 430, 768, 1024, 1440 and 1920 px; no page/text overflow in 63 cases. Russian mobile hero and menu visually reviewed. Investor CTA, all-zero inputs (-120,000 UAH and undefined margin), USD conversion, reset, locale route preservation, keyboard recipe opening and back navigation verified. No console errors observed. Static audit checks all routes and assets. Previous Lighthouse/axe reports remain historical; no claim of universal perfection or measured physical-device 60fps.
