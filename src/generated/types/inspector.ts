// GENERATED FILE — do not edit.
// Service: inspector   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_inspector from "./inspector.js";

// aws:inspector/AssessmentTemplateEventSubscription:AssessmentTemplateEventSubscription
export function inspector_AssessmentTemplateEventSubscription(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.event = "";
  out.topicArn = h.arn(ctx);
  return out;
}
