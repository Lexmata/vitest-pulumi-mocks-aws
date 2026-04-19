// GENERATED FILE — do not edit.
// Service: storagegateway   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_storagegateway from "../types/storagegateway.js";

// aws:storagegateway/cache:Cache
export function Cache(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskId = (i.diskId !== undefined ? i.diskId : h.id(ctx, "diskId"));
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  return out;
}

// aws:storagegateway/cachesIscsiVolume:CachesIscsiVolume
export function CachesIscsiVolume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.chapEnabled = false;
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  out.kmsEncrypted = (i.kmsEncrypted !== undefined ? i.kmsEncrypted : false);
  out.kmsKey = (i.kmsKey !== undefined ? i.kmsKey : "");
  out.lunNumber = 0;
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.networkInterfacePort = 443;
  out.snapshotId = (i.snapshotId !== undefined ? i.snapshotId : h.id(ctx, "snapshotId"));
  out.sourceVolumeArn = (i.sourceVolumeArn !== undefined ? i.sourceVolumeArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = h.arn(ctx);
  out.targetName = (i.targetName !== undefined ? i.targetName : "");
  out.volumeArn = h.arn(ctx);
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSizeInBytes = (i.volumeSizeInBytes !== undefined ? i.volumeSizeInBytes : 8);
  return out;
}

// aws:storagegateway/fileSystemAssociation:FileSystemAssociation
export function FileSystemAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.auditDestinationArn = (i.auditDestinationArn !== undefined ? i.auditDestinationArn : h.arn(ctx));
  out.cacheAttributes = (i.cacheAttributes !== undefined ? i.cacheAttributes : (depth > 4 ? {} : T_storagegateway.storagegateway_FileSystemAssociationCacheAttributes(ctx, depth + 1)));
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  out.locationArn = (i.locationArn !== undefined ? i.locationArn : h.arn(ctx));
  out.password = (i.password !== undefined ? i.password : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.username = (i.username !== undefined ? i.username : "");
  return out;
}

// aws:storagegateway/gateway:Gateway
export function Gateway(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activationKey = (i.activationKey !== undefined ? i.activationKey : "");
  out.arn = h.arn(ctx);
  out.averageDownloadRateLimitInBitsPerSec = (i.averageDownloadRateLimitInBitsPerSec !== undefined ? i.averageDownloadRateLimitInBitsPerSec : 0);
  out.averageUploadRateLimitInBitsPerSec = (i.averageUploadRateLimitInBitsPerSec !== undefined ? i.averageUploadRateLimitInBitsPerSec : 0);
  out.cloudwatchLogGroupArn = (i.cloudwatchLogGroupArn !== undefined ? i.cloudwatchLogGroupArn : h.arn(ctx));
  out.ec2InstanceId = h.id(ctx, "ec2InstanceId");
  out.endpointType = "";
  out.gatewayId = h.id(ctx, "gatewayId");
  out.gatewayIpAddress = (i.gatewayIpAddress !== undefined ? i.gatewayIpAddress : "");
  out.gatewayName = (i.gatewayName !== undefined ? i.gatewayName : "");
  out.gatewayNetworkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_storagegateway.storagegateway_GatewayGatewayNetworkInterface(ctx, depth + 1))]);
  out.gatewayTimezone = (i.gatewayTimezone !== undefined ? i.gatewayTimezone : "");
  out.gatewayType = (i.gatewayType !== undefined ? i.gatewayType : "");
  out.gatewayVpcEndpoint = (i.gatewayVpcEndpoint !== undefined ? i.gatewayVpcEndpoint : h.endpoint(ctx, "gatewayVpcEndpoint"));
  out.hostEnvironment = "";
  out.maintenanceStartTime = (i.maintenanceStartTime !== undefined ? i.maintenanceStartTime : (depth > 4 ? {} : T_storagegateway.storagegateway_GatewayMaintenanceStartTime(ctx, depth + 1)));
  out.mediumChangerType = (i.mediumChangerType !== undefined ? i.mediumChangerType : "");
  out.smbActiveDirectorySettings = (i.smbActiveDirectorySettings !== undefined ? i.smbActiveDirectorySettings : (depth > 4 ? {} : T_storagegateway.storagegateway_GatewaySmbActiveDirectorySettings(ctx, depth + 1)));
  out.smbFileShareVisibility = (i.smbFileShareVisibility !== undefined ? i.smbFileShareVisibility : false);
  out.smbGuestPassword = (i.smbGuestPassword !== undefined ? i.smbGuestPassword : "");
  out.smbSecurityStrategy = (i.smbSecurityStrategy !== undefined ? i.smbSecurityStrategy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tapeDriveType = (i.tapeDriveType !== undefined ? i.tapeDriveType : "");
  return out;
}

// aws:storagegateway/nfsFileShare:NfsFileShare
export function NfsFileShare(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.auditDestinationArn = (i.auditDestinationArn !== undefined ? i.auditDestinationArn : h.arn(ctx));
  out.bucketRegion = (i.bucketRegion !== undefined ? i.bucketRegion : "");
  out.cacheAttributes = (i.cacheAttributes !== undefined ? i.cacheAttributes : (depth > 4 ? {} : T_storagegateway.storagegateway_NfsFileShareCacheAttributes(ctx, depth + 1)));
  out.clientLists = (i.clientLists !== undefined ? i.clientLists : (depth > 4 ? [] : [""]));
  out.defaultStorageClass = (i.defaultStorageClass !== undefined ? i.defaultStorageClass : "");
  out.fileShareName = (i.fileShareName !== undefined ? i.fileShareName : "");
  out.fileshareId = h.id(ctx, "fileshareId");
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  out.guessMimeTypeEnabled = (i.guessMimeTypeEnabled !== undefined ? i.guessMimeTypeEnabled : false);
  out.kmsEncrypted = (i.kmsEncrypted !== undefined ? i.kmsEncrypted : false);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.locationArn = (i.locationArn !== undefined ? i.locationArn : h.arn(ctx));
  out.nfsFileShareDefaults = (i.nfsFileShareDefaults !== undefined ? i.nfsFileShareDefaults : (depth > 4 ? {} : T_storagegateway.storagegateway_NfsFileShareNfsFileShareDefaults(ctx, depth + 1)));
  out.notificationPolicy = (i.notificationPolicy !== undefined ? i.notificationPolicy : "");
  out.objectAcl = (i.objectAcl !== undefined ? i.objectAcl : "");
  out.path = "";
  out.readOnly = (i.readOnly !== undefined ? i.readOnly : false);
  out.requesterPays = (i.requesterPays !== undefined ? i.requesterPays : false);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.squash = (i.squash !== undefined ? i.squash : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcEndpointDnsName = (i.vpcEndpointDnsName !== undefined ? i.vpcEndpointDnsName : "");
  return out;
}

// aws:storagegateway/smbFileShare:SmbFileShare
export function SmbFileShare(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessBasedEnumeration = (i.accessBasedEnumeration !== undefined ? i.accessBasedEnumeration : false);
  out.adminUserLists = (i.adminUserLists !== undefined ? i.adminUserLists : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.auditDestinationArn = (i.auditDestinationArn !== undefined ? i.auditDestinationArn : h.arn(ctx));
  out.authentication = (i.authentication !== undefined ? i.authentication : "");
  out.bucketRegion = (i.bucketRegion !== undefined ? i.bucketRegion : "");
  out.cacheAttributes = (i.cacheAttributes !== undefined ? i.cacheAttributes : (depth > 4 ? {} : T_storagegateway.storagegateway_SmbFileShareCacheAttributes(ctx, depth + 1)));
  out.caseSensitivity = (i.caseSensitivity !== undefined ? i.caseSensitivity : "");
  out.defaultStorageClass = (i.defaultStorageClass !== undefined ? i.defaultStorageClass : "");
  out.fileShareName = (i.fileShareName !== undefined ? i.fileShareName : "");
  out.fileshareId = h.id(ctx, "fileshareId");
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  out.guessMimeTypeEnabled = (i.guessMimeTypeEnabled !== undefined ? i.guessMimeTypeEnabled : false);
  out.invalidUserLists = (i.invalidUserLists !== undefined ? i.invalidUserLists : (depth > 4 ? [] : [""]));
  out.kmsEncrypted = (i.kmsEncrypted !== undefined ? i.kmsEncrypted : false);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.locationArn = (i.locationArn !== undefined ? i.locationArn : h.arn(ctx));
  out.notificationPolicy = (i.notificationPolicy !== undefined ? i.notificationPolicy : "");
  out.objectAcl = (i.objectAcl !== undefined ? i.objectAcl : "");
  out.oplocksEnabled = (i.oplocksEnabled !== undefined ? i.oplocksEnabled : false);
  out.path = "";
  out.readOnly = (i.readOnly !== undefined ? i.readOnly : false);
  out.requesterPays = (i.requesterPays !== undefined ? i.requesterPays : false);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.smbAclEnabled = (i.smbAclEnabled !== undefined ? i.smbAclEnabled : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.validUserLists = (i.validUserLists !== undefined ? i.validUserLists : (depth > 4 ? [] : [""]));
  out.vpcEndpointDnsName = (i.vpcEndpointDnsName !== undefined ? i.vpcEndpointDnsName : "");
  return out;
}

// aws:storagegateway/storedIscsiVolume:StoredIscsiVolume
export function StoredIscsiVolume(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.chapEnabled = false;
  out.diskId = (i.diskId !== undefined ? i.diskId : h.id(ctx, "diskId"));
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  out.kmsEncrypted = (i.kmsEncrypted !== undefined ? i.kmsEncrypted : false);
  out.kmsKey = (i.kmsKey !== undefined ? i.kmsKey : "");
  out.lunNumber = 0;
  out.networkInterfaceId = (i.networkInterfaceId !== undefined ? i.networkInterfaceId : h.id(ctx, "networkInterfaceId"));
  out.networkInterfacePort = 443;
  out.preserveExistingData = (i.preserveExistingData !== undefined ? i.preserveExistingData : false);
  out.snapshotId = (i.snapshotId !== undefined ? i.snapshotId : h.id(ctx, "snapshotId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = h.arn(ctx);
  out.targetName = (i.targetName !== undefined ? i.targetName : "");
  out.volumeAttachmentStatus = "";
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSizeInBytes = 8;
  out.volumeStatus = "";
  out.volumeType = "";
  return out;
}

// aws:storagegateway/tapePool:TapePool
export function TapePool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.poolName = (i.poolName !== undefined ? i.poolName : "");
  out.retentionLockTimeInDays = (i.retentionLockTimeInDays !== undefined ? i.retentionLockTimeInDays : 0);
  out.retentionLockType = (i.retentionLockType !== undefined ? i.retentionLockType : "");
  out.storageClass = (i.storageClass !== undefined ? i.storageClass : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:storagegateway/uploadBuffer:UploadBuffer
export function UploadBuffer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskId = (i.diskId !== undefined ? i.diskId : h.id(ctx, "diskId"));
  out.diskPath = (i.diskPath !== undefined ? i.diskPath : "");
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  return out;
}

// aws:storagegateway/workingStorage:WorkingStorage
export function WorkingStorage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.diskId = (i.diskId !== undefined ? i.diskId : h.id(ctx, "diskId"));
  out.gatewayArn = (i.gatewayArn !== undefined ? i.gatewayArn : h.arn(ctx));
  return out;
}
