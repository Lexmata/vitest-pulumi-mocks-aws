// GENERATED FILE — do not edit.
// Service: datasync   (23 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datasync from "./datasync.js";

// aws:datasync/EfsLocationEc2Config:EfsLocationEc2Config
export function datasync_EfsLocationEc2Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupArns = (depth > 4 ? [] : [""]);
  out.subnetArn = h.arn(ctx);
  return out;
}

// aws:datasync/FsxOpenZfsFileSystemProtocol:FsxOpenZfsFileSystemProtocol
export function datasync_FsxOpenZfsFileSystemProtocol(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nfs = (depth > 4 ? {} : T_datasync.datasync_FsxOpenZfsFileSystemProtocolNfs(ctx, depth + 1));
  return out;
}

// aws:datasync/FsxOpenZfsFileSystemProtocolNfs:FsxOpenZfsFileSystemProtocolNfs
export function datasync_FsxOpenZfsFileSystemProtocolNfs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mountOptions = (depth > 4 ? {} : T_datasync.datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions(ctx, depth + 1));
  return out;
}

// aws:datasync/FsxOpenZfsFileSystemProtocolNfsMountOptions:FsxOpenZfsFileSystemProtocolNfsMountOptions
export function datasync_FsxOpenZfsFileSystemProtocolNfsMountOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.version = "1";
  return out;
}

// aws:datasync/LocationAzureBlobSasConfiguration:LocationAzureBlobSasConfiguration
export function datasync_LocationAzureBlobSasConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.token = "";
  return out;
}

// aws:datasync/LocationFsxOntapFileSystemProtocol:LocationFsxOntapFileSystemProtocol
export function datasync_LocationFsxOntapFileSystemProtocol(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nfs = (depth > 4 ? {} : T_datasync.datasync_LocationFsxOntapFileSystemProtocolNfs(ctx, depth + 1));
  out.smb = (depth > 4 ? {} : T_datasync.datasync_LocationFsxOntapFileSystemProtocolSmb(ctx, depth + 1));
  return out;
}

// aws:datasync/LocationFsxOntapFileSystemProtocolNfs:LocationFsxOntapFileSystemProtocolNfs
export function datasync_LocationFsxOntapFileSystemProtocolNfs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mountOptions = (depth > 4 ? {} : T_datasync.datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions(ctx, depth + 1));
  return out;
}

// aws:datasync/LocationFsxOntapFileSystemProtocolNfsMountOptions:LocationFsxOntapFileSystemProtocolNfsMountOptions
export function datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.version = "1";
  return out;
}

// aws:datasync/LocationFsxOntapFileSystemProtocolSmb:LocationFsxOntapFileSystemProtocolSmb
export function datasync_LocationFsxOntapFileSystemProtocolSmb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = h.endpoint(ctx, "domain");
  out.mountOptions = (depth > 4 ? {} : T_datasync.datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions(ctx, depth + 1));
  out.password = "";
  out.user = "";
  return out;
}

// aws:datasync/LocationFsxOntapFileSystemProtocolSmbMountOptions:LocationFsxOntapFileSystemProtocolSmbMountOptions
export function datasync_LocationFsxOntapFileSystemProtocolSmbMountOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.version = "1";
  return out;
}

// aws:datasync/LocationHdfsNameNode:LocationHdfsNameNode
export function datasync_LocationHdfsNameNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostname = "";
  out.port = 443;
  return out;
}

// aws:datasync/LocationHdfsQopConfiguration:LocationHdfsQopConfiguration
export function datasync_LocationHdfsQopConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataTransferProtection = "";
  out.rpcProtection = "";
  return out;
}

// aws:datasync/LocationSmbMountOptions:LocationSmbMountOptions
export function datasync_LocationSmbMountOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.version = "1";
  return out;
}

// aws:datasync/NfsLocationMountOptions:NfsLocationMountOptions
export function datasync_NfsLocationMountOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.version = "1";
  return out;
}

// aws:datasync/NfsLocationOnPremConfig:NfsLocationOnPremConfig
export function datasync_NfsLocationOnPremConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:datasync/S3LocationS3Config:S3LocationS3Config
export function datasync_S3LocationS3Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketAccessRoleArn = h.arn(ctx);
  return out;
}

// aws:datasync/TaskExcludes:TaskExcludes
export function datasync_TaskExcludes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filterType = "";
  out.value = "";
  return out;
}

// aws:datasync/TaskIncludes:TaskIncludes
export function datasync_TaskIncludes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filterType = "";
  out.value = "";
  return out;
}

// aws:datasync/TaskOptions:TaskOptions
export function datasync_TaskOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.atime = "";
  out.bytesPerSecond = 0;
  out.gid = h.id(ctx, "gid");
  out.logLevel = "";
  out.mtime = "";
  out.objectTags = "";
  out.overwriteMode = "";
  out.posixPermissions = "";
  out.preserveDeletedFiles = "";
  out.preserveDevices = "";
  out.securityDescriptorCopyFlags = "";
  out.taskQueueing = "";
  out.transferMode = "";
  out.uid = h.id(ctx, "uid");
  out.verifyMode = "";
  return out;
}

// aws:datasync/TaskSchedule:TaskSchedule
export function datasync_TaskSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scheduleExpression = "";
  return out;
}

// aws:datasync/TaskTaskReportConfig:TaskTaskReportConfig
export function datasync_TaskTaskReportConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputType = "";
  out.reportLevel = "";
  out.reportOverrides = (depth > 4 ? {} : T_datasync.datasync_TaskTaskReportConfigReportOverrides(ctx, depth + 1));
  out.s3Destination = (depth > 4 ? {} : T_datasync.datasync_TaskTaskReportConfigS3Destination(ctx, depth + 1));
  out.s3ObjectVersioning = "";
  return out;
}

// aws:datasync/TaskTaskReportConfigReportOverrides:TaskTaskReportConfigReportOverrides
export function datasync_TaskTaskReportConfigReportOverrides(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deletedOverride = "";
  out.skippedOverride = "";
  out.transferredOverride = "";
  out.verifiedOverride = "";
  return out;
}

// aws:datasync/TaskTaskReportConfigS3Destination:TaskTaskReportConfigS3Destination
export function datasync_TaskTaskReportConfigS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketAccessRoleArn = h.arn(ctx);
  out.s3BucketArn = h.arn(ctx);
  out.subdirectory = "";
  return out;
}
