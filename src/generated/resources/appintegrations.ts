// GENERATED FILE — do not edit.
// Service: appintegrations   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appintegrations from "../types/appintegrations.js";

// aws:appintegrations/dataIntegration:DataIntegration
export function DataIntegration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKey = (i.kmsKey !== undefined ? i.kmsKey : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scheduleConfig = (i.scheduleConfig !== undefined ? i.scheduleConfig : (depth > 4 ? {} : T_appintegrations.appintegrations_DataIntegrationScheduleConfig(ctx, depth + 1)));
  out.sourceUri = (i.sourceUri !== undefined ? i.sourceUri : h.endpoint(ctx, "sourceUri"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
