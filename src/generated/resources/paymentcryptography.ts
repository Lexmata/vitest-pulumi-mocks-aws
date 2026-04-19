// GENERATED FILE — do not edit.
// Service: paymentcryptography   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_paymentcryptography from "../types/paymentcryptography.js";

// aws:paymentcryptography/key:Key
export function Key(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionWindowInDays = (i.deletionWindowInDays !== undefined ? i.deletionWindowInDays : 0);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.exportable = (i.exportable !== undefined ? i.exportable : false);
  out.keyAttributes = (i.keyAttributes !== undefined ? i.keyAttributes : (depth > 4 ? {} : T_paymentcryptography.paymentcryptography_KeyKeyAttributes(ctx, depth + 1)));
  out.keyCheckValue = "";
  out.keyCheckValueAlgorithm = (i.keyCheckValueAlgorithm !== undefined ? i.keyCheckValueAlgorithm : "");
  out.keyOrigin = "";
  out.keyState = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_paymentcryptography.paymentcryptography_KeyTimeouts(ctx, depth + 1)));
  return out;
}

// aws:paymentcryptography/keyAlias:KeyAlias
export function KeyAlias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasName = (i.aliasName !== undefined ? i.aliasName : "");
  out.keyArn = (i.keyArn !== undefined ? i.keyArn : h.arn(ctx));
  return out;
}
