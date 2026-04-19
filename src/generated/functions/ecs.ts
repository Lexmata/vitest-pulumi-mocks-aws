// GENERATED FILE — do not edit.
// Service: ecs   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecs from "../types/ecs.js";

// aws:ecs/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.id = h.id(ctx, "id");
  out.pendingTasksCount = 1;
  out.registeredContainerInstancesCount = 1;
  out.runningTasksCount = 1;
  out.serviceConnectDefaults = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getClusterServiceConnectDefault(ctx, depth + 1))]);
  out.settings = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getClusterSetting(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:ecs/getClusters:getClusters
export function getClusters(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:ecs/getContainerDefinition:getContainerDefinition
export function getContainerDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = (i.containerName !== undefined ? i.containerName : "");
  out.cpu = 0;
  out.disableNetworking = false;
  out.dockerLabels = {};
  out.environment = {};
  out.id = h.id(ctx, "id");
  out.image = "";
  out.imageDigest = "";
  out.memory = 0;
  out.memoryReservation = 0;
  out.taskDefinition = (i.taskDefinition !== undefined ? i.taskDefinition : "");
  return out;
}

// aws:ecs/getService:getService
export function getService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZoneRebalancing = ctx.region + "a";
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.desiredCount = 1;
  out.id = h.id(ctx, "id");
  out.launchType = "";
  out.schedulingStrategy = "";
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.taskDefinition = "";
  return out;
}

// aws:ecs/getTaskDefinition:getTaskDefinition
export function getTaskDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.arnWithoutRevision = "";
  out.containerDefinitions = "";
  out.cpu = "";
  out.enableFaultInjection = true;
  out.ephemeralStorages = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionEphemeralStorage(ctx, depth + 1))]);
  out.executionRoleArn = h.arn(ctx);
  out.family = "";
  out.id = h.id(ctx, "id");
  out.inferenceAccelerators = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionInferenceAccelerator(ctx, depth + 1))]);
  out.ipcMode = "";
  out.memory = "";
  out.networkMode = "";
  out.pidMode = "";
  out.placementConstraints = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionPlacementConstraint(ctx, depth + 1))]);
  out.proxyConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionProxyConfiguration(ctx, depth + 1))]);
  out.requiresCompatibilities = (depth > 4 ? [] : [""]);
  out.revision = 0;
  out.runtimePlatforms = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionRuntimePlatform(ctx, depth + 1))]);
  out.status = "active";
  out.taskDefinition = (i.taskDefinition !== undefined ? i.taskDefinition : "");
  out.taskRoleArn = h.arn(ctx);
  out.volumes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionVolume(ctx, depth + 1))]);
  return out;
}

// aws:ecs/getTaskExecution:getTaskExecution
export function getTaskExecution(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityProviderStrategies = (i.capacityProviderStrategies !== undefined ? i.capacityProviderStrategies : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionCapacityProviderStrategy(ctx, depth + 1))]));
  out.clientToken = (i.clientToken !== undefined ? i.clientToken : "");
  out.cluster = (i.cluster !== undefined ? i.cluster : "");
  out.desiredCount = (i.desiredCount !== undefined ? i.desiredCount : 1);
  out.enableEcsManagedTags = (i.enableEcsManagedTags !== undefined ? i.enableEcsManagedTags : true);
  out.enableExecuteCommand = (i.enableExecuteCommand !== undefined ? i.enableExecuteCommand : true);
  out.group = (i.group !== undefined ? i.group : "");
  out.id = h.id(ctx, "id");
  out.launchType = (i.launchType !== undefined ? i.launchType : "");
  out.networkConfiguration = (i.networkConfiguration !== undefined ? i.networkConfiguration : (depth > 4 ? {} : T_ecs.ecs_getTaskExecutionNetworkConfiguration(ctx, depth + 1)));
  out.overrides = (i.overrides !== undefined ? i.overrides : (depth > 4 ? {} : T_ecs.ecs_getTaskExecutionOverrides(ctx, depth + 1)));
  out.placementConstraints = (i.placementConstraints !== undefined ? i.placementConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionPlacementConstraint(ctx, depth + 1))]));
  out.placementStrategies = (i.placementStrategies !== undefined ? i.placementStrategies : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionPlacementStrategy(ctx, depth + 1))]));
  out.platformVersion = (i.platformVersion !== undefined ? i.platformVersion : "");
  out.propagateTags = (i.propagateTags !== undefined ? i.propagateTags : "");
  out.referenceId = (i.referenceId !== undefined ? i.referenceId : h.id(ctx, "referenceId"));
  out.startedBy = (i.startedBy !== undefined ? i.startedBy : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.taskArns = (depth > 4 ? [] : [""]);
  out.taskDefinition = (i.taskDefinition !== undefined ? i.taskDefinition : "");
  return out;
}
