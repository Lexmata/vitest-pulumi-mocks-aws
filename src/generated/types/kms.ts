// GENERATED FILE — do not edit.
// Service: kms   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kms from "./kms.js";

// aws:kms/CustomKeyStoreXksProxyAuthenticationCredential:CustomKeyStoreXksProxyAuthenticationCredential
export function kms_CustomKeyStoreXksProxyAuthenticationCredential(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessKeyId = h.id(ctx, "accessKeyId");
  out.rawSecretAccessKey = "";
  return out;
}

// aws:kms/GrantConstraint:GrantConstraint
export function kms_GrantConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionContextEquals = {};
  out.encryptionContextSubset = {};
  return out;
}

// aws:kms/getKeyMultiRegionConfiguration:getKeyMultiRegionConfiguration
export function kms_getKeyMultiRegionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.multiRegionKeyType = "";
  out.primaryKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_getKeyMultiRegionConfigurationPrimaryKey(ctx, depth + 1))]);
  out.replicaKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_getKeyMultiRegionConfigurationReplicaKey(ctx, depth + 1))]);
  return out;
}

// aws:kms/getKeyMultiRegionConfigurationPrimaryKey:getKeyMultiRegionConfigurationPrimaryKey
export function kms_getKeyMultiRegionConfigurationPrimaryKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.region = ctx.region;
  return out;
}

// aws:kms/getKeyMultiRegionConfigurationReplicaKey:getKeyMultiRegionConfigurationReplicaKey
export function kms_getKeyMultiRegionConfigurationReplicaKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.region = ctx.region;
  return out;
}

// aws:kms/getKeyXksKeyConfiguration:getKeyXksKeyConfiguration
export function kms_getKeyXksKeyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  return out;
}

// aws:kms/getSecretSecret:getSecretSecret
export function kms_getSecretSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.context = {};
  out.grantTokens = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.payload = "";
  return out;
}

// aws:kms/getSecretsSecret:getSecretsSecret
export function kms_getSecretsSecret(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.context = {};
  out.encryptionAlgorithm = "";
  out.grantTokens = (depth > 4 ? [] : [""]);
  out.keyId = h.id(ctx, "keyId");
  out.name = ctx.name;
  out.payload = "";
  return out;
}
