import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
export function loadTypeScript(path, overrides = {}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const loadedModule = { exports: {} };
  new Function("require", "module", "exports", outputText)((id) => overrides[id] ?? require(id), loadedModule, loadedModule.exports);
  return loadedModule.exports;
}
