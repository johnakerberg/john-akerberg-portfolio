/**
 * Generates the downloadable CV PDFs from the live CV pages, using the
 * print stylesheet (header, footer and buttons are hidden on paper).
 *
 * Usage (with the dev server running on :3000):
 *   npm run cv:pdf
 *
 * Re-run whenever content/cv.ts changes so the PDFs stay in sync.
 * Writes public/cv/john-akerberg-cv-sv.pdf and -en.pdf.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const baseUrl = process.env.CV_BASE_URL ?? "http://localhost:3000";

const browserCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = browserCandidates.find((path) => existsSync(path));
if (!browser) {
  console.error("Hittade ingen Chrome/Edge. Sätt CHROME_PATH till webbläsarens sökväg.");
  process.exit(1);
}

for (const lang of ["sv", "en"]) {
  const out = resolve(`public/cv/john-akerberg-cv-${lang}.pdf`);
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${out}`,
    `${baseUrl}/${lang}/cv`,
  ]);
  console.log(`✓ ${out}`);
}
