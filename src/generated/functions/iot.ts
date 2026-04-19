// GENERATED FILE — do not edit.
// Service: iot   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:iot/getEndpoint:getEndpoint
export function getEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointAddress = "";
  out.endpointType = (i.endpointType !== undefined ? i.endpointType : "");
  out.id = h.id(ctx, "id");
  return out;
}

// aws:iot/getRegistrationCode:getRegistrationCode
export function getRegistrationCode(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.registrationCode = "";
  return out;
}
