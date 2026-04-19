// GENERATED FILE — do not edit.
// Service: ecr   (15 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecr from "./ecr.js";

// aws:ecr/RegistryScanningConfigurationRule:RegistryScanningConfigurationRule
export function ecr_RegistryScanningConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_RegistryScanningConfigurationRuleRepositoryFilter(ctx, depth + 1))]);
  out.scanFrequency = "";
  return out;
}

// aws:ecr/RegistryScanningConfigurationRuleRepositoryFilter:RegistryScanningConfigurationRuleRepositoryFilter
export function ecr_RegistryScanningConfigurationRuleRepositoryFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = "";
  out.filterType = "";
  return out;
}

// aws:ecr/ReplicationConfigurationReplicationConfiguration:ReplicationConfigurationReplicationConfiguration
export function ecr_ReplicationConfigurationReplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_ReplicationConfigurationReplicationConfigurationRule(ctx, depth + 1))]);
  return out;
}

// aws:ecr/ReplicationConfigurationReplicationConfigurationRule:ReplicationConfigurationReplicationConfigurationRule
export function ecr_ReplicationConfigurationReplicationConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_ReplicationConfigurationReplicationConfigurationRuleDestination(ctx, depth + 1))]);
  out.repositoryFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecr.ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter(ctx, depth + 1))]);
  return out;
}

// aws:ecr/ReplicationConfigurationReplicationConfigurationRuleDestination:ReplicationConfigurationReplicationConfigurationRuleDestination
export function ecr_ReplicationConfigurationReplicationConfigurationRuleDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.region = ctx.region;
  out.registryId = h.id(ctx, "registryId");
  return out;
}

// aws:ecr/ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter:ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter
export function ecr_ReplicationConfigurationReplicationConfigurationRuleRepositoryFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = "";
  out.filterType = "";
  return out;
}

// aws:ecr/RepositoryCreationTemplateEncryptionConfiguration:RepositoryCreationTemplateEncryptionConfiguration
export function ecr_RepositoryCreationTemplateEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.kmsKey = "";
  return out;
}

// aws:ecr/RepositoryEncryptionConfiguration:RepositoryEncryptionConfiguration
export function ecr_RepositoryEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.kmsKey = "";
  return out;
}

// aws:ecr/RepositoryImageScanningConfiguration:RepositoryImageScanningConfiguration
export function ecr_RepositoryImageScanningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scanOnPush = false;
  return out;
}

// aws:ecr/getLifecyclePolicyDocumentRule:getLifecyclePolicyDocumentRule
export function ecr_getLifecyclePolicyDocumentRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_ecr.ecr_getLifecyclePolicyDocumentRuleAction(ctx, depth + 1));
  out.description = "";
  out.priority = 0;
  out.selection = (depth > 4 ? {} : T_ecr.ecr_getLifecyclePolicyDocumentRuleSelection(ctx, depth + 1));
  return out;
}

// aws:ecr/getLifecyclePolicyDocumentRuleAction:getLifecyclePolicyDocumentRuleAction
export function ecr_getLifecyclePolicyDocumentRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:ecr/getLifecyclePolicyDocumentRuleSelection:getLifecyclePolicyDocumentRuleSelection
export function ecr_getLifecyclePolicyDocumentRuleSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.countNumber = 1;
  out.countType = "";
  out.countUnit = "";
  out.tagPatternLists = (depth > 4 ? [] : [""]);
  out.tagPrefixLists = (depth > 4 ? [] : [""]);
  out.tagStatus = "";
  return out;
}

// aws:ecr/getRepositoryCreationTemplateEncryptionConfiguration:getRepositoryCreationTemplateEncryptionConfiguration
export function ecr_getRepositoryCreationTemplateEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.kmsKey = "";
  return out;
}

// aws:ecr/getRepositoryEncryptionConfiguration:getRepositoryEncryptionConfiguration
export function ecr_getRepositoryEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionType = "";
  out.kmsKey = "";
  return out;
}

// aws:ecr/getRepositoryImageScanningConfiguration:getRepositoryImageScanningConfiguration
export function ecr_getRepositoryImageScanningConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scanOnPush = false;
  return out;
}
