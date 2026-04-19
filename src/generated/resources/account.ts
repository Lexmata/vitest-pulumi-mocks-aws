// GENERATED FILE — do not edit.
// Service: account   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:account/alternativeContact:AlternativeContact
export function AlternativeContact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.alternateContactType = (i.alternateContactType !== undefined ? i.alternateContactType : "");
  out.emailAddress = (i.emailAddress !== undefined ? i.emailAddress : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.phoneNumber = (i.phoneNumber !== undefined ? i.phoneNumber : "");
  out.title = (i.title !== undefined ? i.title : "");
  return out;
}

// aws:account/primaryContact:PrimaryContact
export function PrimaryContact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.addressLine1 = (i.addressLine1 !== undefined ? i.addressLine1 : "");
  out.addressLine2 = (i.addressLine2 !== undefined ? i.addressLine2 : "");
  out.addressLine3 = (i.addressLine3 !== undefined ? i.addressLine3 : "");
  out.city = (i.city !== undefined ? i.city : "");
  out.companyName = (i.companyName !== undefined ? i.companyName : "");
  out.countryCode = (i.countryCode !== undefined ? i.countryCode : "");
  out.districtOrCounty = (i.districtOrCounty !== undefined ? i.districtOrCounty : "");
  out.fullName = (i.fullName !== undefined ? i.fullName : "");
  out.phoneNumber = (i.phoneNumber !== undefined ? i.phoneNumber : "");
  out.postalCode = (i.postalCode !== undefined ? i.postalCode : "");
  out.stateOrRegion = (i.stateOrRegion !== undefined ? i.stateOrRegion : "");
  out.websiteUrl = (i.websiteUrl !== undefined ? i.websiteUrl : h.endpoint(ctx, "websiteUrl"));
  return out;
}

// aws:account/region:Region
export function Region(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.optStatus = "";
  out.regionName = (i.regionName !== undefined ? i.regionName : "");
  return out;
}
