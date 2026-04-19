// GENERATED FILE — do not edit.
// Service: dsql   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dsql from "./dsql.js";

// aws:dsql/ClusterEncryptionDetail:ClusterEncryptionDetail
export function dsql_ClusterEncryptionDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionStatus = "";
  out.encryptionType = "";
  return out;
}

// aws:dsql/ClusterMultiRegionProperties:ClusterMultiRegionProperties
export function dsql_ClusterMultiRegionProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusters = (depth > 4 ? [] : [""]);
  out.witnessRegion = "";
  return out;
}

// aws:dsql/ClusterPeeringTimeouts:ClusterPeeringTimeouts
export function dsql_ClusterPeeringTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:dsql/ClusterTimeouts:ClusterTimeouts
export function dsql_ClusterTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}
