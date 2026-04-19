// GENERATED FILE — do not edit.
// Service: fsx   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fsx from "../types/fsx.js";

// aws:fsx/getOntapFileSystem:getOntapFileSystem
export function getOntapFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.automaticBackupRetentionDays = 0;
  out.dailyAutomaticBackupStartTime = "";
  out.deploymentType = "";
  out.diskIopsConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapFileSystemDiskIopsConfiguration(ctx, depth + 1))]);
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.endpointIpAddressRange = "";
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapFileSystemEndpoint(ctx, depth + 1))]);
  out.haPairs = 0;
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.preferredSubnetId = h.id(ctx, "preferredSubnetId");
  out.routeTableIds = (depth > 4 ? [] : [""]);
  out.storageCapacity = 0;
  out.storageType = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.throughputCapacity = 0;
  out.throughputCapacityPerHaPair = 0;
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.weeklyMaintenanceStartTime = "";
  return out;
}

// aws:fsx/getOntapStorageVirtualMachine:getOntapStorageVirtualMachine
export function getOntapStorageVirtualMachine(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineActiveDirectoryConfiguration(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineEndpoint(ctx, depth + 1))]);
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.lifecycleStatus = "";
  out.lifecycleTransitionReasons = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineLifecycleTransitionReason(ctx, depth + 1))]);
  out.name = ctx.name;
  out.subtype = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.uuid = h.id(ctx, "uuid");
  return out;
}

// aws:fsx/getOntapStorageVirtualMachines:getOntapStorageVirtualMachines
export function getOntapStorageVirtualMachines(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachinesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOpenZfsSnapshot:getOpenZfsSnapshot
export function getOpenZfsSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOpenZfsSnapshotFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.snapshotId = h.id(ctx, "snapshotId");
  out.snapshotIds = (i.snapshotIds !== undefined ? i.snapshotIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.volumeId = h.id(ctx, "volumeId");
  return out;
}

// aws:fsx/getWindowsFileSystem:getWindowsFileSystem
export function getWindowsFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryId = h.id(ctx, "activeDirectoryId");
  out.aliases = (depth > 4 ? [] : [""]);
  out.arn = h.arn(ctx);
  out.auditLogConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getWindowsFileSystemAuditLogConfiguration(ctx, depth + 1))]);
  out.automaticBackupRetentionDays = 0;
  out.backupId = h.id(ctx, "backupId");
  out.copyTagsToBackups = false;
  out.dailyAutomaticBackupStartTime = "";
  out.deploymentType = "";
  out.diskIopsConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getWindowsFileSystemDiskIopsConfiguration(ctx, depth + 1))]);
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.preferredFileServerIp = "";
  out.preferredSubnetId = h.id(ctx, "preferredSubnetId");
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.skipFinalBackup = false;
  out.storageCapacity = 0;
  out.storageType = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.throughputCapacity = 0;
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.weeklyMaintenanceStartTime = "";
  return out;
}
