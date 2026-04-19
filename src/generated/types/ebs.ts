// GENERATED FILE — do not edit.
// Service: ebs   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ebs from "./ebs.js";

// aws:ebs/FastSnapshotRestoreTimeouts:FastSnapshotRestoreTimeouts
export function ebs_FastSnapshotRestoreTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:ebs/SnapshotImportClientData:SnapshotImportClientData
export function ebs_SnapshotImportClientData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = "";
  out.uploadEnd = "";
  out.uploadSize = 8;
  out.uploadStart = "";
  return out;
}

// aws:ebs/SnapshotImportDiskContainer:SnapshotImportDiskContainer
export function ebs_SnapshotImportDiskContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.format = "";
  out.url = h.endpoint(ctx, "url");
  out.userBucket = (depth > 4 ? {} : T_ebs.ebs_SnapshotImportDiskContainerUserBucket(ctx, depth + 1));
  return out;
}

// aws:ebs/SnapshotImportDiskContainerUserBucket:SnapshotImportDiskContainerUserBucket
export function ebs_SnapshotImportDiskContainerUserBucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Bucket = "";
  out.s3Key = "";
  return out;
}

// aws:ebs/getEbsVolumesFilter:getEbsVolumesFilter
export function ebs_getEbsVolumesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ebs/getSnapshotFilter:getSnapshotFilter
export function ebs_getSnapshotFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ebs/getSnapshotIdsFilter:getSnapshotIdsFilter
export function ebs_getSnapshotIdsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ebs/getVolumeFilter:getVolumeFilter
export function ebs_getVolumeFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}
