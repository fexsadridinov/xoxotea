# Simplified Chinese - 14 September 2026

Chinese is available at /zh/, /zh/menu/ and /zh/investors/. The selector shows 中文 / 简体中文. Server HTML, the client runtime and hreflang use zh-Hans; Open Graph uses zh_CN. Existing language routes remain unchanged.

Copy is authored for Simplified Chinese readers, with an investor-facing hero, natural tea names, full recipe notes and source-linked adaptations. 常驻系列 and 时令系列 preserve the six-core/four-seasonal launch order. 淡奶 and 炼乳 remain distinct, as do the no-dairy-ingredient statement and allergen safety. Menu prices and recipe costs have not been invented.

Financial labels use average price per cup to match the actual formula, 单杯边际贡献 and 静态投资回收期. UAH remains Ukrainian hryvnia, USD remains US dollars, and the planning rate remains 42 UAH/USD. Chinese formatting adds currency prefixes and retains negative signs. The formula, constants and presets are unchanged. Forecasts, planning assumptions and unconfirmed investment terms remain explicitly qualified.

Noto Sans SC is self-hosted as a 91,732-byte subset, with CJK spacing and balanced hero copy. Source/license details are in src/app/fonts/README.md and NOTO-OFL.txt. System fonts supply three non-CJK symbols absent from Noto (hryvnia, reset arrow and chevron). The Chinese PDF embeds its font and uses UAH in numeric tables; it also carries the EBITDA/payback limitations. Other three PDFs are unchanged.

Regenerate the font with Python fonttools and brotli, passing the official font and license to scripts/subset-chinese-font.py. Regenerate only the Chinese PDF with XOXO_PDF_LOCALES=zh; set XOXO_FONT_DIR to the local DejaVu font folder. The PDF generator uses ReportLab and Node for the canonical scenario values.

Validation: production build including TypeScript, lint, 17 unit tests, static checks for all 12 routes, 39 responsive route/width cases, Chinese desktop/mobile visual review and recipe/form/calculator/language checks. The single-page Chinese PDF was rendered and visually reviewed. See audit/mandarin.json. Live lead delivery, calendar configuration, kitchen validation/costing and physical-device performance remain separate open items.
