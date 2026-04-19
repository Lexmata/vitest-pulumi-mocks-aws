// GENERATED FILE — do not edit.
// Service: autoscalingplans   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_autoscalingplans from "../types/autoscalingplans.js";

// aws:autoscalingplans/scalingPlan:ScalingPlan
export function ScalingPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationSource = (i.applicationSource !== undefined ? i.applicationSource : (depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanApplicationSource(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scalingInstructions = (i.scalingInstructions !== undefined ? i.scalingInstructions : (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanScalingInstruction(ctx, depth + 1))]));
  out.scalingPlanVersion = 0;
  return out;
}
