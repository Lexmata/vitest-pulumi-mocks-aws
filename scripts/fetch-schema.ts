import { existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CACHE_DIR = join(ROOT, ".schema-cache");
const CACHE_FILE = join(CACHE_DIR, "schema.json");

function readProviderVersion(): string {
  const pkgPath = join(ROOT, "node_modules", "@pulumi", "aws", "package.json");
  if (!existsSync(pkgPath)) {
    throw new Error(`@pulumi/aws not installed at ${pkgPath}. Run 'npm install' first.`);
  }
  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
  return pkg.version as string;
}

async function main() {
  const version = readProviderVersion();
  const url = `https://raw.githubusercontent.com/pulumi/pulumi-aws/v${version}/provider/cmd/pulumi-resource-aws/schema.json`;
  console.log(`fetching schema for @pulumi/aws@${version}`);
  console.log(`  -> ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText} fetching ${url}`);
  }
  const body = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(CACHE_FILE), { recursive: true });
  writeFileSync(CACHE_FILE, body);
  console.log(`wrote ${CACHE_FILE} (${body.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
