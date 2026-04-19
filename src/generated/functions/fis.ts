// GENERATED FILE — do not edit.
// Service: fis   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:fis/getExperimentTemplates:getExperimentTemplates
export function getExperimentTemplates(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
