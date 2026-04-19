// GENERATED FILE — do not edit.
// Service: guardduty   (25 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_guardduty from "./guardduty.js";

// aws:guardduty/DetectorDatasources:DetectorDatasources
export function guardduty_DetectorDatasources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kubernetes = (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasourcesKubernetes(ctx, depth + 1));
  out.malwareProtection = (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasourcesMalwareProtection(ctx, depth + 1));
  out.s3Logs = (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasourcesS3Logs(ctx, depth + 1));
  return out;
}

// aws:guardduty/DetectorDatasourcesKubernetes:DetectorDatasourcesKubernetes
export function guardduty_DetectorDatasourcesKubernetes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLogs = (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasourcesKubernetesAuditLogs(ctx, depth + 1));
  return out;
}

// aws:guardduty/DetectorDatasourcesKubernetesAuditLogs:DetectorDatasourcesKubernetesAuditLogs
export function guardduty_DetectorDatasourcesKubernetesAuditLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enable = true;
  return out;
}

// aws:guardduty/DetectorDatasourcesMalwareProtection:DetectorDatasourcesMalwareProtection
export function guardduty_DetectorDatasourcesMalwareProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scanEc2InstanceWithFindings = (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings(ctx, depth + 1));
  return out;
}

// aws:guardduty/DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings:DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
export function guardduty_DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsVolumes = (depth > 4 ? {} : T_guardduty.guardduty_DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes(ctx, depth + 1));
  return out;
}

// aws:guardduty/DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes:DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
export function guardduty_DetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enable = true;
  return out;
}

// aws:guardduty/DetectorDatasourcesS3Logs:DetectorDatasourcesS3Logs
export function guardduty_DetectorDatasourcesS3Logs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enable = true;
  return out;
}

// aws:guardduty/DetectorFeatureAdditionalConfiguration:DetectorFeatureAdditionalConfiguration
export function guardduty_DetectorFeatureAdditionalConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:guardduty/FilterFindingCriteria:FilterFindingCriteria
export function guardduty_FilterFindingCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.criterions = (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_FilterFindingCriteriaCriterion(ctx, depth + 1))]);
  return out;
}

// aws:guardduty/FilterFindingCriteriaCriterion:FilterFindingCriteriaCriterion
export function guardduty_FilterFindingCriteriaCriterion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.equals = (depth > 4 ? [] : [""]);
  out.field = "";
  out.greaterThan = "";
  out.greaterThanOrEqual = "";
  out.lessThan = "";
  out.lessThanOrEqual = "";
  out.notEquals = (depth > 4 ? [] : [""]);
  return out;
}

// aws:guardduty/MalwareProtectionPlanAction:MalwareProtectionPlanAction
export function guardduty_MalwareProtectionPlanAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.taggings = (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_MalwareProtectionPlanActionTagging(ctx, depth + 1))]);
  return out;
}

// aws:guardduty/MalwareProtectionPlanActionTagging:MalwareProtectionPlanActionTagging
export function guardduty_MalwareProtectionPlanActionTagging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:guardduty/MalwareProtectionPlanProtectedResource:MalwareProtectionPlanProtectedResource
export function guardduty_MalwareProtectionPlanProtectedResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Bucket = (depth > 4 ? {} : T_guardduty.guardduty_MalwareProtectionPlanProtectedResourceS3Bucket(ctx, depth + 1));
  return out;
}

// aws:guardduty/MalwareProtectionPlanProtectedResourceS3Bucket:MalwareProtectionPlanProtectedResourceS3Bucket
export function guardduty_MalwareProtectionPlanProtectedResourceS3Bucket(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.objectPrefixes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:guardduty/MemberDetectorFeatureAdditionalConfiguration:MemberDetectorFeatureAdditionalConfiguration
export function guardduty_MemberDetectorFeatureAdditionalConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasources:OrganizationConfigurationDatasources
export function guardduty_OrganizationConfigurationDatasources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kubernetes = (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasourcesKubernetes(ctx, depth + 1));
  out.malwareProtection = (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasourcesMalwareProtection(ctx, depth + 1));
  out.s3Logs = (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasourcesS3Logs(ctx, depth + 1));
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasourcesKubernetes:OrganizationConfigurationDatasourcesKubernetes
export function guardduty_OrganizationConfigurationDatasourcesKubernetes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.auditLogs = (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs(ctx, depth + 1));
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasourcesKubernetesAuditLogs:OrganizationConfigurationDatasourcesKubernetesAuditLogs
export function guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enable = true;
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasourcesMalwareProtection:OrganizationConfigurationDatasourcesMalwareProtection
export function guardduty_OrganizationConfigurationDatasourcesMalwareProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scanEc2InstanceWithFindings = (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings(ctx, depth + 1));
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings:OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings
export function guardduty_OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsVolumes = (depth > 4 ? {} : T_guardduty.guardduty_OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes(ctx, depth + 1));
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes:OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
export function guardduty_OrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = false;
  return out;
}

// aws:guardduty/OrganizationConfigurationDatasourcesS3Logs:OrganizationConfigurationDatasourcesS3Logs
export function guardduty_OrganizationConfigurationDatasourcesS3Logs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = false;
  return out;
}

// aws:guardduty/OrganizationConfigurationFeatureAdditionalConfiguration:OrganizationConfigurationFeatureAdditionalConfiguration
export function guardduty_OrganizationConfigurationFeatureAdditionalConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = "";
  out.name = ctx.name;
  return out;
}

// aws:guardduty/getDetectorFeature:getDetectorFeature
export function guardduty_getDetectorFeature(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_getDetectorFeatureAdditionalConfiguration(ctx, depth + 1))]);
  out.name = ctx.name;
  out.status = "active";
  return out;
}

// aws:guardduty/getDetectorFeatureAdditionalConfiguration:getDetectorFeatureAdditionalConfiguration
export function guardduty_getDetectorFeatureAdditionalConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.status = "active";
  return out;
}
