// GENERATED FILE — do not edit.
// Service: fsx   (11 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fsx from "../types/fsx.js";

// aws:fsx/backup:Backup
export function Backup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.ownerId = ctx.accountId;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  out.volumeId = (i.volumeId !== undefined ? i.volumeId : h.id(ctx, "volumeId"));
  return out;
}

// aws:fsx/dataRepositoryAssociation:DataRepositoryAssociation
export function DataRepositoryAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associationId = h.id(ctx, "associationId");
  out.batchImportMetaDataOnCreate = (i.batchImportMetaDataOnCreate !== undefined ? i.batchImportMetaDataOnCreate : false);
  out.dataRepositoryPath = (i.dataRepositoryPath !== undefined ? i.dataRepositoryPath : "");
  out.deleteDataInFilesystem = (i.deleteDataInFilesystem !== undefined ? i.deleteDataInFilesystem : false);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.fileSystemPath = (i.fileSystemPath !== undefined ? i.fileSystemPath : "");
  out.importedFileChunkSize = (i.importedFileChunkSize !== undefined ? i.importedFileChunkSize : 443);
  out.s3 = (i.s3 !== undefined ? i.s3 : (depth > 4 ? {} : T_fsx.fsx_DataRepositoryAssociationS3(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:fsx/fileCache:FileCache
export function FileCache(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.copyTagsToDataRepositoryAssociations = (i.copyTagsToDataRepositoryAssociations !== undefined ? i.copyTagsToDataRepositoryAssociations : false);
  out.dataRepositoryAssociationIds = (depth > 4 ? [] : [""]);
  out.dataRepositoryAssociations = (i.dataRepositoryAssociations !== undefined ? i.dataRepositoryAssociations : (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_FileCacheDataRepositoryAssociation(ctx, depth + 1))]));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.fileCacheId = h.id(ctx, "fileCacheId");
  out.fileCacheType = (i.fileCacheType !== undefined ? i.fileCacheType : "");
  out.fileCacheTypeVersion = (i.fileCacheTypeVersion !== undefined ? i.fileCacheTypeVersion : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lustreConfigurations = (i.lustreConfigurations !== undefined ? i.lustreConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_FileCacheLustreConfiguration(ctx, depth + 1))]));
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.storageCapacity = (i.storageCapacity !== undefined ? i.storageCapacity : 0);
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:fsx/lustreFileSystem:LustreFileSystem
export function LustreFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoImportPolicy = (i.autoImportPolicy !== undefined ? i.autoImportPolicy : "");
  out.automaticBackupRetentionDays = (i.automaticBackupRetentionDays !== undefined ? i.automaticBackupRetentionDays : 0);
  out.backupId = (i.backupId !== undefined ? i.backupId : h.id(ctx, "backupId"));
  out.copyTagsToBackups = (i.copyTagsToBackups !== undefined ? i.copyTagsToBackups : false);
  out.dailyAutomaticBackupStartTime = (i.dailyAutomaticBackupStartTime !== undefined ? i.dailyAutomaticBackupStartTime : "");
  out.dataCompressionType = (i.dataCompressionType !== undefined ? i.dataCompressionType : "");
  out.dataReadCacheConfiguration = (i.dataReadCacheConfiguration !== undefined ? i.dataReadCacheConfiguration : (depth > 4 ? {} : T_fsx.fsx_LustreFileSystemDataReadCacheConfiguration(ctx, depth + 1)));
  out.deploymentType = (i.deploymentType !== undefined ? i.deploymentType : "");
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.driveCacheType = (i.driveCacheType !== undefined ? i.driveCacheType : "");
  out.efaEnabled = (i.efaEnabled !== undefined ? i.efaEnabled : false);
  out.exportPath = (i.exportPath !== undefined ? i.exportPath : "");
  out.fileSystemTypeVersion = (i.fileSystemTypeVersion !== undefined ? i.fileSystemTypeVersion : "");
  out.finalBackupTags = (i.finalBackupTags !== undefined ? i.finalBackupTags : {});
  out.importPath = (i.importPath !== undefined ? i.importPath : "");
  out.importedFileChunkSize = (i.importedFileChunkSize !== undefined ? i.importedFileChunkSize : 443);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.logConfiguration = (i.logConfiguration !== undefined ? i.logConfiguration : (depth > 4 ? {} : T_fsx.fsx_LustreFileSystemLogConfiguration(ctx, depth + 1)));
  out.metadataConfiguration = (i.metadataConfiguration !== undefined ? i.metadataConfiguration : (depth > 4 ? {} : T_fsx.fsx_LustreFileSystemMetadataConfiguration(ctx, depth + 1)));
  out.mountName = "";
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.perUnitStorageThroughput = (i.perUnitStorageThroughput !== undefined ? i.perUnitStorageThroughput : 0);
  out.rootSquashConfiguration = (i.rootSquashConfiguration !== undefined ? i.rootSquashConfiguration : (depth > 4 ? {} : T_fsx.fsx_LustreFileSystemRootSquashConfiguration(ctx, depth + 1)));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.skipFinalBackup = (i.skipFinalBackup !== undefined ? i.skipFinalBackup : false);
  out.storageCapacity = (i.storageCapacity !== undefined ? i.storageCapacity : 0);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughputCapacity = (i.throughputCapacity !== undefined ? i.throughputCapacity : 0);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.weeklyMaintenanceStartTime = (i.weeklyMaintenanceStartTime !== undefined ? i.weeklyMaintenanceStartTime : "");
  return out;
}

// aws:fsx/ontapFileSystem:OntapFileSystem
export function OntapFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.automaticBackupRetentionDays = (i.automaticBackupRetentionDays !== undefined ? i.automaticBackupRetentionDays : 0);
  out.dailyAutomaticBackupStartTime = (i.dailyAutomaticBackupStartTime !== undefined ? i.dailyAutomaticBackupStartTime : "");
  out.deploymentType = (i.deploymentType !== undefined ? i.deploymentType : "");
  out.diskIopsConfiguration = (i.diskIopsConfiguration !== undefined ? i.diskIopsConfiguration : (depth > 4 ? {} : T_fsx.fsx_OntapFileSystemDiskIopsConfiguration(ctx, depth + 1)));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.endpointIpAddressRange = (i.endpointIpAddressRange !== undefined ? i.endpointIpAddressRange : "");
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapFileSystemEndpoint(ctx, depth + 1))]);
  out.fsxAdminPassword = (i.fsxAdminPassword !== undefined ? i.fsxAdminPassword : "");
  out.haPairs = (i.haPairs !== undefined ? i.haPairs : 0);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.preferredSubnetId = (i.preferredSubnetId !== undefined ? i.preferredSubnetId : h.id(ctx, "preferredSubnetId"));
  out.routeTableIds = (i.routeTableIds !== undefined ? i.routeTableIds : (depth > 4 ? [] : [""]));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.storageCapacity = (i.storageCapacity !== undefined ? i.storageCapacity : 0);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughputCapacity = (i.throughputCapacity !== undefined ? i.throughputCapacity : 0);
  out.throughputCapacityPerHaPair = (i.throughputCapacityPerHaPair !== undefined ? i.throughputCapacityPerHaPair : 0);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.weeklyMaintenanceStartTime = (i.weeklyMaintenanceStartTime !== undefined ? i.weeklyMaintenanceStartTime : "");
  return out;
}

// aws:fsx/ontapStorageVirtualMachine:OntapStorageVirtualMachine
export function OntapStorageVirtualMachine(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryConfiguration = (i.activeDirectoryConfiguration !== undefined ? i.activeDirectoryConfiguration : (depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineEndpoint(ctx, depth + 1))]);
  out.fileSystemId = (i.fileSystemId !== undefined ? i.fileSystemId : h.id(ctx, "fileSystemId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rootVolumeSecurityStyle = (i.rootVolumeSecurityStyle !== undefined ? i.rootVolumeSecurityStyle : "");
  out.subtype = "";
  out.svmAdminPassword = (i.svmAdminPassword !== undefined ? i.svmAdminPassword : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uuid = h.id(ctx, "uuid");
  return out;
}

// aws:fsx/ontapVolume:OntapVolume
export function OntapVolume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregateConfiguration = (i.aggregateConfiguration !== undefined ? i.aggregateConfiguration : (depth > 4 ? {} : T_fsx.fsx_OntapVolumeAggregateConfiguration(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.bypassSnaplockEnterpriseRetention = (i.bypassSnaplockEnterpriseRetention !== undefined ? i.bypassSnaplockEnterpriseRetention : false);
  out.copyTagsToBackups = (i.copyTagsToBackups !== undefined ? i.copyTagsToBackups : false);
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.finalBackupTags = (i.finalBackupTags !== undefined ? i.finalBackupTags : {});
  out.flexcacheEndpointType = "";
  out.junctionPath = (i.junctionPath !== undefined ? i.junctionPath : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ontapVolumeType = (i.ontapVolumeType !== undefined ? i.ontapVolumeType : "");
  out.securityStyle = (i.securityStyle !== undefined ? i.securityStyle : "");
  out.sizeInBytes = (i.sizeInBytes !== undefined ? i.sizeInBytes : "");
  out.sizeInMegabytes = (i.sizeInMegabytes !== undefined ? i.sizeInMegabytes : 8);
  out.skipFinalBackup = (i.skipFinalBackup !== undefined ? i.skipFinalBackup : false);
  out.snaplockConfiguration = (i.snaplockConfiguration !== undefined ? i.snaplockConfiguration : (depth > 4 ? {} : T_fsx.fsx_OntapVolumeSnaplockConfiguration(ctx, depth + 1)));
  out.snapshotPolicy = (i.snapshotPolicy !== undefined ? i.snapshotPolicy : "");
  out.storageEfficiencyEnabled = (i.storageEfficiencyEnabled !== undefined ? i.storageEfficiencyEnabled : false);
  out.storageVirtualMachineId = (i.storageVirtualMachineId !== undefined ? i.storageVirtualMachineId : h.id(ctx, "storageVirtualMachineId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tieringPolicy = (i.tieringPolicy !== undefined ? i.tieringPolicy : (depth > 4 ? {} : T_fsx.fsx_OntapVolumeTieringPolicy(ctx, depth + 1)));
  out.uuid = h.id(ctx, "uuid");
  out.volumeStyle = (i.volumeStyle !== undefined ? i.volumeStyle : "");
  out.volumeType = (i.volumeType !== undefined ? i.volumeType : "");
  return out;
}

// aws:fsx/openZfsFileSystem:OpenZfsFileSystem
export function OpenZfsFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.automaticBackupRetentionDays = (i.automaticBackupRetentionDays !== undefined ? i.automaticBackupRetentionDays : 0);
  out.backupId = (i.backupId !== undefined ? i.backupId : h.id(ctx, "backupId"));
  out.copyTagsToBackups = (i.copyTagsToBackups !== undefined ? i.copyTagsToBackups : false);
  out.copyTagsToVolumes = (i.copyTagsToVolumes !== undefined ? i.copyTagsToVolumes : false);
  out.dailyAutomaticBackupStartTime = (i.dailyAutomaticBackupStartTime !== undefined ? i.dailyAutomaticBackupStartTime : "");
  out.deleteOptions = (i.deleteOptions !== undefined ? i.deleteOptions : (depth > 4 ? [] : [""]));
  out.deploymentType = (i.deploymentType !== undefined ? i.deploymentType : "");
  out.diskIopsConfiguration = (i.diskIopsConfiguration !== undefined ? i.diskIopsConfiguration : (depth > 4 ? {} : T_fsx.fsx_OpenZfsFileSystemDiskIopsConfiguration(ctx, depth + 1)));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.endpointIpAddress = "";
  out.endpointIpAddressRange = (i.endpointIpAddressRange !== undefined ? i.endpointIpAddressRange : "");
  out.finalBackupTags = (i.finalBackupTags !== undefined ? i.finalBackupTags : {});
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.preferredSubnetId = (i.preferredSubnetId !== undefined ? i.preferredSubnetId : h.id(ctx, "preferredSubnetId"));
  out.rootVolumeConfiguration = (i.rootVolumeConfiguration !== undefined ? i.rootVolumeConfiguration : (depth > 4 ? {} : T_fsx.fsx_OpenZfsFileSystemRootVolumeConfiguration(ctx, depth + 1)));
  out.rootVolumeId = h.id(ctx, "rootVolumeId");
  out.routeTableIds = (i.routeTableIds !== undefined ? i.routeTableIds : (depth > 4 ? [] : [""]));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.skipFinalBackup = (i.skipFinalBackup !== undefined ? i.skipFinalBackup : false);
  out.storageCapacity = (i.storageCapacity !== undefined ? i.storageCapacity : 0);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughputCapacity = (i.throughputCapacity !== undefined ? i.throughputCapacity : 0);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.weeklyMaintenanceStartTime = (i.weeklyMaintenanceStartTime !== undefined ? i.weeklyMaintenanceStartTime : "");
  return out;
}

// aws:fsx/openZfsSnapshot:OpenZfsSnapshot
export function OpenZfsSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.volumeId = (i.volumeId !== undefined ? i.volumeId : h.id(ctx, "volumeId"));
  return out;
}

// aws:fsx/openZfsVolume:OpenZfsVolume
export function OpenZfsVolume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.copyTagsToSnapshots = (i.copyTagsToSnapshots !== undefined ? i.copyTagsToSnapshots : false);
  out.dataCompressionType = (i.dataCompressionType !== undefined ? i.dataCompressionType : "");
  out.deleteVolumeOptions = (i.deleteVolumeOptions !== undefined ? i.deleteVolumeOptions : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nfsExports = (i.nfsExports !== undefined ? i.nfsExports : (depth > 4 ? {} : T_fsx.fsx_OpenZfsVolumeNfsExports(ctx, depth + 1)));
  out.originSnapshot = (i.originSnapshot !== undefined ? i.originSnapshot : (depth > 4 ? {} : T_fsx.fsx_OpenZfsVolumeOriginSnapshot(ctx, depth + 1)));
  out.parentVolumeId = (i.parentVolumeId !== undefined ? i.parentVolumeId : h.id(ctx, "parentVolumeId"));
  out.readOnly = (i.readOnly !== undefined ? i.readOnly : false);
  out.recordSizeKib = (i.recordSizeKib !== undefined ? i.recordSizeKib : 8);
  out.storageCapacityQuotaGib = (i.storageCapacityQuotaGib !== undefined ? i.storageCapacityQuotaGib : 0);
  out.storageCapacityReservationGib = (i.storageCapacityReservationGib !== undefined ? i.storageCapacityReservationGib : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userAndGroupQuotas = (i.userAndGroupQuotas !== undefined ? i.userAndGroupQuotas : (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OpenZfsVolumeUserAndGroupQuota(ctx, depth + 1))]));
  out.volumeType = (i.volumeType !== undefined ? i.volumeType : "");
  return out;
}

// aws:fsx/windowsFileSystem:WindowsFileSystem
export function WindowsFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDirectoryId = (i.activeDirectoryId !== undefined ? i.activeDirectoryId : h.id(ctx, "activeDirectoryId"));
  out.aliases = (i.aliases !== undefined ? i.aliases : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.auditLogConfiguration = (i.auditLogConfiguration !== undefined ? i.auditLogConfiguration : (depth > 4 ? {} : T_fsx.fsx_WindowsFileSystemAuditLogConfiguration(ctx, depth + 1)));
  out.automaticBackupRetentionDays = (i.automaticBackupRetentionDays !== undefined ? i.automaticBackupRetentionDays : 0);
  out.backupId = (i.backupId !== undefined ? i.backupId : h.id(ctx, "backupId"));
  out.copyTagsToBackups = (i.copyTagsToBackups !== undefined ? i.copyTagsToBackups : false);
  out.dailyAutomaticBackupStartTime = (i.dailyAutomaticBackupStartTime !== undefined ? i.dailyAutomaticBackupStartTime : "");
  out.deploymentType = (i.deploymentType !== undefined ? i.deploymentType : "");
  out.diskIopsConfiguration = (i.diskIopsConfiguration !== undefined ? i.diskIopsConfiguration : (depth > 4 ? {} : T_fsx.fsx_WindowsFileSystemDiskIopsConfiguration(ctx, depth + 1)));
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.finalBackupTags = (i.finalBackupTags !== undefined ? i.finalBackupTags : {});
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.networkInterfaceIds = (depth > 4 ? [] : [""]);
  out.ownerId = ctx.accountId;
  out.preferredFileServerIp = "";
  out.preferredSubnetId = (i.preferredSubnetId !== undefined ? i.preferredSubnetId : h.id(ctx, "preferredSubnetId"));
  out.remoteAdministrationEndpoint = h.endpoint(ctx, "remoteAdministrationEndpoint");
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.selfManagedActiveDirectory = (i.selfManagedActiveDirectory !== undefined ? i.selfManagedActiveDirectory : (depth > 4 ? {} : T_fsx.fsx_WindowsFileSystemSelfManagedActiveDirectory(ctx, depth + 1)));
  out.skipFinalBackup = (i.skipFinalBackup !== undefined ? i.skipFinalBackup : false);
  out.storageCapacity = (i.storageCapacity !== undefined ? i.storageCapacity : 0);
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughputCapacity = (i.throughputCapacity !== undefined ? i.throughputCapacity : 0);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.weeklyMaintenanceStartTime = (i.weeklyMaintenanceStartTime !== undefined ? i.weeklyMaintenanceStartTime : "");
  return out;
}
