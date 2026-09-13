# Complete source packet

This snapshot contains every tracked code, content, configuration and SVG source file, without abbreviated bodies. Binary media and PDFs are present in the repository and inventoried in FILE-TREE.md. Design, assumptions, prompts and audit results have separate complete documents.

## .gitignore

````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
Thumbs.db
*.pem

# editors
.idea/
.vscode/

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# Full raw audit reports remain reproducible; compact evidence is committed.
audit/lighthouse-*.html
audit/lighthouse-*.json
audit/screenshots/*.png

# Isolated local audit dependencies
scripts/qa/node_modules/
````

## content/en.json

````json
{
  "brand": "XoXo",
  "edition": "TEA SYSTEM / V.02",
  "sections": [
    "THESIS",
    "PRODUCT",
    "MARKET",
    "ECONOMICS",
    "SCALE",
    "TERMS",
    "CONTACT"
  ],
  "sourceDate": "13.09.2026",
  "units": {
    "volume": "500 ml",
    "sugar": "0 / 30 / 50 / 100%",
    "currency": [
      "UAH",
      "USD"
    ],
    "angle": "°",
    "percent": "%",
    "frames": "36",
    "range": "01 — 06"
  },
  "sources": [
    {
      "name": "Research & Markets · 2026",
      "url": "https://www.researchandmarkets.com/reports/5851209/bubble-tea-market-report"
    },
    {
      "name": "Persistence · 2026",
      "url": "https://www.persistencemarketresearch.com/market-research/europe-bubble-tea-market.asp"
    },
    {
      "name": "Future Market Insights · 2026",
      "url": "https://www.futuremarketinsights.com/reports/demand-for-bubble-tea-in-eu"
    },
    {
      "name": "Wikipedia · 2024",
      "url": "https://en.wikipedia.org/wiki/Heytea"
    },
    {
      "name": "China Daily · 13.07.2026",
      "url": "https://global.chinadaily.com.cn/a/202607/13/WS6a543cffa310986e2b464e2b.html"
    }
  ],
  "lang": "en",
  "metadata": {
    "title": "XoXo — Tea. Precision. Scale.",
    "description": "A modern tea system for Mykolaiv. Six drinks. Transparent unit economics. An independent pre-launch concept."
  },
  "nav": {
    "menu": "Menu",
    "investors": "Investors",
    "contact": "Start a conversation",
    "skip": "Skip to content",
    "label": "Section index",
    "home": "Home",
    "language": "Українська"
  },
  "status": "MYKOLAIV, UA / PRE-LAUNCH",
  "thesis": [
    "Tea.",
    "Precision.",
    "Scale."
  ],
  "thesisFoot": [
    "01 LOCATION TO START",
    "01 SYSTEM TO REPEAT"
  ],
  "product": {
    "title": [
      "One vessel.",
      "Six expressions."
    ],
    "subtitle": "PRODUCT SYSTEM / 001",
    "rotate": "PRODUCT VIEW",
    "angle": "ROTATION",
    "collection": "THE COLLECTION",
    "volume": "VOLUME",
    "energy": "ENERGY",
    "sugar": "SUGAR TIERS",
    "price": "CONCEPT PRICE",
    "previous": "Previous drink",
    "next": "Next drink",
    "alt": "Blank tall cup with a clear dome lid and straw",
    "assumption": "[[ASSUMPTION A01]] Concept recipes, prices, 500 ml volume and sugar tiers. Nutrition awaits recipe testing; renders are visual concepts.",
    "kcal": "kcal / TBC",
    "drinks": [
      {
        "name": "Brown sugar",
        "other": "Молочний чай із перлинами",
        "tea": "BLACK TEA / MILK / TAPIOCA",
        "price": 185
      },
      {
        "name": "Grape cloud",
        "other": "Виноградний чай із сирною пінкою",
        "tea": "JASMINE / GRAPE / CHEESE FOAM",
        "price": 205
      },
      {
        "name": "Jasmine pearl",
        "other": "Жасминовий чай із перлинами",
        "tea": "JASMINE GREEN TEA / TAPIOCA",
        "price": 165
      },
      {
        "name": "Coconut mango",
        "other": "Кокос і манго",
        "tea": "JASMINE / COCONUT / MANGO",
        "price": 205
      },
      {
        "name": "Matcha pearl",
        "other": "Матча-лате з перлинами",
        "tea": "MATCHA / MILK / TAPIOCA",
        "price": 215
      },
      {
        "name": "Peach oolong",
        "other": "Персиковий улун",
        "tea": "OOLONG / PEACH / ICE",
        "price": 175
      }
    ]
  },
  "market": {
    "title": [
      "Category momentum.",
      "Measured."
    ],
    "world": "GLOBAL / USD BILLION",
    "europe": "EUROPE / USD MILLION",
    "cagr": "CAGR",
    "eu": "EU DEMAND / 2026–2036",
    "stores": "HEYTEA / LOCATIONS / 2024",
    "overseas": "HEYTEA / OVERSEAS GROWTH",
    "forecast": "PUBLISHER FORECASTS / DIFFERENT MARKET DEFINITIONS",
    "historical": "HISTORICAL SCALE / NOT XOXO LOCATIONS",
    "source": "SOURCE",
    "chart": "Global bubble tea: 3.35 billion dollars in 2025 to 3.62 billion in 2026. Europe: 727.2 million dollars in 2026 to 1262.6 million in 2033.",
    "nearly": "NEARLY",
    "period": "YEAR TO JULY 2026"
  },
  "economics": {
    "label": "05 / THE STORE MODEL",
    "title": "A cup. A day. A business.",
    "body": "Move the inputs. See exactly what changes.",
    "currency": "Display currency",
    "uah": "UAH",
    "usd": "USD",
    "cups": "Cups / day",
    "ticket": "Average ticket",
    "rent": "Monthly rent",
    "staff": "Monthly staffing",
    "revenue": "Monthly revenue",
    "gross": "Cup gross margin",
    "contribution": "Contribution / cup",
    "ebitda": "Monthly store EBITDA",
    "payback": "Simple payback / months",
    "breakEven": "Break-even cups / day",
    "none": "Not reached",
    "scenarios": [
      "Conservative",
      "Base",
      "Upside"
    ],
    "scenarioTitle": "Three scenarios. The same formula.",
    "assumptions": "[[ASSUMPTION: 30 trading days/month; ingredients and packaging 56 ₴/cup; transaction fees 3%; rent 55 000 ₴; fully loaded staffing 210 000 ₴; other fixed costs 120 000 ₴/month; initial funding 2 100 000 ₴; illustrative FX 42 ₴/$, not a live exchange rate.]]",
    "explanation": "Gross margin excludes labor and occupancy. Contribution deducts direct cost and transaction fees. EBITDA deducts rent, staffing and other fixed costs. Payback divides initial funding by steady-state EBITDA: it excludes ramp-up, financing, tax, depreciation, replacement capex and working-capital changes. EBITDA is not distributable cash.",
    "benchmark": "Category articles describe roughly 65–80% cup gross margins and $30k–$150k startup formats; these are broad editorial benchmarks, not validated Ukrainian budgets."
  },
  "economicsTitle": [
    "One store.",
    "Every variable."
  ],
  "economicsExtra": {
    "tag": "[[ASSUMPTION A02]] / APPROVED PLANNING MODEL",
    "scroll": "SCROLL THROUGH SCENARIOS",
    "custom": "CUSTOM",
    "reset": "Reset model",
    "period": "PER MONTH",
    "fixed": "FIXED COSTS",
    "funding": "FUNDING BASELINE",
    "exchange": "PLANNING FX",
    "scenario": "Scenario"
  },
  "scale": {
    "title": [
      "Repeat the system.",
      "Not the complexity."
    ],
    "labels": [
      "FORMAT",
      "FOOTPRINT",
      "FUNDING",
      "CUPS / DAY",
      "PAYBACK / MONTHS"
    ],
    "formats": [
      "Kiosk",
      "Counter",
      "Hybrid"
    ],
    "areas": [
      "14 m²",
      "35 m²",
      "55 m²"
    ],
    "note": "[[ASSUMPTION A03]] Illustrative format footprints. All three use the same approved 2.1M ₴ funding baseline and conservative/base/upside math. These are not site-specific budgets or quotes.",
    "repeat": "STANDARDIZE → VALIDATE → REPEAT"
  },
  "terms": {
    "title": [
      "Capital with",
      "clear conditions."
    ],
    "tag": "[[ASSUMPTION A04]] / DISCUSSION TERMS",
    "instrument": "INSTRUMENT",
    "instrumentValue": "Equity / structure to agree",
    "ticket": "INDICATIVE TICKET",
    "ticketValue": "$5,000–$50,000",
    "return": "TARGET INVESTOR RETURN",
    "returnValue": "To agree / not guaranteed",
    "funds": "USE OF FUNDS / 2 100 000 ₴",
    "allocations": [
      "Equipment",
      "Fit-out",
      "Working capital",
      "Launch & product",
      "Contingency"
    ],
    "gates": [
      "01 / Site & supplier quotes",
      "02 / Recipe and cost validation",
      "03 / Pilot unit economics",
      "04 / Repeat only after proof"
    ],
    "risksTitle": "RISK → MITIGATION",
    "risks": [
      [
        "Demand",
        "Pilot before expansion"
      ],
      [
        "Supply / FX",
        "Dual sourcing and buffer stock"
      ],
      [
        "Power / security",
        "Backup power and continuity plan"
      ],
      [
        "Execution",
        "Recipe cards and daily cost control"
      ]
    ],
    "note": "[[ASSUMPTION A05]] Allocation 35 / 25 / 20 / 12 / 8%. Milestone gates and mitigations are proposed, not completed. Equity, valuation, rights and distributions remain open."
  },
  "contact": {
    "title": [
      "The next variable",
      "is you."
    ],
    "lead": "CONVERSATION / 001",
    "name": "Name",
    "org": "Organization (optional)",
    "range": "Ticket range",
    "email": "Email or Telegram",
    "ranges": [
      "Exploring / advice",
      "$5,000–$10,000",
      "$10,000–$25,000",
      "$25,000–$50,000"
    ],
    "room": "Include a data-room request",
    "submit": "Prepare request",
    "send": "Send request",
    "sending": "Sending…",
    "download": "One-pager / PDF",
    "calendar": "Calendar / to be confirmed",
    "notice": "[[ASSUMPTION A06]] Direct delivery and calendar are not connected yet. Prepare a request to download locally; it is not sent.",
    "privacy": "Your details stay on this device unless a configured delivery endpoint accepts them.",
    "success": "Request prepared.",
    "successBody": "Your request file is ready. It has not been sent. Share it with the founder through your existing contact.",
    "sent": "Request received.",
    "sentBody": "Your request was accepted. We will use the contact you supplied.",
    "error": "Delivery failed. Your entries are kept; please retry.",
    "invalid": "Enter a name and a valid email or Telegram handle.",
    "again": "Prepare another request",
    "file": "xoxo-investor-request.txt",
    "notSent": "NOT SENT — LOCAL REQUEST",
    "required": "Required",
    "consent": "I agree to be contacted about this request.",
    "trap": "Leave this field empty"
  },
  "footer": [
    "XOXO / TEA SYSTEM",
    "MYKOLAIV, UKRAINE",
    "PRE-LAUNCH / 2026"
  ],
  "notFound": "Page not found",
  "back": "Return to the system"
}
````

## content/uk.json

````json
{
  "brand": "XoXo",
  "edition": "TEA SYSTEM / V.02",
  "sections": [
    "THESIS",
    "PRODUCT",
    "MARKET",
    "ECONOMICS",
    "SCALE",
    "TERMS",
    "CONTACT"
  ],
  "sourceDate": "13.09.2026",
  "units": {
    "volume": "500 мл",
    "sugar": "0 / 30 / 50 / 100%",
    "currency": [
      "UAH",
      "USD"
    ],
    "angle": "°",
    "percent": "%",
    "frames": "36",
    "range": "01 — 06"
  },
  "sources": [
    {
      "name": "Research & Markets · 2026",
      "url": "https://www.researchandmarkets.com/reports/5851209/bubble-tea-market-report"
    },
    {
      "name": "Persistence · 2026",
      "url": "https://www.persistencemarketresearch.com/market-research/europe-bubble-tea-market.asp"
    },
    {
      "name": "Future Market Insights · 2026",
      "url": "https://www.futuremarketinsights.com/reports/demand-for-bubble-tea-in-eu"
    },
    {
      "name": "Wikipedia · 2024",
      "url": "https://en.wikipedia.org/wiki/Heytea"
    },
    {
      "name": "China Daily · 13.07.2026",
      "url": "https://global.chinadaily.com.cn/a/202607/13/WS6a543cffa310986e2b464e2b.html"
    }
  ],
  "lang": "uk",
  "metadata": {
    "title": "XoXo — Чай. Точність. Масштаб.",
    "description": "Система сучасного чаю для Миколаєва. Шість напоїв. Прозора економіка однієї точки. Незалежний проєкт до запуску."
  },
  "nav": {
    "menu": "Меню",
    "investors": "Інвесторам",
    "contact": "Почати розмову",
    "skip": "Перейти до вмісту",
    "label": "Індекс розділів",
    "home": "Головна",
    "language": "English"
  },
  "status": "МИКОЛАЇВ, UA / ДО ЗАПУСКУ",
  "thesis": [
    "Чай.",
    "Точність.",
    "Масштаб."
  ],
  "thesisFoot": [
    "01 ТОЧКА ДЛЯ СТАРТУ",
    "01 СИСТЕМА ДЛЯ МАСШТАБУ"
  ],
  "product": {
    "title": [
      "Одна форма.",
      "Шість смаків."
    ],
    "subtitle": "СИСТЕМА НАПОЇВ / 001",
    "rotate": "ПРЕДМЕТНИЙ ВИГЛЯД",
    "angle": "ОБЕРТАННЯ",
    "collection": "КОЛЕКЦІЯ",
    "volume": "ОБ’ЄМ",
    "energy": "ЕНЕРГІЯ",
    "sugar": "РІВНІ ЦУКРУ",
    "price": "ПЛАНОВА ЦІНА",
    "previous": "Попередній напій",
    "next": "Наступний напій",
    "alt": "Прозора висока склянка без написів із купольною кришкою та трубочкою",
    "assumption": "[[ASSUMPTION A01]] Концепти рецептур, ціни, об’єм 500 мл та рівні цукру. Калорійність — після тестування рецептур; зображення є концептами.",
    "kcal": "ккал / уточнюємо",
    "drinks": [
      {
        "name": "Коричневий цукор",
        "other": "Brown sugar pearl milk tea",
        "tea": "ЧОРНИЙ ЧАЙ / МОЛОКО / ПЕРЛИНИ",
        "price": 185
      },
      {
        "name": "Виноградна хмаринка",
        "other": "Grape cheese tea",
        "tea": "ЖАСМИН / ВИНОГРАД / СИРНА ПІНКА",
        "price": 205
      },
      {
        "name": "Жасминові перлини",
        "other": "Jasmine green tea with pearls",
        "tea": "ЗЕЛЕНИЙ ЖАСМИНОВИЙ ЧАЙ / ПЕРЛИНИ",
        "price": 165
      },
      {
        "name": "Кокос і манго",
        "other": "Coconut mango",
        "tea": "ЖАСМИН / КОКОС / МАНГО",
        "price": 205
      },
      {
        "name": "Матча з перлинами",
        "other": "Matcha latte with pearls",
        "tea": "МАТЧА / МОЛОКО / ПЕРЛИНИ",
        "price": 215
      },
      {
        "name": "Персиковий улун",
        "other": "Clear peach oolong",
        "tea": "УЛУН / ПЕРСИК / ЛІД",
        "price": 175
      }
    ]
  },
  "market": {
    "title": [
      "Рух категорії.",
      "У цифрах."
    ],
    "world": "СВІТ / МЛРД USD",
    "europe": "ЄВРОПА / МЛН USD",
    "cagr": "CAGR",
    "eu": "ПОПИТ У ЄС / 2026–2036",
    "stores": "HEYTEA / ТОЧКИ / 2024",
    "overseas": "HEYTEA / РІСТ ЗА КОРДОНОМ",
    "forecast": "ПРОГНОЗИ ВИДАВЦІВ / РІЗНІ ВИЗНАЧЕННЯ РИНКУ",
    "historical": "ІСТОРИЧНИЙ МАСШТАБ / НЕ ТОЧКИ XOXO",
    "source": "ДЖЕРЕЛО",
    "chart": "Світовий ринок: 3,35 млрд доларів у 2025 році та 3,62 млрд у 2026. Європа: 727,2 млн доларів у 2026 році та 1262,6 млн у 2033.",
    "nearly": "МАЙЖЕ",
    "period": "РІК ДО ЛИПНЯ 2026"
  },
  "economics": {
    "label": "05 / МОДЕЛЬ ЗАКЛАДУ",
    "title": "Стакан. День. Бізнес.",
    "body": "Змінюйте параметри. Бачте, як змінюється результат.",
    "currency": "Валюта відображення",
    "uah": "ГРН",
    "usd": "USD",
    "cups": "Стаканів на день",
    "ticket": "Середній чек",
    "rent": "Оренда на місяць",
    "staff": "Персонал на місяць",
    "revenue": "Місячний виторг",
    "gross": "Валова маржа напою",
    "contribution": "Внесок одного стакана",
    "ebitda": "EBITDA закладу на місяць",
    "payback": "Проста окупність / місяців",
    "breakEven": "Беззбитковість / стаканів на день",
    "none": "Не досягається",
    "scenarios": [
      "Обережний",
      "Базовий",
      "Сильний"
    ],
    "scenarioTitle": "Три сценарії. Одна формула.",
    "assumptions": "[[ASSUMPTION: 30 робочих днів на місяць; інгредієнти й пакування 56 ₴/стакан; комісії 3%; оренда 55 000 ₴; персонал з усіма нарахуваннями 210 000 ₴; інші постійні витрати 120 000 ₴/місяць; стартовий бюджет 2 100 000 ₴; умовний курс 42 ₴/$ — не поточний валютний курс.]]",
    "explanation": "Валова маржа не включає персонал та оренду. Внесок стакана враховує прямі витрати й комісії. EBITDA віднімає оренду, персонал та інші постійні витрати. Окупність — стартовий бюджет, поділений на стабілізовану EBITDA: без періоду розгону, фінансування, податків, амортизації, заміни обладнання та змін оборотного капіталу. EBITDA не дорівнює коштам для дивідендів.",
    "benchmark": "Галузеві статті наводять близько 65–80% валової маржі напою та $30–150 тис. стартових витрат. Це загальні редакційні орієнтири, а не перевірені кошториси для України."
  },
  "economicsTitle": [
    "Одна точка.",
    "Кожна змінна."
  ],
  "economicsExtra": {
    "tag": "[[ASSUMPTION A02]] / ПОГОДЖЕНА ПЛАНОВА МОДЕЛЬ",
    "scroll": "ГОРТАЙТЕ СЦЕНАРІЇ",
    "custom": "ВЛАСНИЙ",
    "reset": "Скинути модель",
    "period": "НА МІСЯЦЬ",
    "fixed": "ПОСТІЙНІ ВИТРАТИ",
    "funding": "БАЗОВЕ ФІНАНСУВАННЯ",
    "exchange": "ПЛАНОВИЙ КУРС",
    "scenario": "Сценарій"
  },
  "scale": {
    "title": [
      "Повторюємо систему.",
      "Без зайвої складності."
    ],
    "labels": [
      "ФОРМАТ",
      "ПЛОЩА",
      "ФІНАНСУВАННЯ",
      "ЧАШОК / ДЕНЬ",
      "ОКУПНІСТЬ / МІС."
    ],
    "formats": [
      "Кіоск",
      "Каунтер",
      "Гібрид"
    ],
    "areas": [
      "14 м²",
      "35 м²",
      "55 м²"
    ],
    "note": "[[ASSUMPTION A03]] Ілюстративні площі форматів. Усі три використовують погоджену базу фінансування 2,1 млн ₴ та консервативний/базовий/оптимістичний розрахунки. Це не кошториси конкретних приміщень.",
    "repeat": "СТАНДАРТ → ПЕРЕВІРКА → ПОВТОРЕННЯ"
  },
  "terms": {
    "title": [
      "Капітал із",
      "чіткими умовами."
    ],
    "tag": "[[ASSUMPTION A04]] / УМОВИ ДЛЯ ОБГОВОРЕННЯ",
    "instrument": "ІНСТРУМЕНТ",
    "instrumentValue": "Частка / структуру узгодимо",
    "ticket": "ОРІЄНТОВНИЙ ВНЕСОК",
    "ticketValue": "$5 000–$50 000",
    "return": "ЦІЛЬОВА ДОХІДНІСТЬ ІНВЕСТОРА",
    "returnValue": "Узгодимо / без гарантії",
    "funds": "ВИКОРИСТАННЯ КОШТІВ / 2 100 000 ₴",
    "allocations": [
      "Обладнання",
      "Облаштування",
      "Оборотний капітал",
      "Запуск і продукт",
      "Резерв"
    ],
    "gates": [
      "01 / Приміщення та комерційні пропозиції",
      "02 / Перевірка рецептур і собівартості",
      "03 / Економіка пілотної точки",
      "04 / Повторення після підтвердження"
    ],
    "risksTitle": "РИЗИК → ПРОТИДІЯ",
    "risks": [
      [
        "Попит",
        "Пілот перед розширенням"
      ],
      [
        "Постачання / курс",
        "Два постачальники та запас"
      ],
      [
        "Енергія / безпека",
        "Резервне живлення і план безперервності"
      ],
      [
        "Виконання",
        "Технологічні карти та щоденний контроль витрат"
      ]
    ],
    "note": "[[ASSUMPTION A05]] Розподіл 35 / 25 / 20 / 12 / 8%. Етапи й заходи запропоновано, а не виконано. Частка, оцінка, права та виплати відкриті для обговорення."
  },
  "contact": {
    "title": [
      "Наступна змінна —",
      "ви."
    ],
    "lead": "РОЗМОВА / 001",
    "name": "Ім’я",
    "org": "Організація (необов’язково)",
    "range": "Діапазон внеску",
    "email": "Email або Telegram",
    "ranges": [
      "Розглядаю / порада",
      "$5 000–$10 000",
      "$10 000–$25 000",
      "$25 000–$50 000"
    ],
    "room": "Додати запит на матеріали для інвестора",
    "submit": "Підготувати запит",
    "send": "Надіслати запит",
    "sending": "Надсилаємо…",
    "download": "Короткий опис / PDF",
    "calendar": "Календар / узгодимо",
    "notice": "[[ASSUMPTION A06]] Надсилання та календар ще не підключені. Підготуйте запит для завантаження на пристрій; його не буде надіслано.",
    "privacy": "Дані залишаються на вашому пристрої, доки підключений сервіс не прийме запит.",
    "success": "Запит підготовлено.",
    "successBody": "Файл готовий. Запит не надіслано. Передайте його засновнику через ваш наявний канал зв’язку.",
    "sent": "Запит отримано.",
    "sentBody": "Ваш запит прийнято. Для відповіді використаємо вказаний контакт.",
    "error": "Надсилання не вдалося. Дані збережено у формі; спробуйте ще раз.",
    "invalid": "Вкажіть ім’я та коректний email або ім’я користувача Telegram.",
    "again": "Підготувати ще один запит",
    "file": "xoxo-investor-request.txt",
    "notSent": "НЕ НАДІСЛАНО — ЛОКАЛЬНИЙ ЗАПИТ",
    "required": "Обов’язково",
    "consent": "Погоджуюся на зв’язок щодо цього запиту.",
    "trap": "Залиште це поле порожнім"
  },
  "footer": [
    "XOXO / СИСТЕМА ЧАЮ",
    "МИКОЛАЇВ, УКРАЇНА",
    "ДО ЗАПУСКУ / 2026"
  ],
  "notFound": "Сторінку не знайдено",
  "back": "Повернутися до системи"
}
````

## eslint.config.mjs

````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## next.config.ts

````typescript
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { deviceSizes: [480, 960, 1600], imageSizes: [] },
};
export default nextConfig;
````

## package.json

````json
{
  "name": "xoxotea",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint",
    "typecheck": "tsc --noEmit",
    "test:model": "node --experimental-strip-types --test tests/model.test.mjs"
  },
  "dependencies": {
    "framer-motion": "^13.2.0",
    "lucide-react": "^1.44.0",
    "next": "16.3.4",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "packageManager": "pnpm@11.19.0",
  "type": "module"
}
````

## pnpm-lock.yaml

````yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      framer-motion:
        specifier: ^13.2.0
        version: 13.2.0(react-dom@19.2.8(react@19.2.8))(react@19.2.8)
      lucide-react:
        specifier: ^1.44.0
        version: 1.45.0(react@19.2.8)
      next:
        specifier: 16.3.4
        version: 16.3.4(@babel/core@7.29.7(supports-color@7.2.0))(@types/node@20.19.43)(react-dom@19.2.8(react@19.2.8))(react@19.2.8)
      react:
        specifier: 19.2.8
        version: 19.2.8
      react-dom:
        specifier: 19.2.8
        version: 19.2.8(react@19.2.8)
    devDependencies:
      '@tailwindcss/postcss':
        specifier: ^4
        version: 4.3.3
      '@types/node':
        specifier: ^20
        version: 20.19.43
      '@types/react':
        specifier: ^19
        version: 19.3.0
      '@types/react-dom':
        specifier: ^19
        version: 19.3.0(@types/react@19.3.0)
      eslint:
        specifier: ^9
        version: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      eslint-config-next:
        specifier: 16.3.4
        version: 16.3.4(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      tailwindcss:
        specifier: ^4
        version: 4.3.3
      typescript:
        specifier: ^5
        version: 5.9.3

packages:

  '@alloc/quick-lru@5.3.0':
    resolution: {integrity: sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==}
    engines: {node: '>=10'}

  '@babel/code-frame@7.29.7':
    resolution: {integrity: sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.29.7':
    resolution: {integrity: sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.29.7':
    resolution: {integrity: sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.29.8':
    resolution: {integrity: sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.29.7':
    resolution: {integrity: sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-globals@7.29.7':
    resolution: {integrity: sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.29.7':
    resolution: {integrity: sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.29.7':
    resolution: {integrity: sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-string-parser@7.29.7':
    resolution: {integrity: sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.29.7':
    resolution: {integrity: sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.29.7':
    resolution: {integrity: sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.29.7':
    resolution: {integrity: sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.29.8':
    resolution: {integrity: sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/template@7.29.7':
    resolution: {integrity: sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.29.8':
    resolution: {integrity: sha512-I5z7H3bf/41ktsNVLtpN0wAa336HkqIHQ5BuPLEhTkt1jVSyZpeNKIzTgEWmlxjdg81R0IgUCcaE+Ok3NvrfZg==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.29.8':
    resolution: {integrity: sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==}
    engines: {node: '>=6.9.0'}

  '@emnapi/core@1.10.0':
    resolution: {integrity: sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==}

  '@emnapi/runtime@1.10.0':
    resolution: {integrity: sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==}

  '@emnapi/runtime@1.11.3':
    resolution: {integrity: sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==}

  '@emnapi/wasi-threads@1.2.1':
    resolution: {integrity: sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==}

  '@eslint-community/eslint-utils@4.10.1':
    resolution: {integrity: sha512-cuadcxVFE8sDK6iWJbs8Sn0av2Nrh2QSGQhVlBW9AaAHqHwjWsZHT8LJ4hFGPh7ASBV2deFdM7H/DPjulmh8rg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/eslint-utils@4.9.1':
    resolution: {integrity: sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.2':
    resolution: {integrity: sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/config-array@0.21.2':
    resolution: {integrity: sha512-nJl2KGTlrf9GjLimgIru+V/mzgSK0ABCDQRvxw5BjURL7WfH5uoWmizbH7QB6MmnMBd8cIC9uceWnezL1VZWWw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/config-helpers@0.4.2':
    resolution: {integrity: sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/core@0.17.0':
    resolution: {integrity: sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/eslintrc@3.3.7':
    resolution: {integrity: sha512-F42g89Qd5oAWtp0k0nnSrjziAKza7w8SVT4mStc18LZMaRb4J1HQAHLCalEtDCxrTuksx7NU9qsmeLwpOfPqWw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/js@9.39.5':
    resolution: {integrity: sha512-QywQuszQh77pIXCsq998c8hbhSTI/azTty1Z6N53dmAudKHhy573j3yvRLsX2BSp8YpLtoCEG8E9DJe+8zUh4A==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/object-schema@2.1.7':
    resolution: {integrity: sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/plugin-kit@0.4.1':
    resolution: {integrity: sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@humanfs/core@0.19.2':
    resolution: {integrity: sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==}
    engines: {node: '>=18.18.0'}

  '@humanfs/node@0.16.8':
    resolution: {integrity: sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==}
    engines: {node: '>=18.18.0'}

  '@humanfs/types@0.15.0':
    resolution: {integrity: sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==}
    engines: {node: '>=18.18.0'}

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/retry@0.4.3':
    resolution: {integrity: sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==}
    engines: {node: '>=18.18'}

  '@img/colour@1.1.0':
    resolution: {integrity: sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==}
    engines: {node: '>=18'}

  '@img/sharp-darwin-arm64@0.35.4':
    resolution: {integrity: sha512-Uhfl4V4lhP2nbUVF9+hyH1+luj86f1gUFeo8ALYxFoULoU+G87D43BfeMP8XHsk9boxAnCY/bf2EHwhA7MuGsA==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.35.4':
    resolution: {integrity: sha512-hWniXY3bG5qKpkKrAwPe4y+VTPmf086YQAnkxWh7uA1YrlRouWGa0M0Mxj3ZjnXFkv7/TD1bTy9lGUK26vRvWw==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-freebsd-wasm32@0.35.4':
    resolution: {integrity: sha512-lIsKw/BU+kjB4eZjxrYrZmwOJYi3Ajrv66iAlBmUPyKc3HpnloevB1g3wxGD9P/5BbQ1brBGl65VRRrCvQDEqA==}
    engines: {node: '>=20.9.0'}
    os: [freebsd]

  '@img/sharp-libvips-darwin-arm64@1.3.3':
    resolution: {integrity: sha512-suTBPTDGrI9WodccaDdwZItTSaBYASlBk1NSfElSHrUfzu3szG6lvIF58+WiFvnfzuK8ZBFS5zE00PxqxnRiPg==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.3.3':
    resolution: {integrity: sha512-FVJZ5mITMobmXIz/hPDTw0EintTW5H3WfrxwLqEqjiIihlu+hVRyGrFQ60xl0Lxn7Bt3zdpevPaQi0HEzqz9fw==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.3.3':
    resolution: {integrity: sha512-0DaL0A6Xu6sQSQFwe4iVCrKWU2cCTItnRsYsCdxAMm9NF6twAA9BKnoqy4hqz4+azQ0JHuA26qiUKsf1XJ/v5A==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-arm@1.3.3':
    resolution: {integrity: sha512-3rbU4vqXXc3hY/OiXdl52xZvT0F1yEngWfvqudtPJg/KkyiaQw2DRsFrNzpmLvfavbwOq3qXn36GP8obHRULQA==}
    cpu: [arm]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-ppc64@1.3.3':
    resolution: {integrity: sha512-cdn1OvUBwsXhbC0zSzJnNzf5MZ/mTrobawDvNXBTxe8VtqKAm0sRuEY2Evzovb/w9JMk4TvRxqt1mekSuJz64w==}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-riscv64@1.3.3':
    resolution: {integrity: sha512-HjPVx7yKz+0lqdhDlTw1tt90wamBoxhiXpvl1XZpJLiHH4RCJ5yDTqH+VlYPv2fwFs89JFw4c1IexYOcQUi4IQ==}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-s390x@1.3.3':
    resolution: {integrity: sha512-neWLh+3yCNThxnfy3c4BbVBeGgt9aftno+XbT56iK28RgeDs3UOFWviLWlUu0bArYVYJaFDK+RRohbicUNCm8Q==}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-x64@1.3.3':
    resolution: {integrity: sha512-4vKmvAst9nrowcqquKFAyZJUDolUaIp8uRiN0mWFguJ1IplC9/pitXtlnnlU4aa/eJw3J7i67V+pwUL+wZGdsA==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linuxmusl-arm64@1.3.3':
    resolution: {integrity: sha512-Y9kQaLMuNoB0bPYOOdcZMaseNrFpPodIWWMrx+CZyydf2xn68j9WYc6sWWRrDwNkzCQjKYfc68L7jKjGlHMibw==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@img/sharp-libvips-linuxmusl-x64@1.3.3':
    resolution: {integrity: sha512-fj8Mv0HHfD1Rr+4I68+3agJynxDWtBFgicTbSOb9Bke6pIwzGcJ+RX/yHjmiEGFMCavY/dxvem7MyNaJF+wDiw==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@img/sharp-linux-arm64@0.35.4':
    resolution: {integrity: sha512-De4jpEnAU8Hd5oT0j1G3uL4ZvTuipVMn7YC6vPaJhy6/7EwEae0SVAoBrUMYQbkLGDm85taVWwuPc1a44LTzCQ==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-arm@0.35.4':
    resolution: {integrity: sha512-7OAS8gI0EReKGVN2HssHlM6umJgxF5VI3xN0p9FA91p/YO+ou5hiNghLdZ5BEHztwaaK5+bLKRf8x/o2L2nk9A==}
    engines: {node: '>=20.9.0'}
    cpu: [arm]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-ppc64@0.35.4':
    resolution: {integrity: sha512-2oYZJeIl4kCcMGk4ouZVjnkCtFrpQFlNEtJ6GbxzhHQchwH0NH/qEb9ykmOl29dqwMq+JhFdZn+1ak2FKhI9fQ==}
    engines: {node: '>=20.9.0'}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-riscv64@0.35.4':
    resolution: {integrity: sha512-cPbNChoRURAWdebDIHSenxRpgEdy7JkPydSnUxRm9VvKD7m0/xVaR/8Fzlu81pk5nHEvHH87UZUA7cTtwnbJSA==}
    engines: {node: '>=20.9.0'}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-s390x@0.35.4':
    resolution: {integrity: sha512-RY0JFY8Fd6RonCBtHz+DvadaPkXDSI1AUn6yWL9TipqkZ1vY8w8evqdgyDFnkm4/K1ve1TvZiaePP5oSd4+WVQ==}
    engines: {node: '>=20.9.0'}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-x64@0.35.4':
    resolution: {integrity: sha512-9qvvEAuk8k89TfWUoX2htWjbAMX8p+NxCppjpcg5k6xMsjhBQPTsoIh36h9Qde4WRuGpJeYnOjdosDn/cnv+OA==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linuxmusl-arm64@0.35.4':
    resolution: {integrity: sha512-KB5jxpfWQTr0nc3xdHtWChdbifHrBGsd2SM62Eyxrl8afikm+f5qGBU75SJIZBT/S1MC8XyacdlXBMSWq6OURA==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@img/sharp-linuxmusl-x64@0.35.4':
    resolution: {integrity: sha512-f+eZJZIQNEEd26RPSW+76chwOf1XtA2Y/O+5ocVyLliHkeih3e+jhLVBdNTd2rS3IbNXK8+ug93Vf5ZXtF5Lxg==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@img/sharp-wasm32@0.35.4':
    resolution: {integrity: sha512-zQnl4Kwp7Q6NHsENtU2T/00Zi+w3AQNwz3+UaTyVBy2FpXrzXzGjndpK61onhZjRtRpQXxCTeqw19bVyXOh7jA==}
    engines: {node: '>=20.9.0'}

  '@img/sharp-webcontainers-wasm32@0.35.4':
    resolution: {integrity: sha512-ESfNkywmCfPNyaZjxooddJQiQ+l/nTpGEOGthxiLnIHXC/CmcBixnfwUleX9mCz9ovrUUvKMap/pm8RYbzfwaA==}
    engines: {node: '>=20.9.0'}
    cpu: [wasm32]

  '@img/sharp-win32-arm64@0.35.4':
    resolution: {integrity: sha512-iNdlBX9gLVvqe2I3uIJSIKTq6wckP/DYxZtcqxm09x5Gi24DnFBmPAWZmr60ZyYMG0xlzo6goG3670ar+RXvRw==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [win32]

  '@img/sharp-win32-ia32@0.35.4':
    resolution: {integrity: sha512-kqRsbaa5CS6KHlpxnN7WhE6vAAugXyZButpRdvDWetlv6Qv4N9WTcrWzF7tXfB9T7MsoadqdI8hmwLq6UlLvtw==}
    engines: {node: ^20.9.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.35.4':
    resolution: {integrity: sha512-XtmnYhBcrORsJ4XJngyzr/EWP0hRZLAZRFaApdKuviyqF78+ylxh2y06ZmtULAMOnObJ3ucpN0AcwSWnMowTRg==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [win32]

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.6.0':
    resolution: {integrity: sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@napi-rs/wasm-runtime@1.2.4':
    resolution: {integrity: sha512-AJxoUD2/15ESHbvpcyjU274nsAPLuOtPHCk0vKJM5pj//Fg/B1FXNWjPnXTT9PymCYYiHo4zPj0ZomXBKhoy7g==}
    engines: {node: ^20.19.0 || ^22.13.0 || >=23.5.0}
    peerDependencies:
      '@emnapi/core': ^1.7.1 || ^2.0.0-alpha.4
      '@emnapi/runtime': ^1.7.1 || ^2.0.0-alpha.4

  '@next/env@16.3.4':
    resolution: {integrity: sha512-cjWZnUUa6jZq2kFaNe/ZyJdZonOZ/QoN0Zka2nz/FLOrfx14pQuM9c5RaSVkWMqgdt4ksgPAMWPyHSs/CyV48Q==}

  '@next/eslint-plugin-next@16.3.4':
    resolution: {integrity: sha512-szW9y2Aumu4z88YXfTzcFsgUAg2k64uzbtcO5L9f1AKS4w/GUKJcbFllRflROVyNPgJtGOnvNxiyp3v6b+prIA==}

  '@next/swc-darwin-arm64@16.3.4':
    resolution: {integrity: sha512-iBr3I5LZNk5/bgl5//iTgD2tcym14MX0Xo7fD//u9dYAEgGzza1y9oywluPtf74YnOswVdH1908aK9xVz7zQTw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@16.3.4':
    resolution: {integrity: sha512-2dpiSyl2Jw/NrBPaU2MAKGSa+2MR82pJIn4Sm5Rjr+gxAeuh0z158Su3Z2O8zn7UNNq+ej4bToed6RcRN/Lydg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@16.3.4':
    resolution: {integrity: sha512-+t+U8HZT+fApePCS5h89CSH3datz29MkzyfCn+6fpsZBG/oiEOhINcb9rtkv6sdpToLGFn2e6146NzaKCXkqrA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@next/swc-linux-arm64-musl@16.3.4':
    resolution: {integrity: sha512-mx03GNs1ocQA5JQ4FxDMmIsNkdrZh8cuezKCrId28e5/gIPU/l7Kcy2+vmCCzdjnnmXJy+iOAu+7K0QppO6Urg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@next/swc-linux-x64-gnu@16.3.4':
    resolution: {integrity: sha512-YIhGY6fSMfha52bnVxnzc9zaVBzJg+cqQTOD8tXIBSx4fuv0pVMxQTE0PaS59YhnMOiYiG09IMwxJAf/CFm/Dw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@next/swc-linux-x64-musl@16.3.4':
    resolution: {integrity: sha512-+eaaX6axpDb0yF1GCpiERe6njplvdC+nks/fKfcHu3XPGRrald8P3/X7yv7QLdjA51knnxwl9pxdIJsg+w1L+Q==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@next/swc-win32-arm64-msvc@16.3.4':
    resolution: {integrity: sha512-0jcXW7Xs/uzICrmgV3MhDYDeRy++1CqnpDIerlPIqYO4bhzB4WNbX/aRnQclustsAyTkFKB0z6rbcjmNg5tR8A==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@16.3.4':
    resolution: {integrity: sha512-vvBzwu1pYQCp92maZCFCIw/XgOTMR5tur9GjakwIo2cmwRTMKajRZZDS9+e4KsUZWKu1E007WUeAFXRRjZeuzw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@nolyfill/is-core-module@1.0.39':
    resolution: {integrity: sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==}
    engines: {node: '>=12.4.0'}

  '@rtsao/scc@1.1.0':
    resolution: {integrity: sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==}

  '@swc/helpers@0.5.23':
    resolution: {integrity: sha512-5lSsMOTXURePglDfvuAQUqkGek9Hg2kksOYay2m0+XR++b2NWYL/4sWyuvVBIs8oKnJaxkdi9whaL/sqN13afw==}

  '@tailwindcss/node@4.3.3':
    resolution: {integrity: sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==}

  '@tailwindcss/oxide-android-arm64@4.3.3':
    resolution: {integrity: sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [android]

  '@tailwindcss/oxide-darwin-arm64@4.3.3':
    resolution: {integrity: sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [darwin]

  '@tailwindcss/oxide-darwin-x64@4.3.3':
    resolution: {integrity: sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [darwin]

  '@tailwindcss/oxide-freebsd-x64@4.3.3':
    resolution: {integrity: sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [freebsd]

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3':
    resolution: {integrity: sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==}
    engines: {node: '>= 20'}
    cpu: [arm]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-gnu@4.3.3':
    resolution: {integrity: sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-arm64-musl@4.3.3':
    resolution: {integrity: sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-linux-x64-gnu@4.3.3':
    resolution: {integrity: sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-x64-musl@4.3.3':
    resolution: {integrity: sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-wasm32-wasi@4.3.3':
    resolution: {integrity: sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]
    bundledDependencies:
      - '@napi-rs/wasm-runtime'
      - '@emnapi/core'
      - '@emnapi/runtime'
      - '@tybys/wasm-util'
      - '@emnapi/wasi-threads'
      - tslib

  '@tailwindcss/oxide-win32-arm64-msvc@4.3.3':
    resolution: {integrity: sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [win32]

  '@tailwindcss/oxide-win32-x64-msvc@4.3.3':
    resolution: {integrity: sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [win32]

  '@tailwindcss/oxide@4.3.3':
    resolution: {integrity: sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==}
    engines: {node: '>= 20'}

  '@tailwindcss/postcss@4.3.3':
    resolution: {integrity: sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==}

  '@tybys/wasm-util@0.10.3':
    resolution: {integrity: sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg==}

  '@types/estree@1.0.9':
    resolution: {integrity: sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/json5@0.0.29':
    resolution: {integrity: sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==}

  '@types/node@20.19.43':
    resolution: {integrity: sha512-6oYBAi5ikg4Pl+kGsoYtawUMBT2zZMCvPNF7pVLnHZfd1zf38DRiWn/gT01RYCdUqkv7Fhr+C9ot4/tb+2sVvA==}

  '@types/react-dom@19.3.0':
    resolution: {integrity: sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==}
    peerDependencies:
      '@types/react': ^19.3.0

  '@types/react@19.3.0':
    resolution: {integrity: sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==}

  '@typescript-eslint/eslint-plugin@8.70.0':
    resolution: {integrity: sha512-/v8HZt6RlyIZxB3ntehELOcUcfxKPVGWXnQdJuHRmzrqgF8nQypcC/oxGW+Ot4VGKDq81XugPKxx0n5PBtf9PA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      '@typescript-eslint/parser': ^8.70.0
      eslint: ^8.57.0 || ^9.0.0 || ^10.0.0
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/parser@8.70.0':
    resolution: {integrity: sha512-zYvrmj9Yxd63UGaXw+kdt6A0F0s0qveJyuatIM77bYC2DE4pgmg7a50u8LR7PRtXd0x+h+Tl3eXabGm06SWd3Q==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0 || ^10.0.0
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/project-service@8.70.0':
    resolution: {integrity: sha512-hFHbTNqhU9G+2eKFXCBVb1tjFT/LceiJ4+HfLO4pTpDI0KHi6iajpcFFkaSQ9gXmCh7n82A0PthaayEdN6mspQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/scope-manager@8.70.0':
    resolution: {integrity: sha512-8nP3Kwh5hlgZ4FicGvmznAmJe8UL4sdU8tLukrPaMuQmDuk4Y8xYfzu/aYZW4xT2JCgc7H/TpDI5cGlxcWJSqQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/tsconfig-utils@8.70.0':
    resolution: {integrity: sha512-adnkeeNq9Sq1sUf4+FRVc0KdgYghzsgFpZSQVZVvY0LCuUuN0FnQgyGzCJeC4fW1cdXseBAjU2EOqUIjbNcZUw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/type-utils@8.70.0':
    resolution: {integrity: sha512-NUMKIhYVaVIVLnRL9CRt+VVcuLgSHUCpXn4/+K8wql+vdInUzvx8BjUO1oJ7cG9shjFJKtF8F8Hh2kCh3/KBVw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0 || ^10.0.0
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/types@8.70.0':
    resolution: {integrity: sha512-asTOIYhDg4zdzOScCyaytrsV3cR6B4ecPQlXw/dJIm7J/MZTtCtfVII9JD8Geh4jTCrK/Xe6cg5UevoleMcoJQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/typescript-estree@8.70.0':
    resolution: {integrity: sha512-d9NmHMPEKQ7QCLLm1jI3zmoQBwT5KwFYjXBJ9ymZfKCUU+5rmTRykKAFvH5Qn/ZCds3CEAFS9OC9M/jkl0X2bA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/utils@8.70.0':
    resolution: {integrity: sha512-oZmtKJz/4fufZ2p3+Cn3ijEojcdfR+1zYDH2xKYrEly0dR/Q/1xUPRCOlKGxod78nWlU2UnDe09GZ3TaknBFGA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0 || ^10.0.0
      typescript: '>=4.8.4 <6.1.0'

  '@typescript-eslint/visitor-keys@8.70.0':
    resolution: {integrity: sha512-BoC8PiO4Hkdo0TVJh9Ntxr5MxPDI7/oFsrygN5ADelFSeXG/qgNuucIGA+L5Z6JpPTE/uRfcTWtscjbUaufepQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@unrs/resolver-binding-android-arm-eabi@1.12.2':
    resolution: {integrity: sha512-g5T90pqg1bo/7mytQx6F4iBNC0Wsh9cu+z9veDbFjc7HjpesJFWD7QMS0NGStXM075+7dJPPVvBbpZlnrdpi/w==}
    cpu: [arm]
    os: [android]

  '@unrs/resolver-binding-android-arm64@1.12.2':
    resolution: {integrity: sha512-YGCRZv/9GLhwmz6mYDeTsm/92BAyR28l6c2ReweVW5pWgfsitWLY8upvfRlGdoyD8HjeTHSYJWyZGD4KJA/nFQ==}
    cpu: [arm64]
    os: [android]

  '@unrs/resolver-binding-darwin-arm64@1.12.2':
    resolution: {integrity: sha512-u9DiNT1auQMO20A9SyTuG3wUgQWB9Z7KjAg0uFuCDR1FsAY8A0CG2S6JpHS1xwm/w1G08bjXZDcyOCjv1WAm2w==}
    cpu: [arm64]
    os: [darwin]

  '@unrs/resolver-binding-darwin-x64@1.12.2':
    resolution: {integrity: sha512-f7rPLi/T1HVKZu/u6t87lroib16n8vrSzcyxI7lg4BGO9UF26KhQL44sd9eOUgrTYhvRXtWOIZT5PejdPyJfUA==}
    cpu: [x64]
    os: [darwin]

  '@unrs/resolver-binding-freebsd-x64@1.12.2':
    resolution: {integrity: sha512-BpcOjWCJub6nRZUS2zA20pmLvjtqAtGejETaIyRLiZiQf++cbrjltLA5NN/xaXfqeOBOSlMFbemIl5/S5tljmg==}
    cpu: [x64]
    os: [freebsd]

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.12.2':
    resolution: {integrity: sha512-vZTDvdSISZjJx66OzJqtsOhzifbqRjbmI1Mnu49fQDwog5GtDI4QidRiEAYbZCRj9C8YZEW+3ZjqsyS9GR4k2A==}
    cpu: [arm]
    os: [linux]

  '@unrs/resolver-binding-linux-arm-musleabihf@1.12.2':
    resolution: {integrity: sha512-BiPI+IrIlwcW4nLLMM21+B1dFPzd55yAVgVGrdgDjNef+ch03GdxrcyaIz8X9SsQirh/kCQ7mviyWlMxdh2D7g==}
    cpu: [arm]
    os: [linux]

  '@unrs/resolver-binding-linux-arm64-gnu@1.12.2':
    resolution: {integrity: sha512-zJc0H99FEPoFfSrNpa91HYfxzfAJCr502oxNK1cfdC9hlaFI43RT+JFCann9JUgZmLzzntChHyn13Sgn9ljHNg==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@unrs/resolver-binding-linux-arm64-musl@1.12.2':
    resolution: {integrity: sha512-KQ3Lki6l+Pz1k/eBipN41ES+YUK30beLGb9YqcB1O542cyLCNE6GaxrfcY3T6EezmGGk84wb5XyO9loTM9tkcA==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@unrs/resolver-binding-linux-loong64-gnu@1.12.2':
    resolution: {integrity: sha512-3SJGEh1DborhG6pyxvhPzCT4bbSIVihsvgJc13P1bHG7KLdNDaF9T3gsTwFc7Jw/5Y5/iWOjkEx7Zy0NvCGX3Q==}
    cpu: [loong64]
    os: [linux]
    libc: [glibc]

  '@unrs/resolver-binding-linux-loong64-musl@1.12.2':
    resolution: {integrity: sha512-jiuG/Obbel7uw1PwHNFfrkiKhLAF6mnyZ6aWlOAVN9WqKm8v0OFGnciJIHu8+CMvXLQ8AD51LPzAoUfT21D5Ew==}
    cpu: [loong64]
    os: [linux]
    libc: [musl]

  '@unrs/resolver-binding-linux-ppc64-gnu@1.12.2':
    resolution: {integrity: sha512-q7xRvVpmcfeL+LlZg8Pbbo6QaTZwDU5BaGZbwfhkEsXJn3Was8xYfE0RBH266xZt0rM6B7i8xAYIvjthuUIWHg==}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@unrs/resolver-binding-linux-riscv64-gnu@1.12.2':
    resolution: {integrity: sha512-0CVdx6lcnT3Q9inOH8tsMIOJ6ImndllMjqJHg8RLVdB7Vq4SfkEXl9mCSsVNuNA4MCYycRicCUxPCabVHJRr6A==}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@unrs/resolver-binding-linux-riscv64-musl@1.12.2':
    resolution: {integrity: sha512-iOwlRo9vnp6R6ohHQS11n0NnfdXx/omhkocmIfaPRpQhKZ+3BDMkkdRVh53qjkFkpPddf+FETA28NwGN7l5l+w==}
    cpu: [riscv64]
    os: [linux]
    libc: [musl]

  '@unrs/resolver-binding-linux-s390x-gnu@1.12.2':
    resolution: {integrity: sha512-HYJtLfXq94q8iZNFT1lknx258wlkkWhZeUXJRqzKBBUJ00CvZ+N33zgbCqimLjsyw5Va6uUxhVa12mI+kaveEw==}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@unrs/resolver-binding-linux-x64-gnu@1.12.2':
    resolution: {integrity: sha512-mPsUhunKKDih5O96Y6enDQyHc1SqBPlY1E/SfMWDM3EdJ95Z9CArPeCVwCCqbP45ljvivdEk8Fxn+SIb1rDAJQ==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@unrs/resolver-binding-linux-x64-musl@1.12.2':
    resolution: {integrity: sha512-azrt6+5ydLd8Vt210AAFis/lZevSfPw93EJRIJG+xPu4WCJ8K0kppCTpMyLPcKT7H15M4Jnt2tMp5bOvCkRC6A==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@unrs/resolver-binding-openharmony-arm64@1.12.2':
    resolution: {integrity: sha512-YZ9hP4O0X9PQb8eO980qmLNGH4zT3I9+SZTdt0Pr0YyuGQhYKoOZkV02VzrzyOZJ5xIJ3UFIenKkUkGg8GjgWQ==}
    cpu: [arm64]
    os: [openharmony]

  '@unrs/resolver-binding-wasm32-wasi@1.12.2':
    resolution: {integrity: sha512-tYFDIkMxSflfEc/h92ZWNsZlHSwgimbNHSO3PL2JWQHfCuC2q316jMyYU9TIWZsFK2bQwyK5VAdYgn8ygPj69A==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@unrs/resolver-binding-win32-arm64-msvc@1.12.2':
    resolution: {integrity: sha512-qzNyg3xL0VPQmCaUh+N5jSitce6k+uCBfMDesWRnlULOZaqUkaJ0ybdT+UqlAWJoQjuqfIU/0Ptx9bteN4D82g==}
    cpu: [arm64]
    os: [win32]

  '@unrs/resolver-binding-win32-ia32-msvc@1.12.2':
    resolution: {integrity: sha512-WD9sY00OfpHVGfsnHZoA8jVT+esS/Bg8z8jzxp5BnDCjjwsuKsPQrzswwpFy4J1AUJbXPRfkpcX0mXrzeXW79g==}
    cpu: [ia32]
    os: [win32]

  '@unrs/resolver-binding-win32-x64-msvc@1.12.2':
    resolution: {integrity: sha512-nAB74NfSNKknqQ1RrYj6uz8FcXEomu/MATJZxh/x+BArzN2U3JbOYC0APYzUIGhVY3m5hRxA8VPNdPBoG8txlA==}
    cpu: [x64]
    os: [win32]

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn@8.18.0:
    resolution: {integrity: sha512-lGq+9yr1/GuAWaVYIHRjvvySG5/4VfKIvC8EWxStPdcDh/Ka7FG3twP6v4d5BkravUilhIAsG4Qj83t02LWUPQ==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv@6.15.0:
    resolution: {integrity: sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  array-buffer-byte-length@1.0.2:
    resolution: {integrity: sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==}
    engines: {node: '>= 0.4'}

  array-includes@3.2.0:
    resolution: {integrity: sha512-VXY5eFRarnXcYxwBjJzPmEhH55+rmP79/+ueDhi0F+TuqfHCItagIHqxeUZrmgrOPa31QTh9H85DjX3FfJ0FTg==}
    engines: {node: '>= 0.4'}

  array.prototype.findlast@1.2.5:
    resolution: {integrity: sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlastindex@1.2.6:
    resolution: {integrity: sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==}
    engines: {node: '>= 0.4'}

  array.prototype.flat@1.3.3:
    resolution: {integrity: sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==}
    engines: {node: '>= 0.4'}

  array.prototype.flatmap@1.3.3:
    resolution: {integrity: sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==}
    engines: {node: '>= 0.4'}

  array.prototype.tosorted@1.1.4:
    resolution: {integrity: sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.4:
    resolution: {integrity: sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==}
    engines: {node: '>= 0.4'}

  ast-types-flow@0.0.8:
    resolution: {integrity: sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==}

  async-function@1.0.0:
    resolution: {integrity: sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==}
    engines: {node: '>= 0.4'}

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  axe-core@4.13.0:
    resolution: {integrity: sha512-UzGt8zg7Ny8djbYMhxl2zuEevVa7r2gJjYY5Lwr1xM7+XU2nd6CkIWFTVcCIbAP63vSz71NaVyyuSk9lHKcy0A==}
    engines: {node: '>=4'}

  axobject-query@4.1.0:
    resolution: {integrity: sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==}
    engines: {node: '>= 0.4'}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  balanced-match@4.0.4:
    resolution: {integrity: sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==}
    engines: {node: 18 || 20 || >=22}

  baseline-browser-mapping@2.11.22:
    resolution: {integrity: sha512-pWc4w51fBFd7mav43/zKRC+RI6f4yfzQoVlfvE8dECePyfkn1bzLp01Fj0QACcyCZyFhiEMyD2qScfKRWgWibA==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  brace-expansion@1.1.18:
    resolution: {integrity: sha512-Edep/X9fGqVNmzKBVsDYIOtD+z1tuezV70LBjdCst9Tqu76lsnvRiZ6oTic1n+/BIwX6QDGAO94PN4N2SADvtw==}

  brace-expansion@5.0.9:
    resolution: {integrity: sha512-ScQ4IuvIEF1TMlP7Zt+vjJ//9zlPb2SDcxWxM3bk8s6t6GGdJ7KO1dCcTidOPJKePW30LE/2cT7wCyPho9/Wxg==}
    engines: {node: 20 || >=22}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.28.9:
    resolution: {integrity: sha512-EWazOblFYUvlGZcfGhPUPmYh3nikUxBVb+y9MJun5f3hBi812X+8MSQTujLBtgK3cf51fJWbWfOjyeO954d+Eg==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.9:
    resolution: {integrity: sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  caniuse-lite@1.0.30001810:
    resolution: {integrity: sha512-TITQPUkaz+aVk5GL6NhOdwk1aEaNTSDPsGFWrTuhKGtjTF70jL/Oht2W4c6rXUe5fu7Ie19VIahAXHIIiWWNeg==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  csstype@3.2.3:
    resolution: {integrity: sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==}

  damerau-levenshtein@1.0.8:
    resolution: {integrity: sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==}

  data-view-buffer@1.0.2:
    resolution: {integrity: sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.2:
    resolution: {integrity: sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.1:
    resolution: {integrity: sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==}
    engines: {node: '>= 0.4'}

  debug@3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.3:
    resolution: {integrity: sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  doctrine@2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  electron-to-chromium@1.5.427:
    resolution: {integrity: sha512-n14zb3FdsChZ2BNobqNHAJMcP3ifFv4paox2LvCrfVAQcqGiSURgbJl+PfMpHVCNFkStnNc+RRVtPBTVW5PDgw==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  enhanced-resolve@5.24.5:
    resolution: {integrity: sha512-L1l8TNvomm6UVW5B253AGxQagSQr+vGwhMlrrfRS2qmhx46AMpMVJKQYLvWYbysTMY8VoicOvzHzoHMbyzB+4A==}
    engines: {node: '>=10.13.0'}

  es-abstract-get@1.0.0:
    resolution: {integrity: sha512-6PMWXpdhshVvFp+FoWYs1EvG1Nj0tvk0dZM+XcK0xMEM1czRVcP6ohqPWHy6qPagSpC8j4+p89WXlT+xXJs/fg==}
    engines: {node: '>= 0.4'}

  es-abstract@1.24.2:
    resolution: {integrity: sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-iterator-helpers@1.4.0:
    resolution: {integrity: sha512-c/A0P0oxkACDc+cKWw8evLXK83oBKgn0qPOqCYT4x9uolpCIJAcYvJC9QYKNDRPsTeGyCrQ326jrvgZWdCdK5Q==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.1.2:
    resolution: {integrity: sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.1.0:
    resolution: {integrity: sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==}
    engines: {node: '>= 0.4'}

  es-to-primitive@1.3.4:
    resolution: {integrity: sha512-yPDz7wqpg1/mmHLmS3tcfTfbw5f1eryXvyghYBffGdERwe+mV7ZcWzTR8LR17Kvqt3qfPurjlonmnq3MKXIOXw==}
    engines: {node: '>= 0.4'}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-config-next@16.3.4:
    resolution: {integrity: sha512-35/8RM10huEL9vlr8hUZMERMENHBrnyHN3ZZkF9efSgzGaqK34jIqry44A956//zriUhUAUW0XSkcolhrryqAA==}
    peerDependencies:
      eslint: '>=9.0.0'
      typescript: '>=3.3.1'
    peerDependenciesMeta:
      typescript:
        optional: true

  eslint-import-resolver-node@0.3.10:
    resolution: {integrity: sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==}

  eslint-import-resolver-typescript@3.10.1:
    resolution: {integrity: sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      eslint-plugin-import: '*'
      eslint-plugin-import-x: '*'
    peerDependenciesMeta:
      eslint-plugin-import:
        optional: true
      eslint-plugin-import-x:
        optional: true

  eslint-module-utils@2.14.0:
    resolution: {integrity: sha512-W2WCRZ9Dqntd+2u8jJcVMV2PKulc6RdLgUUoh/yQr3uB6lo/ZOeGx11sv60/8S4QFFKNslAlWhr9u0Ef7ZW6Ig==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: '*'
      eslint-import-resolver-node: '*'
      eslint-import-resolver-typescript: '*'
      eslint-import-resolver-webpack: '*'
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true
      eslint:
        optional: true
      eslint-import-resolver-node:
        optional: true
      eslint-import-resolver-typescript:
        optional: true
      eslint-import-resolver-webpack:
        optional: true

  eslint-plugin-import@2.32.0:
    resolution: {integrity: sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: ^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true

  eslint-plugin-jsx-a11y@6.10.2:
    resolution: {integrity: sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==}
    engines: {node: '>=4.0'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9

  eslint-plugin-react-hooks@7.1.1:
    resolution: {integrity: sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==}
    engines: {node: '>=18'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0

  eslint-plugin-react@7.37.5:
    resolution: {integrity: sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7

  eslint-scope@8.4.0:
    resolution: {integrity: sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@4.2.1:
    resolution: {integrity: sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint-visitor-keys@5.0.1:
    resolution: {integrity: sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==}
    engines: {node: ^20.19.0 || ^22.13.0 || >=24}

  eslint@9.39.5:
    resolution: {integrity: sha512-DgZS62aPLXKlnxILS/AYCoRvHaZeXceIzlXPkkGGzJWSow1aEk0lbTlxUSlyjC8jcaKxAdOnTDz+o1JFSBsyjw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    deprecated: This version is no longer supported. Please see https://eslint.org/version-support for other options.
    hasBin: true
    peerDependencies:
      jiti: '*'
    peerDependenciesMeta:
      jiti:
        optional: true

  espree@10.4.0:
    resolution: {integrity: sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  esquery@1.7.0:
    resolution: {integrity: sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.1:
    resolution: {integrity: sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastq@1.20.3:
    resolution: {integrity: sha512-XKv5nnLs6nLF71NgiKJLIZFLkPyIEuOselLG7ujZnGrRfQK8HpvY+WqKhAJUAdLomwVHErVS4LfxFlPq0/FTAw==}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  file-entry-cache@8.0.0:
    resolution: {integrity: sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==}
    engines: {node: '>=16.0.0'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@4.0.1:
    resolution: {integrity: sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==}
    engines: {node: '>=16'}

  flatted@3.4.4:
    resolution: {integrity: sha512-5+ybhBZANEJxaH3X5evAFatUxLfEHSr7n6kYJ+1Qd0mUqr4eu9gIf6GDbWHf8RJijHrjjO8G+la14SlL2SeS1Q==}

  for-each@0.3.5:
    resolution: {integrity: sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==}
    engines: {node: '>= 0.4'}

  framer-motion@13.2.0:
    resolution: {integrity: sha512-9E33ebgMaO33w1nN/jEdW8z3/GO483fMi4rqbMG9rt83XgW9QLKRe4NcmJ8s+fQ3O34++UHrIQwlIWGIWTITjA==}
    peerDependencies:
      react: ^18.0.0 || ^19.0.0
      react-dom: ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.2.0:
    resolution: {integrity: sha512-jObKIik1P2QjPHP5nz5BaOtUlfgS0fWo8IUByNXkM+o+02sJOi94em77GwJKQSJ3gfPHdgzLNrHc1uokV4P/ew==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  generator-function@2.0.1:
    resolution: {integrity: sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==}
    engines: {node: '>= 0.4'}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-symbol-description@1.1.0:
    resolution: {integrity: sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==}
    engines: {node: '>= 0.4'}

  get-tsconfig@4.14.3:
    resolution: {integrity: sha512-++QEw4DIY7WGoukz+/+A/8dGYPT9l9yIadnmSgZ8Rjr3YVSVDipQSO9CdnJo9ePqFqUUqh+wk9uIaoiAwsiPkA==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  globals@14.0.0:
    resolution: {integrity: sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==}
    engines: {node: '>=18'}

  globals@16.4.0:
    resolution: {integrity: sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==}
    engines: {node: '>=18'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  has-bigints@1.1.0:
    resolution: {integrity: sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==}
    engines: {node: '>= 0.4'}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.2.0:
    resolution: {integrity: sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==}
    engines: {node: '>= 0.4'}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hasown@2.0.4:
    resolution: {integrity: sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==}
    engines: {node: '>= 0.4'}

  hermes-estree@0.25.1:
    resolution: {integrity: sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==}

  hermes-parser@0.25.1:
    resolution: {integrity: sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  ignore@7.0.9:
    resolution: {integrity: sha512-brTTsvFRt5C1gGHtPst/281UjPD5t9fBqbgoMPlVWy11ZLTPfu7HxK4ZYqO9H7o/yC9rSTCI85EaQ4OoY12qYw==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  internal-slot@1.1.0:
    resolution: {integrity: sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==}
    engines: {node: '>= 0.4'}

  is-array-buffer@3.0.5:
    resolution: {integrity: sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==}
    engines: {node: '>= 0.4'}

  is-async-function@2.1.1:
    resolution: {integrity: sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==}
    engines: {node: '>= 0.4'}

  is-bigint@1.1.0:
    resolution: {integrity: sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==}
    engines: {node: '>= 0.4'}

  is-boolean-object@1.2.2:
    resolution: {integrity: sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==}
    engines: {node: '>= 0.4'}

  is-bun-module@2.0.0:
    resolution: {integrity: sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.16.2:
    resolution: {integrity: sha512-evOr8xfXKxE6qSR0hSXL2r3sd7ALj8+7jQEUvPYcm5sgZFdJ+AYzT6yNmJenvIYQBgIGwfwz08sL8zoL7yq2BA==}
    engines: {node: '>= 0.4'}

  is-data-view@1.0.2:
    resolution: {integrity: sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-document.all@1.0.0:
    resolution: {integrity: sha512-+XSoyS05OdBbhFuELhgTCpFNHkpBOJqtsZfUFFpe5QTw+9Sjbh8zitxhQkYAo6wV7e1Vb8cAPvpCk9jGam/82g==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.1.1:
    resolution: {integrity: sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==}
    engines: {node: '>= 0.4'}

  is-generator-function@1.1.2:
    resolution: {integrity: sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-negative-zero@2.0.3:
    resolution: {integrity: sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.1.1:
    resolution: {integrity: sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.4:
    resolution: {integrity: sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==}
    engines: {node: '>= 0.4'}

  is-string@1.1.1:
    resolution: {integrity: sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==}
    engines: {node: '>= 0.4'}

  is-symbol@1.1.1:
    resolution: {integrity: sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.15:
    resolution: {integrity: sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.1.1:
    resolution: {integrity: sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==}
    engines: {node: '>= 0.4'}

  is-weakset@2.0.4:
    resolution: {integrity: sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==}
    engines: {node: '>= 0.4'}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  iterator.prototype@1.1.5:
    resolution: {integrity: sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==}
    engines: {node: '>= 0.4'}

  jiti@2.7.0:
    resolution: {integrity: sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==}
    hasBin: true

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.3.2:
    resolution: {integrity: sha512-SFNOvSJ+Dgf/9An904Yx+CgSlIPCkIpao4qo51lpee25TIRejdH3rhR4EZMGoNx3/TP3O+wzWuiTFl4sqbltzA==}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@1.0.2:
    resolution: {integrity: sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsx-ast-utils@3.3.5:
    resolution: {integrity: sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==}
    engines: {node: '>=4.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  language-subtag-registry@0.3.23:
    resolution: {integrity: sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==}

  language-tags@1.0.9:
    resolution: {integrity: sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==}
    engines: {node: '>=0.10'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lightningcss-android-arm64@1.32.0:
    resolution: {integrity: sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.32.0:
    resolution: {integrity: sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.32.0:
    resolution: {integrity: sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.32.0:
    resolution: {integrity: sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.32.0:
    resolution: {integrity: sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.32.0:
    resolution: {integrity: sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.32.0:
    resolution: {integrity: sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.32.0:
    resolution: {integrity: sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.32.0:
    resolution: {integrity: sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.32.0:
    resolution: {integrity: sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.32.0:
    resolution: {integrity: sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.32.0:
    resolution: {integrity: sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==}
    engines: {node: '>= 12.0.0'}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@1.45.0:
    resolution: {integrity: sha512-yH1ubCAduho9UR7oJhRXIQXogksRILBiTuZC4/bQIGeB9JOkxMlSuEHyyZpo1Z3S0yWJO2KTSUZbjiNvVxeOUw==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  magic-string@0.30.21:
    resolution: {integrity: sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  minimatch@10.2.6:
    resolution: {integrity: sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==}
    engines: {node: 18 || 20 || >=22}

  minimatch@3.1.5:
    resolution: {integrity: sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  motion-dom@13.2.0:
    resolution: {integrity: sha512-N6gdSoWRDk0Rh/fVtlqUtLs+fEN3ELFZI3cn3IQE9Mnf3E+Mh8wjO6MstzCOPFh4Yf0L1as5m2eUyYWj8ylVSQ==}

  motion-utils@13.0.0:
    resolution: {integrity: sha512-7DnN7TmbLcYXcG4RVadXIihWlyuM9afoUww8Y5Agg431kGKiuL2/OMyP4mJ5wLz+pvN3t5ySClLOaVXJ+wekRQ==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  nanoid@3.3.19:
    resolution: {integrity: sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  napi-postinstall@0.3.4:
    resolution: {integrity: sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==}
    engines: {node: ^12.20.0 || ^14.18.0 || >=16.0.0}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  next@16.3.4:
    resolution: {integrity: sha512-/Ztf6CeRH+ejEXUrYtqI4gkS66eFIHuSwqi60RgcpWKodxFZx2/dqVCMKBwILfAHXQ+F1b1vAudgj3mnxqtoIA==}
    engines: {node: '>=20.9.0'}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.51.1
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-exports-info@1.6.2:
    resolution: {integrity: sha512-kXs9Go0cah0qHVV2v389IXQLdLCeE1xfFtjOAF+iobu0OIoG1pje8At2vMHyaPMiPMnG/LWP50twML21eMcAag==}
    engines: {node: '>= 0.4'}

  node-releases@2.0.55:
    resolution: {integrity: sha512-mIrE/Cw9y+9Au6dS5vDKDhQza9YvG6w+ZrS6X+ZzA7yFW/soAeaups4Qzn1bL6g5FVy8WtP79+0j82oPIbqRjQ==}
    engines: {node: '>=18'}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  object.entries@1.1.9:
    resolution: {integrity: sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==}
    engines: {node: '>= 0.4'}

  object.fromentries@2.0.8:
    resolution: {integrity: sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==}
    engines: {node: '>= 0.4'}

  object.groupby@1.0.3:
    resolution: {integrity: sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==}
    engines: {node: '>= 0.4'}

  object.values@1.2.1:
    resolution: {integrity: sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==}
    engines: {node: '>= 0.4'}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  own-keys@1.0.2:
    resolution: {integrity: sha512-19YVAg7T+WTrxggPukVq7DjTv6+PJ867TmhCvBsYwmbFCsZd344rq2Ld1p0wo8f8Qrrhgp82c6FJRqdXWtSEhg==}
    engines: {node: '>= 0.4'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.2:
    resolution: {integrity: sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.7:
    resolution: {integrity: sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==}
    engines: {node: '>=12'}

  possible-typed-array-names@1.1.0:
    resolution: {integrity: sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==}
    engines: {node: '>= 0.4'}

  postcss@8.5.23:
    resolution: {integrity: sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.28:
    resolution: {integrity: sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==}
    engines: {node: ^10 || ^12 || >=14}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-dom@19.2.8:
    resolution: {integrity: sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==}
    peerDependencies:
      react: ^19.2.8

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react@19.2.8:
    resolution: {integrity: sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==}
    engines: {node: '>=0.10.0'}

  reflect.getprototypeof@1.0.10:
    resolution: {integrity: sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==}
    engines: {node: '>= 0.4'}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  resolve@2.0.0-next.7:
    resolution: {integrity: sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ==}
    engines: {node: '>= 0.4'}
    hasBin: true

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.4:
    resolution: {integrity: sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==}
    engines: {node: '>=0.4'}

  safe-push-apply@1.0.0:
    resolution: {integrity: sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==}
    engines: {node: '>= 0.4'}

  safe-regex-test@1.1.0:
    resolution: {integrity: sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==}
    engines: {node: '>= 0.4'}

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.8.5:
    resolution: {integrity: sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==}
    engines: {node: '>=10'}
    hasBin: true

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  set-proto@1.0.0:
    resolution: {integrity: sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==}
    engines: {node: '>= 0.4'}

  sharp@0.35.4:
    resolution: {integrity: sha512-n++8XWcj+jCOr2IOl7h8LbKnGBDY4aPbmprMONBNFdn0ImXqpGVv5zliDs0V9HbmbCQLpbuo2ej9rAoOQTvMDA==}
    engines: {node: '>=20.9.0'}
    peerDependencies:
      '@types/node': '*'
    peerDependenciesMeta:
      '@types/node':
        optional: true

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.1:
    resolution: {integrity: sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.1:
    resolution: {integrity: sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==}
    engines: {node: '>= 0.4'}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  stable-hash@0.0.5:
    resolution: {integrity: sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==}

  stop-iteration-iterator@1.1.0:
    resolution: {integrity: sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==}
    engines: {node: '>= 0.4'}

  string.prototype.includes@2.0.1:
    resolution: {integrity: sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==}
    engines: {node: '>= 0.4'}

  string.prototype.matchall@4.1.0:
    resolution: {integrity: sha512-tHNHTxInrYLCga9O9YGxWA3G9/nnzQw8UGAyqGx3Ar1pSTTzIuM4woFSq4SowkXCjJIwq5sIiQvEfRI9tCH1qQ==}
    engines: {node: '>= 0.4'}

  string.prototype.repeat@1.0.0:
    resolution: {integrity: sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==}

  string.prototype.trim@1.2.11:
    resolution: {integrity: sha512-PwvK7BU+CMTJGYQCTZb5RWXIML92lftJLhQz1tBzgKiqGxJaMlBAa48POXaNAC2s4y8jr3EFqrkF9+44neS46w==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.10:
    resolution: {integrity: sha512-2+3aDAOmPTmuFwjDnmJG2ctEkQKVki7vOSqaxkv42Mowj1V6PnvuwFCRrR5lChUux1TBskPjfkeTOhqczDMxTw==}
    engines: {node: '>= 0.4'}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  tailwindcss@4.3.3:
    resolution: {integrity: sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==}

  tapable@2.3.3:
    resolution: {integrity: sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==}
    engines: {node: '>=6'}

  tinyglobby@0.2.17:
    resolution: {integrity: sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==}
    engines: {node: '>=12.0.0'}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  ts-api-utils@2.5.0:
    resolution: {integrity: sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==}
    engines: {node: '>=18.12'}
    peerDependencies:
      typescript: '>=4.8.4'

  tsconfig-paths@3.15.0:
    resolution: {integrity: sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  typed-array-buffer@1.0.3:
    resolution: {integrity: sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==}
    engines: {node: '>= 0.4'}

  typed-array-byte-length@1.0.3:
    resolution: {integrity: sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==}
    engines: {node: '>= 0.4'}

  typed-array-byte-offset@1.0.4:
    resolution: {integrity: sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==}
    engines: {node: '>= 0.4'}

  typed-array-length@1.0.8:
    resolution: {integrity: sha512-phPGCwqr2+Qo0fwniCE8e4pKnGu/yFb5nD5Y8bf0EEeiI5GklnACYA9GFy/DrAeRrKHXvHn+1SUsOWgJp6RO+g==}
    engines: {node: '>= 0.4'}

  typescript-eslint@8.70.0:
    resolution: {integrity: sha512-P/W5cz70/cQAuKfY3xwQMWWTV7BvJ0mAQmi+9mBcsVPaBUpd6Ohpa+fECv9rBFrQcig86jAiNBFNWUqnTjr4pw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0 || ^10.0.0
      typescript: '>=4.8.4 <6.1.0'

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  unbox-primitive@1.1.0:
    resolution: {integrity: sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==}
    engines: {node: '>= 0.4'}

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  unrs-resolver@1.12.2:
    resolution: {integrity: sha512-dmlRxBJJayXjqTwC+JtF1HhJmgf3ftQ3YejFcZrf4+KKtJv0qDsK1pjqaaVjG7wJ5NJ6UVP1OqRMQ71Z4C3rxQ==}

  update-browserslist-db@1.3.3:
    resolution: {integrity: sha512-pJ2sYawQS0R/WI928Gj5GlPhTGzbMelq0+4INtSYNDV9ErKJcX6xjGWkoG/VnB3dpUm00zALaqkrUD77pO5TDQ==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  which-boxed-primitive@1.1.1:
    resolution: {integrity: sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==}
    engines: {node: '>= 0.4'}

  which-builtin-type@1.2.1:
    resolution: {integrity: sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==}
    engines: {node: '>= 0.4'}

  which-collection@1.0.2:
    resolution: {integrity: sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==}
    engines: {node: '>= 0.4'}

  which-typed-array@1.1.22:
    resolution: {integrity: sha512-fvO4ExWMFsqyhG3AiPAObMuY1lxaqgYcxbc49CNdWDDECOJNgQyvsOWVwbZc+qf3rzRtxojBK+CMEv0Ld5CYpw==}
    engines: {node: '>= 0.4'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

  zod-validation-error@4.0.2:
    resolution: {integrity: sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      zod: ^3.25.0 || ^4.0.0

  zod@4.6.2:
    resolution: {integrity: sha512-lh5RCAGFa1Cm2hjtNwLQhSs/AsqdWnTQaBER9fEwN/88pSh7KOtJavtBx/0VlkN/uFd61SwYmljLMDAsHlvzBQ==}

snapshots:

  '@alloc/quick-lru@5.3.0': {}

  '@babel/code-frame@7.29.7':
    dependencies:
      '@babel/helper-validator-identifier': 7.29.7
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.29.7': {}

  '@babel/core@7.29.7(supports-color@7.2.0)':
    dependencies:
      '@babel/code-frame': 7.29.7
      '@babel/generator': 7.29.8
      '@babel/helper-compilation-targets': 7.29.7
      '@babel/helper-module-transforms': 7.29.7(@babel/core@7.29.7(supports-color@7.2.0))(supports-color@7.2.0)
      '@babel/helpers': 7.29.7
      '@babel/parser': 7.29.8
      '@babel/template': 7.29.7
      '@babel/traverse': 7.29.8(supports-color@7.2.0)
      '@babel/types': 7.29.8
      '@jridgewell/remapping': 2.3.5
      convert-source-map: 2.0.0
      debug: 4.4.3(supports-color@7.2.0)
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.29.8':
    dependencies:
      '@babel/parser': 7.29.8
      '@babel/types': 7.29.8
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31
      jsesc: 3.1.0

  '@babel/helper-compilation-targets@7.29.7':
    dependencies:
      '@babel/compat-data': 7.29.7
      '@babel/helper-validator-option': 7.29.7
      browserslist: 4.28.9
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-globals@7.29.7': {}

  '@babel/helper-module-imports@7.29.7(supports-color@7.2.0)':
    dependencies:
      '@babel/traverse': 7.29.8(supports-color@7.2.0)
      '@babel/types': 7.29.8
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.29.7(@babel/core@7.29.7(supports-color@7.2.0))(supports-color@7.2.0)':
    dependencies:
      '@babel/core': 7.29.7(supports-color@7.2.0)
      '@babel/helper-module-imports': 7.29.7(supports-color@7.2.0)
      '@babel/helper-validator-identifier': 7.29.7
      '@babel/traverse': 7.29.8(supports-color@7.2.0)
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-string-parser@7.29.7': {}

  '@babel/helper-validator-identifier@7.29.7': {}

  '@babel/helper-validator-option@7.29.7': {}

  '@babel/helpers@7.29.7':
    dependencies:
      '@babel/template': 7.29.7
      '@babel/types': 7.29.8

  '@babel/parser@7.29.8':
    dependencies:
      '@babel/types': 7.29.8

  '@babel/template@7.29.7':
    dependencies:
      '@babel/code-frame': 7.29.7
      '@babel/parser': 7.29.8
      '@babel/types': 7.29.8

  '@babel/traverse@7.29.8(supports-color@7.2.0)':
    dependencies:
      '@babel/code-frame': 7.29.7
      '@babel/generator': 7.29.8
      '@babel/helper-globals': 7.29.7
      '@babel/parser': 7.29.8
      '@babel/template': 7.29.7
      '@babel/types': 7.29.8
      debug: 4.4.3(supports-color@7.2.0)
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.29.8':
    dependencies:
      '@babel/helper-string-parser': 7.29.7
      '@babel/helper-validator-identifier': 7.29.7

  '@emnapi/core@1.10.0':
    dependencies:
      '@emnapi/wasi-threads': 1.2.1
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.10.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.11.3':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.2.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@eslint-community/eslint-utils@4.10.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))':
    dependencies:
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      eslint-visitor-keys: 3.4.3

  '@eslint-community/eslint-utils@4.9.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))':
    dependencies:
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.12.2': {}

  '@eslint/config-array@0.21.2(supports-color@7.2.0)':
    dependencies:
      '@eslint/object-schema': 2.1.7
      debug: 4.4.3(supports-color@7.2.0)
      minimatch: 3.1.5
    transitivePeerDependencies:
      - supports-color

  '@eslint/config-helpers@0.4.2':
    dependencies:
      '@eslint/core': 0.17.0

  '@eslint/core@0.17.0':
    dependencies:
      '@types/json-schema': 7.0.15

  '@eslint/eslintrc@3.3.7(supports-color@7.2.0)':
    dependencies:
      ajv: 6.15.0
      debug: 4.4.3(supports-color@7.2.0)
      espree: 10.4.0
      globals: 14.0.0
      ignore: 5.3.2
      import-fresh: 3.3.1
      js-yaml: 4.3.2
      minimatch: 3.1.5
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@9.39.5': {}

  '@eslint/object-schema@2.1.7': {}

  '@eslint/plugin-kit@0.4.1':
    dependencies:
      '@eslint/core': 0.17.0
      levn: 0.4.1

  '@humanfs/core@0.19.2':
    dependencies:
      '@humanfs/types': 0.15.0

  '@humanfs/node@0.16.8':
    dependencies:
      '@humanfs/core': 0.19.2
      '@humanfs/types': 0.15.0
      '@humanwhocodes/retry': 0.4.3

  '@humanfs/types@0.15.0': {}

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/retry@0.4.3': {}

  '@img/colour@1.1.0':
    optional: true

  '@img/sharp-darwin-arm64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.3.3
    optional: true

  '@img/sharp-darwin-x64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.3.3
    optional: true

  '@img/sharp-freebsd-wasm32@0.35.4':
    dependencies:
      '@img/sharp-wasm32': 0.35.4
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.3.3':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-arm@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-ppc64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-riscv64@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.3.3':
    optional: true

  '@img/sharp-libvips-linux-x64@1.3.3':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.3.3':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.3.3':
    optional: true

  '@img/sharp-linux-arm64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.3.3
    optional: true

  '@img/sharp-linux-arm@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.3.3
    optional: true

  '@img/sharp-linux-ppc64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-ppc64': 1.3.3
    optional: true

  '@img/sharp-linux-riscv64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-riscv64': 1.3.3
    optional: true

  '@img/sharp-linux-s390x@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.3.3
    optional: true

  '@img/sharp-linux-x64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.3.3
    optional: true

  '@img/sharp-linuxmusl-arm64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.3
    optional: true

  '@img/sharp-linuxmusl-x64@0.35.4':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.3.3
    optional: true

  '@img/sharp-wasm32@0.35.4':
    dependencies:
      '@emnapi/runtime': 1.11.3
    optional: true

  '@img/sharp-webcontainers-wasm32@0.35.4':
    dependencies:
      '@img/sharp-wasm32': 0.35.4
    optional: true

  '@img/sharp-win32-arm64@0.35.4':
    optional: true

  '@img/sharp-win32-ia32@0.35.4':
    optional: true

  '@img/sharp-win32-x64@0.35.4':
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.6.0
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.6.0': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.6.0

  '@napi-rs/wasm-runtime@1.2.4(@emnapi/core@1.10.0)(@emnapi/runtime@1.10.0)':
    dependencies:
      '@emnapi/core': 1.10.0
      '@emnapi/runtime': 1.10.0
      '@tybys/wasm-util': 0.10.3
    optional: true

  '@next/env@16.3.4': {}

  '@next/eslint-plugin-next@16.3.4(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))':
    dependencies:
      '@eslint-community/eslint-utils': 4.9.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))
      fast-glob: 3.3.1
    transitivePeerDependencies:
      - eslint

  '@next/swc-darwin-arm64@16.3.4':
    optional: true

  '@next/swc-darwin-x64@16.3.4':
    optional: true

  '@next/swc-linux-arm64-gnu@16.3.4':
    optional: true

  '@next/swc-linux-arm64-musl@16.3.4':
    optional: true

  '@next/swc-linux-x64-gnu@16.3.4':
    optional: true

  '@next/swc-linux-x64-musl@16.3.4':
    optional: true

  '@next/swc-win32-arm64-msvc@16.3.4':
    optional: true

  '@next/swc-win32-x64-msvc@16.3.4':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.20.3

  '@nolyfill/is-core-module@1.0.39': {}

  '@rtsao/scc@1.1.0': {}

  '@swc/helpers@0.5.23':
    dependencies:
      tslib: 2.8.1

  '@tailwindcss/node@4.3.3':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.24.5
      jiti: 2.7.0
      lightningcss: 1.32.0
      magic-string: 0.30.21
      source-map-js: 1.2.1
      tailwindcss: 4.3.3

  '@tailwindcss/oxide-android-arm64@4.3.3':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.3.3':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.3.3':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.3.3':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.3.3':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.3.3':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.3.3':
    optional: true

  '@tailwindcss/oxide@4.3.3':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.3.3
      '@tailwindcss/oxide-darwin-arm64': 4.3.3
      '@tailwindcss/oxide-darwin-x64': 4.3.3
      '@tailwindcss/oxide-freebsd-x64': 4.3.3
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.3.3
      '@tailwindcss/oxide-linux-arm64-gnu': 4.3.3
      '@tailwindcss/oxide-linux-arm64-musl': 4.3.3
      '@tailwindcss/oxide-linux-x64-gnu': 4.3.3
      '@tailwindcss/oxide-linux-x64-musl': 4.3.3
      '@tailwindcss/oxide-wasm32-wasi': 4.3.3
      '@tailwindcss/oxide-win32-arm64-msvc': 4.3.3
      '@tailwindcss/oxide-win32-x64-msvc': 4.3.3

  '@tailwindcss/postcss@4.3.3':
    dependencies:
      '@alloc/quick-lru': 5.3.0
      '@tailwindcss/node': 4.3.3
      '@tailwindcss/oxide': 4.3.3
      postcss: 8.5.28
      tailwindcss: 4.3.3

  '@tybys/wasm-util@0.10.3':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/estree@1.0.9': {}

  '@types/json-schema@7.0.15': {}

  '@types/json5@0.0.29': {}

  '@types/node@20.19.43':
    dependencies:
      undici-types: 6.21.0

  '@types/react-dom@19.3.0(@types/react@19.3.0)':
    dependencies:
      '@types/react': 19.3.0

  '@types/react@19.3.0':
    dependencies:
      csstype: 3.2.3

  '@typescript-eslint/eslint-plugin@8.70.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)':
    dependencies:
      '@eslint-community/regexpp': 4.12.2
      '@typescript-eslint/parser': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/scope-manager': 8.70.0
      '@typescript-eslint/type-utils': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/utils': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/visitor-keys': 8.70.0
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      ignore: 7.0.9
      natural-compare: 1.4.0
      ts-api-utils: 2.5.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/scope-manager': 8.70.0
      '@typescript-eslint/types': 8.70.0
      '@typescript-eslint/typescript-estree': 8.70.0(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/visitor-keys': 8.70.0
      debug: 4.4.3(supports-color@7.2.0)
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/project-service@8.70.0(supports-color@7.2.0)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/tsconfig-utils': 8.70.0(typescript@5.9.3)
      '@typescript-eslint/types': 8.70.0
      debug: 4.4.3(supports-color@7.2.0)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@8.70.0':
    dependencies:
      '@typescript-eslint/types': 8.70.0
      '@typescript-eslint/visitor-keys': 8.70.0

  '@typescript-eslint/tsconfig-utils@8.70.0(typescript@5.9.3)':
    dependencies:
      typescript: 5.9.3

  '@typescript-eslint/type-utils@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/types': 8.70.0
      '@typescript-eslint/typescript-estree': 8.70.0(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/utils': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      debug: 4.4.3(supports-color@7.2.0)
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      ts-api-utils: 2.5.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/types@8.70.0': {}

  '@typescript-eslint/typescript-estree@8.70.0(supports-color@7.2.0)(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/project-service': 8.70.0(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/tsconfig-utils': 8.70.0(typescript@5.9.3)
      '@typescript-eslint/types': 8.70.0
      '@typescript-eslint/visitor-keys': 8.70.0
      debug: 4.4.3(supports-color@7.2.0)
      minimatch: 10.2.6
      semver: 7.8.5
      tinyglobby: 0.2.17
      ts-api-utils: 2.5.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)':
    dependencies:
      '@eslint-community/eslint-utils': 4.10.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))
      '@typescript-eslint/scope-manager': 8.70.0
      '@typescript-eslint/types': 8.70.0
      '@typescript-eslint/typescript-estree': 8.70.0(supports-color@7.2.0)(typescript@5.9.3)
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/visitor-keys@8.70.0':
    dependencies:
      '@typescript-eslint/types': 8.70.0
      eslint-visitor-keys: 5.0.1

  '@unrs/resolver-binding-android-arm-eabi@1.12.2':
    optional: true

  '@unrs/resolver-binding-android-arm64@1.12.2':
    optional: true

  '@unrs/resolver-binding-darwin-arm64@1.12.2':
    optional: true

  '@unrs/resolver-binding-darwin-x64@1.12.2':
    optional: true

  '@unrs/resolver-binding-freebsd-x64@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-arm-musleabihf@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-arm64-gnu@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-arm64-musl@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-loong64-gnu@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-loong64-musl@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-ppc64-gnu@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-gnu@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-musl@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-s390x-gnu@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-x64-gnu@1.12.2':
    optional: true

  '@unrs/resolver-binding-linux-x64-musl@1.12.2':
    optional: true

  '@unrs/resolver-binding-openharmony-arm64@1.12.2':
    optional: true

  '@unrs/resolver-binding-wasm32-wasi@1.12.2':
    dependencies:
      '@emnapi/core': 1.10.0
      '@emnapi/runtime': 1.10.0
      '@napi-rs/wasm-runtime': 1.2.4(@emnapi/core@1.10.0)(@emnapi/runtime@1.10.0)
    optional: true

  '@unrs/resolver-binding-win32-arm64-msvc@1.12.2':
    optional: true

  '@unrs/resolver-binding-win32-ia32-msvc@1.12.2':
    optional: true

  '@unrs/resolver-binding-win32-x64-msvc@1.12.2':
    optional: true

  acorn-jsx@5.3.2(acorn@8.18.0):
    dependencies:
      acorn: 8.18.0

  acorn@8.18.0: {}

  ajv@6.15.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  argparse@2.0.1: {}

  aria-query@5.3.2: {}

  array-buffer-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      is-array-buffer: 3.0.5

  array-includes@3.2.0:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.2
      es-shim-unscopables: 1.1.0
      is-string: 1.1.1
      math-intrinsics: 1.1.0

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      es-shim-unscopables: 1.1.0

  array.prototype.findlastindex@1.2.6:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      es-shim-unscopables: 1.1.0

  array.prototype.flat@1.3.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-shim-unscopables: 1.1.0

  array.prototype.flatmap@1.3.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-shim-unscopables: 1.1.0

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-shim-unscopables: 1.1.0

  arraybuffer.prototype.slice@1.0.4:
    dependencies:
      array-buffer-byte-length: 1.0.2
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      is-array-buffer: 3.0.5

  ast-types-flow@0.0.8: {}

  async-function@1.0.0: {}

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.1.0

  axe-core@4.13.0: {}

  axobject-query@4.1.0: {}

  balanced-match@1.0.2: {}

  balanced-match@4.0.4: {}

  baseline-browser-mapping@2.11.22: {}

  brace-expansion@1.1.18:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@5.0.9:
    dependencies:
      balanced-match: 4.0.4

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.28.9:
    dependencies:
      baseline-browser-mapping: 2.11.22
      caniuse-lite: 1.0.30001810
      electron-to-chromium: 1.5.427
      node-releases: 2.0.55
      update-browserslist-db: 1.3.3(browserslist@4.28.9)

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.9:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  caniuse-lite@1.0.30001810: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  client-only@0.0.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  concat-map@0.0.1: {}

  convert-source-map@2.0.0: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  csstype@3.2.3: {}

  damerau-levenshtein@1.0.8: {}

  data-view-buffer@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-offset@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  debug@3.2.7(supports-color@7.2.0):
    dependencies:
      ms: 2.1.3
    optionalDependencies:
      supports-color: 7.2.0

  debug@4.4.3(supports-color@7.2.0):
    dependencies:
      ms: 2.1.3
    optionalDependencies:
      supports-color: 7.2.0

  deep-is@0.1.4: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  detect-libc@2.1.2: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  electron-to-chromium@1.5.427: {}

  emoji-regex@9.2.2: {}

  enhanced-resolve@5.24.5:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.3

  es-abstract-get@1.0.0:
    dependencies:
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      is-callable: 1.2.7
      object-inspect: 1.13.4

  es-abstract@1.24.2:
    dependencies:
      array-buffer-byte-length: 1.0.2
      arraybuffer.prototype.slice: 1.0.4
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      call-bound: 1.0.4
      data-view-buffer: 1.0.2
      data-view-byte-length: 1.0.2
      data-view-byte-offset: 1.0.1
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      es-set-tostringtag: 2.1.0
      es-to-primitive: 1.3.4
      function.prototype.name: 1.2.0
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      get-symbol-description: 1.1.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.4
      internal-slot: 1.1.0
      is-array-buffer: 3.0.5
      is-callable: 1.2.7
      is-data-view: 1.0.2
      is-negative-zero: 2.0.3
      is-regex: 1.2.1
      is-set: 2.0.3
      is-shared-array-buffer: 1.0.4
      is-string: 1.1.1
      is-typed-array: 1.1.15
      is-weakref: 1.1.1
      math-intrinsics: 1.1.0
      object-inspect: 1.13.4
      object-keys: 1.1.1
      object.assign: 4.1.7
      own-keys: 1.0.2
      regexp.prototype.flags: 1.5.4
      safe-array-concat: 1.1.4
      safe-push-apply: 1.0.0
      safe-regex-test: 1.1.0
      set-proto: 1.0.0
      stop-iteration-iterator: 1.1.0
      string.prototype.trim: 1.2.11
      string.prototype.trimend: 1.0.10
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.3
      typed-array-byte-length: 1.0.3
      typed-array-byte-offset: 1.0.4
      typed-array-length: 1.0.8
      unbox-primitive: 1.1.0
      which-typed-array: 1.1.22

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-iterator-helpers@1.4.0:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-set-tostringtag: 2.1.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      iterator.prototype: 1.1.5
      math-intrinsics: 1.1.0

  es-object-atoms@1.1.2:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.1.0:
    dependencies:
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      has-tostringtag: 1.0.2
      hasown: 2.0.4

  es-shim-unscopables@1.1.0:
    dependencies:
      hasown: 2.0.4

  es-to-primitive@1.3.4:
    dependencies:
      es-abstract-get: 1.0.0
      es-define-property: 1.0.1
      es-errors: 1.3.0
      is-callable: 1.2.7
      is-date-object: 1.1.0
      is-symbol: 1.1.1

  escalade@3.2.0: {}

  escape-string-regexp@4.0.0: {}

  eslint-config-next@16.3.4(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3):
    dependencies:
      '@next/eslint-plugin-next': 16.3.4(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      eslint-import-resolver-node: 0.3.10(supports-color@7.2.0)
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)
      eslint-plugin-jsx-a11y: 6.10.2(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))
      eslint-plugin-react: 7.37.5(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))
      eslint-plugin-react-hooks: 7.1.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)
      globals: 16.4.0
      typescript-eslint: 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
    optionalDependencies:
      typescript: 5.9.3
    transitivePeerDependencies:
      - '@typescript-eslint/parser'
      - eslint-import-resolver-webpack
      - eslint-plugin-import-x
      - supports-color

  eslint-import-resolver-node@0.3.10(supports-color@7.2.0):
    dependencies:
      debug: 3.2.7(supports-color@7.2.0)
      is-core-module: 2.16.2
      resolve: 2.0.0-next.7
    transitivePeerDependencies:
      - supports-color

  eslint-import-resolver-typescript@3.10.1(eslint-plugin-import@2.32.0)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0):
    dependencies:
      '@nolyfill/is-core-module': 1.0.39
      debug: 4.4.3(supports-color@7.2.0)
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      get-tsconfig: 4.14.3
      is-bun-module: 2.0.0
      stable-hash: 0.0.5
      tinyglobby: 0.2.17
      unrs-resolver: 1.12.2
    optionalDependencies:
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)
    transitivePeerDependencies:
      - supports-color

  eslint-module-utils@2.14.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint-import-resolver-node@0.3.10(supports-color@7.2.0))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0):
    dependencies:
      debug: 3.2.7(supports-color@7.2.0)
    optionalDependencies:
      '@typescript-eslint/parser': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      eslint-import-resolver-node: 0.3.10(supports-color@7.2.0)
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-import@2.32.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0):
    dependencies:
      '@rtsao/scc': 1.1.0
      array-includes: 3.2.0
      array.prototype.findlastindex: 1.2.6
      array.prototype.flat: 1.3.3
      array.prototype.flatmap: 1.3.3
      debug: 3.2.7(supports-color@7.2.0)
      doctrine: 2.1.0
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      eslint-import-resolver-node: 0.3.10(supports-color@7.2.0)
      eslint-module-utils: 2.14.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint-import-resolver-node@0.3.10(supports-color@7.2.0))(eslint-import-resolver-typescript@3.10.1)(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)
      hasown: 2.0.4
      is-core-module: 2.16.2
      is-glob: 4.0.3
      minimatch: 3.1.5
      object.fromentries: 2.0.8
      object.groupby: 1.0.3
      object.values: 1.2.1
      semver: 6.3.1
      string.prototype.trimend: 1.0.10
      tsconfig-paths: 3.15.0
    optionalDependencies:
      '@typescript-eslint/parser': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
    transitivePeerDependencies:
      - eslint-import-resolver-typescript
      - eslint-import-resolver-webpack
      - supports-color

  eslint-plugin-jsx-a11y@6.10.2(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0)):
    dependencies:
      aria-query: 5.3.2
      array-includes: 3.2.0
      array.prototype.flatmap: 1.3.3
      ast-types-flow: 0.0.8
      axe-core: 4.13.0
      axobject-query: 4.1.0
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      hasown: 2.0.4
      jsx-ast-utils: 3.3.5
      language-tags: 1.0.9
      minimatch: 3.1.5
      object.fromentries: 2.0.8
      safe-regex-test: 1.1.0
      string.prototype.includes: 2.0.1

  eslint-plugin-react-hooks@7.1.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0):
    dependencies:
      '@babel/core': 7.29.7(supports-color@7.2.0)
      '@babel/parser': 7.29.8
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      hermes-parser: 0.25.1
      zod: 4.6.2
      zod-validation-error: 4.0.2(zod@4.6.2)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-react@7.37.5(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0)):
    dependencies:
      array-includes: 3.2.0
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.3
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.4.0
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      estraverse: 5.3.0
      hasown: 2.0.4
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.5
      object.entries: 1.1.9
      object.fromentries: 2.0.8
      object.values: 1.2.1
      prop-types: 15.8.1
      resolve: 2.0.0-next.7
      semver: 6.3.1
      string.prototype.matchall: 4.1.0
      string.prototype.repeat: 1.0.0

  eslint-scope@8.4.0:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint-visitor-keys@4.2.1: {}

  eslint-visitor-keys@5.0.1: {}

  eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0):
    dependencies:
      '@eslint-community/eslint-utils': 4.10.1(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))
      '@eslint-community/regexpp': 4.12.2
      '@eslint/config-array': 0.21.2(supports-color@7.2.0)
      '@eslint/config-helpers': 0.4.2
      '@eslint/core': 0.17.0
      '@eslint/eslintrc': 3.3.7(supports-color@7.2.0)
      '@eslint/js': 9.39.5
      '@eslint/plugin-kit': 0.4.1
      '@humanfs/node': 0.16.8
      '@humanwhocodes/module-importer': 1.0.1
      '@humanwhocodes/retry': 0.4.3
      '@types/estree': 1.0.9
      ajv: 6.15.0
      chalk: 4.1.2
      cross-spawn: 7.0.6
      debug: 4.4.3(supports-color@7.2.0)
      escape-string-regexp: 4.0.0
      eslint-scope: 8.4.0
      eslint-visitor-keys: 4.2.1
      espree: 10.4.0
      esquery: 1.7.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 8.0.0
      find-up: 5.0.0
      glob-parent: 6.0.2
      ignore: 5.3.2
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      json-stable-stringify-without-jsonify: 1.0.1
      lodash.merge: 4.6.2
      minimatch: 3.1.5
      natural-compare: 1.4.0
      optionator: 0.9.4
    optionalDependencies:
      jiti: 2.7.0
    transitivePeerDependencies:
      - supports-color

  espree@10.4.0:
    dependencies:
      acorn: 8.18.0
      acorn-jsx: 5.3.2(acorn@8.18.0)
      eslint-visitor-keys: 4.2.1

  esquery@1.7.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  esutils@2.0.3: {}

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.1:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastq@1.20.3:
    dependencies:
      reusify: 1.1.0

  fdir@6.5.0(picomatch@4.0.7):
    optionalDependencies:
      picomatch: 4.0.7

  file-entry-cache@8.0.0:
    dependencies:
      flat-cache: 4.0.1

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@4.0.1:
    dependencies:
      flatted: 3.4.4
      keyv: 4.5.4

  flatted@3.4.4: {}

  for-each@0.3.5:
    dependencies:
      is-callable: 1.2.7

  framer-motion@13.2.0(react-dom@19.2.8(react@19.2.8))(react@19.2.8):
    dependencies:
      motion-dom: 13.2.0
      motion-utils: 13.0.0
      tslib: 2.8.1
    optionalDependencies:
      react: 19.2.8
      react-dom: 19.2.8(react@19.2.8)

  function-bind@1.1.2: {}

  function.prototype.name@1.2.0:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      es-define-property: 1.0.1
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2
      hasown: 2.0.4
      is-callable: 1.2.7
      is-document.all: 1.0.0

  functions-have-names@1.2.3: {}

  generator-function@2.0.1: {}

  gensync@1.0.0-beta.2: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.4
      math-intrinsics: 1.1.0

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.2

  get-symbol-description@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0

  get-tsconfig@4.14.3:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  globals@14.0.0: {}

  globals@16.4.0: {}

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.2.0

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  has-bigints@1.1.0: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-proto@1.2.0:
    dependencies:
      dunder-proto: 1.0.1

  has-symbols@1.1.0: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.1.0

  hasown@2.0.4:
    dependencies:
      function-bind: 1.1.2

  hermes-estree@0.25.1: {}

  hermes-parser@0.25.1:
    dependencies:
      hermes-estree: 0.25.1

  ignore@5.3.2: {}

  ignore@7.0.9: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  imurmurhash@0.1.4: {}

  internal-slot@1.1.0:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.4
      side-channel: 1.1.1

  is-array-buffer@3.0.5:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  is-async-function@2.1.1:
    dependencies:
      async-function: 1.0.0
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-bigint@1.1.0:
    dependencies:
      has-bigints: 1.1.0

  is-boolean-object@1.2.2:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-bun-module@2.0.0:
    dependencies:
      semver: 7.8.5

  is-callable@1.2.7: {}

  is-core-module@2.16.2:
    dependencies:
      hasown: 2.0.4

  is-data-view@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      is-typed-array: 1.1.15

  is-date-object@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-document.all@1.0.0:
    dependencies:
      call-bound: 1.0.4

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-generator-function@1.1.2:
    dependencies:
      call-bound: 1.0.4
      generator-function: 2.0.1
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-negative-zero@2.0.3: {}

  is-number-object@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-regex@1.2.1:
    dependencies:
      call-bound: 1.0.4
      gopd: 1.2.0
      has-tostringtag: 1.0.2
      hasown: 2.0.4

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.4:
    dependencies:
      call-bound: 1.0.4

  is-string@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-symbol@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-symbols: 1.1.0
      safe-regex-test: 1.1.0

  is-typed-array@1.1.15:
    dependencies:
      which-typed-array: 1.1.22

  is-weakmap@2.0.2: {}

  is-weakref@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-weakset@2.0.4:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  iterator.prototype@1.1.5:
    dependencies:
      define-data-property: 1.1.4
      es-object-atoms: 1.1.2
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      has-symbols: 1.1.0
      set-function-name: 2.0.2

  jiti@2.7.0: {}

  js-tokens@4.0.0: {}

  js-yaml@4.3.2:
    dependencies:
      argparse: 2.0.1

  jsesc@3.1.0: {}

  json-buffer@3.0.1: {}

  json-schema-traverse@0.4.1: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  json5@2.2.3: {}

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.2.0
      array.prototype.flat: 1.3.3
      object.assign: 4.1.7
      object.values: 1.2.1

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  language-subtag-registry@0.3.23: {}

  language-tags@1.0.9:
    dependencies:
      language-subtag-registry: 0.3.23

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lightningcss-android-arm64@1.32.0:
    optional: true

  lightningcss-darwin-arm64@1.32.0:
    optional: true

  lightningcss-darwin-x64@1.32.0:
    optional: true

  lightningcss-freebsd-x64@1.32.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.32.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.32.0:
    optional: true

  lightningcss-linux-arm64-musl@1.32.0:
    optional: true

  lightningcss-linux-x64-gnu@1.32.0:
    optional: true

  lightningcss-linux-x64-musl@1.32.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.32.0:
    optional: true

  lightningcss-win32-x64-msvc@1.32.0:
    optional: true

  lightningcss@1.32.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.32.0
      lightningcss-darwin-arm64: 1.32.0
      lightningcss-darwin-x64: 1.32.0
      lightningcss-freebsd-x64: 1.32.0
      lightningcss-linux-arm-gnueabihf: 1.32.0
      lightningcss-linux-arm64-gnu: 1.32.0
      lightningcss-linux-arm64-musl: 1.32.0
      lightningcss-linux-x64-gnu: 1.32.0
      lightningcss-linux-x64-musl: 1.32.0
      lightningcss-win32-arm64-msvc: 1.32.0
      lightningcss-win32-x64-msvc: 1.32.0

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.merge@4.6.2: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lucide-react@1.45.0(react@19.2.8):
    dependencies:
      react: 19.2.8

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.6.0

  math-intrinsics@1.1.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.2

  minimatch@10.2.6:
    dependencies:
      brace-expansion: 5.0.9

  minimatch@3.1.5:
    dependencies:
      brace-expansion: 1.1.18

  minimist@1.2.8: {}

  motion-dom@13.2.0:
    dependencies:
      motion-utils: 13.0.0

  motion-utils@13.0.0: {}

  ms@2.1.3: {}

  nanoid@3.3.19: {}

  napi-postinstall@0.3.4: {}

  natural-compare@1.4.0: {}

  next@16.3.4(@babel/core@7.29.7(supports-color@7.2.0))(@types/node@20.19.43)(react-dom@19.2.8(react@19.2.8))(react@19.2.8):
    dependencies:
      '@next/env': 16.3.4
      '@swc/helpers': 0.5.23
      baseline-browser-mapping: 2.11.22
      caniuse-lite: 1.0.30001810
      postcss: 8.5.23
      react: 19.2.8
      react-dom: 19.2.8(react@19.2.8)
      styled-jsx: 5.1.6(@babel/core@7.29.7(supports-color@7.2.0))(react@19.2.8)
    optionalDependencies:
      '@next/swc-darwin-arm64': 16.3.4
      '@next/swc-darwin-x64': 16.3.4
      '@next/swc-linux-arm64-gnu': 16.3.4
      '@next/swc-linux-arm64-musl': 16.3.4
      '@next/swc-linux-x64-gnu': 16.3.4
      '@next/swc-linux-x64-musl': 16.3.4
      '@next/swc-win32-arm64-msvc': 16.3.4
      '@next/swc-win32-x64-msvc': 16.3.4
      sharp: 0.35.4(@types/node@20.19.43)
    transitivePeerDependencies:
      - '@babel/core'
      - '@types/node'
      - babel-plugin-macros

  node-exports-info@1.6.2:
    dependencies:
      array.prototype.flatmap: 1.3.3
      es-errors: 1.3.0
      object.entries: 1.1.9
      semver: 6.3.1

  node-releases@2.0.55: {}

  object-assign@4.1.1: {}

  object-inspect@1.13.4: {}

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2
      has-symbols: 1.1.0
      object-keys: 1.1.1

  object.entries@1.1.9:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.2

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2

  object.values@1.2.1:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  own-keys@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      object-keys: 1.1.1
      safe-push-apply: 1.0.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  path-exists@4.0.0: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  picocolors@1.1.1: {}

  picomatch@2.3.2: {}

  picomatch@4.0.7: {}

  possible-typed-array-names@1.1.0: {}

  postcss@8.5.23:
    dependencies:
      nanoid: 3.3.19
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.28:
    dependencies:
      nanoid: 3.3.19
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prelude-ls@1.2.1: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  react-dom@19.2.8(react@19.2.8):
    dependencies:
      react: 19.2.8
      scheduler: 0.27.0

  react-is@16.13.1: {}

  react@19.2.8: {}

  reflect.getprototypeof@1.0.10:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      which-builtin-type: 1.2.1

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  resolve-from@4.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@2.0.0-next.7:
    dependencies:
      es-errors: 1.3.0
      is-core-module: 2.16.2
      node-exports-info: 1.6.2
      object-keys: 1.1.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.1.0: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.4:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      has-symbols: 1.1.0
      isarray: 2.0.5

  safe-push-apply@1.0.0:
    dependencies:
      es-errors: 1.3.0
      isarray: 2.0.5

  safe-regex-test@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-regex: 1.2.1

  scheduler@0.27.0: {}

  semver@6.3.1: {}

  semver@7.8.5: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  set-proto@1.0.0:
    dependencies:
      dunder-proto: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.2

  sharp@0.35.4(@types/node@20.19.43):
    dependencies:
      '@img/colour': 1.1.0
      detect-libc: 2.1.2
      semver: 7.8.5
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.35.4
      '@img/sharp-darwin-x64': 0.35.4
      '@img/sharp-freebsd-wasm32': 0.35.4
      '@img/sharp-libvips-darwin-arm64': 1.3.3
      '@img/sharp-libvips-darwin-x64': 1.3.3
      '@img/sharp-libvips-linux-arm': 1.3.3
      '@img/sharp-libvips-linux-arm64': 1.3.3
      '@img/sharp-libvips-linux-ppc64': 1.3.3
      '@img/sharp-libvips-linux-riscv64': 1.3.3
      '@img/sharp-libvips-linux-s390x': 1.3.3
      '@img/sharp-libvips-linux-x64': 1.3.3
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.3
      '@img/sharp-libvips-linuxmusl-x64': 1.3.3
      '@img/sharp-linux-arm': 0.35.4
      '@img/sharp-linux-arm64': 0.35.4
      '@img/sharp-linux-ppc64': 0.35.4
      '@img/sharp-linux-riscv64': 0.35.4
      '@img/sharp-linux-s390x': 0.35.4
      '@img/sharp-linux-x64': 0.35.4
      '@img/sharp-linuxmusl-arm64': 0.35.4
      '@img/sharp-linuxmusl-x64': 0.35.4
      '@img/sharp-webcontainers-wasm32': 0.35.4
      '@img/sharp-win32-arm64': 0.35.4
      '@img/sharp-win32-ia32': 0.35.4
      '@img/sharp-win32-x64': 0.35.4
      '@types/node': 20.19.43
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.1
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  source-map-js@1.2.1: {}

  stable-hash@0.0.5: {}

  stop-iteration-iterator@1.1.0:
    dependencies:
      es-errors: 1.3.0
      internal-slot: 1.1.0

  string.prototype.includes@2.0.1:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2

  string.prototype.matchall@4.1.0:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      regexp.prototype.flags: 1.5.4
      set-function-name: 2.0.2
      side-channel: 1.1.1

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.24.2

  string.prototype.trim@1.2.11:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-data-property: 1.1.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.2
      has-property-descriptors: 1.0.2
      safe-regex-test: 1.1.0

  string.prototype.trimend@1.0.10:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  strip-bom@3.0.0: {}

  strip-json-comments@3.1.1: {}

  styled-jsx@5.1.6(@babel/core@7.29.7(supports-color@7.2.0))(react@19.2.8):
    dependencies:
      client-only: 0.0.1
      react: 19.2.8
    optionalDependencies:
      '@babel/core': 7.29.7(supports-color@7.2.0)

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwindcss@4.3.3: {}

  tapable@2.3.3: {}

  tinyglobby@0.2.17:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.7)
      picomatch: 4.0.7

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  ts-api-utils@2.5.0(typescript@5.9.3):
    dependencies:
      typescript: 5.9.3

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  typed-array-buffer@1.0.3:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-typed-array: 1.1.15

  typed-array-byte-length@1.0.3:
    dependencies:
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15

  typed-array-byte-offset@1.0.4:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15
      reflect.getprototypeof: 1.0.10

  typed-array-length@1.0.8:
    dependencies:
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      is-typed-array: 1.1.15
      possible-typed-array-names: 1.1.0
      reflect.getprototypeof: 1.0.10

  typescript-eslint@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3):
    dependencies:
      '@typescript-eslint/eslint-plugin': 8.70.0(@typescript-eslint/parser@8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3))(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/parser': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/typescript-estree': 8.70.0(supports-color@7.2.0)(typescript@5.9.3)
      '@typescript-eslint/utils': 8.70.0(eslint@9.39.5(jiti@2.7.0)(supports-color@7.2.0))(supports-color@7.2.0)(typescript@5.9.3)
      eslint: 9.39.5(jiti@2.7.0)(supports-color@7.2.0)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  typescript@5.9.3: {}

  unbox-primitive@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-bigints: 1.1.0
      has-symbols: 1.1.0
      which-boxed-primitive: 1.1.1

  undici-types@6.21.0: {}

  unrs-resolver@1.12.2:
    dependencies:
      napi-postinstall: 0.3.4
    optionalDependencies:
      '@unrs/resolver-binding-android-arm-eabi': 1.12.2
      '@unrs/resolver-binding-android-arm64': 1.12.2
      '@unrs/resolver-binding-darwin-arm64': 1.12.2
      '@unrs/resolver-binding-darwin-x64': 1.12.2
      '@unrs/resolver-binding-freebsd-x64': 1.12.2
      '@unrs/resolver-binding-linux-arm-gnueabihf': 1.12.2
      '@unrs/resolver-binding-linux-arm-musleabihf': 1.12.2
      '@unrs/resolver-binding-linux-arm64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-arm64-musl': 1.12.2
      '@unrs/resolver-binding-linux-loong64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-loong64-musl': 1.12.2
      '@unrs/resolver-binding-linux-ppc64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-riscv64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-riscv64-musl': 1.12.2
      '@unrs/resolver-binding-linux-s390x-gnu': 1.12.2
      '@unrs/resolver-binding-linux-x64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-x64-musl': 1.12.2
      '@unrs/resolver-binding-openharmony-arm64': 1.12.2
      '@unrs/resolver-binding-wasm32-wasi': 1.12.2
      '@unrs/resolver-binding-win32-arm64-msvc': 1.12.2
      '@unrs/resolver-binding-win32-ia32-msvc': 1.12.2
      '@unrs/resolver-binding-win32-x64-msvc': 1.12.2

  update-browserslist-db@1.3.3(browserslist@4.28.9):
    dependencies:
      browserslist: 4.28.9
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  which-boxed-primitive@1.1.1:
    dependencies:
      is-bigint: 1.1.0
      is-boolean-object: 1.2.2
      is-number-object: 1.1.1
      is-string: 1.1.1
      is-symbol: 1.1.1

  which-builtin-type@1.2.1:
    dependencies:
      call-bound: 1.0.4
      function.prototype.name: 1.2.0
      has-tostringtag: 1.0.2
      is-async-function: 2.1.1
      is-date-object: 1.1.0
      is-finalizationregistry: 1.1.1
      is-generator-function: 1.1.2
      is-regex: 1.2.1
      is-weakref: 1.1.1
      isarray: 2.0.5
      which-boxed-primitive: 1.1.1
      which-collection: 1.0.2
      which-typed-array: 1.1.22

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.4

  which-typed-array@1.1.22:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      call-bound: 1.0.4
      for-each: 0.3.5
      get-proto: 1.0.1
      gopd: 1.2.0
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  yallist@3.1.1: {}

  yocto-queue@0.1.0: {}

  zod-validation-error@4.0.2(zod@4.6.2):
    dependencies:
      zod: 4.6.2

  zod@4.6.2: {}
````

## pnpm-workspace.yaml

````yaml
allowBuilds:
  unrs-resolver: true
````

## postcss.config.mjs

````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## public/favicon.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#172e28"/><path d="M16 16L48 48M48 16L16 48" stroke="#f3f1ea" stroke-width="5"/></svg>
````

## public/sequence/manifest.json

````json
{"frames":[],"status":"generation_blocked_insufficient_credits","requestedFrames":36,"requestedHeight":1200,"fallback":"/drinks/drink-0-960.avif"}
````

## scripts/media-v2.py

````python
"""Compress the generated source set without changing vessel geometry or colors."""
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
src=Path('/workspace/scratch/6191f1019646/v2-media')
for i in range(6):
 im=Image.open(src/f'drink-{i}.png').convert('RGB')
 for w in [480,960]:
  thumb=im.resize((w,round(im.height*w/im.width)),Image.Resampling.LANCZOS)
  for fmt,q in [('AVIF',48),('WEBP',78)]:thumb.save(root/f'public/drinks/drink-{i}-{w}.{fmt.lower()}',format=fmt,quality=q)
print('Compressed 6 images into 24 AVIF/WebP derivatives')
````

## scripts/onepager-v2.py

````python
from pathlib import Path
import json
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
root=Path(__file__).resolve().parents[1]
pdfmetrics.registerFont(TTFont('Sans','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Mono','/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))
for lang in ['uk','en']:
 c=json.loads((root/f'content/{lang}.json').read_text()); f=canvas.Canvas(str(root/f'public/downloads/xoxo-{lang}.pdf'),pagesize=(595,842));f.setTitle(c['metadata']['title']);f.setFillColor(HexColor('#f3f1ea'));f.rect(0,0,595,842,fill=1,stroke=0);f.setFillColor(HexColor('#172e28'));f.setStrokeColor(HexColor('#a5afa5'))
 def txt(text,x,y,size=10,font='Sans'):f.setFont(font,size);f.drawString(x,y,text)
 def para(text,y,size=8):
  p=Paragraph(text,ParagraphStyle('p',fontName='Sans',fontSize=size,leading=size*1.5,textColor=HexColor('#172e28')));_,h=p.wrap(515,1000);p.drawOn(f,40,y-h);return y-h
 txt('XoXo',40,787,31);txt(c['status'],40,761,8,'Mono');f.line(40,744,555,744)
 txt(' / '.join(c['thesis']),40,704,24)
 txt('02 / '+c['sections'][1],40,659,10,'Mono')
 for i,d in enumerate(c['product']['drinks']):
  y=634-i*23;txt(d['name'],40,y,10);txt(str(d['price'])+' ₴',478,y,10,'Mono');f.line(40,y-8,555,y-8)
 para(c['product']['assumption'],487,7)
 txt('04 / '+c['sections'][3],40,429,10,'Mono')
 rows=[(c['economics']['scenarios'][0],'702 000','77 540','27.1'),(c['economics']['scenarios'][1],'1 111 500','373 955','5.6'),(c['economics']['scenarios'][2],'1 599 000','729 230','2.9')]
 for x,t in [(40,c['economicsExtra']['scenario']),(225,c['economics']['revenue']),(350,'EBITDA / ₴'),(465,c['economics']['payback'])]:txt(t,x,405,7,'Mono')
 for i,row in enumerate(rows):
  for x,t in zip([40,225,350,465],row):txt(t,x,380-i*25,9,'Mono')
 para(c['economicsExtra']['tag']+' '+c['economics']['assumptions'],300,7)
 txt('06 / '+c['sections'][5],40,221,10,'Mono')
 para(c['terms']['tag']+' '+c['terms']['instrumentValue']+' / '+c['terms']['ticketValue']+' / '+c['terms']['returnValue'],199,8)
 para(c['terms']['note'],160,7)
 para(c['contact']['notice'],112,7)
 f.line(40,55,555,55);txt('xoxotea.vercel.app / '+c['sourceDate'],40,38,8,'Mono');txt('01 / 01',510,38,8,'Mono');f.showPage();f.save()
````

## scripts/qa/lighthouse.mjs

````javascript
import fs from "node:fs";
import cp from "node:child_process";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
const server = cp.spawn("node", ["scripts/qa/server.cjs", "out", "4174"], {
  stdio: "ignore",
});
await new Promise((r) => setTimeout(r, 800));
const chrome = await chromeLauncher.launch({
  chromePath: process.env.CHROMIUM_PATH,
  chromeFlags: [
    "--headless",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--disable-setuid-sandbox",
  ],
});
try {
  for (const formFactor of ["mobile", "desktop"]) {
    const result = await lighthouse("http://127.0.0.1:4174/", {
      port: chrome.port,
      output: ["json", "html"],
      logLevel: "error",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      ...(formFactor === "desktop"
        ? {
            formFactor: "desktop",
            screenEmulation: {
              mobile: false,
              width: 1440,
              height: 900,
              deviceScaleFactor: 1,
              disabled: false,
            },
            throttling: {
              rttMs: 40,
              throughputKbps: 10240,
              cpuSlowdownMultiplier: 1,
            },
          }
        : {}),
    });
    fs.writeFileSync(`audit/lighthouse-${formFactor}.json`, result.report[0]);
    fs.writeFileSync(`audit/lighthouse-${formFactor}.html`, result.report[1]);
    console.log(
      formFactor,
      JSON.stringify({
        scores: Object.fromEntries(
          Object.entries(result.lhr.categories).map(([k, v]) => [
            k,
            Math.round(v.score * 100),
          ]),
        ),
        lcp: result.lhr.audits["largest-contentful-paint"].displayValue,
        bytes: result.lhr.audits["total-byte-weight"].numericValue,
        failures: Object.entries(result.lhr.audits)
          .filter(([, v]) => v.score !== null && v.score < 1)
          .map(([k, v]) => ({ id: k, score: v.score, value: v.displayValue })),
      }),
    );
  }
} finally {
  await chrome.kill();
  server.kill();
}
````

## scripts/qa/package-lock.json

````json
{
  "name": "qa",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "@axe-core/playwright": "4.13.0",
        "chrome-launcher": "1.2.1",
        "lighthouse": "13.4.1",
        "playwright": "1.62.1"
      }
    },
    "node_modules/@axe-core/playwright": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@axe-core/playwright/-/playwright-4.13.0.tgz",
      "integrity": "sha512-6YLx+kxXu5GJceG4ozFg+33a2EMTdjYwWGloJ3sb9Kta5pp+ZNS53uxGVog5JetIY8s++P5UrtX+cri+u0VAVg==",
      "license": "MPL-2.0",
      "dependencies": {
        "axe-core": "~4.13.0"
      },
      "peerDependencies": {
        "playwright-core": ">= 1.0.0"
      }
    },
    "node_modules/@formatjs/ecma402-abstract": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/@formatjs/ecma402-abstract/-/ecma402-abstract-2.3.6.tgz",
      "integrity": "sha512-HJnTFeRM2kVFVr5gr5kH1XP6K0JcJtE7Lzvtr3FS/so5f1kpsqqqxy5JF+FRaO6H2qmcMfAUIox7AJteieRtVw==",
      "license": "MIT",
      "dependencies": {
        "@formatjs/fast-memoize": "2.2.7",
        "@formatjs/intl-localematcher": "0.6.2",
        "decimal.js": "^10.4.3",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/fast-memoize": {
      "version": "2.2.7",
      "resolved": "https://registry.npmjs.org/@formatjs/fast-memoize/-/fast-memoize-2.2.7.tgz",
      "integrity": "sha512-Yabmi9nSvyOMrlSeGGWDiH7rf3a7sIwplbvo/dlz9WCIjzIQAfy1RMf4S0X3yG724n5Ghu2GmEl5NJIV6O9sZQ==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/icu-messageformat-parser": {
      "version": "2.11.4",
      "resolved": "https://registry.npmjs.org/@formatjs/icu-messageformat-parser/-/icu-messageformat-parser-2.11.4.tgz",
      "integrity": "sha512-7kR78cRrPNB4fjGFZg3Rmj5aah8rQj9KPzuLsmcSn4ipLXQvC04keycTI1F7kJYDwIXtT2+7IDEto842CfZBtw==",
      "license": "MIT",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "@formatjs/icu-skeleton-parser": "1.8.16",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/icu-skeleton-parser": {
      "version": "1.8.16",
      "resolved": "https://registry.npmjs.org/@formatjs/icu-skeleton-parser/-/icu-skeleton-parser-1.8.16.tgz",
      "integrity": "sha512-H13E9Xl+PxBd8D5/6TVUluSpxGNvFSlN/b3coUp0e0JpuWXXnQDiavIpY3NnvSp4xhEMoXyyBvVfdFX8jglOHQ==",
      "license": "MIT",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/intl-localematcher": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/@formatjs/intl-localematcher/-/intl-localematcher-0.6.2.tgz",
      "integrity": "sha512-XOMO2Hupl0wdd172Y06h6kLpBz6Dv+J4okPLl4LPtzbr8f66WbIoy4ev98EBuZ6ZK4h5ydTN6XneT4QVpD7cdA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@opentelemetry/api": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/@opentelemetry/api/-/api-1.9.1.tgz",
      "integrity": "sha512-gLyJlPHPZYdAk1JENA9LeHejZe1Ti77/pTeFm/nMXmQH/HFZlcS/O2XJB+L8fkbrNSqhdtlvjBVjxwUYanNH5Q==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/@opentelemetry/api-logs": {
      "version": "0.220.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/api-logs/-/api-logs-0.220.0.tgz",
      "integrity": "sha512-CmVa4ImJ+ynfrPMNaAXHET6Bhb44SwzmfyVJFq9ni2jgXJR/l7C6gfVFddNmHP+ZOkP9cf4f9DBe68qVLTHc9w==",
      "license": "Apache-2.0",
      "dependencies": {
        "@opentelemetry/api": "^1.3.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/@opentelemetry/core": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/core/-/core-2.11.0.tgz",
      "integrity": "sha512-7YP44XH0tV6+Mb54x2YGf84i7yi+31MBZlE8JwvozkxyTvXbSp10X7cI7YE49ChJ3shMJoBmCJF3+1QFBJctGA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@opentelemetry/semantic-conventions": "^1.29.0"
      },
      "engines": {
        "node": "^18.19.0 || >=20.6.0"
      },
      "peerDependencies": {
        "@opentelemetry/api": ">=1.0.0 <1.10.0"
      }
    },
    "node_modules/@opentelemetry/instrumentation": {
      "version": "0.220.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/instrumentation/-/instrumentation-0.220.0.tgz",
      "integrity": "sha512-xQx3E2WxP1mDvKzxLxX+CTCtNLa560YJZ3087qYHerl2YmiKpv7AH+dAy7vmx+eVrZ5BwhfWUAVoKOoxCNHcpw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@opentelemetry/api-logs": "0.220.0",
        "import-in-the-middle": "^3.0.0",
        "require-in-the-middle": "^8.0.0"
      },
      "engines": {
        "node": "^18.19.0 || >=20.6.0"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.3.0"
      }
    },
    "node_modules/@opentelemetry/resources": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/resources/-/resources-2.11.0.tgz",
      "integrity": "sha512-Ie7+8q8MDF4FAEQCKVMTx3ReUvxiIAgIiiW3c9JdmP8+HMcDy20puT+AHjexnExgnbvBxjQ9fjkFDWrikJ2jQA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@opentelemetry/core": "2.11.0",
        "@opentelemetry/semantic-conventions": "^1.29.0"
      },
      "engines": {
        "node": "^18.19.0 || >=20.6.0"
      },
      "peerDependencies": {
        "@opentelemetry/api": ">=1.3.0 <1.10.0"
      }
    },
    "node_modules/@opentelemetry/sdk-trace": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/sdk-trace/-/sdk-trace-2.11.0.tgz",
      "integrity": "sha512-fFnTqGm8/G73GQVnxYi7LXa1ZVYEUvgL6XI1LpvV0bPC7WQ/ZGgKxCSl8FnlZBKto9JHHEFTO6s6CUpvvtwFrA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@opentelemetry/core": "2.11.0",
        "@opentelemetry/resources": "2.11.0",
        "@opentelemetry/semantic-conventions": "^1.29.0"
      },
      "engines": {
        "node": "^18.19.0 || >=20.6.0"
      },
      "peerDependencies": {
        "@opentelemetry/api": ">=1.3.0 <1.10.0"
      }
    },
    "node_modules/@opentelemetry/sdk-trace-base": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/sdk-trace-base/-/sdk-trace-base-2.11.0.tgz",
      "integrity": "sha512-H19x/TX/LZdqiYOjM7fqtSxwlplC5pgelavqbQdHbhdq0q/AI/TGkM2dfGuuynTXmJPeF2HoZVoPDu+TGoW78A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@opentelemetry/core": "2.11.0",
        "@opentelemetry/resources": "2.11.0",
        "@opentelemetry/sdk-trace": "2.11.0",
        "@opentelemetry/semantic-conventions": "^1.29.0"
      },
      "engines": {
        "node": "^18.19.0 || >=20.6.0"
      },
      "peerDependencies": {
        "@opentelemetry/api": ">=1.3.0 <1.10.0"
      }
    },
    "node_modules/@opentelemetry/semantic-conventions": {
      "version": "1.43.0",
      "resolved": "https://registry.npmjs.org/@opentelemetry/semantic-conventions/-/semantic-conventions-1.43.0.tgz",
      "integrity": "sha512-eSYWTm620tTk45EKSedaUL8MFYI8hW164hIXsgIHyxu3VobUB3fFCu5t0hQby6OoWRPsG1KkKUG2M5UadiLiVg==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@paulirish/trace_engine": {
      "version": "0.0.65",
      "resolved": "https://registry.npmjs.org/@paulirish/trace_engine/-/trace_engine-0.0.65.tgz",
      "integrity": "sha512-Qsm6F5C8xf6ZzQXbQc2+wcpe6sggfs/gvc/ytqSurdvYg3kyW0ECHCqE0CWBKZpqgjVfPNX9c7SCS3r2nEIRGg==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "legacy-javascript": "latest",
        "third-party-web": "latest"
      }
    },
    "node_modules/@puppeteer/browsers": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@puppeteer/browsers/-/browsers-3.2.2.tgz",
      "integrity": "sha512-q2BU4YfO9h/Wt7IcWPcggpOOqLk2Tbs1hDwolvKZrweRjy751OJBKMN9zO5bfD0pzU7X/tvKw/exQds4pM/LOg==",
      "license": "Apache-2.0",
      "dependencies": {
        "modern-tar": "^0.8.4",
        "yargs": "^18.0.0"
      },
      "bin": {
        "browsers": "lib/main-cli.js"
      },
      "engines": {
        "node": ">=22.12.0"
      },
      "peerDependencies": {
        "proxy-agent": ">=8.0.1",
        "yauzl": "^2.10.0 || ^3.4.0"
      },
      "peerDependenciesMeta": {
        "proxy-agent": {
          "optional": true
        },
        "yauzl": {
          "optional": true
        }
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/ansi-regex": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.3.0.tgz",
      "integrity": "sha512-WpDfL7NO6j7tH88IDBNVdUJxDh9nmCteAVW9dsep846XdwF4naCBK+/tGLX3KJgcpgMRXCFlTM2hKGoK9FsdrQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/cliui": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-9.0.1.tgz",
      "integrity": "sha512-k7ndgKhwoQveBL+/1tqGJYNz097I7WOvwbmmU2AR5+magtbjPWQTS1C5vzGkBC8Ym8UWRzfKUzUUqFLypY4Q+w==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/cliui/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/emoji-regex": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.6.0.tgz",
      "integrity": "sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==",
      "license": "MIT"
    },
    "node_modules/@puppeteer/browsers/node_modules/string-width": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-8.2.2.tgz",
      "integrity": "sha512-GaPUh5gfdrYzqeVNZvUfT23vYYxXzKYidUcnMtJg/3rxRV63EFZy3k6xfKlmfeJD0176lnUV/Usr3XcwSvFzpg==",
      "license": "MIT",
      "dependencies": {
        "get-east-asian-width": "^1.5.0",
        "strip-ansi": "^7.1.2"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/wrap-ansi": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.2.tgz",
      "integrity": "sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/wrap-ansi/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/yargs": {
      "version": "18.1.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-18.1.0.tgz",
      "integrity": "sha512-2rAgRKu54VsHkqI0/tYkmluGXHD4KW7yZoycuqDQ15QOTnc2VVfy0nN/1eMhnQLO00A+dwtK20xuCnc1YGeUyg==",
      "license": "MIT",
      "dependencies": {
        "cliui": "^9.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "string-width": "^8.2.1",
        "y18n": "^5.0.5",
        "yargs-parser": "^22.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/yargs-parser": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-22.0.0.tgz",
      "integrity": "sha512-rwu/ClNdSMpkSrUb+d6BRsSkLUq1fmfsY6TOpYzTwvwkg1/NRG85KBy3kq++A8LKQwX6lsu+aWad+2khvuXrqw==",
      "license": "ISC",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/@sentry/conventions": {
      "version": "0.16.0",
      "resolved": "https://registry.npmjs.org/@sentry/conventions/-/conventions-0.16.0.tgz",
      "integrity": "sha512-fO9PLmHdVURcSPUpWCItWAtgKiMwGdJHbovoSEyLplX5sxs2ugvI4CBPTrkkgqhObnZOD0CnWBKDzSVQYBKEyQ==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@sentry/core": {
      "version": "10.74.0",
      "resolved": "https://registry.npmjs.org/@sentry/core/-/core-10.74.0.tgz",
      "integrity": "sha512-u9rY8vcZfktccwm6LznfCZlqP5C9A+p76r4/pFS1grqpuTO0m21Cl8rosnlESrDGP/Xd9tfr91rWYk0jPH8jeQ==",
      "license": "MIT",
      "dependencies": {
        "@sentry/conventions": "^0.16.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@sentry/node": {
      "version": "10.74.0",
      "resolved": "https://registry.npmjs.org/@sentry/node/-/node-10.74.0.tgz",
      "integrity": "sha512-u1wsarTOWHn9CCev81Da5T4IQHZgdcosXRfX2+4DMII/lVJMBYesKixTQuMwXexjVG2+pkf16zTmgjZDa+75jA==",
      "license": "MIT",
      "dependencies": {
        "@opentelemetry/api": "^1.9.1",
        "@opentelemetry/instrumentation": "^0.220.0",
        "@opentelemetry/sdk-trace-base": "^2.9.0",
        "@sentry/conventions": "^0.16.0",
        "@sentry/core": "10.74.0",
        "@sentry/node-core": "10.74.0",
        "@sentry/opentelemetry": "10.74.0",
        "@sentry/server-utils": "10.74.0",
        "import-in-the-middle": "^3.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@sentry/node-core": {
      "version": "10.74.0",
      "resolved": "https://registry.npmjs.org/@sentry/node-core/-/node-core-10.74.0.tgz",
      "integrity": "sha512-btgZXcGmkOGgojbxHo/gfGiyqYpzC9E8zVR78Q3MtM6Xnemk9gwJiQlhNmEX/FM+C36WBRPZrdcZcnMaJhbfJw==",
      "license": "MIT",
      "dependencies": {
        "@sentry/conventions": "^0.16.0",
        "@sentry/core": "10.74.0",
        "@sentry/opentelemetry": "10.74.0",
        "import-in-the-middle": "^3.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.9.0",
        "@opentelemetry/core": "^1.30.1 || ^2.1.0",
        "@opentelemetry/exporter-trace-otlp-http": ">=0.57.0 <1",
        "@opentelemetry/instrumentation": ">=0.57.1 <1",
        "@opentelemetry/sdk-trace-base": "^1.30.1 || ^2.1.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@opentelemetry/core": {
          "optional": true
        },
        "@opentelemetry/exporter-trace-otlp-http": {
          "optional": true
        },
        "@opentelemetry/instrumentation": {
          "optional": true
        },
        "@opentelemetry/sdk-trace-base": {
          "optional": true
        }
      }
    },
    "node_modules/@sentry/opentelemetry": {
      "version": "10.74.0",
      "resolved": "https://registry.npmjs.org/@sentry/opentelemetry/-/opentelemetry-10.74.0.tgz",
      "integrity": "sha512-ua5mt0NDBfye+/ACKjAw9Ad2i+y42lOLvhxXZepZXjszblMz80MEsIZflMB7uLZUCTNH7MbZN8tlzCy8KsJKmQ==",
      "license": "MIT",
      "dependencies": {
        "@sentry/conventions": "^0.16.0",
        "@sentry/core": "10.74.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.9.0",
        "@opentelemetry/core": "^1.30.1 || ^2.1.0",
        "@opentelemetry/sdk-trace-base": "^1.30.1 || ^2.1.0"
      }
    },
    "node_modules/@sentry/server-utils": {
      "version": "10.74.0",
      "resolved": "https://registry.npmjs.org/@sentry/server-utils/-/server-utils-10.74.0.tgz",
      "integrity": "sha512-AHmPIGE8yVRyywpZRhAkm/H0cHTgsQSPhFZFbaeQLcYHFE/eOP9bAMh8Nj/Apr7WMagFXYHd04tR/63BxtLgKw==",
      "license": "MIT",
      "dependencies": {
        "@sentry/conventions": "^0.16.0",
        "@sentry/core": "10.74.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@types/node": {
      "version": "26.5.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.5.1.tgz",
      "integrity": "sha512-CzNm2FezW4VR/LjG6yUdiEgLE/rAQ9Slj5gCu/C2VrdcW7I0ahNZ8DRbHT7zOZ6r3ONgd/bsQIeSaoDGrd1C6g==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.9.0"
      }
    },
    "node_modules/ansi-colors": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
      "integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/atomically": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/atomically/-/atomically-2.1.1.tgz",
      "integrity": "sha512-P4w9o2dqARji6P7MHprklbfiArZAWvo07yW7qs3pdljb3BWr12FIB7W+p0zJiuiVsUpRO0iZn1kFFcpPegg0tQ==",
      "license": "MIT",
      "dependencies": {
        "stubborn-fs": "^2.0.0",
        "when-exit": "^2.1.4"
      }
    },
    "node_modules/axe-core": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.13.0.tgz",
      "integrity": "sha512-UzGt8zg7Ny8djbYMhxl2zuEevVa7r2gJjYY5Lwr1xM7+XU2nd6CkIWFTVcCIbAP63vSz71NaVyyuSk9lHKcy0A==",
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/chrome-launcher": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/chrome-launcher/-/chrome-launcher-1.2.1.tgz",
      "integrity": "sha512-qmFR5PLMzHyuNJHwOloHPAHhbaNglkfeV/xDtt5b7xiFFyU1I+AZZX0PYseMuhenJSSirgxELYIbswcoc+5H4A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@types/node": "*",
        "escape-string-regexp": "^4.0.0",
        "is-wsl": "^2.2.0",
        "lighthouse-logger": "^2.0.1"
      },
      "bin": {
        "print-chrome-path": "bin/print-chrome-path.cjs"
      },
      "engines": {
        "node": ">=12.13.0"
      }
    },
    "node_modules/chromium-bidi": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/chromium-bidi/-/chromium-bidi-17.0.2.tgz",
      "integrity": "sha512-5v9GQFhTktFvotn/OFNJBmKLKRAb6n9r0bVCwf7sHgWc3/JryK0bj1nn93L3pHFrfgcsu6Be6EWsDi+1XHTGDg==",
      "license": "Apache-2.0",
      "dependencies": {
        "mitt": "^3.0.1",
        "zod": "^3.24.1"
      },
      "engines": {
        "node": ">=20.19.0 <22.0.0 || >=22.12.0"
      },
      "peerDependencies": {
        "devtools-protocol": "*"
      }
    },
    "node_modules/cjs-module-lexer": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-2.2.1.tgz",
      "integrity": "sha512-Ca8swihM+/4yKecYHY52kgJd300hi2lADU/a1RxNTRe+RJ9jvqQlESpbz9DnG9mowez8qwXHB8qYdIUw9e+F5Q==",
      "license": "MIT"
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/configstore": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-7.1.0.tgz",
      "integrity": "sha512-N4oog6YJWbR9kGyXvS7jEykLDXIE2C0ILYqNBZBp9iwiJpoCBWYsuAdW6PPFn6w06jjnC+3JstVvWHO4cZqvRg==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "atomically": "^2.0.3",
        "dot-prop": "^9.0.0",
        "graceful-fs": "^4.2.11",
        "xdg-basedir": "^5.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/csp_evaluator": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/csp_evaluator/-/csp_evaluator-1.1.8.tgz",
      "integrity": "sha512-EwOnfYuNbTytvbMKsLixTrRgnjOa0WZCxGy8A9nnSYAicrdwn+T/epU/yjgymmOxlgKnvH+8wXt+7p/8ak5Feg==",
      "license": "Apache-2.0"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
      "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
      "license": "MIT"
    },
    "node_modules/define-lazy-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
      "integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/devtools-protocol": {
      "version": "0.0.1663043",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1663043.tgz",
      "integrity": "sha512-33aOY3ZnBP1dgZsshgaL+/XlsQleiFZgyUaDtdZkEa1nbZhVY1MoDeWjk+wxg25fU924l1ZJfoGNmjjeA/5s1w==",
      "license": "BSD-3-Clause"
    },
    "node_modules/dot-prop": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-9.0.0.tgz",
      "integrity": "sha512-1gxPBJpI/pcjQhKgIU91II6Wkay+dLcN3M6rf2uwP8hRur3HtQXjVrdAK3sjC0piaEuxzMwjXChcETiJl47lAQ==",
      "license": "MIT",
      "dependencies": {
        "type-fest": "^4.18.2"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/enquirer": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.4.1.tgz",
      "integrity": "sha512-rRqJg/6gd538VHvR3PSrdRBb/1Vy2YfzHqzvbhGIQpDRKIa4FgV/54b5Q1xYSxOOwKvjXweS26E0Q+nAMwp2pQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-colors": "^4.1.1",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-3.0.2.tgz",
      "integrity": "sha512-BuIB67FngDSyQ/dpQNOZybwdEBDUGJQvOqwWr4ha/ufYiqzuEwPkKO2zLhRAgay28tStRIHUeWmszZAJo3GCOg==",
      "license": "MIT"
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.6.0.tgz",
      "integrity": "sha512-QRbvDIbx6YklUe6RxeTeleMR0yv3cYH6PsPZHcnVn7xv7zO1BHN8r0XETu8n6Ye3Q+ahtSarc3WgtNWmehIBfA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/http-link-header": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/http-link-header/-/http-link-header-1.1.4.tgz",
      "integrity": "sha512-xT3GPW6/ZbGuw4UvwHqErSCEjNUlwbQJuZn9/q5U4WEKfp2kENVCAlousG1zLxHeaQ/ffOHUNpWamvkbBW0eNw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/image-ssim": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/image-ssim/-/image-ssim-0.2.0.tgz",
      "integrity": "sha512-W7+sO6/yhxy83L0G7xR8YAc5Z5QFtYEXXRV6EaE8tuYBZJnA3gVgp3q7X7muhLZVodeb9UfvjSbwt9VJwjIYAg==",
      "license": "MIT"
    },
    "node_modules/import-in-the-middle": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/import-in-the-middle/-/import-in-the-middle-3.5.1.tgz",
      "integrity": "sha512-mPKuL8bPQzecui2KK6Gb+M8JvJoHnhS1FeYGa22QopBmlevF5F0FE6ued/B5EgHDeIoMTONIpDWWFKUPOG0DBQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "cjs-module-lexer": "^2.2.0",
        "es-module-lexer": "^3.0.2",
        "module-details-from-path": "^1.0.4"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/intl-messageformat": {
      "version": "10.7.18",
      "resolved": "https://registry.npmjs.org/intl-messageformat/-/intl-messageformat-10.7.18.tgz",
      "integrity": "sha512-m3Ofv/X/tV8Y3tHXLohcuVuhWKo7BBq62cqY15etqmLxg2DZ34AGGgQDeR+SCta2+zICb1NX83af0GJmbQ1++g==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "@formatjs/fast-memoize": "2.2.7",
        "@formatjs/icu-messageformat-parser": "2.11.4",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/is-docker": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
      "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
      "license": "MIT",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "license": "MIT",
      "dependencies": {
        "is-docker": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jpeg-js": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.4.4.tgz",
      "integrity": "sha512-WZzeDOEtTOBK4Mdsar0IqEU5sMr3vSV2RqkAIzUEV2BHnUfKGyswWFPFwK5EeDo93K3FohSHbLAjj0s1Wzd+dg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/js-library-detector": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/js-library-detector/-/js-library-detector-6.7.0.tgz",
      "integrity": "sha512-c80Qupofp43y4cJ7+8TTDN/AsDwLi5oOm/plBrWI+iQt485vKXCco+yVmOwEgdo9VOdsYTuV0UlTeetVPTriXA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/legacy-javascript": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/legacy-javascript/-/legacy-javascript-0.0.1.tgz",
      "integrity": "sha512-lPyntS4/aS7jpuvOlitZDFifBCb4W8L/3QU0PLbUTUj+zYah8rfVjYic88yG7ZKTxhS5h9iz7duT8oUXKszLhg==",
      "license": "Apache-2.0"
    },
    "node_modules/lighthouse": {
      "version": "13.4.1",
      "resolved": "https://registry.npmjs.org/lighthouse/-/lighthouse-13.4.1.tgz",
      "integrity": "sha512-fDu8lt3QLK/lTqIxtp1HkzQNJ32rsFHhbadYOepcMZFLgA8oINhxutMbMv8XXnpTOvZ0TXCo4JCk1LDTWaRLnA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@paulirish/trace_engine": "0.0.65",
        "@sentry/node": "^10.0.0",
        "axe-core": "^4.12.1",
        "chrome-launcher": "^1.2.1",
        "configstore": "^7.0.0",
        "csp_evaluator": "1.1.8",
        "devtools-protocol": "0.0.1663043",
        "enquirer": "^2.3.6",
        "http-link-header": "^1.1.1",
        "intl-messageformat": "^10.5.3",
        "jpeg-js": "^0.4.4",
        "js-library-detector": "^6.7.0",
        "lighthouse-logger": "^2.0.2",
        "lighthouse-stack-packs": "1.12.3",
        "lodash-es": "^4.17.21",
        "lookup-closest-locale": "6.2.0",
        "open": "^8.4.0",
        "puppeteer-core": "^25.3.0",
        "robots-parser": "^3.0.1",
        "speedline-core": "^1.4.3",
        "third-party-web": "^0.29.2",
        "tldts-icann": "^7.4.9",
        "web-features": "^3.34.0",
        "ws": "^7.0.0",
        "yargs": "^17.3.1",
        "yargs-parser": "^21.0.0"
      },
      "bin": {
        "chrome-debug": "core/scripts/manual-chrome-launcher.js",
        "lighthouse": "cli/index.js",
        "smokehouse": "cli/test/smokehouse/frontends/smokehouse-bin.js"
      },
      "engines": {
        "node": ">=22.19"
      }
    },
    "node_modules/lighthouse-logger": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/lighthouse-logger/-/lighthouse-logger-2.0.2.tgz",
      "integrity": "sha512-vWl2+u5jgOQuZR55Z1WM0XDdrJT6mzMP8zHUct7xTlWhuQs+eV0g+QL0RQdFjT54zVmbhLCP8vIVpy1wGn/gCg==",
      "license": "Apache-2.0",
      "dependencies": {
        "debug": "^4.4.1",
        "marky": "^1.2.2"
      }
    },
    "node_modules/lighthouse-stack-packs": {
      "version": "1.12.3",
      "resolved": "https://registry.npmjs.org/lighthouse-stack-packs/-/lighthouse-stack-packs-1.12.3.tgz",
      "integrity": "sha512-d8IsOpE83kbANgnM+Tp8+x6HcMpX9o2ITBiUERssgzAIFdZCQzs/f4k6D0DLQTE59enml9mbAOU52Wu35exWtg==",
      "license": "Apache-2.0"
    },
    "node_modules/lodash-es": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.18.1.tgz",
      "integrity": "sha512-J8xewKD/Gk22OZbhpOVSwcs60zhd95ESDwezOFuA3/099925PdHJ7OFHNTGtajL3AlZkykD32HykiMo+BIBI8A==",
      "license": "MIT"
    },
    "node_modules/lookup-closest-locale": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/lookup-closest-locale/-/lookup-closest-locale-6.2.0.tgz",
      "integrity": "sha512-/c2kL+Vnp1jnV6K6RpDTHK3dgg0Tu2VVp+elEiJpjfS1UyY7AjOYHohRug6wT0OpoX2qFgNORndE9RqesfVxWQ==",
      "license": "MIT"
    },
    "node_modules/marky": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/marky/-/marky-1.3.0.tgz",
      "integrity": "sha512-ocnPZQLNpvbedwTy9kNrQEsknEfgvcLMvOtz3sFeWApDq1MXH1TqkCIx58xlpESsfwQOnuBO9beyQuNGzVvuhQ==",
      "license": "Apache-2.0"
    },
    "node_modules/mitt": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mitt/-/mitt-3.0.1.tgz",
      "integrity": "sha512-vKivATfr97l2/QBCYAkXYDbrIWPM2IIKEl7YPhjCvKlG3kE2gm+uBo6nEXK3M5/Ffh/FLpKExzOQ3JJoJGFKBw==",
      "license": "MIT"
    },
    "node_modules/modern-tar": {
      "version": "0.8.5",
      "resolved": "https://registry.npmjs.org/modern-tar/-/modern-tar-0.8.5.tgz",
      "integrity": "sha512-snEhs+6G5Tjd4I7tLCDOaoln2RgE0bD19RzEKgvgK2hZ5VKy3MpLhLTZ2fWpXSTg4K2cyPwp+VHATFJhxfnOeA==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/module-details-from-path": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/module-details-from-path/-/module-details-from-path-1.0.4.tgz",
      "integrity": "sha512-EGWKgxALGMgzvxYF1UyGTy0HXX/2vHLkw6+NvDKW2jypWbHpjQuj4UMcqQWXHERJhVGKikolT06G3bcKe4fi7w==",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/open": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/open/-/open-8.4.2.tgz",
      "integrity": "sha512-7x81NCL719oNbsq/3mh+hVrAWmFuEYUqrq/Iw3kUzH8ReypT9QQ0BLoJS7/G9k6N81XjW4qHWtjWwe/9eLy1EQ==",
      "license": "MIT",
      "dependencies": {
        "define-lazy-prop": "^2.0.0",
        "is-docker": "^2.1.1",
        "is-wsl": "^2.2.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/playwright": {
      "version": "1.62.1",
      "resolved": "https://registry.npmjs.org/playwright/-/playwright-1.62.1.tgz",
      "integrity": "sha512-0M+L3LAD8/nm554LOla9Ayx0j0tmFZ0FBcoQ7F1VuVHpM/XpiC8RcDzBQB8W5+hA8L22THxELzeF+2WcUzvcLg==",
      "license": "Apache-2.0",
      "dependencies": {
        "playwright-core": "1.62.1"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=20"
      },
      "optionalDependencies": {
        "fsevents": "2.3.2"
      }
    },
    "node_modules/playwright-core": {
      "version": "1.63.0",
      "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.63.0.tgz",
      "integrity": "sha512-rYCsBF/M5HjUch52bbtVONEFjv6Xu8sm8h72dNlR5bzIE1fvC/bxgspzkjSfU+MweEMmPM8KJebG6nnyxo5mCg==",
      "license": "Apache-2.0",
      "peer": true,
      "bin": {
        "playwright-core": "cli.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/playwright/node_modules/playwright-core": {
      "version": "1.62.1",
      "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.62.1.tgz",
      "integrity": "sha512-wPYSwEBJY9GHraISXqyqtx0na0LpO3XEX7jNDhntbex7tzUS7kLnZsOlFruFJB4Hi/rhDMjXGqHewDZ68nYZVw==",
      "license": "Apache-2.0",
      "bin": {
        "playwright-core": "cli.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/puppeteer-core": {
      "version": "25.10.0",
      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-25.10.0.tgz",
      "integrity": "sha512-Hy5eMQshOEMil4JUUx03h5pw1HYkYCso1RG/gcpPlFSd4cYPOcopxcXEAxpLPOkOPJb9LIJtwxuj66bSdvknFg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@puppeteer/browsers": "3.2.2",
        "chromium-bidi": "17.0.2",
        "devtools-protocol": "0.0.1666840",
        "typed-query-selector": "^2.12.2",
        "webdriver-bidi-protocol": "0.4.3",
        "ws": "^8.21.3"
      },
      "engines": {
        "node": ">=22.12.0"
      }
    },
    "node_modules/puppeteer-core/node_modules/devtools-protocol": {
      "version": "0.0.1666840",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1666840.tgz",
      "integrity": "sha512-gCcO42XCHKEs7Ag0S7aGYsnJ7hlgrO3qderYqeiY0Eqk+0GFfuvT13IA0hHreJTa2KCdDVyGMeOhdMNmrrTjVg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/puppeteer-core/node_modules/ws": {
      "version": "8.21.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.21.3.tgz",
      "integrity": "sha512-201TZ/kPWxoPr/OKWjquZR1SWKXcvxdH+e1xrx89b3YbmzLMFCLfnaG1HFIgWzJOEWZ7MvpK++odZufgYR50Rw==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-in-the-middle": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/require-in-the-middle/-/require-in-the-middle-8.0.1.tgz",
      "integrity": "sha512-QT7FVMXfWOYFbeRBF6nu+I6tr2Tf3u0q8RIEjNob/heKY/nh7drD/k7eeMFmSQgnTtCzLDcCu/XEnpW2wk4xCQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.5",
        "module-details-from-path": "^1.0.3"
      },
      "engines": {
        "node": ">=9.3.0 || >=8.10.0 <9.0.0"
      }
    },
    "node_modules/robots-parser": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/robots-parser/-/robots-parser-3.0.1.tgz",
      "integrity": "sha512-s+pyvQeIKIZ0dx5iJiQk1tPLJAWln39+MI5jtM8wnyws+G5azk+dMnMX0qfbqNetKKNgcWWOdi0sfm+FbQbgdQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/speedline-core": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/speedline-core/-/speedline-core-1.4.3.tgz",
      "integrity": "sha512-DI7/OuAUD+GMpR6dmu8lliO2Wg5zfeh+/xsdyJZCzd8o5JgFUjCeLsBDuZjIQJdwXS3J0L/uZYrELKYqx+PXog==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "image-ssim": "^0.2.0",
        "jpeg-js": "^0.4.1"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/stubborn-fs": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/stubborn-fs/-/stubborn-fs-2.0.0.tgz",
      "integrity": "sha512-Y0AvSwDw8y+nlSNFXMm2g6L51rBGdAQT20J3YSOqxC53Lo3bjWRtr2BKcfYoAf352WYpsZSTURrA0tqhfgudPA==",
      "license": "MIT",
      "dependencies": {
        "stubborn-utils": "^1.0.1"
      }
    },
    "node_modules/stubborn-utils": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/stubborn-utils/-/stubborn-utils-1.0.2.tgz",
      "integrity": "sha512-zOh9jPYI+xrNOyisSelgym4tolKTJCQd5GBhK0+0xJvcYDcwlOoxF/rnFKQ2KRZknXSG9jWAp66fwP6AxN9STg==",
      "license": "MIT"
    },
    "node_modules/third-party-web": {
      "version": "0.29.2",
      "resolved": "https://registry.npmjs.org/third-party-web/-/third-party-web-0.29.2.tgz",
      "integrity": "sha512-fegtha91tq2DHphyoiBXVHjVi2YG9zFaRnboT9C28tO1en9Y3wJsfspuy40F+u5wl3hHVbw7cnd1b67kEGHb8g==",
      "license": "MIT"
    },
    "node_modules/tldts-core": {
      "version": "7.4.12",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-7.4.12.tgz",
      "integrity": "sha512-nYNzS2WRf4QJmjzFFgAxLOBjyBxAGRbCy9PVBPaglcYyYajh40VBn+v5Ngr96ZMc7oM0+aCJdtQnNejvdBnXMQ==",
      "license": "MIT"
    },
    "node_modules/tldts-icann": {
      "version": "7.4.12",
      "resolved": "https://registry.npmjs.org/tldts-icann/-/tldts-icann-7.4.12.tgz",
      "integrity": "sha512-KYMFombFttNwGKI9GhqlHBn/+QROOk2bvh5p+aVmRSF8VH+YYVS9fEq0ux099jzw0JXmk2yRErCiviveSL/QhA==",
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^7.4.12"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-fest": {
      "version": "4.41.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-4.41.0.tgz",
      "integrity": "sha512-TeTSQ6H5YHvpqVwBRcnLDCBnDOHWYu7IvGbHT6N8AOymcr9PJGjc1GTtiWZTYg0NCgYwvnYWEkVChQAr9bjfwA==",
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-query-selector": {
      "version": "2.12.2",
      "resolved": "https://registry.npmjs.org/typed-query-selector/-/typed-query-selector-2.12.2.tgz",
      "integrity": "sha512-EOPFbyIub4ngnEdqi2yOcNeDLaX/0jcE1JoAXQDDMIthap7FoN795lc/SHfIq2d416VufXpM8z/lD+WRm2gfOQ==",
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "8.9.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.9.0.tgz",
      "integrity": "sha512-KTDyRTYX8sWmKXAikPHHSyc63CRPETMctyjKFupcC6OBLXT3xsN0e9aF7m+mIXutFWpUXuedtowG7iLOzp0kQg==",
      "license": "MIT"
    },
    "node_modules/web-features": {
      "version": "3.38.0",
      "resolved": "https://registry.npmjs.org/web-features/-/web-features-3.38.0.tgz",
      "integrity": "sha512-FfexTigrIL9tVr/JgX9kBlzIlMfBG4eD38crZQiJPIo46PJ3Qj8RVUM7zmpsozooq2ImHM7xiUY6gIv5mo/7rQ==",
      "license": "Apache-2.0"
    },
    "node_modules/webdriver-bidi-protocol": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/webdriver-bidi-protocol/-/webdriver-bidi-protocol-0.4.3.tgz",
      "integrity": "sha512-uuN0goWfxP22B7J/uAgBpOYNPttC+XVseYE+rSY5+rQ+YBeVz/VORw8WbmLVcqW78zNg5A4qnjNXYUWR3il2ig==",
      "license": "Apache-2.0"
    },
    "node_modules/when-exit": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/when-exit/-/when-exit-2.1.5.tgz",
      "integrity": "sha512-VGkKJ564kzt6Ms1dbgPP/yuIoQCrsFAnRbptpC5wOEsDaNsbCB2bnfnaA8i/vRs5tjUSEOtIuvl9/MyVsvQZCg==",
      "license": "MIT"
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/ws": {
      "version": "7.5.13",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.13.tgz",
      "integrity": "sha512-rsKI6xDBFVf4r/x8XyChGK04QR/XHroxs/jUcoWvtEZM8TPU/X/uIY9B1CsSzYws9ZJb/6bbBu7dPhFW00CAoA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.3.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": "^5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xdg-basedir": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-5.1.0.tgz",
      "integrity": "sha512-GCPAHLvrIH13+c0SuacwvRYj2SxJXQ4kaVTT5xgL3kPrz56XxkF21IGhjSE1+W0aw7gpBWRGXLCPnPby6lSpmQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs": {
      "version": "17.7.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.3.tgz",
      "integrity": "sha512-GZtjxm/J/4TSxuL3FNYjCmLktBTnIw/rVmKSIyKeYAZpmJB2ig9VauCC5xsa82GNKVKDAqpOn3KVzNt0zmrU0g==",
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}
````

## scripts/qa/package.json

````json
{
  "private": true,
  "type": "module",
  "dependencies": {
    "@axe-core/playwright": "4.13.0",
    "playwright": "1.62.1",
    "lighthouse": "13.4.1",
    "chrome-launcher": "1.2.1"
  }
}
````

## scripts/qa/server.cjs

````javascript
/* eslint-disable @typescript-eslint/no-require-imports -- Node audit utilities use CommonJS. */
const http = require("http"),
  fs = require("fs"),
  path = require("path"),
  zlib = require("zlib");
const base = path.resolve(process.argv[2] || "out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};
http
  .createServer((req, res) => {
    let route = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = path.resolve(base, "." + route);
    if (!file.startsWith(base + "/") && file !== base) {
      res.writeHead(403).end();
      return;
    }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      const raw = fs.readFileSync(file),
        ext = path.extname(file);
      const gzip =
        /gzip/.test(req.headers["accept-encoding"] || "") &&
        [".html", ".css", ".js", ".json", ".svg"].includes(ext);
      const data = gzip ? zlib.gzipSync(raw) : raw;
      res.writeHead(200, {
        "Content-Type": types[ext] || "application/octet-stream",
        "Content-Length": data.length,
        "Cache-Control": "public,max-age=86400",
        ...(gzip
          ? { "Content-Encoding": "gzip", Vary: "Accept-Encoding" }
          : {}),
      });
      res.end(data);
    } catch {
      res.writeHead(404).end();
    }
  })
  .listen(Number(process.argv[3] || 4174), "127.0.0.1");
````

## scripts/source-packet.py

````python
"""Generate a complete readable source snapshot and tracked file inventory."""
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[1]
paths = subprocess.check_output(['git', 'ls-files', '-z'], cwd=root).decode().split('\0')
paths = sorted(p for p in paths if p and (root/p).is_file())
code_suffixes = {'.tsx', '.ts', '.css', '.mjs', '.cjs', '.py', '.json', '.yaml', '.svg'}
code = [p for p in paths if (Path(p).suffix in code_suffixes or p == '.gitignore') and not p.startswith('audit/')]
parts = ['# Complete source packet\n\nThis snapshot contains every tracked code, content, configuration and SVG source file, without abbreviated bodies. Binary media and PDFs are present in the repository and inventoried in FILE-TREE.md. Design, assumptions, prompts and audit results have separate complete documents.\n']
for name in code:
    body = (root/name).read_text()
    language = {'.tsx':'tsx', '.ts':'typescript', '.mjs':'javascript', '.cjs':'javascript', '.py':'python', '.svg':'xml'}.get(Path(name).suffix, Path(name).suffix[1:])
    parts.append(f'\n## {name}\n\n````{language}\n{body.rstrip()}\n````\n')
(root/'CODE.md').write_text(''.join(parts))
all_paths = sorted(set(paths + ['CODE.md', 'FILE-TREE.md']))
rows = ['# Complete repository file tree\n\nPaths preserve the full directory hierarchy. Generated build/dependency directories and raw reproducible audit reports are excluded by gitignore.\n\n| Path | Bytes |\n| --- | ---: |\n']
for name in all_paths:
    size = '—' if name == 'FILE-TREE.md' else str((root/name).stat().st_size)
    rows.append(f'| `{name}` | {size} |\n')
(root/'FILE-TREE.md').write_text(''.join(rows))
print(f'{len(code)} complete source files; {len(all_paths)} repository paths')
````

## src/app/en/investors/page.tsx

````tsx
import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("en");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("en","investors"),languages:{uk:origin+pathFor("uk","investors"),en:origin+pathFor("en","investors")}}};
export default function Page(){return <System locale="en" view="investors"/>;}
````

## src/app/en/menu/page.tsx

````tsx
import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("en");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("en","menu"),languages:{uk:origin+pathFor("uk","menu"),en:origin+pathFor("en","menu")}}};
export default function Page(){return <System locale="en" view="menu"/>;}
````

## src/app/en/page.tsx

````tsx
import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("en");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("en",""),languages:{uk:origin+pathFor("uk",""),en:origin+pathFor("en","")}}};
export default function Page(){return <System locale="en" view="all"/>;}
````

## src/app/globals.css

````css
@import "tailwindcss";
@theme inline{--font-sans:var(--sans);--font-mono:var(--mono)}
:root{--paper:#f3f1ea;--ink:#172e28;--muted:#58645d;--line:#bcc3b8;--ease:cubic-bezier(.22,1,.36,1);font-synthesis:none;color-scheme:light}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:86px}body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans),sans-serif;font-size:16px;-webkit-font-smoothing:antialiased}::selection{background:var(--ink);color:var(--paper)}a{color:inherit;text-decoration:none}button,input,select{font:inherit}button,a,input,select{-webkit-tap-highlight-color:transparent}button{cursor:pointer;color:inherit}button:disabled{cursor:wait}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:2px solid currentColor;outline-offset:5px}img{max-width:100%;display:block}h1,h2,h3,p{margin:0}button{border:0;background:none}h1,h2,h3{font-weight:500}ul,ol{padding:0;list-style:none;margin:0}dl,dd{margin:0}main{min-width:0}.system{overflow:clip}.micro,.edition,.rail,.topbar nav,.section-head,.thesis-foot,.specs,.price,.source-foot,.market-caption,.market-bottom a,.market-bottom strong,.chart-values,.result-grid dd,.ebitda,.sliders output,.currency,.model-toolbar,.scenario-comparison dd,.format dl,.term-facts dt,.allocation-key,.gates,.footer,.number{font-family:var(--mono),monospace;font-variant-numeric:tabular-nums}.micro{font-size:11px;line-height:1.6;letter-spacing:.06em}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;white-space:nowrap}.skip{position:fixed;z-index:100;top:-100px;left:20px;background:var(--ink);color:var(--paper);padding:15px}.skip:focus{top:10px}.topbar{height:76px;position:fixed;top:0;left:0;right:0;z-index:30;background:var(--paper);display:flex;align-items:center;padding:0 4vw;border-bottom:1px solid var(--line);gap:32px}.wordmark{font-size:32px;font-weight:600;letter-spacing:-2px;line-height:1}.wordmark span{font:10px var(--mono);vertical-align:top;margin:2px 0 0 3px;display:inline-block}.edition{font-size:10px;letter-spacing:.08em}.topbar nav{display:flex;gap:30px;align-items:center;margin-left:auto;font-size:12px}.topbar nav a{min-height:44px;display:flex;align-items:center}.topbar nav a:hover{text-decoration:underline;text-underline-offset:5px}.language{border-left:1px solid var(--line);padding-left:25px}.rail{position:fixed;top:39%;left:28px;width:108px;z-index:20;mix-blend-mode:difference;color:#e8d1d7}.rail nav{display:flex;flex-direction:column;gap:16px}.rail a{font-size:9px;display:flex;align-items:center;gap:12px;min-height:16px}.rail a span:last-child{opacity:0;transition:opacity .25s var(--ease)}.rail a:hover span:last-child,.rail a[aria-current] span:last-child{opacity:1}.rail a[aria-current] span:first-child{border-bottom:1px solid}.progress-cup{margin-top:34px;display:flex;gap:9px;align-items:center;font-size:9px}.progress-cup svg{width:27px;height:44px}.cup-liquid{fill:currentColor;transform:scaleY(0);transform-origin:16px 49px}.top-progress{height:2px;position:fixed;top:75px;left:0;right:0;z-index:35}.top-progress i{display:block;height:100%;background:var(--ink);transform:scaleX(0);transform-origin:left}.section{position:relative;padding:55px 5vw 84px 12vw;scroll-margin-top:76px}.section-head{display:flex;justify-content:space-between;align-items:center;border-top:1px solid currentColor;padding-top:14px;font-size:11px;letter-spacing:.05em;transform-origin:left;margin-bottom:65px}.section-head span:nth-child(2){margin-left:auto;margin-right:35px}.section-head span:last-child{font-size:18px;line-height:.6}.section-title{font-size:clamp(38px,4.5vw,70px);line-height:1.04;letter-spacing:-.05em;max-width:100%;margin-bottom:48px}.reveal-line{display:block;overflow:hidden;clip-path:inset(0)}.reveal-line>span{display:block}.thesis{min-height:100svh;padding-top:116px;display:flex;flex-direction:column}.thesis .section-head{margin-bottom:30px}.status{margin-bottom:28px}.thesis h1{font-size:clamp(90px,10vw,175px);font-weight:500;letter-spacing:-.073em;line-height:.99;flex:1;display:flex;flex-direction:column;justify-content:center}.thesis h1 span:last-child{color:#566b5e}.thesis-foot{display:flex;align-items:flex-end;justify-content:space-between;font-size:10px;margin-top:46px;letter-spacing:.03em}.arrow-link{font-size:32px;min-width:50px;min-height:50px;border:1px solid var(--line);display:grid;place-items:center}.product{border-top:1px solid var(--line);padding-bottom:50px}.product-intro{position:relative}.product .section-title{position:absolute;top:90px;z-index:2;max-width:44%;pointer-events:none}.cup-stage{position:relative;min-height:740px;height:85svh;max-height:950px;overflow:hidden;margin-top:-30px}.stage-grid{position:absolute;inset:8% 1%;background-image:linear-gradient(to right,var(--line) 1px,transparent 1px),linear-gradient(to bottom,var(--line) 1px,transparent 1px);background-size:25% 25%;opacity:.35}.cup-render{position:absolute;width:min(48%,460px);height:92%;left:49%;top:2%;mix-blend-mode:multiply;display:grid;place-items:center}.cup-render picture{display:block;width:100%;height:100%}.cup-render img{width:100%;height:100%;object-fit:contain}.cup-canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;visibility:hidden}.cup-canvas[data-ready=true]{visibility:visible}.cup-shadow{position:absolute;background:#172e28;width:24%;height:18px;left:59%;bottom:10%;border-radius:50%;filter:blur(12px);opacity:.09}.stage-corner{position:absolute}.top-left{left:0;top:48%}.bottom-left{left:0;bottom:5%}.bottom-right{right:0;bottom:5%}.gallery-region{margin-top:45px}.gallery-heading{display:flex;justify-content:space-between;align-items:center;padding:15px 0;border-top:1px solid var(--line);gap:20px}.gallery-heading>span:nth-child(2){margin-left:auto}.gallery-button{width:44px;height:44px;border:1px solid var(--line);font-size:19px}.gallery-button+button{border-left:0}.gallery{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain;scroll-behavior:auto}.gallery::-webkit-scrollbar{display:none}.drink{flex:0 0 calc((100% - 40px)/3);min-width:0;scroll-snap-align:start}.drink-image{position:relative;background:#eeeae0}.drink-image img{width:100%;height:auto;mix-blend-mode:multiply}.drink-code{position:absolute;top:18px;left:16px;z-index:1}.drink-description{padding-top:22px}.drink-name{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.drink-name h3{font-size:clamp(17px,1.6vw,24px);line-height:1.2;letter-spacing:-.025em;min-width:0}.price{font-size:14px;white-space:nowrap;padding-top:2px}.other-name{font-size:12px;color:var(--muted);margin-top:8px;min-height:32px}.tea-base{font-size:10px;min-height:44px;margin-top:15px}.specs{border-top:1px solid var(--line);font-size:9px}.specs>div{display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-bottom:1px solid var(--line)}.specs dt{color:var(--muted)}.specs dd{text-align:right}.assumption{font-size:11px;line-height:1.65;color:var(--muted);max-width:950px;margin-top:30px}.market{background:var(--ink);color:var(--paper);margin-top:36px}.market .section-head{border-color:#77877d}.market-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px}.market-card>.micro{color:#c4d0c8}.chart-values{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:32px}.chart-values strong{font-weight:400;font-size:clamp(32px,4.2vw,65px);letter-spacing:-.075em}.chart-values small{display:block;font-size:11px;margin-top:10px;color:#c4d0c8}.chart-values>span{font-size:24px}.data-chart{display:block;width:100%;height:120px;margin-top:25px;overflow:visible}.chart-grid{stroke:#66796f;stroke-width:.5;fill:none}.chart-line{stroke:var(--paper);stroke-width:2;fill:none}.chart-reveal{transform-origin:left}.market-caption{display:flex;justify-content:space-between;gap:12px;font-size:10px;margin-top:20px}.market-caption a,.market-bottom a{text-decoration:underline;text-underline-offset:4px}.market-bottom{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;border-top:1px solid #77877d;margin-top:55px;padding-top:28px}.market-bottom article{min-width:0;display:flex;flex-direction:column;gap:20px}.market-bottom strong{font-size:clamp(36px,4.5vw,68px);font-weight:400;letter-spacing:-.075em;line-height:1.1}.market-bottom strong .micro{display:block;letter-spacing:.06em;font-size:10px;margin-bottom:5px}.market-bottom a{font-size:10px;margin-top:auto}.source-foot{display:flex;justify-content:space-between;gap:25px;margin-top:50px;color:#c4d0c8;font-size:9px}.number{display:inline-block}.economics-scroll{height:180svh;position:relative}.economics-pin{position:sticky;top:100px;background:var(--paper);padding-bottom:16px}.model-toolbar{display:flex;justify-content:space-between;gap:20px;align-items:center;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:14px 0}.scenario-tabs{display:flex;gap:4px;flex-wrap:wrap}.scenario-tabs button,.currency button{font-size:10px;padding:10px 12px;min-height:40px}.scenario-tabs button[aria-pressed=true],.currency button[aria-pressed=true]{background:var(--ink);color:var(--paper)}.currency{display:flex;padding:0;border:1px solid var(--line);margin:0}.model-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:7%;padding:40px 0 28px}.sliders{display:flex;flex-direction:column;gap:24px}.sliders label>span{display:flex;justify-content:space-between;gap:15px;font-size:13px}.sliders output{font-size:13px;white-space:nowrap}.sliders input{display:block;width:100%;margin:12px 0 0;accent-color:var(--ink);height:22px;cursor:ew-resize}.ebitda{display:block;white-space:nowrap;font-weight:400;font-size:clamp(36px,4vw,64px);letter-spacing:-.055em;line-height:1.3;margin:10px 0 26px}.result-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px 20px}.result-grid>div:first-child{grid-column:1/-1}.result-grid dt{font-size:11px;color:var(--muted);margin-bottom:5px}.result-grid dd{font-size:17px}.model-bottom{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:12px;gap:15px}.model-bottom button{font-size:11px;padding:10px 0}.scenario-comparison{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:30px}.scenario-comparison article{border-top:1px solid var(--ink);padding-top:18px;min-width:0}.scenario-comparison h3{font-size:17px;margin-bottom:10px}.scenario-comparison dl{margin-top:20px}.scenario-comparison dl>div{display:flex;justify-content:space-between;gap:10px;font-size:11px;padding:9px 0;border-bottom:1px solid var(--line)}.model-assumptions{margin-top:40px}.model-assumptions .assumption{margin-top:10px}.baseline{display:flex;flex-wrap:wrap;gap:15px 40px;margin-top:25px}.scale{border-top:1px solid var(--line)}.format-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:35px}.format{border-top:1px solid var(--line);padding-top:15px;min-width:0}.format-heading{display:flex;justify-content:space-between;align-items:center;gap:15px}.format-heading h3{font-size:25px;letter-spacing:-.04em;margin-right:auto}.format-diagram{height:170px;display:flex;align-items:center;justify-content:center;padding:25px 10px}.format-diagram>div{border:1px solid var(--ink);height:80px;display:flex;align-items:center;justify-content:space-evenly;position:relative}.format-diagram>div:before{content:'';position:absolute;inset:-10px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.format-diagram i{height:15px;width:15px;border:1px solid var(--line)}.format dl>div{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-top:1px solid var(--line);font-size:11px}.format dl dd{font-size:15px;white-space:nowrap}.scale-repeat{margin-top:45px}.terms{background:#e8ebe2}.term-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:35px;margin-top:35px;padding:28px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.term-facts dt{font-size:10px;margin-bottom:13px}.term-facts dd{font-size:22px;letter-spacing:-.035em;line-height:1.2}.terms-grid{display:grid;grid-template-columns:1fr 1fr;gap:65px;margin-top:40px}.allocation{display:flex;height:24px;gap:3px;margin:22px 0;transform-origin:left}.allocation span{background:color-mix(in srgb,var(--ink),var(--paper) var(--tone))}.allocation-key li{font-size:11px;display:flex;justify-content:space-between;gap:15px;padding:8px 0;border-bottom:1px solid var(--line)}.gates{font-size:12px;display:flex;flex-direction:column;justify-content:space-between;gap:20px}.gates li{border-bottom:1px solid var(--line);padding:0 0 18px}.risks-title{margin-top:40px}.risks{display:grid;grid-template-columns:1fr 1fr;gap:0 40px;margin-top:15px}.risks>div{display:grid;grid-template-columns:30% 15px 1fr;gap:10px;font-size:12px;border-top:1px solid var(--line);padding:16px 0}.contact{padding-top:60px;padding-bottom:90px}.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:8%}.contact .section-title{font-size:clamp(36px,4vw,62px)}.download{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:22px 0;display:flex;justify-content:space-between;margin-top:50px;font-size:13px}.calendar-pending{display:block;margin-top:22px;color:var(--muted);font-size:12px}.investor-form{display:flex;flex-direction:column;gap:23px}.investor-form label:not(.check){display:flex;flex-direction:column;font-size:12px;gap:10px}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:22px}.investor-form input:not([type=checkbox]),.investor-form select{border:0;border-bottom:1px solid var(--muted);border-radius:0;background:transparent;min-height:42px;min-width:0;width:100%;padding:8px 0;color:var(--ink);font-size:16px}.check{display:flex;align-items:flex-start;gap:12px;font-size:12px;line-height:1.5}.check input{width:17px;height:17px;accent-color:var(--ink);margin:1px 0 0;flex-shrink:0}.cta{background:var(--ink);color:var(--paper);display:flex;align-items:center;justify-content:space-between;min-height:58px;padding:16px 22px;font-size:14px;transition:transform .3s var(--ease);text-align:left}.cta:active{transform:scale(.97)}.cta span{font-size:22px}.investor-form .assumption{margin-top:0}.privacy{font-size:10px;color:var(--muted);line-height:1.5}.honey{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}.form-error{font-size:12px;color:#8a2417}.confirmation{border:1px solid var(--line);padding:32px;min-height:350px;display:flex;flex-direction:column;justify-content:space-between;gap:28px}.confirmation h3{font-size:34px;letter-spacing:-.04em}.confirmation p{font-size:14px;line-height:1.6}.footer{padding:25px 5vw 25px 12vw;border-top:1px solid var(--line);display:flex;justify-content:space-between;font-size:10px;gap:20px}.page-wipe{position:fixed;inset:0;background:var(--ink);z-index:99;visibility:hidden;pointer-events:none}.error-page{min-height:100svh;padding:10vw;display:flex;flex-direction:column;justify-content:center;gap:30px}.error-page>span{font:100px var(--mono)}
@media(min-width:1024px){.gallery-region{height:190svh}.gallery-pin{position:sticky;top:100px}.gallery-heading{position:sticky;top:76px;background:var(--paper);z-index:3;height:65px}.gallery-pin{top:145px}.gallery{scroll-snap-type:none}.drink-image img{max-height:42svh;object-fit:contain}.drink-image{min-height:260px}.drink-code{top:12px}}
@media(min-width:1800px){.section{padding-right:8vw;padding-left:14vw}.thesis h1{font-size:185px}.thesis{min-height:1000px}.cup-stage{height:800px}.rail{left:4vw}.drink-image img{max-height:500px}.economics-pin{top:120px}.model-grid{padding:55px 0}.section-title{font-size:78px}}
@media(max-width:1023px){.rail{display:none}.section{padding-left:5vw}.footer{padding-left:5vw}.topbar{padding:0 5vw}.section-head{margin-bottom:45px}.thesis{padding-top:116px}.thesis h1{font-size:13vw}.cup-stage{min-height:600px}.cup-render{left:45%;width:52%}.product .section-title{max-width:50%;font-size:5.5vw}.drink{flex-basis:46%}.market-grid{gap:30px}.market-caption{flex-direction:column}.terms-grid{gap:35px}.model-toolbar{gap:10px}.scenario-tabs button{font-size:9px;padding:8px}.format-grid{gap:20px}.scenario-comparison{gap:20px}}
@media(max-width:767px){html{scroll-padding-top:72px}.topbar{height:64px;padding:0 20px;gap:16px}.wordmark{font-size:29px}.edition{display:none}.topbar nav{gap:16px;font-size:11px}.language{padding-left:16px}.top-progress{top:63px}.section{padding:38px 20px 52px;scroll-margin-top:64px}.section-head{font-size:10px;padding-top:12px;margin-bottom:38px}.section-head span:nth-child(2){margin-right:20px}.section-title{font-size:clamp(34px,8vw,53px);margin-bottom:32px;line-height:1.08;letter-spacing:-.047em}.thesis{padding-top:96px;min-height:100svh;max-height:1000px;padding-bottom:25px}.thesis .section-head{margin-bottom:26px}.status{font-size:9px;margin-bottom:30px}.thesis h1{font-size:clamp(58px,13.65vw,103px);line-height:1.08;letter-spacing:-.065em}.thesis-foot{font-size:8px;gap:14px;align-items:flex-end;margin-top:35px}.thesis-foot span{max-width:115px;line-height:1.6}.arrow-link{font-size:26px;min-width:42px;min-height:42px}.product .section-title{position:relative;top:auto;max-width:100%;font-size:clamp(36px,9vw,54px);z-index:1}.cup-stage{height:65svh;min-height:430px;max-height:650px;margin-top:-15px}.cup-render{left:9%;width:82%;height:96%;top:0}.stage-grid{inset:3% 0 9%;background-size:25% 25%}.cup-shadow{left:29%;width:45%;bottom:8%}.top-left{top:4%;font-size:8px}.bottom-left{bottom:0;font-size:8px}.bottom-right{bottom:0;font-size:8px}.gallery-region{margin-top:35px}.gallery-heading{gap:15px}.gallery-heading .micro{font-size:9px}.gallery-button{height:40px;width:40px}.gallery{margin-right:-20px;padding-right:20px;gap:16px;scroll-padding-right:20px}.drink{flex-basis:86%;scroll-snap-stop:normal}.drink-image img{max-height:52svh;object-fit:contain}.drink-code{font-size:9px}.drink-name h3{font-size:23px}.drink-description{padding-top:20px}.other-name{font-size:12px;min-height:20px}.tea-base{font-size:9px;min-height:30px}.specs{font-size:9px}.price{font-size:15px}.assumption{font-size:10px;margin-top:24px}.market{margin-top:0}.market-grid{grid-template-columns:1fr;gap:40px}.chart-values{margin-top:20px}.chart-values strong{font-size:42px;letter-spacing:-.07em}.chart-values small{font-size:10px;margin-top:6px}.data-chart{height:86px;margin-top:15px}.market-caption{flex-direction:row;font-size:9px;margin-top:12px;align-items:flex-start}.market-caption a{text-align:right;max-width:52%}.market-bottom{gap:20px 15px;margin-top:35px;padding-top:24px;grid-template-columns:1fr 1fr}.market-bottom article:last-child{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;align-items:center}.market-bottom article:last-child strong{grid-column:2;grid-row:1/3;text-align:right}.market-bottom article:last-child a{grid-column:1}.market-bottom article>.micro{font-size:9px}.market-bottom article{gap:16px}.market-bottom strong{font-size:38px}.market-bottom a{font-size:8px}.source-foot{flex-direction:column;font-size:8px;gap:10px;margin-top:30px}.economics-scroll{height:180svh}.economics-pin{top:76px}.model-toolbar{flex-wrap:wrap;padding:10px 0;gap:8px}.scenario-tabs{width:100%;justify-content:space-between;gap:0}.scenario-tabs button{font-size:8px;padding:8px 6px;min-height:35px}.currency{margin-left:auto}.currency button{font-size:9px;padding:5px 12px;min-height:28px}.model-grid{display:flex;flex-direction:column-reverse;gap:22px;padding:20px 0 16px}.results .micro{font-size:9px}.ebitda{font-size:clamp(33px,9vw,49px);margin:5px 0 15px}.result-grid{grid-template-columns:repeat(3,1fr);gap:12px 10px}.result-grid>div:first-child{grid-column:auto}.result-grid dt{font-size:8px;line-height:1.4}.result-grid dd{font-size:11px}.result-grid>div:nth-child(4),.result-grid>div:nth-child(5){grid-column:auto}.sliders{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px}.sliders label>span{font-size:9px;gap:6px;flex-wrap:wrap;min-height:30px;align-items:flex-start}.sliders output{font-size:10px}.sliders input{margin-top:3px;height:24px}.model-bottom{font-size:8px;padding-top:6px}.model-bottom button{font-size:9px;min-height:40px}.scenario-comparison{grid-template-columns:1fr;gap:22px;margin-top:20px}.scenario-comparison article{display:grid;grid-template-columns:1fr 1.4fr;gap:0 20px}.scenario-comparison h3{font-size:16px;grid-column:1}.scenario-comparison .micro{font-size:9px;grid-column:1}.scenario-comparison dl{grid-column:2;grid-row:1/3;margin-top:0}.scenario-comparison dl>div{font-size:9px;padding:7px 0}.model-assumptions{margin-top:28px}.model-assumptions>.micro{font-size:9px}.baseline{font-size:9px;gap:10px}.format-grid{grid-template-columns:1fr;gap:30px}.format-heading h3{font-size:26px}.format-diagram{height:105px;padding:22px 0}.format-diagram>div{height:60px;max-width:220px}.format dl{display:grid;grid-template-columns:1fr 1fr;gap:0 25px}.format dl>div{font-size:8px;padding:11px 0;gap:7px}.format dl dd{font-size:13px}.scale-repeat{font-size:9px;margin-top:28px}.term-facts{grid-template-columns:1fr;gap:22px;margin-top:20px;padding:22px 0}.term-facts>div{display:grid;grid-template-columns:1fr 1.3fr;gap:20px;align-items:start}.term-facts dt{font-size:9px;margin:0}.term-facts dd{font-size:19px}.terms-grid{grid-template-columns:1fr;gap:32px;margin-top:25px}.terms-grid h3{font-size:10px}.allocation{margin:18px 0;height:18px}.allocation-key li{font-size:10px}.gates{font-size:10px;gap:15px}.gates li{padding-bottom:14px}.risks{grid-template-columns:1fr}.risks>div{font-size:11px}.contact-grid{grid-template-columns:1fr;gap:40px}.contact .section-title{font-size:clamp(34px,8vw,49px)}.download{margin-top:25px;padding:18px 0;font-size:12px}.calendar-pending{margin-top:15px;font-size:11px}.investor-form{gap:20px}.form-row{grid-template-columns:1fr;gap:20px}.investor-form label:not(.check){font-size:11px}.check{font-size:11px}.cta{font-size:13px;min-height:56px}.footer{font-size:8px;padding:22px 20px;flex-wrap:wrap;gap:12px}.footer span:last-child{margin-left:auto}.confirmation h3{font-size:29px}.confirmation{padding:24px}.contact{padding-bottom:50px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.economics-scroll,.gallery-region{height:auto!important}.economics-pin,.gallery-pin,.gallery-heading{position:relative;top:auto}.gallery{scroll-snap-type:x mandatory}.cup-canvas{display:none}.cup-liquid{transform:scaleY(1)!important}.top-progress i{transform:scaleX(1)!important}.cta:active{transform:none}.page-wipe{display:none}}
````

## src/app/investors/page.tsx

````tsx
import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("uk");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("uk","investors"),languages:{uk:origin+pathFor("uk","investors"),en:origin+pathFor("en","investors")}}};
export default function Page(){return <System locale="uk" view="investors"/>;}
````

## src/app/layout.tsx

````tsx
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import uk from '../../content/uk.json';
import { origin } from '@/lib/content';
import './globals.css';
const sans = IBM_Plex_Sans({ subsets:['latin','cyrillic'], weight:['400','500','600'], variable:'--sans', display:'swap' });
const mono = IBM_Plex_Mono({ subsets:['latin','cyrillic'], weight:'400', variable:'--mono', display:'swap' });
export const metadata: Metadata = { metadataBase:new URL(origin),title:uk.metadata.title,description:uk.metadata.description,icons:{icon:'/favicon.svg'} };
export const viewport: Viewport = { themeColor:'#f3f1ea',width:'device-width',initialScale:1 };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="uk" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning><body>{children}</body></html>; }
````

## src/app/manifest.ts

````typescript
export const dynamic = "force-static";
export default function manifest(){return {name:'XoXo Tea',short_name:'XoXo',start_url:'/',display:'standalone' as const,background_color:'#f3f1ea',theme_color:'#172e28',icons:[{src:'/favicon.svg',sizes:'any',type:'image/svg+xml'}]};}
````

## src/app/menu/page.tsx

````tsx
import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("uk");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("uk","menu"),languages:{uk:origin+pathFor("uk","menu"),en:origin+pathFor("en","menu")}}};
export default function Page(){return <System locale="uk" view="menu"/>;}
````

## src/app/not-found.tsx

````tsx
import Link from 'next/link';
import uk from '../../content/uk.json';
export default function NotFound(){return <main className="error-page"><span>404</span><h1>{uk.notFound}</h1><Link href="/">{uk.back}</Link></main>;}
````

## src/app/page.tsx

````tsx
import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("uk");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("uk",""),languages:{uk:origin+pathFor("uk",""),en:origin+pathFor("en","")}}};
export default function Page(){return <System locale="uk" view="all"/>;}
````

## src/app/robots.ts

````typescript
export const dynamic = "force-static";
import { origin } from '@/lib/content';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},sitemap:origin+'/sitemap.xml'};}
````

## src/app/sitemap.ts

````typescript
export const dynamic = "force-static";
import {origin,pathFor} from '@/lib/content';
export default function sitemap(){return (['uk','en'] as const).flatMap(lang=>['','menu','investors'].map(p=>({url:origin+pathFor(lang,p),lastModified:new Date('2026-09-13'),alternates:{languages:{uk:origin+pathFor('uk',p),en:origin+pathFor('en',p)}}})));}
````

## src/components/v2/Contact.tsx

````tsx
'use client';
import {useRef,useState,type FormEvent} from 'react';
import type {Copy} from '@/lib/content';
export function Contact({c}:{c:Copy['contact']}){
 const [state,setState]=useState('idle'),[error,setError]=useState('');const heading=useRef<HTMLHeadingElement>(null); const endpoint=process.env.NEXT_PUBLIC_LEAD_ENDPOINT||'';
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const f=e.currentTarget;const data=new FormData(f); const name=String(data.get('name')||'').trim(),contact=String(data.get('contact')||'').trim();if(!name||!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)||/^@[A-Za-z][A-Za-z0-9_]{4,31}$/.test(contact))){setError(c.invalid);return;}if(data.get('website'))return;setError('');setState('sending');const params=new URLSearchParams(location.search);const payload={name,contact,organization:String(data.get('organization')||'').trim(),ticket:String(data.get('ticket')),dataRoom:data.get('dataRoom')==='on',consent:true,ref:params.get('ref')||'',utm:Object.fromEntries([...params.entries()].filter(([k])=>k.startsWith('utm_')))};
 try{if(endpoint){const result=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(12000)});if(!result.ok)throw new Error();setState('sent');}else{const url=URL.createObjectURL(new Blob([c.notSent+'\n\n'+JSON.stringify(payload,null,2)],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=c.file;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setState('prepared');}requestAnimationFrame(()=>heading.current?.focus());}catch{setState('idle');setError(c.error);}}
 if(state==='prepared'||state==='sent')return <div className="confirmation" role="status"><span className="micro">07 / 01</span><h3 tabIndex={-1} ref={heading}>{state==='sent'?c.sent:c.success}</h3><p>{state==='sent'?c.sentBody:c.successBody}</p><button className="cta" onClick={()=>setState('idle')}>{c.again} ↗</button></div>;
 return <form className="investor-form" onSubmit={submit}><div className="form-row"><label>{c.name}<input name="name" autoComplete="name" required maxLength={100}/></label><label>{c.org}<input name="organization" autoComplete="organization" maxLength={150}/></label></div><label>{c.email}<input name="contact" required autoComplete="email" maxLength={254}/></label><label>{c.range}<select name="ticket">{c.ranges.map(x=><option key={x}>{x}</option>)}</select></label><label className="check"><input type="checkbox" name="dataRoom"/>{c.room}</label><label className="check"><input type="checkbox" name="consent" required/>{c.consent}</label><div className="honey" aria-hidden="true"><label>{c.trap}<input name="website" tabIndex={-1} autoComplete="off"/></label></div>{error&&<p role="alert" className="form-error">{error}</p>}<button className="cta magnet" disabled={state==='sending'}>{state==='sending'?c.sending:endpoint?c.send:c.submit}<span aria-hidden="true">↗</span></button>{!endpoint&&<p className="assumption">{c.notice}</p>}<p className="privacy">{c.privacy}</p></form>;
}
````

## src/components/v2/CupSequence.tsx

````tsx
'use client';
import {useEffect,useRef} from 'react';
// A generated sequence is deliberately optional. Never fabricate turntable views from a flat photograph.
export function CupSequence({alt,label}:{alt:string;label:string}){const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{const el=canvas.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let stopped=false;const bitmaps:ImageBitmap[]=[];let frame=0;const stage=el.closest('[data-cup-stage]');let controller:AbortController|undefined;
 const draw=(e:Event)=>{frame=(e as CustomEvent<number>).detail;const b=bitmaps[frame];if(!b||reduced.matches)return;const ctx=el.getContext('2d');if(ctx){el.width=b.width;el.height=b.height;ctx.drawImage(b,0,0);el.dataset.ready='true';}};
 const observer=new IntersectionObserver(async entries=>{if(!entries.some(x=>x.isIntersecting)||reduced.matches)return;observer.disconnect();controller=new AbortController();try{const res=await fetch('/sequence/manifest.json',{signal:controller.signal});const manifest=await res.json();if(!Array.isArray(manifest.frames)||manifest.frames.length!==36)return;for(let i=0;i<36;i++){if(stopped||reduced.matches)break;const blob=await fetch(manifest.frames[i],{signal:controller.signal}).then(r=>r.blob());bitmaps[i]=await createImageBitmap(blob);draw(new CustomEvent('cupframe',{detail:frame}));await new Promise<void>(r=>requestAnimationFrame(()=>r()));}}catch{/* Static product photography remains available. */}},{rootMargin:'100px'});
 const change=()=>{if(reduced.matches){controller?.abort();el.dataset.ready='false';}else if(stage)observer.observe(stage);};if(stage){observer.observe(stage);stage.addEventListener('cupframe',draw);}reduced.addEventListener('change',change);return()=>{stopped=true;controller?.abort();observer.disconnect();stage?.removeEventListener('cupframe',draw);reduced.removeEventListener('change',change);bitmaps.forEach(b=>b.close());};},[]);
 return <><picture><source type="image/avif" srcSet="/drinks/drink-0-480.avif 480w, /drinks/drink-0-960.avif 960w" sizes="(max-width: 767px) 82vw, 440px"/><img src="/drinks/drink-0-480.webp" width="720" height="960" loading="lazy" decoding="async" alt={alt}/></picture><canvas ref={canvas} className="cup-canvas" width={900} height={1200} role="img" aria-label={label}/></>;
}
````

## src/components/v2/Economics.tsx

````tsx
'use client';
import {useEffect,useRef,useState} from 'react';
import {calculate,defaults,scenarios,formatMoney,model,type Inputs} from '@/lib/store-model';
import type {Copy,Locale} from '@/lib/content';
export function Economics({c,extra,locale}:{c:Copy['economics'];extra:Copy['economicsExtra'];locale:Locale}){
 const [inputs,setInputs]=useState(defaults),[usd,setUsd]=useState(false),[active,setActive]=useState(1),[custom,setCustom]=useState(false); const ref=useRef<HTMLDivElement>(null);
 const result=calculate(inputs);const money=(n:number)=>formatMoney(n,locale,usd);
 useEffect(()=>{const el=ref.current;if(!el)return;const update=(event:Event)=>{if(custom)return;const i=(event as CustomEvent<number>).detail;setActive(i);setInputs(scenarios[i]);};el.addEventListener('scenario',update);return()=>el.removeEventListener('scenario',update);},[custom]);
 const fields=[{key:'cups',min:30,max:350,step:5},{key:'ticket',min:120,max:260,step:5},{key:'rent',min:15000,max:120000,step:5000},{key:'staff',min:100000,max:350000,step:10000}] as const;
 const choose=(i:number)=>{setActive(i);setInputs(scenarios[i]);setCustom(true);};
 return <><div className="economics-scroll" data-economics ref={ref}><div className="economics-pin"><div className="model-toolbar"><div className="scenario-tabs" role="group" aria-label={extra.scenario}>{[1,0,2].map(i=><button key={i} type="button" aria-pressed={!custom&&active===i||custom&&active===i} onClick={()=>choose(i)}>{c.scenarios[i]}</button>)}</div><fieldset className="currency"><legend className="sr-only">{c.currency}</legend><button type="button" aria-pressed={!usd} onClick={()=>setUsd(false)}>{c.uah}</button><button type="button" aria-pressed={usd} onClick={()=>setUsd(true)}>{c.usd}</button></fieldset></div><div className="model-grid"><div className="sliders">{fields.map(f=><label key={f.key} htmlFor={f.key}><span>{c[f.key]}<output htmlFor={f.key}>{f.key==='cups'?inputs[f.key]:money(inputs[f.key])}</output></span><input id={f.key} type="range" min={f.min} max={f.max} step={f.step} value={inputs[f.key]} aria-valuetext={f.key==='cups'?String(inputs[f.key]):money(inputs[f.key])} onChange={e=>{setCustom(true);setActive(-1);setInputs({...inputs,[f.key]:Number(e.target.value)} as Inputs);}}/></label>)}</div><div className="results"><p className="micro">{c.ebitda} / {extra.period}</p><strong className="ebitda" data-ebitda>{money(result.ebitda)}</strong><dl className="result-grid">{[[c.revenue,money(result.revenue)],[c.gross,`${(result.grossMargin*100).toLocaleString(locale,{maximumFractionDigits:1})}%`],[c.contribution,money(result.contribution)],[c.payback,result.payback===null?c.none:result.payback.toLocaleString(locale,{maximumFractionDigits:1})],[c.breakEven,result.breakEven??c.none]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></div><div className="model-bottom micro"><span>{custom?extra.custom:extra.scroll}</span><button type="button" onClick={()=>{setCustom(false);setInputs(defaults);setActive(1);}}>{extra.reset} ↺</button></div></div></div><div className="scenario-comparison">{[1,0,2].map(i=>{const s=scenarios[i],v=calculate(s);return <article key={i}><h3>{c.scenarios[i]}</h3><div className="micro">{s.cups} / {money(s.ticket)}</div><dl><div><dt>{c.revenue}</dt><dd>{money(v.revenue)}</dd></div><div><dt>{c.ebitda}</dt><dd>{money(v.ebitda)}</dd></div><div><dt>{c.payback}</dt><dd>{v.payback?.toLocaleString(locale,{maximumFractionDigits:1})??c.none}</dd></div></dl></article>})}</div><div className="model-assumptions"><p className="micro">{extra.tag}</p><p className="assumption">{c.assumptions}</p><p className="assumption">{c.explanation}</p><div className="baseline micro"><span>{extra.funding} / {money(model.funding)}</span><span>{extra.exchange} / 42 UAH = 1 USD</span></div></div></>;
}
````

## src/components/v2/Runtime.tsx

````tsx
'use client';
import {useEffect} from 'react';
import type {Locale} from '@/lib/content';
export function Runtime({locale}:{locale:Locale}){
 useEffect(()=>{
 document.documentElement.lang=locale;const root=document.documentElement;const reduced=matchMedia('(prefers-reduced-motion: reduce)');const fine=matchMedia('(hover: hover) and (pointer: fine)');let raf=0,disposed=false;const animations=new Set<Animation>();const cleanup:(()=>void)[]=[];let scenario=-1;
 const all=<T extends Element=HTMLElement>(s:string)=>Array.from(document.querySelectorAll<T>(s));
 const sections=all<HTMLElement>('main > section');const cup=document.querySelector<HTMLElement>('[data-cup-stage]');const econ=document.querySelector<HTMLElement>('[data-economics]');const gallery=document.querySelector<HTMLElement>('.gallery');const galleryRegion=document.querySelector<HTMLElement>('.gallery-region');const progress=all<HTMLElement>('.top-progress i,.cup-liquid');const progressLabel=document.querySelector('[data-progress-label]');const counters=all<HTMLElement>('[data-count]');
 const play=(el:HTMLElement,frames:Keyframe[],duration=450,delay=0)=>{el.style.willChange='transform';const a=el.animate(frames,{duration,delay,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});animations.add(a);a.finished.catch(()=>{}).finally(()=>{animations.delete(a);el.style.willChange='';});};
 const reveal=new IntersectionObserver(entries=>{for(const {target,isIntersecting} of entries){if(!isIntersecting)continue;reveal.unobserve(target);if(reduced.matches)continue;const el=target as HTMLElement;if(el.matches('.section-title')){el.querySelectorAll<HTMLElement>('.reveal-line>span').forEach((line,i)=>play(line,[{transform:'translateY(110%)'},{transform:'translateY(0)'}],450,i*60));}else if(el.matches('[data-count]')){el.style.minWidth=el.getBoundingClientRect().width+'px';const v=Number(el.dataset.count),dec=Number(el.dataset.decimals||0),suffix=el.dataset.suffix||'';let start:number|undefined;const fmt=new Intl.NumberFormat(locale,{minimumFractionDigits:dec,maximumFractionDigits:dec});const update=(now:number)=>{if(disposed||reduced.matches){el.textContent=fmt.format(v)+suffix;return;}start??=now;const p=Math.min((now-start)/500,1),eased=1-Math.pow(1-p,3);el.textContent=fmt.format(v*eased)+suffix;if(p<1)requestAnimationFrame(update);};requestAnimationFrame(update);}else{play(el,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}]);}}},{threshold:.15});
 all('.section-title,.section-head,.chart-reveal,.allocation,[data-count]').forEach(e=>reveal.observe(e));
 const updateGallery=()=>{if(!gallery)return;const step=(gallery.firstElementChild as HTMLElement)?.offsetWidth+20;const i=Math.min(5,Math.max(0,Math.round(gallery.scrollLeft/step)));const label=document.querySelector('[data-gallery-index]');if(label)label.textContent=String(i+1).padStart(2,'0');};
 const update=()=>{raf=0;if(disposed)return;const h=innerHeight,p=Math.max(0,Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-h)));if(!reduced.matches){progress.forEach(el=>el.style.transform=el.classList.contains('cup-liquid')?`scaleY(${p})`:`scaleX(${p})`);if(progressLabel)progressLabel.textContent=String(Math.round(p*100)).padStart(2,'0')+'%';}
 let active=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<h*.45)active=s.id;}all<HTMLAnchorElement>('[data-section-link]').forEach(a=>{if(a.dataset.sectionLink===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 if(cup&&!reduced.matches){const box=cup.getBoundingClientRect();if(box.bottom>0&&box.top<h){const q=Math.max(0,Math.min(1,(h-box.top)/(h+box.height)));cup.querySelectorAll<HTMLElement>('[data-depth]').forEach(el=>el.style.transform=`translate3d(0,${(q-.5)*40*Number(el.dataset.depth)}px,0)`);const f=Math.min(35,Math.floor(q*36));cup.dispatchEvent(new CustomEvent('cupframe',{detail:f}));if(cup.querySelector('[data-ready="true"]')){const angle=document.querySelector('[data-angle]');if(angle)angle.textContent=String(f*10).padStart(3,'0')+'°';}}}
 if(econ&&!reduced.matches){const b=econ.getBoundingClientRect(),q=Math.max(0,Math.min(.999,-b.top/Math.max(1,b.height-h))),i=[1,0,2][Math.floor(q*3)];if(b.top<h&&b.bottom>0&&i!==scenario){scenario=i;econ.dispatchEvent(new CustomEvent('scenario',{detail:i}));}}
 if(gallery&&galleryRegion&&innerWidth>=1024&&!reduced.matches){const b=galleryRegion.getBoundingClientRect();if(b.top<90&&b.bottom>h*.5){const q=Math.max(0,Math.min(1,(90-b.top)/Math.max(1,b.height-h)));gallery.scrollLeft=q*(gallery.scrollWidth-gallery.clientWidth);updateGallery();}}
 };const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});gallery?.addEventListener('scroll',updateGallery,{passive:true});
 const change=()=>{root.dataset.reduced=String(reduced.matches);if(reduced.matches){animations.forEach(a=>a.cancel());all<HTMLElement>('[data-depth]').forEach(e=>e.style.transform='');counters.forEach(el=>el.textContent=new Intl.NumberFormat(locale,{maximumFractionDigits:Number(el.dataset.decimals||0),minimumFractionDigits:Number(el.dataset.decimals||0)}).format(Number(el.dataset.count))+(el.dataset.suffix||''));progress.forEach(e=>e.style.transform='');}onScroll();};reduced.addEventListener('change',change);change();
 for(const [selector,dir] of [['[data-gallery-prev]',-1],['[data-gallery-next]',1]] as const){const b=document.querySelector(selector);const handler=()=>{if(gallery)gallery.scrollBy({left:dir*((gallery.firstElementChild as HTMLElement).offsetWidth+20),behavior:reduced.matches?'instant':'smooth'});};b?.addEventListener('click',handler);cleanup.push(()=>b?.removeEventListener('click',handler));}
 all<HTMLElement>('.magnet').forEach(el=>{const move=(e:PointerEvent)=>{if(reduced.matches||!fine.matches)return;const b=el.getBoundingClientRect();el.style.willChange='transform';el.style.transform=`translate3d(${(e.clientX-b.left-b.width/2)*.08}px,${(e.clientY-b.top-b.height/2)*.12}px,0)`;};const leave=()=>{el.style.transform='';el.style.willChange='';};const down=()=>{if(reduced.matches)return;el.style.transform='scale(.97)';};const up=()=>{if(reduced.matches)return;import('framer-motion/dom/mini').then(({animate})=>{if(!disposed)animate(el,{transform:'scale(1)'},{duration:.3,ease:[.22,1,.36,1]});});};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',leave);el.addEventListener('pointerdown',down);el.addEventListener('pointerup',up);cleanup.push(()=>{el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave);el.removeEventListener('pointerdown',down);el.removeEventListener('pointerup',up);});});
 const navigate=(e:MouseEvent)=>{const a=(e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');if(!a||a.hasAttribute('download')||a.target||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||reduced.matches)return;const u=new URL(a.href);if(u.origin!==location.origin||u.pathname===location.pathname)return;e.preventDefault();const wipe=document.querySelector<HTMLElement>('.page-wipe');if(!wipe){location.assign(u.href);return;}wipe.style.transform='translateY(100%)';wipe.style.visibility='visible';const animation=wipe.animate([{transform:'translateY(100%)'},{transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});animation.finished.then(()=>{sessionStorage.setItem('xoxo-transition','1');location.assign(u.href);});};document.addEventListener('click',navigate);
 const wipe=document.querySelector<HTMLElement>('.page-wipe');if(wipe&&sessionStorage.getItem('xoxo-transition')){sessionStorage.removeItem('xoxo-transition');if(!reduced.matches){wipe.style.visibility='visible';const a=wipe.animate([{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:350,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});a.finished.then(()=>wipe.style.visibility='hidden');}}
 return()=>{disposed=true;cancelAnimationFrame(raf);reveal.disconnect();animations.forEach(a=>a.cancel());removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll);gallery?.removeEventListener('scroll',updateGallery);reduced.removeEventListener('change',change);document.removeEventListener('click',navigate);cleanup.forEach(f=>f());};
 },[locale]);return null;
}
````

## src/components/v2/System.tsx

````tsx
import type { CSSProperties } from 'react';
import { getCopy, pathFor, type Copy, type Locale } from '@/lib/content';
import { calculate, scenarios, model, formatMoney } from '@/lib/store-model';
import { Runtime } from './Runtime';
import { Economics } from './Economics';
import { Contact } from './Contact';
import { CupSequence } from './CupSequence';
const ids=['thesis','product','market','economics','scale','terms','contact'];
export function Title({lines}:{lines:string[]}){return <h2 className="section-title">{lines.map((line,i)=><span className="reveal-line" key={line}><span style={{'--delay':`${i*60}ms`} as CSSProperties}>{line}</span></span>)}</h2>}
function Head({i,c}:{i:number;c:Copy}){return <div className="section-head"><span>{String(i+1).padStart(2,'0')} / 07</span><span>{c.sections[i]}</span><span aria-hidden="true">+</span></div>}
function Num({v,decimals=0,suffix='',locale}:{v:number;decimals?:number;suffix?:string;locale:Locale}){const n=new Intl.NumberFormat(locale,{maximumFractionDigits:decimals,minimumFractionDigits:decimals}).format(v);return <span className="number" data-count={v} data-decimals={decimals} data-suffix={suffix}>{n}{suffix}</span>}
export function System({locale='uk',view='all'}:{locale?:Locale;view?:'all'|'menu'|'investors'}){
 const c=getCopy(locale); const visible=(id:string)=>view==='all'||(view==='menu'?['product','contact'].includes(id):['market','economics','scale','terms','contact'].includes(id));
 const here=view==='all'?'':view; const home=pathFor(locale);
 return <div lang={locale} className="system"><Runtime locale={locale}/><a href="#main" className="skip">{c.nav.skip}</a>
 <header className="topbar"><a href={home} className="wordmark" aria-label={c.brand+' / '+c.nav.home}>{c.brand}</a><span className="edition">{c.edition}</span><nav aria-label={c.nav.label}><a href={pathFor(locale,'menu')}>{c.nav.menu}</a><a href={pathFor(locale,'investors')}>{c.nav.investors}</a><a href={pathFor(locale==='uk'?'en':'uk',here)} className="language" hrefLang={locale==='uk'?'en':'uk'}>{locale==='uk'?'EN':'UA'}</a></nav></header>
 <aside className="rail"><nav aria-label={c.nav.label}>{ids.filter(visible).map(id=><a key={id} href={`#${id}`} data-section-link={id}><span>{String(ids.indexOf(id)+1).padStart(2,'0')}</span><span>{c.sections[ids.indexOf(id)]}</span></a>)}</nav><div className="progress-cup" aria-hidden="true"><svg viewBox="0 0 32 52"><defs><clipPath id="cup-clip"><path d="M6 14h20l-3 33H9z"/></clipPath></defs><g clipPath="url(#cup-clip)"><rect className="cup-liquid" x="4" y="14" width="24" height="35"/></g><path d="M6 14h20l-3 33H9zM4 14h24M7 11q9-15 18 0M17 12l3-11" fill="none" stroke="currentColor" strokeWidth="1"/></svg><span data-progress-label>00%</span></div></aside>
 <div className="top-progress" aria-hidden="true"><i/></div><main id="main">
 {visible('thesis')&&<section id="thesis" className="section thesis"><Head i={0} c={c}/><p className="micro status">{c.status}</p><h1>{c.thesis.map(line=><span key={line}>{line}</span>)}</h1><div className="thesis-foot"><span>{c.thesisFoot[0]}</span><span>{c.thesisFoot[1]}</span><a className="magnet arrow-link" href="#product" aria-label={c.sections[1]}>↓</a></div></section>}
 {visible('product')&&<section id="product" className="section product"><div className="product-intro"><Head i={1} c={c}/><Title lines={c.product.title}/><div className="cup-stage" data-cup-stage><div className="stage-grid" data-depth="0.25" aria-hidden="true"/><div className="cup-shadow" data-depth="0.6" aria-hidden="true"/><div className="cup-render" data-depth="1"><CupSequence alt={c.product.alt} label={c.product.rotate}/></div><div className="stage-corner top-left micro">{c.product.subtitle}</div><div className="stage-corner bottom-left micro">{c.product.rotate}</div><div className="stage-corner bottom-right micro">{c.product.angle} / <span data-angle>000°</span></div></div></div>
 <div className="gallery-region"><div className="gallery-heading"><span className="micro">{c.product.collection}</span><span className="micro"><span data-gallery-index>01</span> / 06</span><div><button className="gallery-button" data-gallery-prev aria-label={c.product.previous}>←</button><button className="gallery-button" data-gallery-next aria-label={c.product.next}>→</button></div></div><div className="gallery-pin"><div className="gallery" tabIndex={0} aria-label={c.product.collection}>{c.product.drinks.map((d,i)=><article className="drink" key={d.name}><div className="drink-image"><span className="drink-code micro">D / {String(i+1).padStart(2,'0')}</span><picture><source type="image/avif" srcSet={`/drinks/drink-${i}-480.avif 480w, /drinks/drink-${i}-960.avif 960w`} sizes="(max-width: 767px) 82vw, 32vw"/><img src={`/drinks/drink-${i}-480.webp`} srcSet={`/drinks/drink-${i}-480.webp 480w, /drinks/drink-${i}-960.webp 960w`} sizes="(max-width: 767px) 82vw, 32vw" width="720" height="960" loading="lazy" decoding="async" alt={`${d.name}. ${c.product.alt}`}/></picture></div><div className="drink-description"><div className="drink-name"><h3>{d.name}</h3><span className="price">{d.price} ₴</span></div><p className="other-name">{d.other}</p><p className="micro tea-base">{d.tea}</p><dl className="specs"><div><dt>{c.product.volume}</dt><dd>{c.units.volume}</dd></div><div><dt>{c.product.energy}</dt><dd>{c.product.kcal}</dd></div><div><dt>{c.product.sugar}</dt><dd>{c.units.sugar}</dd></div></dl></div></article>)}</div></div></div><p className="assumption">{c.product.assumption}</p></section>}
 {visible('market')&&<section id="market" className="section market"><Head i={2} c={c}/><Title lines={c.market.title}/><div className="market-grid">{[{label:c.market.world,from:3.35,to:3.62,y1:'2025',y2:'2026',cagr:8.4,source:0,decimals:2},{label:c.market.europe,from:727.2,to:1262.6,y1:'2026',y2:'2033',cagr:8.2,source:1,decimals:1}].map((x,i)=><article key={x.label} className="market-card"><p className="micro">{x.label}</p><div className="chart-values"><div><strong><Num v={x.from} decimals={x.decimals} locale={locale}/></strong><small>{x.y1}</small></div><span aria-hidden="true">→</span><div><strong><Num v={x.to} decimals={x.decimals} locale={locale}/></strong><small>{x.y2}</small></div></div><svg className="data-chart" viewBox="0 0 500 100" role="img" aria-label={c.market.chart}><path className="chart-grid" d="M0 24H500M0 60H500M0 96H500M1 0V100M166 0V100M333 0V100M499 0V100"/><g className="chart-reveal"><path className="chart-line" d={i===0?'M1 80L80 77L166 64L250 53L333 42L415 30L499 12':'M1 90L80 80L166 74L250 55L333 46L415 20L499 6'}/></g></svg><div className="market-caption"><span><Num v={x.cagr} decimals={1} suffix="%" locale={locale}/> {c.market.cagr}</span><a href={c.sources[x.source].url} target="_blank" rel="noreferrer">{c.sources[x.source].name} ↗</a></div></article>)}</div><div className="market-bottom"><article><span className="micro">{c.market.eu}</span><strong><Num v={10} suffix="%" locale={locale}/></strong><a href={c.sources[2].url} target="_blank" rel="noreferrer">{c.sources[2].name} ↗</a></article><article><span className="micro">{c.market.stores}</span><strong><Num v={4000} suffix="+" locale={locale}/></strong><a href={c.sources[3].url} target="_blank" rel="noreferrer">{c.sources[3].name} ↗</a></article><article><span className="micro">{c.market.overseas}</span><strong><span className="micro">{c.market.nearly} </span><Num v={600} suffix="%" locale={locale}/></strong><a href={c.sources[4].url} target="_blank" rel="noreferrer">{c.sources[4].name} ↗</a></article></div><div className="source-foot micro"><span>{c.market.forecast}</span><span>{c.market.historical}</span></div></section>}
 {visible('economics')&&<section id="economics" className="section economics"><Head i={3} c={c}/><Title lines={c.economicsTitle}/><Economics c={c.economics} extra={c.economicsExtra} locale={locale}/></section>}
 {visible('scale')&&<section id="scale" className="section scale"><Head i={4} c={c}/><Title lines={c.scale.title}/><div className="format-grid">{scenarios.map((s,i)=><article className="format" key={i}><div className="format-heading"><span className="micro">0{i+1}</span><h3>{c.scale.formats[i]}</h3><span aria-hidden="true">↗</span></div><div className="format-diagram" aria-hidden="true"><div style={{width:`${45+i*22}%`}}><i/><i/><i/><i/></div></div><dl>{[c.scale.areas[i],formatMoney(model.funding,locale),s.cups,calculate(s).payback?.toLocaleString(locale,{maximumFractionDigits:1})].map((v,j)=><div key={j}><dt>{c.scale.labels[j+1]}</dt><dd>{v}</dd></div>)}</dl></article>)}</div><p className="micro scale-repeat">{c.scale.repeat}</p><p className="assumption">{c.scale.note}</p></section>}
 {visible('terms')&&<section id="terms" className="section terms"><Head i={5} c={c}/><Title lines={c.terms.title}/><p className="assumption">{c.terms.tag}</p><dl className="term-facts">{[[c.terms.instrument,c.terms.instrumentValue],[c.terms.ticket,c.terms.ticketValue],[c.terms.return,c.terms.returnValue]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><div className="terms-grid"><div><h3 className="micro">{c.terms.funds}</h3><div className="allocation" aria-hidden="true">{[35,25,20,12,8].map((n,i)=><span key={n} style={{flex:n,'--tone':`${20+i*15}%`} as CSSProperties}/>)}</div><ol className="allocation-key">{c.terms.allocations.map((x,i)=><li key={x}><span>{x}</span><span>{[35,25,20,12,8][i]}%</span></li>)}</ol></div><ol className="gates">{c.terms.gates.map(x=><li key={x}>{x}</li>)}</ol></div><h3 className="micro risks-title">{c.terms.risksTitle}</h3><div className="risks">{c.terms.risks.map(([a,b])=><div key={a}><span>{a}</span><span>→</span><span>{b}</span></div>)}</div><p className="assumption">{c.terms.note}</p></section>}
 {visible('contact')&&<section id="contact" className="section contact"><Head i={6} c={c}/><div className="contact-grid"><div><Title lines={c.contact.title}/><p className="micro">{c.contact.lead}</p><a className="download magnet" href={`/downloads/xoxo-${locale}.pdf`} download>{c.contact.download}<span>↗</span></a>{process.env.NEXT_PUBLIC_CALENDAR_URL?<a className="download magnet" href={process.env.NEXT_PUBLIC_CALENDAR_URL}>{c.contact.calendar}<span>↗</span></a>:<span className="calendar-pending">{c.contact.calendar}</span>}</div><Contact c={c.contact}/></div></section>}
 </main><footer className="footer">{c.footer.map(s=><span key={s}>{s}</span>)}</footer><div className="page-wipe" aria-hidden="true"/></div>;
}
````

## src/lib/content.ts

````typescript
import uk from '../../content/uk.json';
import en from '../../content/en.json';
export type Locale = 'uk' | 'en';
export type Copy = typeof uk;
export const getCopy = (locale: Locale): Copy => locale === 'uk' ? uk : en;
export const pathFor = (locale: Locale, path = '') => `${locale === 'en' ? '/en' : ''}/${path ? path + '/' : ''}`;
export const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://xoxotea.vercel.app';
````

## src/lib/store-model.ts

````typescript
export type Inputs = {
  cups: number;
  ticket: number;
  rent: number;
  staff: number;
};
export const model = {
  days: 30,
  direct: 56,
  fee: 0.03,
  other: 120000,
  funding: 2100000,
  fx: 42,
};
export const defaults: Inputs = {
  cups: 190,
  ticket: 195,
  rent: 55000,
  staff: 210000,
};
export const scenarios: Inputs[] = [
  { ...defaults, cups: 130, ticket: 180 },
  defaults,
  { ...defaults, cups: 260, ticket: 205 },
];
export function calculate(input: Inputs) {
  const { cups, ticket, rent, staff } = input;
  if (
    ![cups, ticket, rent, staff].every(Number.isFinite) ||
    cups < 0 ||
    ticket <= 0 ||
    rent < 0 ||
    staff < 0
  )
    throw new RangeError("Invalid model input");
  const volume = cups * model.days;
  const revenue = volume * ticket;
  const grossMargin = (ticket - model.direct) / ticket;
  const contribution = ticket * (1 - model.fee) - model.direct;
  const fixed = rent + staff + model.other;
  const ebitda = volume * contribution - fixed;
  return {
    revenue,
    grossMargin,
    contribution,
    ebitda,
    payback: ebitda > 0 ? model.funding / ebitda : null,
    breakEven:
      contribution > 0 ? Math.ceil(fixed / contribution / model.days) : null,
  };
}
export function formatMoney(value: number, locale: "uk" | "en", usd = false) {
  const n = new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-US", {
    maximumFractionDigits: 0,
  }).format(value / (usd ? model.fx : 1));
  return usd ? `$${n}` : `${n.replace(/\u00a0/g, " ")} ₴`;
}
````

## tailwind.config.ts

````typescript
export default { theme: { extend: { colors: { paper: "#f3f1ea", ink: "#172e28", muted: "#58645d", line: "#bcc3b8" } } } };
````

## tests/model.test.mjs

````javascript
import test from "node:test";
import assert from "node:assert/strict";
import { calculate, defaults, scenarios } from "../src/lib/store-model.ts";
const expected = [
  { revenue: 702000, contribution: 118.6, ebitda: 77540 },
  { revenue: 1111500, contribution: 133.15, ebitda: 373955 },
  { revenue: 1599000, contribution: 142.85, ebitda: 729230 },
];
for (let i = 0; i < 3; i++)
  test(`scenario ${i + 1}: hand-worked cash contribution`, () => {
    const r = calculate(scenarios[i]);
    for (const key of ["revenue", "contribution", "ebitda"])
      assert.ok(Math.abs(r[key] - expected[i][key]) < 0.001);
    assert.ok(Math.abs(r.payback - 2100000 / expected[i].ebitda) < 0.001);
  });
test("loss-making store has no payback", () => {
  const r = calculate({ ...defaults, cups: 30 });
  assert.ok(r.ebitda < 0);
  assert.equal(r.payback, null);
});
test("raising rent lowers EBITDA one for one", () =>
  assert.equal(
    calculate({ ...defaults, rent: 65000 }).ebitda,
    calculate(defaults).ebitda - 10000,
  ));
test("invalid inputs fail explicitly", () =>
  assert.throws(() => calculate({ ...defaults, ticket: 0 }), RangeError));
````

## tsconfig.json

````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## vercel.json

````json
{
  "buildCommand": "pnpm build",
  "framework": "nextjs",
  "trailingSlash": true,
  "redirects": [
    {
      "source": "/uk",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/uk/:path*",
      "destination": "/:path*",
      "permanent": true
    },
    {
      "source": "/ru",
      "destination": "/",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/drinks/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public,max-age=86400"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "outputDirectory": ".next"
}
````
