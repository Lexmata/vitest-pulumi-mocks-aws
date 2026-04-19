// GENERATED FILE — do not edit.
// Service: gamelift   (14 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_gamelift from "./gamelift.js";

// aws:gamelift/AliasRoutingStrategy:AliasRoutingStrategy
export function gamelift_AliasRoutingStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fleetId = h.id(ctx, "fleetId");
  out.message = "";
  out.type = "";
  return out;
}

// aws:gamelift/BuildStorageLocation:BuildStorageLocation
export function gamelift_BuildStorageLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  out.objectVersion = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:gamelift/FleetCertificateConfiguration:FleetCertificateConfiguration
export function gamelift_FleetCertificateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateType = "";
  return out;
}

// aws:gamelift/FleetEc2InboundPermission:FleetEc2InboundPermission
export function gamelift_FleetEc2InboundPermission(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.ipRange = "";
  out.protocol = "";
  out.toPort = 443;
  return out;
}

// aws:gamelift/FleetResourceCreationLimitPolicy:FleetResourceCreationLimitPolicy
export function gamelift_FleetResourceCreationLimitPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.newGameSessionsPerCreator = 0;
  out.policyPeriodInMinutes = 0;
  return out;
}

// aws:gamelift/FleetRuntimeConfiguration:FleetRuntimeConfiguration
export function gamelift_FleetRuntimeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gameSessionActivationTimeoutSeconds = 30;
  out.maxConcurrentGameSessionActivations = 0;
  out.serverProcesses = (depth > 4 ? [] : [(depth > 4 ? {} : T_gamelift.gamelift_FleetRuntimeConfigurationServerProcess(ctx, depth + 1))]);
  return out;
}

// aws:gamelift/FleetRuntimeConfigurationServerProcess:FleetRuntimeConfigurationServerProcess
export function gamelift_FleetRuntimeConfigurationServerProcess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.concurrentExecutions = 0;
  out.launchPath = "";
  out.parameters = "";
  return out;
}

// aws:gamelift/GameServerGroupAutoScalingPolicy:GameServerGroupAutoScalingPolicy
export function gamelift_GameServerGroupAutoScalingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.estimatedInstanceWarmup = 0;
  out.targetTrackingConfiguration = (depth > 4 ? {} : T_gamelift.gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration(ctx, depth + 1));
  return out;
}

// aws:gamelift/GameServerGroupAutoScalingPolicyTargetTrackingConfiguration:GameServerGroupAutoScalingPolicyTargetTrackingConfiguration
export function gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetValue = 0;
  return out;
}

// aws:gamelift/GameServerGroupInstanceDefinition:GameServerGroupInstanceDefinition
export function gamelift_GameServerGroupInstanceDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceType = "";
  out.weightedCapacity = "";
  return out;
}

// aws:gamelift/GameServerGroupLaunchTemplate:GameServerGroupLaunchTemplate
export function gamelift_GameServerGroupLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:gamelift/GameSessionQueuePlayerLatencyPolicy:GameSessionQueuePlayerLatencyPolicy
export function gamelift_GameSessionQueuePlayerLatencyPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumIndividualPlayerLatencyMilliseconds = 0;
  out.policyDurationSeconds = 0;
  return out;
}

// aws:gamelift/MatchmakingConfigurationGameProperty:MatchmakingConfigurationGameProperty
export function gamelift_MatchmakingConfigurationGameProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:gamelift/ScriptStorageLocation:ScriptStorageLocation
export function gamelift_ScriptStorageLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  out.objectVersion = "";
  out.roleArn = h.arn(ctx);
  return out;
}
