// GENERATED FILE — do not edit.
// Service: autoscaling   (83 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_autoscaling from "./autoscaling.js";

// aws:autoscaling/GroupAvailabilityZoneDistribution:GroupAvailabilityZoneDistribution
export function autoscaling_GroupAvailabilityZoneDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityDistributionStrategy = "";
  return out;
}

// aws:autoscaling/GroupCapacityReservationSpecification:GroupCapacityReservationSpecification
export function autoscaling_GroupCapacityReservationSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationPreference = "";
  out.capacityReservationTarget = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupCapacityReservationSpecificationCapacityReservationTarget(ctx, depth + 1));
  return out;
}

// aws:autoscaling/GroupCapacityReservationSpecificationCapacityReservationTarget:GroupCapacityReservationSpecificationCapacityReservationTarget
export function autoscaling_GroupCapacityReservationSpecificationCapacityReservationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationIds = (depth > 4 ? [] : [""]);
  out.capacityReservationResourceGroupArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:autoscaling/GroupInitialLifecycleHook:GroupInitialLifecycleHook
export function autoscaling_GroupInitialLifecycleHook(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultResult = "";
  out.heartbeatTimeout = 30;
  out.lifecycleTransition = "";
  out.name = ctx.name;
  out.notificationMetadata = "";
  out.notificationTargetArn = h.arn(ctx);
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:autoscaling/GroupInstanceMaintenancePolicy:GroupInstanceMaintenancePolicy
export function autoscaling_GroupInstanceMaintenancePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxHealthyPercentage = 0;
  out.minHealthyPercentage = 0;
  return out;
}

// aws:autoscaling/GroupInstanceRefresh:GroupInstanceRefresh
export function autoscaling_GroupInstanceRefresh(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.preferences = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupInstanceRefreshPreferences(ctx, depth + 1));
  out.strategy = "";
  out.triggers = (depth > 4 ? [] : [""]);
  return out;
}

// aws:autoscaling/GroupInstanceRefreshPreferences:GroupInstanceRefreshPreferences
export function autoscaling_GroupInstanceRefreshPreferences(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification(ctx, depth + 1));
  out.autoRollback = false;
  out.checkpointDelay = "";
  out.checkpointPercentages = (depth > 4 ? [] : [0]);
  out.instanceWarmup = "";
  out.maxHealthyPercentage = 0;
  out.minHealthyPercentage = 0;
  out.scaleInProtectedInstances = "";
  out.skipMatching = false;
  out.standbyInstances = "";
  return out;
}

// aws:autoscaling/GroupInstanceRefreshPreferencesAlarmSpecification:GroupInstanceRefreshPreferencesAlarmSpecification
export function autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  return out;
}

// aws:autoscaling/GroupLaunchTemplate:GroupLaunchTemplate
export function autoscaling_GroupLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicy:GroupMixedInstancesPolicy
export function autoscaling_GroupMixedInstancesPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancesDistribution = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyInstancesDistribution(ctx, depth + 1));
  out.launchTemplate = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplate(ctx, depth + 1));
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyInstancesDistribution:GroupMixedInstancesPolicyInstancesDistribution
export function autoscaling_GroupMixedInstancesPolicyInstancesDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDemandAllocationStrategy = "";
  out.onDemandBaseCapacity = 0;
  out.onDemandPercentageAboveBaseCapacity = 0;
  out.spotAllocationStrategy = "";
  out.spotInstancePools = 0;
  out.spotMaxPrice = "";
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplate:GroupMixedInstancesPolicyLaunchTemplate
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification(ctx, depth + 1));
  out.overrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification:GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.version = "1";
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverride:GroupMixedInstancesPolicyLaunchTemplateOverride
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceRequirements = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements(ctx, depth + 1));
  out.instanceType = "";
  out.launchTemplateSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification(ctx, depth + 1));
  out.weightedCapacity = "";
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorCount = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount(ctx, depth + 1));
  out.acceleratorManufacturers = (depth > 4 ? [] : [""]);
  out.acceleratorNames = (depth > 4 ? [] : [""]);
  out.acceleratorTotalMemoryMib = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib(ctx, depth + 1));
  out.acceleratorTypes = (depth > 4 ? [] : [""]);
  out.allowedInstanceTypes = (depth > 4 ? [] : [""]);
  out.bareMetal = "";
  out.baselineEbsBandwidthMbps = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps(ctx, depth + 1));
  out.burstablePerformance = "";
  out.cpuManufacturers = (depth > 4 ? [] : [""]);
  out.excludedInstanceTypes = (depth > 4 ? [] : [""]);
  out.instanceGenerations = (depth > 4 ? [] : [""]);
  out.localStorage = "";
  out.localStorageTypes = (depth > 4 ? [] : [""]);
  out.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = 0;
  out.memoryGibPerVcpu = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu(ctx, depth + 1));
  out.memoryMib = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib(ctx, depth + 1));
  out.networkBandwidthGbps = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps(ctx, depth + 1));
  out.networkInterfaceCount = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount(ctx, depth + 1));
  out.onDemandMaxPricePercentageOverLowestPrice = 0;
  out.requireHibernateSupport = false;
  out.spotMaxPricePercentageOverLowestPrice = 0;
  out.totalLocalStorageGb = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb(ctx, depth + 1));
  out.vcpuCount = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount(ctx, depth + 1));
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount:GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification:GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification
export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.version = "1";
  return out;
}

// aws:autoscaling/GroupTag:GroupTag
export function autoscaling_GroupTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.propagateAtLaunch = false;
  out.value = "";
  return out;
}

// aws:autoscaling/GroupTrafficSource:GroupTrafficSource
export function autoscaling_GroupTrafficSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  out.type = "";
  return out;
}

// aws:autoscaling/GroupWarmPool:GroupWarmPool
export function autoscaling_GroupWarmPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceReusePolicy = (depth > 4 ? {} : T_autoscaling.autoscaling_GroupWarmPoolInstanceReusePolicy(ctx, depth + 1));
  out.maxGroupPreparedCapacity = 0;
  out.minSize = 8;
  out.poolState = "";
  return out;
}

// aws:autoscaling/GroupWarmPoolInstanceReusePolicy:GroupWarmPoolInstanceReusePolicy
export function autoscaling_GroupWarmPoolInstanceReusePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.reuseOnScaleIn = false;
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfiguration:PolicyPredictiveScalingConfiguration
export function autoscaling_PolicyPredictiveScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxCapacityBreachBehavior = "";
  out.maxCapacityBuffer = "";
  out.metricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification(ctx, depth + 1));
  out.mode = "";
  out.schedulingBufferTime = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecification:PolicyPredictiveScalingConfigurationMetricSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizedCapacityMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification(ctx, depth + 1));
  out.customizedLoadMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification(ctx, depth + 1));
  out.customizedScalingMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification(ctx, depth + 1));
  out.predefinedLoadMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification(ctx, depth + 1));
  out.predefinedMetricPairSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification(ctx, depth + 1));
  out.predefinedScalingMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification(ctx, depth + 1));
  out.targetValue = 0;
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDataQueries = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.id = h.id(ctx, "id");
  out.label = "";
  out.metricStat = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat(ctx, depth + 1));
  out.returnData = false;
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metric = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric(ctx, depth + 1));
  out.stat = "";
  out.unit = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.namespace = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDataQueries = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.id = h.id(ctx, "id");
  out.label = "";
  out.metricStat = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat(ctx, depth + 1));
  out.returnData = false;
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metric = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric(ctx, depth + 1));
  out.stat = "";
  out.unit = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.namespace = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDataQueries = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.id = h.id(ctx, "id");
  out.label = "";
  out.metricStat = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat(ctx, depth + 1));
  out.returnData = false;
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metric = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric(ctx, depth + 1));
  out.stat = "";
  out.unit = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.namespace = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension:PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification:PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedMetricType = "";
  out.resourceLabel = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification:PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedMetricType = "";
  out.resourceLabel = "";
  return out;
}

// aws:autoscaling/PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification:PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification
export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedMetricType = "";
  out.resourceLabel = "";
  return out;
}

// aws:autoscaling/PolicyStepAdjustment:PolicyStepAdjustment
export function autoscaling_PolicyStepAdjustment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricIntervalLowerBound = "";
  out.metricIntervalUpperBound = "";
  out.scalingAdjustment = 0;
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfiguration:PolicyTargetTrackingConfiguration
export function autoscaling_PolicyTargetTrackingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customizedMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification(ctx, depth + 1));
  out.disableScaleIn = false;
  out.predefinedMetricSpecification = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification(ctx, depth + 1));
  out.targetValue = 0;
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationCustomizedMetricSpecification:PolicyTargetTrackingConfigurationCustomizedMetricSpecification
export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metricDimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.metrics = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric(ctx, depth + 1))]);
  out.namespace = "";
  out.period = 0;
  out.statistic = "";
  out.unit = "";
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric:PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric
export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.expression = "";
  out.id = h.id(ctx, "id");
  out.label = "";
  out.metricStat = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStat(ctx, depth + 1));
  out.returnData = false;
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension:PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension
export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStat:PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStat
export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.metric = (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric(ctx, depth + 1));
  out.period = 0;
  out.stat = "";
  out.unit = "";
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric:PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric
export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension(ctx, depth + 1))]);
  out.metricName = "";
  out.namespace = "";
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension:PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension
export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:autoscaling/PolicyTargetTrackingConfigurationPredefinedMetricSpecification:PolicyTargetTrackingConfigurationPredefinedMetricSpecification
export function autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.predefinedMetricType = "";
  out.resourceLabel = "";
  return out;
}

// aws:autoscaling/TagTag:TagTag
export function autoscaling_TagTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.propagateAtLaunch = false;
  out.value = "";
  return out;
}

// aws:autoscaling/TrafficSourceAttachmentTrafficSource:TrafficSourceAttachmentTrafficSource
export function autoscaling_TrafficSourceAttachmentTrafficSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  out.type = "";
  return out;
}

// aws:autoscaling/getAmiIdsFilter:getAmiIdsFilter
export function autoscaling_getAmiIdsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:autoscaling/getGroupInstanceMaintenancePolicy:getGroupInstanceMaintenancePolicy
export function autoscaling_getGroupInstanceMaintenancePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxHealthyPercentage = 0;
  out.minHealthyPercentage = 0;
  return out;
}

// aws:autoscaling/getGroupLaunchTemplate:getGroupLaunchTemplate
export function autoscaling_getGroupLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicy:getGroupMixedInstancesPolicy
export function autoscaling_getGroupMixedInstancesPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancesDistributions = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyInstancesDistribution(ctx, depth + 1))]);
  out.launchTemplates = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplate(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyInstancesDistribution:getGroupMixedInstancesPolicyInstancesDistribution
export function autoscaling_getGroupMixedInstancesPolicyInstancesDistribution(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.onDemandAllocationStrategy = "";
  out.onDemandBaseCapacity = 0;
  out.onDemandPercentageAboveBaseCapacity = 0;
  out.spotAllocationStrategy = "";
  out.spotInstancePools = 0;
  out.spotMaxPrice = "";
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplate:getGroupMixedInstancesPolicyLaunchTemplate
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification(ctx, depth + 1))]);
  out.overrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification:getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.version = "1";
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverride:getGroupMixedInstancesPolicyLaunchTemplateOverride
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceRequirements = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement(ctx, depth + 1))]);
  out.instanceType = "";
  out.launchTemplateSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification(ctx, depth + 1))]);
  out.weightedCapacity = "";
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount(ctx, depth + 1))]);
  out.acceleratorManufacturers = (depth > 4 ? [] : [""]);
  out.acceleratorNames = (depth > 4 ? [] : [""]);
  out.acceleratorTotalMemoryMibs = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib(ctx, depth + 1))]);
  out.acceleratorTypes = (depth > 4 ? [] : [""]);
  out.allowedInstanceTypes = (depth > 4 ? [] : [""]);
  out.bareMetal = "";
  out.baselineEbsBandwidthMbps = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp(ctx, depth + 1))]);
  out.burstablePerformance = "";
  out.cpuManufacturers = (depth > 4 ? [] : [""]);
  out.excludedInstanceTypes = (depth > 4 ? [] : [""]);
  out.instanceGenerations = (depth > 4 ? [] : [""]);
  out.localStorage = "";
  out.localStorageTypes = (depth > 4 ? [] : [""]);
  out.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = 0;
  out.memoryGibPerVcpus = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus(ctx, depth + 1))]);
  out.memoryMibs = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib(ctx, depth + 1))]);
  out.networkBandwidthGbps = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp(ctx, depth + 1))]);
  out.networkInterfaceCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount(ctx, depth + 1))]);
  out.onDemandMaxPricePercentageOverLowestPrice = 0;
  out.requireHibernateSupport = false;
  out.spotMaxPricePercentageOverLowestPrice = 0;
  out.totalLocalStorageGbs = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb(ctx, depth + 1))]);
  out.vcpuCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount(ctx, depth + 1))]);
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount:getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:autoscaling/getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification:getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification
export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.version = "1";
  return out;
}

// aws:autoscaling/getGroupTag:getGroupTag
export function autoscaling_getGroupTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.propagateAtLaunch = false;
  out.value = "";
  return out;
}

// aws:autoscaling/getGroupTrafficSource:getGroupTrafficSource
export function autoscaling_getGroupTrafficSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  out.type = "";
  return out;
}

// aws:autoscaling/getGroupWarmPool:getGroupWarmPool
export function autoscaling_getGroupWarmPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceReusePolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupWarmPoolInstanceReusePolicy(ctx, depth + 1))]);
  out.maxGroupPreparedCapacity = 0;
  out.minSize = 8;
  out.poolState = "";
  return out;
}

// aws:autoscaling/getGroupWarmPoolInstanceReusePolicy:getGroupWarmPoolInstanceReusePolicy
export function autoscaling_getGroupWarmPoolInstanceReusePolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.reuseOnScaleIn = false;
  return out;
}
