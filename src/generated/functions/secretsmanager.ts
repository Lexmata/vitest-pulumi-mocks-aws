// GENERATED FILE — do not edit.
// Service: secretsmanager   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_secretsmanager from "../types/secretsmanager.js";

// aws:secretsmanager/getRandomPassword:getRandomPassword
export function getRandomPassword(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludeCharacters = (i.excludeCharacters !== undefined ? i.excludeCharacters : "");
  out.excludeLowercase = (i.excludeLowercase !== undefined ? i.excludeLowercase : false);
  out.excludeNumbers = (i.excludeNumbers !== undefined ? i.excludeNumbers : false);
  out.excludePunctuation = (i.excludePunctuation !== undefined ? i.excludePunctuation : false);
  out.excludeUppercase = (i.excludeUppercase !== undefined ? i.excludeUppercase : false);
  out.id = h.id(ctx, "id");
  out.includeSpace = (i.includeSpace !== undefined ? i.includeSpace : false);
  out.passwordLength = (i.passwordLength !== undefined ? i.passwordLength : 0);
  out.randomPassword = "";
  out.requireEachIncludedType = (i.requireEachIncludedType !== undefined ? i.requireEachIncludedType : false);
  return out;
}

// aws:secretsmanager/getSecret:getSecret
export function getSecret(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.createdDate = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.lastChangedDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:secretsmanager/getSecretRotation:getSecretRotation
export function getSecretRotation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.rotationEnabled = false;
  out.rotationLambdaArn = h.arn(ctx);
  out.rotationRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_secretsmanager.secretsmanager_getSecretRotationRotationRule(ctx, depth + 1))]);
  out.secretId = (i.secretId !== undefined ? i.secretId : h.id(ctx, "secretId"));
  return out;
}

// aws:secretsmanager/getSecretVersion:getSecretVersion
export function getSecretVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.id = h.id(ctx, "id");
  out.secretBinary = "";
  out.secretId = (i.secretId !== undefined ? i.secretId : h.id(ctx, "secretId"));
  out.secretString = "";
  out.versionId = (i.versionId !== undefined ? i.versionId : h.id(ctx, "versionId"));
  out.versionStage = (i.versionStage !== undefined ? i.versionStage : "");
  out.versionStages = (depth > 4 ? [] : [""]);
  return out;
}

// aws:secretsmanager/getSecretVersions:getSecretVersions
export function getSecretVersions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.includeDeprecated = (i.includeDeprecated !== undefined ? i.includeDeprecated : false);
  out.name = ctx.name;
  out.secretId = (i.secretId !== undefined ? i.secretId : h.id(ctx, "secretId"));
  out.versions = (depth > 4 ? [] : [(depth > 4 ? {} : T_secretsmanager.secretsmanager_getSecretVersionsVersion(ctx, depth + 1))]);
  return out;
}

// aws:secretsmanager/getSecrets:getSecrets
export function getSecrets(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_secretsmanager.secretsmanager_getSecretsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}
