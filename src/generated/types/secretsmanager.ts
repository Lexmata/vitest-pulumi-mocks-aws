// GENERATED FILE — do not edit.
// Service: secretsmanager   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_secretsmanager from "./secretsmanager.js";

// aws:secretsmanager/SecretReplica:SecretReplica
export function secretsmanager_SecretReplica(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.lastAccessedDate = "";
  out.region = ctx.region;
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:secretsmanager/SecretRotationRotationRules:SecretRotationRotationRules
export function secretsmanager_SecretRotationRotationRules(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automaticallyAfterDays = 0;
  out.duration = "";
  out.scheduleExpression = "";
  return out;
}

// aws:secretsmanager/getSecretRotationRotationRule:getSecretRotationRotationRule
export function secretsmanager_getSecretRotationRotationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automaticallyAfterDays = 0;
  out.duration = "";
  out.scheduleExpression = "";
  return out;
}

// aws:secretsmanager/getSecretVersionsVersion:getSecretVersionsVersion
export function secretsmanager_getSecretVersionsVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdTime = h.timestamp();
  out.lastAccessedDate = "";
  out.versionId = h.id(ctx, "versionId");
  out.versionStages = (depth > 4 ? [] : [""]);
  return out;
}

// aws:secretsmanager/getSecretsFilter:getSecretsFilter
export function secretsmanager_getSecretsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}
