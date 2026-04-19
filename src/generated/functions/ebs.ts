// GENERATED FILE — do not edit.
// Service: ebs   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ebs from "../types/ebs.js";

// aws:ebs/getDefaultKmsKey:getDefaultKmsKey
export function getDefaultKmsKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.keyArn = h.arn(ctx);
  return out;
}

// aws:ebs/getEbsVolumes:getEbsVolumes
export function getEbsVolumes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ebs.ebs_getEbsVolumesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ebs/getEncryptionByDefault:getEncryptionByDefault
export function getEncryptionByDefault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.id = h.id(ctx, "id");
  return out;
}

// aws:ebs/getSnapshot:getSnapshot
export function getSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataEncryptionKeyId = h.id(ctx, "dataEncryptionKeyId");
  out.description = "";
  out.encrypted = false;
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ebs.ebs_getSnapshotFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.outpostArn = h.arn(ctx);
  out.ownerAlias = "";
  out.ownerId = ctx.accountId;
  out.owners = (i.owners !== undefined ? i.owners : (depth > 4 ? [] : [""]));
  out.restorableByUserIds = (i.restorableByUserIds !== undefined ? i.restorableByUserIds : (depth > 4 ? [] : [""]));
  out.snapshotId = h.id(ctx, "snapshotId");
  out.snapshotIds = (i.snapshotIds !== undefined ? i.snapshotIds : (depth > 4 ? [] : [""]));
  out.startTime = "";
  out.state = "active";
  out.storageTier = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  return out;
}

// aws:ebs/getSnapshotIds:getSnapshotIds
export function getSnapshotIds(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ebs.ebs_getSnapshotIdsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.owners = (i.owners !== undefined ? i.owners : (depth > 4 ? [] : [""]));
  out.restorableByUserIds = (i.restorableByUserIds !== undefined ? i.restorableByUserIds : (depth > 4 ? [] : [""]));
  return out;
}

// aws:ebs/getVolume:getVolume
export function getVolume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.createTime = h.timestamp();
  out.encrypted = false;
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_ebs.ebs_getVolumeFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.multiAttachEnabled = false;
  out.outpostArn = h.arn(ctx);
  out.size = 8;
  out.snapshotId = h.id(ctx, "snapshotId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeType = "";
  return out;
}
