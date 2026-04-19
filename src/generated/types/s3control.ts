// GENERATED FILE — do not edit.
// Service: s3control   (40 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3control from "./s3control.js";

// aws:s3control/AccessGrantAccessGrantsLocationConfiguration:AccessGrantAccessGrantsLocationConfiguration
export function s3control_AccessGrantAccessGrantsLocationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3SubPrefix = "";
  return out;
}

// aws:s3control/AccessGrantGrantee:AccessGrantGrantee
export function s3control_AccessGrantGrantee(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.granteeIdentifier = "";
  out.granteeType = "";
  return out;
}

// aws:s3control/BucketLifecycleConfigurationRule:BucketLifecycleConfigurationRule
export function s3control_BucketLifecycleConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.abortIncompleteMultipartUpload = (depth > 4 ? {} : T_s3control.s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload(ctx, depth + 1));
  out.expiration = (depth > 4 ? {} : T_s3control.s3control_BucketLifecycleConfigurationRuleExpiration(ctx, depth + 1));
  out.filter = (depth > 4 ? {} : T_s3control.s3control_BucketLifecycleConfigurationRuleFilter(ctx, depth + 1));
  out.id = h.id(ctx, "id");
  out.status = "active";
  return out;
}

// aws:s3control/BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload:BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload
export function s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.daysAfterInitiation = 0;
  return out;
}

// aws:s3control/BucketLifecycleConfigurationRuleExpiration:BucketLifecycleConfigurationRuleExpiration
export function s3control_BucketLifecycleConfigurationRuleExpiration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.date = "";
  out.days = 0;
  out.expiredObjectDeleteMarker = false;
  return out;
}

// aws:s3control/BucketLifecycleConfigurationRuleFilter:BucketLifecycleConfigurationRuleFilter
export function s3control_BucketLifecycleConfigurationRuleFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefix = "";
  out.tags = {};
  return out;
}

// aws:s3control/DirectoryBucketAccessPointScopeScope:DirectoryBucketAccessPointScopeScope
export function s3control_DirectoryBucketAccessPointScopeScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.permissions = (depth > 4 ? [] : [""]);
  out.prefixes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:s3control/MultiRegionAccessPointDetails:MultiRegionAccessPointDetails
export function s3control_MultiRegionAccessPointDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.publicAccessBlock = (depth > 4 ? {} : T_s3control.s3control_MultiRegionAccessPointDetailsPublicAccessBlock(ctx, depth + 1));
  out.regions = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3control.s3control_MultiRegionAccessPointDetailsRegion(ctx, depth + 1))]);
  return out;
}

// aws:s3control/MultiRegionAccessPointDetailsPublicAccessBlock:MultiRegionAccessPointDetailsPublicAccessBlock
export function s3control_MultiRegionAccessPointDetailsPublicAccessBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockPublicAcls = false;
  out.blockPublicPolicy = false;
  out.ignorePublicAcls = false;
  out.restrictPublicBuckets = false;
  return out;
}

// aws:s3control/MultiRegionAccessPointDetailsRegion:MultiRegionAccessPointDetailsRegion
export function s3control_MultiRegionAccessPointDetailsRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.bucketAccountId = h.id(ctx, "bucketAccountId");
  out.region = ctx.region;
  return out;
}

// aws:s3control/MultiRegionAccessPointPolicyDetails:MultiRegionAccessPointPolicyDetails
export function s3control_MultiRegionAccessPointPolicyDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.policy = "";
  return out;
}

// aws:s3control/ObjectLambdaAccessPointConfiguration:ObjectLambdaAccessPointConfiguration
export function s3control_ObjectLambdaAccessPointConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedFeatures = (depth > 4 ? [] : [""]);
  out.cloudWatchMetricsEnabled = false;
  out.supportingAccessPoint = "";
  out.transformationConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3control.s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:s3control/ObjectLambdaAccessPointConfigurationTransformationConfiguration:ObjectLambdaAccessPointConfigurationTransformationConfiguration
export function s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.contentTransformation = (depth > 4 ? {} : T_s3control.s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation(ctx, depth + 1));
  return out;
}

// aws:s3control/ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation:ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation
export function s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsLambda = (depth > 4 ? {} : T_s3control.s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda(ctx, depth + 1));
  return out;
}

// aws:s3control/ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda:ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda
export function s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = h.arn(ctx);
  out.functionPayload = "";
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfiguration:StorageLensConfigurationStorageLensConfiguration
export function s3control_StorageLensConfigurationStorageLensConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountLevel = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel(ctx, depth + 1));
  out.awsOrg = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg(ctx, depth + 1));
  out.dataExport = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationDataExport(ctx, depth + 1));
  out.enabled = true;
  out.exclude = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationExclude(ctx, depth + 1));
  out.include = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationInclude(ctx, depth + 1));
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevel:StorageLensConfigurationStorageLensConfigurationAccountLevel
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activityMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics(ctx, depth + 1));
  out.advancedCostOptimizationMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics(ctx, depth + 1));
  out.advancedDataProtectionMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics(ctx, depth + 1));
  out.bucketLevel = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel(ctx, depth + 1));
  out.detailedStatusCodeMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics(ctx, depth + 1));
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activityMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics(ctx, depth + 1));
  out.advancedCostOptimizationMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics(ctx, depth + 1));
  out.advancedDataProtectionMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics(ctx, depth + 1));
  out.detailedStatusCodeMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics(ctx, depth + 1));
  out.prefixLevel = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel(ctx, depth + 1));
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.storageMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics(ctx, depth + 1));
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.selectionCriteria = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria(ctx, depth + 1));
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria:StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.delimiter = "";
  out.maxDepth = 0;
  out.minStorageBytesPercentage = 0;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics:StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationAwsOrg:StorageLensConfigurationStorageLensConfigurationAwsOrg
export function s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationDataExport:StorageLensConfigurationStorageLensConfigurationDataExport
export function s3control_StorageLensConfigurationStorageLensConfigurationDataExport(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchMetrics = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics(ctx, depth + 1));
  out.s3BucketDestination = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination(ctx, depth + 1));
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics:StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics
export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination:StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination
export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.arn = h.arn(ctx);
  out.encryption = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption(ctx, depth + 1));
  out.format = "";
  out.outputSchemaVersion = "";
  out.prefix = "";
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption:StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption
export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sseKms = (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms(ctx, depth + 1));
  out.sseS3s = (depth > 4 ? [] : [(depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3(ctx, depth + 1))]);
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms:StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms
export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3:StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3
export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationExclude:StorageLensConfigurationStorageLensConfigurationExclude
export function s3control_StorageLensConfigurationStorageLensConfigurationExclude(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buckets = (depth > 4 ? [] : [""]);
  out.regions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:s3control/StorageLensConfigurationStorageLensConfigurationInclude:StorageLensConfigurationStorageLensConfigurationInclude
export function s3control_StorageLensConfigurationStorageLensConfigurationInclude(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buckets = (depth > 4 ? [] : [""]);
  out.regions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:s3control/getMultiRegionAccessPointPublicAccessBlock:getMultiRegionAccessPointPublicAccessBlock
export function s3control_getMultiRegionAccessPointPublicAccessBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockPublicAcls = false;
  out.blockPublicPolicy = false;
  out.ignorePublicAcls = false;
  out.restrictPublicBuckets = false;
  return out;
}

// aws:s3control/getMultiRegionAccessPointRegion:getMultiRegionAccessPointRegion
export function s3control_getMultiRegionAccessPointRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.bucketAccountId = h.id(ctx, "bucketAccountId");
  out.region = ctx.region;
  return out;
}
