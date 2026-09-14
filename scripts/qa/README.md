# Rebuild audit

After `pnpm build`, install the isolated QA dependencies with `npm install --prefix scripts/qa`. Set `CHROMIUM_PATH` to a compatible Chromium executable. Each runner starts and stops its own local gzip server.

- `node scripts/qa/responsive.mjs`: nine localized routes at seven widths, Ukrainian and Russian home-section screenshots, desktop/mobile axe audit, reduced-motion check.
- `node scripts/qa/interactions.mjs`: gallery/progress/parallax, scenario cycle, manual economics inputs, currency, invalid lead validation, unsent-download confirmation, press response, route transition and compressed JS after interaction.
- `node scripts/qa/lighthouse.mjs`: all three locale homepages, local production export, simulated mobile throttling and desktop measurements. Run without other browser audits competing for CPU. Full reports are ignored; measured summaries are committed.

These are emulated Chromium viewports, not a physical Android performance certification. No live lead is sent by the default configuration. A missing generation sequence remains an explicit failed asset gate.

- `python scripts/qa/static-audit.py`: translation-key parity, server languages, heading/ID integrity and internal link/media targets.
- `node scripts/qa/localization.mjs`: all three languages at mobile/desktop widths, route-preserving language navigation, keyboard controls, zero and maximum inputs, reset, localized errors/downloads, confirmation focus, disabled storage, back navigation and dynamic reduced motion.
