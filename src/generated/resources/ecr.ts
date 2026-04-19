// GENERATED FILE — do not edit.
// Service: ecr   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecr from "../types/ecr.js";

// aws:ecr/accountSetting:AccountSetting
export function AccountSetting(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:ecr/lifecyclePolicy:LifecyclePolicy
export function LifecyclePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.registryId = h.id(ctx, "registryId");
  out.repository = (i.repository !== undefined ? i.repository : "");
  return out;
}

// aws:ecr/pullThroughCacheRule:PullThroughCacheRule
export function PullThroughCacheRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialArn = (i.credentialArn !== undefined ? i.credentialArn : h.arn(ctx));
  out.customRoleArn = (i.customRoleArn !== undefined ? i.customRoleArn : h.arn(ctx));
  out.ecrRepositoryPrefix = (i.ecrRepositoryPrefix !== undefined ? i.ecrRepositoryPrefix : "");
  out.registryId = h.id(ctx, "registryId");
  out.upstreamRegistryUrl = (i.upstreamRegistryUrl !== undefined ? i.upstreamRegistryUrl : h.endpoint(ctx, "upstreamRegistryUrl"));
  out.upstreamRepositoryPrefix = (i.upstreamRepositoryPrefix !== undefined ? i.upstreamRepositoryPrefix : "");
  return out;
}

// aws:ecr/registryPolicy:RegistryPolicy
export function RegistryPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.registryId = h.id(ctx, "registryId");
  return out;
}

// aws:ecr/registryScanningConfiguration:RegistryScanningConfiguration
export function RegistryScanningConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.registryId = h.id(ctx, "registryId");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_RegistryScanningConfigurationRule(ctx, depth + 1))]));
  out.scanType = (i.scanType !== undefined ? i.scanType : "");
  return out;
}

// aws:ecr/replicationConfiguration:ReplicationConfiguration
export function ReplicationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.registryId = h.id(ctx, "registryId");
  out.replicationConfiguration = (i.replicationConfiguration !== undefined ? i.replicationConfiguration : (depth > 4 ? {} : T_ecr.ecr_ReplicationConfigurationReplicationConfiguration(ctx, depth + 1)));
  return out;
}

// aws:ecr/repository:Repository
export function Repository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.encryptionConfigurations = (i.encryptionConfigurations !== undefined ? i.encryptionConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_RepositoryEncryptionConfiguration(ctx, depth + 1))]));
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.imageScanningConfiguration = (i.imageScanningConfiguration !== undefined ? i.imageScanningConfiguration : (depth > 4 ? {} : T_ecr.ecr_RepositoryImageScanningConfiguration(ctx, depth + 1)));
  out.imageTagMutability = (i.imageTagMutability !== undefined ? i.imageTagMutability : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.registryId = h.id(ctx, "registryId");
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ecr/repositoryCreationTemplate:RepositoryCreationTemplate
export function RepositoryCreationTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appliedFors = (i.appliedFors !== undefined ? i.appliedFors : (depth > 4 ? [] : [""]));
  out.customRoleArn = (i.customRoleArn !== undefined ? i.customRoleArn : h.arn(ctx));
  out.description = (i.description !== undefined ? i.description : "");
  out.encryptionConfigurations = (i.encryptionConfigurations !== undefined ? i.encryptionConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_RepositoryCreationTemplateEncryptionConfiguration(ctx, depth + 1))]));
  out.imageTagMutability = (i.imageTagMutability !== undefined ? i.imageTagMutability : "");
  out.lifecyclePolicy = (i.lifecyclePolicy !== undefined ? i.lifecyclePolicy : "");
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  out.registryId = h.id(ctx, "registryId");
  out.repositoryPolicy = (i.repositoryPolicy !== undefined ? i.repositoryPolicy : "");
  out.resourceTags = (i.resourceTags !== undefined ? i.resourceTags : {});
  return out;
}

// aws:ecr/repositoryPolicy:RepositoryPolicy
export function RepositoryPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.registryId = h.id(ctx, "registryId");
  out.repository = (i.repository !== undefined ? i.repository : "");
  return out;
}
