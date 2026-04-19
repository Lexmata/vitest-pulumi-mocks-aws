// GENERATED FILE — do not edit.
// Service: neptunegraph   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_neptunegraph from "./neptunegraph.js";

// aws:neptunegraph/GraphTimeouts:GraphTimeouts
export function neptunegraph_GraphTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:neptunegraph/GraphVectorSearchConfiguration:GraphVectorSearchConfiguration
export function neptunegraph_GraphVectorSearchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vectorSearchDimension = 0;
  return out;
}
