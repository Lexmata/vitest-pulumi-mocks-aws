// GENERATED FILE — do not edit.
// Service: ecs   (68 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecs from "./ecs.js";

// aws:ecs/CapacityProviderAutoScalingGroupProvider:CapacityProviderAutoScalingGroupProvider
export function ecs_CapacityProviderAutoScalingGroupProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoScalingGroupArn = h.arn(ctx);
  out.managedDraining = "";
  out.managedScaling = (depth > 4 ? {} : T_ecs.ecs_CapacityProviderAutoScalingGroupProviderManagedScaling(ctx, depth + 1));
  out.managedTerminationProtection = "";
  return out;
}

// aws:ecs/CapacityProviderAutoScalingGroupProviderManagedScaling:CapacityProviderAutoScalingGroupProviderManagedScaling
export function ecs_CapacityProviderAutoScalingGroupProviderManagedScaling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceWarmupPeriod = 0;
  out.maximumScalingStepSize = 8;
  out.minimumScalingStepSize = 8;
  out.status = "active";
  out.targetCapacity = 0;
  return out;
}

// aws:ecs/ClusterCapacityProvidersDefaultCapacityProviderStrategy:ClusterCapacityProvidersDefaultCapacityProviderStrategy
export function ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:ecs/ClusterConfiguration:ClusterConfiguration
export function ecs_ClusterConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.executeCommandConfiguration = (depth > 4 ? {} : T_ecs.ecs_ClusterConfigurationExecuteCommandConfiguration(ctx, depth + 1));
  out.managedStorageConfiguration = (depth > 4 ? {} : T_ecs.ecs_ClusterConfigurationManagedStorageConfiguration(ctx, depth + 1));
  return out;
}

// aws:ecs/ClusterConfigurationExecuteCommandConfiguration:ClusterConfigurationExecuteCommandConfiguration
export function ecs_ClusterConfigurationExecuteCommandConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.logConfiguration = (depth > 4 ? {} : T_ecs.ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration(ctx, depth + 1));
  out.logging = "";
  return out;
}

// aws:ecs/ClusterConfigurationExecuteCommandConfigurationLogConfiguration:ClusterConfigurationExecuteCommandConfigurationLogConfiguration
export function ecs_ClusterConfigurationExecuteCommandConfigurationLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchEncryptionEnabled = false;
  out.cloudWatchLogGroupName = "";
  out.s3BucketEncryptionEnabled = false;
  out.s3BucketName = "";
  out.s3KeyPrefix = "";
  return out;
}

// aws:ecs/ClusterConfigurationManagedStorageConfiguration:ClusterConfigurationManagedStorageConfiguration
export function ecs_ClusterConfigurationManagedStorageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fargateEphemeralStorageKmsKeyId = h.id(ctx, "fargateEphemeralStorageKmsKeyId");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:ecs/ClusterServiceConnectDefaults:ClusterServiceConnectDefaults
export function ecs_ClusterServiceConnectDefaults(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespace = "";
  return out;
}

// aws:ecs/ClusterSetting:ClusterSetting
export function ecs_ClusterSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:ecs/ServiceAlarms:ServiceAlarms
export function ecs_ServiceAlarms(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmNames = (depth > 4 ? [] : [""]);
  out.enable = true;
  out.rollback = false;
  return out;
}

// aws:ecs/ServiceCapacityProviderStrategy:ServiceCapacityProviderStrategy
export function ecs_ServiceCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:ecs/ServiceDeploymentCircuitBreaker:ServiceDeploymentCircuitBreaker
export function ecs_ServiceDeploymentCircuitBreaker(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enable = true;
  out.rollback = false;
  return out;
}

// aws:ecs/ServiceDeploymentController:ServiceDeploymentController
export function ecs_ServiceDeploymentController(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:ecs/ServiceLoadBalancer:ServiceLoadBalancer
export function ecs_ServiceLoadBalancer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.containerPort = 443;
  out.elbName = "";
  out.targetGroupArn = h.arn(ctx);
  return out;
}

// aws:ecs/ServiceNetworkConfiguration:ServiceNetworkConfiguration
export function ecs_ServiceNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ecs/ServiceOrderedPlacementStrategy:ServiceOrderedPlacementStrategy
export function ecs_ServiceOrderedPlacementStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.field = "";
  out.type = "";
  return out;
}

// aws:ecs/ServicePlacementConstraint:ServicePlacementConstraint
export function ecs_ServicePlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:ecs/ServiceServiceConnectConfiguration:ServiceServiceConnectConfiguration
export function ecs_ServiceServiceConnectConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logConfiguration = (depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationLogConfiguration(ctx, depth + 1));
  out.namespace = "";
  out.services = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationService(ctx, depth + 1))]);
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationLogConfiguration:ServiceServiceConnectConfigurationLogConfiguration
export function ecs_ServiceServiceConnectConfigurationLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDriver = "";
  out.options = {};
  out.secretOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption(ctx, depth + 1))]);
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationLogConfigurationSecretOption:ServiceServiceConnectConfigurationLogConfigurationSecretOption
export function ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.valueFrom = "";
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationService:ServiceServiceConnectConfigurationService
export function ecs_ServiceServiceConnectConfigurationService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientAlias = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationServiceClientAlias(ctx, depth + 1))]);
  out.discoveryName = "";
  out.ingressPortOverride = 443;
  out.portName = "";
  out.timeout = (depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationServiceTimeout(ctx, depth + 1));
  out.tls = (depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationServiceTls(ctx, depth + 1));
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationServiceClientAlias:ServiceServiceConnectConfigurationServiceClientAlias
export function ecs_ServiceServiceConnectConfigurationServiceClientAlias(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.port = 443;
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationServiceTimeout:ServiceServiceConnectConfigurationServiceTimeout
export function ecs_ServiceServiceConnectConfigurationServiceTimeout(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeoutSeconds = 30;
  out.perRequestTimeoutSeconds = 30;
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationServiceTls:ServiceServiceConnectConfigurationServiceTls
export function ecs_ServiceServiceConnectConfigurationServiceTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.issuerCertAuthority = (depth > 4 ? {} : T_ecs.ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority(ctx, depth + 1));
  out.kmsKey = "";
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:ecs/ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority:ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority
export function ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsPcaAuthorityArn = h.arn(ctx);
  return out;
}

// aws:ecs/ServiceServiceRegistries:ServiceServiceRegistries
export function ecs_ServiceServiceRegistries(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.containerPort = 443;
  out.port = 443;
  out.registryArn = h.arn(ctx);
  return out;
}

// aws:ecs/ServiceVolumeConfiguration:ServiceVolumeConfiguration
export function ecs_ServiceVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.managedEbsVolume = (depth > 4 ? {} : T_ecs.ecs_ServiceVolumeConfigurationManagedEbsVolume(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:ecs/ServiceVolumeConfigurationManagedEbsVolume:ServiceVolumeConfigurationManagedEbsVolume
export function ecs_ServiceVolumeConfigurationManagedEbsVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encrypted = false;
  out.fileSystemType = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.roleArn = h.arn(ctx);
  out.sizeInGb = 8;
  out.snapshotId = h.id(ctx, "snapshotId");
  out.tagSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_ServiceVolumeConfigurationManagedEbsVolumeTagSpecification(ctx, depth + 1))]);
  out.throughput = 0;
  out.volumeInitializationRate = 0;
  out.volumeType = "";
  return out;
}

// aws:ecs/ServiceVolumeConfigurationManagedEbsVolumeTagSpecification:ServiceVolumeConfigurationManagedEbsVolumeTagSpecification
export function ecs_ServiceVolumeConfigurationManagedEbsVolumeTagSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.propagateTags = "";
  out.resourceType = "";
  out.tags = {};
  return out;
}

// aws:ecs/ServiceVpcLatticeConfiguration:ServiceVpcLatticeConfiguration
export function ecs_ServiceVpcLatticeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.portName = "";
  out.roleArn = h.arn(ctx);
  out.targetGroupArn = h.arn(ctx);
  return out;
}

// aws:ecs/TaskDefinitionEphemeralStorage:TaskDefinitionEphemeralStorage
export function ecs_TaskDefinitionEphemeralStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sizeInGib = 8;
  return out;
}

// aws:ecs/TaskDefinitionInferenceAccelerator:TaskDefinitionInferenceAccelerator
export function ecs_TaskDefinitionInferenceAccelerator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.deviceType = "";
  return out;
}

// aws:ecs/TaskDefinitionPlacementConstraint:TaskDefinitionPlacementConstraint
export function ecs_TaskDefinitionPlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:ecs/TaskDefinitionProxyConfiguration:TaskDefinitionProxyConfiguration
export function ecs_TaskDefinitionProxyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.properties = {};
  out.type = "";
  return out;
}

// aws:ecs/TaskDefinitionRuntimePlatform:TaskDefinitionRuntimePlatform
export function ecs_TaskDefinitionRuntimePlatform(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuArchitecture = "";
  out.operatingSystemFamily = "";
  return out;
}

// aws:ecs/TaskDefinitionVolume:TaskDefinitionVolume
export function ecs_TaskDefinitionVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configureAtLaunch = false;
  out.dockerVolumeConfiguration = (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionVolumeDockerVolumeConfiguration(ctx, depth + 1));
  out.efsVolumeConfiguration = (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionVolumeEfsVolumeConfiguration(ctx, depth + 1));
  out.fsxWindowsFileServerVolumeConfiguration = (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration(ctx, depth + 1));
  out.hostPath = "";
  out.name = ctx.name;
  return out;
}

// aws:ecs/TaskDefinitionVolumeDockerVolumeConfiguration:TaskDefinitionVolumeDockerVolumeConfiguration
export function ecs_TaskDefinitionVolumeDockerVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoprovision = false;
  out.driver = "";
  out.driverOpts = {};
  out.labels = {};
  out.scope = "";
  return out;
}

// aws:ecs/TaskDefinitionVolumeEfsVolumeConfiguration:TaskDefinitionVolumeEfsVolumeConfiguration
export function ecs_TaskDefinitionVolumeEfsVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationConfig = (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig(ctx, depth + 1));
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.rootDirectory = "";
  out.transitEncryption = "";
  out.transitEncryptionPort = 443;
  return out;
}

// aws:ecs/TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig:TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
export function ecs_TaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointId = h.id(ctx, "accessPointId");
  out.iam = "";
  return out;
}

// aws:ecs/TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration:TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
export function ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationConfig = (depth > 4 ? {} : T_ecs.ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig(ctx, depth + 1));
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.rootDirectory = "";
  return out;
}

// aws:ecs/TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig:TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
export function ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialsParameter = "";
  out.domain = h.endpoint(ctx, "domain");
  return out;
}

// aws:ecs/TaskSetCapacityProviderStrategy:TaskSetCapacityProviderStrategy
export function ecs_TaskSetCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:ecs/TaskSetLoadBalancer:TaskSetLoadBalancer
export function ecs_TaskSetLoadBalancer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.containerPort = 443;
  out.loadBalancerName = "";
  out.targetGroupArn = h.arn(ctx);
  return out;
}

// aws:ecs/TaskSetNetworkConfiguration:TaskSetNetworkConfiguration
export function ecs_TaskSetNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ecs/TaskSetScale:TaskSetScale
export function ecs_TaskSetScale(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:ecs/TaskSetServiceRegistries:TaskSetServiceRegistries
export function ecs_TaskSetServiceRegistries(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.containerPort = 443;
  out.port = 443;
  out.registryArn = h.arn(ctx);
  return out;
}

// aws:ecs/getClusterServiceConnectDefault:getClusterServiceConnectDefault
export function ecs_getClusterServiceConnectDefault(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespace = "";
  return out;
}

// aws:ecs/getClusterSetting:getClusterSetting
export function ecs_getClusterSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:ecs/getTaskDefinitionEphemeralStorage:getTaskDefinitionEphemeralStorage
export function ecs_getTaskDefinitionEphemeralStorage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sizeInGib = 8;
  return out;
}

// aws:ecs/getTaskDefinitionInferenceAccelerator:getTaskDefinitionInferenceAccelerator
export function ecs_getTaskDefinitionInferenceAccelerator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.deviceType = "";
  return out;
}

// aws:ecs/getTaskDefinitionPlacementConstraint:getTaskDefinitionPlacementConstraint
export function ecs_getTaskDefinitionPlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:ecs/getTaskDefinitionProxyConfiguration:getTaskDefinitionProxyConfiguration
export function ecs_getTaskDefinitionProxyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.properties = {};
  out.type = "";
  return out;
}

// aws:ecs/getTaskDefinitionRuntimePlatform:getTaskDefinitionRuntimePlatform
export function ecs_getTaskDefinitionRuntimePlatform(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuArchitecture = "";
  out.operatingSystemFamily = "";
  return out;
}

// aws:ecs/getTaskDefinitionVolume:getTaskDefinitionVolume
export function ecs_getTaskDefinitionVolume(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configureAtLaunch = false;
  out.dockerVolumeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionVolumeDockerVolumeConfiguration(ctx, depth + 1))]);
  out.efsVolumeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionVolumeEfsVolumeConfiguration(ctx, depth + 1))]);
  out.fsxWindowsFileServerVolumeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration(ctx, depth + 1))]);
  out.hostPath = "";
  out.name = ctx.name;
  return out;
}

// aws:ecs/getTaskDefinitionVolumeDockerVolumeConfiguration:getTaskDefinitionVolumeDockerVolumeConfiguration
export function ecs_getTaskDefinitionVolumeDockerVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoprovision = false;
  out.driver = "";
  out.driverOpts = {};
  out.labels = {};
  out.scope = "";
  return out;
}

// aws:ecs/getTaskDefinitionVolumeEfsVolumeConfiguration:getTaskDefinitionVolumeEfsVolumeConfiguration
export function ecs_getTaskDefinitionVolumeEfsVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig(ctx, depth + 1))]);
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.rootDirectory = "";
  out.transitEncryption = "";
  out.transitEncryptionPort = 443;
  return out;
}

// aws:ecs/getTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig:getTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
export function ecs_getTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointId = h.id(ctx, "accessPointId");
  out.iam = "";
  return out;
}

// aws:ecs/getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration:getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
export function ecs_getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig(ctx, depth + 1))]);
  out.fileSystemId = h.id(ctx, "fileSystemId");
  out.rootDirectory = "";
  return out;
}

// aws:ecs/getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig:getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
export function ecs_getTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentialsParameter = "";
  out.domain = h.endpoint(ctx, "domain");
  return out;
}

// aws:ecs/getTaskExecutionCapacityProviderStrategy:getTaskExecutionCapacityProviderStrategy
export function ecs_getTaskExecutionCapacityProviderStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.base = 0;
  out.capacityProvider = "";
  out.weight = 0;
  return out;
}

// aws:ecs/getTaskExecutionNetworkConfiguration:getTaskExecutionNetworkConfiguration
export function ecs_getTaskExecutionNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assignPublicIp = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ecs/getTaskExecutionOverrides:getTaskExecutionOverrides
export function ecs_getTaskExecutionOverrides(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionOverridesContainerOverride(ctx, depth + 1))]);
  out.cpu = "";
  out.executionRoleArn = h.arn(ctx);
  out.inferenceAcceleratorOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionOverridesInferenceAcceleratorOverride(ctx, depth + 1))]);
  out.memory = "";
  out.taskRoleArn = h.arn(ctx);
  return out;
}

// aws:ecs/getTaskExecutionOverridesContainerOverride:getTaskExecutionOverridesContainerOverride
export function ecs_getTaskExecutionOverridesContainerOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.cpu = 0;
  out.environments = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionOverridesContainerOverrideEnvironment(ctx, depth + 1))]);
  out.memory = 0;
  out.memoryReservation = 0;
  out.name = ctx.name;
  out.resourceRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_ecs.ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement(ctx, depth + 1))]);
  return out;
}

// aws:ecs/getTaskExecutionOverridesContainerOverrideEnvironment:getTaskExecutionOverridesContainerOverrideEnvironment
export function ecs_getTaskExecutionOverridesContainerOverrideEnvironment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:ecs/getTaskExecutionOverridesContainerOverrideResourceRequirement:getTaskExecutionOverridesContainerOverrideResourceRequirement
export function ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:ecs/getTaskExecutionOverridesInferenceAcceleratorOverride:getTaskExecutionOverridesInferenceAcceleratorOverride
export function ecs_getTaskExecutionOverridesInferenceAcceleratorOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.deviceType = "";
  return out;
}

// aws:ecs/getTaskExecutionPlacementConstraint:getTaskExecutionPlacementConstraint
export function ecs_getTaskExecutionPlacementConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.type = "";
  return out;
}

// aws:ecs/getTaskExecutionPlacementStrategy:getTaskExecutionPlacementStrategy
export function ecs_getTaskExecutionPlacementStrategy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.field = "";
  out.type = "";
  return out;
}
