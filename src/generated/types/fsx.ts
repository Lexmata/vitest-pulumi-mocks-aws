// GENERATED FILE — do not edit.
// Service: fsx   (60 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fsx from "./fsx.js";

// aws:fsx/DataRepositoryAssociationS3:DataRepositoryAssociationS3
export function fsx_DataRepositoryAssociationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoExportPolicy = (depth > 4 ? {} : T_fsx.fsx_DataRepositoryAssociationS3AutoExportPolicy(ctx, depth + 1));
  out.autoImportPolicy = (depth > 4 ? {} : T_fsx.fsx_DataRepositoryAssociationS3AutoImportPolicy(ctx, depth + 1));
  return out;
}

// aws:fsx/DataRepositoryAssociationS3AutoExportPolicy:DataRepositoryAssociationS3AutoExportPolicy
export function fsx_DataRepositoryAssociationS3AutoExportPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.events = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/DataRepositoryAssociationS3AutoImportPolicy:DataRepositoryAssociationS3AutoImportPolicy
export function fsx_DataRepositoryAssociationS3AutoImportPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.events = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/FileCacheDataRepositoryAssociation:FileCacheDataRepositoryAssociation
export function fsx_FileCacheDataRepositoryAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationId = h.id(ctx, "associationId");
  out.dataRepositoryPath = "";
  out.dataRepositorySubdirectories = (depth > 4 ? [] : [""]);
  out.fileCacheId = h.id(ctx, "fileCacheId");
  out.fileCachePath = "";
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.fileSystemPath = "";
  out.importedFileChunkSize = 443;
  out.nfs = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_FileCacheDataRepositoryAssociationNf(ctx, depth + 1))]);
  out.resourceArn = h.arn(ctx);
  out.tags = {};
  return out;
}

// aws:fsx/FileCacheDataRepositoryAssociationNf:FileCacheDataRepositoryAssociationNf
export function fsx_FileCacheDataRepositoryAssociationNf(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsIps = (depth > 4 ? [] : [""]);
  out.version = "1";
  return out;
}

// aws:fsx/FileCacheLustreConfiguration:FileCacheLustreConfiguration
export function fsx_FileCacheLustreConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deploymentType = "";
  out.logConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_FileCacheLustreConfigurationLogConfiguration(ctx, depth + 1))]);
  out.metadataConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_FileCacheLustreConfigurationMetadataConfiguration(ctx, depth + 1))]);
  out.mountName = "";
  out.perUnitStorageThroughput = 0;
  out.weeklyMaintenanceStartTime = "";
  return out;
}

// aws:fsx/FileCacheLustreConfigurationLogConfiguration:FileCacheLustreConfigurationLogConfiguration
export function fsx_FileCacheLustreConfigurationLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.level = "";
  return out;
}

// aws:fsx/FileCacheLustreConfigurationMetadataConfiguration:FileCacheLustreConfigurationMetadataConfiguration
export function fsx_FileCacheLustreConfigurationMetadataConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.storageCapacity = 0;
  return out;
}

// aws:fsx/LustreFileSystemDataReadCacheConfiguration:LustreFileSystemDataReadCacheConfiguration
export function fsx_LustreFileSystemDataReadCacheConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  out.sizingMode = "";
  return out;
}

// aws:fsx/LustreFileSystemLogConfiguration:LustreFileSystemLogConfiguration
export function fsx_LustreFileSystemLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.level = "";
  return out;
}

// aws:fsx/LustreFileSystemMetadataConfiguration:LustreFileSystemMetadataConfiguration
export function fsx_LustreFileSystemMetadataConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.mode = "";
  return out;
}

// aws:fsx/LustreFileSystemRootSquashConfiguration:LustreFileSystemRootSquashConfiguration
export function fsx_LustreFileSystemRootSquashConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.noSquashNids = (depth > 4 ? [] : [""]);
  out.rootSquash = "";
  return out;
}

// aws:fsx/OntapFileSystemDiskIopsConfiguration:OntapFileSystemDiskIopsConfiguration
export function fsx_OntapFileSystemDiskIopsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.mode = "";
  return out;
}

// aws:fsx/OntapFileSystemEndpoint:OntapFileSystemEndpoint
export function fsx_OntapFileSystemEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interclusters = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapFileSystemEndpointIntercluster(ctx, depth + 1))]);
  out.managements = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapFileSystemEndpointManagement(ctx, depth + 1))]);
  return out;
}

// aws:fsx/OntapFileSystemEndpointIntercluster:OntapFileSystemEndpointIntercluster
export function fsx_OntapFileSystemEndpointIntercluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OntapFileSystemEndpointManagement:OntapFileSystemEndpointManagement
export function fsx_OntapFileSystemEndpointManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OntapStorageVirtualMachineActiveDirectoryConfiguration:OntapStorageVirtualMachineActiveDirectoryConfiguration
export function fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.netbiosName = "";
  out.selfManagedActiveDirectoryConfiguration = (depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration(ctx, depth + 1));
  return out;
}

// aws:fsx/OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration:OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
export function fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsIps = (depth > 4 ? [] : [""]);
  out.domainName = h.endpoint(ctx, "domainName");
  out.fileSystemAdministratorsGroup = "";
  out.organizationalUnitDistinguishedName = "";
  out.password = "";
  out.username = "";
  return out;
}

// aws:fsx/OntapStorageVirtualMachineEndpoint:OntapStorageVirtualMachineEndpoint
export function fsx_OntapStorageVirtualMachineEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iscsis = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineEndpointIscsi(ctx, depth + 1))]);
  out.managements = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineEndpointManagement(ctx, depth + 1))]);
  out.nfs = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineEndpointNf(ctx, depth + 1))]);
  out.smbs = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OntapStorageVirtualMachineEndpointSmb(ctx, depth + 1))]);
  return out;
}

// aws:fsx/OntapStorageVirtualMachineEndpointIscsi:OntapStorageVirtualMachineEndpointIscsi
export function fsx_OntapStorageVirtualMachineEndpointIscsi(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OntapStorageVirtualMachineEndpointManagement:OntapStorageVirtualMachineEndpointManagement
export function fsx_OntapStorageVirtualMachineEndpointManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OntapStorageVirtualMachineEndpointNf:OntapStorageVirtualMachineEndpointNf
export function fsx_OntapStorageVirtualMachineEndpointNf(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OntapStorageVirtualMachineEndpointSmb:OntapStorageVirtualMachineEndpointSmb
export function fsx_OntapStorageVirtualMachineEndpointSmb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OntapVolumeAggregateConfiguration:OntapVolumeAggregateConfiguration
export function fsx_OntapVolumeAggregateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregates = (depth > 4 ? [] : [""]);
  out.constituentsPerAggregate = 0;
  out.totalConstituents = 0;
  return out;
}

// aws:fsx/OntapVolumeSnaplockConfiguration:OntapVolumeSnaplockConfiguration
export function fsx_OntapVolumeSnaplockConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLogVolume = false;
  out.autocommitPeriod = (depth > 4 ? {} : T_fsx.fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod(ctx, depth + 1));
  out.privilegedDelete = "";
  out.retentionPeriod = (depth > 4 ? {} : T_fsx.fsx_OntapVolumeSnaplockConfigurationRetentionPeriod(ctx, depth + 1));
  out.snaplockType = "";
  out.volumeAppendModeEnabled = false;
  return out;
}

// aws:fsx/OntapVolumeSnaplockConfigurationAutocommitPeriod:OntapVolumeSnaplockConfigurationAutocommitPeriod
export function fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:fsx/OntapVolumeSnaplockConfigurationRetentionPeriod:OntapVolumeSnaplockConfigurationRetentionPeriod
export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultRetention = (depth > 4 ? {} : T_fsx.fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention(ctx, depth + 1));
  out.maximumRetention = (depth > 4 ? {} : T_fsx.fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention(ctx, depth + 1));
  out.minimumRetention = (depth > 4 ? {} : T_fsx.fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention(ctx, depth + 1));
  return out;
}

// aws:fsx/OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention:OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention
export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:fsx/OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention:OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention
export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:fsx/OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention:OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention
export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:fsx/OntapVolumeTieringPolicy:OntapVolumeTieringPolicy
export function fsx_OntapVolumeTieringPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coolingPeriod = 0;
  out.name = ctx.name;
  return out;
}

// aws:fsx/OpenZfsFileSystemDiskIopsConfiguration:OpenZfsFileSystemDiskIopsConfiguration
export function fsx_OpenZfsFileSystemDiskIopsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.mode = "";
  return out;
}

// aws:fsx/OpenZfsFileSystemRootVolumeConfiguration:OpenZfsFileSystemRootVolumeConfiguration
export function fsx_OpenZfsFileSystemRootVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyTagsToSnapshots = false;
  out.dataCompressionType = "";
  out.nfsExports = (depth > 4 ? {} : T_fsx.fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports(ctx, depth + 1));
  out.readOnly = false;
  out.recordSizeKib = 8;
  out.userAndGroupQuotas = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota(ctx, depth + 1))]);
  return out;
}

// aws:fsx/OpenZfsFileSystemRootVolumeConfigurationNfsExports:OpenZfsFileSystemRootVolumeConfigurationNfsExports
export function fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:fsx/OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration:OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration
export function fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clients = "";
  out.options = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota:OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota
export function fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = 0;
  out.storageCapacityQuotaGib = 0;
  out.type = "";
  return out;
}

// aws:fsx/OpenZfsVolumeNfsExports:OpenZfsVolumeNfsExports
export function fsx_OpenZfsVolumeNfsExports(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_OpenZfsVolumeNfsExportsClientConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:fsx/OpenZfsVolumeNfsExportsClientConfiguration:OpenZfsVolumeNfsExportsClientConfiguration
export function fsx_OpenZfsVolumeNfsExportsClientConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clients = "";
  out.options = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/OpenZfsVolumeOriginSnapshot:OpenZfsVolumeOriginSnapshot
export function fsx_OpenZfsVolumeOriginSnapshot(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyStrategy = "";
  out.snapshotArn = h.arn(ctx);
  return out;
}

// aws:fsx/OpenZfsVolumeUserAndGroupQuota:OpenZfsVolumeUserAndGroupQuota
export function fsx_OpenZfsVolumeUserAndGroupQuota(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = 0;
  out.storageCapacityQuotaGib = 0;
  out.type = "";
  return out;
}

// aws:fsx/WindowsFileSystemAuditLogConfiguration:WindowsFileSystemAuditLogConfiguration
export function fsx_WindowsFileSystemAuditLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLogDestination = "";
  out.fileAccessAuditLogLevel = "";
  out.fileShareAccessAuditLogLevel = "";
  return out;
}

// aws:fsx/WindowsFileSystemDiskIopsConfiguration:WindowsFileSystemDiskIopsConfiguration
export function fsx_WindowsFileSystemDiskIopsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.mode = "";
  return out;
}

// aws:fsx/WindowsFileSystemSelfManagedActiveDirectory:WindowsFileSystemSelfManagedActiveDirectory
export function fsx_WindowsFileSystemSelfManagedActiveDirectory(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsIps = (depth > 4 ? [] : [""]);
  out.domainName = h.endpoint(ctx, "domainName");
  out.fileSystemAdministratorsGroup = "";
  out.organizationalUnitDistinguishedName = "";
  out.password = "";
  out.username = "";
  return out;
}

// aws:fsx/getOntapFileSystemDiskIopsConfiguration:getOntapFileSystemDiskIopsConfiguration
export function fsx_getOntapFileSystemDiskIopsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.mode = "";
  return out;
}

// aws:fsx/getOntapFileSystemEndpoint:getOntapFileSystemEndpoint
export function fsx_getOntapFileSystemEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interclusters = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapFileSystemEndpointIntercluster(ctx, depth + 1))]);
  out.managements = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapFileSystemEndpointManagement(ctx, depth + 1))]);
  return out;
}

// aws:fsx/getOntapFileSystemEndpointIntercluster:getOntapFileSystemEndpointIntercluster
export function fsx_getOntapFileSystemEndpointIntercluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapFileSystemEndpointManagement:getOntapFileSystemEndpointManagement
export function fsx_getOntapFileSystemEndpointManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineActiveDirectoryConfiguration:getOntapStorageVirtualMachineActiveDirectoryConfiguration
export function fsx_getOntapStorageVirtualMachineActiveDirectoryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.netbiosName = "";
  out.selfManagedActiveDirectoryConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration:getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
export function fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsIps = (depth > 4 ? [] : [""]);
  out.domainName = h.endpoint(ctx, "domainName");
  out.fileSystemAdministratorsGroup = "";
  out.organizationalUnitDistinguishedName = "";
  out.username = "";
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineEndpoint:getOntapStorageVirtualMachineEndpoint
export function fsx_getOntapStorageVirtualMachineEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iscsis = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineEndpointIscsi(ctx, depth + 1))]);
  out.managements = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineEndpointManagement(ctx, depth + 1))]);
  out.nfs = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineEndpointNf(ctx, depth + 1))]);
  out.smbs = (depth > 4 ? [] : [(depth > 4 ? {} : T_fsx.fsx_getOntapStorageVirtualMachineEndpointSmb(ctx, depth + 1))]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineEndpointIscsi:getOntapStorageVirtualMachineEndpointIscsi
export function fsx_getOntapStorageVirtualMachineEndpointIscsi(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineEndpointManagement:getOntapStorageVirtualMachineEndpointManagement
export function fsx_getOntapStorageVirtualMachineEndpointManagement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineEndpointNf:getOntapStorageVirtualMachineEndpointNf
export function fsx_getOntapStorageVirtualMachineEndpointNf(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineEndpointSmb:getOntapStorageVirtualMachineEndpointSmb
export function fsx_getOntapStorageVirtualMachineEndpointSmb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineFilter:getOntapStorageVirtualMachineFilter
export function fsx_getOntapStorageVirtualMachineFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOntapStorageVirtualMachineLifecycleTransitionReason:getOntapStorageVirtualMachineLifecycleTransitionReason
export function fsx_getOntapStorageVirtualMachineLifecycleTransitionReason(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = "";
  return out;
}

// aws:fsx/getOntapStorageVirtualMachinesFilter:getOntapStorageVirtualMachinesFilter
export function fsx_getOntapStorageVirtualMachinesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getOpenZfsSnapshotFilter:getOpenZfsSnapshotFilter
export function fsx_getOpenZfsSnapshotFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fsx/getWindowsFileSystemAuditLogConfiguration:getWindowsFileSystemAuditLogConfiguration
export function fsx_getWindowsFileSystemAuditLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLogDestination = "";
  out.fileAccessAuditLogLevel = "";
  out.fileShareAccessAuditLogLevel = "";
  return out;
}

// aws:fsx/getWindowsFileSystemDiskIopsConfiguration:getWindowsFileSystemDiskIopsConfiguration
export function fsx_getWindowsFileSystemDiskIopsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.mode = "";
  return out;
}
