// GENERATED FILE — do not edit.
// Service: redshift   (14 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshift from "./redshift.js";

// aws:redshift/ClusterClusterNode:ClusterClusterNode
export function redshift_ClusterClusterNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nodeRole = "";
  out.privateIpAddress = "10.0.0.10";
  out.publicIpAddress = "54.0.0.10";
  return out;
}

// aws:redshift/ClusterLogging:ClusterLogging
export function redshift_ClusterLogging(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.enable = true;
  out.logDestinationType = "";
  out.logExports = (depth > 4 ? [] : [""]);
  out.s3KeyPrefix = "";
  return out;
}

// aws:redshift/ClusterSnapshotCopy:ClusterSnapshotCopy
export function redshift_ClusterSnapshotCopy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationRegion = "";
  out.grantName = "";
  out.retentionPeriod = 0;
  return out;
}

// aws:redshift/EndpointAccessVpcEndpoint:EndpointAccessVpcEndpoint
export function redshift_EndpointAccessVpcEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaces = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_EndpointAccessVpcEndpointNetworkInterface(ctx, depth + 1))]);
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:redshift/EndpointAccessVpcEndpointNetworkInterface:EndpointAccessVpcEndpointNetworkInterface
export function redshift_EndpointAccessVpcEndpointNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.privateIpAddress = "10.0.0.10";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:redshift/IntegrationTimeouts:IntegrationTimeouts
export function redshift_IntegrationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:redshift/ParameterGroupParameter:ParameterGroupParameter
export function redshift_ParameterGroupParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:redshift/ScheduledActionTargetAction:ScheduledActionTargetAction
export function redshift_ScheduledActionTargetAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pauseCluster = (depth > 4 ? {} : T_redshift.redshift_ScheduledActionTargetActionPauseCluster(ctx, depth + 1));
  out.resizeCluster = (depth > 4 ? {} : T_redshift.redshift_ScheduledActionTargetActionResizeCluster(ctx, depth + 1));
  out.resumeCluster = (depth > 4 ? {} : T_redshift.redshift_ScheduledActionTargetActionResumeCluster(ctx, depth + 1));
  return out;
}

// aws:redshift/ScheduledActionTargetActionPauseCluster:ScheduledActionTargetActionPauseCluster
export function redshift_ScheduledActionTargetActionPauseCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterIdentifier = "";
  return out;
}

// aws:redshift/ScheduledActionTargetActionResizeCluster:ScheduledActionTargetActionResizeCluster
export function redshift_ScheduledActionTargetActionResizeCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classic = false;
  out.clusterIdentifier = "";
  out.clusterType = "";
  out.nodeType = "";
  out.numberOfNodes = 0;
  return out;
}

// aws:redshift/ScheduledActionTargetActionResumeCluster:ScheduledActionTargetActionResumeCluster
export function redshift_ScheduledActionTargetActionResumeCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterIdentifier = "";
  return out;
}

// aws:redshift/getClusterClusterNode:getClusterClusterNode
export function redshift_getClusterClusterNode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nodeRole = "";
  out.privateIpAddress = "10.0.0.10";
  out.publicIpAddress = "54.0.0.10";
  return out;
}

// aws:redshift/getDataSharesDataShare:getDataSharesDataShare
export function redshift_getDataSharesDataShare(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataShareArn = h.arn(ctx);
  out.managedBy = "";
  out.producerArn = h.arn(ctx);
  return out;
}

// aws:redshift/getProducerDataSharesDataShare:getProducerDataSharesDataShare
export function redshift_getProducerDataSharesDataShare(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataShareArn = h.arn(ctx);
  out.managedBy = "";
  out.producerArn = h.arn(ctx);
  return out;
}
