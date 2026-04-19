// GENERATED FILE — do not edit.
// Service: scheduler   (14 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_scheduler from "./scheduler.js";

// aws:scheduler/ScheduleFlexibleTimeWindow:ScheduleFlexibleTimeWindow
export function scheduler_ScheduleFlexibleTimeWindow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumWindowInMinutes = 0;
  out.mode = "";
  return out;
}

// aws:scheduler/ScheduleTarget:ScheduleTarget
export function scheduler_ScheduleTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deadLetterConfig = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetDeadLetterConfig(ctx, depth + 1));
  out.ecsParameters = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetEcsParameters(ctx, depth + 1));
  out.eventbridgeParameters = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetEventbridgeParameters(ctx, depth + 1));
  out.input = "";
  out.kinesisParameters = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetKinesisParameters(ctx, depth + 1));
  out.retryPolicy = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetRetryPolicy(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  out.sagemakerPipelineParameters = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetSagemakerPipelineParameters(ctx, depth + 1));
  out.sqsParameters = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetSqsParameters(ctx, depth + 1));
  return out;
}

// aws:scheduler/ScheduleTargetDeadLetterConfig:ScheduleTargetDeadLetterConfig
export function scheduler_ScheduleTargetDeadLetterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:scheduler/ScheduleTargetEcsParameters:ScheduleTargetEcsParameters
export function scheduler_ScheduleTargetEcsParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityProviderStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy(ctx, depth + 1))]);
  out.enableEcsManagedTags = true;
  out.enableExecuteCommand = true;
  out.group = "";
  out.launchType = "";
  out.networkConfiguration = (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetEcsParametersNetworkConfiguration(ctx, depth + 1));
  out.placementConstraints = (depth > 4 ? [] : [(depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetEcsParametersPlacementConstraint(ctx, depth + 1))]);
  out.placementStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetEcsParametersPlacementStrategy(ctx, depth + 1))]);
  out.platformVersion = "";
  out.propagateTags = "";
  out.referenceId = h.id(ctx, "referenceId");
  out.tags = {};
  out.taskCount = 1;
  out.taskDefinitionArn = h.arn(ctx);
  return out;
}

// aws:scheduler/ScheduleTargetEcsParametersCapacityProviderStrategy:ScheduleTargetEcsParametersCapacityProviderStrategy
export function scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:scheduler/ScheduleTargetEcsParametersNetworkConfiguration:ScheduleTargetEcsParametersNetworkConfiguration
export function scheduler_ScheduleTargetEcsParametersNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:scheduler/ScheduleTargetEcsParametersPlacementConstraint:ScheduleTargetEcsParametersPlacementConstraint
export function scheduler_ScheduleTargetEcsParametersPlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:scheduler/ScheduleTargetEcsParametersPlacementStrategy:ScheduleTargetEcsParametersPlacementStrategy
export function scheduler_ScheduleTargetEcsParametersPlacementStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.field = "";
  out.type = "";
  return out;
}

// aws:scheduler/ScheduleTargetEventbridgeParameters:ScheduleTargetEventbridgeParameters
export function scheduler_ScheduleTargetEventbridgeParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.detailType = "";
  out.source = "";
  return out;
}

// aws:scheduler/ScheduleTargetKinesisParameters:ScheduleTargetKinesisParameters
export function scheduler_ScheduleTargetKinesisParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKey = "";
  return out;
}

// aws:scheduler/ScheduleTargetRetryPolicy:ScheduleTargetRetryPolicy
export function scheduler_ScheduleTargetRetryPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumEventAgeInSeconds = 0;
  out.maximumRetryAttempts = 0;
  return out;
}

// aws:scheduler/ScheduleTargetSagemakerPipelineParameters:ScheduleTargetSagemakerPipelineParameters
export function scheduler_ScheduleTargetSagemakerPipelineParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pipelineParameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_scheduler.scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter(ctx, depth + 1))]);
  return out;
}

// aws:scheduler/ScheduleTargetSagemakerPipelineParametersPipelineParameter:ScheduleTargetSagemakerPipelineParametersPipelineParameter
export function scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:scheduler/ScheduleTargetSqsParameters:ScheduleTargetSqsParameters
export function scheduler_ScheduleTargetSqsParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageGroupId = h.id(ctx, "messageGroupId");
  return out;
}
