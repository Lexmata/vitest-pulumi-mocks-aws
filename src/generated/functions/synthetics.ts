// GENERATED FILE — do not edit.
// Service: synthetics   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_synthetics from "../types/synthetics.js";

// aws:synthetics/getRuntimeVersion:getRuntimeVersion
export function getRuntimeVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deprecationDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.latest = (i.latest !== undefined ? i.latest : false);
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  out.releaseDate = "";
  out.version = (i.version !== undefined ? i.version : "1");
  out.versionName = "";
  return out;
}

// aws:synthetics/getRuntimeVersions:getRuntimeVersions
export function getRuntimeVersions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.runtimeVersions = (i.runtimeVersions !== undefined ? i.runtimeVersions : (depth > 4 ? [] : [(depth > 4 ? {} : T_synthetics.synthetics_getRuntimeVersionsRuntimeVersion(ctx, depth + 1))]));
  return out;
}
