// GENERATED FILE — do not edit.
// Service: ebs   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ebs from "../types/ebs.js";

// aws:ebs/defaultKmsKey:DefaultKmsKey
export function DefaultKmsKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyArn = (i.keyArn !== undefined ? i.keyArn : h.arn(ctx));
  return out;
}

// aws:ebs/encryptionByDefault:EncryptionByDefault
export function EncryptionByDefault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  return out;
}

// aws:ebs/fastSnapshotRestore:FastSnapshotRestore
export function FastSnapshotRestore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.snapshotId = (i.snapshotId !== undefined ? i.snapshotId : h.id(ctx, "snapshotId"));
  out.state = "active";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_ebs.ebs_FastSnapshotRestoreTimeouts(ctx, depth + 1)));
  return out;
}

// aws:ebs/snapshot:Snapshot
export function Snapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dataEncryptionKeyId = h.id(ctx, "dataEncryptionKeyId");
  out.description = (i.description !== undefined ? i.description : "");
  out.encrypted = false;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.outpostArn = (i.outpostArn !== undefined ? i.outpostArn : h.arn(ctx));
  out.ownerAlias = "";
  out.ownerId = ctx.accountId;
  out.permanentRestore = (i.permanentRestore !== undefined ? i.permanentRestore : false);
  out.storageTier = (i.storageTier !== undefined ? i.storageTier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.temporaryRestoreDays = (i.temporaryRestoreDays !== undefined ? i.temporaryRestoreDays : 0);
  out.volumeId = (i.volumeId !== undefined ? i.volumeId : h.id(ctx, "volumeId"));
  out.volumeSize = 8;
  return out;
}

// aws:ebs/snapshotBlockPublicAccess:SnapshotBlockPublicAccess
export function SnapshotBlockPublicAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.state = (i.state !== undefined ? i.state : "active");
  return out;
}

// aws:ebs/snapshotCopy:SnapshotCopy
export function SnapshotCopy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.completionDurationMinutes = (i.completionDurationMinutes !== undefined ? i.completionDurationMinutes : 0);
  out.dataEncryptionKeyId = h.id(ctx, "dataEncryptionKeyId");
  out.description = (i.description !== undefined ? i.description : "");
  out.encrypted = (i.encrypted !== undefined ? i.encrypted : false);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.outpostArn = h.arn(ctx);
  out.ownerAlias = "";
  out.ownerId = ctx.accountId;
  out.permanentRestore = (i.permanentRestore !== undefined ? i.permanentRestore : false);
  out.sourceRegion = (i.sourceRegion !== undefined ? i.sourceRegion : "");
  out.sourceSnapshotId = (i.sourceSnapshotId !== undefined ? i.sourceSnapshotId : h.id(ctx, "sourceSnapshotId"));
  out.storageTier = (i.storageTier !== undefined ? i.storageTier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.temporaryRestoreDays = (i.temporaryRestoreDays !== undefined ? i.temporaryRestoreDays : 0);
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  return out;
}

// aws:ebs/snapshotImport:SnapshotImport
export function SnapshotImport(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clientData = (i.clientData !== undefined ? i.clientData : (depth > 4 ? {} : T_ebs.ebs_SnapshotImportClientData(ctx, depth + 1)));
  out.dataEncryptionKeyId = h.id(ctx, "dataEncryptionKeyId");
  out.description = (i.description !== undefined ? i.description : "");
  out.diskContainer = (i.diskContainer !== undefined ? i.diskContainer : (depth > 4 ? {} : T_ebs.ebs_SnapshotImportDiskContainer(ctx, depth + 1)));
  out.encrypted = (i.encrypted !== undefined ? i.encrypted : false);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.outpostArn = h.arn(ctx);
  out.ownerAlias = "";
  out.ownerId = ctx.accountId;
  out.permanentRestore = (i.permanentRestore !== undefined ? i.permanentRestore : false);
  out.roleName = (i.roleName !== undefined ? i.roleName : "");
  out.storageTier = (i.storageTier !== undefined ? i.storageTier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.temporaryRestoreDays = (i.temporaryRestoreDays !== undefined ? i.temporaryRestoreDays : 0);
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  return out;
}

// aws:ebs/volume:Volume
export function Volume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.createTime = h.timestamp();
  out.encrypted = (i.encrypted !== undefined ? i.encrypted : false);
  out.finalSnapshot = (i.finalSnapshot !== undefined ? i.finalSnapshot : false);
  out.iops = (i.iops !== undefined ? i.iops : 0);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.multiAttachEnabled = (i.multiAttachEnabled !== undefined ? i.multiAttachEnabled : false);
  out.outpostArn = (i.outpostArn !== undefined ? i.outpostArn : h.arn(ctx));
  out.size = (i.size !== undefined ? i.size : 8);
  out.snapshotId = (i.snapshotId !== undefined ? i.snapshotId : h.id(ctx, "snapshotId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughput = (i.throughput !== undefined ? i.throughput : 0);
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}
