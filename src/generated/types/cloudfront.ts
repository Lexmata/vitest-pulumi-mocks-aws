// GENERATED FILE — do not edit.
// Service: cloudfront   (115 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudfront from "./cloudfront.js";

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOrigin:CachePolicyParametersInCacheKeyAndForwardedToOrigin
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookiesConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig(ctx, depth + 1));
  out.enableAcceptEncodingBrotli = true;
  out.enableAcceptEncodingGzip = true;
  out.headersConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig(ctx, depth + 1));
  out.queryStringsConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig(ctx, depth + 1));
  return out;
}

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig:CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieBehavior = "";
  out.cookies = (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies(ctx, depth + 1));
  return out;
}

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies:CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig:CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerBehavior = "";
  out.headers = (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders(ctx, depth + 1));
  return out;
}

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders:CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig:CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryStringBehavior = "";
  out.queryStrings = (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings(ctx, depth + 1));
  return out;
}

// aws:cloudfront/CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings:CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings
export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/ContinuousDeploymentPolicyStagingDistributionDnsNames:ContinuousDeploymentPolicyStagingDistributionDnsNames
export function cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  out.quantity = 0;
  return out;
}

// aws:cloudfront/ContinuousDeploymentPolicyTrafficConfig:ContinuousDeploymentPolicyTrafficConfig
export function cloudfront_ContinuousDeploymentPolicyTrafficConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.singleHeaderConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig(ctx, depth + 1));
  out.singleWeightConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:cloudfront/ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig:ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig
export function cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.header = "";
  out.value = "";
  return out;
}

// aws:cloudfront/ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig:ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig
export function cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sessionStickinessConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig(ctx, depth + 1));
  out.weight = 0;
  return out;
}

// aws:cloudfront/ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig:ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig
export function cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTtl = 0;
  out.maximumTtl = 0;
  return out;
}

// aws:cloudfront/DistributionCustomErrorResponse:DistributionCustomErrorResponse
export function cloudfront_DistributionCustomErrorResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorCachingMinTtl = 0;
  out.errorCode = 0;
  out.responseCode = 0;
  out.responsePagePath = "";
  return out;
}

// aws:cloudfront/DistributionDefaultCacheBehavior:DistributionDefaultCacheBehavior
export function cloudfront_DistributionDefaultCacheBehavior(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedMethods = (depth > 4 ? [] : [""]);
  out.cachePolicyId = h.id(ctx, "cachePolicyId");
  out.cachedMethods = (depth > 4 ? [] : [""]);
  out.compress = false;
  out.defaultTtl = 0;
  out.fieldLevelEncryptionId = h.id(ctx, "fieldLevelEncryptionId");
  out.forwardedValues = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionDefaultCacheBehaviorForwardedValues(ctx, depth + 1));
  out.functionAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation(ctx, depth + 1))]);
  out.grpcConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionDefaultCacheBehaviorGrpcConfig(ctx, depth + 1));
  out.lambdaFunctionAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation(ctx, depth + 1))]);
  out.maxTtl = 0;
  out.minTtl = 0;
  out.originRequestPolicyId = h.id(ctx, "originRequestPolicyId");
  out.realtimeLogConfigArn = h.arn(ctx);
  out.responseHeadersPolicyId = h.id(ctx, "responseHeadersPolicyId");
  out.smoothStreaming = false;
  out.targetOriginId = h.id(ctx, "targetOriginId");
  out.trustedKeyGroups = (depth > 4 ? [] : [""]);
  out.trustedSigners = (depth > 4 ? [] : [""]);
  out.viewerProtocolPolicy = "";
  return out;
}

// aws:cloudfront/DistributionDefaultCacheBehaviorForwardedValues:DistributionDefaultCacheBehaviorForwardedValues
export function cloudfront_DistributionDefaultCacheBehaviorForwardedValues(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookies = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies(ctx, depth + 1));
  out.headers = (depth > 4 ? [] : [""]);
  out.queryString = false;
  out.queryStringCacheKeys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionDefaultCacheBehaviorForwardedValuesCookies:DistributionDefaultCacheBehaviorForwardedValuesCookies
export function cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.forward = "";
  out.whitelistedNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionDefaultCacheBehaviorFunctionAssociation:DistributionDefaultCacheBehaviorFunctionAssociation
export function cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventType = "";
  out.functionArn = h.arn(ctx);
  return out;
}

// aws:cloudfront/DistributionDefaultCacheBehaviorGrpcConfig:DistributionDefaultCacheBehaviorGrpcConfig
export function cloudfront_DistributionDefaultCacheBehaviorGrpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:cloudfront/DistributionDefaultCacheBehaviorLambdaFunctionAssociation:DistributionDefaultCacheBehaviorLambdaFunctionAssociation
export function cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventType = "";
  out.includeBody = false;
  out.lambdaArn = h.arn(ctx);
  return out;
}

// aws:cloudfront/DistributionLoggingConfig:DistributionLoggingConfig
export function cloudfront_DistributionLoggingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.includeCookies = false;
  out.prefix = "";
  return out;
}

// aws:cloudfront/DistributionOrderedCacheBehavior:DistributionOrderedCacheBehavior
export function cloudfront_DistributionOrderedCacheBehavior(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedMethods = (depth > 4 ? [] : [""]);
  out.cachePolicyId = h.id(ctx, "cachePolicyId");
  out.cachedMethods = (depth > 4 ? [] : [""]);
  out.compress = false;
  out.defaultTtl = 0;
  out.fieldLevelEncryptionId = h.id(ctx, "fieldLevelEncryptionId");
  out.forwardedValues = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrderedCacheBehaviorForwardedValues(ctx, depth + 1));
  out.functionAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrderedCacheBehaviorFunctionAssociation(ctx, depth + 1))]);
  out.grpcConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrderedCacheBehaviorGrpcConfig(ctx, depth + 1));
  out.lambdaFunctionAssociations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrderedCacheBehaviorLambdaFunctionAssociation(ctx, depth + 1))]);
  out.maxTtl = 0;
  out.minTtl = 0;
  out.originRequestPolicyId = h.id(ctx, "originRequestPolicyId");
  out.pathPattern = "";
  out.realtimeLogConfigArn = h.arn(ctx);
  out.responseHeadersPolicyId = h.id(ctx, "responseHeadersPolicyId");
  out.smoothStreaming = false;
  out.targetOriginId = h.id(ctx, "targetOriginId");
  out.trustedKeyGroups = (depth > 4 ? [] : [""]);
  out.trustedSigners = (depth > 4 ? [] : [""]);
  out.viewerProtocolPolicy = "";
  return out;
}

// aws:cloudfront/DistributionOrderedCacheBehaviorForwardedValues:DistributionOrderedCacheBehaviorForwardedValues
export function cloudfront_DistributionOrderedCacheBehaviorForwardedValues(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookies = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies(ctx, depth + 1));
  out.headers = (depth > 4 ? [] : [""]);
  out.queryString = false;
  out.queryStringCacheKeys = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionOrderedCacheBehaviorForwardedValuesCookies:DistributionOrderedCacheBehaviorForwardedValuesCookies
export function cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.forward = "";
  out.whitelistedNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionOrderedCacheBehaviorFunctionAssociation:DistributionOrderedCacheBehaviorFunctionAssociation
export function cloudfront_DistributionOrderedCacheBehaviorFunctionAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventType = "";
  out.functionArn = h.arn(ctx);
  return out;
}

// aws:cloudfront/DistributionOrderedCacheBehaviorGrpcConfig:DistributionOrderedCacheBehaviorGrpcConfig
export function cloudfront_DistributionOrderedCacheBehaviorGrpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:cloudfront/DistributionOrderedCacheBehaviorLambdaFunctionAssociation:DistributionOrderedCacheBehaviorLambdaFunctionAssociation
export function cloudfront_DistributionOrderedCacheBehaviorLambdaFunctionAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventType = "";
  out.includeBody = false;
  out.lambdaArn = h.arn(ctx);
  return out;
}

// aws:cloudfront/DistributionOrigin:DistributionOrigin
export function cloudfront_DistributionOrigin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.connectionAttempts = 0;
  out.connectionTimeout = 30;
  out.customHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginCustomHeader(ctx, depth + 1))]);
  out.customOriginConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginCustomOriginConfig(ctx, depth + 1));
  out.domainName = h.endpoint(ctx, "domainName");
  out.originAccessControlId = h.id(ctx, "originAccessControlId");
  out.originId = h.id(ctx, "originId");
  out.originPath = "";
  out.originShield = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginOriginShield(ctx, depth + 1));
  out.s3OriginConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginS3OriginConfig(ctx, depth + 1));
  out.vpcOriginConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginVpcOriginConfig(ctx, depth + 1));
  return out;
}

// aws:cloudfront/DistributionOriginCustomHeader:DistributionOriginCustomHeader
export function cloudfront_DistributionOriginCustomHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:cloudfront/DistributionOriginCustomOriginConfig:DistributionOriginCustomOriginConfig
export function cloudfront_DistributionOriginCustomOriginConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpPort = 443;
  out.httpsPort = 443;
  out.originKeepaliveTimeout = 30;
  out.originProtocolPolicy = "";
  out.originReadTimeout = 30;
  out.originSslProtocols = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionOriginGroup:DistributionOriginGroup
export function cloudfront_DistributionOriginGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failoverCriteria = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginGroupFailoverCriteria(ctx, depth + 1));
  out.members = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginGroupMember(ctx, depth + 1))]);
  out.originId = h.id(ctx, "originId");
  return out;
}

// aws:cloudfront/DistributionOriginGroupFailoverCriteria:DistributionOriginGroupFailoverCriteria
export function cloudfront_DistributionOriginGroupFailoverCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statusCodes = (depth > 4 ? [] : [0]);
  return out;
}

// aws:cloudfront/DistributionOriginGroupMember:DistributionOriginGroupMember
export function cloudfront_DistributionOriginGroupMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.originId = h.id(ctx, "originId");
  return out;
}

// aws:cloudfront/DistributionOriginOriginShield:DistributionOriginOriginShield
export function cloudfront_DistributionOriginOriginShield(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.originShieldRegion = "";
  return out;
}

// aws:cloudfront/DistributionOriginS3OriginConfig:DistributionOriginS3OriginConfig
export function cloudfront_DistributionOriginS3OriginConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.originAccessIdentity = "";
  return out;
}

// aws:cloudfront/DistributionOriginVpcOriginConfig:DistributionOriginVpcOriginConfig
export function cloudfront_DistributionOriginVpcOriginConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.originKeepaliveTimeout = 30;
  out.originReadTimeout = 30;
  out.vpcOriginId = h.id(ctx, "vpcOriginId");
  return out;
}

// aws:cloudfront/DistributionRestrictions:DistributionRestrictions
export function cloudfront_DistributionRestrictions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.geoRestriction = (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionRestrictionsGeoRestriction(ctx, depth + 1));
  return out;
}

// aws:cloudfront/DistributionRestrictionsGeoRestriction:DistributionRestrictionsGeoRestriction
export function cloudfront_DistributionRestrictionsGeoRestriction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.locations = (depth > 4 ? [] : [""]);
  out.restrictionType = "";
  return out;
}

// aws:cloudfront/DistributionTrustedKeyGroup:DistributionTrustedKeyGroup
export function cloudfront_DistributionTrustedKeyGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionTrustedKeyGroupItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/DistributionTrustedKeyGroupItem:DistributionTrustedKeyGroupItem
export function cloudfront_DistributionTrustedKeyGroupItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyGroupId = h.id(ctx, "keyGroupId");
  out.keyPairIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionTrustedSigner:DistributionTrustedSigner
export function cloudfront_DistributionTrustedSigner(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionTrustedSignerItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/DistributionTrustedSignerItem:DistributionTrustedSignerItem
export function cloudfront_DistributionTrustedSignerItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountNumber = "";
  out.keyPairIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/DistributionViewerCertificate:DistributionViewerCertificate
export function cloudfront_DistributionViewerCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acmCertificateArn = h.arn(ctx);
  out.cloudfrontDefaultCertificate = false;
  out.iamCertificateId = h.id(ctx, "iamCertificateId");
  out.minimumProtocolVersion = "";
  out.sslSupportMethod = "";
  return out;
}

// aws:cloudfront/FieldLevelEncryptionConfigContentTypeProfileConfig:FieldLevelEncryptionConfigContentTypeProfileConfig
export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentTypeProfiles = (depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles(ctx, depth + 1));
  out.forwardWhenContentTypeIsUnknown = false;
  return out;
}

// aws:cloudfront/FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles:FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles
export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem:FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem
export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentType = "";
  out.format = "";
  out.profileId = h.id(ctx, "profileId");
  return out;
}

// aws:cloudfront/FieldLevelEncryptionConfigQueryArgProfileConfig:FieldLevelEncryptionConfigQueryArgProfileConfig
export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.forwardWhenQueryArgProfileIsUnknown = false;
  out.queryArgProfiles = (depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles(ctx, depth + 1));
  return out;
}

// aws:cloudfront/FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles:FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles
export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem:FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem
export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.profileId = h.id(ctx, "profileId");
  out.queryArg = "";
  return out;
}

// aws:cloudfront/FieldLevelEncryptionProfileEncryptionEntities:FieldLevelEncryptionProfileEncryptionEntities
export function cloudfront_FieldLevelEncryptionProfileEncryptionEntities(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/FieldLevelEncryptionProfileEncryptionEntitiesItem:FieldLevelEncryptionProfileEncryptionEntitiesItem
export function cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldPatterns = (depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns(ctx, depth + 1));
  out.providerId = h.id(ctx, "providerId");
  out.publicKeyId = h.id(ctx, "publicKeyId");
  return out;
}

// aws:cloudfront/FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns:FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns
export function cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/KeyValueStoreTimeouts:KeyValueStoreTimeouts
export function cloudfront_KeyValueStoreTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:cloudfront/KeyvaluestoreKeysExclusiveResourceKeyValuePair:KeyvaluestoreKeysExclusiveResourceKeyValuePair
export function cloudfront_KeyvaluestoreKeysExclusiveResourceKeyValuePair(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:cloudfront/MonitoringSubscriptionMonitoringSubscription:MonitoringSubscriptionMonitoringSubscription
export function cloudfront_MonitoringSubscriptionMonitoringSubscription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.realtimeMetricsSubscriptionConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig(ctx, depth + 1));
  return out;
}

// aws:cloudfront/MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig:MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig
export function cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.realtimeMetricsSubscriptionStatus = "";
  return out;
}

// aws:cloudfront/OriginRequestPolicyCookiesConfig:OriginRequestPolicyCookiesConfig
export function cloudfront_OriginRequestPolicyCookiesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieBehavior = "";
  out.cookies = (depth > 4 ? {} : T_cloudfront.cloudfront_OriginRequestPolicyCookiesConfigCookies(ctx, depth + 1));
  return out;
}

// aws:cloudfront/OriginRequestPolicyCookiesConfigCookies:OriginRequestPolicyCookiesConfigCookies
export function cloudfront_OriginRequestPolicyCookiesConfigCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/OriginRequestPolicyHeadersConfig:OriginRequestPolicyHeadersConfig
export function cloudfront_OriginRequestPolicyHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerBehavior = "";
  out.headers = (depth > 4 ? {} : T_cloudfront.cloudfront_OriginRequestPolicyHeadersConfigHeaders(ctx, depth + 1));
  return out;
}

// aws:cloudfront/OriginRequestPolicyHeadersConfigHeaders:OriginRequestPolicyHeadersConfigHeaders
export function cloudfront_OriginRequestPolicyHeadersConfigHeaders(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/OriginRequestPolicyQueryStringsConfig:OriginRequestPolicyQueryStringsConfig
export function cloudfront_OriginRequestPolicyQueryStringsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryStringBehavior = "";
  out.queryStrings = (depth > 4 ? {} : T_cloudfront.cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings(ctx, depth + 1));
  return out;
}

// aws:cloudfront/OriginRequestPolicyQueryStringsConfigQueryStrings:OriginRequestPolicyQueryStringsConfigQueryStrings
export function cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/RealtimeLogConfigEndpoint:RealtimeLogConfigEndpoint
export function cloudfront_RealtimeLogConfigEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisStreamConfig = (depth > 4 ? {} : T_cloudfront.cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig(ctx, depth + 1));
  out.streamType = "";
  return out;
}

// aws:cloudfront/RealtimeLogConfigEndpointKinesisStreamConfig:RealtimeLogConfigEndpointKinesisStreamConfig
export function cloudfront_RealtimeLogConfigEndpointKinesisStreamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.streamArn = h.arn(ctx);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCorsConfig:ResponseHeadersPolicyCorsConfig
export function cloudfront_ResponseHeadersPolicyCorsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlAllowCredentials = false;
  out.accessControlAllowHeaders = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders(ctx, depth + 1));
  out.accessControlAllowMethods = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods(ctx, depth + 1));
  out.accessControlAllowOrigins = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins(ctx, depth + 1));
  out.accessControlExposeHeaders = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders(ctx, depth + 1));
  out.accessControlMaxAgeSec = 0;
  out.originOverride = false;
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders:ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders
export function cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCorsConfigAccessControlAllowMethods:ResponseHeadersPolicyCorsConfigAccessControlAllowMethods
export function cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins:ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins
export function cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders:ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders
export function cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCustomHeadersConfig:ResponseHeadersPolicyCustomHeadersConfig
export function cloudfront_ResponseHeadersPolicyCustomHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyCustomHeadersConfigItem:ResponseHeadersPolicyCustomHeadersConfigItem
export function cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.header = "";
  out.override = false;
  out.value = "";
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyRemoveHeadersConfig:ResponseHeadersPolicyRemoveHeadersConfig
export function cloudfront_ResponseHeadersPolicyRemoveHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyRemoveHeadersConfigItem:ResponseHeadersPolicyRemoveHeadersConfigItem
export function cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.header = "";
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfig:ResponseHeadersPolicySecurityHeadersConfig
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentSecurityPolicy = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy(ctx, depth + 1));
  out.contentTypeOptions = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions(ctx, depth + 1));
  out.frameOptions = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions(ctx, depth + 1));
  out.referrerPolicy = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy(ctx, depth + 1));
  out.strictTransportSecurity = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity(ctx, depth + 1));
  out.xssProtection = (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection(ctx, depth + 1));
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy:ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentSecurityPolicy = "";
  out.override = false;
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions:ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.override = false;
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfigFrameOptions:ResponseHeadersPolicySecurityHeadersConfigFrameOptions
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.frameOption = "";
  out.override = false;
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy:ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.override = false;
  out.referrerPolicy = "";
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity:ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlMaxAgeSec = 0;
  out.includeSubdomains = false;
  out.override = false;
  out.preload = false;
  return out;
}

// aws:cloudfront/ResponseHeadersPolicySecurityHeadersConfigXssProtection:ResponseHeadersPolicySecurityHeadersConfigXssProtection
export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modeBlock = false;
  out.override = false;
  out.protection = false;
  out.reportUri = h.endpoint(ctx, "reportUri");
  return out;
}

// aws:cloudfront/ResponseHeadersPolicyServerTimingHeadersConfig:ResponseHeadersPolicyServerTimingHeadersConfig
export function cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.samplingRate = 0;
  return out;
}

// aws:cloudfront/VpcOriginTimeouts:VpcOriginTimeouts
export function cloudfront_VpcOriginTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:cloudfront/VpcOriginVpcOriginEndpointConfig:VpcOriginVpcOriginEndpointConfig
export function cloudfront_VpcOriginVpcOriginEndpointConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.httpPort = 443;
  out.httpsPort = 443;
  out.name = ctx.name;
  out.originProtocolPolicy = "";
  out.originSslProtocols = (depth > 4 ? {} : T_cloudfront.cloudfront_VpcOriginVpcOriginEndpointConfigOriginSslProtocols(ctx, depth + 1));
  return out;
}

// aws:cloudfront/VpcOriginVpcOriginEndpointConfigOriginSslProtocols:VpcOriginVpcOriginEndpointConfigOriginSslProtocols
export function cloudfront_VpcOriginVpcOriginEndpointConfigOriginSslProtocols(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  out.quantity = 0;
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOrigin:getCachePolicyParametersInCacheKeyAndForwardedToOrigin
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOrigin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookiesConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig(ctx, depth + 1))]);
  out.enableAcceptEncodingBrotli = true;
  out.enableAcceptEncodingGzip = true;
  out.headersConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig(ctx, depth + 1))]);
  out.queryStringsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig:getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieBehavior = "";
  out.cookies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie:getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig:getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerBehavior = "";
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader:getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig:getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryStringBehavior = "";
  out.queryStrings = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString:getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString
export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getOriginRequestPolicyCookiesConfig:getOriginRequestPolicyCookiesConfig
export function cloudfront_getOriginRequestPolicyCookiesConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookieBehavior = "";
  out.cookies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getOriginRequestPolicyCookiesConfigCookie(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getOriginRequestPolicyCookiesConfigCookie:getOriginRequestPolicyCookiesConfigCookie
export function cloudfront_getOriginRequestPolicyCookiesConfigCookie(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getOriginRequestPolicyHeadersConfig:getOriginRequestPolicyHeadersConfig
export function cloudfront_getOriginRequestPolicyHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerBehavior = "";
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getOriginRequestPolicyHeadersConfigHeader(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getOriginRequestPolicyHeadersConfigHeader:getOriginRequestPolicyHeadersConfigHeader
export function cloudfront_getOriginRequestPolicyHeadersConfigHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getOriginRequestPolicyQueryStringsConfig:getOriginRequestPolicyQueryStringsConfig
export function cloudfront_getOriginRequestPolicyQueryStringsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryStringBehavior = "";
  out.queryStrings = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getOriginRequestPolicyQueryStringsConfigQueryString:getOriginRequestPolicyQueryStringsConfigQueryString
export function cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getRealtimeLogConfigEndpoint:getRealtimeLogConfigEndpoint
export function cloudfront_getRealtimeLogConfigEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kinesisStreamConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig(ctx, depth + 1))]);
  out.streamType = "";
  return out;
}

// aws:cloudfront/getRealtimeLogConfigEndpointKinesisStreamConfig:getRealtimeLogConfigEndpointKinesisStreamConfig
export function cloudfront_getRealtimeLogConfigEndpointKinesisStreamConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.streamArn = h.arn(ctx);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCorsConfig:getResponseHeadersPolicyCorsConfig
export function cloudfront_getResponseHeadersPolicyCorsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlAllowCredentials = false;
  out.accessControlAllowHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader(ctx, depth + 1))]);
  out.accessControlAllowMethods = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod(ctx, depth + 1))]);
  out.accessControlAllowOrigins = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin(ctx, depth + 1))]);
  out.accessControlExposeHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader(ctx, depth + 1))]);
  out.accessControlMaxAgeSec = 0;
  out.originOverride = false;
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCorsConfigAccessControlAllowHeader:getResponseHeadersPolicyCorsConfigAccessControlAllowHeader
export function cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCorsConfigAccessControlAllowMethod:getResponseHeadersPolicyCorsConfigAccessControlAllowMethod
export function cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin:getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin
export function cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCorsConfigAccessControlExposeHeader:getResponseHeadersPolicyCorsConfigAccessControlExposeHeader
export function cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCustomHeadersConfig:getResponseHeadersPolicyCustomHeadersConfig
export function cloudfront_getResponseHeadersPolicyCustomHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyCustomHeadersConfigItem:getResponseHeadersPolicyCustomHeadersConfigItem
export function cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.header = "";
  out.override = false;
  out.value = "";
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyRemoveHeadersConfig:getResponseHeadersPolicyRemoveHeadersConfig
export function cloudfront_getResponseHeadersPolicyRemoveHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyRemoveHeadersConfigItem:getResponseHeadersPolicyRemoveHeadersConfigItem
export function cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.header = "";
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfig:getResponseHeadersPolicySecurityHeadersConfig
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentSecurityPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy(ctx, depth + 1))]);
  out.contentTypeOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption(ctx, depth + 1))]);
  out.frameOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption(ctx, depth + 1))]);
  out.referrerPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy(ctx, depth + 1))]);
  out.strictTransportSecurities = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity(ctx, depth + 1))]);
  out.xssProtections = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection(ctx, depth + 1))]);
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy:getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentSecurityPolicy = "";
  out.override = false;
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfigContentTypeOption:getResponseHeadersPolicySecurityHeadersConfigContentTypeOption
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.override = false;
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfigFrameOption:getResponseHeadersPolicySecurityHeadersConfigFrameOption
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.frameOption = "";
  out.override = false;
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy:getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.override = false;
  out.referrerPolicy = "";
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity:getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlMaxAgeSec = 0;
  out.includeSubdomains = false;
  out.override = false;
  out.preload = false;
  return out;
}

// aws:cloudfront/getResponseHeadersPolicySecurityHeadersConfigXssProtection:getResponseHeadersPolicySecurityHeadersConfigXssProtection
export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.modeBlock = false;
  out.override = false;
  out.protection = false;
  out.reportUri = h.endpoint(ctx, "reportUri");
  return out;
}

// aws:cloudfront/getResponseHeadersPolicyServerTimingHeadersConfig:getResponseHeadersPolicyServerTimingHeadersConfig
export function cloudfront_getResponseHeadersPolicyServerTimingHeadersConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.samplingRate = 0;
  return out;
}
