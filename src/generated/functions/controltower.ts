// GENERATED FILE — do not edit.
// Service: controltower   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:controltower/getControls:getControls
export function getControls(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabledControls = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.targetIdentifier = (i.targetIdentifier !== undefined ? i.targetIdentifier : "");
  return out;
}
