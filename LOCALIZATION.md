# Russian localization and refinement / 14 September 2026

Russian routes: `/ru/`, `/ru/menu/`, `/ru/investors/`. Ukrainian and English routes remain available. Changing language preserves home/menu/investors context. The Russian PDF is `/downloads/xoxo-ru.pdf`.

## Editorial choices

| Concept | Russian wording | Meaning |
| --- | --- | --- |
| Mykolaiv | Николаев | Russian place-name form; country remains Ukraine |
| Average ticket | Средний чек | The model uses it as revenue per cup; original formula retained |
| Contribution per cup | Маржинальный доход / стакан | Price less ingredients, packaging and fees |
| Gross margin | Валовая маржа напитка | Direct product margin, before occupancy and payroll |
| Store EBITDA | EBITDA точки в месяц | Monthly operating measure, not distributable cash |
| Simple payback | Простая окупаемость / мес. | Funding divided by positive steady-state monthly EBITDA |
| Data room | Документы проекта | Investor document-access request |
| Pre-launch | Подготовка к запуску | Status is not presented as an operating location |

All Russian navigation, section labels, menu descriptions, assumptions, form errors and confirmations, consent, download text, metadata, PDF and footer were authored and reviewed in context. Source publication names, brand names, technical abbreviations and actual currencies are retained. Decimal commas and grouped figures use the Russian number formatter. English drink descriptions no longer unexpectedly switch into Ukrainian. Internal assumption markup is replaced with readable labels.

## Numeric change authorized by the user

| Input | Previous minimum | New minimum | Preserved maximum | Step |
| --- | ---: | ---: | ---: | ---: |
| Cups/day | 30 | 0 | 350 | 5 |
| Average ticket, UAH | 120 | 0 | 260 | 5 |
| Monthly rent, UAH | 15,000 | 0 | 120,000 | 5,000 |
| Monthly staffing, UAH | 100,000 | 0 | 350,000 | 10,000 |

The instruction is interpreted as lower slider bounds, not replacement of the three approved presets with an all-zero initial screen. The default remains 190 cups/day, 195 UAH ticket, 55,000 UAH rent and 210,000 UAH staffing. Funding, direct cost, fees, other costs and FX are unchanged.

At all-zero editable inputs: revenue 0, contribution -56 UAH/cup, EBITDA -120,000 UAH/month, gross margin undefined, no payback or break-even. Zero price with positive volume still incurs direct costs. Negative and non-finite inputs are rejected. Eleven independent model tests include all 16 zero/maximum combinations and the three original worked scenarios.

## Refinement log

1. Copy and routing: added a complete locale, document-language root layouts, canonical/alternate URLs, sitemap entries, language navigation and model-derived PDFs; removed the conflicting Russian redirect.
2. Interaction review: replaced text-stretching rule animation, hardened route masks for storage restrictions/back navigation, made reduced-motion changes cancel animation, added pointer cancellation, disabled gallery controls at their limits, and repaired confirmation focus after rendering.
3. Numeric and accessibility review: zero-price division is explicit, undefined values are localized, currency and reset behavior are verified, disclosures/touch targets are enlarged, skip-link focus is explicit and language-button accessible names include their visible codes.
4. Performance: removed a motion-library download for simple press feedback and separated tiny route helpers from translation content so the language selector does not download all three dictionaries. Re-measured production output after changes.

Measurements and open gates are in `ACCEPTANCE.md`. No exhaustive or physical-device perfection claim is made. Existing image-consistency and missing-turntable gates remain open, and no live lead endpoint is configured.
