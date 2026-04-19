// GENERATED FILE — do not edit.
// Service: appautoscaling   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appautoscaling from "../types/appautoscaling.js";

// aws:appautoscaling/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmArns = (depth > 4 ? [] : [""]);
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policyType = (i.policyType !== undefined ? i.policyType : "");
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.scalableDimension = (i.scalableDimension !== undefined ? i.scalableDimension : "");
  out.serviceNamespace = (i.serviceNamespace !== undefined ? i.serviceNamespace : "");
  out.stepScalingPolicyConfiguration = (i.stepScalingPolicyConfiguration !== undefined ? i.stepScalingPolicyConfiguration : (depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyStepScalingPolicyConfiguration(ctx, depth + 1)));
  out.targetTrackingScalingPolicyConfiguration = (i.targetTrackingScalingPolicyConfiguration !== undefined ? i.targetTrackingScalingPolicyConfiguration : (depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration(ctx, depth + 1)));
  return out;
}

// aws:appautoscaling/scheduledAction:ScheduledAction
export function ScheduledAction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.endTime = (i.endTime !== undefined ? i.endTime : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.scalableDimension = (i.scalableDimension !== undefined ? i.scalableDimension : "");
  out.scalableTargetAction = (i.scalableTargetAction !== undefined ? i.scalableTargetAction : (depth > 4 ? {} : T_appautoscaling.appautoscaling_ScheduledActionScalableTargetAction(ctx, depth + 1)));
  out.schedule = (i.schedule !== undefined ? i.schedule : "");
  out.serviceNamespace = (i.serviceNamespace !== undefined ? i.serviceNamespace : "");
  out.startTime = (i.startTime !== undefined ? i.startTime : "");
  out.timezone = (i.timezone !== undefined ? i.timezone : "");
  return out;
}

// aws:appautoscaling/target:Target
export function Target(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.maxCapacity = (i.maxCapacity !== undefined ? i.maxCapacity : 0);
  out.minCapacity = (i.minCapacity !== undefined ? i.minCapacity : 0);
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.scalableDimension = (i.scalableDimension !== undefined ? i.scalableDimension : "");
  out.serviceNamespace = (i.serviceNamespace !== undefined ? i.serviceNamespace : "");
  out.suspendedState = (i.suspendedState !== undefined ? i.suspendedState : (depth > 4 ? {} : T_appautoscaling.appautoscaling_TargetSuspendedState(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
