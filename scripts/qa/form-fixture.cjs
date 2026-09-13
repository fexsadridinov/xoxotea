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
