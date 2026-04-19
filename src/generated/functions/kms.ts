// GENERATED FILE — do not edit.
// Service: kms   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kms from "../types/kms.js";

// aws:kms/getAlias:getAlias
export function getAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.targetKeyArn = h.arn(ctx);
  out.targetKeyId = h.id(ctx, "targetKeyId");
  return out;
}

// aws:kms/getCipherText:getCipherText
export function getCipherText(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ciphertextBlob = "";
  out.context = (i.context !== undefined ? i.context : {});
  out.id = h.id(ctx, "id");
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.plaintext = (i.plaintext !== undefined ? i.plaintext : "");
  return out;
}

// aws:kms/getCustomKeyStore:getCustomKeyStore
export function getCustomKeyStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudHsmClusterId = h.id(ctx, "cloudHsmClusterId");
  out.connectionState = "";
  out.creationDate = h.timestamp();
  out.customKeyStoreId = (i.customKeyStoreId !== undefined ? i.customKeyStoreId : h.id(ctx, "customKeyStoreId"));
  out.customKeyStoreName = (i.customKeyStoreName !== undefined ? i.customKeyStoreName : "");
  out.id = h.id(ctx, "id");
  out.trustAnchorCertificate = "";
  return out;
}

// aws:kms/getKey:getKey
export function getKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.awsAccountId = h.id(ctx, "awsAccountId");
  out.cloudHsmClusterId = h.id(ctx, "cloudHsmClusterId");
  out.creationDate = h.timestamp();
  out.customKeyStoreId = h.id(ctx, "customKeyStoreId");
  out.customerMasterKeySpec = "";
  out.deletionDate = "";
  out.description = "";
  out.enabled = true;
  out.expirationModel = "";
  out.grantTokens = (i.grantTokens !== undefined ? i.grantTokens : (depth > 4 ? [] : [""]));
  out.id = h.id(ctx, "id");
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.keyManager = "";
  out.keySpec = "";
  out.keyState = "";
  out.keyUsage = "";
  out.multiRegion = false;
  out.multiRegionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_getKeyMultiRegionConfiguration(ctx, depth + 1))]);
  out.origin = "";
  out.pendingDeletionWindowInDays = 0;
  out.validTo = "";
  out.xksKeyConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_getKeyXksKeyConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:kms/getPublicKey:getPublicKey
export function getPublicKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.customerMasterKeySpec = "";
  out.encryptionAlgorithms = (depth > 4 ? [] : [""]);
  out.grantTokens = (i.grantTokens !== undefined ? i.grantTokens : (depth > 4 ? [] : [""]));
  out.id = h.id(ctx, "id");
  out.keyId = (i.keyId !== undefined ? i.keyId : h.id(ctx, "keyId"));
  out.keyUsage = "";
  out.publicKey = "";
  out.publicKeyPem = "";
  out.signingAlgorithms = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kms/getSecret:getSecret
export function getSecret(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.secrets = (i.secrets !== undefined ? i.secrets : (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_getSecretSecret(ctx, depth + 1))]));
  return out;
}

// aws:kms/getSecrets:getSecrets
export function getSecrets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.plaintext = {};
  out.secrets = (i.secrets !== undefined ? i.secrets : (depth > 4 ? [] : [(depth > 4 ? {} : T_kms.kms_getSecretsSecret(ctx, depth + 1))]));
  return out;
}
