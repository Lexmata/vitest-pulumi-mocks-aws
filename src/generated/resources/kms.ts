// GENERATED FILE — do not edit.
// Service: kms   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kms from "../types/kms.js";

// aws:kms/alias:Alias
export function Alias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.targetKeyArn = h.arn(ctx);
  out.targetKeyId = (i.targetKeyId !== undefined ? i.targetKeyId : h.id(ctx, "targetKeyId"));
  return out;
}

// aws:kms/ciphertext:Ciphertext
export function Ciphertext(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ciphertextBlob = "";
  out.context = (i.context !== undefined ? i.context : {});
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.plaintext = (i.plaintext !== undefined ? i.plaintext : "");
  return out;
}

// aws:kms/customKeyStore:CustomKeyStore
export function CustomKeyStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudHsmClusterId = (i.cloudHsmClusterId !== undefined ? i.cloudHsmClusterId : h.id(ctx, "cloudHsmClusterId"));
  out.customKeyStoreName = (i.customKeyStoreName !== undefined ? i.customKeyStoreName : "");
  out.customKeyStoreType = (i.customKeyStoreType !== undefined ? i.customKeyStoreType : "");
  out.keyStorePassword = (i.keyStorePassword !== undefined ? i.keyStorePassword : "");
  out.trustAnchorCertificate = (i.trustAnchorCertificate !== undefined ? i.trustAnchorCertificate : "");
  out.xksProxyAuthenticationCredential = (i.xksProxyAuthenticationCredential !== undefined ? i.xksProxyAuthenticationCredential : (depth > 4 ? {} : T_kms.kms_CustomKeyStoreXksProxyAuthenticationCredential(ctx, depth + 1)));
  out.xksProxyConnectivity = (i.xksProxyConnectivity !== undefined ? i.xksProxyConnectivity : "");
  out.xksProxyUriEndpoint = (i.xksProxyUriEndpoint !== undefined ? i.xksProxyUriEndpoint : h.endpoint(ctx, "xksProxyUriEndpoint"));
  out.xksProxyUriPath = (i.xksProxyUriPath !== undefined ? i.xksProxyUriPath : "");
  out.xksProxyVpcEndpointServiceName = (i.xksProxyVpcEndpointServiceName !== undefined ? i.xksProxyVpcEndpointServiceName : "");
  return out;
}

// aws:kms/externalKey:ExternalKey
export function ExternalKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bypassPolicyLockoutSafetyCheck = (i.bypassPolicyLockoutSafetyCheck !== undefined ? i.bypassPolicyLockoutSafetyCheck : false);
  out.deletionWindowInDays = (i.deletionWindowInDays !== undefined ? i.deletionWindowInDays : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.expirationModel = "";
  out.keyMaterialBase64 = (i.keyMaterialBase64 !== undefined ? i.keyMaterialBase64 : "");
  out.keyState = "";
  out.keyUsage = "";
  out.multiRegion = (i.multiRegion !== undefined ? i.multiRegion : false);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.validTo = (i.validTo !== undefined ? i.validTo : "");
  return out;
}

// aws:kms/grant:Grant
export function Grant(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.constraints = (i.constraints !== undefined ? i.constraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_GrantConstraint(ctx, depth + 1))]));
  out.grantCreationTokens = (i.grantCreationTokens !== undefined ? i.grantCreationTokens : (depth > 4 ? [] : [""]));
  out.grantId = h.id(ctx, "grantId");
  out.grantToken = "";
  out.granteePrincipal = (i.granteePrincipal !== undefined ? i.granteePrincipal : "");
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.operations = (i.operations !== undefined ? i.operations : (depth > 4 ? [] : [""]));
  out.retireOnDelete = (i.retireOnDelete !== undefined ? i.retireOnDelete : false);
  out.retiringPrincipal = (i.retiringPrincipal !== undefined ? i.retiringPrincipal : "");
  return out;
}

// aws:kms/key:Key
export function Key(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bypassPolicyLockoutSafetyCheck = (i.bypassPolicyLockoutSafetyCheck !== undefined ? i.bypassPolicyLockoutSafetyCheck : false);
  out.customKeyStoreId = (i.customKeyStoreId !== undefined ? i.customKeyStoreId : h.id(ctx, "customKeyStoreId"));
  out.customerMasterKeySpec = (i.customerMasterKeySpec !== undefined ? i.customerMasterKeySpec : "");
  out.deletionWindowInDays = (i.deletionWindowInDays !== undefined ? i.deletionWindowInDays : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.enableKeyRotation = (i.enableKeyRotation !== undefined ? i.enableKeyRotation : true);
  out.isEnabled = (i.isEnabled !== undefined ? i.isEnabled : true);
  out.keyId = h.id(ctx, "keyId");
  out.keyUsage = (i.keyUsage !== undefined ? i.keyUsage : "");
  out.multiRegion = (i.multiRegion !== undefined ? i.multiRegion : false);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.rotationPeriodInDays = (i.rotationPeriodInDays !== undefined ? i.rotationPeriodInDays : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.xksKeyId = (i.xksKeyId !== undefined ? i.xksKeyId : h.id(ctx, "xksKeyId"));
  return out;
}

// aws:kms/keyPolicy:KeyPolicy
export function KeyPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bypassPolicyLockoutSafetyCheck = (i.bypassPolicyLockoutSafetyCheck !== undefined ? i.bypassPolicyLockoutSafetyCheck : false);
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:kms/replicaExternalKey:ReplicaExternalKey
export function ReplicaExternalKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bypassPolicyLockoutSafetyCheck = (i.bypassPolicyLockoutSafetyCheck !== undefined ? i.bypassPolicyLockoutSafetyCheck : false);
  out.deletionWindowInDays = (i.deletionWindowInDays !== undefined ? i.deletionWindowInDays : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.expirationModel = "";
  out.keyId = h.id(ctx, "keyId");
  out.keyMaterialBase64 = (i.keyMaterialBase64 !== undefined ? i.keyMaterialBase64 : "");
  out.keyState = "";
  out.keyUsage = "";
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.primaryKeyArn = (i.primaryKeyArn !== undefined ? i.primaryKeyArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.validTo = (i.validTo !== undefined ? i.validTo : "");
  return out;
}

// aws:kms/replicaKey:ReplicaKey
export function ReplicaKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bypassPolicyLockoutSafetyCheck = (i.bypassPolicyLockoutSafetyCheck !== undefined ? i.bypassPolicyLockoutSafetyCheck : false);
  out.deletionWindowInDays = (i.deletionWindowInDays !== undefined ? i.deletionWindowInDays : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.keyId = h.id(ctx, "keyId");
  out.keyRotationEnabled = false;
  out.keySpec = "";
  out.keyUsage = "";
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.primaryKeyArn = (i.primaryKeyArn !== undefined ? i.primaryKeyArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
