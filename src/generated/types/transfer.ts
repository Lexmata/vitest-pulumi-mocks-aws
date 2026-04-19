// GENERATED FILE — do not edit.
// Service: transfer   (40 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_transfer from "./transfer.js";

// aws:transfer/AccessHomeDirectoryMapping:AccessHomeDirectoryMapping
export function transfer_AccessHomeDirectoryMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entry = "";
  out.target = "";
  return out;
}

// aws:transfer/AccessPosixProfile:AccessPosixProfile
export function transfer_AccessPosixProfile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.secondaryGids = (depth > 4 ? [] : [0]);
  out.uid = 0;
  return out;
}

// aws:transfer/ConnectorAs2Config:ConnectorAs2Config
export function transfer_ConnectorAs2Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.compression = "";
  out.encryptionAlgorithm = "";
  out.localProfileId = h.id(ctx, "localProfileId");
  out.mdnResponse = "";
  out.mdnSigningAlgorithm = "";
  out.messageSubject = "";
  out.partnerProfileId = h.id(ctx, "partnerProfileId");
  out.signingAlgorithm = "";
  return out;
}

// aws:transfer/ConnectorSftpConfig:ConnectorSftpConfig
export function transfer_ConnectorSftpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.trustedHostKeys = (depth > 4 ? [] : [""]);
  out.userSecretId = h.id(ctx, "userSecretId");
  return out;
}

// aws:transfer/ServerEndpointDetails:ServerEndpointDetails
export function transfer_ServerEndpointDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressAllocationIds = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:transfer/ServerProtocolDetails:ServerProtocolDetails
export function transfer_ServerProtocolDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.as2Transports = (depth > 4 ? [] : [""]);
  out.passiveIp = "";
  out.setStatOption = "";
  out.tlsSessionResumptionMode = "";
  return out;
}

// aws:transfer/ServerS3StorageOptions:ServerS3StorageOptions
export function transfer_ServerS3StorageOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryListingOptimization = "";
  return out;
}

// aws:transfer/ServerWorkflowDetails:ServerWorkflowDetails
export function transfer_ServerWorkflowDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onPartialUpload = (depth > 4 ? {} : T_transfer.transfer_ServerWorkflowDetailsOnPartialUpload(ctx, depth + 1));
  out.onUpload = (depth > 4 ? {} : T_transfer.transfer_ServerWorkflowDetailsOnUpload(ctx, depth + 1));
  return out;
}

// aws:transfer/ServerWorkflowDetailsOnPartialUpload:ServerWorkflowDetailsOnPartialUpload
export function transfer_ServerWorkflowDetailsOnPartialUpload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executionRole = "";
  out.workflowId = h.id(ctx, "workflowId");
  return out;
}

// aws:transfer/ServerWorkflowDetailsOnUpload:ServerWorkflowDetailsOnUpload
export function transfer_ServerWorkflowDetailsOnUpload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executionRole = "";
  out.workflowId = h.id(ctx, "workflowId");
  return out;
}

// aws:transfer/UserHomeDirectoryMapping:UserHomeDirectoryMapping
export function transfer_UserHomeDirectoryMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entry = "";
  out.target = "";
  return out;
}

// aws:transfer/UserPosixProfile:UserPosixProfile
export function transfer_UserPosixProfile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gid = 0;
  out.secondaryGids = (depth > 4 ? [] : [0]);
  out.uid = 0;
  return out;
}

// aws:transfer/WorkflowOnExceptionStep:WorkflowOnExceptionStep
export function transfer_WorkflowOnExceptionStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepCopyStepDetails(ctx, depth + 1));
  out.customStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepCustomStepDetails(ctx, depth + 1));
  out.decryptStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepDecryptStepDetails(ctx, depth + 1));
  out.deleteStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepDeleteStepDetails(ctx, depth + 1));
  out.tagStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepTagStepDetails(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepCopyStepDetails:WorkflowOnExceptionStepCopyStepDetails
export function transfer_WorkflowOnExceptionStepCopyStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocation(ctx, depth + 1));
  out.name = ctx.name;
  out.overwriteExisting = "";
  out.sourceFileLocation = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocation:WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocation
export function transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation(ctx, depth + 1));
  out.s3FileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation(ctx, depth + 1));
  return out;
}

// aws:transfer/WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation:WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation
export function transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.path = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation:WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation
export function transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepCustomStepDetails:WorkflowOnExceptionStepCustomStepDetails
export function transfer_WorkflowOnExceptionStepCustomStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.sourceFileLocation = "";
  out.target = "";
  out.timeoutSeconds = 30;
  return out;
}

// aws:transfer/WorkflowOnExceptionStepDecryptStepDetails:WorkflowOnExceptionStepDecryptStepDetails
export function transfer_WorkflowOnExceptionStepDecryptStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation(ctx, depth + 1));
  out.name = ctx.name;
  out.overwriteExisting = "";
  out.sourceFileLocation = "";
  out.type = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation:WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation
export function transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation(ctx, depth + 1));
  out.s3FileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation(ctx, depth + 1));
  return out;
}

// aws:transfer/WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation:WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation
export function transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.path = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation:WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation
export function transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepDeleteStepDetails:WorkflowOnExceptionStepDeleteStepDetails
export function transfer_WorkflowOnExceptionStepDeleteStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.sourceFileLocation = "";
  return out;
}

// aws:transfer/WorkflowOnExceptionStepTagStepDetails:WorkflowOnExceptionStepTagStepDetails
export function transfer_WorkflowOnExceptionStepTagStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.sourceFileLocation = "";
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStepTagStepDetailsTag(ctx, depth + 1))]);
  return out;
}

// aws:transfer/WorkflowOnExceptionStepTagStepDetailsTag:WorkflowOnExceptionStepTagStepDetailsTag
export function transfer_WorkflowOnExceptionStepTagStepDetailsTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:transfer/WorkflowStep:WorkflowStep
export function transfer_WorkflowStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepCopyStepDetails(ctx, depth + 1));
  out.customStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepCustomStepDetails(ctx, depth + 1));
  out.decryptStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepDecryptStepDetails(ctx, depth + 1));
  out.deleteStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepDeleteStepDetails(ctx, depth + 1));
  out.tagStepDetails = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepTagStepDetails(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:transfer/WorkflowStepCopyStepDetails:WorkflowStepCopyStepDetails
export function transfer_WorkflowStepCopyStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepCopyStepDetailsDestinationFileLocation(ctx, depth + 1));
  out.name = ctx.name;
  out.overwriteExisting = "";
  out.sourceFileLocation = "";
  return out;
}

// aws:transfer/WorkflowStepCopyStepDetailsDestinationFileLocation:WorkflowStepCopyStepDetailsDestinationFileLocation
export function transfer_WorkflowStepCopyStepDetailsDestinationFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation(ctx, depth + 1));
  out.s3FileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation(ctx, depth + 1));
  return out;
}

// aws:transfer/WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation:WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation
export function transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.path = "";
  return out;
}

// aws:transfer/WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation:WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation
export function transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:transfer/WorkflowStepCustomStepDetails:WorkflowStepCustomStepDetails
export function transfer_WorkflowStepCustomStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.sourceFileLocation = "";
  out.target = "";
  out.timeoutSeconds = 30;
  return out;
}

// aws:transfer/WorkflowStepDecryptStepDetails:WorkflowStepDecryptStepDetails
export function transfer_WorkflowStepDecryptStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepDecryptStepDetailsDestinationFileLocation(ctx, depth + 1));
  out.name = ctx.name;
  out.overwriteExisting = "";
  out.sourceFileLocation = "";
  out.type = "";
  return out;
}

// aws:transfer/WorkflowStepDecryptStepDetailsDestinationFileLocation:WorkflowStepDecryptStepDetailsDestinationFileLocation
export function transfer_WorkflowStepDecryptStepDetailsDestinationFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.efsFileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation(ctx, depth + 1));
  out.s3FileLocation = (depth > 4 ? {} : T_transfer.transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation(ctx, depth + 1));
  return out;
}

// aws:transfer/WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation:WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation
export function transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.path = "";
  return out;
}

// aws:transfer/WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation:WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation
export function transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:transfer/WorkflowStepDeleteStepDetails:WorkflowStepDeleteStepDetails
export function transfer_WorkflowStepDeleteStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.sourceFileLocation = "";
  return out;
}

// aws:transfer/WorkflowStepTagStepDetails:WorkflowStepTagStepDetails
export function transfer_WorkflowStepTagStepDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.sourceFileLocation = "";
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_WorkflowStepTagStepDetailsTag(ctx, depth + 1))]);
  return out;
}

// aws:transfer/WorkflowStepTagStepDetailsTag:WorkflowStepTagStepDetailsTag
export function transfer_WorkflowStepTagStepDetailsTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:transfer/getConnectorAs2Config:getConnectorAs2Config
export function transfer_getConnectorAs2Config(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuthSecretId = h.id(ctx, "basicAuthSecretId");
  out.compression = "";
  out.encryptionAlgorithm = "";
  out.localProfileId = h.id(ctx, "localProfileId");
  out.mdnResponse = "";
  out.mdnSigningAlgorithm = "";
  out.messageSubject = "";
  out.partnerProfileId = h.id(ctx, "partnerProfileId");
  out.singingAlgorithm = "";
  return out;
}

// aws:transfer/getConnectorSftpConfig:getConnectorSftpConfig
export function transfer_getConnectorSftpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.trustedHostKeys = (depth > 4 ? [] : [""]);
  out.userSecretId = h.id(ctx, "userSecretId");
  return out;
}
