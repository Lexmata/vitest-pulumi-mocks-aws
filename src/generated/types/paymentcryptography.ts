// GENERATED FILE — do not edit.
// Service: paymentcryptography   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_paymentcryptography from "./paymentcryptography.js";

// aws:paymentcryptography/KeyKeyAttributes:KeyKeyAttributes
export function paymentcryptography_KeyKeyAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyAlgorithm = "";
  out.keyClass = "";
  out.keyModesOfUse = (depth > 4 ? {} : T_paymentcryptography.paymentcryptography_KeyKeyAttributesKeyModesOfUse(ctx, depth + 1));
  out.keyUsage = "";
  return out;
}

// aws:paymentcryptography/KeyKeyAttributesKeyModesOfUse:KeyKeyAttributesKeyModesOfUse
export function paymentcryptography_KeyKeyAttributesKeyModesOfUse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.decrypt = false;
  out.deriveKey = false;
  out.encrypt = false;
  out.generate = false;
  out.noRestrictions = false;
  out.sign = false;
  out.unwrap = false;
  out.verify = false;
  out.wrap = false;
  return out;
}

// aws:paymentcryptography/KeyTimeouts:KeyTimeouts
export function paymentcryptography_KeyTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}
