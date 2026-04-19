// GENERATED FILE — do not edit.
// Service: efs   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_efs from "../types/efs.js";

// aws:efs/accessPoint:AccessPoint
export function AccessPoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fileSystemArn = h.arn(ctx);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.ownerId = ctx.accountId;
  out.posixUser = (i.posixUser !== undefined ? i.posixUser : (depth > 4 ? {} : T_efs.efs_AccessPointPosixUser(ctx, depth + 1)));
  out.rootDirectory = (i.rootDirectory !== undefined ? i.rootDirectory : (depth > 4 ? {} : T_efs.efs_AccessPointRootDirectory(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:efs/backupPolicy:BackupPolicy
export function BackupPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.backupPolicy = (i.backupPolicy !== undefined ? i.backupPolicy : (depth > 4 ? {} : T_efs.efs_BackupPolicyBackupPolicy(ctx, depth + 1)));
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  return out;
}

// aws:efs/fileSystem:FileSystem
export function FileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZoneId = ctx.region + "a";
  out.availabilityZoneName = (i.availabilityZoneName !== undefined ? i.availabilityZoneName : ctx.region + "a");
  out.creationToken = (i.creationToken !== undefined ? i.creationToken : "");
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.encrypted = (i.encrypted !== undefined ? i.encrypted : false);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lifecyclePolicies = (i.lifecyclePolicies !== undefined ? i.lifecyclePolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_FileSystemLifecyclePolicy(ctx, depth + 1))]));
  out.name = ctx.name;
  out.numberOfMountTargets = 0;
  out.ownerId = ctx.accountId;
  out.performanceMode = (i.performanceMode !== undefined ? i.performanceMode : "");
  out.protection = (i.protection !== undefined ? i.protection : (depth > 4 ? {} : T_efs.efs_FileSystemProtection(ctx, depth + 1)));
  out.provisionedThroughputInMibps = (i.provisionedThroughputInMibps !== undefined ? i.provisionedThroughputInMibps : 0);
  out.sizeInBytes = (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_FileSystemSizeInByte(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughputMode = (i.throughputMode !== undefined ? i.throughputMode : "");
  return out;
}

// aws:efs/fileSystemPolicy:FileSystemPolicy
export function FileSystemPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bypassPolicyLockoutSafetyCheck = (i.bypassPolicyLockoutSafetyCheck !== undefined ? i.bypassPolicyLockoutSafetyCheck : false);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:efs/mountTarget:MountTarget
export function MountTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneId = ctx.region + "a";
  out.availabilityZoneName = ctx.region + "a";
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.fileSystemArn = h.arn(ctx);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.ipAddress = (i.ipAddress !== undefined ? i.ipAddress : "10.0.0.10");
  out.mountTargetDnsName = "";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.ownerId = ctx.accountId;
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  return out;
}

// aws:efs/replicationConfiguration:ReplicationConfiguration
export function ReplicationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationTime = "";
  out.destination = (i.destination !== undefined ? i.destination : (depth > 4 ? {} : T_efs.efs_ReplicationConfigurationDestination(ctx, depth + 1)));
  out.originalSourceFileSystemArn = h.arn(ctx);
  out.sourceFileSystemArn = h.arn(ctx);
  out.sourceFileSystemId = (i.sourceFileSystemId !== undefined ? i.sourceFileSystemId : h.id(ctx, "sourceFileSystemId"));
  out.sourceFileSystemRegion = "";
  return out;
}
