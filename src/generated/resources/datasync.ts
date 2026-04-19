// GENERATED FILE — do not edit.
// Service: datasync   (13 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datasync from "../types/datasync.js";

// aws:datasync/agent:Agent
export function Agent(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activationKey = (i.activationKey !== undefined ? i.activationKey : "");
  out.arn = h.arn(ctx);
  out.ipAddress = (i.ipAddress !== undefined ? i.ipAddress : "10.0.0.10");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.privateLinkEndpoint = (i.privateLinkEndpoint !== undefined ? i.privateLinkEndpoint : h.endpoint(ctx, "privateLinkEndpoint"));
  out.securityGroupArns = (i.securityGroupArns !== undefined ? i.securityGroupArns : (depth > 4 ? [] : [""]));
  out.subnetArns = (i.subnetArns !== undefined ? i.subnetArns : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}

// aws:datasync/efsLocation:EfsLocation
export function EfsLocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointArn = (i.accessPointArn !== undefined ? i.accessPointArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.ec2Config = (i.ec2Config !== undefined ? i.ec2Config : (depth > 4 ? {} : T_datasync.datasync_EfsLocationEc2Config(ctx, depth + 1)));
  out.efsFileSystemArn = (i.efsFileSystemArn !== undefined ? i.efsFileSystemArn : undefined);
  out.fileSystemAccessRoleArn = (i.fileSystemAccessRoleArn !== undefined ? i.fileSystemAccessRoleArn : h.arn(ctx));
  out.inTransitEncryption = (i.inTransitEncryption !== undefined ? i.inTransitEncryption : "");
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/fsxOpenZfsFileSystem:FsxOpenZfsFileSystem
export function FsxOpenZfsFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.fsxFilesystemArn = (i.fsxFilesystemArn !== undefined ? i.fsxFilesystemArn : h.arn(ctx));
  out.protocol = (i.protocol !== undefined ? i.protocol : (depth > 4 ? {} : T_datasync.datasync_FsxOpenZfsFileSystemProtocol(ctx, depth + 1)));
  out.securityGroupArns = (i.securityGroupArns !== undefined ? i.securityGroupArns : (depth > 4 ? [] : [""]));
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/locationAzureBlob:LocationAzureBlob
export function LocationAzureBlob(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessTier = (i.accessTier !== undefined ? i.accessTier : "");
  out.agentArns = (i.agentArns !== undefined ? i.agentArns : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.authenticationType = (i.authenticationType !== undefined ? i.authenticationType : "");
  out.blobType = (i.blobType !== undefined ? i.blobType : "");
  out.containerUrl = (i.containerUrl !== undefined ? i.containerUrl : h.endpoint(ctx, "containerUrl"));
  out.sasConfiguration = (i.sasConfiguration !== undefined ? i.sasConfiguration : (depth > 4 ? {} : T_datasync.datasync_LocationAzureBlobSasConfiguration(ctx, depth + 1)));
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/locationFsxLustre:LocationFsxLustre
export function LocationFsxLustre(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.fsxFilesystemArn = (i.fsxFilesystemArn !== undefined ? i.fsxFilesystemArn : h.arn(ctx));
  out.securityGroupArns = (i.securityGroupArns !== undefined ? i.securityGroupArns : (depth > 4 ? [] : [""]));
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/locationFsxOntapFileSystem:LocationFsxOntapFileSystem
export function LocationFsxOntapFileSystem(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.fsxFilesystemArn = h.arn(ctx);
  out.protocol = (i.protocol !== undefined ? i.protocol : (depth > 4 ? {} : T_datasync.datasync_LocationFsxOntapFileSystemProtocol(ctx, depth + 1)));
  out.securityGroupArns = (i.securityGroupArns !== undefined ? i.securityGroupArns : (depth > 4 ? [] : [""]));
  out.storageVirtualMachineArn = (i.storageVirtualMachineArn !== undefined ? i.storageVirtualMachineArn : h.arn(ctx));
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/locationFsxWindows:LocationFsxWindows
export function LocationFsxWindows(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.fsxFilesystemArn = (i.fsxFilesystemArn !== undefined ? i.fsxFilesystemArn : h.arn(ctx));
  out.password = (i.password !== undefined ? i.password : "");
  out.securityGroupArns = (i.securityGroupArns !== undefined ? i.securityGroupArns : (depth > 4 ? [] : [""]));
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:datasync/locationHdfs:LocationHdfs
export function LocationHdfs(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentArns = (i.agentArns !== undefined ? i.agentArns : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.authenticationType = (i.authenticationType !== undefined ? i.authenticationType : "");
  out.blockSize = (i.blockSize !== undefined ? i.blockSize : 8);
  out.kerberosKeytab = (i.kerberosKeytab !== undefined ? i.kerberosKeytab : "");
  out.kerberosKeytabBase64 = (i.kerberosKeytabBase64 !== undefined ? i.kerberosKeytabBase64 : "");
  out.kerberosKrb5Conf = (i.kerberosKrb5Conf !== undefined ? i.kerberosKrb5Conf : "");
  out.kerberosKrb5ConfBase64 = (i.kerberosKrb5ConfBase64 !== undefined ? i.kerberosKrb5ConfBase64 : "");
  out.kerberosPrincipal = (i.kerberosPrincipal !== undefined ? i.kerberosPrincipal : "");
  out.kmsKeyProviderUri = (i.kmsKeyProviderUri !== undefined ? i.kmsKeyProviderUri : h.endpoint(ctx, "kmsKeyProviderUri"));
  out.nameNodes = (i.nameNodes !== undefined ? i.nameNodes : (depth > 4 ? [] : [(depth > 4 ? {} : T_datasync.datasync_LocationHdfsNameNode(ctx, depth + 1))]));
  out.qopConfiguration = (i.qopConfiguration !== undefined ? i.qopConfiguration : (depth > 4 ? {} : T_datasync.datasync_LocationHdfsQopConfiguration(ctx, depth + 1)));
  out.replicationFactor = (i.replicationFactor !== undefined ? i.replicationFactor : 0);
  out.simpleUser = (i.simpleUser !== undefined ? i.simpleUser : "");
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/locationObjectStorage:LocationObjectStorage
export function LocationObjectStorage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKey = (i.accessKey !== undefined ? i.accessKey : "");
  out.agentArns = (i.agentArns !== undefined ? i.agentArns : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.bucketName = (i.bucketName !== undefined ? i.bucketName : ctx.name);
  out.secretKey = (i.secretKey !== undefined ? i.secretKey : "");
  out.serverCertificate = (i.serverCertificate !== undefined ? i.serverCertificate : "");
  out.serverHostname = (i.serverHostname !== undefined ? i.serverHostname : "");
  out.serverPort = (i.serverPort !== undefined ? i.serverPort : 443);
  out.serverProtocol = (i.serverProtocol !== undefined ? i.serverProtocol : "");
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/locationSmb:LocationSmb
export function LocationSmb(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentArns = (i.agentArns !== undefined ? i.agentArns : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.mountOptions = (i.mountOptions !== undefined ? i.mountOptions : (depth > 4 ? {} : T_datasync.datasync_LocationSmbMountOptions(ctx, depth + 1)));
  out.password = (i.password !== undefined ? i.password : "");
  out.serverHostname = (i.serverHostname !== undefined ? i.serverHostname : "");
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:datasync/nfsLocation:NfsLocation
export function NfsLocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.mountOptions = (i.mountOptions !== undefined ? i.mountOptions : (depth > 4 ? {} : T_datasync.datasync_NfsLocationMountOptions(ctx, depth + 1)));
  out.onPremConfig = (i.onPremConfig !== undefined ? i.onPremConfig : (depth > 4 ? {} : T_datasync.datasync_NfsLocationOnPremConfig(ctx, depth + 1)));
  out.serverHostname = (i.serverHostname !== undefined ? i.serverHostname : "");
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/s3Location:S3Location
export function S3Location(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentArns = (i.agentArns !== undefined ? i.agentArns : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.s3BucketArn = (i.s3BucketArn !== undefined ? i.s3BucketArn : undefined);
  out.s3Config = (i.s3Config !== undefined ? i.s3Config : (depth > 4 ? {} : T_datasync.datasync_S3LocationS3Config(ctx, depth + 1)));
  out.s3StorageClass = (i.s3StorageClass !== undefined ? i.s3StorageClass : "");
  out.subdirectory = (i.subdirectory !== undefined ? i.subdirectory : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:datasync/task:Task
export function Task(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cloudwatchLogGroupArn = (i.cloudwatchLogGroupArn !== undefined ? i.cloudwatchLogGroupArn : undefined);
  out.destinationLocationArn = (i.destinationLocationArn !== undefined ? i.destinationLocationArn : undefined);
  out.excludes = (i.excludes !== undefined ? i.excludes : (depth > 4 ? {} : T_datasync.datasync_TaskExcludes(ctx, depth + 1)));
  out.includes = (i.includes !== undefined ? i.includes : (depth > 4 ? {} : T_datasync.datasync_TaskIncludes(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.options = (i.options !== undefined ? i.options : (depth > 4 ? {} : T_datasync.datasync_TaskOptions(ctx, depth + 1)));
  out.schedule = (i.schedule !== undefined ? i.schedule : (depth > 4 ? {} : T_datasync.datasync_TaskSchedule(ctx, depth + 1)));
  out.sourceLocationArn = (i.sourceLocationArn !== undefined ? i.sourceLocationArn : undefined);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.taskMode = (i.taskMode !== undefined ? i.taskMode : "");
  out.taskReportConfig = (i.taskReportConfig !== undefined ? i.taskReportConfig : (depth > 4 ? {} : T_datasync.datasync_TaskTaskReportConfig(ctx, depth + 1)));
  return out;
}
