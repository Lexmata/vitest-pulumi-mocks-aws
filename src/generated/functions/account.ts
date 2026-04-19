// GENERATED FILE — do not edit.
// Service: account   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:account/getPrimaryContact:getPrimaryContact
export function getPrimaryContact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.addressLine1 = "";
  out.addressLine2 = "";
  out.addressLine3 = "";
  out.city = "";
  out.companyName = "";
  out.countryCode = "";
  out.districtOrCounty = "";
  out.fullName = "";
  out.id = h.id(ctx, "id");
  out.phoneNumber = "";
  out.postalCode = "";
  out.stateOrRegion = "";
  out.websiteUrl = h.endpoint(ctx, "websiteUrl");
  return out;
}
