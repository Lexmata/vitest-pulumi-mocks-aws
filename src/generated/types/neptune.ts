// GENERATED FILE — do not edit.
// Service: neptune   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_neptune from "./neptune.js";

// aws:neptune/ClusterParameterGroupParameter:ClusterParameterGroupParameter
export function neptune_ClusterParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyMethod = "";
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:neptune/ClusterServerlessV2ScalingConfiguration:ClusterServerlessV2ScalingConfiguration
export function neptune_ClusterServerlessV2ScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxCapacity = 0;
  out.minCapacity = 0;
  return out;
}

// aws:neptune/GlobalClusterGlobalClusterMember:GlobalClusterGlobalClusterMember
export function neptune_GlobalClusterGlobalClusterMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbClusterArn = h.arn(ctx);
  out.isWriter = true;
  return out;
}

// aws:neptune/ParameterGroupParameter:ParameterGroupParameter
export function neptune_ParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyMethod = "";
  out.name = ctx.name;
  out.value = "";
  return out;
}
