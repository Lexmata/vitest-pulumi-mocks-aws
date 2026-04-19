// GENERATED FILE — do not edit.
// Service: cloudfront   (18 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudfront from "../types/cloudfront.js";

// aws:cloudfront/cachePolicy:CachePolicy
export function CachePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.defaultTtl = (i.defaultTtl !== undefined ? i.defaultTtl : 0);
  out.etag = "";
  out.maxTtl = (i.maxTtl !== undefined ? i.maxTtl : 0);
  out.minTtl = (i.minTtl !== undefined ? i.minTtl : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parametersInCacheKeyAndForwardedToOrigin = (i.parametersInCacheKeyAndForwardedToOrigin !== undefined ? i.parametersInCacheKeyAndForwardedToOrigin : (depth > 4 ? {} : T_cloudfront.cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/continuousDeploymentPolicy:ContinuousDeploymentPolicy
export function ContinuousDeploymentPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.etag = "";
  out.lastModifiedTime = "";
  out.stagingDistributionDnsNames = (i.stagingDistributionDnsNames !== undefined ? i.stagingDistributionDnsNames : (depth > 4 ? {} : T_cloudfront.cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames(ctx, depth + 1)));
  out.trafficConfig = (i.trafficConfig !== undefined ? i.trafficConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_ContinuousDeploymentPolicyTrafficConfig(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/distribution:Distribution
export function Distribution(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliases = (i.aliases !== undefined ? i.aliases : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.continuousDeploymentPolicyId = (i.continuousDeploymentPolicyId !== undefined ? i.continuousDeploymentPolicyId : h.id(ctx, "continuousDeploymentPolicyId"));
  out.customErrorResponses = (i.customErrorResponses !== undefined ? i.customErrorResponses : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionCustomErrorResponse(ctx, depth + 1))]));
  out.defaultCacheBehavior = (i.defaultCacheBehavior !== undefined ? i.defaultCacheBehavior : (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionDefaultCacheBehavior(ctx, depth + 1)));
  out.defaultRootObject = (i.defaultRootObject !== undefined ? i.defaultRootObject : "");
  out.domainName = h.endpoint(ctx, "domainName");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.etag = "";
  out.hostedZoneId = "Z0000000000000000000";
  out.httpVersion = (i.httpVersion !== undefined ? i.httpVersion : "");
  out.inProgressValidationBatches = 0;
  out.isIpv6Enabled = (i.isIpv6Enabled !== undefined ? i.isIpv6Enabled : true);
  out.lastModifiedTime = "";
  out.loggingConfig = (i.loggingConfig !== undefined ? i.loggingConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionLoggingConfig(ctx, depth + 1)));
  out.orderedCacheBehaviors = (i.orderedCacheBehaviors !== undefined ? i.orderedCacheBehaviors : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrderedCacheBehavior(ctx, depth + 1))]));
  out.originGroups = (i.originGroups !== undefined ? i.originGroups : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOriginGroup(ctx, depth + 1))]));
  out.origins = (i.origins !== undefined ? i.origins : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionOrigin(ctx, depth + 1))]));
  out.priceClass = (i.priceClass !== undefined ? i.priceClass : "");
  out.restrictions = (i.restrictions !== undefined ? i.restrictions : (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionRestrictions(ctx, depth + 1)));
  out.retainOnDelete = (i.retainOnDelete !== undefined ? i.retainOnDelete : false);
  out.staging = (i.staging !== undefined ? i.staging : false);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trustedKeyGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionTrustedKeyGroup(ctx, depth + 1))]);
  out.trustedSigners = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_DistributionTrustedSigner(ctx, depth + 1))]);
  out.viewerCertificate = (i.viewerCertificate !== undefined ? i.viewerCertificate : (depth > 4 ? {} : T_cloudfront.cloudfront_DistributionViewerCertificate(ctx, depth + 1)));
  out.waitForDeployment = (i.waitForDeployment !== undefined ? i.waitForDeployment : false);
  out.webAclId = (i.webAclId !== undefined ? i.webAclId : h.id(ctx, "webAclId"));
  return out;
}

// aws:cloudfront/fieldLevelEncryptionConfig:FieldLevelEncryptionConfig
export function FieldLevelEncryptionConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.contentTypeProfileConfig = (i.contentTypeProfileConfig !== undefined ? i.contentTypeProfileConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig(ctx, depth + 1)));
  out.etag = "";
  out.queryArgProfileConfig = (i.queryArgProfileConfig !== undefined ? i.queryArgProfileConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/fieldLevelEncryptionProfile:FieldLevelEncryptionProfile
export function FieldLevelEncryptionProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.encryptionEntities = (i.encryptionEntities !== undefined ? i.encryptionEntities : (depth > 4 ? {} : T_cloudfront.cloudfront_FieldLevelEncryptionProfileEncryptionEntities(ctx, depth + 1)));
  out.etag = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:cloudfront/function:Function
export function Function(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.code = (i.code !== undefined ? i.code : "");
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.etag = "";
  out.keyValueStoreAssociations = (i.keyValueStoreAssociations !== undefined ? i.keyValueStoreAssociations : (depth > 4 ? [] : [""]));
  out.liveStageEtag = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.publish = (i.publish !== undefined ? i.publish : false);
  out.runtime = (i.runtime !== undefined ? i.runtime : "");
  out.status = "active";
  return out;
}

// aws:cloudfront/keyGroup:KeyGroup
export function KeyGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.etag = "";
  out.items = (i.items !== undefined ? i.items : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:cloudfront/keyValueStore:KeyValueStore
export function KeyValueStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.etag = "";
  out.lastModifiedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_cloudfront.cloudfront_KeyValueStoreTimeouts(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/keyvaluestoreKey:KeyvaluestoreKey
export function KeyvaluestoreKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = (i.key !== undefined ? i.key : "");
  out.keyValueStoreArn = (i.keyValueStoreArn !== undefined ? i.keyValueStoreArn : h.arn(ctx));
  out.totalSizeInBytes = 8;
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:cloudfront/keyvaluestoreKeysExclusive:KeyvaluestoreKeysExclusive
export function KeyvaluestoreKeysExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyValueStoreArn = (i.keyValueStoreArn !== undefined ? i.keyValueStoreArn : h.arn(ctx));
  out.maxBatchSize = (i.maxBatchSize !== undefined ? i.maxBatchSize : 8);
  out.resourceKeyValuePairs = (i.resourceKeyValuePairs !== undefined ? i.resourceKeyValuePairs : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudfront.cloudfront_KeyvaluestoreKeysExclusiveResourceKeyValuePair(ctx, depth + 1))]));
  out.totalSizeInBytes = 8;
  return out;
}

// aws:cloudfront/monitoringSubscription:MonitoringSubscription
export function MonitoringSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.distributionId = (i.distributionId !== undefined ? i.distributionId : h.id(ctx, "distributionId"));
  out.monitoringSubscription = (i.monitoringSubscription !== undefined ? i.monitoringSubscription : (depth > 4 ? {} : T_cloudfront.cloudfront_MonitoringSubscriptionMonitoringSubscription(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/originAccessControl:OriginAccessControl
export function OriginAccessControl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.etag = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.originAccessControlOriginType = (i.originAccessControlOriginType !== undefined ? i.originAccessControlOriginType : "");
  out.signingBehavior = (i.signingBehavior !== undefined ? i.signingBehavior : "");
  out.signingProtocol = (i.signingProtocol !== undefined ? i.signingProtocol : "");
  return out;
}

// aws:cloudfront/originAccessIdentity:OriginAccessIdentity
export function OriginAccessIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.cloudfrontAccessIdentityPath = "";
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.etag = "";
  out.iamArn = h.arn(ctx);
  out.s3CanonicalUserId = h.id(ctx, "s3CanonicalUserId");
  return out;
}

// aws:cloudfront/originRequestPolicy:OriginRequestPolicy
export function OriginRequestPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.cookiesConfig = (i.cookiesConfig !== undefined ? i.cookiesConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_OriginRequestPolicyCookiesConfig(ctx, depth + 1)));
  out.etag = "";
  out.headersConfig = (i.headersConfig !== undefined ? i.headersConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_OriginRequestPolicyHeadersConfig(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.queryStringsConfig = (i.queryStringsConfig !== undefined ? i.queryStringsConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_OriginRequestPolicyQueryStringsConfig(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/publicKey:PublicKey
export function PublicKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.callerReference = "";
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.encodedKey = (i.encodedKey !== undefined ? i.encodedKey : "");
  out.etag = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  return out;
}

// aws:cloudfront/realtimeLogConfig:RealtimeLogConfig
export function RealtimeLogConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.endpoint = (i.endpoint !== undefined ? i.endpoint : (depth > 4 ? {} : T_cloudfront.cloudfront_RealtimeLogConfigEndpoint(ctx, depth + 1)));
  out.fields = (i.fields !== undefined ? i.fields : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.samplingRate = (i.samplingRate !== undefined ? i.samplingRate : 0);
  return out;
}

// aws:cloudfront/responseHeadersPolicy:ResponseHeadersPolicy
export function ResponseHeadersPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.corsConfig = (i.corsConfig !== undefined ? i.corsConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCorsConfig(ctx, depth + 1)));
  out.customHeadersConfig = (i.customHeadersConfig !== undefined ? i.customHeadersConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyCustomHeadersConfig(ctx, depth + 1)));
  out.etag = (i.etag !== undefined ? i.etag : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.removeHeadersConfig = (i.removeHeadersConfig !== undefined ? i.removeHeadersConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyRemoveHeadersConfig(ctx, depth + 1)));
  out.securityHeadersConfig = (i.securityHeadersConfig !== undefined ? i.securityHeadersConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicySecurityHeadersConfig(ctx, depth + 1)));
  out.serverTimingHeadersConfig = (i.serverTimingHeadersConfig !== undefined ? i.serverTimingHeadersConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig(ctx, depth + 1)));
  return out;
}

// aws:cloudfront/vpcOrigin:VpcOrigin
export function VpcOrigin(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.etag = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_cloudfront.cloudfront_VpcOriginTimeouts(ctx, depth + 1)));
  out.vpcOriginEndpointConfig = (i.vpcOriginEndpointConfig !== undefined ? i.vpcOriginEndpointConfig : (depth > 4 ? {} : T_cloudfront.cloudfront_VpcOriginVpcOriginEndpointConfig(ctx, depth + 1)));
  return out;
}
