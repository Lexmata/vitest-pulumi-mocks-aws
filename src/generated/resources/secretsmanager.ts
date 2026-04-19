// GENERATED FILE — do not edit.
// Service: secretsmanager   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_secretsmanager from "../types/secretsmanager.js";

// aws:secretsmanager/secret:Secret
export function Secret(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.forceOverwriteReplicaSecret = (i.forceOverwriteReplicaSecret !== undefined ? i.forceOverwriteReplicaSecret : false);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.recoveryWindowInDays = (i.recoveryWindowInDays !== undefined ? i.recoveryWindowInDays : 0);
  out.replicas = (i.replicas !== undefined ? i.replicas : (depth > 4 ? [] : [(depth > 4 ? {} : T_secretsmanager.secretsmanager_SecretReplica(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:secretsmanager/secretPolicy:SecretPolicy
export function SecretPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockPublicPolicy = (i.blockPublicPolicy !== undefined ? i.blockPublicPolicy : false);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.secretArn = (i.secretArn !== undefined ? i.secretArn : h.arn(ctx));
  return out;
}

// aws:secretsmanager/secretRotation:SecretRotation
export function SecretRotation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rotateImmediately = (i.rotateImmediately !== undefined ? i.rotateImmediately : false);
  out.rotationEnabled = false;
  out.rotationLambdaArn = (i.rotationLambdaArn !== undefined ? i.rotationLambdaArn : h.arn(ctx));
  out.rotationRules = (i.rotationRules !== undefined ? i.rotationRules : (depth > 4 ? {} : T_secretsmanager.secretsmanager_SecretRotationRotationRules(ctx, depth + 1)));
  out.secretId = (i.secretId !== undefined ? i.secretId : h.id(ctx, "secretId"));
  return out;
}

// aws:secretsmanager/secretVersion:SecretVersion
export function SecretVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.secretBinary = (i.secretBinary !== undefined ? i.secretBinary : "");
  out.secretId = (i.secretId !== undefined ? i.secretId : h.id(ctx, "secretId"));
  out.secretString = (i.secretString !== undefined ? i.secretString : "");
  out.versionId = h.id(ctx, "versionId");
  out.versionStages = (i.versionStages !== undefined ? i.versionStages : (depth > 4 ? [] : [""]));
  return out;
}
