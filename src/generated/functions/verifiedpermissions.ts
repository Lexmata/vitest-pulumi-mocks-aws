// GENERATED FILE — do not edit.
// Service: verifiedpermissions   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_verifiedpermissions from "../types/verifiedpermissions.js";

// aws:verifiedpermissions/getPolicyStore:getPolicyStore
export function getPolicyStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.lastUpdatedDate = "";
  out.tags = {};
  out.validationSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_getPolicyStoreValidationSetting(ctx, depth + 1))]);
  return out;
}
