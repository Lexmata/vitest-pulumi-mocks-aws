// GENERATED FILE — do not edit.
// Service: mediaconvert   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mediaconvert from "./mediaconvert.js";

// aws:mediaconvert/QueueReservationPlanSettings:QueueReservationPlanSettings
export function mediaconvert_QueueReservationPlanSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commitment = "";
  out.renewalType = "";
  out.reservedSlots = 0;
  return out;
}
