// GENERATED FILE — do not edit.
// Service: gamelift   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_gamelift from "../types/gamelift.js";

// aws:gamelift/alias:Alias
export function Alias(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.routingStrategy = (i.routingStrategy !== undefined ? i.routingStrategy : (depth > 4 ? {} : T_gamelift.gamelift_AliasRoutingStrategy(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:gamelift/build:Build
export function Build(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.operatingSystem = (i.operatingSystem !== undefined ? i.operatingSystem : "");
  out.storageLocation = (i.storageLocation !== undefined ? i.storageLocation : (depth > 4 ? {} : T_gamelift.gamelift_BuildStorageLocation(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:gamelift/fleet:Fleet
export function Fleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.buildArn = h.arn(ctx);
  out.buildId = (i.buildId !== undefined ? i.buildId : h.id(ctx, "buildId"));
  out.certificateConfiguration = (i.certificateConfiguration !== undefined ? i.certificateConfiguration : (depth > 4 ? {} : T_gamelift.gamelift_FleetCertificateConfiguration(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.ec2InboundPermissions = (i.ec2InboundPermissions !== undefined ? i.ec2InboundPermissions : (depth > 4 ? [] : [(depth > 4 ? {} : T_gamelift.gamelift_FleetEc2InboundPermission(ctx, depth + 1))]));
  out.ec2InstanceType = (i.ec2InstanceType !== undefined ? i.ec2InstanceType : "");
  out.fleetType = (i.fleetType !== undefined ? i.fleetType : "");
  out.instanceRoleArn = (i.instanceRoleArn !== undefined ? i.instanceRoleArn : h.arn(ctx));
  out.logPaths = (depth > 4 ? [] : [""]);
  out.metricGroups = (i.metricGroups !== undefined ? i.metricGroups : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.newGameSessionProtectionPolicy = (i.newGameSessionProtectionPolicy !== undefined ? i.newGameSessionProtectionPolicy : "");
  out.operatingSystem = "";
  out.resourceCreationLimitPolicy = (i.resourceCreationLimitPolicy !== undefined ? i.resourceCreationLimitPolicy : (depth > 4 ? {} : T_gamelift.gamelift_FleetResourceCreationLimitPolicy(ctx, depth + 1)));
  out.runtimeConfiguration = (i.runtimeConfiguration !== undefined ? i.runtimeConfiguration : (depth > 4 ? {} : T_gamelift.gamelift_FleetRuntimeConfiguration(ctx, depth + 1)));
  out.scriptArn = h.arn(ctx);
  out.scriptId = (i.scriptId !== undefined ? i.scriptId : h.id(ctx, "scriptId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:gamelift/gameServerGroup:GameServerGroup
export function GameServerGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoScalingGroupArn = h.arn(ctx);
  out.autoScalingPolicy = (i.autoScalingPolicy !== undefined ? i.autoScalingPolicy : (depth > 4 ? {} : T_gamelift.gamelift_GameServerGroupAutoScalingPolicy(ctx, depth + 1)));
  out.balancingStrategy = (i.balancingStrategy !== undefined ? i.balancingStrategy : "");
  out.gameServerGroupName = (i.gameServerGroupName !== undefined ? i.gameServerGroupName : "");
  out.gameServerProtectionPolicy = (i.gameServerProtectionPolicy !== undefined ? i.gameServerProtectionPolicy : "");
  out.instanceDefinitions = (i.instanceDefinitions !== undefined ? i.instanceDefinitions : (depth > 4 ? [] : [(depth > 4 ? {} : T_gamelift.gamelift_GameServerGroupInstanceDefinition(ctx, depth + 1))]));
  out.launchTemplate = (i.launchTemplate !== undefined ? i.launchTemplate : (depth > 4 ? {} : T_gamelift.gamelift_GameServerGroupLaunchTemplate(ctx, depth + 1)));
  out.maxSize = (i.maxSize !== undefined ? i.maxSize : 8);
  out.minSize = (i.minSize !== undefined ? i.minSize : 8);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSubnets = (i.vpcSubnets !== undefined ? i.vpcSubnets : (depth > 4 ? [] : [""]));
  return out;
}

// aws:gamelift/gameSessionQueue:GameSessionQueue
export function GameSessionQueue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.customEventData = (i.customEventData !== undefined ? i.customEventData : "");
  out.destinations = (i.destinations !== undefined ? i.destinations : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationTarget = (i.notificationTarget !== undefined ? i.notificationTarget : "");
  out.playerLatencyPolicies = (i.playerLatencyPolicies !== undefined ? i.playerLatencyPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_gamelift.gamelift_GameSessionQueuePlayerLatencyPolicy(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeoutInSeconds = (i.timeoutInSeconds !== undefined ? i.timeoutInSeconds : 30);
  return out;
}

// aws:gamelift/matchmakingConfiguration:MatchmakingConfiguration
export function MatchmakingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptanceRequired = (i.acceptanceRequired !== undefined ? i.acceptanceRequired : false);
  out.acceptanceTimeoutSeconds = (i.acceptanceTimeoutSeconds !== undefined ? i.acceptanceTimeoutSeconds : 30);
  out.additionalPlayerCount = (i.additionalPlayerCount !== undefined ? i.additionalPlayerCount : 1);
  out.arn = h.arn(ctx);
  out.backfillMode = (i.backfillMode !== undefined ? i.backfillMode : "");
  out.creationTime = "";
  out.customEventData = (i.customEventData !== undefined ? i.customEventData : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.flexMatchMode = (i.flexMatchMode !== undefined ? i.flexMatchMode : "");
  out.gameProperties = (i.gameProperties !== undefined ? i.gameProperties : (depth > 4 ? [] : [(depth > 4 ? {} : T_gamelift.gamelift_MatchmakingConfigurationGameProperty(ctx, depth + 1))]));
  out.gameSessionData = (i.gameSessionData !== undefined ? i.gameSessionData : "");
  out.gameSessionQueueArns = (i.gameSessionQueueArns !== undefined ? i.gameSessionQueueArns : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationTarget = (i.notificationTarget !== undefined ? i.notificationTarget : "");
  out.requestTimeoutSeconds = (i.requestTimeoutSeconds !== undefined ? i.requestTimeoutSeconds : 30);
  out.ruleSetArn = h.arn(ctx);
  out.ruleSetName = (i.ruleSetName !== undefined ? i.ruleSetName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:gamelift/matchmakingRuleSet:MatchmakingRuleSet
export function MatchmakingRuleSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleSetBody = (i.ruleSetBody !== undefined ? i.ruleSetBody : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:gamelift/script:Script
export function Script(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.storageLocation = (i.storageLocation !== undefined ? i.storageLocation : (depth > 4 ? {} : T_gamelift.gamelift_ScriptStorageLocation(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = (i.version !== undefined ? i.version : "1");
  out.zipFile = (i.zipFile !== undefined ? i.zipFile : "");
  return out;
}
