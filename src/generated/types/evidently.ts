// GENERATED FILE — do not edit.
// Service: evidently   (13 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_evidently from "./evidently.js";

// aws:evidently/FeatureEvaluationRule:FeatureEvaluationRule
export function evidently_FeatureEvaluationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:evidently/FeatureVariation:FeatureVariation
export function evidently_FeatureVariation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = (depth > 4 ? {} : T_evidently.evidently_FeatureVariationValue(ctx, depth + 1));
  return out;
}

// aws:evidently/FeatureVariationValue:FeatureVariationValue
export function evidently_FeatureVariationValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.boolValue = "";
  out.doubleValue = "";
  out.longValue = "";
  out.stringValue = "";
  return out;
}

// aws:evidently/LaunchExecution:LaunchExecution
export function evidently_LaunchExecution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endedTime = "";
  out.startedTime = "";
  return out;
}

// aws:evidently/LaunchGroup:LaunchGroup
export function evidently_LaunchGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.feature = "";
  out.name = ctx.name;
  out.variation = "";
  return out;
}

// aws:evidently/LaunchMetricMonitor:LaunchMetricMonitor
export function evidently_LaunchMetricMonitor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDefinition = (depth > 4 ? {} : T_evidently.evidently_LaunchMetricMonitorMetricDefinition(ctx, depth + 1));
  return out;
}

// aws:evidently/LaunchMetricMonitorMetricDefinition:LaunchMetricMonitorMetricDefinition
export function evidently_LaunchMetricMonitorMetricDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityIdKey = "";
  out.eventPattern = "";
  out.name = ctx.name;
  out.unitLabel = "";
  out.valueKey = "";
  return out;
}

// aws:evidently/LaunchScheduledSplitsConfig:LaunchScheduledSplitsConfig
export function evidently_LaunchScheduledSplitsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.steps = (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_LaunchScheduledSplitsConfigStep(ctx, depth + 1))]);
  return out;
}

// aws:evidently/LaunchScheduledSplitsConfigStep:LaunchScheduledSplitsConfigStep
export function evidently_LaunchScheduledSplitsConfigStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupWeights = {};
  out.segmentOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_LaunchScheduledSplitsConfigStepSegmentOverride(ctx, depth + 1))]);
  out.startTime = "";
  return out;
}

// aws:evidently/LaunchScheduledSplitsConfigStepSegmentOverride:LaunchScheduledSplitsConfigStepSegmentOverride
export function evidently_LaunchScheduledSplitsConfigStepSegmentOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.evaluationOrder = 0;
  out.segment = "";
  out.weights = {};
  return out;
}

// aws:evidently/ProjectDataDelivery:ProjectDataDelivery
export function evidently_ProjectDataDelivery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_evidently.evidently_ProjectDataDeliveryCloudwatchLogs(ctx, depth + 1));
  out.s3Destination = (depth > 4 ? {} : T_evidently.evidently_ProjectDataDeliveryS3Destination(ctx, depth + 1));
  return out;
}

// aws:evidently/ProjectDataDeliveryCloudwatchLogs:ProjectDataDeliveryCloudwatchLogs
export function evidently_ProjectDataDeliveryCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroup = "";
  return out;
}

// aws:evidently/ProjectDataDeliveryS3Destination:ProjectDataDeliveryS3Destination
export function evidently_ProjectDataDeliveryS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.prefix = "";
  return out;
}
