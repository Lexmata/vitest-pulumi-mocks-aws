// GENERATED FILE — do not edit.
// Service: amplify   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_amplify from "./amplify.js";

// aws:amplify/AppAutoBranchCreationConfig:AppAutoBranchCreationConfig
export function amplify_AppAutoBranchCreationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuthCredentials = "";
  out.buildSpec = "";
  out.enableAutoBuild = true;
  out.enableBasicAuth = true;
  out.enablePerformanceMode = true;
  out.enablePullRequestPreview = true;
  out.environmentVariables = {};
  out.framework = "";
  out.pullRequestEnvironmentName = "";
  out.stage = "";
  return out;
}

// aws:amplify/AppCacheConfig:AppCacheConfig
export function amplify_AppCacheConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:amplify/AppCustomRule:AppCustomRule
export function amplify_AppCustomRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = "";
  out.source = "";
  out.status = "active";
  out.target = "";
  return out;
}

// aws:amplify/AppProductionBranch:AppProductionBranch
export function amplify_AppProductionBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branchName = "";
  out.lastDeployTime = "";
  out.status = "active";
  out.thumbnailUrl = h.endpoint(ctx, "thumbnailUrl");
  return out;
}

// aws:amplify/DomainAssociationCertificateSettings:DomainAssociationCertificateSettings
export function amplify_DomainAssociationCertificateSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateVerificationDnsRecord = "";
  out.customCertificateArn = h.arn(ctx);
  out.type = "";
  return out;
}

// aws:amplify/DomainAssociationSubDomain:DomainAssociationSubDomain
export function amplify_DomainAssociationSubDomain(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branchName = "";
  out.dnsRecord = "";
  out.prefix = "";
  out.verified = false;
  return out;
}
