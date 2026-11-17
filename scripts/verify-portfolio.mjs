import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { loadTypeScript } from "./test-utils.mjs";

const require = createRequire(import.meta.url);
const { parse } = require("next/dist/compiled/node-html-parser");
const content = loadTypeScript("../src/content/portfolio.ts");
const data = loadTypeScript("../src/lib/portfolio.ts", { "@/content/portfolio": content });
const { projects, research, searchProjects, categories, sections } = data;
const { commandEntries, searchCommands } = loadTypeScript("../src/lib/commands.ts", { "./portfolio": data });
const { motionIsEnabled, featuredRootMargin } = loadTypeScript("../src/lib/interactions.ts");
const siteUrlModule = loadTypeScript("../src/lib/site-url.ts");
const base = process.env.PORTFOLIO_TEST_URL ?? "http://127.0.0.1:3000";
const expectedOrigin = siteUrlModule.parseSiteUrl(process.env.PORTFOLIO_EXPECT_SITE_URL);
const request = (path) => fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });

// This reserved fixture is never used as the app's deployment configuration.
const fixtureOrigin = "https://portfolio.invalid";
assert.equal(siteUrlModule.parseSiteUrl(undefined), undefined);
assert.equal(siteUrlModule.parseSiteUrl(" "), undefined);
assert.equal(siteUrlModule.parseSiteUrl(` ${fixtureOrigin}/ `).href, `${fixtureOrigin}/`);
for (const invalid of ["portfolio.invalid", `${fixtureOrigin}/subpath`, `${fixtureOrigin}?tracking=1`, `${fixtureOrigin}#home`, "javascript:alert(1)", "https://"]) assert.throws(() => siteUrlModule.parseSiteUrl(invalid));
const credentialFixture = new URL(fixtureOrigin);
credentialFixture.username = "fixture";
credentialFixture.password = "fixture";
assert.throws(() => siteUrlModule.parseSiteUrl(credentialFixture.href));
const originalOrigin = process.env.NEXT_PUBLIC_SITE_URL;
process.env.NEXT_PUBLIC_SITE_URL = fixtureOrigin;
try {
  const metadata = loadTypeScript("../src/lib/metadata.ts", { "@/content/portfolio": content, "./site-url": siteUrlModule });
  const page = metadata.pageMetadata("CareerPath AI", "Fixture description", "/projects/careerpath-ai");
  assert.equal(page.alternates.canonical, `${fixtureOrigin}/projects/careerpath-ai`);
  assert.equal(page.openGraph.url, page.alternates.canonical);
  assert.equal(page.twitter.title, page.openGraph.title);
  assert.equal(page.twitter.images[0].url, `${fixtureOrigin}/og`);
  const sitemap = loadTypeScript("../src/app/sitemap.ts", { "@/lib/portfolio": data, "@/lib/metadata": metadata }).default();
  assert.equal(sitemap.length, 18);
  assert.ok(sitemap.every((item) => item.url.startsWith(fixtureOrigin)));
} finally {
  if (originalOrigin === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
  else process.env.NEXT_PUBLIC_SITE_URL = originalOrigin;
}

assert.equal(projects.length, 9);
assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
assert.equal(new Set(research.map((item) => item.slug)).size, research.length);
assert.equal(searchProjects("").length, projects.length);
assert.equal(searchProjects("  NEXT.JS  ", "Software")[0].slug, "careerpath-ai");
assert.equal(searchProjects("python", "AI & Research")[0].slug, "mot-ssl-gru-dashboard");
assert.equal(searchProjects("python", "Hardware & IoT").length, 0);
assert.equal(searchProjects("not-a-real-project").length, 0);
assert.equal(searchProjects("scheduling bilingual")[0].slug, "personal-automation-system");
for (const category of categories.slice(1)) {
  const expected = projects.filter((project) => project.category === category);
  assert.deepEqual(searchProjects("", category), expected);
  assert.ok(expected.length > 0);
}
assert.equal(commandEntries.length, 21);
assert.equal(new Set(commandEntries.map((entry) => entry.href)).size, commandEntries.length);
assert.equal(searchCommands("  ").length, 21);
assert.ok(searchCommands("careerpath").some((entry) => entry.href === "/projects/careerpath-ai"));
assert.ok(searchCommands("22 interviews").some((entry) => entry.href.includes("prompted-not-taught")));
assert.equal(searchCommands("not-a-real-project").length, 0);
assert.equal(motionIsEnabled(null, true), false);
assert.equal(motionIsEnabled(null, false), true);
assert.equal(motionIsEnabled("off", false), false);
assert.equal(motionIsEnabled("on", true), true);
assert.equal(motionIsEnabled("invalid", true), false);
for (const [width, height] of [[320, 720], [390, 844], [768, 1024], [1440, 900]]) {
  const [top, , bottom] = featuredRootMargin(height).split(" ").map(parseFloat);
  assert.ok(height + top + bottom > 0, `Non-collapsed focus band at ${width}×${height}`);
  assert.ok(!featuredRootMargin(height).includes("%"));
}
console.log("PASS: archive and Quick Find search logic, motion preference logic, showcase geometry, metadata configuration, and route slugs");

const paths = ["/", "/projects", "/research", ...projects.map((p) => `/projects/${p.slug}`), ...research.map((p) => `/research/${p.slug}`)];
const responses = new Map();
const documents = new Map();
const titles = new Set();
for (const path of paths) {
  const response = await request(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.match(html, /<main\b/, `Main landmark: ${path}`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `One H1: ${path}`);
  assert.match(html, /name="description"/, `Description: ${path}`);
  assert.doesNotMatch(html, /Create Next App|Get started by editing|data:image\/.*;base64/, `No starter or embedded portrait: ${path}`);
  const document = parse(html);
  const title = document.querySelector("title")?.textContent;
  assert.ok(title?.includes(content.portfolio.identity.name), `Page title: ${path}`);
  assert.ok(!titles.has(title), `Unique title: ${path}`);
  titles.add(title);
  assert.equal(document.querySelector("html")?.getAttribute("lang"), "en");
  assert.equal(document.querySelectorAll("main").length, 1, `One main landmark: ${path}`);
  for (let element = document.querySelector("main"); element; element = element.parentNode) {
    assert.ok(!element.hasAttribute?.("hidden"), `Main content must not depend on a streaming reveal script: ${path}`);
  }
  const ids = document.querySelectorAll("[id]").map((element) => element.id);
  assert.equal(ids.length, new Set(ids).size, `No duplicate IDs: ${path}`);
  for (const image of document.querySelectorAll("img")) assert.ok(image.getAttribute("alt"), `Meaningful image alt: ${path}`);
  for (const link of document.querySelectorAll('a[target="_blank"]')) assert.ok(link.getAttribute("rel")?.includes("noopener"));
  assert.equal(document.querySelectorAll("a a, a button, button a").length, 0, `No nested interactive controls: ${path}`);
  assert.ok(document.querySelector('meta[property="og:title"]')?.getAttribute("content"));
  assert.equal(document.querySelector('meta[name="twitter:title"]')?.getAttribute("content"), document.querySelector('meta[property="og:title"]')?.getAttribute("content"));
  if (expectedOrigin) {
    assert.equal(new URL(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).href, new URL(path, expectedOrigin).href);
    assert.equal(document.querySelector('meta[property="og:image"]')?.getAttribute("content"), new URL("/og", expectedOrigin).href);
    assert.equal(document.querySelector('meta[name="twitter:image"]')?.getAttribute("content"), new URL("/og", expectedOrigin).href);
    assert.equal(new URL(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).href, new URL(path, expectedOrigin).href);
    assert.ok(!document.querySelector('meta[name="robots"]')?.getAttribute("content").includes("noindex"));
  } else {
    assert.equal(document.querySelector('link[rel="canonical"]'), null, `No unapproved canonical host: ${path}`);
    assert.equal(document.querySelector('meta[property="og:image"]'), null);
    assert.ok(document.querySelector('meta[name="robots"]')?.getAttribute("content").includes("noindex"));
  }
  assert.equal(document.querySelector('link[href="/favicon.ico"]'), null, `No starter favicon: ${path}`);
  documents.set(path, document);
  responses.set(path, html);
}
const home = responses.get("/");
for (const section of sections) assert.ok(home.includes(`id="${section.id}"`), `Home section: ${section.id}`);
for (const project of projects) {
  assert.ok(home.includes(`/projects/${project.slug}`), `Home case-study link: ${project.slug}`);
  const html = responses.get(`/projects/${project.slug}`);
  assert.ok(html.includes(project.status), `Accurate stage: ${project.slug}`);
  if (project.limitations) assert.ok(html.includes(project.limitations), `Limitations: ${project.slug}`);
}
assert.ok(home.includes(content.portfolio.contact.email));
assert.ok(!home.includes("Download résumé"));
const checkedLinks = new Set();
const externalLinks = new Set();
for (const [path, document] of documents) {
  for (const anchor of document.querySelectorAll("a[href]")) {
    const href = anchor.getAttribute("href");
    assert.ok(href && href !== "#", `No placeholder links: ${path}`);
    const target = new URL(href, new URL(path, base));
    if (target.protocol === "mailto:") { assert.equal(target.pathname, content.portfolio.contact.email); continue; }
    if (target.origin !== new URL(base).origin) { externalLinks.add(target.href); continue; }
    const targetDocument = documents.get(target.pathname);
    assert.ok(targetDocument, `Internal route ${href} from ${path}`);
    if (target.hash) assert.ok(targetDocument.getElementById(decodeURIComponent(target.hash.slice(1))), `Anchor ${href} from ${path}`);
    checkedLinks.add(`${target.pathname}${target.hash}`);
  }
}
const assetPaths = new Set(["/images/shakil-portrait.jpg", "/icon.svg", "/og", "/robots.txt", "/sitemap.xml"]);
for (const document of documents.values()) {
  for (const element of document.querySelectorAll("script[src], img[src], link[rel='stylesheet'], link[rel='icon']")) {
    const url = new URL(element.getAttribute("src") ?? element.getAttribute("href"), base);
    assert.equal(url.origin, new URL(base).origin, "No third-party runtime assets");
    assetPaths.add(`${url.pathname}${url.search}`);
  }
}
for (const path of assetPaths) {
  const response = await request(path);
  assert.equal(response.status, 200, `Asset: ${path}`);
  if (path === "/og") {
    assert.ok(response.headers.get("content-type").includes("image/png"));
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
    mkdirSync(".audit", { recursive: true });
    writeFileSync(".audit/social-card.png", bytes);
  }
  if (path === "/robots.txt" && !expectedOrigin) assert.match(await response.text(), /Disallow: \//);
  if (path === "/robots.txt" && expectedOrigin) {
    const robots = await response.text();
    assert.match(robots, /Allow: \//);
    assert.ok(robots.includes(new URL("/sitemap.xml", expectedOrigin).href));
  }
  if (path === "/sitemap.xml") assert.equal(((await response.text()).match(/<loc>/g) ?? []).length, expectedOrigin ? 18 : 0);
}
for (const path of ["/projects/does-not-exist", "/research/does-not-exist", "/does-not-exist"]) {
  const response = await request(path);
  const html = await response.text();
  // Streaming Next.js responses may send 200 before a nested notFound boundary.
  assert.ok(response.status === 404 || html.includes('name="robots" content="noindex"'), `404/noindex: ${path}`);
  assert.ok(html.includes("This page"), `Helpful missing-page UI: ${path}`);
}
console.log(`PASS: ${paths.length} page routes, ${checkedLinks.size} unique internal destinations/anchors, ${assetPaths.size} assets, content, static HTML accessibility, metadata, and missing-page handling`);
console.log(`External links requiring independent reachability checks: ${JSON.stringify([...externalLinks])}`);
console.log("Browser layout, focus, animation, and screen-reader behavior require a separate browser check.");
