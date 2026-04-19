// GENERATED FILE — do not edit.
// Service: athena   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_athena from "./athena.js";

// aws:athena/CapacityReservationTimeouts:CapacityReservationTimeouts
export function athena_CapacityReservationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:athena/DatabaseAclConfiguration:DatabaseAclConfiguration
export function athena_DatabaseAclConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3AclOption = "";
  return out;
}

// aws:athena/DatabaseEncryptionConfiguration:DatabaseEncryptionConfiguration
export function athena_DatabaseEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionOption = "";
  out.kmsKey = "";
  return out;
}

// aws:athena/WorkgroupConfiguration:WorkgroupConfiguration
export function athena_WorkgroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bytesScannedCutoffPerQuery = 0;
  out.enforceWorkgroupConfiguration = false;
  out.engineVersion = (depth > 4 ? {} : T_athena.athena_WorkgroupConfigurationEngineVersion(ctx, depth + 1));
  out.executionRole = "";
  out.publishCloudwatchMetricsEnabled = false;
  out.requesterPaysEnabled = false;
  out.resultConfiguration = (depth > 4 ? {} : T_athena.athena_WorkgroupConfigurationResultConfiguration(ctx, depth + 1));
  return out;
}

// aws:athena/WorkgroupConfigurationEngineVersion:WorkgroupConfigurationEngineVersion
export function athena_WorkgroupConfigurationEngineVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.effectiveEngineVersion = "";
  out.selectedEngineVersion = "";
  return out;
}

// aws:athena/WorkgroupConfigurationResultConfiguration:WorkgroupConfigurationResultConfiguration
export function athena_WorkgroupConfigurationResultConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclConfiguration = (depth > 4 ? {} : T_athena.athena_WorkgroupConfigurationResultConfigurationAclConfiguration(ctx, depth + 1));
  out.encryptionConfiguration = (depth > 4 ? {} : T_athena.athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration(ctx, depth + 1));
  out.expectedBucketOwner = "";
  out.outputLocation = "";
  return out;
}

// aws:athena/WorkgroupConfigurationResultConfigurationAclConfiguration:WorkgroupConfigurationResultConfigurationAclConfiguration
export function athena_WorkgroupConfigurationResultConfigurationAclConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3AclOption = "";
  return out;
}

// aws:athena/WorkgroupConfigurationResultConfigurationEncryptionConfiguration:WorkgroupConfigurationResultConfigurationEncryptionConfiguration
export function athena_WorkgroupConfigurationResultConfigurationEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionOption = "";
  out.kmsKeyArn = h.arn(ctx);
  return out;
}
