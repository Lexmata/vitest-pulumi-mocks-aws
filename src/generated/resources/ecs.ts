// GENERATED FILE — do not edit.
// Service: ecs   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecs from "../types/ecs.js";

// aws:ecs/accountSettingDefault:AccountSettingDefault
export function AccountSettingDefault(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.principalArn = h.arn(ctx);
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:ecs/capacityProvider:CapacityProvider
export function CapacityProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoScalingGroupProvider = (i.autoScalingGroupProvider !== undefined ? i.autoScalingGroupProvider : (depth > 4 ? {} : T_ecs.ecs_CapacityProviderAutoScalingGroupProvider(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ecs/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_ecs.ecs_ClusterConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serviceConnectDefaults = (i.serviceConnectDefaults !== undefined ? i.serviceConnectDefaults : (depth > 4 ? {} : T_ecs.ecs_ClusterServiceConnectDefaults(ctx, depth + 1)));
  out.settings = (i.settings !== undefined ? i.settings : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ClusterSetting(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ecs/clusterCapacityProviders:ClusterCapacityProviders
export function ClusterCapacityProviders(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityProviders = (i.capacityProviders !== undefined ? i.capacityProviders : (depth > 4 ? [] : [""]));
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.defaultCapacityProviderStrategies = (i.defaultCapacityProviderStrategies !== undefined ? i.defaultCapacityProviderStrategies : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy(ctx, depth + 1))]));
  return out;
}

// aws:ecs/service:Service
export function Service(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (i.alarms !== undefined ? i.alarms : (depth > 4 ? {} : T_ecs.ecs_ServiceAlarms(ctx, depth + 1)));
  out.availabilityZoneRebalancing = (i.availabilityZoneRebalancing !== undefined ? i.availabilityZoneRebalancing : ctx.region + "a");
  out.capacityProviderStrategies = (i.capacityProviderStrategies !== undefined ? i.capacityProviderStrategies : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceCapacityProviderStrategy(ctx, depth + 1))]));
  out.cluster = (i.cluster !== undefined ? i.cluster : "");
  out.deploymentCircuitBreaker = (i.deploymentCircuitBreaker !== undefined ? i.deploymentCircuitBreaker : (depth > 4 ? {} : T_ecs.ecs_ServiceDeploymentCircuitBreaker(ctx, depth + 1)));
  out.deploymentController = (i.deploymentController !== undefined ? i.deploymentController : (depth > 4 ? {} : T_ecs.ecs_ServiceDeploymentController(ctx, depth + 1)));
  out.deploymentMaximumPercent = (i.deploymentMaximumPercent !== undefined ? i.deploymentMaximumPercent : 0);
  out.deploymentMinimumHealthyPercent = (i.deploymentMinimumHealthyPercent !== undefined ? i.deploymentMinimumHealthyPercent : 0);
  out.desiredCount = (i.desiredCount !== undefined ? i.desiredCount : 1);
  out.enableEcsManagedTags = (i.enableEcsManagedTags !== undefined ? i.enableEcsManagedTags : true);
  out.enableExecuteCommand = (i.enableExecuteCommand !== undefined ? i.enableExecuteCommand : true);
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.forceNewDeployment = (i.forceNewDeployment !== undefined ? i.forceNewDeployment : false);
  out.healthCheckGracePeriodSeconds = (i.healthCheckGracePeriodSeconds !== undefined ? i.healthCheckGracePeriodSeconds : 0);
  out.iamRole = (i.iamRole !== undefined ? i.iamRole : "");
  out.launchType = (i.launchType !== undefined ? i.launchType : "");
  out.loadBalancers = (i.loadBalancers !== undefined ? i.loadBalancers : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceLoadBalancer(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkConfiguration = (i.networkConfiguration !== undefined ? i.networkConfiguration : (depth > 4 ? {} : T_ecs.ecs_ServiceNetworkConfiguration(ctx, depth + 1)));
  out.orderedPlacementStrategies = (i.orderedPlacementStrategies !== undefined ? i.orderedPlacementStrategies : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceOrderedPlacementStrategy(ctx, depth + 1))]));
  out.placementConstraints = (i.placementConstraints !== undefined ? i.placementConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServicePlacementConstraint(ctx, depth + 1))]));
  out.platformVersion = (i.platformVersion !== undefined ? i.platformVersion : "");
  out.propagateTags = (i.propagateTags !== undefined ? i.propagateTags : "");
  out.schedulingStrategy = (i.schedulingStrategy !== undefined ? i.schedulingStrategy : "");
  out.serviceConnectConfiguration = (i.serviceConnectConfiguration !== undefined ? i.serviceConnectConfiguration : (depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfiguration(ctx, depth + 1)));
  out.serviceRegistries = (i.serviceRegistries !== undefined ? i.serviceRegistries : (depth > 4 ? {} : T_ecs.ecs_ServiceServiceRegistries(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.taskDefinition = (i.taskDefinition !== undefined ? i.taskDefinition : "");
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  out.volumeConfiguration = (i.volumeConfiguration !== undefined ? i.volumeConfiguration : (depth > 4 ? {} : T_ecs.ecs_ServiceVolumeConfiguration(ctx, depth + 1)));
  out.vpcLatticeConfigurations = (i.vpcLatticeConfigurations !== undefined ? i.vpcLatticeConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceVpcLatticeConfiguration(ctx, depth + 1))]));
  out.waitForSteadyState = (i.waitForSteadyState !== undefined ? i.waitForSteadyState : false);
  return out;
}

// aws:ecs/tag:Tag
export function Tag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = (i.key !== undefined ? i.key : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:ecs/taskDefinition:TaskDefinition
export function TaskDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.arnWithoutRevision = "";
  out.containerDefinitions = (i.containerDefinitions !== undefined ? i.containerDefinitions : "");
  out.cpu = (i.cpu !== undefined ? i.cpu : "");
  out.enableFaultInjection = (i.enableFaultInjection !== undefined ? i.enableFaultInjection : true);
  out.ephemeralStorage = (i.ephemeralStorage !== undefined ? i.ephemeralStorage : (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionEphemeralStorage(ctx, depth + 1)));
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.family = (i.family !== undefined ? i.family : "");
  out.inferenceAccelerators = (i.inferenceAccelerators !== undefined ? i.inferenceAccelerators : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_TaskDefinitionInferenceAccelerator(ctx, depth + 1))]));
  out.ipcMode = (i.ipcMode !== undefined ? i.ipcMode : "");
  out.memory = (i.memory !== undefined ? i.memory : "");
  out.networkMode = (i.networkMode !== undefined ? i.networkMode : "");
  out.pidMode = (i.pidMode !== undefined ? i.pidMode : "");
  out.placementConstraints = (i.placementConstraints !== undefined ? i.placementConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_TaskDefinitionPlacementConstraint(ctx, depth + 1))]));
  out.proxyConfiguration = (i.proxyConfiguration !== undefined ? i.proxyConfiguration : (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionProxyConfiguration(ctx, depth + 1)));
  out.requiresCompatibilities = (i.requiresCompatibilities !== undefined ? i.requiresCompatibilities : (depth > 4 ? [] : [""]));
  out.revision = 0;
  out.runtimePlatform = (i.runtimePlatform !== undefined ? i.runtimePlatform : (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionRuntimePlatform(ctx, depth + 1)));
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.taskRoleArn = (i.taskRoleArn !== undefined ? i.taskRoleArn : h.arn(ctx));
  out.trackLatest = (i.trackLatest !== undefined ? i.trackLatest : false);
  out.volumes = (i.volumes !== undefined ? i.volumes : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_TaskDefinitionVolume(ctx, depth + 1))]));
  return out;
}

// aws:ecs/taskSet:TaskSet
export function TaskSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacityProviderStrategies = (i.capacityProviderStrategies !== undefined ? i.capacityProviderStrategies : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_TaskSetCapacityProviderStrategy(ctx, depth + 1))]));
  out.cluster = (i.cluster !== undefined ? i.cluster : "");
  out.externalId = (i.externalId !== undefined ? i.externalId : h.id(ctx, "externalId"));
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.launchType = (i.launchType !== undefined ? i.launchType : "");
  out.loadBalancers = (i.loadBalancers !== undefined ? i.loadBalancers : (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_TaskSetLoadBalancer(ctx, depth + 1))]));
  out.networkConfiguration = (i.networkConfiguration !== undefined ? i.networkConfiguration : (depth > 4 ? {} : T_ecs.ecs_TaskSetNetworkConfiguration(ctx, depth + 1)));
  out.platformVersion = (i.platformVersion !== undefined ? i.platformVersion : "");
  out.scale = (i.scale !== undefined ? i.scale : (depth > 4 ? {} : T_ecs.ecs_TaskSetScale(ctx, depth + 1)));
  out.service = (i.service !== undefined ? i.service : "");
  out.serviceRegistries = (i.serviceRegistries !== undefined ? i.serviceRegistries : (depth > 4 ? {} : T_ecs.ecs_TaskSetServiceRegistries(ctx, depth + 1)));
  out.stabilityStatus = "";
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.taskDefinition = (i.taskDefinition !== undefined ? i.taskDefinition : "");
  out.taskSetId = h.id(ctx, "taskSetId");
  out.waitUntilStable = (i.waitUntilStable !== undefined ? i.waitUntilStable : false);
  out.waitUntilStableTimeout = (i.waitUntilStableTimeout !== undefined ? i.waitUntilStableTimeout : "");
  return out;
}
