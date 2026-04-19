// GENERATED FILE — do not edit.
// Service: mediaconvert   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mediaconvert from "../types/mediaconvert.js";

// aws:mediaconvert/queue:Queue
export function Queue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.concurrentJobs = (i.concurrentJobs !== undefined ? i.concurrentJobs : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.pricingPlan = (i.pricingPlan !== undefined ? i.pricingPlan : "");
  out.reservationPlanSettings = (i.reservationPlanSettings !== undefined ? i.reservationPlanSettings : (depth > 4 ? {} : T_mediaconvert.mediaconvert_QueueReservationPlanSettings(ctx, depth + 1)));
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
