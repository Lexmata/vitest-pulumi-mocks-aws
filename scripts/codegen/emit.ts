import type { PropertyDef, PulumiSchema } from "./schema.js";
import {
  parseToken,
  serviceSlug,
  typeBuilderIdent,
  resourceFactoryIdent,
  functionFactoryIdent,
} from "./naming.js";

const MAX_DEPTH = 4;

// -- Property-default rules ------------------------------------------------
// Ordering matters: specific exact-name rules must fire before the generic
// `endsWith("id")` / `endsWith("name")` buckets, otherwise e.g. `hostedZoneId`
// would resolve to the generic id helper instead of the canonical Z-id value.

type ExprFn = (propName: string) => string;

type StringRule =
  | { kind: "exact"; names: string[]; expr: ExprFn }
  | { kind: "suffix"; suffixes: string[]; expr: ExprFn }
  | { kind: "includes"; sub: string; extra: (n: string) => boolean; expr: ExprFn };

const q = (s: string) => JSON.stringify(s);
const literal = (s: string): ExprFn => () => s;
const endpoint: ExprFn = (p) => `h.endpoint(ctx, ${q(p)})`;
const idExpr = (prefix?: string): ExprFn =>
  prefix
    ? (p) => `h.id(ctx, ${q(p)}, ${q(prefix)})`
    : (p) => `h.id(ctx, ${q(p)})`;

const STRING_RULES: StringRule[] = [
  { kind: "exact",   names: ["arn"],                                         expr: literal("h.arn(ctx)") },
  { kind: "suffix",  suffixes: ["arn", "_arn"],                              expr: literal("h.arn(ctx)") },
  { kind: "exact",   names: ["name", "bucket", "bucketname"],                expr: literal("ctx.name") },
  { kind: "exact",   names: ["region"],                                      expr: literal("ctx.region") },
  { kind: "exact",   names: ["accountid", "ownerid", "owner"],               expr: literal("ctx.accountId") },
  { kind: "exact",   names: ["partition"],                                   expr: literal("ctx.partition") },
  { kind: "includes", sub: "availabilityzone", extra: (n) => !n.endsWith("s"), expr: literal(`ctx.region + "a"`) },
  { kind: "exact",   names: ["status", "state"],                             expr: literal(`"active"`) },
  { kind: "exact",   names: ["version"],                                     expr: literal(`"1"`) },
  { kind: "exact",   names: ["hostedzoneid"],                                expr: literal(`"Z0000000000000000000"`) },
  { kind: "exact",   names: ["dnsname"],                                     expr: endpoint },
  { kind: "exact",   names: ["ipaddress", "privateip", "privateipaddress"], expr: literal(`"10.0.0.10"`) },
  { kind: "exact",   names: ["publicip", "publicipaddress"],                 expr: literal(`"54.0.0.10"`) },
  { kind: "exact",   names: ["cidr", "cidrblock", "cidrblocks"],             expr: literal(`"10.0.0.0/16"`) },
  { kind: "exact",   names: ["vpcid"],                                       expr: idExpr("vpc") },
  { kind: "exact",   names: ["subnetid"],                                    expr: idExpr("subnet") },
  { kind: "exact",   names: ["securitygroupid"],                             expr: idExpr("sg") },
  { kind: "exact",   names: ["creationdate", "lastmodified", "createdtime"], expr: literal("h.timestamp()") },
  { kind: "suffix",  suffixes: ["createdat", "createtime", "modifiedat", "_time"], expr: literal("h.timestamp()") },
  { kind: "suffix",  suffixes: ["url", "uri", "endpoint", "domain", "domainname"], expr: endpoint },
  // Generic id bucket — must be checked after every exact-name override above.
  { kind: "exact",   names: ["id"],                                          expr: idExpr() },
  { kind: "suffix",  suffixes: ["id"],                                       expr: idExpr() },
];

function stringDefaultExpr(propName: string): string {
  const n = propName.toLowerCase();
  for (const rule of STRING_RULES) {
    if (rule.kind === "exact" && rule.names.includes(n)) return rule.expr(propName);
    if (rule.kind === "suffix" && rule.suffixes.some((s) => n.endsWith(s))) return rule.expr(propName);
    if (rule.kind === "includes" && n.includes(rule.sub) && rule.extra(n)) return rule.expr(propName);
  }
  return `""`;
}

const NUMERIC_RULES: Array<[substring: string, expr: string]> = [
  ["port", "443"],
  ["timeout", "30"],
  ["size", "8"],
  ["count", "1"],
];

function numericDefaultExpr(propName: string): string {
  const n = propName.toLowerCase();
  for (const [sub, expr] of NUMERIC_RULES) if (n.includes(sub)) return expr;
  return "0";
}

const TRUTHY_PREFIXES = ["is", "enable", "allow"];

function booleanDefaultExpr(propName: string): string {
  const n = propName.toLowerCase();
  return TRUTHY_PREFIXES.some((p) => n.startsWith(p)) ? "true" : "false";
}

// -- Emitter ---------------------------------------------------------------

type RecordRef = (token: string) => void;

export class Emitter {
  constructor(private schema: PulumiSchema) {}

  exprForProperty(prop: PropertyDef, propName: string, recordRef: RecordRef): string {
    if (prop.oneOf && prop.oneOf.length > 0) {
      return this.exprForProperty(prop.oneOf[0], propName, recordRef);
    }
    if (prop.$ref) return this.exprForRef(prop.$ref, recordRef);
    if (prop.enum && prop.enum.length > 0) return q(prop.enum[0].value as string);
    switch (prop.type) {
      case "array": {
        if (!prop.items) return "[]";
        const item = this.exprForProperty(prop.items, propName, recordRef);
        return `(depth > ${MAX_DEPTH} ? [] : [${item}])`;
      }
      case "object":
        return "{}";
      case "string":
        return stringDefaultExpr(propName);
      case "integer":
      case "number":
        return numericDefaultExpr(propName);
      case "boolean":
        return booleanDefaultExpr(propName);
    }
    return "undefined";
  }

  private exprForRef(ref: string, recordRef: RecordRef): string {
    if (ref === "pulumi.json#/Any") return "undefined";
    if (ref === "pulumi.json#/Archive") return "h.archive()";
    if (ref === "pulumi.json#/Asset") return "h.asset()";
    if (!ref.startsWith("#/types/")) return "undefined";
    const tok = ref.substring("#/types/".length);
    const t = this.schema.types[tok];
    if (!t) return "undefined";
    if (t.enum && t.enum.length > 0) return q(t.enum[0].value as string);
    recordRef(tok);
    const { service } = parseToken(tok);
    return `(depth > ${MAX_DEPTH} ? {} : T_${serviceSlug(service)}.${typeBuilderIdent(tok)}(ctx, depth + 1))`;
  }

  emitObjectBody(
    properties: Record<string, PropertyDef>,
    inputNames: Set<string> | null,
    recordRef: RecordRef,
  ): string {
    const lines = [
      `  const i: Record<string, any> = (ctx.inputs ?? {}) as any;`,
      `  const out: Record<string, any> = {};`,
    ];
    for (const name of Object.keys(properties).sort()) {
      const expr = this.exprForProperty(properties[name], name, recordRef);
      const isIdent = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
      const outLhs = isIdent ? `out.${name}` : `out[${q(name)}]`;
      const inRhs = isIdent ? `i.${name}` : `i[${q(name)}]`;
      if (inputNames && inputNames.has(name)) {
        lines.push(`  ${outLhs} = (${inRhs} !== undefined ? ${inRhs} : ${expr});`);
      } else if (name === "tagsAll") {
        lines.push(`  out.tagsAll = { ...(i.tags ?? {}) };`);
      } else {
        lines.push(`  ${outLhs} = ${expr};`);
      }
    }
    lines.push(`  return out;`);
    return lines.join("\n");
  }
}

// -- Codegen ---------------------------------------------------------------

export interface EmittedFile {
  path: string;
  content: string;
}

export interface CodegenResult {
  files: EmittedFile[];
  stats: { resources: number; functions: number; types: number; services: number };
}

type BucketKind = "types" | "resources" | "functions";
interface Bucket {
  tokens: string[];
  imports: Set<string>;
}
type Buckets = Record<BucketKind, Bucket>;

const newBuckets = (): Buckets => ({
  types: { tokens: [], imports: new Set() },
  resources: { tokens: [], imports: new Set() },
  functions: { tokens: [], imports: new Set() },
});

// Build a `RecordRef` whose imports are captured locally.  Types filter out
// same-service refs (the self-import handles those); resources/functions do
// not (they always import types from the types/ folder regardless).
function makeRefCapture(currentService: string, crossServiceOnly: boolean) {
  const imports = new Set<string>();
  const recordRef: RecordRef = (tok) => {
    const { service } = parseToken(tok);
    if (crossServiceOnly && service === currentService) return;
    imports.add(service);
  };
  return { imports, recordRef };
}

function renderServiceFile(
  kind: BucketKind,
  svc: string,
  slug: string,
  b: Bucket,
  bodies: Map<string, string>,
): EmittedFile {
  const typesPrefix = kind === "types" ? "./" : "../types/";
  const importLines = [
    `import type { MockCtx } from "../helpers.js";`,
    `import * as h from "../helpers.js";`,
    ...[...b.imports]
      .sort()
      .map((dep) => `import * as T_${serviceSlug(dep)} from "${typesPrefix}${serviceSlug(dep)}.js";`),
  ];
  // Types files need a self-alias because intra-service type refs compile to
  // `T_<slug>.xxx(...)`.  Unused imports are harmless — tsconfig doesn't set
  // noUnusedLocals — so we emit unconditionally and skip a tracking pass.
  if (kind === "types") {
    importLines.push(`import * as T_${slug} from "./${slug}.js";`);
  }
  const banner = `// Service: ${svc}   (${b.tokens.length} ${kind})`;
  const body = b.tokens.map((t) => bodies.get(t)!).join("\n");
  return {
    path: `src/generated/${kind}/${slug}.ts`,
    content: [`// GENERATED FILE — do not edit.`, banner, "", ...importLines, "", body].join("\n"),
  };
}

export function codegen(schema: PulumiSchema): CodegenResult {
  const emitter = new Emitter(schema);
  const byService = new Map<string, Buckets>();
  const bucket = (svc: string): Buckets => {
    let bs = byService.get(svc);
    if (!bs) {
      bs = newBuckets();
      byService.set(svc, bs);
    }
    return bs;
  };

  const typeBodies = new Map<string, string>();
  const resourceBodies = new Map<string, string>();
  const functionBodies = new Map<string, string>();

  for (const [tok, tdef] of Object.entries(schema.types)) {
    if (tdef.enum) continue;
    const { service } = parseToken(tok);
    const { imports, recordRef } = makeRefCapture(service, /* crossServiceOnly */ true);
    const body = emitter.emitObjectBody(tdef.properties ?? {}, null, recordRef);
    const fn =
      `// ${tok}\n` +
      `export function ${typeBuilderIdent(tok)}(ctx: MockCtx, depth = 0): Record<string, any> {\n` +
      `  if (depth > ${MAX_DEPTH}) return {};\n` +
      body +
      `\n}\n`;
    typeBodies.set(tok, fn);
    const b = bucket(service);
    b.types.tokens.push(tok);
    for (const dep of imports) b.types.imports.add(dep);
  }

  for (const [tok, rdef] of Object.entries(schema.resources)) {
    const { service } = parseToken(tok);
    const b = bucket(service);
    if (!rdef.properties) {
      const fn =
        `// ${tok}\n` +
        `export function ${resourceFactoryIdent(tok)}(ctx: MockCtx): Record<string, any> {\n` +
        `  const _ = ctx;\n  return {};\n}\n`;
      resourceBodies.set(tok, fn);
      b.resources.tokens.push(tok);
      continue;
    }
    const { imports, recordRef } = makeRefCapture(service, /* crossServiceOnly */ false);
    const inputNames = new Set(Object.keys(rdef.inputProperties ?? {}));
    const body = emitter.emitObjectBody(rdef.properties, inputNames, recordRef);
    const fn =
      `// ${tok}\n` +
      `export function ${resourceFactoryIdent(tok)}(ctx: MockCtx): Record<string, any> {\n` +
      `  const depth = 0;\n` +
      body +
      `\n}\n`;
    resourceBodies.set(tok, fn);
    b.resources.tokens.push(tok);
    for (const dep of imports) b.resources.imports.add(dep);
  }

  for (const [tok, fdef] of Object.entries(schema.functions)) {
    // Internal tokens like `pulumi:providers:aws/terraformConfig` aren't
    // user-facing AWS SDK calls; skip them so downstream consumers don't see
    // ghost registry entries.
    if (!tok.startsWith("aws:")) continue;
    const { service } = parseToken(tok);
    const { imports, recordRef } = makeRefCapture(service, /* crossServiceOnly */ false);
    const inputNames = new Set(Object.keys(fdef.inputs?.properties ?? {}));
    const body = emitter.emitObjectBody(fdef.outputs?.properties ?? {}, inputNames, recordRef);
    const fn =
      `// ${tok}\n` +
      `export function ${functionFactoryIdent(tok)}(ctx: MockCtx): Record<string, any> {\n` +
      `  const depth = 0;\n` +
      body +
      `\n}\n`;
    functionBodies.set(tok, fn);
    const b = bucket(service);
    b.functions.tokens.push(tok);
    for (const dep of imports) b.functions.imports.add(dep);
  }

  // Sort every token list once, up front, so every downstream consumer gets
  // the same deterministic order without each re-sorting in place.
  for (const bs of byService.values()) {
    for (const kind of ["types", "resources", "functions"] as const) {
      bs[kind].tokens.sort();
    }
  }

  const allServices = [...byService.keys()].sort();
  const bodiesByKind: Record<BucketKind, Map<string, string>> = {
    types: typeBodies,
    resources: resourceBodies,
    functions: functionBodies,
  };

  const files: EmittedFile[] = [];
  for (const svc of allServices) {
    const bs = byService.get(svc)!;
    const slug = serviceSlug(svc);
    for (const kind of ["types", "resources", "functions"] as const) {
      if (bs[kind].tokens.length === 0) continue;
      files.push(renderServiceFile(kind, svc, slug, bs[kind], bodiesByKind[kind]));
    }
  }

  const registryLines: string[] = [
    `// GENERATED FILE — do not edit.`,
    `import type { MockCtx } from "./helpers.js";`,
    "",
  ];
  for (const svc of allServices) {
    const bs = byService.get(svc)!;
    const slug = serviceSlug(svc);
    if (bs.resources.tokens.length > 0) {
      registryLines.push(`import * as R_${slug} from "./resources/${slug}.js";`);
    }
    if (bs.functions.tokens.length > 0) {
      registryLines.push(`import * as F_${slug} from "./functions/${slug}.js";`);
    }
  }
  registryLines.push(
    "",
    `export type Factory = (ctx: MockCtx) => Record<string, any>;`,
    `export const resourceRegistry: Record<string, Factory> = {};`,
    `export const functionRegistry: Record<string, Factory> = {};`,
    "",
  );
  for (const svc of allServices) {
    const bs = byService.get(svc)!;
    const slug = serviceSlug(svc);
    for (const tok of bs.resources.tokens) {
      registryLines.push(`resourceRegistry[${q(tok)}] = R_${slug}.${resourceFactoryIdent(tok)};`);
    }
    for (const tok of bs.functions.tokens) {
      registryLines.push(`functionRegistry[${q(tok)}] = F_${slug}.${functionFactoryIdent(tok)};`);
    }
  }
  files.push({ path: "src/generated/registry.ts", content: registryLines.join("\n") + "\n" });

  files.push({
    path: "src/generated/index.ts",
    content: [
      `// GENERATED FILE — do not edit.`,
      `export * from "./registry.js";`,
      `export * from "./helpers.js";`,
      "",
    ].join("\n"),
  });

  return {
    files,
    stats: {
      resources: Object.keys(schema.resources).length,
      functions: Object.keys(schema.functions).length,
      types: Object.keys(schema.types).length,
      services: allServices.length,
    },
  };
}
