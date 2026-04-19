// GENERATED FILE — do not edit.
// Service: apprunner   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:apprunner/getHostedZoneId:getHostedZoneId
export function getHostedZoneId(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}
