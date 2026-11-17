import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import sharp from "sharp";

const git = (args, options = {}) => execFileSync("git", args, { encoding: "utf8", ...options });
const tracked = git(["ls-files", "-z"]).split("\0").filter(Boolean);
const untracked = git(["ls-files", "--others", "--exclude-standard", "-z"]).split("\0").filter(Boolean);
const candidates = [...new Set([...tracked, ...untracked])].filter(existsSync);
const staged = git(["diff", "--cached", "--name-only", "-z"]).split("\0").filter(Boolean);
const unsafePath = /(^|\/)(?:\.env[^/]*|\.aws|\.ssh|private|secrets|node_modules|\.next|\.vercel)(\/|$)|\.(?:pem|key|p12|pfx|docx?|xlsx?|pdf|zip|7z)$/i;
const rules = [
  ["private-key", /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ["AWS-access-key", /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ["GitHub-token", /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/],
  ["service-token", /\b(?:sk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{32,}|xox[baprs]-[A-Za-z0-9-]{20,})\b/],
  ["credential-URL", /\b[a-z]+:\/\/[^\s/'"<>:@]+:[^\s/'"<>@]+@[^\s/'"<>]+/i],
  ["hardcoded-secret", /\b(?:api[_-]?key|client[_-]?secret|password|access[_-]?token|secret[_-]?key)\s*[:=]\s*["'][^"'\s]{8,}["']/i],
  ["JWT", /\beyJ[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\b/],
  ["Bangladesh-mobile-number", /(?<![\dA-Fa-f])(?:\+?8801[3-9]\d{8}|01[3-9]\d{8})(?![\dA-Fa-f])/],
];
const findings = [];
const inlineImages = [];
function scan(path, bytes, scope) {
  if (unsafePath.test(path)) findings.push({ path, scope, rule: "private-or-generated-path" });
  if (bytes.includes(0)) return;
  const text = bytes.toString("utf8");
  if (path.endsWith(".html")) {
    for (const match of text.matchAll(/data:image\/[^;]+;base64,([A-Za-z0-9+/=]+)/g)) inlineImages.push({ path, bytes: Buffer.from(match[1], "base64") });
  }
  for (const [rule, pattern] of rules) if (pattern.test(text)) findings.push({ path, scope, rule });
}
for (const path of candidates) scan(path, readFileSync(path), "working-tree");
for (const path of staged) {
  try { scan(path, execFileSync("git", ["show", `:${path}`]), "staged-index"); } catch { /* A staged deletion has no content. */ }
}
const protectedPaths = [".env", ".env.local", ".env.production", "node_modules/example", ".next/example", ".vercel/project.json", "private/resume.pdf", "secrets/credentials.json", ".aws/credentials", ".ssh/id_rsa", "service.key", ".audit/report.json"];
const ignored = git(["check-ignore", "--no-index", "--stdin"], { input: protectedPaths.join("\n") }).trim().split(/\r?\n/);
assert.deepEqual(new Set(ignored), new Set(protectedPaths));
assert.ok(!tracked.some((path) => unsafePath.test(path)), "Sensitive/generated files must not already be tracked");
for (const path of candidates.filter((file) => /\.(png|jpe?g)$/i.test(file))) {
  const metadata = await sharp(path).metadata();
  if (metadata.exif || metadata.xmp || metadata.iptc) findings.push({ path, rule: "image-metadata-needs-review" });
}
for (const { path, bytes } of inlineImages) {
  const metadata = await sharp(bytes).metadata();
  if (metadata.exif || metadata.xmp || metadata.iptc) findings.push({ path, rule: "embedded-image-metadata-needs-review" });
}
// Report file names and rule names only, never matching secret values.
console.log(JSON.stringify({ candidateFiles: candidates.length, stagedFiles: staged.length, protectedPaths: ignored.length, embeddedImagesChecked: inlineImages.length, findings }, null, 2));
assert.equal(findings.length, 0, "Review the named files before staging; matched values have been withheld.");
console.log("PASS: commit-candidate, staged-index, ignore-rule, and image-metadata checks. Pattern scanning is not a guarantee against every possible secret.");
