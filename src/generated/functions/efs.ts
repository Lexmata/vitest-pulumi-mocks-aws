// GENERATED FILE — do not edit.
// Service: efs   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_efs from "../types/efs.js";

// aws:efs/getAccessPoint:getAccessPoint
export function getAccessPoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointId = (i.accessPointId !== undefined ? i.accessPointId : h.id(ctx, "accessPointId"));
  out.arn = h.arn(ctx);
  out.fileSystemArn = h.arn(ctx);
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.id = h.id(ctx, "id");
  out.ownerId = ctx.accountId;
  out.posixUsers = (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_getAccessPointPosixUser(ctx, depth + 1))]);
  out.rootDirectories = (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_getAccessPointRootDirectory(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:efs/getAccessPoints:getAccessPoints
export function getAccessPoints(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:efs/getFileSystem:getFileSystem
export function getFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZoneId = ctx.region + "a";
  out.availabilityZoneName = ctx.region + "a";
  out.creationToken = (i.creationToken !== undefined ? i.creationToken : "");
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.encrypted = false;
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.lifecyclePolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_getFileSystemLifecyclePolicy(ctx, depth + 1))]);
  out.lifecyclePolicy = (depth > 4 ? {} : T_efs.efs_getFileSystemLifecyclePolicy(ctx, depth + 1));
  out.name = ctx.name;
  out.performanceMode = "";
  out.protections = (depth > 4 ? [] : [(depth > 4 ? {} : T_efs.efs_getFileSystemProtection(ctx, depth + 1))]);
  out.provisionedThroughputInMibps = 0;
  out.sizeInBytes = 8;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.throughputMode = "";
  return out;
}

// aws:efs/getMountTarget:getMountTarget
export function getMountTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointId = (i.accessPointId !== undefined ? i.accessPointId : h.id(ctx, "accessPointId"));
  out.availabilityZoneId = ctx.region + "a";
  out.availabilityZoneName = ctx.region + "a";
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.fileSystemArn = h.arn(ctx);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.id = h.id(ctx, "id");
  out.ipAddress = "10.0.0.10";
  out.mountTargetDnsName = "";
  out.mountTargetId = (i.mountTargetId !== undefined ? i.mountTargetId : h.id(ctx, "mountTargetId"));
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.ownerId = ctx.accountId;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}
