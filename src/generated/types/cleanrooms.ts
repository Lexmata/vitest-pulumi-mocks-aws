// GENERATED FILE — do not edit.
// Service: cleanrooms   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cleanrooms from "./cleanrooms.js";

// aws:cleanrooms/CollaborationDataEncryptionMetadata:CollaborationDataEncryptionMetadata
export function cleanrooms_CollaborationDataEncryptionMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowClearText = true;
  out.allowDuplicates = true;
  out.allowJoinsOnColumnsWithDifferentNames = true;
  out.preserveNulls = false;
  return out;
}

// aws:cleanrooms/CollaborationMember:CollaborationMember
export function cleanrooms_CollaborationMember(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.displayName = "";
  out.memberAbilities = (depth > 4 ? [] : [""]);
  out.status = "active";
  return out;
}

// aws:cleanrooms/ConfiguredTableTableReference:ConfiguredTableTableReference
export function cleanrooms_ConfiguredTableTableReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.tableName = "";
  return out;
}

// aws:cleanrooms/MembershipDefaultResultConfiguration:MembershipDefaultResultConfiguration
export function cleanrooms_MembershipDefaultResultConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputConfiguration = (depth > 4 ? {} : T_cleanrooms.cleanrooms_MembershipDefaultResultConfigurationOutputConfiguration(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:cleanrooms/MembershipDefaultResultConfigurationOutputConfiguration:MembershipDefaultResultConfigurationOutputConfiguration
export function cleanrooms_MembershipDefaultResultConfigurationOutputConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3 = (depth > 4 ? {} : T_cleanrooms.cleanrooms_MembershipDefaultResultConfigurationOutputConfigurationS3(ctx, depth + 1));
  return out;
}

// aws:cleanrooms/MembershipDefaultResultConfigurationOutputConfigurationS3:MembershipDefaultResultConfigurationOutputConfigurationS3
export function cleanrooms_MembershipDefaultResultConfigurationOutputConfigurationS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.keyPrefix = "";
  out.resultFormat = "";
  return out;
}

// aws:cleanrooms/MembershipPaymentConfiguration:MembershipPaymentConfiguration
export function cleanrooms_MembershipPaymentConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryCompute = (depth > 4 ? {} : T_cleanrooms.cleanrooms_MembershipPaymentConfigurationQueryCompute(ctx, depth + 1));
  return out;
}

// aws:cleanrooms/MembershipPaymentConfigurationQueryCompute:MembershipPaymentConfigurationQueryCompute
export function cleanrooms_MembershipPaymentConfigurationQueryCompute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isResponsible = true;
  return out;
}
