// GENERATED FILE — do not edit.
// Service: inspector2   (52 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_inspector2 from "./inspector2.js";

// aws:inspector2/FilterFilterCriteria:FilterFilterCriteria
export function inspector2_FilterFilterCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaAwsAccountId(ctx, depth + 1))]);
  out.codeVulnerabilityDetectorNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaCodeVulnerabilityDetectorName(ctx, depth + 1))]);
  out.codeVulnerabilityDetectorTags = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaCodeVulnerabilityDetectorTag(ctx, depth + 1))]);
  out.codeVulnerabilityFilePaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaCodeVulnerabilityFilePath(ctx, depth + 1))]);
  out.componentIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaComponentId(ctx, depth + 1))]);
  out.componentTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaComponentType(ctx, depth + 1))]);
  out.ec2InstanceImageIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEc2InstanceImageId(ctx, depth + 1))]);
  out.ec2InstanceSubnetIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEc2InstanceSubnetId(ctx, depth + 1))]);
  out.ec2InstanceVpcIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEc2InstanceVpcId(ctx, depth + 1))]);
  out.ecrImageArchitectures = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEcrImageArchitecture(ctx, depth + 1))]);
  out.ecrImageHashes = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEcrImageHash(ctx, depth + 1))]);
  out.ecrImagePushedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEcrImagePushedAt(ctx, depth + 1))]);
  out.ecrImageRegistries = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEcrImageRegistry(ctx, depth + 1))]);
  out.ecrImageRepositoryNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEcrImageRepositoryName(ctx, depth + 1))]);
  out.ecrImageTags = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEcrImageTag(ctx, depth + 1))]);
  out.epssScores = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaEpssScore(ctx, depth + 1))]);
  out.exploitAvailables = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaExploitAvailable(ctx, depth + 1))]);
  out.findingArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaFindingArn(ctx, depth + 1))]);
  out.findingStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaFindingStatus(ctx, depth + 1))]);
  out.findingTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaFindingType(ctx, depth + 1))]);
  out.firstObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaFirstObservedAt(ctx, depth + 1))]);
  out.fixAvailables = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaFixAvailable(ctx, depth + 1))]);
  out.inspectorScores = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaInspectorScore(ctx, depth + 1))]);
  out.lambdaFunctionExecutionRoleArns = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaLambdaFunctionExecutionRoleArn(ctx, depth + 1))]);
  out.lambdaFunctionLastModifiedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaLambdaFunctionLastModifiedAt(ctx, depth + 1))]);
  out.lambdaFunctionLayers = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaLambdaFunctionLayer(ctx, depth + 1))]);
  out.lambdaFunctionNames = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaLambdaFunctionName(ctx, depth + 1))]);
  out.lambdaFunctionRuntimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaLambdaFunctionRuntime(ctx, depth + 1))]);
  out.lastObservedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaLastObservedAt(ctx, depth + 1))]);
  out.networkProtocols = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaNetworkProtocol(ctx, depth + 1))]);
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaPortRange(ctx, depth + 1))]);
  out.relatedVulnerabilities = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaRelatedVulnerability(ctx, depth + 1))]);
  out.resourceIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaResourceId(ctx, depth + 1))]);
  out.resourceTags = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaResourceTag(ctx, depth + 1))]);
  out.resourceTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaResourceType(ctx, depth + 1))]);
  out.severities = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaSeverity(ctx, depth + 1))]);
  out.titles = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaTitle(ctx, depth + 1))]);
  out.updatedAts = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaUpdatedAt(ctx, depth + 1))]);
  out.vendorSeverities = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVendorSeverity(ctx, depth + 1))]);
  out.vulnerabilityIds = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerabilityId(ctx, depth + 1))]);
  out.vulnerabilitySources = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerabilitySource(ctx, depth + 1))]);
  out.vulnerablePackages = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackage(ctx, depth + 1))]);
  return out;
}

// aws:inspector2/FilterFilterCriteriaAwsAccountId:FilterFilterCriteriaAwsAccountId
export function inspector2_FilterFilterCriteriaAwsAccountId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaCodeVulnerabilityDetectorName:FilterFilterCriteriaCodeVulnerabilityDetectorName
export function inspector2_FilterFilterCriteriaCodeVulnerabilityDetectorName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaCodeVulnerabilityDetectorTag:FilterFilterCriteriaCodeVulnerabilityDetectorTag
export function inspector2_FilterFilterCriteriaCodeVulnerabilityDetectorTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaCodeVulnerabilityFilePath:FilterFilterCriteriaCodeVulnerabilityFilePath
export function inspector2_FilterFilterCriteriaCodeVulnerabilityFilePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaComponentId:FilterFilterCriteriaComponentId
export function inspector2_FilterFilterCriteriaComponentId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaComponentType:FilterFilterCriteriaComponentType
export function inspector2_FilterFilterCriteriaComponentType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEc2InstanceImageId:FilterFilterCriteriaEc2InstanceImageId
export function inspector2_FilterFilterCriteriaEc2InstanceImageId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEc2InstanceSubnetId:FilterFilterCriteriaEc2InstanceSubnetId
export function inspector2_FilterFilterCriteriaEc2InstanceSubnetId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEc2InstanceVpcId:FilterFilterCriteriaEc2InstanceVpcId
export function inspector2_FilterFilterCriteriaEc2InstanceVpcId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEcrImageArchitecture:FilterFilterCriteriaEcrImageArchitecture
export function inspector2_FilterFilterCriteriaEcrImageArchitecture(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEcrImageHash:FilterFilterCriteriaEcrImageHash
export function inspector2_FilterFilterCriteriaEcrImageHash(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEcrImagePushedAt:FilterFilterCriteriaEcrImagePushedAt
export function inspector2_FilterFilterCriteriaEcrImagePushedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endInclusive = "";
  out.startInclusive = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEcrImageRegistry:FilterFilterCriteriaEcrImageRegistry
export function inspector2_FilterFilterCriteriaEcrImageRegistry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEcrImageRepositoryName:FilterFilterCriteriaEcrImageRepositoryName
export function inspector2_FilterFilterCriteriaEcrImageRepositoryName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEcrImageTag:FilterFilterCriteriaEcrImageTag
export function inspector2_FilterFilterCriteriaEcrImageTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaEpssScore:FilterFilterCriteriaEpssScore
export function inspector2_FilterFilterCriteriaEpssScore(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lowerInclusive = 0;
  out.upperInclusive = 0;
  return out;
}

// aws:inspector2/FilterFilterCriteriaExploitAvailable:FilterFilterCriteriaExploitAvailable
export function inspector2_FilterFilterCriteriaExploitAvailable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaFindingArn:FilterFilterCriteriaFindingArn
export function inspector2_FilterFilterCriteriaFindingArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaFindingStatus:FilterFilterCriteriaFindingStatus
export function inspector2_FilterFilterCriteriaFindingStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaFindingType:FilterFilterCriteriaFindingType
export function inspector2_FilterFilterCriteriaFindingType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaFirstObservedAt:FilterFilterCriteriaFirstObservedAt
export function inspector2_FilterFilterCriteriaFirstObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endInclusive = "";
  out.startInclusive = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaFixAvailable:FilterFilterCriteriaFixAvailable
export function inspector2_FilterFilterCriteriaFixAvailable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaInspectorScore:FilterFilterCriteriaInspectorScore
export function inspector2_FilterFilterCriteriaInspectorScore(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lowerInclusive = 0;
  out.upperInclusive = 0;
  return out;
}

// aws:inspector2/FilterFilterCriteriaLambdaFunctionExecutionRoleArn:FilterFilterCriteriaLambdaFunctionExecutionRoleArn
export function inspector2_FilterFilterCriteriaLambdaFunctionExecutionRoleArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaLambdaFunctionLastModifiedAt:FilterFilterCriteriaLambdaFunctionLastModifiedAt
export function inspector2_FilterFilterCriteriaLambdaFunctionLastModifiedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endInclusive = "";
  out.startInclusive = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaLambdaFunctionLayer:FilterFilterCriteriaLambdaFunctionLayer
export function inspector2_FilterFilterCriteriaLambdaFunctionLayer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaLambdaFunctionName:FilterFilterCriteriaLambdaFunctionName
export function inspector2_FilterFilterCriteriaLambdaFunctionName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaLambdaFunctionRuntime:FilterFilterCriteriaLambdaFunctionRuntime
export function inspector2_FilterFilterCriteriaLambdaFunctionRuntime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaLastObservedAt:FilterFilterCriteriaLastObservedAt
export function inspector2_FilterFilterCriteriaLastObservedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endInclusive = "";
  out.startInclusive = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaNetworkProtocol:FilterFilterCriteriaNetworkProtocol
export function inspector2_FilterFilterCriteriaNetworkProtocol(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaPortRange:FilterFilterCriteriaPortRange
export function inspector2_FilterFilterCriteriaPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.beginInclusive = 0;
  out.endInclusive = 0;
  return out;
}

// aws:inspector2/FilterFilterCriteriaRelatedVulnerability:FilterFilterCriteriaRelatedVulnerability
export function inspector2_FilterFilterCriteriaRelatedVulnerability(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaResourceId:FilterFilterCriteriaResourceId
export function inspector2_FilterFilterCriteriaResourceId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaResourceTag:FilterFilterCriteriaResourceTag
export function inspector2_FilterFilterCriteriaResourceTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaResourceType:FilterFilterCriteriaResourceType
export function inspector2_FilterFilterCriteriaResourceType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaSeverity:FilterFilterCriteriaSeverity
export function inspector2_FilterFilterCriteriaSeverity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaTitle:FilterFilterCriteriaTitle
export function inspector2_FilterFilterCriteriaTitle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaUpdatedAt:FilterFilterCriteriaUpdatedAt
export function inspector2_FilterFilterCriteriaUpdatedAt(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endInclusive = "";
  out.startInclusive = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVendorSeverity:FilterFilterCriteriaVendorSeverity
export function inspector2_FilterFilterCriteriaVendorSeverity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerabilityId:FilterFilterCriteriaVulnerabilityId
export function inspector2_FilterFilterCriteriaVulnerabilityId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerabilitySource:FilterFilterCriteriaVulnerabilitySource
export function inspector2_FilterFilterCriteriaVulnerabilitySource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackage:FilterFilterCriteriaVulnerablePackage
export function inspector2_FilterFilterCriteriaVulnerablePackage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageArchitecture(ctx, depth + 1));
  out.epoches = (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageEpoch(ctx, depth + 1))]);
  out.filePath = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageFilePath(ctx, depth + 1));
  out.name = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageName(ctx, depth + 1));
  out.release = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageRelease(ctx, depth + 1));
  out.sourceLambdaLayerArn = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageSourceLambdaLayerArn(ctx, depth + 1));
  out.sourceLayerHash = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageSourceLayerHash(ctx, depth + 1));
  out.version = (depth > 4 ? {} : T_inspector2.inspector2_FilterFilterCriteriaVulnerablePackageVersion(ctx, depth + 1));
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageArchitecture:FilterFilterCriteriaVulnerablePackageArchitecture
export function inspector2_FilterFilterCriteriaVulnerablePackageArchitecture(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageEpoch:FilterFilterCriteriaVulnerablePackageEpoch
export function inspector2_FilterFilterCriteriaVulnerablePackageEpoch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lowerInclusive = 0;
  out.upperInclusive = 0;
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageFilePath:FilterFilterCriteriaVulnerablePackageFilePath
export function inspector2_FilterFilterCriteriaVulnerablePackageFilePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageName:FilterFilterCriteriaVulnerablePackageName
export function inspector2_FilterFilterCriteriaVulnerablePackageName(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageRelease:FilterFilterCriteriaVulnerablePackageRelease
export function inspector2_FilterFilterCriteriaVulnerablePackageRelease(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageSourceLambdaLayerArn:FilterFilterCriteriaVulnerablePackageSourceLambdaLayerArn
export function inspector2_FilterFilterCriteriaVulnerablePackageSourceLambdaLayerArn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageSourceLayerHash:FilterFilterCriteriaVulnerablePackageSourceLayerHash
export function inspector2_FilterFilterCriteriaVulnerablePackageSourceLayerHash(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/FilterFilterCriteriaVulnerablePackageVersion:FilterFilterCriteriaVulnerablePackageVersion
export function inspector2_FilterFilterCriteriaVulnerablePackageVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparison = "";
  out.value = "";
  return out;
}

// aws:inspector2/OrganizationConfigurationAutoEnable:OrganizationConfigurationAutoEnable
export function inspector2_OrganizationConfigurationAutoEnable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ec2 = false;
  out.ecr = false;
  out.lambda = false;
  out.lambdaCode = false;
  return out;
}
