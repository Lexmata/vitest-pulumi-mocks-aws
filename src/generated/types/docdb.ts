// GENERATED FILE — do not edit.
// Service: docdb   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_docdb from "./docdb.js";

// aws:docdb/ClusterMasterUserSecret:ClusterMasterUserSecret
export function docdb_ClusterMasterUserSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.secretArn = h.arn(ctx);
  out.secretStatus = "";
  return out;
}

// aws:docdb/ClusterParameterGroupParameter:ClusterParameterGroupParameter
export function docdb_ClusterParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyMethod = "";
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:docdb/ClusterRestoreToPointInTime:ClusterRestoreToPointInTime
export function docdb_ClusterRestoreToPointInTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.restoreToTime = "";
  out.restoreType = "";
  out.sourceClusterIdentifier = "";
  out.useLatestRestorableTime = false;
  return out;
}

// aws:docdb/ElasticClusterTimeouts:ElasticClusterTimeouts
export function docdb_ElasticClusterTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:docdb/GlobalClusterGlobalClusterMember:GlobalClusterGlobalClusterMember
export function docdb_GlobalClusterGlobalClusterMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbClusterArn = h.arn(ctx);
  out.isWriter = true;
  return out;
}
