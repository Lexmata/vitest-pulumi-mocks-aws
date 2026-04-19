// GENERATED FILE — do not edit.
// Service: autoscalingplans   (8 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_autoscalingplans from "./autoscalingplans.js";

// aws:autoscalingplans/ScalingPlanApplicationSource:ScalingPlanApplicationSource
export function autoscalingplans_ScalingPlanApplicationSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudformationStackArn = h.arn(ctx);
  out.tagFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanApplicationSourceTagFilter(ctx, depth + 1))]);
  return out;
}

// aws:autoscalingplans/ScalingPlanApplicationSourceTagFilter:ScalingPlanApplicationSourceTagFilter
export function autoscalingplans_ScalingPlanApplicationSourceTagFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:autoscalingplans/ScalingPlanScalingInstruction:ScalingPlanScalingInstruction
export function autoscalingplans_ScalingPlanScalingInstruction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizedLoadMetricSpecification = (depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification(ctx, depth + 1));
  out.disableDynamicScaling = false;
  out.maxCapacity = 0;
  out.minCapacity = 0;
  out.predefinedLoadMetricSpecification = (depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification(ctx, depth + 1));
  out.predictiveScalingMaxCapacityBehavior = "";
  out.predictiveScalingMaxCapacityBuffer = 0;
  out.predictiveScalingMode = "";
  out.resourceId = h.id(ctx, "resourceId");
  out.scalableDimension = "";
  out.scalingPolicyUpdateBehavior = "";
  out.scheduledActionBufferTime = 0;
  out.serviceNamespace = "";
  out.targetTrackingConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:autoscalingplans/ScalingPlanScalingInstructionCustomizedLoadMetricSpecification:ScalingPlanScalingInstructionCustomizedLoadMetricSpecification
export function autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = {};
  out.metricName = "";
  out.namespace = "";
  out.statistic = "";
  out.unit = "";
  return out;
}

// aws:autoscalingplans/ScalingPlanScalingInstructionPredefinedLoadMetricSpecification:ScalingPlanScalingInstructionPredefinedLoadMetricSpecification
export function autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedLoadMetricType = "";
  out.resourceLabel = "";
  return out;
}

// aws:autoscalingplans/ScalingPlanScalingInstructionTargetTrackingConfiguration:ScalingPlanScalingInstructionTargetTrackingConfiguration
export function autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizedScalingMetricSpecification = (depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification(ctx, depth + 1));
  out.disableScaleIn = false;
  out.estimatedInstanceWarmup = 0;
  out.predefinedScalingMetricSpecification = (depth > 4 ? {} : T_autoscalingplans.autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification(ctx, depth + 1));
  out.scaleInCooldown = 0;
  out.scaleOutCooldown = 0;
  out.targetValue = 0;
  return out;
}

// aws:autoscalingplans/ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification:ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification
export function autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = {};
  out.metricName = "";
  out.namespace = "";
  out.statistic = "";
  out.unit = "";
  return out;
}

// aws:autoscalingplans/ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification:ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification
export function autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedScalingMetricType = "";
  out.resourceLabel = "";
  return out;
}
