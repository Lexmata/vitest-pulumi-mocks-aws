// GENERATED FILE — do not edit.
// Service: finspace   (18 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_finspace from "./finspace.js";

// aws:finspace/KxClusterAutoScalingConfiguration:KxClusterAutoScalingConfiguration
export function finspace_KxClusterAutoScalingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoScalingMetric = "";
  out.maxNodeCount = 1;
  out.metricTarget = 0;
  out.minNodeCount = 1;
  out.scaleInCooldownSeconds = 0;
  out.scaleOutCooldownSeconds = 0;
  return out;
}

// aws:finspace/KxClusterCacheStorageConfiguration:KxClusterCacheStorageConfiguration
export function finspace_KxClusterCacheStorageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  out.type = "";
  return out;
}

// aws:finspace/KxClusterCapacityConfiguration:KxClusterCapacityConfiguration
export function finspace_KxClusterCapacityConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nodeCount = 1;
  out.nodeType = "";
  return out;
}

// aws:finspace/KxClusterCode:KxClusterCode
export function finspace_KxClusterCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Bucket = "";
  out.s3Key = "";
  out.s3ObjectVersion = "";
  return out;
}

// aws:finspace/KxClusterDatabase:KxClusterDatabase
export function finspace_KxClusterDatabase(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxClusterDatabaseCacheConfiguration(ctx, depth + 1))]);
  out.changesetId = h.id(ctx, "changesetId");
  out.databaseName = "";
  out.dataviewName = "";
  return out;
}

// aws:finspace/KxClusterDatabaseCacheConfiguration:KxClusterDatabaseCacheConfiguration
export function finspace_KxClusterDatabaseCacheConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cacheType = "";
  out.dbPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:finspace/KxClusterSavedownStorageConfiguration:KxClusterSavedownStorageConfiguration
export function finspace_KxClusterSavedownStorageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  out.type = "";
  out.volumeName = "";
  return out;
}

// aws:finspace/KxClusterScalingGroupConfiguration:KxClusterScalingGroupConfiguration
export function finspace_KxClusterScalingGroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpu = 0;
  out.memoryLimit = 0;
  out.memoryReservation = 0;
  out.nodeCount = 1;
  out.scalingGroupName = "";
  return out;
}

// aws:finspace/KxClusterTickerplantLogConfiguration:KxClusterTickerplantLogConfiguration
export function finspace_KxClusterTickerplantLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tickerplantLogVolumes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:finspace/KxClusterVpcConfiguration:KxClusterVpcConfiguration
export function finspace_KxClusterVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddressType = "";
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:finspace/KxDataviewSegmentConfiguration:KxDataviewSegmentConfiguration
export function finspace_KxDataviewSegmentConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dbPaths = (depth > 4 ? [] : [""]);
  out.onDemand = false;
  out.volumeName = "";
  return out;
}

// aws:finspace/KxEnvironmentCustomDnsConfiguration:KxEnvironmentCustomDnsConfiguration
export function finspace_KxEnvironmentCustomDnsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customDnsServerIp = "";
  out.customDnsServerName = "";
  return out;
}

// aws:finspace/KxEnvironmentTransitGatewayConfiguration:KxEnvironmentTransitGatewayConfiguration
export function finspace_KxEnvironmentTransitGatewayConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachmentNetworkAclConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_finspace.finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration(ctx, depth + 1))]);
  out.routableCidrSpace = "";
  out.transitGatewayId = h.id(ctx, "transitGatewayId");
  return out;
}

// aws:finspace/KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration:KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration
export function finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  out.icmpTypeCode = (depth > 4 ? {} : T_finspace.finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode(ctx, depth + 1));
  out.portRange = (depth > 4 ? {} : T_finspace.finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange(ctx, depth + 1));
  out.protocol = "";
  out.ruleAction = "";
  out.ruleNumber = 0;
  return out;
}

// aws:finspace/KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode:KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
export function finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = 0;
  out.type = 0;
  return out;
}

// aws:finspace/KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange:KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
export function finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:finspace/KxVolumeAttachedCluster:KxVolumeAttachedCluster
export function finspace_KxVolumeAttachedCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterName = "";
  out.clusterStatus = "";
  out.clusterType = "";
  return out;
}

// aws:finspace/KxVolumeNas1Configuration:KxVolumeNas1Configuration
export function finspace_KxVolumeNas1Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.size = 8;
  out.type = "";
  return out;
}
