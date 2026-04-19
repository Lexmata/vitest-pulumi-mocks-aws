// GENERATED FILE — do not edit.
// Service: iam   (34 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_iam from "../types/iam.js";

// aws:iam/accessKey:AccessKey
export function AccessKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createDate = "";
  out.encryptedSecret = "";
  out.encryptedSesSmtpPasswordV4 = "";
  out.keyFingerprint = "";
  out.pgpKey = (i.pgpKey !== undefined ? i.pgpKey : "");
  out.secret = "";
  out.sesSmtpPasswordV4 = "";
  out.status = (i.status !== undefined ? i.status : "active");
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:iam/accountAlias:AccountAlias
export function AccountAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountAlias = (i.accountAlias !== undefined ? i.accountAlias : "");
  return out;
}

// aws:iam/accountPasswordPolicy:AccountPasswordPolicy
export function AccountPasswordPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowUsersToChangePassword = (i.allowUsersToChangePassword !== undefined ? i.allowUsersToChangePassword : true);
  out.expirePasswords = false;
  out.hardExpiry = (i.hardExpiry !== undefined ? i.hardExpiry : false);
  out.maxPasswordAge = (i.maxPasswordAge !== undefined ? i.maxPasswordAge : 0);
  out.minimumPasswordLength = (i.minimumPasswordLength !== undefined ? i.minimumPasswordLength : 0);
  out.passwordReusePrevention = (i.passwordReusePrevention !== undefined ? i.passwordReusePrevention : 0);
  out.requireLowercaseCharacters = (i.requireLowercaseCharacters !== undefined ? i.requireLowercaseCharacters : false);
  out.requireNumbers = (i.requireNumbers !== undefined ? i.requireNumbers : false);
  out.requireSymbols = (i.requireSymbols !== undefined ? i.requireSymbols : false);
  out.requireUppercaseCharacters = (i.requireUppercaseCharacters !== undefined ? i.requireUppercaseCharacters : false);
  return out;
}

// aws:iam/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.path = (i.path !== undefined ? i.path : "");
  out.uniqueId = h.id(ctx, "uniqueId");
  return out;
}

// aws:iam/groupMembership:GroupMembership
export function GroupMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.group = (i.group !== undefined ? i.group : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.users = (i.users !== undefined ? i.users : (depth > 4 ? [] : [""]));
  return out;
}

// aws:iam/groupPoliciesExclusive:GroupPoliciesExclusive
export function GroupPoliciesExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.policyNames = (i.policyNames !== undefined ? i.policyNames : (depth > 4 ? [] : [""]));
  return out;
}

// aws:iam/groupPolicy:GroupPolicy
export function GroupPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.group = (i.group !== undefined ? i.group : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:iam/groupPolicyAttachment:GroupPolicyAttachment
export function GroupPolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.group = (i.group !== undefined ? i.group : "");
  out.policyArn = (i.policyArn !== undefined ? i.policyArn : undefined);
  return out;
}

// aws:iam/groupPolicyAttachmentsExclusive:GroupPolicyAttachmentsExclusive
export function GroupPolicyAttachmentsExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.policyArns = (i.policyArns !== undefined ? i.policyArns : (depth > 4 ? [] : [""]));
  return out;
}

// aws:iam/instanceProfile:InstanceProfile
export function InstanceProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.path = (i.path !== undefined ? i.path : "");
  out.role = (i.role !== undefined ? i.role : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uniqueId = h.id(ctx, "uniqueId");
  return out;
}

// aws:iam/openIdConnectProvider:OpenIdConnectProvider
export function OpenIdConnectProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clientIdLists = (i.clientIdLists !== undefined ? i.clientIdLists : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.thumbprintLists = (i.thumbprintLists !== undefined ? i.thumbprintLists : (depth > 4 ? [] : [""]));
  out.url = (i.url !== undefined ? i.url : h.endpoint(ctx, "url"));
  return out;
}

// aws:iam/organizationsFeatures:OrganizationsFeatures
export function OrganizationsFeatures(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabledFeatures = (i.enabledFeatures !== undefined ? i.enabledFeatures : (depth > 4 ? [] : [""]));
  return out;
}

// aws:iam/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attachmentCount = 1;
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.path = (i.path !== undefined ? i.path : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.policyId = h.id(ctx, "policyId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:iam/policyAttachment:PolicyAttachment
export function PolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (i.groups !== undefined ? i.groups : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policyArn = (i.policyArn !== undefined ? i.policyArn : undefined);
  out.roles = (i.roles !== undefined ? i.roles : (depth > 4 ? [] : [""]));
  out.users = (i.users !== undefined ? i.users : (depth > 4 ? [] : [""]));
  return out;
}

// aws:iam/role:Role
export function Role(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assumeRolePolicy = (i.assumeRolePolicy !== undefined ? i.assumeRolePolicy : "");
  out.createDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.forceDetachPolicies = (i.forceDetachPolicies !== undefined ? i.forceDetachPolicies : false);
  out.inlinePolicies = (i.inlinePolicies !== undefined ? i.inlinePolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_iam.iam_RoleInlinePolicy(ctx, depth + 1))]));
  out.managedPolicyArns = (i.managedPolicyArns !== undefined ? i.managedPolicyArns : (depth > 4 ? [] : [""]));
  out.maxSessionDuration = (i.maxSessionDuration !== undefined ? i.maxSessionDuration : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.path = (i.path !== undefined ? i.path : "");
  out.permissionsBoundary = (i.permissionsBoundary !== undefined ? i.permissionsBoundary : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uniqueId = h.id(ctx, "uniqueId");
  return out;
}

// aws:iam/rolePoliciesExclusive:RolePoliciesExclusive
export function RolePoliciesExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyNames = (i.policyNames !== undefined ? i.policyNames : (depth > 4 ? [] : [""]));
  out.roleName = (i.roleName !== undefined ? i.roleName : "");
  return out;
}

// aws:iam/rolePolicy:RolePolicy
export function RolePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.role = (i.role !== undefined ? i.role : "");
  return out;
}

// aws:iam/rolePolicyAttachment:RolePolicyAttachment
export function RolePolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyArn = (i.policyArn !== undefined ? i.policyArn : undefined);
  out.role = (i.role !== undefined ? i.role : "");
  return out;
}

// aws:iam/rolePolicyAttachmentsExclusive:RolePolicyAttachmentsExclusive
export function RolePolicyAttachmentsExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyArns = (i.policyArns !== undefined ? i.policyArns : (depth > 4 ? [] : [""]));
  out.roleName = (i.roleName !== undefined ? i.roleName : "");
  return out;
}

// aws:iam/samlProvider:SamlProvider
export function SamlProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.samlMetadataDocument = (i.samlMetadataDocument !== undefined ? i.samlMetadataDocument : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.validUntil = "";
  return out;
}

// aws:iam/securityTokenServicePreferences:SecurityTokenServicePreferences
export function SecurityTokenServicePreferences(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.globalEndpointTokenVersion = (i.globalEndpointTokenVersion !== undefined ? i.globalEndpointTokenVersion : "");
  return out;
}

// aws:iam/serverCertificate:ServerCertificate
export function ServerCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateBody = (i.certificateBody !== undefined ? i.certificateBody : "");
  out.certificateChain = (i.certificateChain !== undefined ? i.certificateChain : "");
  out.expiration = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.path = (i.path !== undefined ? i.path : "");
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uploadDate = "";
  return out;
}

// aws:iam/serviceLinkedRole:ServiceLinkedRole
export function ServiceLinkedRole(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsServiceName = (i.awsServiceName !== undefined ? i.awsServiceName : "");
  out.createDate = "";
  out.customSuffix = (i.customSuffix !== undefined ? i.customSuffix : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = ctx.name;
  out.path = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uniqueId = h.id(ctx, "uniqueId");
  return out;
}

// aws:iam/serviceSpecificCredential:ServiceSpecificCredential
export function ServiceSpecificCredential(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.servicePassword = "";
  out.serviceSpecificCredentialId = h.id(ctx, "serviceSpecificCredentialId");
  out.serviceUserName = "";
  out.status = (i.status !== undefined ? i.status : "active");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:iam/signingCertificate:SigningCertificate
export function SigningCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateBody = (i.certificateBody !== undefined ? i.certificateBody : "");
  out.certificateId = h.id(ctx, "certificateId");
  out.status = (i.status !== undefined ? i.status : "active");
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:iam/sshKey:SshKey
export function SshKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encoding = (i.encoding !== undefined ? i.encoding : "");
  out.fingerprint = "";
  out.publicKey = (i.publicKey !== undefined ? i.publicKey : "");
  out.sshPublicKeyId = h.id(ctx, "sshPublicKeyId");
  out.status = (i.status !== undefined ? i.status : "active");
  out.username = (i.username !== undefined ? i.username : "");
  return out;
}

// aws:iam/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.path = (i.path !== undefined ? i.path : "");
  out.permissionsBoundary = (i.permissionsBoundary !== undefined ? i.permissionsBoundary : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.uniqueId = h.id(ctx, "uniqueId");
  return out;
}

// aws:iam/userGroupMembership:UserGroupMembership
export function UserGroupMembership(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (i.groups !== undefined ? i.groups : (depth > 4 ? [] : [""]));
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:iam/userLoginProfile:UserLoginProfile
export function UserLoginProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptedPassword = "";
  out.keyFingerprint = "";
  out.password = "";
  out.passwordLength = (i.passwordLength !== undefined ? i.passwordLength : 0);
  out.passwordResetRequired = (i.passwordResetRequired !== undefined ? i.passwordResetRequired : false);
  out.pgpKey = (i.pgpKey !== undefined ? i.pgpKey : "");
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:iam/userPoliciesExclusive:UserPoliciesExclusive
export function UserPoliciesExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyNames = (i.policyNames !== undefined ? i.policyNames : (depth > 4 ? [] : [""]));
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:iam/userPolicy:UserPolicy
export function UserPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:iam/userPolicyAttachment:UserPolicyAttachment
export function UserPolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyArn = (i.policyArn !== undefined ? i.policyArn : undefined);
  out.user = (i.user !== undefined ? i.user : "");
  return out;
}

// aws:iam/userPolicyAttachmentsExclusive:UserPolicyAttachmentsExclusive
export function UserPolicyAttachmentsExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyArns = (i.policyArns !== undefined ? i.policyArns : (depth > 4 ? [] : [""]));
  out.userName = (i.userName !== undefined ? i.userName : "");
  return out;
}

// aws:iam/virtualMfaDevice:VirtualMfaDevice
export function VirtualMfaDevice(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.base32StringSeed = "";
  out.enableDate = "";
  out.path = (i.path !== undefined ? i.path : "");
  out.qrCodePng = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userName = "";
  out.virtualMfaDeviceName = (i.virtualMfaDeviceName !== undefined ? i.virtualMfaDeviceName : "");
  return out;
}
