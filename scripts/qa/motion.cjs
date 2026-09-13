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
