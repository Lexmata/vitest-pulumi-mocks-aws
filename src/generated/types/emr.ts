// GENERATED FILE — do not edit.
// Service: emr   (36 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emr from "./emr.js";

// aws:emr/BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange:BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange
export function emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxRange = 0;
  out.minRange = 0;
  return out;
}

// aws:emr/ClusterAutoTerminationPolicy:ClusterAutoTerminationPolicy
export function emr_ClusterAutoTerminationPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.idleTimeout = 30;
  return out;
}

// aws:emr/ClusterBootstrapAction:ClusterBootstrapAction
export function emr_ClusterBootstrapAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:emr/ClusterCoreInstanceFleet:ClusterCoreInstanceFleet
export function emr_ClusterCoreInstanceFleet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.instanceTypeConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleetInstanceTypeConfig(ctx, depth + 1))]);
  out.launchSpecifications = (depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleetLaunchSpecifications(ctx, depth + 1));
  out.name = ctx.name;
  out.provisionedOnDemandCapacity = 0;
  out.provisionedSpotCapacity = 0;
  out.targetOnDemandCapacity = 0;
  out.targetSpotCapacity = 0;
  return out;
}

// aws:emr/ClusterCoreInstanceFleetInstanceTypeConfig:ClusterCoreInstanceFleetInstanceTypeConfig
export function emr_ClusterCoreInstanceFleetInstanceTypeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bidPrice = "";
  out.bidPriceAsPercentageOfOnDemandPrice = 0;
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration(ctx, depth + 1))]);
  out.ebsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig(ctx, depth + 1))]);
  out.instanceType = "";
  out.weightedCapacity = 0;
  return out;
}

// aws:emr/ClusterCoreInstanceFleetInstanceTypeConfigConfiguration:ClusterCoreInstanceFleetInstanceTypeConfigConfiguration
export function emr_ClusterCoreInstanceFleetInstanceTypeConfigConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.properties = {};
  return out;
}

// aws:emr/ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig:ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig
export function emr_ClusterCoreInstanceFleetInstanceTypeConfigEbsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.size = 8;
  out.type = "";
  out.volumesPerInstance = 0;
  return out;
}

// aws:emr/ClusterCoreInstanceFleetLaunchSpecifications:ClusterCoreInstanceFleetLaunchSpecifications
export function emr_ClusterCoreInstanceFleetLaunchSpecifications(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDemandSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification(ctx, depth + 1))]);
  out.spotSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification(ctx, depth + 1))]);
  return out;
}

// aws:emr/ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification:ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification
export function emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  return out;
}

// aws:emr/ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification:ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification
export function emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  out.blockDurationMinutes = 0;
  out.timeoutAction = "";
  out.timeoutDurationMinutes = 30;
  return out;
}

// aws:emr/ClusterCoreInstanceGroup:ClusterCoreInstanceGroup
export function emr_ClusterCoreInstanceGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingPolicy = "";
  out.bidPrice = "";
  out.ebsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceGroupEbsConfig(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.instanceCount = 1;
  out.instanceType = "";
  out.name = ctx.name;
  return out;
}

// aws:emr/ClusterCoreInstanceGroupEbsConfig:ClusterCoreInstanceGroupEbsConfig
export function emr_ClusterCoreInstanceGroupEbsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.size = 8;
  out.throughput = 0;
  out.type = "";
  out.volumesPerInstance = 0;
  return out;
}

// aws:emr/ClusterEc2Attributes:ClusterEc2Attributes
export function emr_ClusterEc2Attributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalMasterSecurityGroups = "";
  out.additionalSlaveSecurityGroups = "";
  out.emrManagedMasterSecurityGroup = "";
  out.emrManagedSlaveSecurityGroup = "";
  out.instanceProfile = "";
  out.keyName = "";
  out.serviceAccessSecurityGroup = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:emr/ClusterKerberosAttributes:ClusterKerberosAttributes
export function emr_ClusterKerberosAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adDomainJoinPassword = "";
  out.adDomainJoinUser = "";
  out.crossRealmTrustPrincipalPassword = "";
  out.kdcAdminPassword = "";
  out.realm = "";
  return out;
}

// aws:emr/ClusterMasterInstanceFleet:ClusterMasterInstanceFleet
export function emr_ClusterMasterInstanceFleet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.instanceTypeConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleetInstanceTypeConfig(ctx, depth + 1))]);
  out.launchSpecifications = (depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleetLaunchSpecifications(ctx, depth + 1));
  out.name = ctx.name;
  out.provisionedOnDemandCapacity = 0;
  out.provisionedSpotCapacity = 0;
  out.targetOnDemandCapacity = 0;
  out.targetSpotCapacity = 0;
  return out;
}

// aws:emr/ClusterMasterInstanceFleetInstanceTypeConfig:ClusterMasterInstanceFleetInstanceTypeConfig
export function emr_ClusterMasterInstanceFleetInstanceTypeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bidPrice = "";
  out.bidPriceAsPercentageOfOnDemandPrice = 0;
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration(ctx, depth + 1))]);
  out.ebsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig(ctx, depth + 1))]);
  out.instanceType = "";
  out.weightedCapacity = 0;
  return out;
}

// aws:emr/ClusterMasterInstanceFleetInstanceTypeConfigConfiguration:ClusterMasterInstanceFleetInstanceTypeConfigConfiguration
export function emr_ClusterMasterInstanceFleetInstanceTypeConfigConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.properties = {};
  return out;
}

// aws:emr/ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig:ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig
export function emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.size = 8;
  out.type = "";
  out.volumesPerInstance = 0;
  return out;
}

// aws:emr/ClusterMasterInstanceFleetLaunchSpecifications:ClusterMasterInstanceFleetLaunchSpecifications
export function emr_ClusterMasterInstanceFleetLaunchSpecifications(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDemandSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification(ctx, depth + 1))]);
  out.spotSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification(ctx, depth + 1))]);
  return out;
}

// aws:emr/ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification:ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification
export function emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  return out;
}

// aws:emr/ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification:ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification
export function emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  out.blockDurationMinutes = 0;
  out.timeoutAction = "";
  out.timeoutDurationMinutes = 30;
  return out;
}

// aws:emr/ClusterMasterInstanceGroup:ClusterMasterInstanceGroup
export function emr_ClusterMasterInstanceGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bidPrice = "";
  out.ebsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceGroupEbsConfig(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.instanceCount = 1;
  out.instanceType = "";
  out.name = ctx.name;
  return out;
}

// aws:emr/ClusterMasterInstanceGroupEbsConfig:ClusterMasterInstanceGroupEbsConfig
export function emr_ClusterMasterInstanceGroupEbsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.size = 8;
  out.throughput = 0;
  out.type = "";
  out.volumesPerInstance = 0;
  return out;
}

// aws:emr/ClusterPlacementGroupConfig:ClusterPlacementGroupConfig
export function emr_ClusterPlacementGroupConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceRole = "";
  out.placementStrategy = "";
  return out;
}

// aws:emr/ClusterStep:ClusterStep
export function emr_ClusterStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionOnFailure = "";
  out.hadoopJarStep = (depth > 4 ? {} : T_emr.emr_ClusterStepHadoopJarStep(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:emr/ClusterStepHadoopJarStep:ClusterStepHadoopJarStep
export function emr_ClusterStepHadoopJarStep(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.args = (depth > 4 ? [] : [""]);
  out.jar = "";
  out.mainClass = "";
  out.properties = {};
  return out;
}

// aws:emr/InstanceFleetInstanceTypeConfig:InstanceFleetInstanceTypeConfig
export function emr_InstanceFleetInstanceTypeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bidPrice = "";
  out.bidPriceAsPercentageOfOnDemandPrice = 0;
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_InstanceFleetInstanceTypeConfigConfiguration(ctx, depth + 1))]);
  out.ebsConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_InstanceFleetInstanceTypeConfigEbsConfig(ctx, depth + 1))]);
  out.instanceType = "";
  out.weightedCapacity = 0;
  return out;
}

// aws:emr/InstanceFleetInstanceTypeConfigConfiguration:InstanceFleetInstanceTypeConfigConfiguration
export function emr_InstanceFleetInstanceTypeConfigConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.properties = {};
  return out;
}

// aws:emr/InstanceFleetInstanceTypeConfigEbsConfig:InstanceFleetInstanceTypeConfigEbsConfig
export function emr_InstanceFleetInstanceTypeConfigEbsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.size = 8;
  out.type = "";
  out.volumesPerInstance = 0;
  return out;
}

// aws:emr/InstanceFleetLaunchSpecifications:InstanceFleetLaunchSpecifications
export function emr_InstanceFleetLaunchSpecifications(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDemandSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_InstanceFleetLaunchSpecificationsOnDemandSpecification(ctx, depth + 1))]);
  out.spotSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_InstanceFleetLaunchSpecificationsSpotSpecification(ctx, depth + 1))]);
  return out;
}

// aws:emr/InstanceFleetLaunchSpecificationsOnDemandSpecification:InstanceFleetLaunchSpecificationsOnDemandSpecification
export function emr_InstanceFleetLaunchSpecificationsOnDemandSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  return out;
}

// aws:emr/InstanceFleetLaunchSpecificationsSpotSpecification:InstanceFleetLaunchSpecificationsSpotSpecification
export function emr_InstanceFleetLaunchSpecificationsSpotSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  out.blockDurationMinutes = 0;
  out.timeoutAction = "";
  out.timeoutDurationMinutes = 30;
  return out;
}

// aws:emr/InstanceGroupEbsConfig:InstanceGroupEbsConfig
export function emr_InstanceGroupEbsConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iops = 0;
  out.size = 8;
  out.type = "";
  out.volumesPerInstance = 0;
  return out;
}

// aws:emr/ManagedScalingPolicyComputeLimit:ManagedScalingPolicyComputeLimit
export function emr_ManagedScalingPolicyComputeLimit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumCapacityUnits = 0;
  out.maximumCoreCapacityUnits = 0;
  out.maximumOndemandCapacityUnits = 0;
  out.minimumCapacityUnits = 0;
  out.unitType = "";
  return out;
}

// aws:emr/getReleaseLabelsFilters:getReleaseLabelsFilters
export function emr_getReleaseLabelsFilters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.application = "";
  out.prefix = "";
  return out;
}

// aws:emr/getSupportedInstanceTypesSupportedInstanceType:getSupportedInstanceTypesSupportedInstanceType
export function emr_getSupportedInstanceTypesSupportedInstanceType(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.architecture = "";
  out.ebsOptimizedAvailable = false;
  out.ebsOptimizedByDefault = false;
  out.ebsStorageOnly = false;
  out.instanceFamilyId = h.id(ctx, "instanceFamilyId");
  out.is64BitsOnly = true;
  out.memoryGb = 0;
  out.numberOfDisks = 0;
  out.storageGb = 0;
  out.type = "";
  out.vcpu = 0;
  return out;
}
