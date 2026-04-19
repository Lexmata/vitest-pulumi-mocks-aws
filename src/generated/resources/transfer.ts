// GENERATED FILE — do not edit.
// Service: transfer   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_transfer from "../types/transfer.js";

// aws:transfer/access:Access
export function Access(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalId = (i.externalId !== undefined ? i.externalId : h.id(ctx, "externalId"));
  out.homeDirectory = (i.homeDirectory !== undefined ? i.homeDirectory : "");
  out.homeDirectoryMappings = (i.homeDirectoryMappings !== undefined ? i.homeDirectoryMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_AccessHomeDirectoryMapping(ctx, depth + 1))]));
  out.homeDirectoryType = (i.homeDirectoryType !== undefined ? i.homeDirectoryType : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.posixProfile = (i.posixProfile !== undefined ? i.posixProfile : (depth > 4 ? {} : T_transfer.transfer_AccessPosixProfile(ctx, depth + 1)));
  out.role = (i.role !== undefined ? i.role : "");
  out.serverId = (i.serverId !== undefined ? i.serverId : h.id(ctx, "serverId"));
  return out;
}

// aws:transfer/agreement:Agreement
export function Agreement(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessRole = (i.accessRole !== undefined ? i.accessRole : "");
  out.agreementId = h.id(ctx, "agreementId");
  out.arn = h.arn(ctx);
  out.baseDirectory = (i.baseDirectory !== undefined ? i.baseDirectory : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.localProfileId = (i.localProfileId !== undefined ? i.localProfileId : h.id(ctx, "localProfileId"));
  out.partnerProfileId = (i.partnerProfileId !== undefined ? i.partnerProfileId : h.id(ctx, "partnerProfileId"));
  out.serverId = (i.serverId !== undefined ? i.serverId : h.id(ctx, "serverId"));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:transfer/certificate:Certificate
export function Certificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeDate = "";
  out.arn = h.arn(ctx);
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.certificateChain = (i.certificateChain !== undefined ? i.certificateChain : "");
  out.certificateId = h.id(ctx, "certificateId");
  out.description = (i.description !== undefined ? i.description : "");
  out.inactiveDate = "";
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.usage = (i.usage !== undefined ? i.usage : "");
  return out;
}

// aws:transfer/connector:Connector
export function Connector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessRole = (i.accessRole !== undefined ? i.accessRole : "");
  out.arn = h.arn(ctx);
  out.as2Config = (i.as2Config !== undefined ? i.as2Config : (depth > 4 ? {} : T_transfer.transfer_ConnectorAs2Config(ctx, depth + 1)));
  out.connectorId = h.id(ctx, "connectorId");
  out.loggingRole = (i.loggingRole !== undefined ? i.loggingRole : "");
  out.securityPolicyName = (i.securityPolicyName !== undefined ? i.securityPolicyName : "");
  out.sftpConfig = (i.sftpConfig !== undefined ? i.sftpConfig : (depth > 4 ? {} : T_transfer.transfer_ConnectorSftpConfig(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = (i.url !== undefined ? i.url : h.endpoint(ctx, "url"));
  return out;
}

// aws:transfer/profile:Profile
export function Profile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.as2Id = (i.as2Id !== undefined ? i.as2Id : h.id(ctx, "as2Id"));
  out.certificateIds = (i.certificateIds !== undefined ? i.certificateIds : (depth > 4 ? [] : [""]));
  out.profileId = h.id(ctx, "profileId");
  out.profileType = (i.profileType !== undefined ? i.profileType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:transfer/server:Server
export function Server(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointDetails = (i.endpointDetails !== undefined ? i.endpointDetails : (depth > 4 ? {} : T_transfer.transfer_ServerEndpointDetails(ctx, depth + 1)));
  out.endpointType = (i.endpointType !== undefined ? i.endpointType : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.function = (i.function !== undefined ? i.function : "");
  out.hostKey = (i.hostKey !== undefined ? i.hostKey : "");
  out.hostKeyFingerprint = "";
  out.identityProviderType = (i.identityProviderType !== undefined ? i.identityProviderType : "");
  out.invocationRole = (i.invocationRole !== undefined ? i.invocationRole : "");
  out.loggingRole = (i.loggingRole !== undefined ? i.loggingRole : "");
  out.postAuthenticationLoginBanner = (i.postAuthenticationLoginBanner !== undefined ? i.postAuthenticationLoginBanner : "");
  out.preAuthenticationLoginBanner = (i.preAuthenticationLoginBanner !== undefined ? i.preAuthenticationLoginBanner : "");
  out.protocolDetails = (i.protocolDetails !== undefined ? i.protocolDetails : (depth > 4 ? {} : T_transfer.transfer_ServerProtocolDetails(ctx, depth + 1)));
  out.protocols = (i.protocols !== undefined ? i.protocols : (depth > 4 ? [] : [""]));
  out.s3StorageOptions = (i.s3StorageOptions !== undefined ? i.s3StorageOptions : (depth > 4 ? {} : T_transfer.transfer_ServerS3StorageOptions(ctx, depth + 1)));
  out.securityPolicyName = (i.securityPolicyName !== undefined ? i.securityPolicyName : "");
  out.sftpAuthenticationMethods = (i.sftpAuthenticationMethods !== undefined ? i.sftpAuthenticationMethods : "");
  out.structuredLogDestinations = (i.structuredLogDestinations !== undefined ? i.structuredLogDestinations : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = (i.url !== undefined ? i.url : h.endpoint(ctx, "url"));
  out.workflowDetails = (i.workflowDetails !== undefined ? i.workflowDetails : (depth > 4 ? {} : T_transfer.transfer_ServerWorkflowDetails(ctx, depth + 1)));
  return out;
}

// aws:transfer/sshKey:SshKey
export function SshKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.body = (i.body !== undefined ? i.body : "");
  out.serverId = (i.serverId !== undefined ? i.serverId : h.id(ctx, "serverId"));
  out.sshKeyId = h.id(ctx, "sshKeyId");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:transfer/tag:Tag
export function Tag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = (i.key !== undefined ? i.key : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:transfer/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.homeDirectory = (i.homeDirectory !== undefined ? i.homeDirectory : "");
  out.homeDirectoryMappings = (i.homeDirectoryMappings !== undefined ? i.homeDirectoryMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_UserHomeDirectoryMapping(ctx, depth + 1))]));
  out.homeDirectoryType = (i.homeDirectoryType !== undefined ? i.homeDirectoryType : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.posixProfile = (i.posixProfile !== undefined ? i.posixProfile : (depth > 4 ? {} : T_transfer.transfer_UserPosixProfile(ctx, depth + 1)));
  out.role = (i.role !== undefined ? i.role : "");
  out.serverId = (i.serverId !== undefined ? i.serverId : h.id(ctx, "serverId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:transfer/workflow:Workflow
export function Workflow(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.onExceptionSteps = (i.onExceptionSteps !== undefined ? i.onExceptionSteps : (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_WorkflowOnExceptionStep(ctx, depth + 1))]));
  out.steps = (i.steps !== undefined ? i.steps : (depth > 4 ? [] : [(depth > 4 ? {} : T_transfer.transfer_WorkflowStep(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
