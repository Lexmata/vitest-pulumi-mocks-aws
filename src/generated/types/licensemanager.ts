// GENERATED FILE — do not edit.
// Service: licensemanager   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_licensemanager from "./licensemanager.js";

// aws:licensemanager/getLicenseGrantsFilter:getLicenseGrantsFilter
export function licensemanager_getLicenseGrantsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:licensemanager/getReceivedLicenseConsumptionConfiguration:getReceivedLicenseConsumptionConfiguration
export function licensemanager_getReceivedLicenseConsumptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.borrowConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration(ctx, depth + 1))]);
  out.provisionalConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration(ctx, depth + 1))]);
  out.renewType = "";
  return out;
}

// aws:licensemanager/getReceivedLicenseConsumptionConfigurationBorrowConfiguration:getReceivedLicenseConsumptionConfigurationBorrowConfiguration
export function licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowEarlyCheckIn = true;
  out.maxTimeToLiveInMinutes = 0;
  return out;
}

// aws:licensemanager/getReceivedLicenseConsumptionConfigurationProvisionalConfiguration:getReceivedLicenseConsumptionConfigurationProvisionalConfiguration
export function licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxTimeToLiveInMinutes = 0;
  return out;
}

// aws:licensemanager/getReceivedLicenseEntitlement:getReceivedLicenseEntitlement
export function licensemanager_getReceivedLicenseEntitlement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowCheckIn = true;
  out.maxCount = 1;
  out.name = ctx.name;
  out.overage = false;
  out.unit = "";
  out.value = "";
  return out;
}

// aws:licensemanager/getReceivedLicenseIssuer:getReceivedLicenseIssuer
export function licensemanager_getReceivedLicenseIssuer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyFingerprint = "";
  out.name = ctx.name;
  out.signKey = "";
  return out;
}

// aws:licensemanager/getReceivedLicenseLicenseMetadata:getReceivedLicenseLicenseMetadata
export function licensemanager_getReceivedLicenseLicenseMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:licensemanager/getReceivedLicenseReceivedMetadata:getReceivedLicenseReceivedMetadata
export function licensemanager_getReceivedLicenseReceivedMetadata(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedOperations = (depth > 4 ? [] : [""]);
  out.receivedStatus = "";
  out.receivedStatusReason = "";
  return out;
}

// aws:licensemanager/getReceivedLicenseValidity:getReceivedLicenseValidity
export function licensemanager_getReceivedLicenseValidity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.begin = "";
  out.end = "";
  return out;
}

// aws:licensemanager/getReceivedLicensesFilter:getReceivedLicensesFilter
export function licensemanager_getReceivedLicensesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}
