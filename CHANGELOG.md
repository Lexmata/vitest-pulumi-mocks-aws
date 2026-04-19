# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-04-19

### Added
- Initial public release under the MIT license.
- `setupPulumiAwsMocks` / `resetPulumiAwsMocks` / `createMockHandlers` entry points for installing a Vitest-compatible `pulumi.runtime.setMocks` handler.
- `makeIdSeed` FNV-1a hash over `${type}::${name}` for stable synthetic ids across re-reads of the same logical resource.
- `SetupOptions` with `region` / `accountId` / `partition` (defaults `us-east-1` / `123456789012` / `aws`), per-token `overrides`, and an `onMissing` hook for unregistered tokens.
- Generated resource, function, and type factories covering the full `@pulumi/aws` v6 schema, aggregated via `resourceRegistry` and `functionRegistry`.
- Hand-written helper primitives (`arn`, `id`, `endpoint`, `timestamp`, `archive`, `asset`) re-exported to generated code via `src/generated/helpers.ts`.
- Codegen pipeline: `scripts/fetch-schema.ts` (downloads the Pulumi AWS schema matching the installed `@pulumi/aws` version) + `scripts/generate.ts` (wipes and re-emits `src/generated/`).
- Rule-driven property defaulting in `scripts/codegen/emit.ts` (`STRING_RULES`, `NUMERIC_RULES`) for ARN/id/endpoint/timestamp-shaped fields.
- Vitest configuration with 100% line / function / branch / statement coverage thresholds over hand-written code (`src/generated/**` and types-only files excluded).
- `CLAUDE.md` codebase guide.

[Unreleased]: https://github.com/Lexmata/vitest-pulumi-mocks-aws/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Lexmata/vitest-pulumi-mocks-aws/releases/tag/v0.1.0
