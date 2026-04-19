// GENERATED FILE — do not edit.
// Service: efs   (13 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_efs from "./efs.js";

// aws:efs/AccessPointPosixUser:AccessPointPosixUser
export function efs_AccessPointPosixUser(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.secondaryGids = (depth > 4 ? [] : [0]);
  out.uid = 0;
  return out;
}

// aws:efs/AccessPointRootDirectory:AccessPointRootDirectory
export function efs_AccessPointRootDirectory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationInfo = (depth > 4 ? {} : T_efs.efs_AccessPointRootDirectoryCreationInfo(ctx, depth + 1));
  out.path = "";
  return out;
}

// aws:efs/AccessPointRootDirectoryCreationInfo:AccessPointRootDirectoryCreationInfo
export function efs_AccessPointRootDirectoryCreationInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ownerGid = 0;
  out.ownerUid = 0;
  out.permissions = "";
  return out;
}

// aws:efs/BackupPolicyBackupPolicy:BackupPolicyBackupPolicy
export function efs_BackupPolicyBackupPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:efs/FileSystemLifecyclePolicy:FileSystemLifecyclePolicy
export function efs_FileSystemLifecyclePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.transitionToArchive = "";
  out.transitionToIa = "";
  out.transitionToPrimaryStorageClass = "";
  return out;
}

// aws:efs/FileSystemProtection:FileSystemProtection
export function efs_FileSystemProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replicationOverwrite = "";
  return out;
}

// aws:efs/FileSystemSizeInByte:FileSystemSizeInByte
export function efs_FileSystemSizeInByte(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = 0;
  out.valueInIa = 0;
  out.valueInStandard = 0;
  return out;
}

// aws:efs/ReplicationConfigurationDestination:ReplicationConfigurationDestination
export function efs_ReplicationConfigurationDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneName = ctx.region + "a";
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.region = ctx.region;
  out.status = "active";
  return out;
}

// aws:efs/getAccessPointPosixUser:getAccessPointPosixUser
export function efs_getAccessPointPosixUser(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.secondaryGids = (depth > 4 ? [] : [0]);
  out.uid = 0;
  return out;
}

// aws:efs/getAccessPointRootDirectory:getAccessPointRootDirectory
export function efs_getAccessPointRootDirectory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_getAccessPointRootDirectoryCreationInfo(ctx, depth + 1))]);
  out.path = "";
  return out;
}

// aws:efs/getAccessPointRootDirectoryCreationInfo:getAccessPointRootDirectoryCreationInfo
export function efs_getAccessPointRootDirectoryCreationInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ownerGid = 0;
  out.ownerUid = 0;
  out.permissions = "";
  return out;
}

// aws:efs/getFileSystemLifecyclePolicy:getFileSystemLifecyclePolicy
export function efs_getFileSystemLifecyclePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.transitionToArchive = "";
  out.transitionToIa = "";
  out.transitionToPrimaryStorageClass = "";
  return out;
}

// aws:efs/getFileSystemProtection:getFileSystemProtection
export function efs_getFileSystemProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replicationOverwrite = "";
  return out;
}
