// GENERATED FILE — do not edit.
// Service: s3   (124 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3 from "./s3.js";

// aws:s3/AccessPointPublicAccessBlockConfiguration:AccessPointPublicAccessBlockConfiguration
export function s3_AccessPointPublicAccessBlockConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockPublicAcls = false;
  out.blockPublicPolicy = false;
  out.ignorePublicAcls = false;
  out.restrictPublicBuckets = false;
  return out;
}

// aws:s3/AccessPointVpcConfiguration:AccessPointVpcConfiguration
export function s3_AccessPointVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:s3/AnalyticsConfigurationFilter:AnalyticsConfigurationFilter
export function s3_AnalyticsConfigurationFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/AnalyticsConfigurationStorageClassAnalysis:AnalyticsConfigurationStorageClassAnalysis
export function s3_AnalyticsConfigurationStorageClassAnalysis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataExport = (depth > 4 ? {} : T_s3.s3_AnalyticsConfigurationStorageClassAnalysisDataExport(ctx, depth + 1));
  return out;
}

// aws:s3/AnalyticsConfigurationStorageClassAnalysisDataExport:AnalyticsConfigurationStorageClassAnalysisDataExport
export function s3_AnalyticsConfigurationStorageClassAnalysisDataExport(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = (depth > 4 ? {} : T_s3.s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination(ctx, depth + 1));
  out.outputSchemaVersion = "";
  return out;
}

// aws:s3/AnalyticsConfigurationStorageClassAnalysisDataExportDestination:AnalyticsConfigurationStorageClassAnalysisDataExportDestination
export function s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketDestination = (depth > 4 ? {} : T_s3.s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination(ctx, depth + 1));
  return out;
}

// aws:s3/AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination:AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination
export function s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketAccountId = h.id(ctx, "bucketAccountId");
  out.bucketArn = h.arn(ctx);
  out.format = "";
  out.prefix = "";
  return out;
}

// aws:s3/BucketAclV2AccessControlPolicy:BucketAclV2AccessControlPolicy
export function s3_BucketAclV2AccessControlPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grants = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketAclV2AccessControlPolicyGrant(ctx, depth + 1))]);
  out.owner = (depth > 4 ? {} : T_s3.s3_BucketAclV2AccessControlPolicyOwner(ctx, depth + 1));
  return out;
}

// aws:s3/BucketAclV2AccessControlPolicyGrant:BucketAclV2AccessControlPolicyGrant
export function s3_BucketAclV2AccessControlPolicyGrant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grantee = (depth > 4 ? {} : T_s3.s3_BucketAclV2AccessControlPolicyGrantGrantee(ctx, depth + 1));
  out.permission = "";
  return out;
}

// aws:s3/BucketAclV2AccessControlPolicyGrantGrantee:BucketAclV2AccessControlPolicyGrantGrantee
export function s3_BucketAclV2AccessControlPolicyGrantGrantee(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayName = "";
  out.emailAddress = "";
  out.id = h.id(ctx, "id");
  out.type = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:s3/BucketAclV2AccessControlPolicyOwner:BucketAclV2AccessControlPolicyOwner
export function s3_BucketAclV2AccessControlPolicyOwner(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayName = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:s3/BucketCorsConfigurationV2CorsRule:BucketCorsConfigurationV2CorsRule
export function s3_BucketCorsConfigurationV2CorsRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedHeaders = (depth > 4 ? [] : [""]);
  out.allowedMethods = (depth > 4 ? [] : [""]);
  out.allowedOrigins = (depth > 4 ? [] : [""]);
  out.exposeHeaders = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.maxAgeSeconds = 0;
  return out;
}

// aws:s3/BucketCorsRule:BucketCorsRule
export function s3_BucketCorsRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedHeaders = (depth > 4 ? [] : [""]);
  out.allowedMethods = (depth > 4 ? [] : [""]);
  out.allowedOrigins = (depth > 4 ? [] : [""]);
  out.exposeHeaders = (depth > 4 ? [] : [""]);
  out.maxAgeSeconds = 0;
  return out;
}

// aws:s3/BucketGrant:BucketGrant
export function s3_BucketGrant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.permissions = (depth > 4 ? [] : [""]);
  out.type = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:s3/BucketIntelligentTieringConfigurationFilter:BucketIntelligentTieringConfigurationFilter
export function s3_BucketIntelligentTieringConfigurationFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/BucketIntelligentTieringConfigurationTiering:BucketIntelligentTieringConfigurationTiering
export function s3_BucketIntelligentTieringConfigurationTiering(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessTier = "";
  out.days = 0;
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2Rule:BucketLifecycleConfigurationV2Rule
export function s3_BucketLifecycleConfigurationV2Rule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abortIncompleteMultipartUpload = (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload(ctx, depth + 1));
  out.expiration = (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleExpiration(ctx, depth + 1));
  out.filter = (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleFilter(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.noncurrentVersionExpiration = (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration(ctx, depth + 1));
  out.noncurrentVersionTransitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition(ctx, depth + 1))]);
  out.prefix = "";
  out.status = "active";
  out.transitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleTransition(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload:BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload
export function s3_BucketLifecycleConfigurationV2RuleAbortIncompleteMultipartUpload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.daysAfterInitiation = 0;
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleExpiration:BucketLifecycleConfigurationV2RuleExpiration
export function s3_BucketLifecycleConfigurationV2RuleExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.expiredObjectDeleteMarker = false;
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleFilter:BucketLifecycleConfigurationV2RuleFilter
export function s3_BucketLifecycleConfigurationV2RuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.and = (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleFilterAnd(ctx, depth + 1));
  out.objectSizeGreaterThan = 8;
  out.objectSizeLessThan = 8;
  out.prefix = "";
  out.tag = (depth > 4 ? {} : T_s3.s3_BucketLifecycleConfigurationV2RuleFilterTag(ctx, depth + 1));
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleFilterAnd:BucketLifecycleConfigurationV2RuleFilterAnd
export function s3_BucketLifecycleConfigurationV2RuleFilterAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.objectSizeGreaterThan = 8;
  out.objectSizeLessThan = 8;
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleFilterTag:BucketLifecycleConfigurationV2RuleFilterTag
export function s3_BucketLifecycleConfigurationV2RuleFilterTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration:BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration
export function s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.newerNoncurrentVersions = 0;
  out.noncurrentDays = 0;
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition:BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition
export function s3_BucketLifecycleConfigurationV2RuleNoncurrentVersionTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.newerNoncurrentVersions = 0;
  out.noncurrentDays = 0;
  out.storageClass = "";
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2RuleTransition:BucketLifecycleConfigurationV2RuleTransition
export function s3_BucketLifecycleConfigurationV2RuleTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.storageClass = "";
  return out;
}

// aws:s3/BucketLifecycleConfigurationV2Timeouts:BucketLifecycleConfigurationV2Timeouts
export function s3_BucketLifecycleConfigurationV2Timeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:s3/BucketLifecycleRule:BucketLifecycleRule
export function s3_BucketLifecycleRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abortIncompleteMultipartUploadDays = 0;
  out.enabled = true;
  out.expiration = (depth > 4 ? {} : T_s3.s3_BucketLifecycleRuleExpiration(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.noncurrentVersionExpiration = (depth > 4 ? {} : T_s3.s3_BucketLifecycleRuleNoncurrentVersionExpiration(ctx, depth + 1));
  out.noncurrentVersionTransitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLifecycleRuleNoncurrentVersionTransition(ctx, depth + 1))]);
  out.prefix = "";
  out.tags = {};
  out.transitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketLifecycleRuleTransition(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketLifecycleRuleExpiration:BucketLifecycleRuleExpiration
export function s3_BucketLifecycleRuleExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.expiredObjectDeleteMarker = false;
  return out;
}

// aws:s3/BucketLifecycleRuleNoncurrentVersionExpiration:BucketLifecycleRuleNoncurrentVersionExpiration
export function s3_BucketLifecycleRuleNoncurrentVersionExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  return out;
}

// aws:s3/BucketLifecycleRuleNoncurrentVersionTransition:BucketLifecycleRuleNoncurrentVersionTransition
export function s3_BucketLifecycleRuleNoncurrentVersionTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  out.storageClass = "";
  return out;
}

// aws:s3/BucketLifecycleRuleTransition:BucketLifecycleRuleTransition
export function s3_BucketLifecycleRuleTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.storageClass = "";
  return out;
}

// aws:s3/BucketLogging:BucketLogging
export function s3_BucketLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetBucket = "";
  out.targetPrefix = "";
  return out;
}

// aws:s3/BucketLoggingV2TargetGrant:BucketLoggingV2TargetGrant
export function s3_BucketLoggingV2TargetGrant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.grantee = (depth > 4 ? {} : T_s3.s3_BucketLoggingV2TargetGrantGrantee(ctx, depth + 1));
  out.permission = "";
  return out;
}

// aws:s3/BucketLoggingV2TargetGrantGrantee:BucketLoggingV2TargetGrantGrantee
export function s3_BucketLoggingV2TargetGrantGrantee(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayName = "";
  out.emailAddress = "";
  out.id = h.id(ctx, "id");
  out.type = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:s3/BucketLoggingV2TargetObjectKeyFormat:BucketLoggingV2TargetObjectKeyFormat
export function s3_BucketLoggingV2TargetObjectKeyFormat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionedPrefix = (depth > 4 ? {} : T_s3.s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix(ctx, depth + 1));
  out.simplePrefix = (depth > 4 ? {} : T_s3.s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix(ctx, depth + 1));
  return out;
}

// aws:s3/BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix:BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix
export function s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionDateSource = "";
  return out;
}

// aws:s3/BucketLoggingV2TargetObjectKeyFormatSimplePrefix:BucketLoggingV2TargetObjectKeyFormatSimplePrefix
export function s3_BucketLoggingV2TargetObjectKeyFormatSimplePrefix(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:s3/BucketMetricFilter:BucketMetricFilter
export function s3_BucketMetricFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPoint = "";
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/BucketNotificationLambdaFunction:BucketNotificationLambdaFunction
export function s3_BucketNotificationLambdaFunction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.events = (depth > 4 ? [] : [""]);
  out.filterPrefix = "";
  out.filterSuffix = "";
  out.id = h.id(ctx, "id");
  out.lambdaFunctionArn = h.arn(ctx);
  return out;
}

// aws:s3/BucketNotificationQueue:BucketNotificationQueue
export function s3_BucketNotificationQueue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.events = (depth > 4 ? [] : [""]);
  out.filterPrefix = "";
  out.filterSuffix = "";
  out.id = h.id(ctx, "id");
  out.queueArn = h.arn(ctx);
  return out;
}

// aws:s3/BucketNotificationTopic:BucketNotificationTopic
export function s3_BucketNotificationTopic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.events = (depth > 4 ? [] : [""]);
  out.filterPrefix = "";
  out.filterSuffix = "";
  out.id = h.id(ctx, "id");
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:s3/BucketObjectLockConfiguration:BucketObjectLockConfiguration
export function s3_BucketObjectLockConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.objectLockEnabled = "";
  out.rule = (depth > 4 ? {} : T_s3.s3_BucketObjectLockConfigurationRule(ctx, depth + 1));
  return out;
}

// aws:s3/BucketObjectLockConfigurationRule:BucketObjectLockConfigurationRule
export function s3_BucketObjectLockConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultRetention = (depth > 4 ? {} : T_s3.s3_BucketObjectLockConfigurationRuleDefaultRetention(ctx, depth + 1));
  return out;
}

// aws:s3/BucketObjectLockConfigurationRuleDefaultRetention:BucketObjectLockConfigurationRuleDefaultRetention
export function s3_BucketObjectLockConfigurationRuleDefaultRetention(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  out.mode = "";
  out.years = 0;
  return out;
}

// aws:s3/BucketObjectLockConfigurationV2Rule:BucketObjectLockConfigurationV2Rule
export function s3_BucketObjectLockConfigurationV2Rule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultRetention = (depth > 4 ? {} : T_s3.s3_BucketObjectLockConfigurationV2RuleDefaultRetention(ctx, depth + 1));
  return out;
}

// aws:s3/BucketObjectLockConfigurationV2RuleDefaultRetention:BucketObjectLockConfigurationV2RuleDefaultRetention
export function s3_BucketObjectLockConfigurationV2RuleDefaultRetention(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  out.mode = "";
  out.years = 0;
  return out;
}

// aws:s3/BucketObjectv2OverrideProvider:BucketObjectv2OverrideProvider
export function s3_BucketObjectv2OverrideProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTags = (depth > 4 ? {} : T_s3.s3_BucketObjectv2OverrideProviderDefaultTags(ctx, depth + 1));
  return out;
}

// aws:s3/BucketObjectv2OverrideProviderDefaultTags:BucketObjectv2OverrideProviderDefaultTags
export function s3_BucketObjectv2OverrideProviderDefaultTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tags = {};
  return out;
}

// aws:s3/BucketOwnershipControlsRule:BucketOwnershipControlsRule
export function s3_BucketOwnershipControlsRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.objectOwnership = "";
  return out;
}

// aws:s3/BucketReplicationConfigRule:BucketReplicationConfigRule
export function s3_BucketReplicationConfigRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteMarkerReplication = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDeleteMarkerReplication(ctx, depth + 1));
  out.destination = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestination(ctx, depth + 1));
  out.existingObjectReplication = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleExistingObjectReplication(ctx, depth + 1));
  out.filter = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleFilter(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.prefix = "";
  out.priority = 0;
  out.sourceSelectionCriteria = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleSourceSelectionCriteria(ctx, depth + 1));
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigRuleDeleteMarkerReplication:BucketReplicationConfigRuleDeleteMarkerReplication
export function s3_BucketReplicationConfigRuleDeleteMarkerReplication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestination:BucketReplicationConfigRuleDestination
export function s3_BucketReplicationConfigRuleDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlTranslation = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestinationAccessControlTranslation(ctx, depth + 1));
  out.account = "";
  out.bucket = ctx.name;
  out.encryptionConfiguration = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration(ctx, depth + 1));
  out.metrics = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestinationMetrics(ctx, depth + 1));
  out.replicationTime = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestinationReplicationTime(ctx, depth + 1));
  out.storageClass = "";
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestinationAccessControlTranslation:BucketReplicationConfigRuleDestinationAccessControlTranslation
export function s3_BucketReplicationConfigRuleDestinationAccessControlTranslation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.owner = ctx.accountId;
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestinationEncryptionConfiguration:BucketReplicationConfigRuleDestinationEncryptionConfiguration
export function s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replicaKmsKeyId = h.id(ctx, "replicaKmsKeyId");
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestinationMetrics:BucketReplicationConfigRuleDestinationMetrics
export function s3_BucketReplicationConfigRuleDestinationMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventThreshold = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold(ctx, depth + 1));
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestinationMetricsEventThreshold:BucketReplicationConfigRuleDestinationMetricsEventThreshold
export function s3_BucketReplicationConfigRuleDestinationMetricsEventThreshold(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minutes = 0;
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestinationReplicationTime:BucketReplicationConfigRuleDestinationReplicationTime
export function s3_BucketReplicationConfigRuleDestinationReplicationTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  out.time = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleDestinationReplicationTimeTime(ctx, depth + 1));
  return out;
}

// aws:s3/BucketReplicationConfigRuleDestinationReplicationTimeTime:BucketReplicationConfigRuleDestinationReplicationTimeTime
export function s3_BucketReplicationConfigRuleDestinationReplicationTimeTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minutes = 0;
  return out;
}

// aws:s3/BucketReplicationConfigRuleExistingObjectReplication:BucketReplicationConfigRuleExistingObjectReplication
export function s3_BucketReplicationConfigRuleExistingObjectReplication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigRuleFilter:BucketReplicationConfigRuleFilter
export function s3_BucketReplicationConfigRuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.and = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleFilterAnd(ctx, depth + 1));
  out.prefix = "";
  out.tag = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleFilterTag(ctx, depth + 1));
  return out;
}

// aws:s3/BucketReplicationConfigRuleFilterAnd:BucketReplicationConfigRuleFilterAnd
export function s3_BucketReplicationConfigRuleFilterAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/BucketReplicationConfigRuleFilterTag:BucketReplicationConfigRuleFilterTag
export function s3_BucketReplicationConfigRuleFilterTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:s3/BucketReplicationConfigRuleSourceSelectionCriteria:BucketReplicationConfigRuleSourceSelectionCriteria
export function s3_BucketReplicationConfigRuleSourceSelectionCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replicaModifications = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications(ctx, depth + 1));
  out.sseKmsEncryptedObjects = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects(ctx, depth + 1));
  return out;
}

// aws:s3/BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications:BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications
export function s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects:BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects
export function s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfiguration:BucketReplicationConfiguration
export function s3_BucketReplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.role = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRule(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketReplicationConfigurationRule:BucketReplicationConfigurationRule
export function s3_BucketReplicationConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteMarkerReplicationStatus = "";
  out.destination = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleDestination(ctx, depth + 1));
  out.filter = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleFilter(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.prefix = "";
  out.priority = 0;
  out.sourceSelectionCriteria = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleSourceSelectionCriteria(ctx, depth + 1));
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleDestination:BucketReplicationConfigurationRuleDestination
export function s3_BucketReplicationConfigurationRuleDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlTranslation = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation(ctx, depth + 1));
  out.accountId = ctx.accountId;
  out.bucket = ctx.name;
  out.metrics = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleDestinationMetrics(ctx, depth + 1));
  out.replicaKmsKeyId = h.id(ctx, "replicaKmsKeyId");
  out.replicationTime = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleDestinationReplicationTime(ctx, depth + 1));
  out.storageClass = "";
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleDestinationAccessControlTranslation:BucketReplicationConfigurationRuleDestinationAccessControlTranslation
export function s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.owner = ctx.accountId;
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleDestinationMetrics:BucketReplicationConfigurationRuleDestinationMetrics
export function s3_BucketReplicationConfigurationRuleDestinationMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minutes = 0;
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleDestinationReplicationTime:BucketReplicationConfigurationRuleDestinationReplicationTime
export function s3_BucketReplicationConfigurationRuleDestinationReplicationTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minutes = 0;
  out.status = "active";
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleFilter:BucketReplicationConfigurationRuleFilter
export function s3_BucketReplicationConfigurationRuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleSourceSelectionCriteria:BucketReplicationConfigurationRuleSourceSelectionCriteria
export function s3_BucketReplicationConfigurationRuleSourceSelectionCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sseKmsEncryptedObjects = (depth > 4 ? {} : T_s3.s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects(ctx, depth + 1));
  return out;
}

// aws:s3/BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects:BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects
export function s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3/BucketServerSideEncryptionConfiguration:BucketServerSideEncryptionConfiguration
export function s3_BucketServerSideEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rule = (depth > 4 ? {} : T_s3.s3_BucketServerSideEncryptionConfigurationRule(ctx, depth + 1));
  return out;
}

// aws:s3/BucketServerSideEncryptionConfigurationRule:BucketServerSideEncryptionConfigurationRule
export function s3_BucketServerSideEncryptionConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyServerSideEncryptionByDefault = (depth > 4 ? {} : T_s3.s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault(ctx, depth + 1));
  out.bucketKeyEnabled = false;
  return out;
}

// aws:s3/BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault:BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault
export function s3_BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsMasterKeyId = h.id(ctx, "kmsMasterKeyId");
  out.sseAlgorithm = "";
  return out;
}

// aws:s3/BucketServerSideEncryptionConfigurationV2Rule:BucketServerSideEncryptionConfigurationV2Rule
export function s3_BucketServerSideEncryptionConfigurationV2Rule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyServerSideEncryptionByDefault = (depth > 4 ? {} : T_s3.s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault(ctx, depth + 1));
  out.bucketKeyEnabled = false;
  return out;
}

// aws:s3/BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault:BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault
export function s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsMasterKeyId = h.id(ctx, "kmsMasterKeyId");
  out.sseAlgorithm = "";
  return out;
}

// aws:s3/BucketV2CorsRule:BucketV2CorsRule
export function s3_BucketV2CorsRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedHeaders = (depth > 4 ? [] : [""]);
  out.allowedMethods = (depth > 4 ? [] : [""]);
  out.allowedOrigins = (depth > 4 ? [] : [""]);
  out.exposeHeaders = (depth > 4 ? [] : [""]);
  out.maxAgeSeconds = 0;
  return out;
}

// aws:s3/BucketV2Grant:BucketV2Grant
export function s3_BucketV2Grant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.permissions = (depth > 4 ? [] : [""]);
  out.type = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:s3/BucketV2LifecycleRule:BucketV2LifecycleRule
export function s3_BucketV2LifecycleRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abortIncompleteMultipartUploadDays = 0;
  out.enabled = true;
  out.expirations = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2LifecycleRuleExpiration(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.noncurrentVersionExpirations = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2LifecycleRuleNoncurrentVersionExpiration(ctx, depth + 1))]);
  out.noncurrentVersionTransitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2LifecycleRuleNoncurrentVersionTransition(ctx, depth + 1))]);
  out.prefix = "";
  out.tags = {};
  out.transitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2LifecycleRuleTransition(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketV2LifecycleRuleExpiration:BucketV2LifecycleRuleExpiration
export function s3_BucketV2LifecycleRuleExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.expiredObjectDeleteMarker = false;
  return out;
}

// aws:s3/BucketV2LifecycleRuleNoncurrentVersionExpiration:BucketV2LifecycleRuleNoncurrentVersionExpiration
export function s3_BucketV2LifecycleRuleNoncurrentVersionExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  return out;
}

// aws:s3/BucketV2LifecycleRuleNoncurrentVersionTransition:BucketV2LifecycleRuleNoncurrentVersionTransition
export function s3_BucketV2LifecycleRuleNoncurrentVersionTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  out.storageClass = "";
  return out;
}

// aws:s3/BucketV2LifecycleRuleTransition:BucketV2LifecycleRuleTransition
export function s3_BucketV2LifecycleRuleTransition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.storageClass = "";
  return out;
}

// aws:s3/BucketV2Logging:BucketV2Logging
export function s3_BucketV2Logging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetBucket = "";
  out.targetPrefix = "";
  return out;
}

// aws:s3/BucketV2ObjectLockConfiguration:BucketV2ObjectLockConfiguration
export function s3_BucketV2ObjectLockConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.objectLockEnabled = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ObjectLockConfigurationRule(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketV2ObjectLockConfigurationRule:BucketV2ObjectLockConfigurationRule
export function s3_BucketV2ObjectLockConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultRetentions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ObjectLockConfigurationRuleDefaultRetention(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketV2ObjectLockConfigurationRuleDefaultRetention:BucketV2ObjectLockConfigurationRuleDefaultRetention
export function s3_BucketV2ObjectLockConfigurationRuleDefaultRetention(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.days = 0;
  out.mode = "";
  out.years = 0;
  return out;
}

// aws:s3/BucketV2ReplicationConfiguration:BucketV2ReplicationConfiguration
export function s3_BucketV2ReplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.role = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRule(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRule:BucketV2ReplicationConfigurationRule
export function s3_BucketV2ReplicationConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteMarkerReplicationStatus = "";
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleDestination(ctx, depth + 1))]);
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleFilter(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.prefix = "";
  out.priority = 0;
  out.sourceSelectionCriterias = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria(ctx, depth + 1))]);
  out.status = "active";
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleDestination:BucketV2ReplicationConfigurationRuleDestination
export function s3_BucketV2ReplicationConfigurationRuleDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlTranslations = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation(ctx, depth + 1))]);
  out.accountId = ctx.accountId;
  out.bucket = ctx.name;
  out.metrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleDestinationMetric(ctx, depth + 1))]);
  out.replicaKmsKeyId = h.id(ctx, "replicaKmsKeyId");
  out.replicationTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime(ctx, depth + 1))]);
  out.storageClass = "";
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation:BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation
export function s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.owner = ctx.accountId;
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleDestinationMetric:BucketV2ReplicationConfigurationRuleDestinationMetric
export function s3_BucketV2ReplicationConfigurationRuleDestinationMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minutes = 0;
  out.status = "active";
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleDestinationReplicationTime:BucketV2ReplicationConfigurationRuleDestinationReplicationTime
export function s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minutes = 0;
  out.status = "active";
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleFilter:BucketV2ReplicationConfigurationRuleFilter
export function s3_BucketV2ReplicationConfigurationRuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleSourceSelectionCriteria:BucketV2ReplicationConfigurationRuleSourceSelectionCriteria
export function s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sseKmsEncryptedObjects = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject:BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject
export function s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3/BucketV2ServerSideEncryptionConfiguration:BucketV2ServerSideEncryptionConfiguration
export function s3_BucketV2ServerSideEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ServerSideEncryptionConfigurationRule(ctx, depth + 1))]);
  return out;
}

// aws:s3/BucketV2ServerSideEncryptionConfigurationRule:BucketV2ServerSideEncryptionConfigurationRule
export function s3_BucketV2ServerSideEncryptionConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyServerSideEncryptionByDefaults = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3.s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault(ctx, depth + 1))]);
  out.bucketKeyEnabled = false;
  return out;
}

// aws:s3/BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault:BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault
export function s3_BucketV2ServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsMasterKeyId = h.id(ctx, "kmsMasterKeyId");
  out.sseAlgorithm = "";
  return out;
}

// aws:s3/BucketV2Versioning:BucketV2Versioning
export function s3_BucketV2Versioning(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.mfaDelete = false;
  return out;
}

// aws:s3/BucketV2Website:BucketV2Website
export function s3_BucketV2Website(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorDocument = "";
  out.indexDocument = "";
  out.redirectAllRequestsTo = "";
  out.routingRules = "";
  return out;
}

// aws:s3/BucketVersioning:BucketVersioning
export function s3_BucketVersioning(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.mfaDelete = false;
  return out;
}

// aws:s3/BucketVersioningV2VersioningConfiguration:BucketVersioningV2VersioningConfiguration
export function s3_BucketVersioningV2VersioningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mfaDelete = "";
  out.status = "active";
  return out;
}

// aws:s3/BucketWebsite:BucketWebsite
export function s3_BucketWebsite(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorDocument = "";
  out.indexDocument = "";
  out.redirectAllRequestsTo = "";
  out.routingRules = "";
  return out;
}

// aws:s3/BucketWebsiteConfigurationV2ErrorDocument:BucketWebsiteConfigurationV2ErrorDocument
export function s3_BucketWebsiteConfigurationV2ErrorDocument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  return out;
}

// aws:s3/BucketWebsiteConfigurationV2IndexDocument:BucketWebsiteConfigurationV2IndexDocument
export function s3_BucketWebsiteConfigurationV2IndexDocument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.suffix = "";
  return out;
}

// aws:s3/BucketWebsiteConfigurationV2RedirectAllRequestsTo:BucketWebsiteConfigurationV2RedirectAllRequestsTo
export function s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostName = "";
  out.protocol = "";
  return out;
}

// aws:s3/BucketWebsiteConfigurationV2RoutingRule:BucketWebsiteConfigurationV2RoutingRule
export function s3_BucketWebsiteConfigurationV2RoutingRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_s3.s3_BucketWebsiteConfigurationV2RoutingRuleCondition(ctx, depth + 1));
  out.redirect = (depth > 4 ? {} : T_s3.s3_BucketWebsiteConfigurationV2RoutingRuleRedirect(ctx, depth + 1));
  return out;
}

// aws:s3/BucketWebsiteConfigurationV2RoutingRuleCondition:BucketWebsiteConfigurationV2RoutingRuleCondition
export function s3_BucketWebsiteConfigurationV2RoutingRuleCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpErrorCodeReturnedEquals = "";
  out.keyPrefixEquals = "";
  return out;
}

// aws:s3/BucketWebsiteConfigurationV2RoutingRuleRedirect:BucketWebsiteConfigurationV2RoutingRuleRedirect
export function s3_BucketWebsiteConfigurationV2RoutingRuleRedirect(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostName = "";
  out.httpRedirectCode = "";
  out.protocol = "";
  out.replaceKeyPrefixWith = "";
  out.replaceKeyWith = "";
  return out;
}

// aws:s3/DirectoryBucketLocation:DirectoryBucketLocation
export function s3_DirectoryBucketLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:s3/InventoryDestination:InventoryDestination
export function s3_InventoryDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (depth > 4 ? {} : T_s3.s3_InventoryDestinationBucket(ctx, depth + 1));
  return out;
}

// aws:s3/InventoryDestinationBucket:InventoryDestinationBucket
export function s3_InventoryDestinationBucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.bucketArn = h.arn(ctx);
  out.encryption = (depth > 4 ? {} : T_s3.s3_InventoryDestinationBucketEncryption(ctx, depth + 1));
  out.format = "";
  out.prefix = "";
  return out;
}

// aws:s3/InventoryDestinationBucketEncryption:InventoryDestinationBucketEncryption
export function s3_InventoryDestinationBucketEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sseKms = (depth > 4 ? {} : T_s3.s3_InventoryDestinationBucketEncryptionSseKms(ctx, depth + 1));
  out.sseS3 = (depth > 4 ? {} : T_s3.s3_InventoryDestinationBucketEncryptionSseS3(ctx, depth + 1));
  return out;
}

// aws:s3/InventoryDestinationBucketEncryptionSseKms:InventoryDestinationBucketEncryptionSseKms
export function s3_InventoryDestinationBucketEncryptionSseKms(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  return out;
}

// aws:s3/InventoryDestinationBucketEncryptionSseS3:InventoryDestinationBucketEncryptionSseS3
export function s3_InventoryDestinationBucketEncryptionSseS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:s3/InventoryFilter:InventoryFilter
export function s3_InventoryFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  return out;
}

// aws:s3/InventorySchedule:InventorySchedule
export function s3_InventorySchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.frequency = "";
  return out;
}

// aws:s3/ObjectCopyGrant:ObjectCopyGrant
export function s3_ObjectCopyGrant(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.email = "";
  out.id = h.id(ctx, "id");
  out.permissions = (depth > 4 ? [] : [""]);
  out.type = "";
  out.uri = h.endpoint(ctx, "uri");
  return out;
}

// aws:s3/ObjectCopyOverrideProvider:ObjectCopyOverrideProvider
export function s3_ObjectCopyOverrideProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTags = (depth > 4 ? {} : T_s3.s3_ObjectCopyOverrideProviderDefaultTags(ctx, depth + 1));
  return out;
}

// aws:s3/ObjectCopyOverrideProviderDefaultTags:ObjectCopyOverrideProviderDefaultTags
export function s3_ObjectCopyOverrideProviderDefaultTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tags = {};
  return out;
}
