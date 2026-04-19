// GENERATED FILE — do not edit.
// Service: appautoscaling   (12 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appautoscaling from "./appautoscaling.js";

// aws:appautoscaling/PolicyStepScalingPolicyConfiguration:PolicyStepScalingPolicyConfiguration
export function appautoscaling_PolicyStepScalingPolicyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adjustmentType = "";
  out.cooldown = 0;
  out.metricAggregationType = "";
  out.minAdjustmentMagnitude = 0;
  out.stepAdjustments = (depth > 4 ? [] : [(depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment(ctx, depth + 1))]);
  return out;
}

// aws:appautoscaling/PolicyStepScalingPolicyConfigurationStepAdjustment:PolicyStepScalingPolicyConfigurationStepAdjustment
export function appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricIntervalLowerBound = "";
  out.metricIntervalUpperBound = "";
  out.scalingAdjustment = 0;
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfiguration:PolicyTargetTrackingScalingPolicyConfiguration
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizedMetricSpecification = (depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification(ctx, depth + 1));
  out.disableScaleIn = false;
  out.predefinedMetricSpecification = (depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification(ctx, depth + 1));
  out.scaleInCooldown = 0;
  out.scaleOutCooldown = 0;
  out.targetValue = 0;
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification:PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.metrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric(ctx, depth + 1))]);
  out.namespace = "";
  out.statistic = "";
  out.unit = "";
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension:PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric:PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.id = h.id(ctx, "id");
  out.label = "";
  out.metricStat = (depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat(ctx, depth + 1));
  out.returnData = false;
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat:PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metric = (depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric(ctx, depth + 1));
  out.stat = "";
  out.unit = "";
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric:PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_appautoscaling.appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.namespace = "";
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension:PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:appautoscaling/PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification:PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedMetricType = "";
  out.resourceLabel = "";
  return out;
}

// aws:appautoscaling/ScheduledActionScalableTargetAction:ScheduledActionScalableTargetAction
export function appautoscaling_ScheduledActionScalableTargetAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxCapacity = 0;
  out.minCapacity = 0;
  return out;
}

// aws:appautoscaling/TargetSuspendedState:TargetSuspendedState
export function appautoscaling_TargetSuspendedState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dynamicScalingInSuspended = false;
  out.dynamicScalingOutSuspended = false;
  out.scheduledScalingSuspended = false;
  return out;
}
