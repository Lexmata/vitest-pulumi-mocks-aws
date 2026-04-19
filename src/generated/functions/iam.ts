// GENERATED FILE — do not edit.
// Service: iam   (17 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_iam from "../types/iam.js";

// aws:iam/getAccessKeys:getAccessKeys
export function getAccessKeys(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getAccessKeysAccessKey(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:iam/getAccountAlias:getAccountAlias
export function getAccountAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountAlias = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:iam/getGroup:getGroup
export function getGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.groupId = h.id(ctx, "groupId");
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.id = h.id(ctx, "id");
  out.path = "";
  out.users = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getGroupUser(ctx, depth + 1))]);
  return out;
}

// aws:iam/getInstanceProfile:getInstanceProfile
export function getInstanceProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createDate = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.path = "";
  out.roleArn = h.arn(ctx);
  out.roleId = h.id(ctx, "roleId");
  out.roleName = "";
  return out;
}

// aws:iam/getInstanceProfiles:getInstanceProfiles
export function getInstanceProfiles(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  out.paths = (depth > 4 ? [] : [""]);
  out.roleName = (i.roleName !== undefined ? i.roleName : "");
  return out;
}

// aws:iam/getOpenIdConnectProvider:getOpenIdConnectProvider
export function getOpenIdConnectProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.clientIdLists = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.thumbprintLists = (depth > 4 ? [] : [""]);
  out.url = (i.url !== undefined ? i.url : h.endpoint(ctx, "url"));
  return out;
}

// aws:iam/getPolicy:getPolicy
export function getPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.attachmentCount = 1;
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.path = "";
  out.pathPrefix = (i.pathPrefix !== undefined ? i.pathPrefix : "");
  out.policy = "";
  out.policyId = h.id(ctx, "policyId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:iam/getPolicyDocument:getPolicyDocument
export function getPolicyDocument(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.json = "";
  out.minifiedJson = "";
  out.overrideJson = (i.overrideJson !== undefined ? i.overrideJson : "");
  out.overridePolicyDocuments = (i.overridePolicyDocuments !== undefined ? i.overridePolicyDocuments : (depth > 4 ? [] : [""]));
  out.policyId = (i.policyId !== undefined ? i.policyId : h.id(ctx, "policyId"));
  out.sourceJson = (i.sourceJson !== undefined ? i.sourceJson : "");
  out.sourcePolicyDocuments = (i.sourcePolicyDocuments !== undefined ? i.sourcePolicyDocuments : (depth > 4 ? [] : [""]));
  out.statements = (i.statements !== undefined ? i.statements : (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPolicyDocumentStatement(ctx, depth + 1))]));
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:iam/getPrincipalPolicySimulation:getPrincipalPolicySimulation
export function getPrincipalPolicySimulation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionNames = (i.actionNames !== undefined ? i.actionNames : (depth > 4 ? [] : [""]));
  out.additionalPoliciesJsons = (i.additionalPoliciesJsons !== undefined ? i.additionalPoliciesJsons : (depth > 4 ? [] : [""]));
  out.allAllowed = false;
  out.callerArn = (i.callerArn !== undefined ? i.callerArn : h.arn(ctx));
  out.contexts = (i.contexts !== undefined ? i.contexts : (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPrincipalPolicySimulationContext(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.permissionsBoundaryPoliciesJsons = (i.permissionsBoundaryPoliciesJsons !== undefined ? i.permissionsBoundaryPoliciesJsons : (depth > 4 ? [] : [""]));
  out.policySourceArn = (i.policySourceArn !== undefined ? i.policySourceArn : h.arn(ctx));
  out.resourceArns = (i.resourceArns !== undefined ? i.resourceArns : (depth > 4 ? [] : [""]));
  out.resourceHandlingOption = (i.resourceHandlingOption !== undefined ? i.resourceHandlingOption : "");
  out.resourceOwnerAccountId = (i.resourceOwnerAccountId !== undefined ? i.resourceOwnerAccountId : h.id(ctx, "resourceOwnerAccountId"));
  out.resourcePolicyJson = (i.resourcePolicyJson !== undefined ? i.resourcePolicyJson : "");
  out.results = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getPrincipalPolicySimulationResult(ctx, depth + 1))]);
  return out;
}

// aws:iam/getRole:getRole
export function getRole(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assumeRolePolicy = "";
  out.createDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.maxSessionDuration = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.path = "";
  out.permissionsBoundary = "";
  out.roleLastUseds = (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_getRoleRoleLastUsed(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.uniqueId = h.id(ctx, "uniqueId");
  return out;
}

// aws:iam/getRoles:getRoles
export function getRoles(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.names = (depth > 4 ? [] : [""]);
  out.pathPrefix = (i.pathPrefix !== undefined ? i.pathPrefix : "");
  return out;
}

// aws:iam/getSamlProvider:getSamlProvider
export function getSamlProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.createDate = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.samlMetadataDocument = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.validUntil = "";
  return out;
}

// aws:iam/getServerCertificate:getServerCertificate
export function getServerCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateBody = "";
  out.certificateChain = "";
  out.expirationDate = "";
  out.id = h.id(ctx, "id");
  out.latest = (i.latest !== undefined ? i.latest : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.path = "";
  out.pathPrefix = (i.pathPrefix !== undefined ? i.pathPrefix : "");
  out.uploadDate = "";
  return out;
}

// aws:iam/getSessionContext:getSessionContext
export function getSessionContext(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.issuerArn = h.arn(ctx);
  out.issuerId = h.id(ctx, "issuerId");
  out.issuerName = "";
  out.sessionName = "";
  return out;
}

// aws:iam/getUser:getUser
export function getUser(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.path = "";
  out.permissionsBoundary = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.userId = h.id(ctx, "userId");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:iam/getUserSshKey:getUserSshKey
export function getUserSshKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encoding = (i.encoding !== undefined ? i.encoding : "");
  out.fingerprint = "";
  out.id = h.id(ctx, "id");
  out.publicKey = "";
  out.sshPublicKeyId = (i.sshPublicKeyId !== undefined ? i.sshPublicKeyId : h.id(ctx, "sshPublicKeyId"));
  out.status = "active";
  out.username = (i.username !== undefined ? i.username : "");
  return out;
}

// aws:iam/getUsers:getUsers
export function getUsers(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.names = (depth > 4 ? [] : [""]);
  out.pathPrefix = (i.pathPrefix !== undefined ? i.pathPrefix : "");
  return out;
}
