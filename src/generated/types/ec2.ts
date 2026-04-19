// GENERATED FILE — do not edit.
// Service: ec2   (454 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ec2 from "./ec2.js";

// aws:ec2/AmiCopyEbsBlockDevice:AmiCopyEbsBlockDevice
export function ec2_AmiCopyEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.outpostArn = h.arn(ctx);
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/AmiCopyEphemeralBlockDevice:AmiCopyEphemeralBlockDevice
export function ec2_AmiCopyEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/AmiEbsBlockDevice:AmiEbsBlockDevice
export function ec2_AmiEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.outpostArn = h.arn(ctx);
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/AmiEphemeralBlockDevice:AmiEphemeralBlockDevice
export function ec2_AmiEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/AmiFromInstanceEbsBlockDevice:AmiFromInstanceEbsBlockDevice
export function ec2_AmiFromInstanceEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.outpostArn = h.arn(ctx);
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/AmiFromInstanceEphemeralBlockDevice:AmiFromInstanceEphemeralBlockDevice
export function ec2_AmiFromInstanceEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/CapacityBlockReservationTimeouts:CapacityBlockReservationTimeouts
export function ec2_CapacityBlockReservationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:ec2/DefaultCreditSpecificationTimeouts:DefaultCreditSpecificationTimeouts
export function ec2_DefaultCreditSpecificationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:ec2/DefaultNetworkAclEgress:DefaultNetworkAclEgress
export function ec2_DefaultNetworkAclEgress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.cidrBlock = "10.0.0.0/16";
  out.fromPort = 443;
  out.icmpCode = 0;
  out.icmpType = 0;
  out.ipv6CidrBlock = "";
  out.protocol = "";
  out.ruleNo = 0;
  out.toPort = 443;
  return out;
}

// aws:ec2/DefaultNetworkAclIngress:DefaultNetworkAclIngress
export function ec2_DefaultNetworkAclIngress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.cidrBlock = "10.0.0.0/16";
  out.fromPort = 443;
  out.icmpCode = 0;
  out.icmpType = 0;
  out.ipv6CidrBlock = "";
  out.protocol = "";
  out.ruleNo = 0;
  out.toPort = 443;
  return out;
}

// aws:ec2/DefaultRouteTableRoute:DefaultRouteTableRoute
export function ec2_DefaultRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  out.coreNetworkArn = h.arn(ctx);
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyGatewayId = h.id(ctx, "egressOnlyGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.ipv6CidrBlock = "";
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/DefaultSecurityGroupEgress:DefaultSecurityGroupEgress
export function ec2_DefaultSecurityGroupEgress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.description = "";
  out.fromPort = 443;
  out.ipv6CidrBlocks = (depth > 4 ? [] : [""]);
  out.prefixListIds = (depth > 4 ? [] : [""]);
  out.protocol = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.self = false;
  out.toPort = 443;
  return out;
}

// aws:ec2/DefaultSecurityGroupIngress:DefaultSecurityGroupIngress
export function ec2_DefaultSecurityGroupIngress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.description = "";
  out.fromPort = 443;
  out.ipv6CidrBlocks = (depth > 4 ? [] : [""]);
  out.prefixListIds = (depth > 4 ? [] : [""]);
  out.protocol = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.self = false;
  out.toPort = 443;
  return out;
}

// aws:ec2/EipDomainNameTimeouts:EipDomainNameTimeouts
export function ec2_EipDomainNameTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:ec2/FleetFleetInstanceSet:FleetFleetInstanceSet
export function ec2_FleetFleetInstanceSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceIds = (depth > 4 ? [] : [""]);
  out.instanceType = "";
  out.lifecycle = "";
  out.platform = "";
  return out;
}

// aws:ec2/FleetLaunchTemplateConfig:FleetLaunchTemplateConfig
export function ec2_FleetLaunchTemplateConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateSpecification = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification(ctx, depth + 1));
  out.overrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverride(ctx, depth + 1))]);
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigLaunchTemplateSpecification:FleetLaunchTemplateConfigLaunchTemplateSpecification
export function ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateId = h.id(ctx, "launchTemplateId");
  out.launchTemplateName = "";
  out.version = "1";
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverride:FleetLaunchTemplateConfigOverride
export function ec2_FleetLaunchTemplateConfigOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.instanceRequirements = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements(ctx, depth + 1));
  out.instanceType = "";
  out.maxPrice = "";
  out.priority = 0;
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.weightedCapacity = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirements:FleetLaunchTemplateConfigOverrideInstanceRequirements
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorCount = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount(ctx, depth + 1));
  out.acceleratorManufacturers = (depth > 4 ? [] : [""]);
  out.acceleratorNames = (depth > 4 ? [] : [""]);
  out.acceleratorTotalMemoryMib = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib(ctx, depth + 1));
  out.acceleratorTypes = (depth > 4 ? [] : [""]);
  out.allowedInstanceTypes = (depth > 4 ? [] : [""]);
  out.bareMetal = "";
  out.baselineEbsBandwidthMbps = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps(ctx, depth + 1));
  out.burstablePerformance = "";
  out.cpuManufacturers = (depth > 4 ? [] : [""]);
  out.excludedInstanceTypes = (depth > 4 ? [] : [""]);
  out.instanceGenerations = (depth > 4 ? [] : [""]);
  out.localStorage = "";
  out.localStorageTypes = (depth > 4 ? [] : [""]);
  out.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = 0;
  out.memoryGibPerVcpu = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu(ctx, depth + 1));
  out.memoryMib = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib(ctx, depth + 1));
  out.networkBandwidthGbps = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps(ctx, depth + 1));
  out.networkInterfaceCount = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount(ctx, depth + 1));
  out.onDemandMaxPricePercentageOverLowestPrice = 0;
  out.requireHibernateSupport = false;
  out.spotMaxPricePercentageOverLowestPrice = 0;
  out.totalLocalStorageGb = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb(ctx, depth + 1));
  out.vcpuCount = (depth > 4 ? {} : T_ec2.ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount(ctx, depth + 1));
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount:FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib:FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps:FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu:FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib:FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps:FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount:FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb:FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount:FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/FleetOnDemandOptions:FleetOnDemandOptions
export function ec2_FleetOnDemandOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  out.capacityReservationOptions = (depth > 4 ? {} : T_ec2.ec2_FleetOnDemandOptionsCapacityReservationOptions(ctx, depth + 1));
  out.maxTotalPrice = "";
  out.minTargetCapacity = 0;
  out.singleAvailabilityZone = false;
  out.singleInstanceType = false;
  return out;
}

// aws:ec2/FleetOnDemandOptionsCapacityReservationOptions:FleetOnDemandOptionsCapacityReservationOptions
export function ec2_FleetOnDemandOptionsCapacityReservationOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.usageStrategy = "";
  return out;
}

// aws:ec2/FleetSpotOptions:FleetSpotOptions
export function ec2_FleetSpotOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationStrategy = "";
  out.instanceInterruptionBehavior = "";
  out.instancePoolsToUseCount = 1;
  out.maintenanceStrategies = (depth > 4 ? {} : T_ec2.ec2_FleetSpotOptionsMaintenanceStrategies(ctx, depth + 1));
  out.maxTotalPrice = "";
  out.minTargetCapacity = 0;
  out.singleAvailabilityZone = false;
  out.singleInstanceType = false;
  return out;
}

// aws:ec2/FleetSpotOptionsMaintenanceStrategies:FleetSpotOptionsMaintenanceStrategies
export function ec2_FleetSpotOptionsMaintenanceStrategies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityRebalance = (depth > 4 ? {} : T_ec2.ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance(ctx, depth + 1));
  return out;
}

// aws:ec2/FleetSpotOptionsMaintenanceStrategiesCapacityRebalance:FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
export function ec2_FleetSpotOptionsMaintenanceStrategiesCapacityRebalance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replacementStrategy = "";
  out.terminationDelay = 0;
  return out;
}

// aws:ec2/FleetTargetCapacitySpecification:FleetTargetCapacitySpecification
export function ec2_FleetTargetCapacitySpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultTargetCapacityType = "";
  out.onDemandTargetCapacity = 0;
  out.spotTargetCapacity = 0;
  out.targetCapacityUnitType = "";
  out.totalTargetCapacity = 0;
  return out;
}

// aws:ec2/FlowLogDestinationOptions:FlowLogDestinationOptions
export function ec2_FlowLogDestinationOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fileFormat = "";
  out.hiveCompatiblePartitions = false;
  out.perHourPartition = false;
  return out;
}

// aws:ec2/InstanceCapacityReservationSpecification:InstanceCapacityReservationSpecification
export function ec2_InstanceCapacityReservationSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationPreference = "";
  out.capacityReservationTarget = (depth > 4 ? {} : T_ec2.ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget(ctx, depth + 1));
  return out;
}

// aws:ec2/InstanceCapacityReservationSpecificationCapacityReservationTarget:InstanceCapacityReservationSpecificationCapacityReservationTarget
export function ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationId = h.id(ctx, "capacityReservationId");
  out.capacityReservationResourceGroupArn = h.arn(ctx);
  return out;
}

// aws:ec2/InstanceCpuOptions:InstanceCpuOptions
export function ec2_InstanceCpuOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amdSevSnp = "";
  out.coreCount = 1;
  out.threadsPerCore = 0;
  return out;
}

// aws:ec2/InstanceCreditSpecification:InstanceCreditSpecification
export function ec2_InstanceCreditSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuCredits = "";
  return out;
}

// aws:ec2/InstanceEbsBlockDevice:InstanceEbsBlockDevice
export function ec2_InstanceEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.tags = {};
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/InstanceEnclaveOptions:InstanceEnclaveOptions
export function ec2_InstanceEnclaveOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/InstanceEphemeralBlockDevice:InstanceEphemeralBlockDevice
export function ec2_InstanceEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.noDevice = false;
  out.virtualName = "";
  return out;
}

// aws:ec2/InstanceInstanceMarketOptions:InstanceInstanceMarketOptions
export function ec2_InstanceInstanceMarketOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.marketType = "";
  out.spotOptions = (depth > 4 ? {} : T_ec2.ec2_InstanceInstanceMarketOptionsSpotOptions(ctx, depth + 1));
  return out;
}

// aws:ec2/InstanceInstanceMarketOptionsSpotOptions:InstanceInstanceMarketOptionsSpotOptions
export function ec2_InstanceInstanceMarketOptionsSpotOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceInterruptionBehavior = "";
  out.maxPrice = "";
  out.spotInstanceType = "";
  out.validUntil = "";
  return out;
}

// aws:ec2/InstanceLaunchTemplate:InstanceLaunchTemplate
export function ec2_InstanceLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:ec2/InstanceMaintenanceOptions:InstanceMaintenanceOptions
export function ec2_InstanceMaintenanceOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRecovery = "";
  return out;
}

// aws:ec2/InstanceMetadataOptions:InstanceMetadataOptions
export function ec2_InstanceMetadataOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpProtocolIpv6 = "";
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  out.instanceMetadataTags = "";
  return out;
}

// aws:ec2/InstanceNetworkInterface:InstanceNetworkInterface
export function ec2_InstanceNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceIndex = 0;
  out.networkCardIndex = 0;
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  return out;
}

// aws:ec2/InstancePrivateDnsNameOptions:InstancePrivateDnsNameOptions
export function ec2_InstancePrivateDnsNameOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableResourceNameDnsARecord = true;
  out.enableResourceNameDnsAaaaRecord = true;
  out.hostnameType = "";
  return out;
}

// aws:ec2/InstanceRootBlockDevice:InstanceRootBlockDevice
export function ec2_InstanceRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.tags = {};
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/LaunchConfigurationEbsBlockDevice:LaunchConfigurationEbsBlockDevice
export function ec2_LaunchConfigurationEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.noDevice = false;
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/LaunchConfigurationEphemeralBlockDevice:LaunchConfigurationEphemeralBlockDevice
export function ec2_LaunchConfigurationEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.noDevice = false;
  out.virtualName = "";
  return out;
}

// aws:ec2/LaunchConfigurationMetadataOptions:LaunchConfigurationMetadataOptions
export function ec2_LaunchConfigurationMetadataOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  return out;
}

// aws:ec2/LaunchConfigurationRootBlockDevice:LaunchConfigurationRootBlockDevice
export function ec2_LaunchConfigurationRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.encrypted = false;
  out.iops = 0;
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/LaunchTemplateBlockDeviceMapping:LaunchTemplateBlockDeviceMapping
export function ec2_LaunchTemplateBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateBlockDeviceMappingEbs(ctx, depth + 1));
  out.noDevice = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/LaunchTemplateBlockDeviceMappingEbs:LaunchTemplateBlockDeviceMappingEbs
export function ec2_LaunchTemplateBlockDeviceMappingEbs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = "";
  out.encrypted = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeInitializationRate = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/LaunchTemplateCapacityReservationSpecification:LaunchTemplateCapacityReservationSpecification
export function ec2_LaunchTemplateCapacityReservationSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationPreference = "";
  out.capacityReservationTarget = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget(ctx, depth + 1));
  return out;
}

// aws:ec2/LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget:LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
export function ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationId = h.id(ctx, "capacityReservationId");
  out.capacityReservationResourceGroupArn = h.arn(ctx);
  return out;
}

// aws:ec2/LaunchTemplateCpuOptions:LaunchTemplateCpuOptions
export function ec2_LaunchTemplateCpuOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amdSevSnp = "";
  out.coreCount = 1;
  out.threadsPerCore = 0;
  return out;
}

// aws:ec2/LaunchTemplateCreditSpecification:LaunchTemplateCreditSpecification
export function ec2_LaunchTemplateCreditSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuCredits = "";
  return out;
}

// aws:ec2/LaunchTemplateElasticGpuSpecification:LaunchTemplateElasticGpuSpecification
export function ec2_LaunchTemplateElasticGpuSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:ec2/LaunchTemplateElasticInferenceAccelerator:LaunchTemplateElasticInferenceAccelerator
export function ec2_LaunchTemplateElasticInferenceAccelerator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:ec2/LaunchTemplateEnclaveOptions:LaunchTemplateEnclaveOptions
export function ec2_LaunchTemplateEnclaveOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/LaunchTemplateHibernationOptions:LaunchTemplateHibernationOptions
export function ec2_LaunchTemplateHibernationOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configured = false;
  return out;
}

// aws:ec2/LaunchTemplateIamInstanceProfile:LaunchTemplateIamInstanceProfile
export function ec2_LaunchTemplateIamInstanceProfile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = ctx.name;
  return out;
}

// aws:ec2/LaunchTemplateInstanceMarketOptions:LaunchTemplateInstanceMarketOptions
export function ec2_LaunchTemplateInstanceMarketOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.marketType = "";
  out.spotOptions = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceMarketOptionsSpotOptions(ctx, depth + 1));
  return out;
}

// aws:ec2/LaunchTemplateInstanceMarketOptionsSpotOptions:LaunchTemplateInstanceMarketOptionsSpotOptions
export function ec2_LaunchTemplateInstanceMarketOptionsSpotOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockDurationMinutes = 0;
  out.instanceInterruptionBehavior = "";
  out.maxPrice = "";
  out.spotInstanceType = "";
  out.validUntil = "";
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirements:LaunchTemplateInstanceRequirements
export function ec2_LaunchTemplateInstanceRequirements(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorCount = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsAcceleratorCount(ctx, depth + 1));
  out.acceleratorManufacturers = (depth > 4 ? [] : [""]);
  out.acceleratorNames = (depth > 4 ? [] : [""]);
  out.acceleratorTotalMemoryMib = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib(ctx, depth + 1));
  out.acceleratorTypes = (depth > 4 ? [] : [""]);
  out.allowedInstanceTypes = (depth > 4 ? [] : [""]);
  out.bareMetal = "";
  out.baselineEbsBandwidthMbps = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps(ctx, depth + 1));
  out.burstablePerformance = "";
  out.cpuManufacturers = (depth > 4 ? [] : [""]);
  out.excludedInstanceTypes = (depth > 4 ? [] : [""]);
  out.instanceGenerations = (depth > 4 ? [] : [""]);
  out.localStorage = "";
  out.localStorageTypes = (depth > 4 ? [] : [""]);
  out.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = 0;
  out.memoryGibPerVcpu = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsMemoryGibPerVcpu(ctx, depth + 1));
  out.memoryMib = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsMemoryMib(ctx, depth + 1));
  out.networkBandwidthGbps = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsNetworkBandwidthGbps(ctx, depth + 1));
  out.networkInterfaceCount = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsNetworkInterfaceCount(ctx, depth + 1));
  out.onDemandMaxPricePercentageOverLowestPrice = 0;
  out.requireHibernateSupport = false;
  out.spotMaxPricePercentageOverLowestPrice = 0;
  out.totalLocalStorageGb = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsTotalLocalStorageGb(ctx, depth + 1));
  out.vcpuCount = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateInstanceRequirementsVcpuCount(ctx, depth + 1));
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsAcceleratorCount:LaunchTemplateInstanceRequirementsAcceleratorCount
export function ec2_LaunchTemplateInstanceRequirementsAcceleratorCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib:LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
export function ec2_LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps:LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
export function ec2_LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsMemoryGibPerVcpu:LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
export function ec2_LaunchTemplateInstanceRequirementsMemoryGibPerVcpu(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsMemoryMib:LaunchTemplateInstanceRequirementsMemoryMib
export function ec2_LaunchTemplateInstanceRequirementsMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsNetworkBandwidthGbps:LaunchTemplateInstanceRequirementsNetworkBandwidthGbps
export function ec2_LaunchTemplateInstanceRequirementsNetworkBandwidthGbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsNetworkInterfaceCount:LaunchTemplateInstanceRequirementsNetworkInterfaceCount
export function ec2_LaunchTemplateInstanceRequirementsNetworkInterfaceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsTotalLocalStorageGb:LaunchTemplateInstanceRequirementsTotalLocalStorageGb
export function ec2_LaunchTemplateInstanceRequirementsTotalLocalStorageGb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateInstanceRequirementsVcpuCount:LaunchTemplateInstanceRequirementsVcpuCount
export function ec2_LaunchTemplateInstanceRequirementsVcpuCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/LaunchTemplateLicenseSpecification:LaunchTemplateLicenseSpecification
export function ec2_LaunchTemplateLicenseSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.licenseConfigurationArn = h.arn(ctx);
  return out;
}

// aws:ec2/LaunchTemplateMaintenanceOptions:LaunchTemplateMaintenanceOptions
export function ec2_LaunchTemplateMaintenanceOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRecovery = "";
  return out;
}

// aws:ec2/LaunchTemplateMetadataOptions:LaunchTemplateMetadataOptions
export function ec2_LaunchTemplateMetadataOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpProtocolIpv6 = "";
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  out.instanceMetadataTags = "";
  return out;
}

// aws:ec2/LaunchTemplateMonitoring:LaunchTemplateMonitoring
export function ec2_LaunchTemplateMonitoring(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/LaunchTemplateNetworkInterface:LaunchTemplateNetworkInterface
export function ec2_LaunchTemplateNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associateCarrierIpAddress = "";
  out.associatePublicIpAddress = "";
  out.connectionTrackingSpecification = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateNetworkInterfaceConnectionTrackingSpecification(ctx, depth + 1));
  out.deleteOnTermination = "";
  out.description = "";
  out.deviceIndex = 0;
  out.enaSrdSpecification = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateNetworkInterfaceEnaSrdSpecification(ctx, depth + 1));
  out.interfaceType = "";
  out.ipv4AddressCount = 1;
  out.ipv4Addresses = (depth > 4 ? [] : [""]);
  out.ipv4PrefixCount = 1;
  out.ipv4Prefixes = (depth > 4 ? [] : [""]);
  out.ipv6AddressCount = 1;
  out.ipv6Addresses = (depth > 4 ? [] : [""]);
  out.ipv6PrefixCount = 1;
  out.ipv6Prefixes = (depth > 4 ? [] : [""]);
  out.networkCardIndex = 0;
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.primaryIpv6 = "";
  out.privateIpAddress = "10.0.0.10";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:ec2/LaunchTemplateNetworkInterfaceConnectionTrackingSpecification:LaunchTemplateNetworkInterfaceConnectionTrackingSpecification
export function ec2_LaunchTemplateNetworkInterfaceConnectionTrackingSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tcpEstablishedTimeout = 30;
  out.udpStreamTimeout = 30;
  out.udpTimeout = 30;
  return out;
}

// aws:ec2/LaunchTemplateNetworkInterfaceEnaSrdSpecification:LaunchTemplateNetworkInterfaceEnaSrdSpecification
export function ec2_LaunchTemplateNetworkInterfaceEnaSrdSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enaSrdEnabled = false;
  out.enaSrdUdpSpecification = (depth > 4 ? {} : T_ec2.ec2_LaunchTemplateNetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification(ctx, depth + 1));
  return out;
}

// aws:ec2/LaunchTemplateNetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification:LaunchTemplateNetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification
export function ec2_LaunchTemplateNetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enaSrdUdpEnabled = false;
  return out;
}

// aws:ec2/LaunchTemplatePlacement:LaunchTemplatePlacement
export function ec2_LaunchTemplatePlacement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.affinity = "";
  out.availabilityZone = ctx.region + "a";
  out.groupName = "";
  out.hostId = h.id(ctx, "hostId");
  out.hostResourceGroupArn = h.arn(ctx);
  out.partitionNumber = 0;
  out.spreadDomain = h.endpoint(ctx, "spreadDomain");
  out.tenancy = "";
  return out;
}

// aws:ec2/LaunchTemplatePrivateDnsNameOptions:LaunchTemplatePrivateDnsNameOptions
export function ec2_LaunchTemplatePrivateDnsNameOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableResourceNameDnsARecord = true;
  out.enableResourceNameDnsAaaaRecord = true;
  out.hostnameType = "";
  return out;
}

// aws:ec2/LaunchTemplateTagSpecification:LaunchTemplateTagSpecification
export function ec2_LaunchTemplateTagSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceType = "";
  out.tags = {};
  return out;
}

// aws:ec2/ManagedPrefixListEntry:ManagedPrefixListEntry
export function ec2_ManagedPrefixListEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.description = "";
  return out;
}

// aws:ec2/NetworkAclEgress:NetworkAclEgress
export function ec2_NetworkAclEgress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.cidrBlock = "10.0.0.0/16";
  out.fromPort = 443;
  out.icmpCode = 0;
  out.icmpType = 0;
  out.ipv6CidrBlock = "";
  out.protocol = "";
  out.ruleNo = 0;
  out.toPort = 443;
  return out;
}

// aws:ec2/NetworkAclIngress:NetworkAclIngress
export function ec2_NetworkAclIngress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.cidrBlock = "10.0.0.0/16";
  out.fromPort = 443;
  out.icmpCode = 0;
  out.icmpType = 0;
  out.ipv6CidrBlock = "";
  out.protocol = "";
  out.ruleNo = 0;
  out.toPort = 443;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisAlternatePathHint:NetworkInsightsAnalysisAlternatePathHint
export function ec2_NetworkInsightsAnalysisAlternatePathHint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentArn = h.arn(ctx);
  out.componentId = h.id(ctx, "componentId");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanation:NetworkInsightsAnalysisExplanation
export function ec2_NetworkInsightsAnalysisExplanation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationAclRule(ctx, depth + 1))]);
  out.acls = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationAcl(ctx, depth + 1))]);
  out.address = "";
  out.addresses = (depth > 4 ? [] : [""]);
  out.attachedTos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationAttachedTo(ctx, depth + 1))]);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.cidrs = (depth > 4 ? [] : [""]);
  out.classicLoadBalancerListeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationClassicLoadBalancerListener(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationComponent(ctx, depth + 1))]);
  out.customerGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationCustomerGateway(ctx, depth + 1))]);
  out.destinationVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationDestinationVpc(ctx, depth + 1))]);
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationDestination(ctx, depth + 1))]);
  out.direction = "";
  out.elasticLoadBalancerListeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationElasticLoadBalancerListener(ctx, depth + 1))]);
  out.explanationCode = "";
  out.ingressRouteTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationIngressRouteTable(ctx, depth + 1))]);
  out.internetGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationInternetGateway(ctx, depth + 1))]);
  out.loadBalancerArn = h.arn(ctx);
  out.loadBalancerListenerPort = 443;
  out.loadBalancerTargetGroup = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationLoadBalancerTargetGroup(ctx, depth + 1))]);
  out.loadBalancerTargetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationLoadBalancerTargetGroup(ctx, depth + 1))]);
  out.loadBalancerTargetPort = 443;
  out.missingComponent = "";
  out.natGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationNatGateway(ctx, depth + 1))]);
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationNetworkInterface(ctx, depth + 1))]);
  out.packetField = "";
  out.port = 443;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationPortRange(ctx, depth + 1))]);
  out.prefixLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationPrefixList(ctx, depth + 1))]);
  out.protocols = (depth > 4 ? [] : [""]);
  out.routeTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationRouteTableRoute(ctx, depth + 1))]);
  out.routeTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationRouteTable(ctx, depth + 1))]);
  out.securityGroup = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSecurityGroup(ctx, depth + 1))]);
  out.securityGroupRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSecurityGroupRule(ctx, depth + 1))]);
  out.securityGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSecurityGroup(ctx, depth + 1))]);
  out.sourceVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSourceVpc(ctx, depth + 1))]);
  out.state = "active";
  out.subnetRouteTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSubnetRouteTable(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSubnet(ctx, depth + 1))]);
  out.transitGatewayAttachments = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationTransitGatewayAttachment(ctx, depth + 1))]);
  out.transitGatewayRouteTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute(ctx, depth + 1))]);
  out.transitGatewayRouteTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationTransitGatewayRouteTable(ctx, depth + 1))]);
  out.transitGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationTransitGateway(ctx, depth + 1))]);
  out.vpcEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationVpcEndpoint(ctx, depth + 1))]);
  out.vpcPeeringConnections = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationVpcPeeringConnection(ctx, depth + 1))]);
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationVpc(ctx, depth + 1))]);
  out.vpnConnections = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationVpnConnection(ctx, depth + 1))]);
  out.vpnGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationVpnGateway(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationAcl:NetworkInsightsAnalysisExplanationAcl
export function ec2_NetworkInsightsAnalysisExplanationAcl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationAclRule:NetworkInsightsAnalysisExplanationAclRule
export function ec2_NetworkInsightsAnalysisExplanationAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.egress = false;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationAclRulePortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationAclRulePortRange:NetworkInsightsAnalysisExplanationAclRulePortRange
export function ec2_NetworkInsightsAnalysisExplanationAclRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationAttachedTo:NetworkInsightsAnalysisExplanationAttachedTo
export function ec2_NetworkInsightsAnalysisExplanationAttachedTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationClassicLoadBalancerListener:NetworkInsightsAnalysisExplanationClassicLoadBalancerListener
export function ec2_NetworkInsightsAnalysisExplanationClassicLoadBalancerListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancePort = 443;
  out.loadBalancerPort = 443;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationComponent:NetworkInsightsAnalysisExplanationComponent
export function ec2_NetworkInsightsAnalysisExplanationComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationCustomerGateway:NetworkInsightsAnalysisExplanationCustomerGateway
export function ec2_NetworkInsightsAnalysisExplanationCustomerGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationDestination:NetworkInsightsAnalysisExplanationDestination
export function ec2_NetworkInsightsAnalysisExplanationDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationDestinationVpc:NetworkInsightsAnalysisExplanationDestinationVpc
export function ec2_NetworkInsightsAnalysisExplanationDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationElasticLoadBalancerListener:NetworkInsightsAnalysisExplanationElasticLoadBalancerListener
export function ec2_NetworkInsightsAnalysisExplanationElasticLoadBalancerListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationIngressRouteTable:NetworkInsightsAnalysisExplanationIngressRouteTable
export function ec2_NetworkInsightsAnalysisExplanationIngressRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationInternetGateway:NetworkInsightsAnalysisExplanationInternetGateway
export function ec2_NetworkInsightsAnalysisExplanationInternetGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationLoadBalancerTargetGroup:NetworkInsightsAnalysisExplanationLoadBalancerTargetGroup
export function ec2_NetworkInsightsAnalysisExplanationLoadBalancerTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationNatGateway:NetworkInsightsAnalysisExplanationNatGateway
export function ec2_NetworkInsightsAnalysisExplanationNatGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationNetworkInterface:NetworkInsightsAnalysisExplanationNetworkInterface
export function ec2_NetworkInsightsAnalysisExplanationNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationPortRange:NetworkInsightsAnalysisExplanationPortRange
export function ec2_NetworkInsightsAnalysisExplanationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationPrefixList:NetworkInsightsAnalysisExplanationPrefixList
export function ec2_NetworkInsightsAnalysisExplanationPrefixList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationRouteTable:NetworkInsightsAnalysisExplanationRouteTable
export function ec2_NetworkInsightsAnalysisExplanationRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationRouteTableRoute:NetworkInsightsAnalysisExplanationRouteTableRoute
export function ec2_NetworkInsightsAnalysisExplanationRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidr = "";
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyInternetGatewayId = h.id(ctx, "egressOnlyInternetGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.origin = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationSecurityGroup:NetworkInsightsAnalysisExplanationSecurityGroup
export function ec2_NetworkInsightsAnalysisExplanationSecurityGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationSecurityGroupRule:NetworkInsightsAnalysisExplanationSecurityGroupRule
export function ec2_NetworkInsightsAnalysisExplanationSecurityGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.direction = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange(ctx, depth + 1))]);
  out.prefixListId = h.id(ctx, "prefixListId");
  out.protocol = "";
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange:NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange
export function ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationSourceVpc:NetworkInsightsAnalysisExplanationSourceVpc
export function ec2_NetworkInsightsAnalysisExplanationSourceVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationSubnet:NetworkInsightsAnalysisExplanationSubnet
export function ec2_NetworkInsightsAnalysisExplanationSubnet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationSubnetRouteTable:NetworkInsightsAnalysisExplanationSubnetRouteTable
export function ec2_NetworkInsightsAnalysisExplanationSubnetRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationTransitGateway:NetworkInsightsAnalysisExplanationTransitGateway
export function ec2_NetworkInsightsAnalysisExplanationTransitGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationTransitGatewayAttachment:NetworkInsightsAnalysisExplanationTransitGatewayAttachment
export function ec2_NetworkInsightsAnalysisExplanationTransitGatewayAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationTransitGatewayRouteTable:NetworkInsightsAnalysisExplanationTransitGatewayRouteTable
export function ec2_NetworkInsightsAnalysisExplanationTransitGatewayRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute:NetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute
export function ec2_NetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.destinationCidr = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.routeOrigin = "";
  out.state = "active";
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationVpc:NetworkInsightsAnalysisExplanationVpc
export function ec2_NetworkInsightsAnalysisExplanationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationVpcEndpoint:NetworkInsightsAnalysisExplanationVpcEndpoint
export function ec2_NetworkInsightsAnalysisExplanationVpcEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationVpcPeeringConnection:NetworkInsightsAnalysisExplanationVpcPeeringConnection
export function ec2_NetworkInsightsAnalysisExplanationVpcPeeringConnection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationVpnConnection:NetworkInsightsAnalysisExplanationVpnConnection
export function ec2_NetworkInsightsAnalysisExplanationVpnConnection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisExplanationVpnGateway:NetworkInsightsAnalysisExplanationVpnGateway
export function ec2_NetworkInsightsAnalysisExplanationVpnGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponent:NetworkInsightsAnalysisForwardPathComponent
export function ec2_NetworkInsightsAnalysisForwardPathComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentAclRule(ctx, depth + 1))]);
  out.additionalDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail(ctx, depth + 1))]);
  out.attachedTos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentComponent(ctx, depth + 1))]);
  out.destinationVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc(ctx, depth + 1))]);
  out.inboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader(ctx, depth + 1))]);
  out.outboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader(ctx, depth + 1))]);
  out.routeTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute(ctx, depth + 1))]);
  out.securityGroupRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule(ctx, depth + 1))]);
  out.sequenceNumber = 0;
  out.sourceVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentSubnet(ctx, depth + 1))]);
  out.transitGatewayRouteTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute(ctx, depth + 1))]);
  out.transitGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway(ctx, depth + 1))]);
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentVpc(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentAclRule:NetworkInsightsAnalysisForwardPathComponentAclRule
export function ec2_NetworkInsightsAnalysisForwardPathComponentAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.egress = false;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentAclRulePortRange:NetworkInsightsAnalysisForwardPathComponentAclRulePortRange
export function ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentAdditionalDetail:NetworkInsightsAnalysisForwardPathComponentAdditionalDetail
export function ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalDetailType = "";
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent:NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent
export function ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentAttachedTo:NetworkInsightsAnalysisForwardPathComponentAttachedTo
export function ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentComponent:NetworkInsightsAnalysisForwardPathComponentComponent
export function ec2_NetworkInsightsAnalysisForwardPathComponentComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentDestinationVpc:NetworkInsightsAnalysisForwardPathComponentDestinationVpc
export function ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentInboundHeader:NetworkInsightsAnalysisForwardPathComponentInboundHeader
export function ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange:NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange
export function ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange:NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange
export function ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentOutboundHeader:NetworkInsightsAnalysisForwardPathComponentOutboundHeader
export function ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange:NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange
export function ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange:NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange
export function ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentRouteTableRoute:NetworkInsightsAnalysisForwardPathComponentRouteTableRoute
export function ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidr = "";
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyInternetGatewayId = h.id(ctx, "egressOnlyInternetGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.origin = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule:NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule
export function ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.direction = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange(ctx, depth + 1))]);
  out.prefixListId = h.id(ctx, "prefixListId");
  out.protocol = "";
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange:NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange
export function ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentSourceVpc:NetworkInsightsAnalysisForwardPathComponentSourceVpc
export function ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentSubnet:NetworkInsightsAnalysisForwardPathComponentSubnet
export function ec2_NetworkInsightsAnalysisForwardPathComponentSubnet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentTransitGateway:NetworkInsightsAnalysisForwardPathComponentTransitGateway
export function ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute:NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute
export function ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.destinationCidr = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.routeOrigin = "";
  out.state = "active";
  return out;
}

// aws:ec2/NetworkInsightsAnalysisForwardPathComponentVpc:NetworkInsightsAnalysisForwardPathComponentVpc
export function ec2_NetworkInsightsAnalysisForwardPathComponentVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponent:NetworkInsightsAnalysisReturnPathComponent
export function ec2_NetworkInsightsAnalysisReturnPathComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentAclRule(ctx, depth + 1))]);
  out.additionalDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail(ctx, depth + 1))]);
  out.attachedTos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentComponent(ctx, depth + 1))]);
  out.destinationVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc(ctx, depth + 1))]);
  out.inboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader(ctx, depth + 1))]);
  out.outboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader(ctx, depth + 1))]);
  out.routeTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute(ctx, depth + 1))]);
  out.securityGroupRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule(ctx, depth + 1))]);
  out.sequenceNumber = 0;
  out.sourceVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentSubnet(ctx, depth + 1))]);
  out.transitGatewayRouteTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute(ctx, depth + 1))]);
  out.transitGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway(ctx, depth + 1))]);
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentVpc(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentAclRule:NetworkInsightsAnalysisReturnPathComponentAclRule
export function ec2_NetworkInsightsAnalysisReturnPathComponentAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.egress = false;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentAclRulePortRange:NetworkInsightsAnalysisReturnPathComponentAclRulePortRange
export function ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentAdditionalDetail:NetworkInsightsAnalysisReturnPathComponentAdditionalDetail
export function ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalDetailType = "";
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent:NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent
export function ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentAttachedTo:NetworkInsightsAnalysisReturnPathComponentAttachedTo
export function ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentComponent:NetworkInsightsAnalysisReturnPathComponentComponent
export function ec2_NetworkInsightsAnalysisReturnPathComponentComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentDestinationVpc:NetworkInsightsAnalysisReturnPathComponentDestinationVpc
export function ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentInboundHeader:NetworkInsightsAnalysisReturnPathComponentInboundHeader
export function ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange:NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange
export function ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange:NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange
export function ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentOutboundHeader:NetworkInsightsAnalysisReturnPathComponentOutboundHeader
export function ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange:NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange
export function ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange:NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange
export function ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentRouteTableRoute:NetworkInsightsAnalysisReturnPathComponentRouteTableRoute
export function ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidr = "";
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyInternetGatewayId = h.id(ctx, "egressOnlyInternetGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.origin = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule:NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule
export function ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.direction = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange(ctx, depth + 1))]);
  out.prefixListId = h.id(ctx, "prefixListId");
  out.protocol = "";
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange:NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange
export function ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentSourceVpc:NetworkInsightsAnalysisReturnPathComponentSourceVpc
export function ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentSubnet:NetworkInsightsAnalysisReturnPathComponentSubnet
export function ec2_NetworkInsightsAnalysisReturnPathComponentSubnet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentTransitGateway:NetworkInsightsAnalysisReturnPathComponentTransitGateway
export function ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute:NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute
export function ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.destinationCidr = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.routeOrigin = "";
  out.state = "active";
  return out;
}

// aws:ec2/NetworkInsightsAnalysisReturnPathComponentVpc:NetworkInsightsAnalysisReturnPathComponentVpc
export function ec2_NetworkInsightsAnalysisReturnPathComponentVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/NetworkInsightsPathFilterAtDestination:NetworkInsightsPathFilterAtDestination
export function ec2_NetworkInsightsPathFilterAtDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddress = "";
  out.destinationPortRange = (depth > 4 ? {} : T_ec2.ec2_NetworkInsightsPathFilterAtDestinationDestinationPortRange(ctx, depth + 1));
  out.sourceAddress = "";
  out.sourcePortRange = (depth > 4 ? {} : T_ec2.ec2_NetworkInsightsPathFilterAtDestinationSourcePortRange(ctx, depth + 1));
  return out;
}

// aws:ec2/NetworkInsightsPathFilterAtDestinationDestinationPortRange:NetworkInsightsPathFilterAtDestinationDestinationPortRange
export function ec2_NetworkInsightsPathFilterAtDestinationDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/NetworkInsightsPathFilterAtDestinationSourcePortRange:NetworkInsightsPathFilterAtDestinationSourcePortRange
export function ec2_NetworkInsightsPathFilterAtDestinationSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/NetworkInsightsPathFilterAtSource:NetworkInsightsPathFilterAtSource
export function ec2_NetworkInsightsPathFilterAtSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddress = "";
  out.destinationPortRange = (depth > 4 ? {} : T_ec2.ec2_NetworkInsightsPathFilterAtSourceDestinationPortRange(ctx, depth + 1));
  out.sourceAddress = "";
  out.sourcePortRange = (depth > 4 ? {} : T_ec2.ec2_NetworkInsightsPathFilterAtSourceSourcePortRange(ctx, depth + 1));
  return out;
}

// aws:ec2/NetworkInsightsPathFilterAtSourceDestinationPortRange:NetworkInsightsPathFilterAtSourceDestinationPortRange
export function ec2_NetworkInsightsPathFilterAtSourceDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/NetworkInsightsPathFilterAtSourceSourcePortRange:NetworkInsightsPathFilterAtSourceSourcePortRange
export function ec2_NetworkInsightsPathFilterAtSourceSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/NetworkInterfaceAttachment:NetworkInterfaceAttachment
export function ec2_NetworkInterfaceAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.deviceIndex = 0;
  out.instance = "";
  return out;
}

// aws:ec2/NetworkInterfacePermissionTimeouts:NetworkInterfacePermissionTimeouts
export function ec2_NetworkInterfacePermissionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:ec2/PeeringConnectionOptionsAccepter:PeeringConnectionOptionsAccepter
export function ec2_PeeringConnectionOptionsAccepter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowRemoteVpcDnsResolution = true;
  return out;
}

// aws:ec2/PeeringConnectionOptionsRequester:PeeringConnectionOptionsRequester
export function ec2_PeeringConnectionOptionsRequester(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowRemoteVpcDnsResolution = true;
  return out;
}

// aws:ec2/RouteTableRoute:RouteTableRoute
export function ec2_RouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.carrierGatewayId = h.id(ctx, "carrierGatewayId");
  out.cidrBlock = "10.0.0.0/16";
  out.coreNetworkArn = h.arn(ctx);
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyGatewayId = h.id(ctx, "egressOnlyGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.ipv6CidrBlock = "";
  out.localGatewayId = h.id(ctx, "localGatewayId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/SecurityGroupEgress:SecurityGroupEgress
export function ec2_SecurityGroupEgress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.description = "";
  out.fromPort = 443;
  out.ipv6CidrBlocks = (depth > 4 ? [] : [""]);
  out.prefixListIds = (depth > 4 ? [] : [""]);
  out.protocol = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.self = false;
  out.toPort = 443;
  return out;
}

// aws:ec2/SecurityGroupIngress:SecurityGroupIngress
export function ec2_SecurityGroupIngress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.description = "";
  out.fromPort = 443;
  out.ipv6CidrBlocks = (depth > 4 ? [] : [""]);
  out.prefixListIds = (depth > 4 ? [] : [""]);
  out.protocol = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.self = false;
  out.toPort = 443;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchSpecification:SpotFleetRequestLaunchSpecification
export function ec2_SpotFleetRequestLaunchSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ami = "";
  out.associatePublicIpAddress = false;
  out.availabilityZone = ctx.region + "a";
  out.ebsBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice(ctx, depth + 1))]);
  out.ebsOptimized = false;
  out.ephemeralBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice(ctx, depth + 1))]);
  out.iamInstanceProfile = "";
  out.iamInstanceProfileArn = h.arn(ctx);
  out.instanceType = "";
  out.keyName = "";
  out.monitoring = false;
  out.placementGroup = "";
  out.placementTenancy = "";
  out.rootBlockDevices = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice(ctx, depth + 1))]);
  out.spotPrice = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.tags = {};
  out.userData = "";
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  out.weightedCapacity = "";
  return out;
}

// aws:ec2/SpotFleetRequestLaunchSpecificationEbsBlockDevice:SpotFleetRequestLaunchSpecificationEbsBlockDevice
export function ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/SpotFleetRequestLaunchSpecificationEphemeralBlockDevice:SpotFleetRequestLaunchSpecificationEphemeralBlockDevice
export function ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/SpotFleetRequestLaunchSpecificationRootBlockDevice:SpotFleetRequestLaunchSpecificationRootBlockDevice
export function ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfig:SpotFleetRequestLaunchTemplateConfig
export function ec2_SpotFleetRequestLaunchTemplateConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.launchTemplateSpecification = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification(ctx, depth + 1));
  out.overrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverride(ctx, depth + 1))]);
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification:SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification
export function ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverride:SpotFleetRequestLaunchTemplateConfigOverride
export function ec2_SpotFleetRequestLaunchTemplateConfigOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.instanceRequirements = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements(ctx, depth + 1));
  out.instanceType = "";
  out.priority = 0;
  out.spotPrice = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  out.weightedCapacity = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorCount = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount(ctx, depth + 1));
  out.acceleratorManufacturers = (depth > 4 ? [] : [""]);
  out.acceleratorNames = (depth > 4 ? [] : [""]);
  out.acceleratorTotalMemoryMib = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib(ctx, depth + 1));
  out.acceleratorTypes = (depth > 4 ? [] : [""]);
  out.allowedInstanceTypes = (depth > 4 ? [] : [""]);
  out.bareMetal = "";
  out.baselineEbsBandwidthMbps = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps(ctx, depth + 1));
  out.burstablePerformance = "";
  out.cpuManufacturers = (depth > 4 ? [] : [""]);
  out.excludedInstanceTypes = (depth > 4 ? [] : [""]);
  out.instanceGenerations = (depth > 4 ? [] : [""]);
  out.localStorage = "";
  out.localStorageTypes = (depth > 4 ? [] : [""]);
  out.memoryGibPerVcpu = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu(ctx, depth + 1));
  out.memoryMib = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib(ctx, depth + 1));
  out.networkBandwidthGbps = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps(ctx, depth + 1));
  out.networkInterfaceCount = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount(ctx, depth + 1));
  out.onDemandMaxPricePercentageOverLowestPrice = 0;
  out.requireHibernateSupport = false;
  out.spotMaxPricePercentageOverLowestPrice = 0;
  out.totalLocalStorageGb = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb(ctx, depth + 1));
  out.vcpuCount = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount(ctx, depth + 1));
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount:SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/SpotFleetRequestSpotMaintenanceStrategies:SpotFleetRequestSpotMaintenanceStrategies
export function ec2_SpotFleetRequestSpotMaintenanceStrategies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityRebalance = (depth > 4 ? {} : T_ec2.ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance(ctx, depth + 1));
  return out;
}

// aws:ec2/SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance:SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance
export function ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.replacementStrategy = "";
  return out;
}

// aws:ec2/SpotInstanceRequestCapacityReservationSpecification:SpotInstanceRequestCapacityReservationSpecification
export function ec2_SpotInstanceRequestCapacityReservationSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationPreference = "";
  out.capacityReservationTarget = (depth > 4 ? {} : T_ec2.ec2_SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget(ctx, depth + 1));
  return out;
}

// aws:ec2/SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget:SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
export function ec2_SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationId = h.id(ctx, "capacityReservationId");
  out.capacityReservationResourceGroupArn = h.arn(ctx);
  return out;
}

// aws:ec2/SpotInstanceRequestCpuOptions:SpotInstanceRequestCpuOptions
export function ec2_SpotInstanceRequestCpuOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amdSevSnp = "";
  out.coreCount = 1;
  out.threadsPerCore = 0;
  return out;
}

// aws:ec2/SpotInstanceRequestCreditSpecification:SpotInstanceRequestCreditSpecification
export function ec2_SpotInstanceRequestCreditSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuCredits = "";
  return out;
}

// aws:ec2/SpotInstanceRequestEbsBlockDevice:SpotInstanceRequestEbsBlockDevice
export function ec2_SpotInstanceRequestEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.tags = {};
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/SpotInstanceRequestEnclaveOptions:SpotInstanceRequestEnclaveOptions
export function ec2_SpotInstanceRequestEnclaveOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/SpotInstanceRequestEphemeralBlockDevice:SpotInstanceRequestEphemeralBlockDevice
export function ec2_SpotInstanceRequestEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.noDevice = false;
  out.virtualName = "";
  return out;
}

// aws:ec2/SpotInstanceRequestLaunchTemplate:SpotInstanceRequestLaunchTemplate
export function ec2_SpotInstanceRequestLaunchTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.version = "1";
  return out;
}

// aws:ec2/SpotInstanceRequestMaintenanceOptions:SpotInstanceRequestMaintenanceOptions
export function ec2_SpotInstanceRequestMaintenanceOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRecovery = "";
  return out;
}

// aws:ec2/SpotInstanceRequestMetadataOptions:SpotInstanceRequestMetadataOptions
export function ec2_SpotInstanceRequestMetadataOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpProtocolIpv6 = "";
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  out.instanceMetadataTags = "";
  return out;
}

// aws:ec2/SpotInstanceRequestNetworkInterface:SpotInstanceRequestNetworkInterface
export function ec2_SpotInstanceRequestNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceIndex = 0;
  out.networkCardIndex = 0;
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  return out;
}

// aws:ec2/SpotInstanceRequestPrivateDnsNameOptions:SpotInstanceRequestPrivateDnsNameOptions
export function ec2_SpotInstanceRequestPrivateDnsNameOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableResourceNameDnsARecord = true;
  out.enableResourceNameDnsAaaaRecord = true;
  out.hostnameType = "";
  return out;
}

// aws:ec2/SpotInstanceRequestRootBlockDevice:SpotInstanceRequestRootBlockDevice
export function ec2_SpotInstanceRequestRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.tags = {};
  out.tagsAll = { ...(i.tags ?? {}) };
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/TrafficMirrorFilterRuleDestinationPortRange:TrafficMirrorFilterRuleDestinationPortRange
export function ec2_TrafficMirrorFilterRuleDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/TrafficMirrorFilterRuleSourcePortRange:TrafficMirrorFilterRuleSourcePortRange
export function ec2_TrafficMirrorFilterRuleSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/VpcBlockPublicAccessExclusionTimeouts:VpcBlockPublicAccessExclusionTimeouts
export function ec2_VpcBlockPublicAccessExclusionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:ec2/VpcBlockPublicAccessOptionsTimeouts:VpcBlockPublicAccessOptionsTimeouts
export function ec2_VpcBlockPublicAccessOptionsTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:ec2/VpcEndpointDnsEntry:VpcEndpointDnsEntry
export function ec2_VpcEndpointDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:ec2/VpcEndpointDnsOptions:VpcEndpointDnsOptions
export function ec2_VpcEndpointDnsOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsRecordIpType = "";
  out.privateDnsOnlyForInboundResolverEndpoint = false;
  return out;
}

// aws:ec2/VpcEndpointServicePrivateDnsNameConfiguration:VpcEndpointServicePrivateDnsNameConfiguration
export function ec2_VpcEndpointServicePrivateDnsNameConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.state = "active";
  out.type = "";
  out.value = "";
  return out;
}

// aws:ec2/VpcEndpointSubnetConfiguration:VpcEndpointSubnetConfiguration
export function ec2_VpcEndpointSubnetConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv4 = "";
  out.ipv6 = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:ec2/VpcIpamOperatingRegion:VpcIpamOperatingRegion
export function ec2_VpcIpamOperatingRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regionName = "";
  return out;
}

// aws:ec2/VpcIpamPoolCidrCidrAuthorizationContext:VpcIpamPoolCidrCidrAuthorizationContext
export function ec2_VpcIpamPoolCidrCidrAuthorizationContext(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = "";
  out.signature = "";
  return out;
}

// aws:ec2/VpcIpamResourceDiscoveryOperatingRegion:VpcIpamResourceDiscoveryOperatingRegion
export function ec2_VpcIpamResourceDiscoveryOperatingRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regionName = "";
  return out;
}

// aws:ec2/VpcPeeringConnectionAccepter:VpcPeeringConnectionAccepter
export function ec2_VpcPeeringConnectionAccepter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowRemoteVpcDnsResolution = true;
  return out;
}

// aws:ec2/VpcPeeringConnectionAccepterAccepter:VpcPeeringConnectionAccepterAccepter
export function ec2_VpcPeeringConnectionAccepterAccepter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowRemoteVpcDnsResolution = true;
  return out;
}

// aws:ec2/VpcPeeringConnectionAccepterRequester:VpcPeeringConnectionAccepterRequester
export function ec2_VpcPeeringConnectionAccepterRequester(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowRemoteVpcDnsResolution = true;
  return out;
}

// aws:ec2/VpcPeeringConnectionRequester:VpcPeeringConnectionRequester
export function ec2_VpcPeeringConnectionRequester(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowRemoteVpcDnsResolution = true;
  return out;
}

// aws:ec2/VpnConnectionRoute:VpnConnectionRoute
export function ec2_VpnConnectionRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidrBlock = "";
  out.source = "";
  out.state = "active";
  return out;
}

// aws:ec2/VpnConnectionTunnel1LogOptions:VpnConnectionTunnel1LogOptions
export function ec2_VpnConnectionTunnel1LogOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogOptions = (depth > 4 ? {} : T_ec2.ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions(ctx, depth + 1));
  return out;
}

// aws:ec2/VpnConnectionTunnel1LogOptionsCloudwatchLogOptions:VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
export function ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logEnabled = false;
  out.logGroupArn = h.arn(ctx);
  out.logOutputFormat = "";
  return out;
}

// aws:ec2/VpnConnectionTunnel2LogOptions:VpnConnectionTunnel2LogOptions
export function ec2_VpnConnectionTunnel2LogOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogOptions = (depth > 4 ? {} : T_ec2.ec2_VpnConnectionTunnel2LogOptionsCloudwatchLogOptions(ctx, depth + 1));
  return out;
}

// aws:ec2/VpnConnectionTunnel2LogOptionsCloudwatchLogOptions:VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
export function ec2_VpnConnectionTunnel2LogOptionsCloudwatchLogOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logEnabled = false;
  out.logGroupArn = h.arn(ctx);
  out.logOutputFormat = "";
  return out;
}

// aws:ec2/VpnConnectionVgwTelemetry:VpnConnectionVgwTelemetry
export function ec2_VpnConnectionVgwTelemetry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptedRouteCount = 1;
  out.certificateArn = h.arn(ctx);
  out.lastStatusChange = "";
  out.outsideIpAddress = "";
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:ec2/getAmiBlockDeviceMapping:getAmiBlockDeviceMapping
export function ec2_getAmiBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = {};
  out.noDevice = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/getAmiFilter:getAmiFilter
export function ec2_getAmiFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getAmiIdsFilter:getAmiIdsFilter
export function ec2_getAmiIdsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getAmiProductCode:getAmiProductCode
export function ec2_getAmiProductCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.productCodeId = h.id(ctx, "productCodeId");
  out.productCodeType = "";
  return out;
}

// aws:ec2/getCoipPoolFilter:getCoipPoolFilter
export function ec2_getCoipPoolFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getCoipPoolsFilter:getCoipPoolsFilter
export function ec2_getCoipPoolsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getCustomerGatewayFilter:getCustomerGatewayFilter
export function ec2_getCustomerGatewayFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getDedicatedHostFilter:getDedicatedHostFilter
export function ec2_getDedicatedHostFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getEipsFilter:getEipsFilter
export function ec2_getEipsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getElasticIpFilter:getElasticIpFilter
export function ec2_getElasticIpFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstanceCreditSpecification:getInstanceCreditSpecification
export function ec2_getInstanceCreditSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuCredits = "";
  return out;
}

// aws:ec2/getInstanceEbsBlockDevice:getInstanceEbsBlockDevice
export function ec2_getInstanceEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.tags = {};
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/getInstanceEnclaveOption:getInstanceEnclaveOption
export function ec2_getInstanceEnclaveOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/getInstanceEphemeralBlockDevice:getInstanceEphemeralBlockDevice
export function ec2_getInstanceEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.noDevice = false;
  out.virtualName = "";
  return out;
}

// aws:ec2/getInstanceFilter:getInstanceFilter
export function ec2_getInstanceFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstanceMaintenanceOption:getInstanceMaintenanceOption
export function ec2_getInstanceMaintenanceOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRecovery = "";
  return out;
}

// aws:ec2/getInstanceMetadataOption:getInstanceMetadataOption
export function ec2_getInstanceMetadataOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpProtocolIpv6 = "";
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  out.instanceMetadataTags = "";
  return out;
}

// aws:ec2/getInstancePrivateDnsNameOption:getInstancePrivateDnsNameOption
export function ec2_getInstancePrivateDnsNameOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableResourceNameDnsARecord = true;
  out.enableResourceNameDnsAaaaRecord = true;
  out.hostnameType = "";
  return out;
}

// aws:ec2/getInstanceRootBlockDevice:getInstanceRootBlockDevice
export function ec2_getInstanceRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.tags = {};
  out.throughput = 0;
  out.volumeId = h.id(ctx, "volumeId");
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/getInstanceTypeFpga:getInstanceTypeFpga
export function ec2_getInstanceTypeFpga(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.manufacturer = "";
  out.memorySize = 8;
  out.name = ctx.name;
  return out;
}

// aws:ec2/getInstanceTypeGpus:getInstanceTypeGpus
export function ec2_getInstanceTypeGpus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.manufacturer = "";
  out.memorySize = 8;
  out.name = ctx.name;
  return out;
}

// aws:ec2/getInstanceTypeInferenceAccelerator:getInstanceTypeInferenceAccelerator
export function ec2_getInstanceTypeInferenceAccelerator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.manufacturer = "";
  out.memorySize = 8;
  out.name = ctx.name;
  return out;
}

// aws:ec2/getInstanceTypeInstanceDisk:getInstanceTypeInstanceDisk
export function ec2_getInstanceTypeInstanceDisk(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.size = 8;
  out.type = "";
  return out;
}

// aws:ec2/getInstanceTypeMediaAccelerator:getInstanceTypeMediaAccelerator
export function ec2_getInstanceTypeMediaAccelerator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.manufacturer = "";
  out.memorySize = 8;
  out.name = ctx.name;
  return out;
}

// aws:ec2/getInstanceTypeNetworkCard:getInstanceTypeNetworkCard
export function ec2_getInstanceTypeNetworkCard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.baselineBandwidth = 0;
  out.index = 0;
  out.maximumInterfaces = 0;
  out.peakBandwidth = 0;
  out.performance = "";
  return out;
}

// aws:ec2/getInstanceTypeNeuronDevice:getInstanceTypeNeuronDevice
export function ec2_getInstanceTypeNeuronDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coreCount = 1;
  out.coreVersion = 0;
  out.count = 1;
  out.memorySize = 8;
  out.name = ctx.name;
  return out;
}

// aws:ec2/getInstanceTypeOfferingFilter:getInstanceTypeOfferingFilter
export function ec2_getInstanceTypeOfferingFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstanceTypeOfferingsFilter:getInstanceTypeOfferingsFilter
export function ec2_getInstanceTypeOfferingsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstanceTypesFilter:getInstanceTypesFilter
export function ec2_getInstanceTypesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInstancesFilter:getInstancesFilter
export function ec2_getInstancesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getInternetGatewayAttachment:getInternetGatewayAttachment
export function ec2_getInternetGatewayAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.state = "active";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:ec2/getInternetGatewayFilter:getInternetGatewayFilter
export function ec2_getInternetGatewayFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getKeyPairFilter:getKeyPairFilter
export function ec2_getKeyPairFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLaunchConfigurationEbsBlockDevice:getLaunchConfigurationEbsBlockDevice
export function ec2_getLaunchConfigurationEbsBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.deviceName = "";
  out.encrypted = false;
  out.iops = 0;
  out.noDevice = false;
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/getLaunchConfigurationEphemeralBlockDevice:getLaunchConfigurationEphemeralBlockDevice
export function ec2_getLaunchConfigurationEphemeralBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/getLaunchConfigurationMetadataOption:getLaunchConfigurationMetadataOption
export function ec2_getLaunchConfigurationMetadataOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  return out;
}

// aws:ec2/getLaunchConfigurationRootBlockDevice:getLaunchConfigurationRootBlockDevice
export function ec2_getLaunchConfigurationRootBlockDevice(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = false;
  out.encrypted = false;
  out.iops = 0;
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/getLaunchTemplateBlockDeviceMapping:getLaunchTemplateBlockDeviceMapping
export function ec2_getLaunchTemplateBlockDeviceMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deviceName = "";
  out.ebs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateBlockDeviceMappingEb(ctx, depth + 1))]);
  out.noDevice = "";
  out.virtualName = "";
  return out;
}

// aws:ec2/getLaunchTemplateBlockDeviceMappingEb:getLaunchTemplateBlockDeviceMappingEb
export function ec2_getLaunchTemplateBlockDeviceMappingEb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteOnTermination = "";
  out.encrypted = "";
  out.iops = 0;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.snapshotId = h.id(ctx, "snapshotId");
  out.throughput = 0;
  out.volumeInitializationRate = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:ec2/getLaunchTemplateCapacityReservationSpecification:getLaunchTemplateCapacityReservationSpecification
export function ec2_getLaunchTemplateCapacityReservationSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationPreference = "";
  out.capacityReservationTargets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget:getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
export function ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityReservationId = h.id(ctx, "capacityReservationId");
  out.capacityReservationResourceGroupArn = h.arn(ctx);
  return out;
}

// aws:ec2/getLaunchTemplateCpuOption:getLaunchTemplateCpuOption
export function ec2_getLaunchTemplateCpuOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amdSevSnp = "";
  out.coreCount = 1;
  out.threadsPerCore = 0;
  return out;
}

// aws:ec2/getLaunchTemplateCreditSpecification:getLaunchTemplateCreditSpecification
export function ec2_getLaunchTemplateCreditSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpuCredits = "";
  return out;
}

// aws:ec2/getLaunchTemplateElasticGpuSpecification:getLaunchTemplateElasticGpuSpecification
export function ec2_getLaunchTemplateElasticGpuSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:ec2/getLaunchTemplateElasticInferenceAccelerator:getLaunchTemplateElasticInferenceAccelerator
export function ec2_getLaunchTemplateElasticInferenceAccelerator(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:ec2/getLaunchTemplateEnclaveOption:getLaunchTemplateEnclaveOption
export function ec2_getLaunchTemplateEnclaveOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/getLaunchTemplateFilter:getLaunchTemplateFilter
export function ec2_getLaunchTemplateFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLaunchTemplateHibernationOption:getLaunchTemplateHibernationOption
export function ec2_getLaunchTemplateHibernationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configured = false;
  return out;
}

// aws:ec2/getLaunchTemplateIamInstanceProfile:getLaunchTemplateIamInstanceProfile
export function ec2_getLaunchTemplateIamInstanceProfile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = ctx.name;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceMarketOption:getLaunchTemplateInstanceMarketOption
export function ec2_getLaunchTemplateInstanceMarketOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.marketType = "";
  out.spotOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceMarketOptionSpotOption(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getLaunchTemplateInstanceMarketOptionSpotOption:getLaunchTemplateInstanceMarketOptionSpotOption
export function ec2_getLaunchTemplateInstanceMarketOptionSpotOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockDurationMinutes = 0;
  out.instanceInterruptionBehavior = "";
  out.maxPrice = "";
  out.spotInstanceType = "";
  out.validUntil = "";
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirement:getLaunchTemplateInstanceRequirement
export function ec2_getLaunchTemplateInstanceRequirement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceleratorCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementAcceleratorCount(ctx, depth + 1))]);
  out.acceleratorManufacturers = (depth > 4 ? [] : [""]);
  out.acceleratorNames = (depth > 4 ? [] : [""]);
  out.acceleratorTotalMemoryMibs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib(ctx, depth + 1))]);
  out.acceleratorTypes = (depth > 4 ? [] : [""]);
  out.allowedInstanceTypes = (depth > 4 ? [] : [""]);
  out.bareMetal = "";
  out.baselineEbsBandwidthMbps = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp(ctx, depth + 1))]);
  out.burstablePerformance = "";
  out.cpuManufacturers = (depth > 4 ? [] : [""]);
  out.excludedInstanceTypes = (depth > 4 ? [] : [""]);
  out.instanceGenerations = (depth > 4 ? [] : [""]);
  out.localStorage = "";
  out.localStorageTypes = (depth > 4 ? [] : [""]);
  out.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = 0;
  out.memoryGibPerVcpus = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus(ctx, depth + 1))]);
  out.memoryMibs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementMemoryMib(ctx, depth + 1))]);
  out.networkBandwidthGbps = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp(ctx, depth + 1))]);
  out.networkInterfaceCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount(ctx, depth + 1))]);
  out.onDemandMaxPricePercentageOverLowestPrice = 0;
  out.requireHibernateSupport = false;
  out.spotMaxPricePercentageOverLowestPrice = 0;
  out.totalLocalStorageGbs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb(ctx, depth + 1))]);
  out.vcpuCounts = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateInstanceRequirementVcpuCount(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementAcceleratorCount:getLaunchTemplateInstanceRequirementAcceleratorCount
export function ec2_getLaunchTemplateInstanceRequirementAcceleratorCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib:getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib
export function ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp:getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp
export function ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementMemoryGibPerVcpus:getLaunchTemplateInstanceRequirementMemoryGibPerVcpus
export function ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementMemoryMib:getLaunchTemplateInstanceRequirementMemoryMib
export function ec2_getLaunchTemplateInstanceRequirementMemoryMib(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementNetworkBandwidthGbp:getLaunchTemplateInstanceRequirementNetworkBandwidthGbp
export function ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementNetworkInterfaceCount:getLaunchTemplateInstanceRequirementNetworkInterfaceCount
export function ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementTotalLocalStorageGb:getLaunchTemplateInstanceRequirementTotalLocalStorageGb
export function ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateInstanceRequirementVcpuCount:getLaunchTemplateInstanceRequirementVcpuCount
export function ec2_getLaunchTemplateInstanceRequirementVcpuCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.max = 0;
  out.min = 0;
  return out;
}

// aws:ec2/getLaunchTemplateLicenseSpecification:getLaunchTemplateLicenseSpecification
export function ec2_getLaunchTemplateLicenseSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.licenseConfigurationArn = h.arn(ctx);
  return out;
}

// aws:ec2/getLaunchTemplateMaintenanceOption:getLaunchTemplateMaintenanceOption
export function ec2_getLaunchTemplateMaintenanceOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRecovery = "";
  return out;
}

// aws:ec2/getLaunchTemplateMetadataOption:getLaunchTemplateMetadataOption
export function ec2_getLaunchTemplateMetadataOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.httpEndpoint = h.endpoint(ctx, "httpEndpoint");
  out.httpProtocolIpv6 = "";
  out.httpPutResponseHopLimit = 0;
  out.httpTokens = "";
  out.instanceMetadataTags = "";
  return out;
}

// aws:ec2/getLaunchTemplateMonitoring:getLaunchTemplateMonitoring
export function ec2_getLaunchTemplateMonitoring(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:ec2/getLaunchTemplateNetworkInterface:getLaunchTemplateNetworkInterface
export function ec2_getLaunchTemplateNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associateCarrierIpAddress = "";
  out.associatePublicIpAddress = false;
  out.connectionTrackingSpecifications = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getLaunchTemplateNetworkInterfaceConnectionTrackingSpecification(ctx, depth + 1))]);
  out.deleteOnTermination = false;
  out.description = "";
  out.deviceIndex = 0;
  out.interfaceType = "";
  out.ipv4AddressCount = 1;
  out.ipv4Addresses = (depth > 4 ? [] : [""]);
  out.ipv4PrefixCount = 1;
  out.ipv4Prefixes = (depth > 4 ? [] : [""]);
  out.ipv6AddressCount = 1;
  out.ipv6Addresses = (depth > 4 ? [] : [""]);
  out.ipv6PrefixCount = 1;
  out.ipv6Prefixes = (depth > 4 ? [] : [""]);
  out.networkCardIndex = 0;
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.primaryIpv6 = "";
  out.privateIpAddress = "10.0.0.10";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:ec2/getLaunchTemplateNetworkInterfaceConnectionTrackingSpecification:getLaunchTemplateNetworkInterfaceConnectionTrackingSpecification
export function ec2_getLaunchTemplateNetworkInterfaceConnectionTrackingSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tcpEstablishedTimeout = 30;
  out.udpStreamTimeout = 30;
  out.udpTimeout = 30;
  return out;
}

// aws:ec2/getLaunchTemplatePlacement:getLaunchTemplatePlacement
export function ec2_getLaunchTemplatePlacement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.affinity = "";
  out.availabilityZone = ctx.region + "a";
  out.groupName = "";
  out.hostId = h.id(ctx, "hostId");
  out.hostResourceGroupArn = h.arn(ctx);
  out.partitionNumber = 0;
  out.spreadDomain = h.endpoint(ctx, "spreadDomain");
  out.tenancy = "";
  return out;
}

// aws:ec2/getLaunchTemplatePrivateDnsNameOption:getLaunchTemplatePrivateDnsNameOption
export function ec2_getLaunchTemplatePrivateDnsNameOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableResourceNameDnsARecord = true;
  out.enableResourceNameDnsAaaaRecord = true;
  out.hostnameType = "";
  return out;
}

// aws:ec2/getLaunchTemplateTagSpecification:getLaunchTemplateTagSpecification
export function ec2_getLaunchTemplateTagSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceType = "";
  out.tags = {};
  return out;
}

// aws:ec2/getLocalGatewayFilter:getLocalGatewayFilter
export function ec2_getLocalGatewayFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGatewayRouteTableFilter:getLocalGatewayRouteTableFilter
export function ec2_getLocalGatewayRouteTableFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGatewayRouteTablesFilter:getLocalGatewayRouteTablesFilter
export function ec2_getLocalGatewayRouteTablesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGatewayVirtualInterfaceFilter:getLocalGatewayVirtualInterfaceFilter
export function ec2_getLocalGatewayVirtualInterfaceFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGatewayVirtualInterfaceGroupFilter:getLocalGatewayVirtualInterfaceGroupFilter
export function ec2_getLocalGatewayVirtualInterfaceGroupFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGatewayVirtualInterfaceGroupsFilter:getLocalGatewayVirtualInterfaceGroupsFilter
export function ec2_getLocalGatewayVirtualInterfaceGroupsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getLocalGatewaysFilter:getLocalGatewaysFilter
export function ec2_getLocalGatewaysFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getManagedPrefixListEntry:getManagedPrefixListEntry
export function ec2_getManagedPrefixListEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.description = "";
  return out;
}

// aws:ec2/getManagedPrefixListFilter:getManagedPrefixListFilter
export function ec2_getManagedPrefixListFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getManagedPrefixListsFilter:getManagedPrefixListsFilter
export function ec2_getManagedPrefixListsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNatGatewayFilter:getNatGatewayFilter
export function ec2_getNatGatewayFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNatGatewaysFilter:getNatGatewaysFilter
export function ec2_getNatGatewaysFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNetworkAclsFilter:getNetworkAclsFilter
export function ec2_getNetworkAclsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisAlternatePathHint:getNetworkInsightsAnalysisAlternatePathHint
export function ec2_getNetworkInsightsAnalysisAlternatePathHint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentArn = h.arn(ctx);
  out.componentId = h.id(ctx, "componentId");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanation:getNetworkInsightsAnalysisExplanation
export function ec2_getNetworkInsightsAnalysisExplanation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationAclRule(ctx, depth + 1))]);
  out.acls = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationAcl(ctx, depth + 1))]);
  out.address = "";
  out.addresses = (depth > 4 ? [] : [""]);
  out.attachedTos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationAttachedTo(ctx, depth + 1))]);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.cidrs = (depth > 4 ? [] : [""]);
  out.classicLoadBalancerListeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationClassicLoadBalancerListener(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationComponent(ctx, depth + 1))]);
  out.customerGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationCustomerGateway(ctx, depth + 1))]);
  out.destinationVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationDestinationVpc(ctx, depth + 1))]);
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationDestination(ctx, depth + 1))]);
  out.direction = "";
  out.elasticLoadBalancerListeners = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationElasticLoadBalancerListener(ctx, depth + 1))]);
  out.explanationCode = "";
  out.ingressRouteTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationIngressRouteTable(ctx, depth + 1))]);
  out.internetGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationInternetGateway(ctx, depth + 1))]);
  out.loadBalancerArn = h.arn(ctx);
  out.loadBalancerListenerPort = 443;
  out.loadBalancerTargetGroup = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationLoadBalancerTargetGroup(ctx, depth + 1))]);
  out.loadBalancerTargetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationLoadBalancerTargetGroup(ctx, depth + 1))]);
  out.loadBalancerTargetPort = 443;
  out.missingComponent = "";
  out.natGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationNatGateway(ctx, depth + 1))]);
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationNetworkInterface(ctx, depth + 1))]);
  out.packetField = "";
  out.port = 443;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationPortRange(ctx, depth + 1))]);
  out.prefixLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationPrefixList(ctx, depth + 1))]);
  out.protocols = (depth > 4 ? [] : [""]);
  out.routeTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationRouteTableRoute(ctx, depth + 1))]);
  out.routeTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationRouteTable(ctx, depth + 1))]);
  out.securityGroup = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSecurityGroup(ctx, depth + 1))]);
  out.securityGroupRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRule(ctx, depth + 1))]);
  out.securityGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSecurityGroup(ctx, depth + 1))]);
  out.sourceVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSourceVpc(ctx, depth + 1))]);
  out.state = "active";
  out.subnetRouteTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSubnetRouteTable(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSubnet(ctx, depth + 1))]);
  out.transitGatewayAttachments = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationTransitGatewayAttachment(ctx, depth + 1))]);
  out.transitGatewayRouteTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute(ctx, depth + 1))]);
  out.transitGatewayRouteTables = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationTransitGatewayRouteTable(ctx, depth + 1))]);
  out.transitGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationTransitGateway(ctx, depth + 1))]);
  out.vpcEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationVpcEndpoint(ctx, depth + 1))]);
  out.vpcPeeringConnections = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationVpcPeeringConnection(ctx, depth + 1))]);
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationVpc(ctx, depth + 1))]);
  out.vpnConnections = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationVpnConnection(ctx, depth + 1))]);
  out.vpnGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationVpnGateway(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationAcl:getNetworkInsightsAnalysisExplanationAcl
export function ec2_getNetworkInsightsAnalysisExplanationAcl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationAclRule:getNetworkInsightsAnalysisExplanationAclRule
export function ec2_getNetworkInsightsAnalysisExplanationAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.egress = false;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationAclRulePortRange:getNetworkInsightsAnalysisExplanationAclRulePortRange
export function ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationAttachedTo:getNetworkInsightsAnalysisExplanationAttachedTo
export function ec2_getNetworkInsightsAnalysisExplanationAttachedTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationClassicLoadBalancerListener:getNetworkInsightsAnalysisExplanationClassicLoadBalancerListener
export function ec2_getNetworkInsightsAnalysisExplanationClassicLoadBalancerListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instancePort = 443;
  out.loadBalancerPort = 443;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationComponent:getNetworkInsightsAnalysisExplanationComponent
export function ec2_getNetworkInsightsAnalysisExplanationComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationCustomerGateway:getNetworkInsightsAnalysisExplanationCustomerGateway
export function ec2_getNetworkInsightsAnalysisExplanationCustomerGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationDestination:getNetworkInsightsAnalysisExplanationDestination
export function ec2_getNetworkInsightsAnalysisExplanationDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationDestinationVpc:getNetworkInsightsAnalysisExplanationDestinationVpc
export function ec2_getNetworkInsightsAnalysisExplanationDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationElasticLoadBalancerListener:getNetworkInsightsAnalysisExplanationElasticLoadBalancerListener
export function ec2_getNetworkInsightsAnalysisExplanationElasticLoadBalancerListener(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationIngressRouteTable:getNetworkInsightsAnalysisExplanationIngressRouteTable
export function ec2_getNetworkInsightsAnalysisExplanationIngressRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationInternetGateway:getNetworkInsightsAnalysisExplanationInternetGateway
export function ec2_getNetworkInsightsAnalysisExplanationInternetGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationLoadBalancerTargetGroup:getNetworkInsightsAnalysisExplanationLoadBalancerTargetGroup
export function ec2_getNetworkInsightsAnalysisExplanationLoadBalancerTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationNatGateway:getNetworkInsightsAnalysisExplanationNatGateway
export function ec2_getNetworkInsightsAnalysisExplanationNatGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationNetworkInterface:getNetworkInsightsAnalysisExplanationNetworkInterface
export function ec2_getNetworkInsightsAnalysisExplanationNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationPortRange:getNetworkInsightsAnalysisExplanationPortRange
export function ec2_getNetworkInsightsAnalysisExplanationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationPrefixList:getNetworkInsightsAnalysisExplanationPrefixList
export function ec2_getNetworkInsightsAnalysisExplanationPrefixList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationRouteTable:getNetworkInsightsAnalysisExplanationRouteTable
export function ec2_getNetworkInsightsAnalysisExplanationRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationRouteTableRoute:getNetworkInsightsAnalysisExplanationRouteTableRoute
export function ec2_getNetworkInsightsAnalysisExplanationRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidr = "";
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyInternetGatewayId = h.id(ctx, "egressOnlyInternetGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.origin = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationSecurityGroup:getNetworkInsightsAnalysisExplanationSecurityGroup
export function ec2_getNetworkInsightsAnalysisExplanationSecurityGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationSecurityGroupRule:getNetworkInsightsAnalysisExplanationSecurityGroupRule
export function ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.direction = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange(ctx, depth + 1))]);
  out.prefixListId = h.id(ctx, "prefixListId");
  out.protocol = "";
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange:getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange
export function ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationSourceVpc:getNetworkInsightsAnalysisExplanationSourceVpc
export function ec2_getNetworkInsightsAnalysisExplanationSourceVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationSubnet:getNetworkInsightsAnalysisExplanationSubnet
export function ec2_getNetworkInsightsAnalysisExplanationSubnet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationSubnetRouteTable:getNetworkInsightsAnalysisExplanationSubnetRouteTable
export function ec2_getNetworkInsightsAnalysisExplanationSubnetRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationTransitGateway:getNetworkInsightsAnalysisExplanationTransitGateway
export function ec2_getNetworkInsightsAnalysisExplanationTransitGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationTransitGatewayAttachment:getNetworkInsightsAnalysisExplanationTransitGatewayAttachment
export function ec2_getNetworkInsightsAnalysisExplanationTransitGatewayAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationTransitGatewayRouteTable:getNetworkInsightsAnalysisExplanationTransitGatewayRouteTable
export function ec2_getNetworkInsightsAnalysisExplanationTransitGatewayRouteTable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute:getNetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute
export function ec2_getNetworkInsightsAnalysisExplanationTransitGatewayRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.destinationCidr = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.routeOrigin = "";
  out.state = "active";
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationVpc:getNetworkInsightsAnalysisExplanationVpc
export function ec2_getNetworkInsightsAnalysisExplanationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationVpcEndpoint:getNetworkInsightsAnalysisExplanationVpcEndpoint
export function ec2_getNetworkInsightsAnalysisExplanationVpcEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationVpcPeeringConnection:getNetworkInsightsAnalysisExplanationVpcPeeringConnection
export function ec2_getNetworkInsightsAnalysisExplanationVpcPeeringConnection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationVpnConnection:getNetworkInsightsAnalysisExplanationVpnConnection
export function ec2_getNetworkInsightsAnalysisExplanationVpnConnection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisExplanationVpnGateway:getNetworkInsightsAnalysisExplanationVpnGateway
export function ec2_getNetworkInsightsAnalysisExplanationVpnGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisFilter:getNetworkInsightsAnalysisFilter
export function ec2_getNetworkInsightsAnalysisFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponent:getNetworkInsightsAnalysisForwardPathComponent
export function ec2_getNetworkInsightsAnalysisForwardPathComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule(ctx, depth + 1))]);
  out.additionalDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail(ctx, depth + 1))]);
  out.attachedTos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentComponent(ctx, depth + 1))]);
  out.destinationVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc(ctx, depth + 1))]);
  out.inboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader(ctx, depth + 1))]);
  out.outboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader(ctx, depth + 1))]);
  out.routeTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute(ctx, depth + 1))]);
  out.securityGroupRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule(ctx, depth + 1))]);
  out.sequenceNumber = 0;
  out.sourceVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet(ctx, depth + 1))]);
  out.transitGatewayRouteTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute(ctx, depth + 1))]);
  out.transitGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway(ctx, depth + 1))]);
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentVpc(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentAclRule:getNetworkInsightsAnalysisForwardPathComponentAclRule
export function ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.egress = false;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange:getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange
export function ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail:getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail
export function ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalDetailType = "";
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent:getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent
export function ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentAttachedTo:getNetworkInsightsAnalysisForwardPathComponentAttachedTo
export function ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentComponent:getNetworkInsightsAnalysisForwardPathComponentComponent
export function ec2_getNetworkInsightsAnalysisForwardPathComponentComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentDestinationVpc:getNetworkInsightsAnalysisForwardPathComponentDestinationVpc
export function ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentInboundHeader:getNetworkInsightsAnalysisForwardPathComponentInboundHeader
export function ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange:getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange
export function ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange:getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange
export function ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentOutboundHeader:getNetworkInsightsAnalysisForwardPathComponentOutboundHeader
export function ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange:getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange
export function ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange:getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange
export function ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute:getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute
export function ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidr = "";
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyInternetGatewayId = h.id(ctx, "egressOnlyInternetGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.origin = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule:getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule
export function ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.direction = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange(ctx, depth + 1))]);
  out.prefixListId = h.id(ctx, "prefixListId");
  out.protocol = "";
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange:getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange
export function ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentSourceVpc:getNetworkInsightsAnalysisForwardPathComponentSourceVpc
export function ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentSubnet:getNetworkInsightsAnalysisForwardPathComponentSubnet
export function ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentTransitGateway:getNetworkInsightsAnalysisForwardPathComponentTransitGateway
export function ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute:getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute
export function ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.destinationCidr = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.routeOrigin = "";
  out.state = "active";
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisForwardPathComponentVpc:getNetworkInsightsAnalysisForwardPathComponentVpc
export function ec2_getNetworkInsightsAnalysisForwardPathComponentVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponent:getNetworkInsightsAnalysisReturnPathComponent
export function ec2_getNetworkInsightsAnalysisReturnPathComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aclRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule(ctx, depth + 1))]);
  out.additionalDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail(ctx, depth + 1))]);
  out.attachedTos = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo(ctx, depth + 1))]);
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentComponent(ctx, depth + 1))]);
  out.destinationVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc(ctx, depth + 1))]);
  out.inboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader(ctx, depth + 1))]);
  out.outboundHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader(ctx, depth + 1))]);
  out.routeTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute(ctx, depth + 1))]);
  out.securityGroupRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule(ctx, depth + 1))]);
  out.sequenceNumber = 0;
  out.sourceVpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc(ctx, depth + 1))]);
  out.subnets = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet(ctx, depth + 1))]);
  out.transitGatewayRouteTableRoutes = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute(ctx, depth + 1))]);
  out.transitGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway(ctx, depth + 1))]);
  out.vpcs = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentVpc(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentAclRule:getNetworkInsightsAnalysisReturnPathComponentAclRule
export function ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.egress = false;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange:getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange
export function ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail:getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail
export function ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalDetailType = "";
  out.components = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent:getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent
export function ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentAttachedTo:getNetworkInsightsAnalysisReturnPathComponentAttachedTo
export function ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentComponent:getNetworkInsightsAnalysisReturnPathComponentComponent
export function ec2_getNetworkInsightsAnalysisReturnPathComponentComponent(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentDestinationVpc:getNetworkInsightsAnalysisReturnPathComponentDestinationVpc
export function ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentInboundHeader:getNetworkInsightsAnalysisReturnPathComponentInboundHeader
export function ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange:getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange
export function ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange:getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange
export function ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentOutboundHeader:getNetworkInsightsAnalysisReturnPathComponentOutboundHeader
export function ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddresses = (depth > 4 ? [] : [""]);
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.sourceAddresses = (depth > 4 ? [] : [""]);
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange:getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange
export function ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange:getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange
export function ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute:getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute
export function ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationCidr = "";
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyInternetGatewayId = h.id(ctx, "egressOnlyInternetGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.origin = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule:getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule
export function ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.direction = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange(ctx, depth + 1))]);
  out.prefixListId = h.id(ctx, "prefixListId");
  out.protocol = "";
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange:getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange
export function ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentSourceVpc:getNetworkInsightsAnalysisReturnPathComponentSourceVpc
export function ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentSubnet:getNetworkInsightsAnalysisReturnPathComponentSubnet
export function ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentTransitGateway:getNetworkInsightsAnalysisReturnPathComponentTransitGateway
export function ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute:getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute
export function ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.destinationCidr = "";
  out.prefixListId = h.id(ctx, "prefixListId");
  out.resourceId = h.id(ctx, "resourceId");
  out.resourceType = "";
  out.routeOrigin = "";
  out.state = "active";
  return out;
}

// aws:ec2/getNetworkInsightsAnalysisReturnPathComponentVpc:getNetworkInsightsAnalysisReturnPathComponentVpc
export function ec2_getNetworkInsightsAnalysisReturnPathComponentVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:ec2/getNetworkInsightsPathFilter:getNetworkInsightsPathFilter
export function ec2_getNetworkInsightsPathFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNetworkInsightsPathFilterAtDestination:getNetworkInsightsPathFilterAtDestination
export function ec2_getNetworkInsightsPathFilterAtDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddress = "";
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilterAtDestinationDestinationPortRange(ctx, depth + 1))]);
  out.sourceAddress = "";
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilterAtDestinationSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsPathFilterAtDestinationDestinationPortRange:getNetworkInsightsPathFilterAtDestinationDestinationPortRange
export function ec2_getNetworkInsightsPathFilterAtDestinationDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/getNetworkInsightsPathFilterAtDestinationSourcePortRange:getNetworkInsightsPathFilterAtDestinationSourcePortRange
export function ec2_getNetworkInsightsPathFilterAtDestinationSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/getNetworkInsightsPathFilterAtSource:getNetworkInsightsPathFilterAtSource
export function ec2_getNetworkInsightsPathFilterAtSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationAddress = "";
  out.destinationPortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilterAtSourceDestinationPortRange(ctx, depth + 1))]);
  out.sourceAddress = "";
  out.sourcePortRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getNetworkInsightsPathFilterAtSourceSourcePortRange(ctx, depth + 1))]);
  return out;
}

// aws:ec2/getNetworkInsightsPathFilterAtSourceDestinationPortRange:getNetworkInsightsPathFilterAtSourceDestinationPortRange
export function ec2_getNetworkInsightsPathFilterAtSourceDestinationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/getNetworkInsightsPathFilterAtSourceSourcePortRange:getNetworkInsightsPathFilterAtSourceSourcePortRange
export function ec2_getNetworkInsightsPathFilterAtSourceSourcePortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:ec2/getNetworkInterfaceAssociation:getNetworkInterfaceAssociation
export function ec2_getNetworkInterfaceAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocationId = h.id(ctx, "allocationId");
  out.associationId = h.id(ctx, "associationId");
  out.carrierIp = "";
  out.customerOwnedIp = "";
  out.ipOwnerId = h.id(ctx, "ipOwnerId");
  out.publicDnsName = "";
  out.publicIp = "54.0.0.10";
  return out;
}

// aws:ec2/getNetworkInterfaceAttachment:getNetworkInterfaceAttachment
export function ec2_getNetworkInterfaceAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentId = h.id(ctx, "attachmentId");
  out.deviceIndex = 0;
  out.instanceId = h.id(ctx, "instanceId");
  out.instanceOwnerId = h.id(ctx, "instanceOwnerId");
  return out;
}

// aws:ec2/getNetworkInterfaceFilter:getNetworkInterfaceFilter
export function ec2_getNetworkInterfaceFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getNetworkInterfacesFilter:getNetworkInterfacesFilter
export function ec2_getNetworkInterfacesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getPrefixListFilter:getPrefixListFilter
export function ec2_getPrefixListFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getPublicIpv4PoolPoolAddressRange:getPublicIpv4PoolPoolAddressRange
export function ec2_getPublicIpv4PoolPoolAddressRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressCount = 1;
  out.availableAddressCount = 1;
  out.firstAddress = "";
  out.lastAddress = "";
  return out;
}

// aws:ec2/getPublicIpv4PoolsFilter:getPublicIpv4PoolsFilter
export function ec2_getPublicIpv4PoolsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getRouteTableAssociation:getRouteTableAssociation
export function ec2_getRouteTableAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gatewayId = h.id(ctx, "gatewayId");
  out.main = false;
  out.routeTableAssociationId = h.id(ctx, "routeTableAssociationId");
  out.routeTableId = h.id(ctx, "routeTableId");
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:ec2/getRouteTableFilter:getRouteTableFilter
export function ec2_getRouteTableFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getRouteTableRoute:getRouteTableRoute
export function ec2_getRouteTableRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.carrierGatewayId = h.id(ctx, "carrierGatewayId");
  out.cidrBlock = "10.0.0.0/16";
  out.coreNetworkArn = h.arn(ctx);
  out.destinationPrefixListId = h.id(ctx, "destinationPrefixListId");
  out.egressOnlyGatewayId = h.id(ctx, "egressOnlyGatewayId");
  out.gatewayId = h.id(ctx, "gatewayId");
  out.instanceId = h.id(ctx, "instanceId");
  out.ipv6CidrBlock = "";
  out.localGatewayId = h.id(ctx, "localGatewayId");
  out.natGatewayId = h.id(ctx, "natGatewayId");
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcPeeringConnectionId = h.id(ctx, "vpcPeeringConnectionId");
  return out;
}

// aws:ec2/getRouteTablesFilter:getRouteTablesFilter
export function ec2_getRouteTablesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getSecurityGroupFilter:getSecurityGroupFilter
export function ec2_getSecurityGroupFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getSecurityGroupsFilter:getSecurityGroupsFilter
export function ec2_getSecurityGroupsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getSpotPriceFilter:getSpotPriceFilter
export function ec2_getSpotPriceFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getSubnetFilter:getSubnetFilter
export function ec2_getSubnetFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getSubnetsFilter:getSubnetsFilter
export function ec2_getSubnetsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getTransitGatewayRouteTablesFilter:getTransitGatewayRouteTablesFilter
export function ec2_getTransitGatewayRouteTablesFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcCidrBlockAssociation:getVpcCidrBlockAssociation
export function ec2_getVpcCidrBlockAssociation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationId = h.id(ctx, "associationId");
  out.cidrBlock = "10.0.0.0/16";
  out.state = "active";
  return out;
}

// aws:ec2/getVpcDhcpOptionsFilter:getVpcDhcpOptionsFilter
export function ec2_getVpcDhcpOptionsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcEndpointDnsEntry:getVpcEndpointDnsEntry
export function ec2_getVpcEndpointDnsEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:ec2/getVpcEndpointDnsOption:getVpcEndpointDnsOption
export function ec2_getVpcEndpointDnsOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsRecordIpType = "";
  out.privateDnsOnlyForInboundResolverEndpoint = false;
  return out;
}

// aws:ec2/getVpcEndpointFilter:getVpcEndpointFilter
export function ec2_getVpcEndpointFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcEndpointServiceFilter:getVpcEndpointServiceFilter
export function ec2_getVpcEndpointServiceFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcFilter:getVpcFilter
export function ec2_getVpcFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIamPoolCidrsFilter:getVpcIamPoolCidrsFilter
export function ec2_getVpcIamPoolCidrsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIamPoolCidrsIpamPoolCidr:getVpcIamPoolCidrsIpamPoolCidr
export function ec2_getVpcIamPoolCidrsIpamPoolCidr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.state = "active";
  return out;
}

// aws:ec2/getVpcIamPoolFilter:getVpcIamPoolFilter
export function ec2_getVpcIamPoolFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIamPoolsFilter:getVpcIamPoolsFilter
export function ec2_getVpcIamPoolsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIamPoolsIpamPool:getVpcIamPoolsIpamPool
export function ec2_getVpcIamPoolsIpamPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = "";
  out.allocationDefaultNetmaskLength = 0;
  out.allocationMaxNetmaskLength = 0;
  out.allocationMinNetmaskLength = 0;
  out.allocationResourceTags = {};
  out.arn = h.arn(ctx);
  out.autoImport = false;
  out.awsService = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.ipamScopeId = h.id(ctx, "ipamScopeId");
  out.ipamScopeType = "";
  out.locale = "";
  out.poolDepth = 0;
  out.publiclyAdvertisable = false;
  out.sourceIpamPoolId = h.id(ctx, "sourceIpamPoolId");
  out.state = "active";
  out.tags = {};
  return out;
}

// aws:ec2/getVpcIpamOperatingRegion:getVpcIpamOperatingRegion
export function ec2_getVpcIpamOperatingRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regionName = "";
  return out;
}

// aws:ec2/getVpcIpamPoolCidrsFilter:getVpcIpamPoolCidrsFilter
export function ec2_getVpcIpamPoolCidrsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIpamPoolCidrsIpamPoolCidr:getVpcIpamPoolCidrsIpamPoolCidr
export function ec2_getVpcIpamPoolCidrsIpamPoolCidr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.state = "active";
  return out;
}

// aws:ec2/getVpcIpamPoolFilter:getVpcIpamPoolFilter
export function ec2_getVpcIpamPoolFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIpamPoolsFilter:getVpcIpamPoolsFilter
export function ec2_getVpcIpamPoolsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIpamPoolsIpamPool:getVpcIpamPoolsIpamPool
export function ec2_getVpcIpamPoolsIpamPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFamily = "";
  out.allocationDefaultNetmaskLength = 0;
  out.allocationMaxNetmaskLength = 0;
  out.allocationMinNetmaskLength = 0;
  out.allocationResourceTags = {};
  out.arn = h.arn(ctx);
  out.autoImport = false;
  out.awsService = "";
  out.description = "";
  out.id = h.id(ctx, "id");
  out.ipamScopeId = h.id(ctx, "ipamScopeId");
  out.ipamScopeType = "";
  out.locale = "";
  out.poolDepth = 0;
  out.publiclyAdvertisable = false;
  out.sourceIpamPoolId = h.id(ctx, "sourceIpamPoolId");
  out.state = "active";
  out.tags = {};
  return out;
}

// aws:ec2/getVpcIpamsFilter:getVpcIpamsFilter
export function ec2_getVpcIpamsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcIpamsIpam:getVpcIpamsIpam
export function ec2_getVpcIpamsIpam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultResourceDiscoveryAssociationId = h.id(ctx, "defaultResourceDiscoveryAssociationId");
  out.defaultResourceDiscoveryId = h.id(ctx, "defaultResourceDiscoveryId");
  out.description = "";
  out.enablePrivateGua = true;
  out.id = h.id(ctx, "id");
  out.ipamRegion = "";
  out.operatingRegions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ec2.ec2_getVpcIpamsIpamOperatingRegion(ctx, depth + 1))]);
  out.ownerId = ctx.accountId;
  out.privateDefaultScopeId = h.id(ctx, "privateDefaultScopeId");
  out.publicDefaultScopeId = h.id(ctx, "publicDefaultScopeId");
  out.resourceDiscoveryAssociationCount = 1;
  out.scopeCount = 1;
  out.state = "active";
  out.stateMessage = "";
  out.tier = "";
  return out;
}

// aws:ec2/getVpcIpamsIpamOperatingRegion:getVpcIpamsIpamOperatingRegion
export function ec2_getVpcIpamsIpamOperatingRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regionName = "";
  return out;
}

// aws:ec2/getVpcPeeringConnectionCidrBlockSet:getVpcPeeringConnectionCidrBlockSet
export function ec2_getVpcPeeringConnectionCidrBlockSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  return out;
}

// aws:ec2/getVpcPeeringConnectionFilter:getVpcPeeringConnectionFilter
export function ec2_getVpcPeeringConnectionFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcPeeringConnectionIpv6CidrBlockSet:getVpcPeeringConnectionIpv6CidrBlockSet
export function ec2_getVpcPeeringConnectionIpv6CidrBlockSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv6CidrBlock = "";
  return out;
}

// aws:ec2/getVpcPeeringConnectionPeerCidrBlockSet:getVpcPeeringConnectionPeerCidrBlockSet
export function ec2_getVpcPeeringConnectionPeerCidrBlockSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  return out;
}

// aws:ec2/getVpcPeeringConnectionPeerIpv6CidrBlockSet:getVpcPeeringConnectionPeerIpv6CidrBlockSet
export function ec2_getVpcPeeringConnectionPeerIpv6CidrBlockSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipv6CidrBlock = "";
  return out;
}

// aws:ec2/getVpcPeeringConnectionsFilter:getVpcPeeringConnectionsFilter
export function ec2_getVpcPeeringConnectionsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpcsFilter:getVpcsFilter
export function ec2_getVpcsFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ec2/getVpnGatewayFilter:getVpnGatewayFilter
export function ec2_getVpnGatewayFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}
