// GENERATED FILE — do not edit.
// Service: guardduty   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_guardduty from "../types/guardduty.js";

// aws:guardduty/getDetector:getDetector
export function getDetector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.features = (depth > 4 ? [] : [(depth > 4 ? {} : T_guardduty.guardduty_getDetectorFeature(ctx, depth + 1))]);
  out.findingPublishingFrequency = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.serviceRoleArn = h.arn(ctx);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:guardduty/getFindingIds:getFindingIds
export function getFindingIds(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.detectorId = (i.detectorId !== undefined ? i.detectorId : h.id(ctx, "detectorId"));
  out.findingIds = (depth > 4 ? [] : [""]);
  out.hasFindings = false;
  out.id = h.id(ctx, "id");
  return out;
}
