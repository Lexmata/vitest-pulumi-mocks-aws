import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { codegen } from "./codegen/emit.js";
import type { PulumiSchema } from "./codegen/schema.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CACHE_FILE = join(ROOT, ".schema-cache", "schema.json");
const OUT_ROOT = join(ROOT, "src", "generated");

function loadSchema(): PulumiSchema {
  if (!existsSync(CACHE_FILE)) {
    throw new Error(
      `schema missing at ${CACHE_FILE} — run 'npm run fetch:schema' first.`,
    );
  }
  return JSON.parse(readFileSync(CACHE_FILE, "utf-8")) as PulumiSchema;
}

function wipeGenerated() {
  if (existsSync(OUT_ROOT)) {
    rmSync(OUT_ROOT, { recursive: true, force: true });
  }
}

function writeFile(relPath: string, content: string) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}

function main() {
  const schema = loadSchema();
  console.log(
    `loaded schema: ${Object.keys(schema.resources).length} resources, ` +
      `${Object.keys(schema.functions).length} functions, ` +
      `${Object.keys(schema.types).length} types`,
  );

  wipeGenerated();

  writeFile(
    "src/generated/helpers.ts",
    `// Re-export of the hand-authored runtime helpers so generated code can
// depend on a stable relative path without leaking the package layout.
export * from "../helpers.js";
export type { MockCtx } from "../helpers.js";
`,
  );

  const start = Date.now();
  const { files, stats } = codegen(schema);
  for (const f of files) writeFile(f.path, f.content);

  const elapsedMs = Date.now() - start;
  console.log(
    `emitted ${files.length} files (${stats.services} services, ` +
      `${stats.resources} resources, ${stats.functions} functions, ` +
      `${stats.types} types) in ${elapsedMs}ms`,
  );
}

main();
