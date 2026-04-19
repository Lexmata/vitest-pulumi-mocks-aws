// GENERATED FILE — do not edit.
// Service: s3   (27 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3 from "../types/s3.js";

// aws:s3/accessPoint:AccessPoint
export function AccessPoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.alias = "";
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketAccountId = (i.bucketAccountId !== undefined ? i.bucketAccountId : h.id(ctx, "bucketAccountId"));
  out.domainName = h.endpoint(ctx, "domainName");
  out.endpoints = {};
  out.hasPublicAccessPolicy = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkOrigin = "";
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.publicAccessBlockConfiguration = (i.publicAccessBlockConfiguration !== undefined ? i.publicAccessBlockConfiguration : (depth > 4 ? {} : T_s3.s3_AccessPointPublicAccessBlockConfiguration(ctx, depth + 1)));
  out.vpcConfiguration = (i.vpcConfiguration !== undefined ? i.vpcConfiguration : (depth > 4 ? {} : T_s3.s3_AccessPointVpcConfiguration(ctx, depth + 1)));
  return out;
}

// aws:s3/accountPublicAccessBlock:AccountPublicAccessBlock
export function AccountPublicAccessBlock(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.blockPublicAcls = (i.blockPublicAcls !== undefined ? i.blockPublicAcls : false);
  out.blockPublicPolicy = (i.blockPublicPolicy !== undefined ? i.blockPublicPolicy : false);
  out.ignorePublicAcls = (i.ignorePublicAcls !== undefined ? i.ignorePublicAcls : false);
  out.restrictPublicBuckets = (i.restrictPublicBuckets !== undefined ? i.restrictPublicBuckets : false);
  return out;
}

// aws:s3/analyticsConfiguration:AnalyticsConfiguration
export function AnalyticsConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_s3.s3_AnalyticsConfigurationFilter(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.storageClassAnalysis = (i.storageClassAnalysis !== undefined ? i.storageClassAnalysis : (depth > 4 ? {} : T_s3.s3_AnalyticsConfigurationStorageClassAnalysis(ctx, depth + 1)));
  return out;
}

// aws:s3/bucket:Bucket
export function Bucket(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accelerationStatus = (i.accelerationStatus !== undefined ? i.accelerationStatus : "");
  out.acl = (i.acl !== undefined ? i.acl : "");
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketDomainName = h.endpoint(ctx, "bucketDomainName");
  out.bucketPrefix = (i.bucketPrefix !== undefined ? i.bucketPrefix : "");
  out.bucketRegionalDomainName = h.endpoint(ctx, "bucketRegionalDomainName");
  out.corsRules = (i.corsRules !== undefined ? i.corsRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketCorsRule(ctx, depth + 1))]));
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.grants = (i.grants !== undefined ? i.grants : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketGrant(ctx, depth + 1))]));
  out.hostedZoneId = (i.hostedZoneId !== undefined ? i.hostedZoneId : "Z0000000000000000000");
  out.lifecycleRules = (i.lifecycleRules !== undefined ? i.lifecycleRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLifecycleRule(ctx, depth + 1))]));
  out.loggings = (i.loggings !== undefined ? i.loggings : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLogging(ctx, depth + 1))]));
  out.objectLockConfiguration = (i.objectLockConfiguration !== undefined ? i.objectLockConfiguration : (depth > 4 ? {} : T_s3.s3_BucketObjectLockConfiguration(ctx, depth + 1)));
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.region = ctx.region;
  out.replicationConfiguration = (i.replicationConfiguration !== undefined ? i.replicationConfiguration : (depth > 4 ? {} : T_s3.s3_BucketReplicationConfiguration(ctx, depth + 1)));
  out.requestPayer = (i.requestPayer !== undefined ? i.requestPayer : "");
  out.serverSideEncryptionConfiguration = (i.serverSideEncryptionConfiguration !== undefined ? i.serverSideEncryptionConfiguration : (depth > 4 ? {} : T_s3.s3_BucketServerSideEncryptionConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versioning = (i.versioning !== undefined ? i.versioning : (depth > 4 ? {} : T_s3.s3_BucketVersioning(ctx, depth + 1)));
  out.website = (i.website !== undefined ? i.website : (depth > 4 ? {} : T_s3.s3_BucketWebsite(ctx, depth + 1)));
  out.websiteDomain = (i.websiteDomain !== undefined ? i.websiteDomain : h.endpoint(ctx, "websiteDomain"));
  out.websiteEndpoint = (i.websiteEndpoint !== undefined ? i.websiteEndpoint : h.endpoint(ctx, "websiteEndpoint"));
  return out;
}

// aws:s3/bucketAccelerateConfigurationV2:BucketAccelerateConfigurationV2
export function BucketAccelerateConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:s3/bucketAclV2:BucketAclV2
export function BucketAclV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlPolicy = (i.accessControlPolicy !== undefined ? i.accessControlPolicy : (depth > 4 ? {} : T_s3.s3_BucketAclV2AccessControlPolicy(ctx, depth + 1)));
  out.acl = (i.acl !== undefined ? i.acl : "");
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  return out;
}

// aws:s3/bucketCorsConfigurationV2:BucketCorsConfigurationV2
export function BucketCorsConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.corsRules = (i.corsRules !== undefined ? i.corsRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketCorsConfigurationV2CorsRule(ctx, depth + 1))]));
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  return out;
}

// aws:s3/bucketIntelligentTieringConfiguration:BucketIntelligentTieringConfiguration
export function BucketIntelligentTieringConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_s3.s3_BucketIntelligentTieringConfigurationFilter(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = (i.status !== undefined ? i.status : "active");
  out.tierings = (i.tierings !== undefined ? i.tierings : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketIntelligentTieringConfigurationTiering(ctx, depth + 1))]));
  return out;
}

// aws:s3/bucketLifecycleConfigurationV2:BucketLifecycleConfigurationV2
export function BucketLifecycleConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2Rule(ctx, depth + 1))]));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2Timeouts(ctx, depth + 1)));
  out.transitionDefaultMinimumObjectSize = (i.transitionDefaultMinimumObjectSize !== undefined ? i.transitionDefaultMinimumObjectSize : "");
  return out;
}

// aws:s3/bucketLoggingV2:BucketLoggingV2
export function BucketLoggingV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.targetBucket = (i.targetBucket !== undefined ? i.targetBucket : "");
  out.targetGrants = (i.targetGrants !== undefined ? i.targetGrants : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLoggingV2TargetGrant(ctx, depth + 1))]));
  out.targetObjectKeyFormat = (i.targetObjectKeyFormat !== undefined ? i.targetObjectKeyFormat : (depth > 4 ? {} : T_s3.s3_BucketLoggingV2TargetObjectKeyFormat(ctx, depth + 1)));
  out.targetPrefix = (i.targetPrefix !== undefined ? i.targetPrefix : "");
  return out;
}

// aws:s3/bucketMetric:BucketMetric
export function BucketMetric(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_s3.s3_BucketMetricFilter(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:s3/bucketNotification:BucketNotification
export function BucketNotification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.eventbridge = (i.eventbridge !== undefined ? i.eventbridge : false);
  out.lambdaFunctions = (i.lambdaFunctions !== undefined ? i.lambdaFunctions : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketNotificationLambdaFunction(ctx, depth + 1))]));
  out.queues = (i.queues !== undefined ? i.queues : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketNotificationQueue(ctx, depth + 1))]));
  out.topics = (i.topics !== undefined ? i.topics : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketNotificationTopic(ctx, depth + 1))]));
  return out;
}

// aws:s3/bucketObject:BucketObject
export function BucketObject(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acl = (i.acl !== undefined ? i.acl : "");
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketKeyEnabled = (i.bucketKeyEnabled !== undefined ? i.bucketKeyEnabled : false);
  out.cacheControl = (i.cacheControl !== undefined ? i.cacheControl : "");
  out.content = (i.content !== undefined ? i.content : "");
  out.contentBase64 = (i.contentBase64 !== undefined ? i.contentBase64 : "");
  out.contentDisposition = (i.contentDisposition !== undefined ? i.contentDisposition : "");
  out.contentEncoding = (i.contentEncoding !== undefined ? i.contentEncoding : "");
  out.contentLanguage = (i.contentLanguage !== undefined ? i.contentLanguage : "");
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.etag = (i.etag !== undefined ? i.etag : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.key = (i.key !== undefined ? i.key : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.metadata = (i.metadata !== undefined ? i.metadata : {});
  out.objectLockLegalHoldStatus = (i.objectLockLegalHoldStatus !== undefined ? i.objectLockLegalHoldStatus : "");
  out.objectLockMode = (i.objectLockMode !== undefined ? i.objectLockMode : "");
  out.objectLockRetainUntilDate = (i.objectLockRetainUntilDate !== undefined ? i.objectLockRetainUntilDate : "");
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : "");
  out.source = (i.source !== undefined ? i.source : h.asset());
  out.sourceHash = (i.sourceHash !== undefined ? i.sourceHash : "");
  out.storageClass = (i.storageClass !== undefined ? i.storageClass : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionId = h.id(ctx, "versionId");
  out.websiteRedirect = (i.websiteRedirect !== undefined ? i.websiteRedirect : "");
  return out;
}

// aws:s3/bucketObjectLockConfigurationV2:BucketObjectLockConfigurationV2
export function BucketObjectLockConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.objectLockEnabled = (i.objectLockEnabled !== undefined ? i.objectLockEnabled : "");
  out.rule = (i.rule !== undefined ? i.rule : (depth > 4 ? {} : T_s3.s3_BucketObjectLockConfigurationV2Rule(ctx, depth + 1)));
  out.token = (i.token !== undefined ? i.token : "");
  return out;
}

// aws:s3/bucketObjectv2:BucketObjectv2
export function BucketObjectv2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acl = (i.acl !== undefined ? i.acl : "");
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketKeyEnabled = (i.bucketKeyEnabled !== undefined ? i.bucketKeyEnabled : false);
  out.cacheControl = (i.cacheControl !== undefined ? i.cacheControl : "");
  out.checksumAlgorithm = (i.checksumAlgorithm !== undefined ? i.checksumAlgorithm : "");
  out.checksumCrc32 = "";
  out.checksumCrc32c = "";
  out.checksumCrc64nvme = "";
  out.checksumSha1 = "";
  out.checksumSha256 = "";
  out.content = (i.content !== undefined ? i.content : "");
  out.contentBase64 = (i.contentBase64 !== undefined ? i.contentBase64 : "");
  out.contentDisposition = (i.contentDisposition !== undefined ? i.contentDisposition : "");
  out.contentEncoding = (i.contentEncoding !== undefined ? i.contentEncoding : "");
  out.contentLanguage = (i.contentLanguage !== undefined ? i.contentLanguage : "");
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.etag = (i.etag !== undefined ? i.etag : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.key = (i.key !== undefined ? i.key : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.metadata = (i.metadata !== undefined ? i.metadata : {});
  out.objectLockLegalHoldStatus = (i.objectLockLegalHoldStatus !== undefined ? i.objectLockLegalHoldStatus : "");
  out.objectLockMode = (i.objectLockMode !== undefined ? i.objectLockMode : "");
  out.objectLockRetainUntilDate = (i.objectLockRetainUntilDate !== undefined ? i.objectLockRetainUntilDate : "");
  out.overrideProvider = (i.overrideProvider !== undefined ? i.overrideProvider : (depth > 4 ? {} : T_s3.s3_BucketObjectv2OverrideProvider(ctx, depth + 1)));
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : "");
  out.source = (i.source !== undefined ? i.source : h.asset());
  out.sourceHash = (i.sourceHash !== undefined ? i.sourceHash : "");
  out.storageClass = (i.storageClass !== undefined ? i.storageClass : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionId = h.id(ctx, "versionId");
  out.websiteRedirect = (i.websiteRedirect !== undefined ? i.websiteRedirect : "");
  return out;
}

// aws:s3/bucketOwnershipControls:BucketOwnershipControls
export function BucketOwnershipControls(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.rule = (i.rule !== undefined ? i.rule : (depth > 4 ? {} : T_s3.s3_BucketOwnershipControlsRule(ctx, depth + 1)));
  return out;
}

// aws:s3/bucketPolicy:BucketPolicy
export function BucketPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock
export function BucketPublicAccessBlock(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockPublicAcls = (i.blockPublicAcls !== undefined ? i.blockPublicAcls : false);
  out.blockPublicPolicy = (i.blockPublicPolicy !== undefined ? i.blockPublicPolicy : false);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.ignorePublicAcls = (i.ignorePublicAcls !== undefined ? i.ignorePublicAcls : false);
  out.restrictPublicBuckets = (i.restrictPublicBuckets !== undefined ? i.restrictPublicBuckets : false);
  return out;
}

// aws:s3/bucketReplicationConfig:BucketReplicationConfig
export function BucketReplicationConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.role = (i.role !== undefined ? i.role : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRule(ctx, depth + 1))]));
  out.token = (i.token !== undefined ? i.token : "");
  return out;
}

// aws:s3/bucketRequestPaymentConfigurationV2:BucketRequestPaymentConfigurationV2
export function BucketRequestPaymentConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.payer = (i.payer !== undefined ? i.payer : "");
  return out;
}

// aws:s3/bucketServerSideEncryptionConfigurationV2:BucketServerSideEncryptionConfigurationV2
export function BucketServerSideEncryptionConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketServerSideEncryptionConfigurationV2Rule(ctx, depth + 1))]));
  return out;
}

// aws:s3/bucketV2:BucketV2
export function BucketV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accelerationStatus = (i.accelerationStatus !== undefined ? i.accelerationStatus : "");
  out.acl = (i.acl !== undefined ? i.acl : "");
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketDomainName = h.endpoint(ctx, "bucketDomainName");
  out.bucketPrefix = (i.bucketPrefix !== undefined ? i.bucketPrefix : "");
  out.bucketRegionalDomainName = h.endpoint(ctx, "bucketRegionalDomainName");
  out.corsRules = (i.corsRules !== undefined ? i.corsRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2CorsRule(ctx, depth + 1))]));
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.grants = (i.grants !== undefined ? i.grants : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2Grant(ctx, depth + 1))]));
  out.hostedZoneId = "Z0000000000000000000";
  out.lifecycleRules = (i.lifecycleRules !== undefined ? i.lifecycleRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2LifecycleRule(ctx, depth + 1))]));
  out.loggings = (i.loggings !== undefined ? i.loggings : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2Logging(ctx, depth + 1))]));
  out.objectLockConfiguration = (i.objectLockConfiguration !== undefined ? i.objectLockConfiguration : (depth > 4 ? {} : T_s3.s3_BucketV2ObjectLockConfiguration(ctx, depth + 1)));
  out.objectLockEnabled = (i.objectLockEnabled !== undefined ? i.objectLockEnabled : false);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.region = ctx.region;
  out.replicationConfigurations = (i.replicationConfigurations !== undefined ? i.replicationConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfiguration(ctx, depth + 1))]));
  out.requestPayer = (i.requestPayer !== undefined ? i.requestPayer : "");
  out.serverSideEncryptionConfigurations = (i.serverSideEncryptionConfigurations !== undefined ? i.serverSideEncryptionConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ServerSideEncryptionConfiguration(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionings = (i.versionings !== undefined ? i.versionings : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2Versioning(ctx, depth + 1))]));
  out.websiteDomain = h.endpoint(ctx, "websiteDomain");
  out.websiteEndpoint = h.endpoint(ctx, "websiteEndpoint");
  out.websites = (i.websites !== undefined ? i.websites : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2Website(ctx, depth + 1))]));
  return out;
}

// aws:s3/bucketVersioningV2:BucketVersioningV2
export function BucketVersioningV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.mfa = (i.mfa !== undefined ? i.mfa : "");
  out.versioningConfiguration = (i.versioningConfiguration !== undefined ? i.versioningConfiguration : (depth > 4 ? {} : T_s3.s3_BucketVersioningV2VersioningConfiguration(ctx, depth + 1)));
  return out;
}

// aws:s3/bucketWebsiteConfigurationV2:BucketWebsiteConfigurationV2
export function BucketWebsiteConfigurationV2(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.errorDocument = (i.errorDocument !== undefined ? i.errorDocument : (depth > 4 ? {} : T_s3.s3_BucketWebsiteConfigurationV2ErrorDocument(ctx, depth + 1)));
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.indexDocument = (i.indexDocument !== undefined ? i.indexDocument : (depth > 4 ? {} : T_s3.s3_BucketWebsiteConfigurationV2IndexDocument(ctx, depth + 1)));
  out.redirectAllRequestsTo = (i.redirectAllRequestsTo !== undefined ? i.redirectAllRequestsTo : (depth > 4 ? {} : T_s3.s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo(ctx, depth + 1)));
  out.routingRuleDetails = (i.routingRuleDetails !== undefined ? i.routingRuleDetails : "");
  out.routingRules = (i.routingRules !== undefined ? i.routingRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketWebsiteConfigurationV2RoutingRule(ctx, depth + 1))]));
  out.websiteDomain = h.endpoint(ctx, "websiteDomain");
  out.websiteEndpoint = h.endpoint(ctx, "websiteEndpoint");
  return out;
}

// aws:s3/directoryBucket:DirectoryBucket
export function DirectoryBucket(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.dataRedundancy = (i.dataRedundancy !== undefined ? i.dataRedundancy : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.location = (i.location !== undefined ? i.location : (depth > 4 ? {} : T_s3.s3_DirectoryBucketLocation(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:s3/inventory:Inventory
export function Inventory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.destination = (i.destination !== undefined ? i.destination : (depth > 4 ? {} : T_s3.s3_InventoryDestination(ctx, depth + 1)));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.filter = (i.filter !== undefined ? i.filter : (depth > 4 ? {} : T_s3.s3_InventoryFilter(ctx, depth + 1)));
  out.includedObjectVersions = (i.includedObjectVersions !== undefined ? i.includedObjectVersions : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.optionalFields = (i.optionalFields !== undefined ? i.optionalFields : (depth > 4 ? [] : [""]));
  out.schedule = (i.schedule !== undefined ? i.schedule : (depth > 4 ? {} : T_s3.s3_InventorySchedule(ctx, depth + 1)));
  return out;
}

// aws:s3/objectCopy:ObjectCopy
export function ObjectCopy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acl = (i.acl !== undefined ? i.acl : "");
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.bucketKeyEnabled = (i.bucketKeyEnabled !== undefined ? i.bucketKeyEnabled : false);
  out.cacheControl = (i.cacheControl !== undefined ? i.cacheControl : "");
  out.checksumAlgorithm = (i.checksumAlgorithm !== undefined ? i.checksumAlgorithm : "");
  out.checksumCrc32 = "";
  out.checksumCrc32c = "";
  out.checksumCrc64nvme = "";
  out.checksumSha1 = "";
  out.checksumSha256 = "";
  out.contentDisposition = (i.contentDisposition !== undefined ? i.contentDisposition : "");
  out.contentEncoding = (i.contentEncoding !== undefined ? i.contentEncoding : "");
  out.contentLanguage = (i.contentLanguage !== undefined ? i.contentLanguage : "");
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.copyIfMatch = (i.copyIfMatch !== undefined ? i.copyIfMatch : "");
  out.copyIfModifiedSince = (i.copyIfModifiedSince !== undefined ? i.copyIfModifiedSince : "");
  out.copyIfNoneMatch = (i.copyIfNoneMatch !== undefined ? i.copyIfNoneMatch : "");
  out.copyIfUnmodifiedSince = (i.copyIfUnmodifiedSince !== undefined ? i.copyIfUnmodifiedSince : "");
  out.customerAlgorithm = (i.customerAlgorithm !== undefined ? i.customerAlgorithm : "");
  out.customerKey = (i.customerKey !== undefined ? i.customerKey : "");
  out.customerKeyMd5 = (i.customerKeyMd5 !== undefined ? i.customerKeyMd5 : "");
  out.etag = "";
  out.expectedBucketOwner = (i.expectedBucketOwner !== undefined ? i.expectedBucketOwner : "");
  out.expectedSourceBucketOwner = (i.expectedSourceBucketOwner !== undefined ? i.expectedSourceBucketOwner : "");
  out.expiration = "";
  out.expires = (i.expires !== undefined ? i.expires : "");
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.grants = (i.grants !== undefined ? i.grants : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_ObjectCopyGrant(ctx, depth + 1))]));
  out.key = (i.key !== undefined ? i.key : "");
  out.kmsEncryptionContext = (i.kmsEncryptionContext !== undefined ? i.kmsEncryptionContext : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lastModified = h.timestamp();
  out.metadata = (i.metadata !== undefined ? i.metadata : {});
  out.metadataDirective = (i.metadataDirective !== undefined ? i.metadataDirective : "");
  out.objectLockLegalHoldStatus = (i.objectLockLegalHoldStatus !== undefined ? i.objectLockLegalHoldStatus : "");
  out.objectLockMode = (i.objectLockMode !== undefined ? i.objectLockMode : "");
  out.objectLockRetainUntilDate = (i.objectLockRetainUntilDate !== undefined ? i.objectLockRetainUntilDate : "");
  out.overrideProvider = (i.overrideProvider !== undefined ? i.overrideProvider : (depth > 4 ? {} : T_s3.s3_ObjectCopyOverrideProvider(ctx, depth + 1)));
  out.requestCharged = false;
  out.requestPayer = (i.requestPayer !== undefined ? i.requestPayer : "");
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : "");
  out.source = (i.source !== undefined ? i.source : "");
  out.sourceCustomerAlgorithm = (i.sourceCustomerAlgorithm !== undefined ? i.sourceCustomerAlgorithm : "");
  out.sourceCustomerKey = (i.sourceCustomerKey !== undefined ? i.sourceCustomerKey : "");
  out.sourceCustomerKeyMd5 = (i.sourceCustomerKeyMd5 !== undefined ? i.sourceCustomerKeyMd5 : "");
  out.sourceVersionId = h.id(ctx, "sourceVersionId");
  out.storageClass = (i.storageClass !== undefined ? i.storageClass : "");
  out.taggingDirective = (i.taggingDirective !== undefined ? i.taggingDirective : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionId = h.id(ctx, "versionId");
  out.websiteRedirect = (i.websiteRedirect !== undefined ? i.websiteRedirect : "");
  return out;
}
