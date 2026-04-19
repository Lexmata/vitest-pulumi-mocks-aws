// GENERATED FILE — do not edit.
// Service: cloudfront   (10 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudfront from "../types/cloudfront.js";

// aws:cloudfront/getCachePolicy:getCachePolicy
export function getCachePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = "";
  out.defaultTtl = 0;
  out.etag = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.maxTtl = 0;
  out.minTtl = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parametersInCacheKeyAndForwardedToOrigins = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOrigin(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getDistribution:getDistribution
export function getDistribution(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliases = (depth > 4 ? [] : [""]);
  out.arn = h.arn(ctx);
  out.domainName = h.endpoint(ctx, "domainName");
  out.enabled = true;
  out.etag = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.inProgressValidationBatches = 0;
  out.lastModifiedTime = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.webAclId = h.id(ctx, "webAclId");
  return out;
}

// aws:cloudfront/getFunction:getFunction
export function getFunction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.code = "";
  out.comment = "";
  out.etag = "";
  out.id = h.id(ctx, "id");
  out.keyValueStoreAssociations = (depth > 4 ? [] : [""]);
  out.lastModifiedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.runtime = "";
  out.stage = (i.stage !== undefined ? i.stage : "");
  out.status = "active";
  return out;
}

// aws:cloudfront/getLogDeliveryCanonicalUserId:getLogDeliveryCanonicalUserId
export function getLogDeliveryCanonicalUserId(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}

// aws:cloudfront/getOriginAccessControl:getOriginAccessControl
export function getOriginAccessControl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.etag = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = ctx.name;
  out.originAccessControlOriginType = "";
  out.signingBehavior = "";
  out.signingProtocol = "";
  return out;
}

// aws:cloudfront/getOriginAccessIdentities:getOriginAccessIdentities
export function getOriginAccessIdentities(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comments = (i.comments !== undefined ? i.comments : (depth > 4 ? [] : [""]));
  out.iamArns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.s3CanonicalUserIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getOriginAccessIdentity:getOriginAccessIdentity
export function getOriginAccessIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.cloudfrontAccessIdentityPath = "";
  out.comment = "";
  out.etag = "";
  out.iamArn = h.arn(ctx);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.s3CanonicalUserId = h.id(ctx, "s3CanonicalUserId");
  return out;
}

// aws:cloudfront/getOriginRequestPolicy:getOriginRequestPolicy
export function getOriginRequestPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = "";
  out.cookiesConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getOriginRequestPolicyCookiesConfig(ctx, depth + 1))]);
  out.etag = "";
  out.headersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getOriginRequestPolicyHeadersConfig(ctx, depth + 1))]);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queryStringsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getOriginRequestPolicyQueryStringsConfig(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getRealtimeLogConfig:getRealtimeLogConfig
export function getRealtimeLogConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getRealtimeLogConfigEndpoint(ctx, depth + 1))]);
  out.fields = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.samplingRate = 0;
  return out;
}

// aws:cloudfront/getResponseHeadersPolicy:getResponseHeadersPolicy
export function getResponseHeadersPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = "";
  out.corsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCorsConfig(ctx, depth + 1))]);
  out.customHeadersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCustomHeadersConfig(ctx, depth + 1))]);
  out.etag = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.removeHeadersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyRemoveHeadersConfig(ctx, depth + 1))]);
  out.securityHeadersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfig(ctx, depth + 1))]);
  out.serverTimingHeadersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyServerTimingHeadersConfig(ctx, depth + 1))]);
  return out;
}
