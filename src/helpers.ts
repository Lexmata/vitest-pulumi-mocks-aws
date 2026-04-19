export interface MockCtx {
  readonly type: string;
  readonly name: string;
  readonly inputs: Record<string, unknown>;
  // Stable per-resource seed; generators embed it into ARNs for deterministic
  // output across re-reads of the same logical resource.
  readonly idSeed: string;
  readonly region: string;
  readonly accountId: string;
  readonly partition: string;
}

// Pulumi tokens are always `aws:<module>/<submodule>:<Name>`.  The runtime
// guarantees this shape so a single split is sufficient.
function tokenService(type: string): string {
  return type.split(":")[1].split("/")[0];
}

function tokenSymbol(type: string): string {
  return type.split(":")[2];
}

export function arn(ctx: MockCtx): string {
  const service = tokenService(ctx.type);
  const sym = tokenSymbol(ctx.type).toLowerCase();
  return `arn:${ctx.partition}:${service}:${ctx.region}:${ctx.accountId}:${sym}/${ctx.name}-${ctx.idSeed}`;
}

export function id(ctx: MockCtx, propName: string, prefix?: string): string {
  return `${prefix ?? derivePrefix(ctx.type, propName)}-${ctx.idSeed}`;
}

export function endpoint(ctx: MockCtx, propName: string): string {
  if (propName.toLowerCase().includes("bucket")) {
    return `${ctx.name}.s3.${ctx.region}.amazonaws.com`;
  }
  return `${ctx.name}-${ctx.idSeed}.${tokenService(ctx.type)}.${ctx.region}.amazonaws.com`;
}

// Static so snapshots remain stable across runs.
export function timestamp(): string {
  return "2024-01-01T00:00:00Z";
}

export function archive(): { __pulumiArchive: true; path: string } {
  return { __pulumiArchive: true, path: "mock://archive" };
}

export function asset(): { __pulumiAsset: true; path: string } {
  return { __pulumiAsset: true, path: "mock://asset" };
}

const ID_PREFIXES: Array<[prefix: string, out: string]> = [
  ["vpc", "vpc"],
  ["subnet", "subnet"],
  ["securitygroup", "sg"],
  ["instance", "i"],
  ["volume", "vol"],
  ["snapshot", "snap"],
  ["image", "ami"],
  ["ami", "ami"],
];

function derivePrefix(type: string, propName: string): string {
  const n = propName.toLowerCase();
  for (const [match, out] of ID_PREFIXES) {
    if (n.startsWith(match)) return out;
  }
  return tokenService(type);
}
