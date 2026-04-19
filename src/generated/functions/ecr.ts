// GENERATED FILE — do not edit.
// Service: ecr   (8 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecr from "../types/ecr.js";

// aws:ecr/getAuthorizationToken:getAuthorizationToken
export function getAuthorizationToken(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationToken = "";
  out.expiresAt = "";
  out.id = h.id(ctx, "id");
  out.password = "";
  out.proxyEndpoint = h.endpoint(ctx, "proxyEndpoint");
  out.registryId = (i.registryId !== undefined ? i.registryId : h.id(ctx, "registryId"));
  out.userName = "";
  return out;
}

// aws:ecr/getCredentials:getCredentials
export function getCredentials(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationToken = "";
  out.expiresAt = "";
  out.id = h.id(ctx, "id");
  out.proxyEndpoint = h.endpoint(ctx, "proxyEndpoint");
  out.registryId = (i.registryId !== undefined ? i.registryId : h.id(ctx, "registryId"));
  return out;
}

// aws:ecr/getImage:getImage
export function getImage(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.imageDigest = (i.imageDigest !== undefined ? i.imageDigest : "");
  out.imagePushedAt = 0;
  out.imageSizeInBytes = 8;
  out.imageTag = (i.imageTag !== undefined ? i.imageTag : "");
  out.imageTags = (depth > 4 ? [] : [""]);
  out.imageUri = h.endpoint(ctx, "imageUri");
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.registryId = (i.registryId !== undefined ? i.registryId : h.id(ctx, "registryId"));
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  return out;
}

// aws:ecr/getLifecyclePolicyDocument:getLifecyclePolicyDocument
export function getLifecyclePolicyDocument(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.json = "";
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_getLifecyclePolicyDocumentRule(ctx, depth + 1))]));
  return out;
}

// aws:ecr/getPullThroughCacheRule:getPullThroughCacheRule
export function getPullThroughCacheRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialArn = h.arn(ctx);
  out.customRoleArn = h.arn(ctx);
  out.ecrRepositoryPrefix = (i.ecrRepositoryPrefix !== undefined ? i.ecrRepositoryPrefix : "");
  out.id = h.id(ctx, "id");
  out.registryId = h.id(ctx, "registryId");
  out.upstreamRegistryUrl = h.endpoint(ctx, "upstreamRegistryUrl");
  out.upstreamRepositoryPrefix = "";
  return out;
}

// aws:ecr/getRepositories:getRepositories
export function getRepositories(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ecr/getRepository:getRepository
export function getRepository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.encryptionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_getRepositoryEncryptionConfiguration(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.imageScanningConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_getRepositoryImageScanningConfiguration(ctx, depth + 1))]);
  out.imageTagMutability = "";
  out.mostRecentImageTags = (depth > 4 ? [] : [""]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.registryId = (i.registryId !== undefined ? i.registryId : h.id(ctx, "registryId"));
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ecr/getRepositoryCreationTemplate:getRepositoryCreationTemplate
export function getRepositoryCreationTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appliedFors = (depth > 4 ? [] : [""]);
  out.customRoleArn = h.arn(ctx);
  out.description = "";
  out.encryptionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_getRepositoryCreationTemplateEncryptionConfiguration(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.imageTagMutability = "";
  out.lifecyclePolicy = "";
  out.prefix = (i.prefix !== undefined ? i.prefix : "");
  out.registryId = h.id(ctx, "registryId");
  out.repositoryPolicy = "";
  out.resourceTags = (i.resourceTags !== undefined ? i.resourceTags : {});
  return out;
}
