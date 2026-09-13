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
