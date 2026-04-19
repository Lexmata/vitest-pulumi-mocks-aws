// GENERATED FILE — do not edit.
// Service: customerprofiles   (17 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_customerprofiles from "./customerprofiles.js";

// aws:customerprofiles/DomainMatching:DomainMatching
export function customerprofiles_DomainMatching(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoMerging = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatchingAutoMerging(ctx, depth + 1));
  out.enabled = true;
  out.exportingConfig = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatchingExportingConfig(ctx, depth + 1));
  out.jobSchedule = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatchingJobSchedule(ctx, depth + 1));
  return out;
}

// aws:customerprofiles/DomainMatchingAutoMerging:DomainMatchingAutoMerging
export function customerprofiles_DomainMatchingAutoMerging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conflictResolution = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatchingAutoMergingConflictResolution(ctx, depth + 1));
  out.consolidation = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatchingAutoMergingConsolidation(ctx, depth + 1));
  out.enabled = true;
  out.minAllowedConfidenceScoreForMerging = 0;
  return out;
}

// aws:customerprofiles/DomainMatchingAutoMergingConflictResolution:DomainMatchingAutoMergingConflictResolution
export function customerprofiles_DomainMatchingAutoMergingConflictResolution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conflictResolvingModel = "";
  out.sourceName = "";
  return out;
}

// aws:customerprofiles/DomainMatchingAutoMergingConsolidation:DomainMatchingAutoMergingConsolidation
export function customerprofiles_DomainMatchingAutoMergingConsolidation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchingAttributesLists = (depth > 4 ? [] : [(depth > 4 ? [] : [""])]);
  return out;
}

// aws:customerprofiles/DomainMatchingExportingConfig:DomainMatchingExportingConfig
export function customerprofiles_DomainMatchingExportingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Exporting = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainMatchingExportingConfigS3Exporting(ctx, depth + 1));
  return out;
}

// aws:customerprofiles/DomainMatchingExportingConfigS3Exporting:DomainMatchingExportingConfigS3Exporting
export function customerprofiles_DomainMatchingExportingConfigS3Exporting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3KeyName = "";
  return out;
}

// aws:customerprofiles/DomainMatchingJobSchedule:DomainMatchingJobSchedule
export function customerprofiles_DomainMatchingJobSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dayOfTheWeek = "";
  out.time = "";
  return out;
}

// aws:customerprofiles/DomainRuleBasedMatching:DomainRuleBasedMatching
export function customerprofiles_DomainRuleBasedMatching(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeTypesSelector = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector(ctx, depth + 1));
  out.conflictResolution = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainRuleBasedMatchingConflictResolution(ctx, depth + 1));
  out.enabled = true;
  out.exportingConfig = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainRuleBasedMatchingExportingConfig(ctx, depth + 1));
  out.matchingRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainRuleBasedMatchingMatchingRule(ctx, depth + 1))]);
  out.maxAllowedRuleLevelForMatching = 0;
  out.maxAllowedRuleLevelForMerging = 0;
  out.status = "active";
  return out;
}

// aws:customerprofiles/DomainRuleBasedMatchingAttributeTypesSelector:DomainRuleBasedMatchingAttributeTypesSelector
export function customerprofiles_DomainRuleBasedMatchingAttributeTypesSelector(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addresses = (depth > 4 ? [] : [""]);
  out.attributeMatchingModel = "";
  out.emailAddresses = (depth > 4 ? [] : [""]);
  out.phoneNumbers = (depth > 4 ? [] : [""]);
  return out;
}

// aws:customerprofiles/DomainRuleBasedMatchingConflictResolution:DomainRuleBasedMatchingConflictResolution
export function customerprofiles_DomainRuleBasedMatchingConflictResolution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conflictResolvingModel = "";
  out.sourceName = "";
  return out;
}

// aws:customerprofiles/DomainRuleBasedMatchingExportingConfig:DomainRuleBasedMatchingExportingConfig
export function customerprofiles_DomainRuleBasedMatchingExportingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Exporting = (depth > 4 ? {} : T_customerprofiles.customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting(ctx, depth + 1));
  return out;
}

// aws:customerprofiles/DomainRuleBasedMatchingExportingConfigS3Exporting:DomainRuleBasedMatchingExportingConfigS3Exporting
export function customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3KeyName = "";
  return out;
}

// aws:customerprofiles/DomainRuleBasedMatchingMatchingRule:DomainRuleBasedMatchingMatchingRule
export function customerprofiles_DomainRuleBasedMatchingMatchingRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rules = (depth > 4 ? [] : [""]);
  return out;
}

// aws:customerprofiles/ProfileAddress:ProfileAddress
export function customerprofiles_ProfileAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address1 = "";
  out.address2 = "";
  out.address3 = "";
  out.address4 = "";
  out.city = "";
  out.country = "";
  out.county = "";
  out.postalCode = "";
  out.province = "";
  out.state = "active";
  return out;
}

// aws:customerprofiles/ProfileBillingAddress:ProfileBillingAddress
export function customerprofiles_ProfileBillingAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address1 = "";
  out.address2 = "";
  out.address3 = "";
  out.address4 = "";
  out.city = "";
  out.country = "";
  out.county = "";
  out.postalCode = "";
  out.province = "";
  out.state = "active";
  return out;
}

// aws:customerprofiles/ProfileMailingAddress:ProfileMailingAddress
export function customerprofiles_ProfileMailingAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address1 = "";
  out.address2 = "";
  out.address3 = "";
  out.address4 = "";
  out.city = "";
  out.country = "";
  out.county = "";
  out.postalCode = "";
  out.province = "";
  out.state = "active";
  return out;
}

// aws:customerprofiles/ProfileShippingAddress:ProfileShippingAddress
export function customerprofiles_ProfileShippingAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address1 = "";
  out.address2 = "";
  out.address3 = "";
  out.address4 = "";
  out.city = "";
  out.country = "";
  out.county = "";
  out.postalCode = "";
  out.province = "";
  out.state = "active";
  return out;
}
