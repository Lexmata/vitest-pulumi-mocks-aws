// GENERATED FILE — do not edit.
// Service: inspector   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_inspector from "../types/inspector.js";

// aws:inspector/assessmentTarget:AssessmentTarget
export function AssessmentTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceGroupArn = (i.resourceGroupArn !== undefined ? i.resourceGroupArn : h.arn(ctx));
  return out;
}

// aws:inspector/assessmentTemplate:AssessmentTemplate
export function AssessmentTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.duration = (i.duration !== undefined ? i.duration : 0);
  out.eventSubscriptions = (i.eventSubscriptions !== undefined ? i.eventSubscriptions : (depth > 4 ? [] : [(depth > 4 ? {} : T_inspector.inspector_AssessmentTemplateEventSubscription(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rulesPackageArns = (i.rulesPackageArns !== undefined ? i.rulesPackageArns : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetArn = (i.targetArn !== undefined ? i.targetArn : h.arn(ctx));
  return out;
}

// aws:inspector/resourceGroup:ResourceGroup
export function ResourceGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
