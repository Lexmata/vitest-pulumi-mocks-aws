// GENERATED FILE — do not edit.
// Service: shield   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:shield/getProtection:getProtection
export function getProtection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.protectionArn = h.arn(ctx);
  out.protectionId = (i.protectionId !== undefined ? i.protectionId : h.id(ctx, "protectionId"));
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}
