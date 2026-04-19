# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run fetch:schema` — download the Pulumi AWS schema for the currently installed `@pulumi/aws` version into `.schema-cache/schema.json`. Required before `generate` and not run by `npm install`.
- `npm run generate` — wipe and re-emit everything under `src/generated/` from the cached schema. Run this after bumping `@pulumi/aws` or after editing anything in `scripts/codegen/`.
- `npm run build` — `tsc -p tsconfig.build.json` (emits `dist/`, excludes `scripts` and `tests`).
- `npm run typecheck` — `tsc --noEmit` over the whole project (includes `scripts` and `tests`, which `build` does not).
- `npm test` — Vitest run. Coverage thresholds are **100% lines/functions/branches/statements**; a test run reporting lower coverage is a failure.
- `npm run test:watch` — watch mode.
- Single file: `npx vitest run tests/mocks.test.ts`. Single test: `npx vitest run -t "substring of test name"`.

## Architecture

### What this package does

At test time, `setupPulumiAwsMocks()` installs a `pulumi.runtime.setMocks` handler that intercepts every `newResource` and `call` invocation made by Pulumi AWS programs under test. Each invocation is routed by its token (e.g. `aws:s3/bucketV2:BucketV2`) to a factory, which returns a synthetic `state` object shaped like what a real AWS provider would return.

### Three-layer structure

1. **Hand-written runtime** (`src/helpers.ts`, `src/mocks.ts`, `src/index.ts`) — the public API and the primitives (`arn`, `id`, `endpoint`, `timestamp`, …) that factories build on. `MockCtx` carries `{type, name, inputs, idSeed, region, accountId, partition}` into every factory call. `makeIdSeed` is an FNV-1a hash of `${type}::${name}` so the same logical resource gets a stable id across re-reads.

2. **Generated factories** (`src/generated/`, ~550 files, all marked `GENERATED FILE — do not edit`) — one `resources/<service>.ts` + `functions/<service>.ts` per AWS service, plus `types/<service>.ts` for shared object shapes. `registry.ts` aggregates everything into `resourceRegistry` and `functionRegistry` — plain `Record<token, Factory>` maps that `mocks.ts` dispatches against.

3. **Codegen** (`scripts/codegen/`, `scripts/fetch-schema.ts`, `scripts/generate.ts`) — walks the Pulumi AWS schema and emits layer 2. `fetch-schema.ts` reads the `@pulumi/aws` version from `node_modules` and downloads the matching `schema.json` from `github.com/pulumi/pulumi-aws`. `generate.ts` loads that JSON, wipes `src/generated/`, and calls `codegen()` in `emit.ts`.

### Where to make changes

- **Adding or changing a default value for a property name** (e.g. a new ARN-like suffix, a new well-known id prefix): edit `STRING_RULES` / `NUMERIC_RULES` in `scripts/codegen/emit.ts`, then `npm run generate`. Rule ordering matters — exact-name rules must come before the generic `endsWith("id")` / `endsWith("name")` buckets, or specific values (e.g. `hostedZoneId` → `Z0...`) will be shadowed by the generic id helper.
- **Adding a new helper primitive** (e.g. a new format of synthetic identifier): add it to `src/helpers.ts`. The generated tree re-exports `../helpers.js` via `src/generated/helpers.ts`, so new helpers are automatically visible to emitted factories as `h.<name>`.
- **Consumer-level per-token tweaks**: callers use `SetupOptions.overrides[token]` — never edit generated factories directly.
- **Token parsing / identifier collisions**: `scripts/codegen/naming.ts`. Type builder identifiers are prefixed with the service name to avoid PascalCase collisions across services.

### Module system gotchas

- `"type": "module"` + `"module": "NodeNext"`. All relative imports must include `.js` — even in `.ts` source and in generated files (e.g. `from "./helpers.js"`).
- Coverage config in `vitest.config.ts` excludes `src/generated/**` and `scripts/codegen/schema.ts` (types-only). The 100% threshold only applies to hand-written code. If you add a hand-written file it must be exercised by a test or excluded intentionally — otherwise `npm test` will fail the coverage gate.
- `scripts/` is included by `tsconfig.json` (for `typecheck`) but excluded from `tsconfig.build.json` (so it never lands in `dist/`).
