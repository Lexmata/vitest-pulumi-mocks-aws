// GENERATED FILE — do not edit.
// Service: appintegrations   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appintegrations from "../types/appintegrations.js";

// aws:appintegrations/getEventIntegration:getEventIntegration
export function getEventIntegration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.eventFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_appintegrations.appintegrations_getEventIntegrationEventFilter(ctx, depth + 1))]);
  out.eventbridgeBus = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
