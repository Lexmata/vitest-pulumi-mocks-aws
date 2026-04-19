// GENERATED FILE — do not edit.
// Service: licensemanager   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_licensemanager from "../types/licensemanager.js";

// aws:licensemanager/getLicenseGrants:getLicenseGrants
export function getLicenseGrants(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getLicenseGrantsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:licensemanager/getReceivedLicense:getReceivedLicense
export function getReceivedLicense(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.beneficiary = "";
  out.consumptionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseConsumptionConfiguration(ctx, depth + 1))]);
  out.createTime = h.timestamp();
  out.entitlements = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseEntitlement(ctx, depth + 1))]);
  out.homeRegion = "";
  out.id = h.id(ctx, "id");
  out.issuers = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseIssuer(ctx, depth + 1))]);
  out.licenseArn = (i.licenseArn !== undefined ? i.licenseArn : h.arn(ctx));
  out.licenseMetadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseLicenseMetadata(ctx, depth + 1))]);
  out.licenseName = "";
  out.productName = "";
  out.productSku = "";
  out.receivedMetadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseReceivedMetadata(ctx, depth + 1))]);
  out.status = "active";
  out.validities = (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicenseValidity(ctx, depth + 1))]);
  out.version = "1";
  return out;
}

// aws:licensemanager/getReceivedLicenses:getReceivedLicenses
export function getReceivedLicenses(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_licensemanager.licensemanager_getReceivedLicensesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}
