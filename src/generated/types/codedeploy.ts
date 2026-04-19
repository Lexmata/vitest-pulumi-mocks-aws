// GENERATED FILE — do not edit.
// Service: codedeploy   (26 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codedeploy from "./codedeploy.js";

// aws:codedeploy/DeploymentConfigMinimumHealthyHosts:DeploymentConfigMinimumHealthyHosts
export function codedeploy_DeploymentConfigMinimumHealthyHosts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:codedeploy/DeploymentConfigTrafficRoutingConfig:DeploymentConfigTrafficRoutingConfig
export function codedeploy_DeploymentConfigTrafficRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.timeBasedCanary = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary(ctx, depth + 1));
  out.timeBasedLinear = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:codedeploy/DeploymentConfigTrafficRoutingConfigTimeBasedCanary:DeploymentConfigTrafficRoutingConfigTimeBasedCanary
export function codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedCanary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interval = 0;
  out.percentage = 0;
  return out;
}

// aws:codedeploy/DeploymentConfigTrafficRoutingConfigTimeBasedLinear:DeploymentConfigTrafficRoutingConfigTimeBasedLinear
export function codedeploy_DeploymentConfigTrafficRoutingConfigTimeBasedLinear(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.interval = 0;
  out.percentage = 0;
  return out;
}

// aws:codedeploy/DeploymentConfigZonalConfig:DeploymentConfigZonalConfig
export function codedeploy_DeploymentConfigZonalConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firstZoneMonitorDurationInSeconds = 0;
  out.minimumHealthyHostsPerZone = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentConfigZonalConfigMinimumHealthyHostsPerZone(ctx, depth + 1));
  out.monitorDurationInSeconds = 0;
  return out;
}

// aws:codedeploy/DeploymentConfigZonalConfigMinimumHealthyHostsPerZone:DeploymentConfigZonalConfigMinimumHealthyHostsPerZone
export function codedeploy_DeploymentConfigZonalConfigMinimumHealthyHostsPerZone(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = 0;
  return out;
}

// aws:codedeploy/DeploymentGroupAlarmConfiguration:DeploymentGroupAlarmConfiguration
export function codedeploy_DeploymentGroupAlarmConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarms = (depth > 4 ? [] : [""]);
  out.enabled = true;
  out.ignorePollAlarmFailure = false;
  return out;
}

// aws:codedeploy/DeploymentGroupAutoRollbackConfiguration:DeploymentGroupAutoRollbackConfiguration
export function codedeploy_DeploymentGroupAutoRollbackConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.events = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codedeploy/DeploymentGroupBlueGreenDeploymentConfig:DeploymentGroupBlueGreenDeploymentConfig
export function codedeploy_DeploymentGroupBlueGreenDeploymentConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deploymentReadyOption = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption(ctx, depth + 1));
  out.greenFleetProvisioningOption = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption(ctx, depth + 1));
  out.terminateBlueInstancesOnDeploymentSuccess = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess(ctx, depth + 1));
  return out;
}

// aws:codedeploy/DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption:DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption
export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionOnTimeout = "";
  out.waitTimeInMinutes = 0;
  return out;
}

// aws:codedeploy/DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption:DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption
export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  return out;
}

// aws:codedeploy/DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess:DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess
export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.terminationWaitTimeInMinutes = 0;
  return out;
}

// aws:codedeploy/DeploymentGroupDeploymentStyle:DeploymentGroupDeploymentStyle
export function codedeploy_DeploymentGroupDeploymentStyle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deploymentOption = "";
  out.deploymentType = "";
  return out;
}

// aws:codedeploy/DeploymentGroupEc2TagFilter:DeploymentGroupEc2TagFilter
export function codedeploy_DeploymentGroupEc2TagFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:codedeploy/DeploymentGroupEc2TagSet:DeploymentGroupEc2TagSet
export function codedeploy_DeploymentGroupEc2TagSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ec2TagFilters = (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupEc2TagSetEc2TagFilter(ctx, depth + 1))]);
  return out;
}

// aws:codedeploy/DeploymentGroupEc2TagSetEc2TagFilter:DeploymentGroupEc2TagSetEc2TagFilter
export function codedeploy_DeploymentGroupEc2TagSetEc2TagFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:codedeploy/DeploymentGroupEcsService:DeploymentGroupEcsService
export function codedeploy_DeploymentGroupEcsService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterName = "";
  out.serviceName = "";
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfo:DeploymentGroupLoadBalancerInfo
export function codedeploy_DeploymentGroupLoadBalancerInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.elbInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfoElbInfo(ctx, depth + 1))]);
  out.targetGroupInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo(ctx, depth + 1))]);
  out.targetGroupPairInfo = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo(ctx, depth + 1));
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfoElbInfo:DeploymentGroupLoadBalancerInfoElbInfo
export function codedeploy_DeploymentGroupLoadBalancerInfoElbInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfoTargetGroupInfo:DeploymentGroupLoadBalancerInfoTargetGroupInfo
export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfoTargetGroupPairInfo:DeploymentGroupLoadBalancerInfoTargetGroupPairInfo
export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prodTrafficRoute = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute(ctx, depth + 1));
  out.targetGroups = (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup(ctx, depth + 1))]);
  out.testTrafficRoute = (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute(ctx, depth + 1));
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute:DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute
export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.listenerArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup:DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup
export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:codedeploy/DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute:DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute
export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.listenerArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codedeploy/DeploymentGroupOnPremisesInstanceTagFilter:DeploymentGroupOnPremisesInstanceTagFilter
export function codedeploy_DeploymentGroupOnPremisesInstanceTagFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.type = "";
  out.value = "";
  return out;
}

// aws:codedeploy/DeploymentGroupTriggerConfiguration:DeploymentGroupTriggerConfiguration
export function codedeploy_DeploymentGroupTriggerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.triggerEvents = (depth > 4 ? [] : [""]);
  out.triggerName = "";
  out.triggerTargetArn = h.arn(ctx);
  return out;
}
