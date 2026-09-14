# Rebuild audit

After `pnpm build`, install the isolated QA dependencies with `npm install --prefix scripts/qa`. Set `CHROMIUM_PATH` to a compatible Chromium executable. Each runner starts and stops its own local gzip server.

- `node scripts/qa/responsive.mjs`: six localized routes at seven widths, fourteen home-section screenshots, desktop/mobile axe audit, reduced-motion check.
- `node scripts/qa/interactions.mjs`: gallery/progress/parallax, scenario cycle, manual economics inputs, currency, invalid lead validation, unsent-download confirmation, press response, route transition and compressed JS after interaction.
- `node scripts/qa/lighthouse.mjs`: local production export, simulated mobile throttling and desktop measurements. Run without other browser audits competing for CPU. Full reports are ignored; measured summaries are committed.

These are emulated Chromium viewports, not a physical Android performance certification. No live lead is sent by the default configuration. A missing generation sequence remains an explicit failed asset gate.
