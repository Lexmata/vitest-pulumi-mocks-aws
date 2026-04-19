// GENERATED FILE — do not edit.
// Service: dax   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dax from "./dax.js";

// aws:dax/ClusterNode:ClusterNode
export function dax_ClusterNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.availabilityZone = ctx.region + "a";
  out.id = h.id(ctx, "id");
  out.port = 443;
  return out;
}

// aws:dax/ClusterServerSideEncryption:ClusterServerSideEncryption
export function dax_ClusterServerSideEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:dax/ParameterGroupParameter:ParameterGroupParameter
export function dax_ParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}
