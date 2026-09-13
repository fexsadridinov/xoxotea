# XoXo Tea / Investor experience

## Rationale and build plan

Use the product as the first proof of care: a single cup, directional window light and an oversized wordmark. Follow the consumer experience with a source-backed market case and a transparent store model. The brand is pre-launch; architectural concepts, projections and proposed terms are labeled. No invented locations, team portraits or commitments.

Build order: bilingual content and financial logic; responsive sections and routes; generated asset derivatives and PDF materials; production export, browser and accessibility checks; review branch and PR.

## Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| tea | #173F35 | Brand ground, charts, headings |
| paper | #F7F4EE | Main canvas and reversed text |
| ink | #182A25 | Body and CTA text |
| accent | #DBFB6B | Primary actions only |
| muted | #59665C | Secondary copy on light surfaces |
| neutral line | #D7DACE | Dividers |
| neutral surface | #EEEAE1 | Editorial sections |
| reversed secondary | #D5DFD6 | Secondary copy on tea |

No decorative gradients. Image lighting provides tonal variation. No raised glossy cards.

Display: Noto Serif, weight 500, Ukrainian Cyrillic supported, tracking -3.5% (hero wordmark -9%). Headings use fluid clamp sizes, balanced wrapping, no hyphenation. Body: Manrope, 400–700, Latin/Cyrillic/Cyrillic-ext. Both are fetched at build time by next/font and served locally: no runtime Google font request. The earlier handwritten Neucha face is retired.

Spacing: 8px baseline. Desktop sections 112px, tablet 80px, mobile 64px. Desktop composition subdivides a 12-column model into 6/6, 4/4/4 and 3/3/3/3. Mobile recomposes into four-column equivalents, often full width. Side gutters 6vw desktop and 20px mobile. Widths tested: 360, 390, 430, 768, 1024, 1280, 1440, 1920.

Type minimum: 15px on the website. Body 16px; introduction 18–24px. Radius: 2px surfaces, 4px actions, circular language/video controls. Shadows: none. Focus ring: 3px #937100, 5px offset.

Motion: 200–400ms, cubic-bezier(.22,1,.36,1). Framer Motion animates changing financial output. Product hover zoom is 1.025x. The hero is the main motion feature. Reduced motion disables the film and transitions; data-saver and 2G/3G connections receive the static image. Videos have visible pause controls.

## Composition

Home: hero → thesis → five drinks → interior and ritual → market → calculator → formats → funds → evidence and risks → operator → meeting request → consumer footer.

/menu and /en/menu: 12 draft drinks with bilingual names, proposed price, ingredients and provisional allergen information; printable PDF.
/investors and /en/investors: expanded investment narrative with the same calculation engine.
/press and /en/press: downloadable wordmarks, asset manifest, boilerplate and usage guidance.

Ukrainian is the root language; English has its own URLs. The language control preserves route intent. The previous /ru route falls back to Ukrainian; Vercel redirects it to /. No Russian translation was requested for this rebuild.

## Integrity gates

No fake form success: an unconfigured destination produces a locally downloaded request and explicitly states it was not sent. No fictitious portrait. No store address or hours invented. City map is an orientation link only. Confidential data-room documents are never shipped in the public bundle.
