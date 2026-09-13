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
