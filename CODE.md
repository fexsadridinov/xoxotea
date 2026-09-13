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
````

## content/en.json

````json
{
  "brand": "XoXo Tea",
  "wordmark": "xoxo",
  "tagline": "TEA / PEOPLE / PLACE",
  "localeName": "English",
  "otherLocale": "УКР",
  "skip": "Skip to content",
  "navigation": "Main navigation",
  "menu": "Menu",
  "investors": "For partners",
  "press": "Press",
  "home": "Home",
  "invest": "Become an investor",
  "meet": "Start a conversation",
  "hero": {
    "eyebrow": "NEW TEA CULTURE · MYKOLAIV",
    "title": "A daily pause.\nA tea ritual.",
    "description": "Whole-leaf tea. Fresh fruit. A place to come back to.",
    "note": "First store in development / Southern Ukraine",
    "alt": "Brown-sugar milk tea with dark tapioca pearls in warm window light",
    "pause": "Pause film",
    "play": "Play film"
  },
  "thesis": {
    "label": "01 / THE IDEA",
    "title": "A new tea culture.\nStarting in Mykolaiv.",
    "body": "One carefully built tea bar. A repeatable operating system. A brand with room to grow."
  },
  "signature": {
    "label": "02 / SIGNATURE FIVE",
    "title": "Five ways to pause.",
    "body": "Tea first. Everything else in balance.",
    "all": "Explore the menu",
    "note": "[[ASSUMPTION: concept recipes, 500 ml servings and proposed prices; final testing pending.]]",
    "allergens": "Allergens",
    "crossContact": "Recipes and supplier specifications are not final. Milk, soy, nuts and gluten may be handled in the same preparation area. Ask the team before ordering.",
    "size": "500 ml",
    "print": "Print / save menu",
    "qr": "Scan to revisit the menu",
    "subtitle": "THE MENU / CONCEPT EDITION"
  },
  "drinks": [
    {
      "name": "Brown sugar boba",
      "other": "Боба з тростинним цукром",
      "base": "Black tea · milk · tapioca",
      "line": "Deep caramel. A soft, chewy finish.",
      "price": 180,
      "allergens": "Milk",
      "image": "drink-0"
    },
    {
      "name": "Jasmine milk",
      "other": "Молочний жасмин",
      "base": "Jasmine green tea · milk",
      "line": "Floral, light and quietly familiar.",
      "price": 165,
      "allergens": "Milk",
      "image": "drink-1"
    },
    {
      "name": "Matcha boba",
      "other": "Матча боба",
      "base": "Matcha · milk · tapioca",
      "line": "Green intensity. A mellow finish.",
      "price": 215,
      "allergens": "Milk",
      "image": "drink-2"
    },
    {
      "name": "Strawberry jasmine",
      "other": "Полуничний жасмин",
      "base": "Jasmine green tea · strawberry",
      "line": "Bright berries. A clean tea finish.",
      "price": 190,
      "allergens": "Supplier review pending",
      "image": "drink-3"
    },
    {
      "name": "Mango oolong",
      "other": "Манговий улун",
      "base": "Oolong · mango",
      "line": "Golden fruit with a roasted undertone.",
      "price": 195,
      "allergens": "Supplier review pending",
      "image": "drink-4"
    },
    {
      "name": "Jasmine cloud",
      "other": "Жасминова хмаринка",
      "base": "Jasmine tea · cream cheese foam",
      "line": "A floral brew under a salted cloud.",
      "price": 195,
      "allergens": "Milk",
      "image": "drink-1"
    },
    {
      "name": "Grape tea",
      "other": "Виноградний чай",
      "base": "Jasmine tea · grape",
      "line": "Crisp grape and aromatic tea.",
      "price": 185,
      "allergens": "Supplier review pending",
      "image": ""
    },
    {
      "name": "Grape cloud",
      "other": "Виноградна хмаринка",
      "base": "Jasmine tea · grape · cheese foam",
      "line": "Grape freshness. A creamy finish.",
      "price": 205,
      "allergens": "Milk",
      "image": ""
    },
    {
      "name": "Mango grapefruit",
      "other": "Манго та грейпфрут",
      "base": "Jasmine tea · mango · grapefruit",
      "line": "Sweet fruit. A bright citrus edge.",
      "price": 195,
      "allergens": "Supplier review pending",
      "image": "drink-4"
    },
    {
      "name": "Coconut mango",
      "other": "Кокосове манго",
      "base": "Mango · coconut · sago",
      "line": "Soft coconut. Golden mango.",
      "price": 195,
      "allergens": "Supplier review pending",
      "image": ""
    },
    {
      "name": "Pure jasmine",
      "other": "Чистий жасмин",
      "base": "Whole-leaf jasmine green tea",
      "line": "The leaf, the water, nothing more.",
      "price": 130,
      "allergens": "Supplier review pending",
      "image": ""
    },
    {
      "name": "Roasted oolong",
      "other": "Обсмажений улун",
      "base": "Whole-leaf oolong tea",
      "line": "Warm toasted notes. A long finish.",
      "price": 140,
      "allergens": "Supplier review pending",
      "image": ""
    }
  ],
  "world": {
    "label": "03 / THE BRAND WORLD",
    "title": "Made in full view.",
    "body": "A measured scoop. A fresh brew. The soft click of a seal. The ritual is part of the drink.",
    "caption": "Architectural concept · AI visualization · not an operating store",
    "interiorAlt": "Concept tea bar with an oak counter, green tiles and a visible preparation area",
    "ritual": [
      "Measured leaves",
      "Sealed fresh",
      "Passed with care",
      "A moment for yourself"
    ],
    "ritualAlt": [
      "Tea leaves measured into a steel bowl",
      "A hand sealing an unbranded tea cup",
      "A tea cup passed over an oak counter",
      "Condensation on a tea cup by a window"
    ]
  },
  "market": {
    "label": "04 / THE MARKET",
    "title": "A category crossing borders.",
    "body": "Independent forecasts point to growth. Local demand still has to be earned.",
    "global": "Global bubble tea / USD billions",
    "europe": "Europe bubble tea / USD millions",
    "cagr": "Publisher-reported CAGR",
    "forecast": "Forecast",
    "read": "Read source",
    "date": "Sources checked 13 September 2026",
    "scope": "These are separate market studies, with different scopes. Global growth does not forecast XoXo sales.",
    "globalNote": "2025 → 2026 · 8.4% reported CAGR; rounded endpoints imply 8.1%.",
    "europeNote": "2026 → 2033 · 8.2% forecast CAGR.",
    "travel": "HEYTEA reports 100+ overseas outlets; China Daily reported almost 600% overseas outlet growth over the preceding year on 13 July 2026. CHAGEE's official site states 6,000+ stores. These show format portability, not XoXo traction.",
    "fmi": "FMI publishes a 10% EU growth forecast to 2036, but its page contains inconsistent market-size units. Excluded from our valuation inputs.",
    "localTitle": "Mykolaiv is the first test.",
    "local": [
      [
        "Catchment",
        "[[ASSUMPTION: target students and young professionals; current catchment population is unverified.]]"
      ],
      [
        "Footfall",
        "[[ASSUMPTION: count weekday and weekend pedestrian traffic at each shortlisted site before signing. No measured counts yet.]]"
      ],
      [
        "Competition",
        "[[ASSUMPTION: map tea shops, cafés and delivery competitors in a 10-minute walk; no verified density or market-share claim.]]"
      ]
    ]
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
  "scale": {
    "label": "06 / THE REPEATABLE FORMAT",
    "title": "One bar. A clear next step.",
    "body": "Prove store one before expanding the footprint.",
    "formats": [
      [
        "Kiosk",
        "12–18 m²",
        "1 260 000 ₴",
        "80–140 cups / day"
      ],
      [
        "Takeaway bar",
        "35–40 m²",
        "2 100 000 ₴",
        "130–260 cups / day"
      ],
      [
        "Hybrid café",
        "55–75 m²",
        "3 150 000 ₴",
        "180–320 cups / day"
      ]
    ],
    "note": "[[ASSUMPTION: format footprints, funding and volumes are planning ranges, not quotes or capacity guarantees.]]",
    "roadmap": [
      [
        "01 / Mykolaiv",
        "Flagship takeaway bar",
        "Confirm lease, recipes and paid demand."
      ],
      [
        "02 / Mykolaiv",
        "Second catchment",
        "Only after three consecutive profitable months and an independently trained team."
      ],
      [
        "03 / Mykolaiv",
        "Replicate the system",
        "Only after the second store reproduces service, waste and margin targets."
      ]
    ],
    "future": "Then: Odesa → Kyiv → other cities. [[ASSUMPTION: expansion is conditional on security, supply reliability and proven local demand; dates are not committed.]]"
  },
  "funds": {
    "label": "07 / CAPITAL WITH A PURPOSE",
    "title": "Build the first. Design for more.",
    "budget": "Planning envelope",
    "amount": "≈ $50,000",
    "body": "The founder can fund the first store. A partner can add location access, operating perspective and regional connections.",
    "items": [
      [
        "Fit-out & resilience",
        650000,
        "Lease and technical survey before works."
      ],
      [
        "Equipment",
        550000,
        "Supplier comparison, power plan and delivery dates."
      ],
      [
        "Furniture & serviceware",
        150000,
        "Approve service layout and material samples."
      ],
      [
        "Opening stock & packaging",
        100000,
        "Complete recipe costing and supplier checks."
      ],
      [
        "POS, branding & launch",
        150000,
        "Test payment, training and opening campaign."
      ],
      [
        "Working capital & contingency",
        500000,
        "Release against cash runway and opening milestones."
      ]
    ],
    "note": "[[ASSUMPTION: 2 100 000 ₴ allocation at 42 ₴/$; no supplier quotations or investment commitments verified.]]",
    "termsTitle": "Partnership, with terms agreed together.",
    "terms": [
      [
        "Instrument",
        "[[ASSUMPTION: minority equity in the operating company is a discussion option; valuation and legal structure are unagreed.]]"
      ],
      [
        "Ticket",
        "[[ASSUMPTION: indicative partner contribution $10,000–$25,000; no minimum commitment set.]]"
      ],
      [
        "Return & dividends",
        "No fixed yield or guaranteed return. [[ASSUMPTION: dividends only from available after-tax cash after reserve and reinvestment needs.]]"
      ],
      [
        "Timing & exit",
        "[[ASSUMPTION: opening target 4–6 months after a suitable lease; buyback and transfer rights to be negotiated. No promised exit.]]"
      ]
    ]
  },
  "traction": {
    "label": "08 / EVIDENCE BEFORE EXPANSION",
    "title": "What is real. What comes next.",
    "items": [
      [
        "Defined",
        "Brand concept, first-city strategy and interactive planning model."
      ],
      [
        "In development",
        "Menu, store layout and supplier specification."
      ],
      [
        "Not verified",
        "Signed lease, supplier quotes, permits, equipment lead times and paid pre-orders."
      ],
      [
        "Not published",
        "Waitlist count, investor commitments and operating-store results."
      ]
    ],
    "riskTitle": "Risk is part of the operating plan.",
    "risks": [
      [
        "Security & outages",
        "Shelter access, closure procedures, backup power sizing and a cash reserve. Residual risk remains."
      ],
      [
        "FX & supply",
        "Dual sourcing, landed-cost tracking and smaller inventory commitments."
      ],
      [
        "Seasonality",
        "Hot drinks, monthly demand planning and a low-season downside case."
      ],
      [
        "Execution",
        "Recipe cards, staff training, waste logs and daily stock reconciliation."
      ]
    ]
  },
  "team": {
    "label": "09 / THE OPERATOR",
    "title": "Hospitality meets systems.",
    "name": "Fakhridin Sadridinov",
    "role": "Founder · operator · builder",
    "bio": "Restaurant management, venue operations, marketing and web development. Bringing hands-on hospitality experience to the first XoXo Tea store.",
    "note": "Founder-provided background. [[ASSUMPTION: approved portrait, dated CV and advisor appointments are pending.]]",
    "portrait": "Founder portrait awaiting approval",
    "advisors": "Seeking: local property expertise, tea sourcing and regional operating partners."
  },
  "contact": {
    "label": "10 / LET'S BUILD THE FIRST",
    "title": "Good tea starts a conversation.",
    "body": "A location, a perspective, a partnership. Tell us what you have in mind.",
    "name": "Name",
    "org": "Organization (optional)",
    "ticket": "Indicative contribution",
    "ranges": [
      "Advice / location partnership",
      "Under $10,000",
      "$10,000–$25,000",
      "$25,000+"
    ],
    "email": "Email or Telegram",
    "send": "Request a meeting",
    "sending": "Sending…",
    "sent": "Your request has been received.",
    "sentBody": "Thank you. We will respond through the contact you provided.",
    "error": "Your request was not sent. Please try again or use the email option.",
    "invalid": "Enter a valid email address or a Telegram username beginning with @.",
    "consent": "I agree to be contacted about this request.",
    "unavailable": "Online requests are not open yet. The founder's receiving address must be confirmed before this form can send.",
    "draft": "Save request as a text file",
    "draftNote": "Downloaded to your device. This does not send a request.",
    "room": "Request the data room",
    "roomNote": "Data-room access is reviewed individually. No confidential files are exposed by this site.",
    "calendar": "Book a call",
    "calendarPending": "Calendar booking will open when the founder's calendar is connected.",
    "pdf": "Download the one-pager",
    "waitlistTitle": "Be there for the first pour.",
    "waitlist": "Join opening updates",
    "emailOnly": "Email address",
    "privacy": "We use your contact details only to respond or send the opening updates you request. No personal information is sent to analytics.",
    "again": "Send another request",
    "nameInvalid": "Enter your name."
  },
  "footer": {
    "city": "Миколаїв / Mykolaiv",
    "location": "First location being selected.",
    "hours": "Opening hours to be announced.",
    "social": "Social channels awaiting confirmation.",
    "map": "View Mykolaiv on the map",
    "mapLabel": "City orientation only; this is not a store address.",
    "legal": "Pre-launch concept. Illustrations are AI-generated. Financial projections are assumptions, not an offer or a guarantee.",
    "copyright": "© 2026 XoXo Tea",
    "privacy": "Privacy"
  },
  "pressPage": {
    "title": "A new ritual, in a few words.",
    "label": "PRESS / CONCEPT EDITION",
    "body": "XoXo Tea is a modern tea-bar concept being developed in Mykolaiv, Ukraine. Its planned menu combines whole-leaf teas, milk teas and fruit drinks in a compact, takeaway-first format.",
    "pack": "Download logo pack",
    "assets": "Download campaign asset manifest",
    "logo": "Logo / SVG",
    "guidance": "Keep the wordmark clear. Use tea green on warm paper, or warm paper on tea green. Do not stretch, outline or add shadows. Generated interiors are concept illustrations and must be captioned as such."
  },
  "notFound": {
    "title": "This page has moved.",
    "body": "Return to the tea bar."
  },
  "metadata": {
    "home": "XoXo Tea — A new tea ritual in Mykolaiv",
    "menu": "Menu — XoXo Tea",
    "investors": "Partner with XoXo Tea — Mykolaiv",
    "press": "Press & brand assets — XoXo Tea",
    "description": "A modern tea-bar concept for Mykolaiv. Explore the menu, store model and partnership opportunities."
  },
  "brandSuffix": "tea",
  "otherLocaleLabel": "Українська",
  "sources": {
    "global": "Research and Markets / 01.2026",
    "europe": "Persistence Market Research / 04.2026",
    "chinaDaily": "China Daily",
    "chagee": "CHAGEE",
    "fmi": "Future Market Insights",
    "dojo": "Dojo Business",
    "yenchuan": "Yenchuan"
  },
  "honeypot": "Website"
}
````

## content/uk.json

````json
{
  "brand": "XoXo Tea",
  "wordmark": "xoxo",
  "tagline": "ЧАЙ / ЛЮДИ / МІСЦЕ",
  "localeName": "Українська",
  "otherLocale": "EN",
  "skip": "До основного вмісту",
  "navigation": "Головна навігація",
  "menu": "Меню",
  "investors": "Партнерам",
  "press": "Для медіа",
  "home": "Головна",
  "invest": "Стати інвестором",
  "meet": "Почати розмову",
  "hero": {
    "eyebrow": "НОВА ЧАЙНА КУЛЬТУРА · МИКОЛАЇВ",
    "title": "Час для чаю.\nЧас для себе.",
    "description": "Листовий чай. Свіжі фрукти. Місце, куди хочеться повертатися.",
    "note": "Перший заклад у розробці / Південь України",
    "alt": "Молочний чай із тростинним цукром і темними перлинами тапіоки у теплому світлі",
    "pause": "Призупинити відео",
    "play": "Відтворити відео"
  },
  "thesis": {
    "label": "01 / ІДЕЯ",
    "title": "Нова чайна культура.\nПочинаємо з Миколаєва.",
    "body": "Один продуманий чайний бар. Система, яку можна повторити. Бренд, якому є куди рости."
  },
  "signature": {
    "label": "02 / П’ЯТЬ ГОЛОВНИХ СМАКІВ",
    "title": "П’ять приводів зупинитися.",
    "body": "Спочатку чай. Усе інше — у рівновазі.",
    "all": "Переглянути все меню",
    "note": "[[ASSUMPTION: концептуальні рецептури, порції 500 мл і попередні ціни; фінальні дегустації ще попереду.]]",
    "allergens": "Алергени",
    "crossContact": "Рецептури та специфікації постачальників ще не затверджені. У спільній зоні приготування можуть використовуватися молоко, соя, горіхи та глютен. Перед замовленням уточніть склад у команди.",
    "size": "500 мл",
    "print": "Друк / зберегти меню",
    "qr": "Відскануйте, щоб відкрити меню",
    "subtitle": "МЕНЮ / КОНЦЕПТУАЛЬНА ВЕРСІЯ"
  },
  "drinks": [
    {
      "name": "Боба з тростинним цукром",
      "other": "Brown sugar boba",
      "base": "Чорний чай · молоко · тапіока",
      "line": "Глибока карамель. М’які перлини тапіоки.",
      "price": 180,
      "allergens": "Молоко",
      "image": "drink-0"
    },
    {
      "name": "Молочний жасмин",
      "other": "Jasmine milk",
      "base": "Зелений жасминовий чай · молоко",
      "line": "Квітковий, легкий і знайомий.",
      "price": 165,
      "allergens": "Молоко",
      "image": "drink-1"
    },
    {
      "name": "Матча боба",
      "other": "Matcha boba",
      "base": "Матча · молоко · тапіока",
      "line": "Насичена зелень. М’який післясмак.",
      "price": 215,
      "allergens": "Молоко",
      "image": "drink-2"
    },
    {
      "name": "Полуничний жасмин",
      "other": "Strawberry jasmine",
      "base": "Зелений жасминовий чай · полуниця",
      "line": "Яскрава ягода. Чистий чайний післясмак.",
      "price": 190,
      "allergens": "Потрібна перевірка постачальника",
      "image": "drink-3"
    },
    {
      "name": "Манговий улун",
      "other": "Mango oolong",
      "base": "Улун · манго",
      "line": "Золотисті фрукти й ноти обсмаження.",
      "price": 195,
      "allergens": "Потрібна перевірка постачальника",
      "image": "drink-4"
    },
    {
      "name": "Жасминова хмаринка",
      "other": "Jasmine cloud",
      "base": "Жасминовий чай · сирна пінка",
      "line": "Квітковий чай під солонуватою хмаринкою.",
      "price": 195,
      "allergens": "Молоко",
      "image": "drink-1"
    },
    {
      "name": "Виноградний чай",
      "other": "Grape tea",
      "base": "Жасминовий чай · виноград",
      "line": "Соковитий виноград та ароматний чай.",
      "price": 185,
      "allergens": "Потрібна перевірка постачальника",
      "image": ""
    },
    {
      "name": "Виноградна хмаринка",
      "other": "Grape cloud",
      "base": "Жасминовий чай · виноград · сирна пінка",
      "line": "Свіжість винограду. Вершкове завершення.",
      "price": 205,
      "allergens": "Молоко",
      "image": ""
    },
    {
      "name": "Манго та грейпфрут",
      "other": "Mango grapefruit",
      "base": "Жасминовий чай · манго · грейпфрут",
      "line": "Солодкі фрукти. Виразна цитрусова нота.",
      "price": 195,
      "allergens": "Потрібна перевірка постачальника",
      "image": "drink-4"
    },
    {
      "name": "Кокосове манго",
      "other": "Coconut mango",
      "base": "Манго · кокос · саго",
      "line": "Ніжний кокос. Золотисте манго.",
      "price": 195,
      "allergens": "Потрібна перевірка постачальника",
      "image": ""
    },
    {
      "name": "Чистий жасмин",
      "other": "Pure jasmine",
      "base": "Листовий зелений жасминовий чай",
      "line": "Чайний лист, вода — і нічого зайвого.",
      "price": 130,
      "allergens": "Потрібна перевірка постачальника",
      "image": ""
    },
    {
      "name": "Обсмажений улун",
      "other": "Roasted oolong",
      "base": "Листовий улун",
      "line": "Теплі ноти обсмаження. Тривалий післясмак.",
      "price": 140,
      "allergens": "Потрібна перевірка постачальника",
      "image": ""
    }
  ],
  "world": {
    "label": "03 / СВІТ БРЕНДУ",
    "title": "Усе готуємо на видноті.",
    "body": "Точна порція листя. Свіжий настій. Тихе клацання запаювача. Ритуал — частина напою.",
    "caption": "Концепція інтер’єру · візуалізація ШІ · не чинний заклад",
    "interiorAlt": "Концепція чайного бару з дубовою стійкою, зеленою плиткою та відкритою зоною приготування",
    "ritual": [
      "Відмірюємо листя",
      "Запаюємо свіжим",
      "Передаємо з турботою",
      "Мить для себе"
    ],
    "ritualAlt": [
      "Чайне листя зважують у сталевій мисці",
      "Рука запаює стакан чаю",
      "Стакан чаю передають через дубову стійку",
      "Краплі конденсату на стакані біля вікна"
    ]
  },
  "market": {
    "label": "04 / РИНОК",
    "title": "Чайна культура без кордонів.",
    "body": "Незалежні прогнози показують зростання. Місцевий попит ще потрібно довести.",
    "global": "Світовий ринок bubble tea / млрд доларів",
    "europe": "Ринок bubble tea у Європі / млн доларів",
    "cagr": "Середньорічне зростання за даними видавця",
    "forecast": "Прогноз",
    "read": "Переглянути джерело",
    "date": "Джерела перевірено 13 вересня 2026 року",
    "scope": "Це окремі дослідження з різним охопленням. Зростання світового ринку не є прогнозом продажів XoXo.",
    "globalNote": "2025 → 2026 · заявлений CAGR 8,4%; округлені значення дають 8,1%.",
    "europeNote": "2026 → 2033 · прогнозований CAGR 8,2%.",
    "travel": "За публікацією China Daily від 13 липня 2026 року HEYTEA має понад 100 закордонних точок; за попередній рік їхня кількість зросла майже на 600%. Офіційний сайт CHAGEE вказує понад 6 000 закладів. Це приклади поширення формату, а не досягнення XoXo.",
    "fmi": "FMI прогнозує зростання попиту в ЄС на 10% щороку до 2036 року, але сторінка містить суперечливі одиниці обсягу ринку. Ці дані не використано в нашій оцінці.",
    "localTitle": "Миколаїв — перша перевірка.",
    "local": [
      [
        "Аудиторія",
        "[[ASSUMPTION: орієнтуємося на студентів і молодих фахівців; актуальну чисельність аудиторії в зоні закладу не перевірено.]]"
      ],
      [
        "Потік людей",
        "[[ASSUMPTION: перед орендою рахуємо пішоходів у будні та вихідні біля кожного приміщення. Вимірювань поки немає.]]"
      ],
      [
        "Конкуренція",
        "[[ASSUMPTION: наносимо на карту чайні, кав’ярні та доставку в межах 10 хвилин пішки; щільність конкурентів і частку ринку не підтверджено.]]"
      ]
    ]
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
  "scale": {
    "label": "06 / ФОРМАТ ДЛЯ ПОВТОРЕННЯ",
    "title": "Один бар. Зрозумілий наступний крок.",
    "body": "Спершу довести модель першого закладу. Потім розширювати мережу.",
    "formats": [
      [
        "Кіоск",
        "12–18 м²",
        "1 260 000 ₴",
        "80–140 стаканів на день"
      ],
      [
        "Чайний бар із собою",
        "35–40 м²",
        "2 100 000 ₴",
        "130–260 стаканів на день"
      ],
      [
        "Кафе з посадкою",
        "55–75 м²",
        "3 150 000 ₴",
        "180–320 стаканів на день"
      ]
    ],
    "note": "[[ASSUMPTION: площі, фінансування та обсяги — планові діапазони, не комерційні пропозиції чи гарантії потужності.]]",
    "roadmap": [
      [
        "01 / Миколаїв",
        "Перший чайний бар",
        "Підтвердити оренду, рецептури та платний попит."
      ],
      [
        "02 / Миколаїв",
        "Інший район",
        "Лише після трьох прибуткових місяців поспіль і підготовки самостійної команди."
      ],
      [
        "03 / Миколаїв",
        "Повторити систему",
        "Лише коли друга точка відтворить цільовий сервіс, списання та маржу."
      ]
    ],
    "future": "Далі: Одеса → Київ → інші міста. [[ASSUMPTION: розвиток залежить від безпеки, надійності постачання та доведеного місцевого попиту; дати не визначені.]]"
  },
  "funds": {
    "label": "07 / КАПІТАЛ ІЗ ПРИЗНАЧЕННЯМ",
    "title": "Будуємо перший. Думаємо про мережу.",
    "budget": "Плановий бюджет",
    "amount": "≈ $50 000",
    "body": "Засновник може профінансувати перший заклад. Партнер може додати доступ до приміщень, досвід і зв’язки в регіоні.",
    "items": [
      [
        "Ремонт і стійкість",
        650000,
        "Оренда й технічне обстеження до початку робіт."
      ],
      [
        "Обладнання",
        550000,
        "Порівняння постачальників, план живлення та строки доставки."
      ],
      [
        "Меблі та інвентар",
        150000,
        "Затвердити робочі зони й зразки матеріалів."
      ],
      [
        "Початковий запас і пакування",
        100000,
        "Завершити калькуляції та перевірку постачальників."
      ],
      [
        "Каса, брендинг і запуск",
        150000,
        "Протестувати оплату, навчання й кампанію відкриття."
      ],
      [
        "Оборотні кошти й резерв",
        500000,
        "Виділяти кошти відповідно до запасу ліквідності та етапів запуску."
      ]
    ],
    "note": "[[ASSUMPTION: розподіл 2 100 000 ₴ за умовного курсу 42 ₴/$; пропозиції постачальників та інвестиційні зобов’язання не підтверджені.]]",
    "termsTitle": "Партнерство з узгодженими умовами.",
    "terms": [
      [
        "Інструмент",
        "[[ASSUMPTION: міноритарна частка в операційній компанії — варіант для обговорення; оцінку та юридичну структуру не погоджено.]]"
      ],
      [
        "Внесок",
        "[[ASSUMPTION: орієнтир участі $10 000–25 000; мінімальне зобов’язання не визначене.]]"
      ],
      [
        "Дохідність і дивіденди",
        "Фіксованої чи гарантованої дохідності немає. [[ASSUMPTION: дивіденди лише з доступних коштів після податків, резерву й реінвестицій.]]"
      ],
      [
        "Строки та вихід",
        "[[ASSUMPTION: орієнтир відкриття — 4–6 місяців після підписання належної оренди; викуп і передання частки потребують переговорів. Гарантованого виходу немає.]]"
      ]
    ]
  },
  "traction": {
    "label": "08 / ДОКАЗИ ПЕРЕД МАСШТАБУВАННЯМ",
    "title": "Що є. Що попереду.",
    "items": [
      [
        "Визначено",
        "Концепцію бренду, перше місто та інтерактивну планову модель."
      ],
      [
        "У розробці",
        "Меню, планування закладу та вимоги до постачальників."
      ],
      [
        "Не підтверджено",
        "Підписану оренду, ціни постачальників, дозвільні документи, строки обладнання та оплачені передзамовлення."
      ],
      [
        "Не оприлюднено",
        "Кількість підписників списку очікування, інвестиційні зобов’язання та результати чинних закладів."
      ]
    ],
    "riskTitle": "Ризики — частина операційного плану.",
    "risks": [
      [
        "Безпека та відключення",
        "Доступ до укриття, порядок закриття, розрахунок резервного живлення та запас коштів. Залишковий ризик зберігається."
      ],
      [
        "Курс і постачання",
        "Альтернативні постачальники, контроль повної закупівельної вартості та невеликі партії."
      ],
      [
        "Сезонність",
        "Гарячі напої, помісячний план попиту та сценарій низького сезону."
      ],
      [
        "Виконання",
        "Технологічні карти, навчання, облік списань і щоденна звірка залишків."
      ]
    ]
  },
  "team": {
    "label": "09 / ОПЕРАТОР",
    "title": "Гостинність зустрічається із системністю.",
    "name": "Фахрідін Садрідінов",
    "role": "Засновник · оператор · розробник",
    "bio": "Управління ресторанами й великими просторами, маркетинг і веброзробка. Практичний досвід гостинності для першого XoXo Tea.",
    "note": "Досвід зі слів засновника. [[ASSUMPTION: затверджений портрет, актуальне резюме та призначення радників очікуються.]]",
    "portrait": "Портрет засновника очікує затвердження",
    "advisors": "Шукаємо експертизу в нерухомості, постачанні чаю та розвитку закладів у регіоні."
  },
  "contact": {
    "label": "10 / СТВОРІМО ПЕРШИЙ РАЗОМ",
    "title": "Гарний чай починає розмову.",
    "body": "Приміщення, погляд, партнерство. Розкажіть, що маєте на думці.",
    "name": "Ім’я",
    "org": "Організація (необов’язково)",
    "ticket": "Орієнтовна участь",
    "ranges": [
      "Порада / партнерство щодо приміщення",
      "До $10 000",
      "$10 000–25 000",
      "Понад $25 000"
    ],
    "email": "Електронна пошта або Telegram",
    "send": "Запросити зустріч",
    "sending": "Надсилаємо…",
    "sent": "Ваш запит отримано.",
    "sentBody": "Дякуємо. Відповімо за вказаним контактом.",
    "error": "Запит не надіслано. Спробуйте ще раз або скористайтеся електронною поштою.",
    "invalid": "Введіть коректну пошту або ім’я користувача Telegram, що починається з @.",
    "consent": "Погоджуюся на зв’язок щодо цього запиту.",
    "unavailable": "Онлайн-запити ще не відкриті. Перед надсиланням потрібно підтвердити адресу одержувача.",
    "draft": "Зберегти запит текстовим файлом",
    "draftNote": "Збережено на вашому пристрої. Це не надсилає запит.",
    "room": "Запросити матеріали для інвестора",
    "roomNote": "Доступ до матеріалів розглядаємо індивідуально. Конфіденційні файли не оприлюднюються.",
    "calendar": "Запланувати дзвінок",
    "calendarPending": "Запис на дзвінок відкриється після підключення календаря засновника.",
    "pdf": "Завантажити коротку презентацію",
    "waitlistTitle": "Будьте на першому наливі.",
    "waitlist": "Дізнатися про відкриття",
    "emailOnly": "Електронна пошта",
    "privacy": "Використовуємо контакти лише для відповіді або запитаних новин про відкриття. Персональні дані не передаємо в аналітику.",
    "again": "Надіслати ще один запит",
    "nameInvalid": "Вкажіть своє ім’я."
  },
  "footer": {
    "city": "Миколаїв / Mykolaiv",
    "location": "Обираємо перше приміщення.",
    "hours": "Графік роботи оголосимо перед відкриттям.",
    "social": "Соціальні канали очікують підтвердження.",
    "map": "Переглянути Миколаїв на карті",
    "mapLabel": "Орієнтир міста, а не адреса закладу.",
    "legal": "Концепція до відкриття. Ілюстрації створені ШІ. Фінансові прогнози — припущення, не пропозиція чи гарантія.",
    "copyright": "© 2026 XoXo Tea",
    "privacy": "Конфіденційність"
  },
  "pressPage": {
    "title": "Новий ритуал у кількох словах.",
    "label": "ДЛЯ МЕДІА / КОНЦЕПТУАЛЬНА ВЕРСІЯ",
    "body": "XoXo Tea — концепція сучасного чайного бару, яку розробляють у Миколаєві. Планове меню поєднує листові, молочні та фруктові чаї в компактному форматі з акцентом на напої із собою.",
    "pack": "Завантажити пакет логотипів",
    "assets": "Завантажити опис візуальних матеріалів",
    "logo": "Логотип / SVG",
    "guidance": "Залишайте вільний простір навколо логотипа. Зелений на теплому білому або навпаки. Не розтягуйте, не обводьте й не додавайте тіні. Згенеровані інтер’єри потрібно підписувати як концептуальні візуалізації."
  },
  "notFound": {
    "title": "Ця сторінка переїхала.",
    "body": "Повернутися до чайного бару."
  },
  "metadata": {
    "home": "XoXo Tea — Новий чайний ритуал у Миколаєві",
    "menu": "Меню — XoXo Tea",
    "investors": "Партнерство з XoXo Tea — Миколаїв",
    "press": "Для медіа та матеріали бренду — XoXo Tea",
    "description": "Концепція сучасного чайного бару в Миколаєві. Меню, модель закладу та можливості партнерства."
  },
  "brandSuffix": "tea",
  "otherLocaleLabel": "English",
  "sources": {
    "global": "Research and Markets / 01.2026",
    "europe": "Persistence Market Research / 04.2026",
    "chinaDaily": "China Daily",
    "chagee": "CHAGEE",
    "fmi": "Future Market Insights",
    "dojo": "Dojo Business",
    "yenchuan": "Yenchuan"
  },
  "honeypot": "Вебсайт"
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

## public/press/asset-manifest.json

````json
[
  {
    "index": 0,
    "job_id": "ebcf56a3-1a21-4c99-a713-bbee146c7e23",
    "model": "nano_banana_2",
    "name": "drink-0",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSingle brown-sugar black milk tea with dark tapioca pearls, caramel ribbons on inner walls, tall straight-sided clear cup, subtle condensation, plain lid.\n[COMPOSITION]\nCentered cup fully visible with generous margin on warm paper seamless backdrop, camera level with cup midpoint. Consistent straight-on product system. One prop maximum.\n[LIGHTING]\nLarge window diffusion 45 degrees camera-left, 3000K, shadow falls right with deep soft falloff.\n[LENS & CAMERA]\n85mm f/2, sharp focus on cup rim and condensation.\n[MATERIALS & TEXTURE]\nReal liquid, circular cup ellipse, tactile paper, controlled reflections.\n[COLOR PALETTE]\nTea leaf green, warm ivory, ink, natural ingredient colors.\n[STYLE REFERENCE]\nGeometric minimal still life, museum-quality classical staging, appetizing food editorial.\n[BRAND INTEGRATION]\nRestrained modern tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography, hyper-detailed photorealistic rendering.\n[AVOID]\nNo AI artifacts, warped cup ellipses, fake words, plastic look, waxy surface, cartoon rendering, extra fingers, extra limbs, melted geometry, doubled subjects, oversaturated HDR, halos, oversharpening, flat fluorescent lighting, harsh flash, stock poses, unrelated logos, watermarks, signatures, airbrush sheen, fake bands or rectangular overlays.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104022_ebcf56a3-1a21-4c99-a713-bbee146c7e23.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 1,
    "job_id": "005eac03-c49c-4eea-986a-0e63ca63eb6f",
    "model": "nano_banana_2",
    "name": "drink-1",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSingle pale ivory jasmine milk tea, tall straight-sided clear cup, subtle condensation, plain lid, one jasmine leaf.\n[COMPOSITION]\nCentered cup fully visible with generous margin on warm paper seamless backdrop, camera level with cup midpoint. Consistent straight-on product system. One prop maximum.\n[LIGHTING]\nLarge window diffusion 45 degrees camera-left, 3000K, shadow falls right with deep soft falloff.\n[LENS & CAMERA]\n85mm f/2, sharp focus on cup rim and condensation.\n[MATERIALS & TEXTURE]\nReal liquid, circular cup ellipse, tactile paper, controlled reflections.\n[COLOR PALETTE]\nTea leaf green, warm ivory, ink, natural ingredient colors.\n[STYLE REFERENCE]\nGeometric minimal still life, museum-quality classical staging, appetizing food editorial.\n[BRAND INTEGRATION]\nRestrained modern tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography, hyper-detailed photorealistic rendering.\n[AVOID]\nNo AI artifacts, warped cup ellipses, fake words, plastic look, waxy surface, cartoon rendering, extra fingers, extra limbs, melted geometry, doubled subjects, oversaturated HDR, halos, oversharpening, flat fluorescent lighting, harsh flash, stock poses, unrelated logos, watermarks, signatures, airbrush sheen, fake bands or rectangular overlays.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104022_005eac03-c49c-4eea-986a-0e63ca63eb6f.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 2,
    "job_id": "e1337020-ff3e-4be0-a5d3-55a533caa605",
    "model": "nano_banana_2",
    "name": "drink-2",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSingle green matcha milk tea with dark tapioca pearls and pale milk layer, tall straight-sided clear cup, condensation, plain lid.\n[COMPOSITION]\nCentered cup fully visible with generous margin on warm paper seamless backdrop, camera level with cup midpoint. Consistent straight-on product system. One prop maximum.\n[LIGHTING]\nLarge window diffusion 45 degrees camera-left, 3000K, shadow falls right with deep soft falloff.\n[LENS & CAMERA]\n85mm f/2, sharp focus on cup rim and condensation.\n[MATERIALS & TEXTURE]\nReal liquid, circular cup ellipse, tactile paper, controlled reflections.\n[COLOR PALETTE]\nTea leaf green, warm ivory, ink, natural ingredient colors.\n[STYLE REFERENCE]\nGeometric minimal still life, museum-quality classical staging, appetizing food editorial.\n[BRAND INTEGRATION]\nRestrained modern tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography, hyper-detailed photorealistic rendering.\n[AVOID]\nNo AI artifacts, warped cup ellipses, fake words, plastic look, waxy surface, cartoon rendering, extra fingers, extra limbs, melted geometry, doubled subjects, oversaturated HDR, halos, oversharpening, flat fluorescent lighting, harsh flash, stock poses, unrelated logos, watermarks, signatures, airbrush sheen, fake bands or rectangular overlays.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104022_e1337020-ff3e-4be0-a5d3-55a533caa605.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 3,
    "job_id": "2f5b8b8a-cffe-4cac-8977-c68a4e8b054f",
    "model": "nano_banana_2",
    "name": "drink-3",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSingle ruby strawberry jasmine fruit tea with real strawberry slices and small ice cubes, tall straight-sided clear cup, condensation, plain lid.\n[COMPOSITION]\nCentered cup fully visible with generous margin on warm paper seamless backdrop, camera level with cup midpoint. Consistent straight-on product system. One prop maximum.\n[LIGHTING]\nLarge window diffusion 45 degrees camera-left, 3000K, shadow falls right with deep soft falloff.\n[LENS & CAMERA]\n85mm f/2, sharp focus on cup rim and condensation.\n[MATERIALS & TEXTURE]\nReal liquid, circular cup ellipse, tactile paper, controlled reflections.\n[COLOR PALETTE]\nTea leaf green, warm ivory, ink, natural ingredient colors.\n[STYLE REFERENCE]\nGeometric minimal still life, museum-quality classical staging, appetizing food editorial.\n[BRAND INTEGRATION]\nRestrained modern tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography, hyper-detailed photorealistic rendering.\n[AVOID]\nNo AI artifacts, warped cup ellipses, fake words, plastic look, waxy surface, cartoon rendering, extra fingers, extra limbs, melted geometry, doubled subjects, oversaturated HDR, halos, oversharpening, flat fluorescent lighting, harsh flash, stock poses, unrelated logos, watermarks, signatures, airbrush sheen, fake bands or rectangular overlays.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104022_2f5b8b8a-cffe-4cac-8977-c68a4e8b054f.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 4,
    "job_id": "6aea76cd-0e2a-4bb5-b830-ecf53039d6da",
    "model": "nano_banana_2",
    "name": "drink-4",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSingle golden mango oolong fruit tea with mango pulp and small ice cubes, tall straight-sided clear cup, condensation, plain lid.\n[COMPOSITION]\nCentered cup fully visible with generous margin on warm paper seamless backdrop, camera level with cup midpoint. Consistent straight-on product system. One prop maximum.\n[LIGHTING]\nLarge window diffusion 45 degrees camera-left, 3000K, shadow falls right with deep soft falloff.\n[LENS & CAMERA]\n85mm f/2, sharp focus on cup rim and condensation.\n[MATERIALS & TEXTURE]\nReal liquid, circular cup ellipse, tactile paper, controlled reflections.\n[COLOR PALETTE]\nTea leaf green, warm ivory, ink, natural ingredient colors.\n[STYLE REFERENCE]\nGeometric minimal still life, museum-quality classical staging, appetizing food editorial.\n[BRAND INTEGRATION]\nRestrained modern tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography, hyper-detailed photorealistic rendering.\n[AVOID]\nNo AI artifacts, warped cup ellipses, fake words, plastic look, waxy surface, cartoon rendering, extra fingers, extra limbs, melted geometry, doubled subjects, oversaturated HDR, halos, oversharpening, flat fluorescent lighting, harsh flash, stock poses, unrelated logos, watermarks, signatures, airbrush sheen, fake bands or rectangular overlays.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104022_6aea76cd-0e2a-4bb5-b830-ecf53039d6da.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 5,
    "job_id": "e3ef1049-62db-4ea6-879c-94dd833c133e",
    "model": "nano_banana_2",
    "name": "interior-0",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSmall 38 square metre modern tea bar, light oak counter, brushed steel production line, warm pendant lights, matte green tiles. Blank minimal signage plate, queue of two adults out of focus. Mid-size Ukrainian city daylight. Wide interior angle.\n[COMPOSITION]\nEditorial framing, physically plausible proportions.\n[LIGHTING]\n3000K diffused window at camera-left 45 degrees, shadows fall right.\n[LENS & CAMERA]\n85mm f/2, shallow focus on ritual or material.\n[MATERIALS & TEXTURE]\nTactile oak grain, matte ceramic, brushed steel.\n[COLOR PALETTE]\nDeep tea green and warm ivory.\n[STYLE REFERENCE]\nRestrained architectural food editorial, classical still life, natural asymmetry.\n[BRAND INTEGRATION]\nAdult refined modern atmosphere.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo warped geometry, extra fingers or limbs, rubber hands, waxy skin, fake text, plastic look, cartoon rendering, oversaturated HDR, halos, oversharpening, flat lighting, stock poses, logos, watermarks, signatures, doll faces, synthetic sheen, artificial rectangular bands.\nresolution: 2k",
    "ratio": "3:2",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104146_e3ef1049-62db-4ea6-879c-94dd833c133e.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 6,
    "job_id": "08cc0722-0235-4354-a27a-b3434d0542ce",
    "model": "nano_banana_2",
    "name": "interior-1",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nView along the production counter of the same small tea bar, measured tea stations, brushed steel, matte green tiles and oak, window left, two out of focus adult guests.\n[COMPOSITION]\nEditorial framing, physically plausible proportions.\n[LIGHTING]\n3000K diffused window at camera-left 45 degrees, shadows fall right.\n[LENS & CAMERA]\n85mm f/2, shallow focus on ritual or material.\n[MATERIALS & TEXTURE]\nTactile oak grain, matte ceramic, brushed steel.\n[COLOR PALETTE]\nDeep tea green and warm ivory.\n[STYLE REFERENCE]\nRestrained architectural food editorial, classical still life, natural asymmetry.\n[BRAND INTEGRATION]\nAdult refined modern atmosphere.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo warped geometry, extra fingers or limbs, rubber hands, waxy skin, fake text, plastic look, cartoon rendering, oversaturated HDR, halos, oversharpening, flat lighting, stock poses, logos, watermarks, signatures, doll faces, synthetic sheen, artificial rectangular bands.\nresolution: 2k",
    "ratio": "3:2",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104146_08cc0722-0235-4354-a27a-b3434d0542ce.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 7,
    "job_id": "d762efaf-9fc0-4625-98ee-3799a1902970",
    "model": "nano_banana_2",
    "name": "interior-2",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSmall tea bar window seating, three stools, light oak, matte green wall, brushed steel counter edge, daylight entering left, quiet Ukrainian streetscape out of focus.\n[COMPOSITION]\nEditorial framing, physically plausible proportions.\n[LIGHTING]\n3000K diffused window at camera-left 45 degrees, shadows fall right.\n[LENS & CAMERA]\n85mm f/2, shallow focus on ritual or material.\n[MATERIALS & TEXTURE]\nTactile oak grain, matte ceramic, brushed steel.\n[COLOR PALETTE]\nDeep tea green and warm ivory.\n[STYLE REFERENCE]\nRestrained architectural food editorial, classical still life, natural asymmetry.\n[BRAND INTEGRATION]\nAdult refined modern atmosphere.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo warped geometry, extra fingers or limbs, rubber hands, waxy skin, fake text, plastic look, cartoon rendering, oversaturated HDR, halos, oversharpening, flat lighting, stock poses, logos, watermarks, signatures, doll faces, synthetic sheen, artificial rectangular bands.\nresolution: 2k",
    "ratio": "3:2",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104146_d762efaf-9fc0-4625-98ee-3799a1902970.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 8,
    "job_id": "f26dce52-c42a-403b-883e-519fee1e3687",
    "model": "nano_banana_2",
    "name": "ritual-0",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nClose view of anatomically correct adult hand operating a cup sealing machine with a clear unbranded tea cup, brushed steel counter. Natural hand anatomy.\n[COMPOSITION]\nEditorial framing, physically plausible proportions.\n[LIGHTING]\n3000K diffused window at camera-left 45 degrees, shadows fall right.\n[LENS & CAMERA]\n85mm f/2, shallow focus on ritual or material.\n[MATERIALS & TEXTURE]\nTactile oak grain, matte ceramic, brushed steel.\n[COLOR PALETTE]\nDeep tea green and warm ivory.\n[STYLE REFERENCE]\nRestrained architectural food editorial, classical still life, natural asymmetry.\n[BRAND INTEGRATION]\nAdult refined modern atmosphere.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo warped geometry, extra fingers or limbs, rubber hands, waxy skin, fake text, plastic look, cartoon rendering, oversaturated HDR, halos, oversharpening, flat lighting, stock poses, logos, watermarks, signatures, doll faces, synthetic sheen, artificial rectangular bands.\nresolution: 2k",
    "ratio": "4:5",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104146_f26dce52-c42a-403b-883e-519fee1e3687.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 9,
    "job_id": "d6b88ac9-136f-4691-9fc0-613da05d7c9e",
    "model": "nano_banana_2",
    "name": "ritual-1",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nDry oolong tea leaves being measured with a steel scoop into a weighing bowl, a cropped adult hand, small tea bar worktop.\n[COMPOSITION]\nEditorial framing, physically plausible proportions.\n[LIGHTING]\n3000K diffused window at camera-left 45 degrees, shadows fall right.\n[LENS & CAMERA]\n85mm f/2, shallow focus on ritual or material.\n[MATERIALS & TEXTURE]\nTactile oak grain, matte ceramic, brushed steel.\n[COLOR PALETTE]\nDeep tea green and warm ivory.\n[STYLE REFERENCE]\nRestrained architectural food editorial, classical still life, natural asymmetry.\n[BRAND INTEGRATION]\nAdult refined modern atmosphere.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo warped geometry, extra fingers or limbs, rubber hands, waxy skin, fake text, plastic look, cartoon rendering, oversaturated HDR, halos, oversharpening, flat lighting, stock poses, logos, watermarks, signatures, doll faces, synthetic sheen, artificial rectangular bands.\nresolution: 2k",
    "ratio": "4:5",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104146_d6b88ac9-136f-4691-9fc0-613da05d7c9e.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 10,
    "job_id": "455c86c1-19f9-42db-9b6b-ab766bb085d2",
    "model": "nano_banana_2",
    "name": "ritual-2",
    "original_job_id": "0586e78d-6b08-4cf1-bf9d-52502f041128",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\nRefine the previous image. Replace the small saucer and ceramic cup with one tall transparent disposable takeaway cup of milk tea with tapioca pearls and plain lid, passed directly between the same two natural adult hands across the counter. No saucer, no mug handle. Preserve lighting, framing and anatomy.\nNo text, logos, extra fingers, warped ellipses, plastic sheen, artifacts or watermarks.\nresolution: 2k",
    "ratio": "4:5",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_110844_455c86c1-19f9-42db-9b6b-ab766bb085d2.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 11,
    "job_id": "906a56e0-6bff-4f3e-941c-c327bd4d80f8",
    "model": "nano_banana_2",
    "name": "ritual-3",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nUnbranded brown sugar milk tea cup, condensation droplets, on an oak windowsill with daylight from left, calm warm paper wall behind.\n[COMPOSITION]\nRestrained editorial framing.\n[LIGHTING]\n3000K camera-left diffused window; seamless textures receive even diffusion.\n[LENS & CAMERA]\n85mm f/2, texture detail.\n[MATERIALS & TEXTURE]\nNatural tactile surfaces, physically plausible shapes.\n[COLOR PALETTE]\nWarm paper, dark tea, muted green.\n[STYLE REFERENCE]\nMinimal sculptural still life.\n[BRAND INTEGRATION]\nRefined tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo AI artifacts, text, logos, watermarks, melted geometry, distorted ellipses, waxy skin, plastic sheen, oversaturated HDR, halos, fake rectangular bands.\nresolution: 2k",
    "ratio": "4:5",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104224_906a56e0-6bff-4f3e-941c-c327bd4d80f8.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 12,
    "job_id": "083d7a50-d6d8-4839-bc35-9a5841cabda9",
    "model": "nano_banana_2",
    "name": "texture-0",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSeamless tileable texture, dry dark oolong tea leaves, top-down evenly covering entire frame.\n[COMPOSITION]\nRestrained editorial framing.\n[LIGHTING]\n3000K camera-left diffused window; seamless textures receive even diffusion.\n[LENS & CAMERA]\n85mm f/2, texture detail.\n[MATERIALS & TEXTURE]\nNatural tactile surfaces, physically plausible shapes.\n[COLOR PALETTE]\nWarm paper, dark tea, muted green.\n[STYLE REFERENCE]\nMinimal sculptural still life.\n[BRAND INTEGRATION]\nRefined tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo AI artifacts, text, logos, watermarks, melted geometry, distorted ellipses, waxy skin, plastic sheen, oversaturated HDR, halos, fake rectangular bands.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104224_083d7a50-d6d8-4839-bc35-9a5841cabda9.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 13,
    "job_id": "a6be5c2f-c962-4795-acb6-5a33f22bbc70",
    "model": "nano_banana_2",
    "name": "texture-1",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSeamless tileable texture, dark cooked tapioca pearls, controlled subtle highlights, top-down covering frame.\n[COMPOSITION]\nRestrained editorial framing.\n[LIGHTING]\n3000K camera-left diffused window; seamless textures receive even diffusion.\n[LENS & CAMERA]\n85mm f/2, texture detail.\n[MATERIALS & TEXTURE]\nNatural tactile surfaces, physically plausible shapes.\n[COLOR PALETTE]\nWarm paper, dark tea, muted green.\n[STYLE REFERENCE]\nMinimal sculptural still life.\n[BRAND INTEGRATION]\nRefined tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo AI artifacts, text, logos, watermarks, melted geometry, distorted ellipses, waxy skin, plastic sheen, oversaturated HDR, halos, fake rectangular bands.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104225_a6be5c2f-c962-4795-acb6-5a33f22bbc70.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 14,
    "job_id": "b691896a-1c33-4595-8476-9441e9432cde",
    "model": "nano_banana_2",
    "name": "texture-2",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSeamless tileable warm off-white brushed paper microtexture, no objects, evenly lit.\n[COMPOSITION]\nRestrained editorial framing.\n[LIGHTING]\n3000K camera-left diffused window; seamless textures receive even diffusion.\n[LENS & CAMERA]\n85mm f/2, texture detail.\n[MATERIALS & TEXTURE]\nNatural tactile surfaces, physically plausible shapes.\n[COLOR PALETTE]\nWarm paper, dark tea, muted green.\n[STYLE REFERENCE]\nMinimal sculptural still life.\n[BRAND INTEGRATION]\nRefined tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo AI artifacts, text, logos, watermarks, melted geometry, distorted ellipses, waxy skin, plastic sheen, oversaturated HDR, halos, fake rectangular bands.\nresolution: 2k",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104224_b691896a-1c33-4595-8476-9441e9432cde.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 15,
    "job_id": "c138df39-dfea-4e94-872f-69c533f1f575",
    "model": "nano_banana_2",
    "name": "texture-3",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSeamless tileable matte deep tea-green ceramic surface microtexture, no tiles edges, no grout, evenly lit.\n[COMPOSITION]\nRestrained editorial framing.\n[LIGHTING]\n3000K camera-left diffused window; seamless textures receive even diffusion.\n[LENS & CAMERA]\n85mm f/2, texture detail.\n[MATERIALS & TEXTURE]\nNatural tactile surfaces, physically plausible shapes.\n[COLOR PALETTE]\nWarm paper, dark tea, muted green.\n[STYLE REFERENCE]\nMinimal sculptural still life.\n[BRAND INTEGRATION]\nRefined tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo AI artifacts, text, logos, watermarks, melted geometry, distorted ellipses, waxy skin, plastic sheen, oversaturated HDR, halos, fake rectangular bands.\nresolution: 2k",
    "quality_note": "Requested texture correction was rejected by the generation service (nsfw status). Original scene retained only in provenance; not suitable as a seamless texture.",
    "ratio": "1:1",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104224_c138df39-dfea-4e94-872f-69c533f1f575.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 16,
    "job_id": "c651f916-8803-4a87-86a7-f775d256ad8b",
    "model": "nano_banana_2",
    "name": "packaging-0",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nSingle unbranded matte off-white takeaway cup and unprinted kraft paper two-cup carrier on warm paper backdrop, straight frontal view, generous margins, flat frontal soft light.\n[COMPOSITION]\nRestrained editorial framing.\n[LIGHTING]\n3000K camera-left diffused window; seamless textures receive even diffusion.\n[LENS & CAMERA]\n85mm f/2, texture detail.\n[MATERIALS & TEXTURE]\nNatural tactile surfaces, physically plausible shapes.\n[COLOR PALETTE]\nWarm paper, dark tea, muted green.\n[STYLE REFERENCE]\nMinimal sculptural still life.\n[BRAND INTEGRATION]\nRefined tea ritual.\n[QUALITY MARKERS]\nTack-sharp commercial photography.\n[AVOID]\nNo AI artifacts, text, logos, watermarks, melted geometry, distorted ellipses, waxy skin, plastic sheen, oversaturated HDR, halos, fake rectangular bands.\nresolution: 2k",
    "ratio": "4:5",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104224_c651f916-8803-4a87-86a7-f775d256ad8b.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 17,
    "job_id": "a6fff911-bc21-41a3-9106-0128962c8a7a",
    "model": "nano_banana_2",
    "name": "packaging-1",
    "original_job_id": "bc8d432d-c6a2-45bf-8f96-8900ca729dc4",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\nRefine the previous image. Correct the two cups: both must be tall disposable unbranded matte paper takeaway cups with flat lids in a kraft paper carrier, not low ceramic mugs. Keep warm off-white paper backdrop, same light and overall placement. Remove handles and any glaze. No visible branding.\nNo text, logos, extra fingers, warped ellipses, plastic sheen, artifacts or watermarks.\nresolution: 2k",
    "ratio": "4:5",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_110844_a6fff911-bc21-41a3-9106-0128962c8a7a.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 18,
    "job_id": "46ce2685-b02b-4ac9-84eb-8a2a260023c8",
    "model": "nano_banana_2",
    "name": "hero",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\n[SUBJECT]\nPreserve the exact brown sugar tea cup in reference. [COMPOSITION] Cup on right half of wide paper seamless composition, left half naturally calm for website typography. Whole cup visible, huge sculptural presence. [LIGHTING] 3000K camera-left 45 degree window. [LENS & CAMERA] 85mm f/2. [MATERIALS & TEXTURE] Natural condensation and tea. [COLOR PALETTE] Warm offwhite, tea green, amber. [STYLE REFERENCE] Museum quality minimal still life. [BRAND INTEGRATION] Refined modern tea brand. [QUALITY MARKERS] Tack-sharp commercial photography. [AVOID] No text, logos, watermarks, warped ellipses, plastic, HDR, flat rectangular overlays.\nresolution: 2k",
    "ratio": "16:9",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104317_46ce2685-b02b-4ac9-84eb-8a2a260023c8.png",
    "status": "completed",
    "type": "image"
  },
  {
    "index": 19,
    "job_id": "9fd8aa0c-a3fb-48ab-bfa8-002c57382a6b",
    "model": "kling3_0_turbo",
    "name": "hero-mobile",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\nSlow 15 degree orbital rotation around a single tall clear cup of brown sugar milk tea, dark pearls settling, condensation beads, sunlight raking across cup, warm off-white seamless background. Cup centered, fully visible. Gentle return to initial angle, perfectly seamless loop. Silent. No text or marks.",
    "ratio": "9:16",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104335_9fd8aa0c-a3fb-48ab-bfa8-002c57382a6b.mp4",
    "status": "completed",
    "type": "video",
    "delivery": {
      "filename": "hero-mobile-fast.mp4",
      "width": 540,
      "height": 960,
      "bytes": 72743,
      "codec": "H.264",
      "crf": 35,
      "audio": false,
      "processed_url": "https://d2ol7oe51mr4n9.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/633229aa-17e3-428e-8c32-c34ca7668941.mp4"
    }
  },
  {
    "index": 20,
    "job_id": "6c304b5f-6576-4be3-89a7-66cf2a42ae4f",
    "model": "kling3_0_turbo",
    "name": "hero-desktop",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\nSlow 15 degree orbital rotation around a single tall clear cup of brown sugar milk tea, dark pearls settling, condensation beads, sunlight raking across cup, warm off-white seamless background. Cup on right third, left side naturally calm. Gentle return to initial angle, seamless loop. Silent. No text or marks.",
    "ratio": "16:9",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104334_6c304b5f-6576-4be3-89a7-66cf2a42ae4f.mp4",
    "status": "completed",
    "type": "video"
  },
  {
    "index": 21,
    "job_id": "f410917b-0171-4fb5-bb4a-071b3855d730",
    "model": "kling3_0_turbo",
    "name": "pour",
    "prompt": "Premium new-style tea brand campaign photography. Warm 3000K light, soft directional daylight from a single window 45 degrees camera-left, deep natural shadows, matte finish, no plastic gloss, no HDR, no oversaturation. Muted palette: tea-leaf green, warm paper off-white, ink black, one soft amber highlight. Editorial composition with generous negative space. Shot on 85mm, f/2.0, shallow depth of field, subtle film grain. Absolutely no text, no logos, no watermarks, no visible brand marks.\nMacro milk cascading into fresh brewed tea in slow motion, marbling ribbons, dark background, single raking hard light camera left. No hands or faces, only vessel and liquid. Silent. No text or marks.",
    "ratio": "16:9",
    "result_url": "https://d8j0ntlcm91z4.cloudfront.net/user_3JGkZRNMZoKo7njRrN90ceAuh67/hf_20260913_104334_f410917b-0171-4fb5-bb4a-071b3855d730.mp4",
    "status": "completed",
    "type": "video"
  }
]
````

## public/press/favicon.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#173f35"/><text x="8" y="43" fill="#f7f4ee" font-family="Arial,sans-serif" font-size="36" letter-spacing="-4">xo</text></svg>
````

## public/press/xoxo-green.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230"><title>XoXo Tea</title><text x="12" y="175" fill="#173f35" font-family="Arial,sans-serif" font-size="190" font-weight="600" letter-spacing="-18">xoxo</text><text x="475" y="176" fill="#173f35" font-family="Arial,sans-serif" font-size="42">tea</text></svg>
````

## public/press/xoxo-paper.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230"><title>XoXo Tea</title><text x="12" y="175" fill="#f7f4ee" font-family="Arial,sans-serif" font-size="190" font-weight="600" letter-spacing="-18">xoxo</text><text x="475" y="176" fill="#f7f4ee" font-family="Arial,sans-serif" font-size="42">tea</text></svg>
````

## scripts/documents.py

````python
from pathlib import Path
import json,zipfile,re
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
root=Path(__file__).resolve().parents[1]
out=root/'public/assets';out.mkdir(exist_ok=True)
pdfmetrics.registerFont(TTFont('Body','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Bold','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
W,H=595.28,841.89
style=ParagraphStyle('body',fontName='Body',fontSize=9.5,leading=14,textColor=HexColor('#182a25'))
def para(c,text,x,y,w,size=9.5,bold=False):
 st=ParagraphStyle('x',parent=style,fontName='Bold' if bold else 'Body',fontSize=size,leading=size*1.45)
 p=Paragraph(text.replace('&','&amp;').replace('\n','<br/>'),st);pw,ph=p.wrap(w,800);p.drawOn(c,x,y-ph);return y-ph
for lang in ['uk','en']:
 d=json.loads((root/f'content/{lang}.json').read_text())
 c=canvas.Canvas(str(out/f'xoxo-one-pager-{lang}.pdf'),pagesize=(W,H));c.setTitle(d['metadata']['investors'])
 c.setFillColor(HexColor('#f7f4ee'));c.rect(0,0,W,H,fill=1,stroke=0)
 c.setFillColor(HexColor('#173f35'));c.rect(0,H-145,W,145,fill=1,stroke=0)
 c.setFillColor(HexColor('#f7f4ee'));c.setFont('Bold',46);c.drawString(38,H-64,'xoxo tea');c.setFont('Body',11);c.drawString(40,H-92,d['hero']['eyebrow']);c.setFont('Body',9);c.drawString(40,H-120,d['hero']['note'])
 y=H-175;y=para(c,d['funds']['title'],40,y,W-80,22,True)-14;y=para(c,d['funds']['body'],40,y,W-80,10)-22
 y=para(c,d['funds']['amount']+' / '+d['scale']['formats'][1][1],40,y,W-80,20,True)-18
 y=para(c,d['economics']['scenarioTitle'],40,y,W-80,12,True)-12
 cols=[40,213,386]
 for i,(rev,ebitda,pay) in enumerate([(702000,77540,27.1),(1111500,373955,5.6),(1599000,729230,2.9)]):
  yy=para(c,d['economics']['scenarios'][i],cols[i],y,155,10,True)-8
  for label,value in [(d['economics']['revenue'],f'{rev:,} ₴'.replace(',',' ')),(d['economics']['ebitda'],f'{ebitda:,} ₴'.replace(',',' ')),(d['economics']['payback'],(str(pay).replace('.',',') if lang=='uk' else str(pay)))]:
   yy=para(c,label,cols[i],yy,150,8)-3;yy=para(c,value,cols[i],yy,150,12,True)-10
 y-=170
 y=para(c,d['economics']['assumptions'],40,y,W-80,8)-12
 y=para(c,d['economics']['explanation'],40,y,W-80,8)-14
 y=para(c,d['team']['name']+' / '+d['team']['role'],40,y,W-80,10,True)-10
 y=para(c,d['traction']['items'][2][0]+': '+d['traction']['items'][2][1],40,y,W-80,8)-10
 para(c,d['footer']['legal'],40,y,W-80,8)
 c.setFont('Body',8);c.drawString(40,24,'13.09.2026 / '+d['brand']);c.save()
 c=canvas.Canvas(str(out/f'xoxo-menu-{lang}.pdf'),pagesize=(W,H));c.setTitle(d['metadata']['menu']);y=H-44
 y=para(c,d['brand']+' / '+d['menu'],40,y,W-80,25,True)-15
 y=para(c,d['signature']['note'],40,y,W-80,8)-18
 for drink in d['drinks']:
  y=para(c,drink['name']+'  /  '+str(drink['price'])+' ₴',40,y,W-80,11,True)-3
  y=para(c,drink['base']+' · '+d['signature']['allergens']+': '+drink['allergens'],40,y,W-80,8)-13
 y=para(c,d['signature']['crossContact'],40,y,W-80,8)
 if y<28:raise RuntimeError('Menu overflow')
 c.save()
````

## scripts/qa/browser.cjs

````javascript
/* eslint-disable @typescript-eslint/no-require-imports -- Node audit utilities use CommonJS. */
const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;
const fs = require("fs");
(async () => {
  const server = require("child_process").spawn(
    "python3",
    ["-m", "http.server", "4173", "--directory", "out"],
    { stdio: "ignore" },
  );
  await new Promise((r) => setTimeout(r, 1000));
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ["--no-sandbox"],
  });
  const context = await browser.newContext({
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (["warning", "error"].includes(m.type())) errors.push(m.text());
  });
  const checks = [];
  fs.mkdirSync("audit/screenshots", { recursive: true });
  for (const width of [360, 390, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
    await page.screenshot({
      path: `audit/screenshots/home-${width}.jpg`,
      quality: 78,
    });
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      overflow: [
        ...document.querySelectorAll("h1,h2,h3,h4,p,button,label,dt,dd"),
      ]
        .filter(
          (el) =>
            el.getClientRects().length &&
            el.scrollWidth > el.clientWidth + 2 &&
            getComputedStyle(el).display !== "inline",
        )
        .map((el) => ({
          tag: el.tagName,
          text: el.textContent.slice(0, 90),
          client: el.clientWidth,
          scroll: el.scrollWidth,
        })),
      smallText: [...document.querySelectorAll("p,a,label,button,dt,dd,span")]
        .filter(
          (e) =>
            e.getClientRects().length &&
            parseFloat(getComputedStyle(e).fontSize) < 15,
        )
        .map((e) => e.textContent.slice(0, 40)),
    }));
    checks.push({ route: "/", ...layout });
  }
  const accessibility = [];
  for (const route of [
    "/",
    "/en/",
    "/menu/",
    "/en/menu/",
    "/investors/",
    "/en/investors/",
    "/press/",
    "/en/press/",
  ]) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://127.0.0.1:4173" + route, {
      waitUntil: "networkidle",
    });
    await page.screenshot({
      path: `audit/screenshots/${route.replaceAll("/", "-") || "home"}-full.png`,
      fullPage: true,
    });
    const a = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    accessibility.push({
      route,
      violations: a.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
  }
  await page.goto("http://127.0.0.1:4173/?ref=qa&ut m_source=test");
  await page.locator("#cups").fill("130");
  await page.locator("#ticket").fill("180");
  const calculated = await page.locator(".ebitda").textContent();
  const downloads = [];
  await page.locator("#meeting-name").fill("QA test");
  await page.locator("#meeting-contact").fill("test@example.com");
  await page
    .locator("#meeting input[type=checkbox]")
    .count()
    .catch(() => {});
  await page.locator(".contact input[type=checkbox]").check();
  const downloadPromise = page.waitForEvent("download");
  await page.locator(".contact button[type=submit]").click();
  const download = await downloadPromise;
  await download.saveAs("/tmp/xoxo-request.txt");
  downloads.push(fs.readFileSync("/tmp/xoxo-request.txt", "utf8"));
  await page.goto("http://127.0.0.1:4173/");
  const videoCount = await page.locator("video[src]").count();
  await page.keyboard.press("Tab");
  const focus = await page.evaluate(() => ({
    text: document.activeElement.textContent,
    outline: getComputedStyle(document.activeElement).outlineStyle,
  }));
  const keyboard = [];
  for (let i = 0; i < 90; i++) {
    await page.keyboard.press("Tab");
    keyboard.push(
      await page.evaluate(() => ({
        tag: document.activeElement.tagName,
        text: (
          document.activeElement.textContent ||
          document.activeElement.getAttribute("aria-label") ||
          ""
        ).slice(0, 50),
        outline: getComputedStyle(document.activeElement).outlineStyle,
      })),
    );
  }
  const language = [];
  for (const route of ["/", "/menu/", "/investors/", "/press/"]) {
    await page.goto("http://127.0.0.1:4173" + route);
    await page.locator(".language").click();
    await page.waitForLoadState("networkidle");
    language.push({
      route,
      to: new URL(page.url()).pathname,
      lang: await page.locator("html").getAttribute("lang"),
    });
  }
  fs.writeFileSync(
    "audit/keyboard-locale.json",
    JSON.stringify({ keyboard, language }, null, 2),
  );
  fs.writeFileSync(
    "audit/browser.json",
    JSON.stringify(
      {
        checks,
        accessibility,
        errors,
        calculated,
        downloads,
        videoCount,
        focus,
      },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify(
      { checks, accessibility, errors, calculated, videoCount, focus },
      null,
      2,
    ),
  );
  await browser.close();
  server.kill();
})();
````

## scripts/qa/form-fixture.cjs

````javascript
/* eslint-disable @typescript-eslint/no-require-imports -- Node audit utilities use CommonJS. */
const { chromium } = require("playwright");
const cp = require("child_process"),
  fs = require("fs");
(async () => {
  const server = cp.spawn(
    "python3",
    ["-m", "http.server", "4173", "--directory", "out"],
    { stdio: "ignore" },
  );
  await new Promise((r) => setTimeout(r, 600));
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ["--no-sandbox"],
  });
  try {
    const page = await browser.newPage({ reducedMotion: "reduce" });
    const en = JSON.parse(fs.readFileSync("content/en.json", "utf8"));
    const payloads = [];
    let fail = true;
    await page.route("https://xoxo-test.invalid/lead", async (route) => {
      payloads.push(route.request().postDataJSON());
      await route.fulfill({
        status: fail ? 500 : 201,
        contentType: "application/json",
        body: "{}",
      });
    });
    await page.goto("http://127.0.0.1:4173/en/?ref=qa&utm_source=fixture", {
      waitUntil: "networkidle",
    });
    await page.locator("#meeting-name").fill("   ");
    await page.locator("#meeting-contact").fill("test@example.com");
    await page.locator(".contact input[type=checkbox]").check();
    await page.locator(".contact button[type=submit]").click();
    const whitespaceRejected = await page
      .locator("#meeting-name")
      .evaluate((e) => !e.validity.valid);
    await page.locator("#meeting-name").fill("QA synthetic");
    await page.locator("#meeting-contact").fill("invalid");
    await page.locator(".contact button[type=submit]").click();
    const invalidRejected = await page
      .locator("#meeting-contact")
      .evaluate((e) => !e.validity.valid);
    await page.locator("#meeting-contact").fill("test@example.com");
    await page.locator("#meeting-kind").selectOption("data-room");
    await page.locator(".contact button[type=submit]").click();
    await page.getByText(en.contact.error, { exact: true }).waitFor();
    fail = false;
    await page.locator(".contact button[type=submit]").click();
    await page.getByText(en.contact.sent, { exact: true }).waitFor();
    const result = {
      fixtureOnly: true,
      realDestinationVerified: false,
      whitespaceRejected,
      invalidRejected,
      errorThenSuccess: true,
      payloads,
    };
    if (
      !whitespaceRejected ||
      !invalidRejected ||
      payloads.length !== 2 ||
      payloads[1].attribution.ref !== "qa"
    )
      throw new Error(JSON.stringify(result));
    fs.writeFileSync(
      "audit/form-fixture.json",
      JSON.stringify(result, null, 2),
    );
    console.log(JSON.stringify(result));
  } finally {
    await browser.close();
    server.kill();
  }
})();
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

## scripts/qa/motion.cjs

````javascript
/* eslint-disable @typescript-eslint/no-require-imports -- Node audit utility uses CommonJS. */
const { chromium } = require("playwright");
const fs = require("fs"),
  cp = require("child_process"),
  zlib = require("zlib");
(async () => {
  const server = cp.spawn(
    "python3",
    ["-m", "http.server", "4173", "--directory", "out"],
    { stdio: "ignore" },
  );
  await new Promise((r) => setTimeout(r, 600));
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ["--no-sandbox"],
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });
    const scripts = new Set(),
      errors = [];
    page.on("request", (r) => {
      if (r.resourceType() === "script") scripts.add(new URL(r.url()).pathname);
    });
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
    await page.waitForFunction(
      () => document.querySelector("#hero-film-mobile").currentTime > 0,
    );
    const mobile = await page
      .locator("#hero-film-mobile")
      .evaluate((v) => ({
        src: v.getAttribute("src"),
        playing: !v.paused,
        readyState: v.readyState,
      }));
    await page.screenshot({
      path: "audit/screenshots/hero-playing-390.jpg",
      quality: 78,
    });
    await page.locator(".film-toggle").click();
    const paused = await page
      .locator("#hero-film-mobile")
      .evaluate((v) => v.paused);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForFunction(
      () => document.querySelector("#hero-film-desktop").currentTime > 0,
    );
    const desktop = await page
      .locator("#hero-film-desktop")
      .evaluate((v) => ({ src: v.getAttribute("src"), playing: !v.paused }));
    const hiddenPaused = await page
      .locator("#hero-film-mobile")
      .evaluate((v) => v.paused);
    await page.locator("#cups").fill("135");
    await page.waitForTimeout(350);
    const jsGzipBytes = [...scripts]
      .filter((x) => x.endsWith(".js"))
      .reduce(
        (n, p) => n + zlib.gzipSync(fs.readFileSync("out" + p)).length,
        0,
      );
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(200);
    const reducedSources = await page.locator("video[src]").count();
    const report = {
      mobile,
      paused,
      desktop,
      hiddenPaused,
      reducedSources,
      jsGzipBytesAfterCalculatorInteraction: jsGzipBytes,
      scriptCount: scripts.size,
      errors,
    };
    if (
      !mobile.playing ||
      !paused ||
      !desktop.playing ||
      !hiddenPaused ||
      reducedSources !== 0 ||
      errors.length
    )
      throw new Error(JSON.stringify(report));
    fs.writeFileSync("audit/motion.json", JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report));
  } finally {
    await browser.close();
    server.kill();
  }
})();
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
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("en", "investors");
export default function Page() {
  return <Experience locale="en" kind="investors" />;
}
````

## src/app/en/menu/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("en", "menu");
export default function Page() {
  return <Experience locale="en" kind="menu" />;
}
````

## src/app/en/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("en", "home");
export default function Page() {
  return <Experience locale="en" kind="home" />;
}
````

## src/app/en/press/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("en", "press");
export default function Page() {
  return <Experience locale="en" kind="press" />;
}
````

## src/app/globals.css

````css
@import "tailwindcss";
@theme {
  --color-paper: #f7f4ee;
  --color-tea: #173f35;
  --color-ink: #182a25;
  --color-accent: #dbfb6b;
  --color-muted: #59665c;
  --font-sans: var(--font-manrope);
  --font-display: var(--font-display-face);
}
:root {
  --paper: #f7f4ee;
  --tea: #173f35;
  --ink: #182a25;
  --accent: #dbfb6b;
  --line: #d7dace;
  --muted: #59665c;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-manrope), sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
a {
  color: inherit;
  text-underline-offset: 5px;
}
button,
input,
select {
  font: inherit;
}
button,
a,
input,
select,
summary {
  -webkit-tap-highlight-color: transparent;
}
button,
a {
  touch-action: manipulation;
}
button {
  cursor: pointer;
}
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
summary:focus-visible {
  outline: 3px solid #937100;
  outline-offset: 5px;
}
::selection {
  background: var(--accent);
  color: var(--ink);
}
h1,
h2,
h3,
h4,
p,
figure {
  margin: 0;
}
h1,
h2 {
  font-family: var(--font-display-face), Georgia, serif;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.13;
  text-wrap: balance;
  white-space: pre-line;
}
h1 {
  font-size: clamp(44px, 5.8vw, 100px);
}
h2 {
  font-size: clamp(36px, 4.5vw, 76px);
}
h3 {
  font-size: clamp(21px, 2vw, 28px);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-wrap: balance;
}
h4 {
  font-size: 20px;
  font-weight: 600;
}
p {
  max-width: 68ch;
}
p + p {
  margin-top: 16px;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}
a {
  text-decoration: none;
}
main a:not(.button):not(.wordmark),
footer a:not(.button) {
  text-decoration: underline;
}
svg {
  max-width: 100%;
}
.skip {
  position: fixed;
  z-index: 100;
  top: -100px;
  left: 16px;
  background: var(--accent);
  padding: 16px;
}
.skip:focus {
  top: 16px;
}
.header {
  height: 96px;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  gap: 48px;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  position: relative;
  z-index: 10;
}
.wordmark {
  font-size: 48px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -0.09em;
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.wordmark span {
  font-size: 16px;
  letter-spacing: -0.02em;
}
.header nav {
  display: flex;
  margin-left: auto;
  gap: 40px;
  align-items: center;
}
.header a {
  min-height: 44px;
  display: flex;
  align-items: center;
}
.language {
  font-size: 15px;
  padding: 8px 16px;
  border: 1px solid var(--line);
  border-radius: 100px;
}
.eyebrow {
  font-size: 15px;
  letter-spacing: 0.08em;
  font-weight: 600;
  line-height: 1.5;
}
.intro {
  font-size: clamp(18px, 1.6vw, 24px);
  line-height: 1.5;
}
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  min-height: 56px;
  border-radius: 4px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid transparent;
  transition:
    background 0.25s var(--ease),
    transform 0.25s var(--ease);
  text-align: center;
}
.button:hover {
  transform: translateY(-2px);
}
.primary {
  background: var(--accent);
  color: var(--ink);
}
.primary:hover {
  background: #e9ffac;
}
.outline {
  border-color: currentColor;
  background: transparent;
}
.button:disabled {
  opacity: 0.6;
  cursor: wait;
}
.text-link {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.hero {
  height: calc(100svh - 96px);
  min-height: 690px;
  max-height: 1100px;
  position: relative;
  display: flex;
  align-items: center;
  isolation: isolate;
  background: #eae4d9;
}
.hero-media {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.hero-media .photo,
.hero-media .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.film {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.film-toggle {
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 3;
  border: 1px solid var(--tea);
  border-radius: 100px;
  background: var(--paper);
  color: var(--tea);
  width: 48px;
  height: 48px;
  font-size: 21px;
}
.hero-copy {
  margin-left: 6vw;
  max-width: 650px;
  width: 47%;
  padding: 32px;
  background: rgba(247, 244, 238, 0.95);
  border-radius: 2px;
}
.hero-copy .eyebrow {
  margin-bottom: 28px;
}
.hero-copy .intro {
  margin: 28px 0 32px;
  max-width: 32ch;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.hero-note {
  position: absolute;
  left: 6vw;
  bottom: 28px;
  background: var(--paper);
  padding: 8px 12px;
  font-size: 15px;
  max-width: 65%;
}
.hero-index {
  position: absolute;
  right: 6vw;
  top: 32px;
  font-size: 15px;
}
.section {
  padding: 112px 6vw;
  max-width: 1920px;
  margin: 0 auto;
}
.section-heading {
  max-width: 960px;
  margin-bottom: 48px;
}
.section-heading .eyebrow {
  margin-bottom: 24px;
}
.section-heading .intro {
  margin-top: 24px;
  max-width: 48ch;
}
.section-top {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-end;
  margin-bottom: 40px;
}
.section-top .section-heading {
  margin-bottom: 0;
}
.thesis {
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--tea);
  color: var(--paper);
  max-width: none;
}
.thesis h2 {
  font-size: clamp(40px, 5.6vw, 92px);
  margin: 32px 0;
}
.thesis p:last-child {
  max-width: 50ch;
  font-size: 19px;
}
.photo {
  display: block;
  overflow: hidden;
}
.photo img {
  width: 100%;
  object-fit: cover;
}
.drink-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 48px 28px;
}
.drink-grid .drink {
  grid-column: span 2;
}
.drink-grid .drink:nth-child(1) {
  grid-column: span 3;
}
.drink-grid .drink:nth-child(2) {
  grid-column: span 3;
}
.drink-image {
  position: relative;
  overflow: hidden;
  background: #eae5da;
}
.drink-image .photo img {
  aspect-ratio: 1;
  transition: transform 0.4s var(--ease);
}
.drink:hover .drink-image img {
  transform: scale(1.025);
}
.product-number {
  position: absolute;
  top: 16px;
  left: 20px;
  font-size: 15px;
}
.drink-copy {
  padding: 24px 0;
}
.drink-title {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: baseline;
  margin-bottom: 8px;
}
.drink-title h3 {
  font-size: 23px;
}
.drink-title > span {
  white-space: nowrap;
  font-size: 16px;
}
.drink-copy p {
  font-size: 16px;
}
.drink-copy .note {
  margin-bottom: 16px;
}
.sensory {
  color: var(--muted);
}
.note {
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
}
.assumption {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 100%;
  margin-top: 24px;
  overflow-wrap: break-word;
}
.world {
  background: #eeeae1;
}
.interior .photo img {
  aspect-ratio: 1.5;
  object-fit: cover;
}
.interior figcaption {
  font-size: 15px;
  margin-top: 16px;
}
.ritual-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin-top: 56px;
}
.ritual-grid img {
  aspect-ratio: 0.8;
}
.ritual-grid figcaption {
  font-size: 16px;
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
.ritual-grid figcaption span {
  color: var(--muted);
}
.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 24px;
}
.chart {
  padding: 40px;
  background: #eeeae1;
  border-top: 1px solid var(--tea);
}
.chart figcaption {
  font-size: 19px;
  font-weight: 600;
}
.bars {
  display: flex;
  gap: 48px;
  height: 240px;
  align-items: flex-end;
  max-width: 380px;
  margin: 24px auto 40px;
}
.bar-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
.bar-column strong {
  font-size: 27px;
  font-weight: 500;
}
.bar {
  width: 100%;
  background: var(--tea);
}
.bar-column:first-child .bar {
  background: #687c6a;
}
.chart a {
  display: inline-block;
  margin-top: 16px;
  font-size: 15px;
  min-height: 44px;
}
.market-travel {
  margin: 40px 0 24px;
}
.market h3 {
  margin: 48px 0 24px;
}
.three-grid,
.formats,
.roadmap,
.scenario-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.three-grid article {
  border-top: 1px solid var(--line);
  padding-top: 24px;
}
.economics {
  background: var(--tea);
  color: var(--paper);
  max-width: none;
}
.economics .note,
.economics .assumption {
  color: #d5dfd6;
}
.currency {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 32px;
  padding: 0;
  border: 0;
}
.currency legend {
  float: left;
  padding: 8px 24px 8px 0;
  font-size: 15px;
}
.currency button {
  min-width: 60px;
  min-height: 44px;
  border: 1px solid #82988b;
  border-radius: 4px;
  background: transparent;
}
.currency button[aria-pressed="true"] {
  background: var(--paper);
  color: var(--tea);
}
.model-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
}
.sliders label {
  display: block;
  margin-bottom: 24px;
}
.sliders label span {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.sliders output {
  font-weight: 600;
  white-space: nowrap;
}
input[type="range"] {
  width: 100%;
  height: 44px;
  accent-color: var(--paper);
  cursor: pointer;
  background: transparent;
}
.model-results {
  border-left: 1px solid #70867a;
  padding-left: 48px;
}
.ebitda {
  display: block;
  font-size: clamp(36px, 4vw, 72px);
  letter-spacing: -0.045em;
  line-height: 1.2;
  margin: 16px 0 40px;
  font-weight: 500;
}
.result-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
}
.result-grid dt {
  font-size: 15px;
  color: #d5dfd6;
}
.result-grid dd {
  margin: 8px 0 0;
  font-size: 25px;
  line-height: 1.3;
}
.model h3 {
  margin: 48px 0 24px;
}
.scenario {
  padding: 28px 24px;
  border: 1px solid #70867a;
}
.scenario.base {
  background: var(--paper);
  color: var(--tea);
}
.scenario > p {
  margin-top: 12px;
  font-size: 15px;
}
.scenario dl {
  margin: 24px 0 0;
}
.scenario dl > div {
  padding: 14px 0;
  border-top: 1px solid #849489;
}
.scenario dt {
  font-size: 15px;
}
.scenario dd {
  font-size: 24px;
  margin: 4px 0 0;
}
.model + .note {
  margin-top: 24px;
}
.format {
  padding: 32px;
  border: 1px solid var(--line);
}
.format.selected {
  background: #e9ede3;
}
.format-plan {
  display: flex;
  border: 2px solid var(--tea);
  height: 110px;
  width: 150px;
  align-items: flex-end;
  padding: 12px;
  gap: 8px;
  margin: 8px 0 40px;
}
.format-plan i {
  display: block;
  width: 26px;
  height: 38px;
  background: var(--tea);
}
.format-plan i:last-child {
  margin-left: auto;
  height: 75px;
  width: 12px;
}
.format h3 {
  margin-bottom: 24px;
}
.format strong {
  font-weight: 500;
  font-size: 34px;
}
.roadmap {
  margin: 64px 0 32px;
}
.roadmap article {
  border-top: 2px solid var(--tea);
  padding-top: 24px;
}
.roadmap h3 {
  margin: 20px 0;
}
.funds {
  background: #eeeae1;
}
.funds-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
}
.funds-total strong {
  display: block;
  font-size: clamp(44px, 5vw, 84px);
  letter-spacing: -0.055em;
  font-weight: 500;
}
.funds-total .photo {
  max-width: 360px;
  margin-top: 32px;
}
.funds-total img {
  aspect-ratio: 0.8;
}
.fund-row {
  margin-bottom: 28px;
}
.fund-row > div:first-child {
  display: flex;
  gap: 24px;
  justify-content: space-between;
}
.fund-row h3 {
  font-size: 19px;
}
.fund-row strong {
  white-space: nowrap;
}
.fund-row p {
  font-size: 15px;
  color: var(--muted);
}
.allocation {
  height: 6px;
  background: #d6dacd;
  margin: 14px 0;
}
.allocation span {
  display: block;
  height: 6px;
  background: var(--tea);
}
.funds > h3 {
  margin-top: 48px;
}
.terms {
  margin: 32px 0 0;
}
.terms > div {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  border-top: 1px solid #c4cbbf;
  padding: 24px 0;
}
.terms dt {
  font-weight: 600;
}
.terms dd {
  margin: 0;
  font-size: 16px;
  max-width: 65ch;
}
.two-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.evidence {
  border-top: 1px solid var(--line);
  padding-top: 24px;
}
.evidence p {
  margin-top: 12px;
}
.risks {
  margin-top: 24px;
}
.evidence + .evidence {
  margin-top: 0;
}
#traction > h3 {
  margin-top: 64px;
}
details {
  border-top: 1px solid var(--line);
  padding: 16px 0;
}
summary {
  cursor: pointer;
  min-height: 44px;
  align-content: center;
  font-size: 17px;
}
summary span {
  float: right;
}
details p {
  padding: 16px 0;
}
.team {
  background: #eeeae1;
}
.team-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
  align-items: center;
}
.founder-mark {
  font-size: 160px;
  letter-spacing: -0.12em;
  line-height: 1;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  background: var(--tea);
  color: var(--paper);
  max-width: 320px;
}
.team-row .eyebrow {
  margin: 16px 0 24px;
}
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
}
.contact .section-heading h2 {
  font-size: clamp(36px, 4vw, 64px);
}
.contact-links {
  display: grid;
  gap: 24px;
  margin-top: 32px;
}
.lead-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-content: start;
}
.lead-form label {
  font-size: 15px;
  display: block;
}
.lead-form input:not([type="checkbox"]),
.lead-form select {
  display: block;
  width: 100%;
  margin-top: 8px;
  min-height: 52px;
  padding: 12px;
  border: 1px solid #adb9a9;
  border-radius: 2px;
  background: var(--paper);
  color: var(--ink);
  font-size: 16px;
}
.span-all {
  grid-column: 1/-1;
}
.lead-form .consent {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
}
.consent input {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  accent-color: var(--tea);
}
.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.confirmation {
  border: 1px solid var(--tea);
  padding: 40px;
  align-self: start;
}
.confirmation p {
  margin: 24px 0;
}
.footer {
  background: var(--tea);
  color: var(--paper);
  padding: 80px 6vw 0;
  overflow: hidden;
}
.footer .note {
  color: #d5dfd6;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 120px;
}
.footer h2 {
  font-size: clamp(32px, 3.3vw, 52px);
  margin: 20px 0 32px;
  max-width: 16ch;
}
.footer .lead-form {
  max-width: 600px;
}
.footer-location {
  padding-top: 50px;
}
.footer-location p {
  margin-top: 16px;
}
.footer-location a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 16px;
}
.footer-bottom {
  display: flex;
  gap: 32px;
  justify-content: space-between;
  border-top: 1px solid #6c8375;
  padding-top: 24px;
  margin-top: 48px;
  font-size: 15px;
}
.footer-bottom p {
  max-width: 60ch;
}
.footer-wordmark {
  font-size: clamp(160px, 31vw, 580px);
  letter-spacing: -0.095em;
  font-weight: 500;
  line-height: 0.9;
  text-align: center;
  padding-top: 64px;
  padding-bottom: 24px;
  user-select: none;
}
.footer details {
  margin-top: 48px;
  border-color: #6c8375;
}
.subhero {
  padding-top: 96px;
  padding-bottom: 64px;
}
.subhero h1 {
  max-width: 14ch;
  margin: 24px 0;
}
.subhero .intro {
  margin: 32px 0;
  max-width: 50ch;
}
.subhero + .signatures {
  padding-top: 32px;
}
.full-menu {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px 32px;
}
.full-menu .drink {
  border-bottom: 1px solid var(--line);
}
.full-menu .drink-title {
  display: block;
}
.full-menu .drink-title > span {
  display: block;
  margin-top: 12px;
}
.brand-lockup {
  font-size: clamp(100px, 20vw, 300px);
  letter-spacing: -0.09em;
  background: var(--tea);
  color: var(--paper);
  line-height: 1.2;
  margin: 64px 0 32px;
  text-align: center;
  padding: 48px;
}
.brand-lockup span {
  font-size: 30px;
  letter-spacing: 0;
  margin-left: 24px;
}
.press-page .hero-actions {
  margin: 32px 0 64px;
}
.mobile-cta {
  display: none;
}
@media (min-width: 1920px) {
  .hero-copy {
    margin-left: calc((100vw - 1680px) / 2);
  }
}
@media (max-width: 1023px) {
  .header {
    gap: 24px;
    padding: 0 4vw;
  }
  .header nav {
    gap: 24px;
  }
  .section {
    padding: 80px 5vw;
  }
  .hero-copy {
    width: 53%;
    margin-left: 3vw;
    padding: 24px;
  }
  .model-grid {
    gap: 32px;
  }
  .model-results {
    padding-left: 24px;
  }
  .funds-grid {
    gap: 32px;
  }
  .contact {
    gap: 32px;
  }
  .lead-form {
    grid-template-columns: 1fr;
  }
  .lead-form > * {
    grid-column: 1;
  }
  .footer-top {
    gap: 48px;
  }
  .ritual-grid {
    gap: 16px;
  }
  .full-menu {
    grid-template-columns: 1fr 1fr;
  }
  .scenario {
    padding: 20px 16px;
  }
  .scenario dd {
    font-size: 21px;
  }
}
@media (max-width: 767px) {
  html {
    scroll-padding-top: 20px;
  }
  .header {
    height: 76px;
    gap: 16px;
    padding: 0 20px;
  }
  .wordmark {
    font-size: 39px;
  }
  .wordmark span {
    font-size: 15px;
  }
  .header nav {
    gap: 12px;
  }
  .header nav a {
    font-size: 15px;
  }
  .header nav a:first-child {
    display: none;
  }
  .language {
    padding: 8px 12px;
  }
  .hero {
    height: 88svh;
    min-height: 690px;
    max-height: 920px;
    align-items: flex-end;
    padding-bottom: 60px;
  }
  .hero-media {
    inset: 0;
  }
  .hero-media .photo img {
    object-position: 70% center;
  }
  .hero-copy {
    width: calc(100% - 40px);
    margin: 0 20px;
    padding: 22px;
    background: rgba(247, 244, 238, 0.98);
  }
  .hero h1 {
    font-size: clamp(39px, 9.8vw, 56px);
  }
  .hero-copy .eyebrow {
    margin-bottom: 14px;
    font-size: 15px;
  }
  .hero-copy .intro {
    margin: 18px 0 20px;
    font-size: 18px;
  }
  .hero-actions {
    gap: 12px;
  }
  .hero-actions .button {
    padding: 12px 16px;
    gap: 12px;
  }
  .hero-note {
    bottom: 16px;
    left: 20px;
    max-width: calc(100% - 90px);
    font-size: 15px;
    line-height: 1.35;
    padding: 4px 8px;
  }
  .hero-index {
    top: 20px;
    right: 20px;
  }
  .film-toggle {
    bottom: 16px;
    right: 16px;
  }
  .section {
    padding: 64px 20px;
  }
  h2 {
    font-size: clamp(34px, 8.7vw, 46px);
  }
  .section-heading {
    margin-bottom: 32px;
  }
  .section-heading .eyebrow {
    margin-bottom: 20px;
  }
  .section-heading .intro {
    margin-top: 20px;
  }
  .thesis {
    min-height: 520px;
    padding: 64px 24px;
  }
  .thesis h2 {
    font-size: clamp(38px, 9.5vw, 52px);
  }
  .thesis p:last-child {
    font-size: 18px;
  }
  .section-top {
    display: block;
    margin-bottom: 32px;
  }
  .section-top .text-link {
    margin-top: 20px;
  }
  .drink-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    scrollbar-width: thin;
    padding-bottom: 16px;
    overscroll-behavior-x: contain;
  }
  .drink-grid .drink {
    flex: 0 0 88%;
    min-width: 0;
    scroll-snap-align: start;
  }
  .drink-title {
    display: block;
  }
  .drink-title > span {
    display: block;
    margin-top: 8px;
  }
  .drink-title h3 {
    font-size: 24px;
  }
  .drink-copy {
    padding: 20px 0;
  }
  .ritual-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
    margin-top: 32px;
  }
  .ritual-grid figcaption {
    display: block;
    font-size: 15px;
  }
  .ritual-grid figcaption span {
    display: block;
    margin-bottom: 4px;
  }
  .charts {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .chart {
    padding: 24px;
  }
  .chart figcaption {
    font-size: 17px;
  }
  .bars {
    height: 230px;
    gap: 40px;
    margin-bottom: 24px;
  }
  .bar-column strong {
    font-size: 25px;
  }
  .three-grid,
  .formats,
  .roadmap,
  .scenario-grid,
  .two-grid {
    grid-template-columns: 1fr;
  }
  .three-grid {
    gap: 32px;
  }
  .market-travel {
    margin-top: 32px;
  }
  .model-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .model-results {
    border-left: 0;
    border-top: 1px solid #70867a;
    padding: 32px 0 0;
  }
  .ebitda {
    font-size: clamp(38px, 11vw, 56px);
    margin: 16px 0 32px;
  }
  .result-grid {
    gap: 24px 16px;
  }
  .result-grid dd {
    font-size: 23px;
  }
  .currency {
    flex-wrap: wrap;
  }
  .currency legend {
    float: none;
    width: 100%;
    margin-bottom: 8px;
  }
  .scenario {
    padding: 24px;
  }
  .scenario dl > div {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
  }
  .scenario dd {
    white-space: nowrap;
    font-size: 21px;
  }
  .scenario dt {
    max-width: 55%;
  }
  .format {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px 20px;
    padding: 24px;
  }
  .format-plan {
    grid-column: 2;
    grid-row: 1/5;
    width: 76px;
    height: 100px;
    padding: 8px;
    margin: 0;
    align-self: center;
  }
  .format-plan i {
    width: 14px;
    height: 24px;
  }
  .format-plan i:last-child {
    height: 60px;
    width: 8px;
  }
  .format h3 {
    margin-bottom: 12px;
    font-size: 23px;
  }
  .format strong {
    font-size: 30px;
  }
  .format p {
    grid-column: 1;
    margin: 0;
    font-size: 15px;
  }
  .roadmap {
    gap: 32px;
    margin-top: 48px;
  }
  .funds-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .funds-total strong {
    font-size: 58px;
  }
  .funds-total .photo {
    display: none;
  }
  .fund-row > div:first-child {
    gap: 16px;
  }
  .fund-row h3 {
    font-size: 18px;
  }
  .fund-row strong {
    font-size: 16px;
  }
  .terms > div {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .team-row {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .founder-mark {
    max-width: 180px;
    font-size: 100px;
  }
  .contact {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .lead-form {
    gap: 20px;
  }
  .footer {
    padding: 64px 20px 96px;
  }
  .footer-top {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .footer-location {
    padding-top: 0;
  }
  .footer h2 {
    max-width: 100%;
  }
  .footer-bottom {
    display: block;
  }
  .footer-bottom p {
    margin-top: 24px;
  }
  .footer-wordmark {
    font-size: 31vw;
    padding-top: 48px;
  }
  .mobile-cta {
    display: flex;
    position: fixed;
    z-index: 30;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--paper);
    padding: 12px 16px max(12px, env(safe-area-inset-bottom));
    gap: 12px;
    border-top: 1px solid var(--line);
  }
  .mobile-cta .button {
    font-size: 15px;
    min-height: 48px;
    padding: 10px 12px;
    gap: 8px;
  }
  .mobile-cta .primary {
    flex: 1;
  }
  .subhero {
    padding-top: 64px;
  }
  .subhero h1 {
    font-size: clamp(39px, 10vw, 54px);
  }
  .full-menu {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .full-menu .drink-image {
    max-width: 360px;
  }
  .brand-lockup {
    margin: 40px 0 24px;
    padding: 32px 16px;
  }
  .brand-lockup span {
    font-size: 20px;
    margin-left: 12px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
  .film {
    display: none;
  }
}
@media print {
  .header,
  .footer,
  .mobile-cta,
  .film,
  .film-toggle,
  .hero-actions,
  .lead-form {
    display: none;
  }
  .section {
    padding: 24px 0;
  }
  .full-menu {
    grid-template-columns: 1fr 1fr;
  }
  .photo {
    display: none;
  }
  body {
    font-size: 15px;
  }
  .drink {
    break-inside: avoid;
  }
  a {
    color: inherit;
  }
  h1 {
    font-size: 38px;
  }
  h2 {
    font-size: 30px;
  }
}
.market-travel a,
.economics > .note a,
details > a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .interior img {
      animation: ritual-focus linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 45%;
    }
    @keyframes ritual-focus {
      from {
        transform: scale(1.06);
      }
      to {
        transform: scale(1);
      }
    }
  }
}
.drink-grid:focus-visible {
  outline: 3px solid #937100;
  outline-offset: 6px;
}
@media (max-width: 767px) {
  .hero-media {
    height: 56%;
    bottom: auto;
  }
  .hero-media .photo img,
  .hero-media .film {
    object-position: center 72%;
  }
  .hero-copy {
    position: relative;
    z-index: 2;
    margin-bottom: 8px;
  }
  .hero-note {
    top: 16px;
    bottom: auto;
    max-width: 65%;
    background: rgba(247, 244, 238, 0.95);
  }
  .hero-index {
    top: 24px;
  }
  .hero-media .film-toggle {
    bottom: auto;
    top: 72px;
    right: 16px;
  }
  .hero {
    background: #ddd7c9;
  }
  .hero h1 {
    font-size: clamp(34px, 9vw, 42px);
  }
}

.film-mobile {
  display: none;
}
@media (max-width: 767px) {
  .film-mobile {
    display: block;
  }
  .film-desktop {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .film {
    display: none;
  }
}
.hero h1 {
  font-size: clamp(40px, 6vw, 88px);
}
@media (max-width: 767px) {
  .hero h1 {
    font-size: clamp(34px, 9vw, 42px);
  }
  .hero .hero-actions {
    gap: 8px;
  }
  .hero .hero-actions .button {
    padding-inline: 12px;
    gap: 8px;
  }
}
````

## src/app/investors/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("uk", "investors");
export default function Page() {
  return <Experience locale="uk" kind="investors" />;
}
````

## src/app/layout.tsx

````tsx
import { Manrope, Noto_Serif } from "next/font/google";
import type { Metadata, Viewport } from "next";
import uk from "../../content/uk.json";
import { origin } from "@/lib/investor-content";
import "./globals.css";
const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});
const display = Noto_Serif({
  subsets: ["latin", "cyrillic"],
  weight: "500",
  variable: "--font-display-face",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: uk.metadata.home,
  description: uk.metadata.description,
  icons: { icon: "/press/favicon.svg" },
};
export const viewport: Viewport = {
  themeColor: "#173f35",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
````

## src/app/manifest.ts

````typescript
import uk from "../../content/uk.json";
export const dynamic = "force-static";
export default function manifest() {
  return {
    name: uk.brand,
    short_name: uk.wordmark,
    description: uk.metadata.description,
    start_url: "/",
    display: "standalone" as const,
    background_color: "#f7f4ee",
    theme_color: "#173f35",
    lang: "uk",
  };
}
````

## src/app/menu/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("uk", "menu");
export default function Page() {
  return <Experience locale="uk" kind="menu" />;
}
````

## src/app/not-found.tsx

````tsx
import Link from "next/link";
import uk from "../../content/uk.json";
export default function NotFound() {
  return (
    <main className="section subhero">
      <h1>{uk.notFound.title}</h1>
      <Link className="button primary" href="/">
        {uk.notFound.body}
      </Link>
    </main>
  );
}
````

## src/app/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("uk", "home");
export default function Page() {
  return <Experience locale="uk" kind="home" />;
}
````

## src/app/press/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("uk", "press");
export default function Page() {
  return <Experience locale="uk" kind="press" />;
}
````

## src/app/robots.ts

````typescript
import { origin } from "@/lib/investor-content";
export const dynamic = "force-static";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: origin + "/sitemap.xml",
  };
}
````

## src/app/ru/page.tsx

````tsx
import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = {
  ...pageMetadata("uk", "home"),
  robots: { index: false, follow: true },
};
export default function Page() {
  return <Experience locale="uk" />;
}
````

## src/app/sitemap.ts

````typescript
import type { MetadataRoute } from "next";
import { origin, route } from "@/lib/investor-content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return (["uk", "en"] as const).flatMap((l) =>
    ["", "menu", "investors", "press"].map((p) => ({
      url: origin + route(l, p),
      lastModified: new Date("2026-09-13"),
      priority: p ? 0.7 : 1,
    })),
  );
}
````

## src/components/investor/Behavior.tsx

````tsx
"use client";
import { useEffect } from "react";
import { connection } from "@/lib/investor-content";
export function track(
  name: string,
  props: Record<string, string | number> = {},
) {
  const w = window as Window & {
    plausible?: (
      name: string,
      options: { props: Record<string, string | number> },
    ) => void;
  };
  w.plausible?.(name, { props });
}
export function getAttribution() {
  try {
    return JSON.parse(
      sessionStorage.getItem("xoxo-attribution") || "{}",
    ) as Record<string, string>;
  } catch {
    return {};
  }
}
export function Behavior({ locale }: { locale: "uk" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    const params = new URLSearchParams(location.search),
      attribution: Record<string, string> = {};
    for (const key of [
      "ref",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ]) {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 150);
    }
    try {
      if (Object.keys(attribution).length)
        sessionStorage.setItem("xoxo-attribution", JSON.stringify(attribution));
    } catch {}
    const click = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>(
        "[data-track]",
      );
      if (target) track("CTA", { action: target.dataset.track || "", locale });
    };
    document.addEventListener("click", click);
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            track("Investor section", { section: entry.target.id, locale });
          }
        }),
      { threshold: 0.2 },
    );
    document
      .querySelectorAll("[data-investor]")
      .forEach((el) => observer.observe(el));
    const depths = new Set<number>();
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max <= 0) return;
      const pct = (scrollY / max) * 100;
      for (const depth of [25, 50, 75, 100])
        if (pct >= depth - 1 && !depths.has(depth)) {
          depths.add(depth);
          track("Scroll depth", { depth, locale });
        }
    };
    addEventListener("scroll", scroll, { passive: true });
    let script: HTMLScriptElement | undefined;
    if (
      connection.plausible &&
      !document.querySelector("[data-xoxo-analytics]")
    ) {
      script = document.createElement("script");
      script.defer = true;
      script.src = "https://plausible.io/js/script.manual.js";
      script.dataset.domain = connection.plausible;
      script.dataset.xoxoAnalytics = "true";
      document.head.append(script);
      script.onload = () => track("pageview");
    }
    return () => {
      document.removeEventListener("click", click);
      removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, [locale]);
  return null;
}
````

## src/components/investor/CityMap.tsx

````tsx
"use client";
import { useState } from "react";
export function CityMap({ label, title }: { label: string; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <iframe
          title={title}
          src="https://www.google.com/maps?q=Mykolaiv%2C%20Ukraine&output=embed"
          width="100%"
          height="240"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      ) : (
        <button
          className="button outline"
          type="button"
          onClick={() => setOpen(true)}
          data-track="city-map"
        >
          {label} ↗
        </button>
      )}
    </div>
  );
}
````

## src/components/investor/Economics.tsx

````tsx
"use client";
import { useRef, useState } from "react";
import type { Copy, Locale } from "@/lib/investor-content";
import { calculate, defaults, scenarios, formatMoney } from "@/lib/store-model";
export function Economics({
  c,
  locale,
}: {
  c: Copy["economics"];
  locale: Locale;
}) {
  const [inputs, setInputs] = useState(defaults),
    [usd, setUsd] = useState(false);
  const result = calculate(inputs);
  const number = useRef<HTMLElement>(null);
  const animateNumber = () => {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
      import("framer-motion/dom/mini")
        .then(({ animate }) => {
          if (number.current)
            animate(
              number.current,
              {
                opacity: [0.5, 1],
                transform: ["translateY(4px)", "translateY(0px)"],
              },
              { duration: 0.2 },
            );
        })
        .catch(() => {});
  };
  const money = (n: number) => formatMoney(n, locale, usd);
  const fields = [
    { key: "cups", min: 30, max: 350, step: 5 },
    { key: "ticket", min: 120, max: 260, step: 5 },
    { key: "rent", min: 15000, max: 120000, step: 5000 },
    { key: "staff", min: 100000, max: 350000, step: 10000 },
  ] as const;
  return (
    <div className="model">
      <fieldset className="currency">
        <legend>{c.currency}</legend>
        <button type="button" aria-pressed={!usd} onClick={() => setUsd(false)}>
          {c.uah}
        </button>
        <button type="button" aria-pressed={usd} onClick={() => setUsd(true)}>
          {c.usd}
        </button>
      </fieldset>
      <div className="model-grid">
        <div className="sliders">
          {fields.map((f) => (
            <label key={f.key} htmlFor={f.key}>
              <span>
                {c[f.key]}
                <output htmlFor={f.key}>
                  {f.key === "cups" ? inputs[f.key] : money(inputs[f.key])}
                </output>
              </span>
              <input
                id={f.key}
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={inputs[f.key]}
                aria-valuetext={
                  f.key === "cups"
                    ? String(inputs[f.key])
                    : money(inputs[f.key])
                }
                onChange={(e) => {
                  setInputs({ ...inputs, [f.key]: Number(e.target.value) });
                  animateNumber();
                }}
              />
            </label>
          ))}
        </div>
        <div className="model-results" aria-live="polite" aria-atomic="true">
          <p>{c.ebitda}</p>
          <strong ref={number} className="ebitda">
            {money(result.ebitda)}
          </strong>
          <dl className="result-grid">
            <div>
              <dt>{c.gross}</dt>
              <dd>
                {(result.grossMargin * 100).toLocaleString(locale, {
                  maximumFractionDigits: 1,
                })}
                %
              </dd>
            </div>
            <div>
              <dt>{c.contribution}</dt>
              <dd>{money(result.contribution)}</dd>
            </div>
            <div>
              <dt>{c.payback}</dt>
              <dd>
                {result.payback === null
                  ? c.none
                  : result.payback.toLocaleString(locale, {
                      maximumFractionDigits: 1,
                    })}
              </dd>
            </div>
            <div>
              <dt>{c.breakEven}</dt>
              <dd>{result.breakEven ?? c.none}</dd>
            </div>
          </dl>
        </div>
      </div>
      <h3>{c.scenarioTitle}</h3>
      <div className="scenario-grid">
        {scenarios.map((s, i) => {
          const r = calculate(s);
          return (
            <article key={i} className={i === 1 ? "scenario base" : "scenario"}>
              <h4>{c.scenarios[i]}</h4>
              <p>
                {s.cups} · {c.cups} / {money(s.ticket)}
              </p>
              <dl>
                {[
                  [c.revenue, money(r.revenue)],
                  [c.ebitda, money(r.ebitda)],
                  [
                    c.payback,
                    r.payback === null
                      ? c.none
                      : r.payback.toLocaleString(locale, {
                          maximumFractionDigits: 1,
                        }),
                  ],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>
      <p className="assumption">{c.assumptions}</p>
      <p className="note">{c.explanation}</p>
    </div>
  );
}
````

## src/components/investor/Experience.tsx

````tsx
import { CityMap } from "./CityMap";
import type { Metadata } from "next";
import {
  copy,
  route,
  origin,
  connection,
  type Locale,
  type Copy,
} from "@/lib/investor-content";
import { formatMoney } from "@/lib/store-model";
import { Photo } from "./Photo";
import { Film } from "./Film";
import { Behavior } from "./Behavior";
import { Economics } from "./Economics";
import { LeadForm } from "./LeadForm";
export type PageKind = "home" | "menu" | "investors" | "press";
export function pageMetadata(locale: Locale, kind: PageKind): Metadata {
  const c = copy(locale),
    path = kind === "home" ? "" : kind;
  return {
    title: c.metadata[kind],
    description: c.metadata.description,
    alternates: {
      canonical: origin + route(locale, path),
      languages: {
        "uk-UA": origin + route("uk", path),
        en: origin + route("en", path),
        "x-default": origin + route("uk", path),
      },
    },
    openGraph: {
      title: c.metadata[kind],
      description: c.metadata.description,
      locale: locale === "uk" ? "uk_UA" : "en_US",
      images: [
        { url: "/assets/og.jpg", width: 1200, height: 630, alt: c.hero.alt },
      ],
      url: origin + route(locale, path),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: c.metadata[kind],
      description: c.metadata.description,
      images: ["/assets/og.jpg"],
    },
  };
}
function Heading({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {body && <p className="intro">{body}</p>}
    </div>
  );
}
function Signatures({
  c,
  locale,
  full = false,
}: {
  c: Copy;
  locale: Locale;
  full?: boolean;
}) {
  return (
    <section id="menu" className="section signatures">
      <div className="section-top">
        <Heading {...c.signature} />
        {!full && (
          <a
            className="text-link"
            href={route(locale, "menu")}
            data-track="full-menu"
          >
            {c.signature.all} ↗
          </a>
        )}
      </div>
      <div
        className={full ? "full-menu" : "drink-grid"}
        tabIndex={full ? undefined : 0}
        role={full ? undefined : "region"}
        aria-label={full ? undefined : c.signature.title}
      >
        {c.drinks.slice(0, full ? undefined : 5).map((d, i) => (
          <article className="drink" key={d.name}>
            {d.image && i < 5 && (
              <div className="drink-image">
                <Photo name={d.image} alt={`${d.name}: ${d.base}`} />
                <span className="product-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            )}
            <div className="drink-copy">
              <div className="drink-title">
                <h3>{d.name}</h3>
                <span>{formatMoney(d.price, locale)}</span>
              </div>
              <p lang={locale === "uk" ? "en" : "uk"} className="note">
                {d.other}
              </p>
              <p>{d.base}</p>
              <p className="sensory">{d.line}</p>
              {full && (
                <p className="note">
                  {c.signature.size} · {c.signature.allergens}: {d.allergens}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="assumption">{c.signature.note}</p>
      {full && <p>{c.signature.crossContact}</p>}
    </section>
  );
}
function Market({ c }: { c: Copy }) {
  const sources = [
    {
      title: c.market.global,
      values: [3.35, 3.62],
      labels: ["2025", "2026"],
      note: c.market.globalNote,
      url: "https://www.researchandmarkets.com/reports/5851209/bubble-tea-market-report",
      publisher: c.sources.global,
    },
    {
      title: c.market.europe,
      values: [727.2, 1262.6],
      labels: ["2026", "2033"],
      note: c.market.europeNote,
      url: "https://www.persistencemarketresearch.com/market-research/europe-bubble-tea-market.asp",
      publisher: c.sources.europe,
    },
  ];
  return (
    <section className="section market" id="market" data-investor>
      <Heading {...c.market} />
      <div className="charts">
        {sources.map((s) => (
          <figure className="chart" key={s.title}>
            <figcaption>{s.title}</figcaption>
            <div className="bars">
              {s.values.map((n, i) => (
                <div className="bar-column" key={n}>
                  <strong>{n.toLocaleString("uk-UA")}</strong>
                  <div
                    className="bar"
                    style={{ height: `${(n / Math.max(...s.values)) * 145}px` }}
                  />
                  <span>{s.labels[i]}</span>
                </div>
              ))}
            </div>
            <p>{s.note}</p>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              data-track="market-source"
            >
              {s.publisher} ↗
            </a>
          </figure>
        ))}
      </div>
      <p className="note">
        {c.market.date}. {c.market.scope}
      </p>
      <p className="market-travel">
        {c.market.travel}{" "}
        <a
          href="https://global.chinadaily.com.cn/a/202607/13/WS6a543cffa310986e2b464e2b.html"
          target="_blank"
          rel="noreferrer"
        >
          {c.sources.chinaDaily} ↗
        </a>{" "}
        ·{" "}
        <a
          href="https://global.chagee.com/id/en"
          target="_blank"
          rel="noreferrer"
        >
          {c.sources.chagee} ↗
        </a>
      </p>
      <details>
        <summary>{c.market.fmi}</summary>
        <a
          href="https://www.futuremarketinsights.com/reports/demand-for-bubble-tea-in-eu"
          target="_blank"
          rel="noreferrer"
        >
          {c.sources.fmi} ↗
        </a>
      </details>
      <h3>{c.market.localTitle}</h3>
      <div className="three-grid">
        {c.market.local.map(([a, b]) => (
          <article key={a}>
            <h4>{a}</h4>
            <p className="assumption">{b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
function Scale({ c }: { c: Copy }) {
  return (
    <section id="scale" className="section" data-investor>
      <Heading {...c.scale} />
      <div className="formats">
        {c.scale.formats.map((f, i) => (
          <article
            className={i === 1 ? "format selected" : "format"}
            key={f[0]}
          >
            <span className="format-plan" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <h3>{f[0]}</h3>
            <strong>{f[1]}</strong>
            <p>{f[2]}</p>
            <p>{f[3]}</p>
          </article>
        ))}
      </div>
      <p className="assumption">{c.scale.note}</p>
      <div className="roadmap">
        {c.scale.roadmap.map(([a, b, d]) => (
          <article key={a}>
            <p className="eyebrow">{a}</p>
            <h3>{b}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
      <p>{c.scale.future}</p>
    </section>
  );
}
function Funds({ c, locale }: { c: Copy; locale: Locale }) {
  return (
    <section id="funds" className="section funds" data-investor>
      <Heading {...c.funds} />
      <div className="funds-grid">
        <div className="funds-total">
          <p>{c.funds.budget}</p>
          <strong>{c.funds.amount}</strong>
          <Photo name="packaging-0" ratio={0.8} alt={c.pressPage.logo} />
        </div>
        <div>
          {c.funds.items.map(([name, amount, milestone]) => (
            <div className="fund-row" key={name}>
              <div>
                <h3>{name}</h3>
                <strong>{formatMoney(Number(amount), locale)}</strong>
              </div>
              <div className="allocation" aria-hidden="true">
                <span
                  style={{ width: `${(Number(amount) / 2100000) * 100}%` }}
                />
              </div>
              <p>{milestone}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="assumption">{c.funds.note}</p>
      <h3>{c.funds.termsTitle}</h3>
      <dl className="terms">
        {c.funds.terms.map(([a, b]) => (
          <div key={a}>
            <dt>{a}</dt>
            <dd>{b}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
function Traction({ c }: { c: Copy }) {
  return (
    <section className="section" id="traction" data-investor>
      <Heading {...c.traction} />
      <div className="two-grid">
        {c.traction.items.map(([a, b]) => (
          <article className="evidence" key={a}>
            <h3>{a}</h3>
            <p>{b}</p>
          </article>
        ))}
      </div>
      <h3>{c.traction.riskTitle}</h3>
      <div className="risks">
        {c.traction.risks.map(([a, b]) => (
          <details key={a}>
            <summary>
              {a}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{b}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
function Team({ c }: { c: Copy }) {
  return (
    <section className="section team" id="team" data-investor>
      <Heading {...c.team} />
      <div className="team-row">
        <div className="founder-mark" aria-hidden="true">
          {c.wordmark.slice(0, 2)}
        </div>
        <div>
          <h3>{c.team.name}</h3>
          <p className="eyebrow">{c.team.role}</p>
          <p className="intro">{c.team.bio}</p>
          <p>{c.team.advisors}</p>
          <p className="assumption">{c.team.note}</p>
        </div>
      </div>
    </section>
  );
}
function Contact({ c, locale }: { c: Copy; locale: Locale }) {
  return (
    <section className="section contact" id="contact" data-investor>
      <div>
        <Heading {...c.contact} />
        <p>{c.contact.roomNote}</p>
        <div className="contact-links">
          <a
            className="button outline"
            href={`/assets/xoxo-one-pager-${locale}.pdf`}
            download
            data-track="one-pager"
          >
            {c.contact.pdf} ↗
          </a>
          {connection.calendar ? (
            <a
              className="text-link"
              href={connection.calendar}
              target="_blank"
              rel="noreferrer"
              data-track="calendar"
            >
              {c.contact.calendar} ↗
            </a>
          ) : (
            <p className="note">{c.contact.calendarPending}</p>
          )}
        </div>
      </div>
      <LeadForm c={c.contact} locale={locale} />
    </section>
  );
}
export function Experience({
  locale,
  kind = "home",
}: {
  locale: Locale;
  kind?: PageKind;
}) {
  const c = copy(locale),
    path = kind === "home" ? "" : kind;
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: c.brand,
        url: origin,
        description: c.metadata.description,
        logo: origin + "/press/xoxo-green.svg",
      },
      {
        "@type": "LocalBusiness",
        name: c.brand,
        description: c.hero.note,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Миколаїв",
          addressCountry: "UA",
        },
        url: origin,
        hasMenu: origin + route(locale, "menu"),
      },
    ],
  };
  return (
    <>
      <Behavior locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip" href="#main">
        {c.skip}
      </a>
      <header className="header" lang={locale}>
        <a className="wordmark" href={route(locale)}>
          {c.wordmark}
          <span>{c.brandSuffix}</span>
        </a>
        <nav aria-label={c.navigation}>
          <a href={route(locale, "menu")} data-track="nav-menu">
            {c.menu}
          </a>
          <a href={route(locale, "investors")} data-track="nav-investors">
            {c.investors}
          </a>
        </nav>
        <a
          className="language"
          href={route(locale === "uk" ? "en" : "uk", path)}
          hrefLang={locale === "uk" ? "en" : "uk"}
          aria-label={c.otherLocaleLabel}
        >
          {c.otherLocale}
        </a>
      </header>
      <main id="main" lang={locale}>
        {kind === "home" && (
          <>
            <section className="hero">
              <div className="hero-media">
                <Photo name="hero" alt={c.hero.alt} ratio={16 / 9} hero />
                <Film pause={c.hero.pause} play={c.hero.play} />
              </div>
              <div className="hero-copy">
                <p className="eyebrow">{c.hero.eyebrow}</p>
                <h1>{c.hero.title}</h1>
                <p className="intro">{c.hero.description}</p>
                <div className="hero-actions">
                  <a
                    href="#contact"
                    className="button primary"
                    data-track="hero-invest"
                  >
                    {c.invest}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="#menu"
                    className="button outline"
                    data-track="hero-menu"
                  >
                    {c.menu}
                  </a>
                </div>
              </div>
              <p className="hero-note">{c.hero.note}</p>
              <div className="hero-index" aria-hidden="true">
                01 — ∞
              </div>
            </section>
            <section className="section thesis">
              <p className="eyebrow">{c.thesis.label}</p>
              <h2>{c.thesis.title}</h2>
              <p>{c.thesis.body}</p>
            </section>
            <Signatures c={c} locale={locale} />
            <section id="world" className="section world">
              <Heading {...c.world} />
              <figure className="interior">
                <Photo
                  name="interior-0"
                  alt={c.world.interiorAlt}
                  ratio={1.5}
                />
                <figcaption>{c.world.caption}</figcaption>
              </figure>
              <div className="ritual-grid">
                {[9, 8, 10, 11].map((n, i) => (
                  <figure key={n}>
                    <Photo
                      name={`ritual-${n === 9 ? 1 : n === 8 ? 0 : n === 10 ? 2 : 3}`}
                      alt={c.world.ritualAlt[i]}
                      ratio={0.8}
                    />
                    <figcaption>
                      <span>0{i + 1}</span>
                      {c.world.ritual[i]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </>
        )}
        {kind === "menu" && (
          <>
            <section className="subhero section">
              <p className="eyebrow">{c.signature.subtitle}</p>
              <h1>{c.signature.title}</h1>
              <p>{c.signature.body}</p>
              <a
                className="text-link"
                href={`/assets/xoxo-menu-${locale}.pdf`}
                download
                data-track="menu-pdf"
              >
                {c.signature.print} ↗
              </a>
            </section>
            <Signatures c={c} locale={locale} full />
          </>
        )}
        {kind === "investors" && (
          <section className="section subhero investor-intro">
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1>{c.funds.title}</h1>
            <p className="intro">{c.funds.body}</p>
            <a
              href="#contact"
              className="button primary"
              data-track="investor-intro"
            >
              {c.meet} ↗
            </a>
          </section>
        )}
        {(kind === "home" || kind === "investors") && (
          <>
            <Market c={c} />
            <section className="section economics" id="economics" data-investor>
              <Heading {...c.economics} />
              <Economics c={c.economics} locale={locale} />
              <p className="note">
                {c.economics.benchmark}{" "}
                <a
                  href="https://dojobusiness.com/blogs/news/bubble-tea-business-worth-it"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.sources.dojo} ↗
                </a>{" "}
                ·{" "}
                <a
                  href="https://store.yenchuan.co/blog/2026-guide-for-beginners/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.sources.yenchuan} ↗
                </a>
              </p>
            </section>
            <Scale c={c} />
            <Funds c={c} locale={locale} />
            <Traction c={c} />
            <Team c={c} />
            <Contact c={c} locale={locale} />
          </>
        )}
        {kind === "press" && (
          <section className="section subhero press-page">
            <p className="eyebrow">{c.pressPage.label}</p>
            <h1>{c.pressPage.title}</h1>
            <p className="intro">{c.pressPage.body}</p>
            <div
              className="brand-lockup"
              aria-label={c.wordmark + " " + c.brandSuffix}
            >
              {c.wordmark}
              <span>{c.brandSuffix}</span>
            </div>
            <p>{c.pressPage.guidance}</p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="/press/xoxo-logo-pack.zip"
                download
                data-track="logo-pack"
              >
                {c.pressPage.pack} ↗
              </a>
              <a
                className="button outline"
                href="/press/asset-manifest.json"
                download
                data-track="assets"
              >
                {c.pressPage.assets} ↗
              </a>
            </div>
            <div className="two-grid">
              <Photo name="packaging-0" alt={c.pressPage.logo} ratio={0.8} />
              <Photo name="packaging-1" alt={c.pressPage.logo} ratio={0.8} />
            </div>
          </section>
        )}
      </main>
      <footer className="footer" lang={locale}>
        <div className="footer-top">
          <div>
            <p className="eyebrow">{c.tagline}</p>
            <h2>{c.contact.waitlistTitle}</h2>
            <LeadForm c={c.contact} locale={locale} waitlist />
          </div>
          <div className="footer-location">
            <h3>{c.footer.city}</h3>
            <p>{c.footer.location}</p>
            <p>{c.footer.hours}</p>
            <p>{c.footer.social}</p>
            <CityMap label={c.footer.map} title={c.footer.mapLabel} />
            <p className="note">{c.footer.mapLabel}</p>
            <a href={route(locale, "press")}>{c.press}</a>
          </div>
        </div>
        <details id="privacy">
          <summary>{c.footer.privacy}</summary>
          <p>{c.contact.privacy}</p>
        </details>
        <div className="footer-bottom">
          <span>{c.footer.copyright}</span>
          <p>{c.footer.legal}</p>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          {c.wordmark}
        </div>
      </footer>
      <div className="mobile-cta" lang={locale}>
        <a
          href={
            kind === "menu" || kind === "press"
              ? route(locale, "investors") + "#contact"
              : "#contact"
          }
          className="button primary"
          data-track="mobile-invest"
        >
          {c.meet} ↗
        </a>
        <a
          href={route(locale, "menu")}
          className="button outline"
          data-track="mobile-menu"
        >
          {c.menu}
        </a>
      </div>
    </>
  );
}
````

## src/components/investor/Film.tsx

````tsx
"use client";
import { useEffect, useRef, useState } from "react";
export function Film({
  pause,
  play,
  pour = false,
}: {
  pause: string;
  play: string;
  pour?: boolean;
}) {
  const mobile = useRef<HTMLVideoElement>(null),
    desktop = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false),
    [playing, setPlaying] = useState(true);
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
          addEventListener?: (t: string, f: () => void) => void;
          removeEventListener?: (t: string, f: () => void) => void;
        };
      }
    ).connection;
    const viewport = matchMedia("(max-width: 767px)");
    const update = () => {
      const ok =
        !mq.matches &&
        !connection?.saveData &&
        !["slow-2g", "2g", "3g"].includes(connection?.effectiveType || "");
      setAllowed(ok);
      const small = !pour && viewport.matches;
      const selected = small ? mobile.current : desktop.current;
      for (const video of [mobile.current, desktop.current]) {
        if (video && video !== selected) video.pause();
        if (!ok && video?.getAttribute("src")) {
          video.pause();
          video.removeAttribute("src");
          video.load();
        }
      }
      if (ok) {
        const video = selected;
        if (video) {
          if (!video.getAttribute("src"))
            video.src = pour
              ? "/assets/pour.mp4"
              : small
                ? "/assets/hero-mobile-fast.mp4"
                : "/assets/hero-desktop.mp4";
          if (video.paused)
            video
              .play()
              .then(() => setPlaying(true))
              .catch(() => setPlaying(false));
        }
      }
    };
    if (document.readyState === "complete") update();
    else window.addEventListener("load", update, { once: true });
    mq.addEventListener("change", update);
    viewport.addEventListener("change", update);
    connection?.addEventListener?.("change", update);
    return () => {
      window.removeEventListener("load", update);
      mq.removeEventListener("change", update);
      viewport.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
    };
  }, [pour]);
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={
          pour
            ? "/assets/pour-poster-960.webp"
            : "/assets/hero-mobile-poster-960.webp"
        }
        media={pour ? undefined : "(max-width: 767px)"}
        fetchPriority="high"
      />
      {!pour && (
        <link
          rel="preload"
          as="image"
          href="/assets/hero-desktop-poster-960.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      )}
      {!pour && (
        <video
          id="hero-film-mobile"
          suppressHydrationWarning
          ref={mobile}
          className="film film-mobile"
          muted
          autoPlay
          playsInline
          loop
          preload="none"
          poster="/assets/hero-mobile-poster-960.webp"
          aria-hidden="true"
        />
      )}
      <video
        id={pour ? "pour-film" : "hero-film-desktop"}
        suppressHydrationWarning
        ref={desktop}
        className={`film ${pour ? "" : "film-desktop"}`}
        muted
        autoPlay
        playsInline
        loop
        preload="none"
        poster={
          pour
            ? "/assets/pour-poster-960.webp"
            : "/assets/hero-desktop-poster-960.webp"
        }
        aria-hidden="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(()=>{const c=navigator.connection;if(matchMedia('(prefers-reduced-motion: reduce)').matches||c?.saveData||['slow-2g','2g','3g'].includes(c?.effectiveType))return;const small=${pour ? "false" : "matchMedia('(max-width: 767px)').matches"};const v=document.getElementById(small?'hero-film-mobile':'${pour ? "pour-film" : "hero-film-desktop"}');if(v){v.muted=true;v.src=small?'/assets/hero-mobile-fast.mp4':'${pour ? "/assets/pour.mp4" : "/assets/hero-desktop.mp4"}';v.play().catch(()=>{});}})();`,
        }}
      />
      {allowed && (
        <button
          className="film-toggle"
          aria-label={playing ? pause : play}
          onClick={() => {
            const v = [mobile.current, desktop.current].find((v) =>
              v?.getAttribute("src"),
            );
            if (v) {
              if (playing) {
                v.pause();
                setPlaying(false);
              } else
                v.play()
                  .then(() => setPlaying(true))
                  .catch(() => setPlaying(false));
            }
          }}
        >
          {playing ? "Ⅱ" : "▷"}
        </button>
      )}
    </>
  );
}
````

## src/components/investor/LeadForm.tsx

````tsx
"use client";
import { useState, type FormEvent } from "react";
import { connection, type Copy, type Locale } from "@/lib/investor-content";
import { getAttribution, track } from "./Behavior";
export function LeadForm({
  c,
  locale,
  waitlist = false,
}: {
  c: Copy["contact"];
  locale: Locale;
  waitlist?: boolean;
}) {
  const [state, setState] = useState<
    "idle" | "sending" | "sent" | "error" | "draft"
  >("idle");
  const id = waitlist ? "waitlist" : "meeting";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") || "").trim();
    const nameInput = form.elements.namedItem(
      "name",
    ) as HTMLInputElement | null;
    if (nameInput && !nameInput.value.trim()) {
      nameInput.setCustomValidity(c.nameInvalid);
      nameInput.reportValidity();
      return;
    }
    const input = form.elements.namedItem("contact") as HTMLInputElement;
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) &&
      (!/^@[A-Za-z][A-Za-z0-9_]{4,31}$/.test(contact) || waitlist)
    ) {
      input.setCustomValidity(c.invalid);
      input.reportValidity();
      return;
    }
    if (data.get("website")) return;
    const payload = {
      kind: waitlist ? "waitlist" : String(data.get("kind") || "meeting"),
      name: String(data.get("name") || "")
        .trim()
        .slice(0, 100),
      organization: String(data.get("organization") || "")
        .trim()
        .slice(0, 150),
      ticket: String(data.get("ticket") || ""),
      contact,
      consent: true,
      locale,
      attribution: getAttribution(),
    };
    if (!connection.endpoint) {
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `xoxo-${id}-request.txt`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setState("draft");
      track("Request draft", { kind: payload.kind });
      return;
    }
    setState("sending");
    track("Form submit", { kind: payload.kind });
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      let response: Response;
      try {
        response = await fetch(connection.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timer);
      }
      if (!response.ok) throw new Error("Delivery failed");
      setState("sent");
      track("Form success", { kind: payload.kind });
      form.reset();
    } catch {
      setState("error");
      track("Form error", { kind: payload.kind });
    }
  }
  if (state === "sent")
    return (
      <div className="confirmation" role="status">
        <h3>{c.sent}</h3>
        <p>{c.sentBody}</p>
        <button className="button" onClick={() => setState("idle")}>
          {c.again}
        </button>
      </div>
    );
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="honeypot" aria-hidden="true">
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-label="website"
        />
      </div>
      {!waitlist && (
        <>
          <label htmlFor={`${id}-name`}>
            {c.name}
            <input
              id={`${id}-name`}
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
          </label>
          <label htmlFor={`${id}-org`}>
            {c.org}
            <input
              id={`${id}-org`}
              name="organization"
              maxLength={150}
              autoComplete="organization"
            />
          </label>
          <label htmlFor={`${id}-ticket`}>
            {c.ticket}
            <select id={`${id}-ticket`} name="ticket">
              {c.ranges.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor={`${id}-kind`}>
            {c.room}
            <select id={`${id}-kind`} name="kind">
              <option value="meeting">{c.send}</option>
              <option value="data-room">{c.room}</option>
            </select>
          </label>
        </>
      )}
      <label className="span-all" htmlFor={`${id}-contact`}>
        {waitlist ? c.emailOnly : c.email}
        <input
          id={`${id}-contact`}
          name="contact"
          type={waitlist ? "email" : "text"}
          autoComplete="email"
          required
          maxLength={254}
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </label>
      <label className="consent span-all">
        <input type="checkbox" required name="consent" />
        {c.consent}
      </label>
      {!connection.endpoint && <p className="note span-all">{c.unavailable}</p>}
      <button
        className="button primary span-all"
        type="submit"
        disabled={state === "sending"}
        data-track={id}
      >
        {state === "sending"
          ? c.sending
          : connection.endpoint
            ? waitlist
              ? c.waitlist
              : c.send
            : c.draft}
        <span aria-hidden="true">↗</span>
      </button>
      <div className="span-all" role="status">
        {state === "error" && <p>{c.error}</p>}
        {state === "draft" && <p>{c.draftNote}</p>}
      </div>
      {connection.email && (
        <a
          className="span-all text-link"
          href={`mailto:${connection.email}`}
          data-track="email"
        >
          {connection.email}
        </a>
      )}
    </form>
  );
}
````

## src/components/investor/Photo.tsx

````tsx
"use client";
import Image from "next/image";
const widths = [480, 960, 1600];
export function Photo({
  name,
  alt,
  ratio = 1,
  hero = false,
  className = "",
}: {
  name: string;
  alt: string;
  ratio?: number;
  hero?: boolean;
  className?: string;
}) {
  const sizes = hero
    ? "100vw"
    : "(max-width: 767px) 85vw, (max-width: 1200px) 45vw, 33vw";
  return (
    <picture className={`photo ${className}`}>
      {hero && (
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcSet={widths
            .map((w) => `/assets/hero-mobile-poster-${w}.avif ${w}w`)
            .join(", ")}
          sizes="100vw"
        />
      )}
      <source
        type="image/avif"
        srcSet={widths.map((w) => `/assets/${name}-${w}.avif ${w}w`).join(", ")}
        sizes={sizes}
      />
      <Image
        src={`/assets/${name}-960.webp`}
        alt={alt}
        width={960}
        height={Math.round(960 / ratio)}
        sizes={sizes}
        loader={({ width }) =>
          `/assets/${name}-${width <= 480 ? 480 : width <= 960 ? 960 : 1600}.webp`
        }
        fetchPriority={hero ? "high" : undefined}
        loading={hero ? "eager" : "lazy"}
      />
    </picture>
  );
}
````

## src/lib/investor-content.ts

````typescript
import uk from "../../content/uk.json";
import en from "../../content/en.json";
export type Locale = "uk" | "en";
export type Copy = typeof en;
export function copy(locale: Locale): Copy {
  return locale === "uk" ? uk : en;
}
export function route(locale: Locale, path = "") {
  return `${locale === "en" ? "/en" : ""}/${path ? path + "/" : ""}`;
}
export const origin =
  process.env.NEXT_PUBLIC_SITE_URL || "https://xoxotea.vercel.app";
export const connection = {
  endpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "",
  calendar: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  plausible: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
};
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
// Tailwind v4 runtime tokens are declared with @theme in globals.css.
// This typed mirror makes the brief's token contract easy to inspect.
const config = {
  theme: {
    extend: {
      colors: {
        tea: "#173f35",
        paper: "#f7f4ee",
        ink: "#182a25",
        accent: "#dbfb6b",
        muted: "#59665c",
      },
      fontFamily: {
        display: ["var(--font-display-face)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: { sm: "2px", DEFAULT: "4px" },
      transitionTimingFunction: { brand: "cubic-bezier(0.22,1,0.36,1)" },
    },
  },
};

export default config;
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
    { "source": "/uk", "destination": "/", "permanent": true },
    { "source": "/uk/:path*", "destination": "/:path*", "permanent": true },
    { "source": "/ru", "destination": "/", "permanent": true }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public,max-age=86400" }]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
````
