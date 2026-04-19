// GENERATED FILE — do not edit.
// Service: codedeploy   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codedeploy from "../types/codedeploy.js";

// aws:codedeploy/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = h.id(ctx, "applicationId");
  out.arn = h.arn(ctx);
  out.computePlatform = (i.computePlatform !== undefined ? i.computePlatform : "");
  out.githubAccountName = "";
  out.linkedToGithub = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:codedeploy/deploymentConfig:DeploymentConfig
export function DeploymentConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computePlatform = (i.computePlatform !== undefined ? i.computePlatform : "");
  out.deploymentConfigId = h.id(ctx, "deploymentConfigId");
  out.deploymentConfigName = (i.deploymentConfigName !== undefined ? i.deploymentConfigName : "");
  out.minimumHealthyHosts = (i.minimumHealthyHosts !== undefined ? i.minimumHealthyHosts : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentConfigMinimumHealthyHosts(ctx, depth + 1)));
  out.trafficRoutingConfig = (i.trafficRoutingConfig !== undefined ? i.trafficRoutingConfig : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentConfigTrafficRoutingConfig(ctx, depth + 1)));
  out.zonalConfig = (i.zonalConfig !== undefined ? i.zonalConfig : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentConfigZonalConfig(ctx, depth + 1)));
  return out;
}

// aws:codedeploy/deploymentGroup:DeploymentGroup
export function DeploymentGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alarmConfiguration = (i.alarmConfiguration !== undefined ? i.alarmConfiguration : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupAlarmConfiguration(ctx, depth + 1)));
  out.appName = (i.appName !== undefined ? i.appName : "");
  out.arn = h.arn(ctx);
  out.autoRollbackConfiguration = (i.autoRollbackConfiguration !== undefined ? i.autoRollbackConfiguration : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupAutoRollbackConfiguration(ctx, depth + 1)));
  out.autoscalingGroups = (i.autoscalingGroups !== undefined ? i.autoscalingGroups : (depth > 4 ? [] : [""]));
  out.blueGreenDeploymentConfig = (i.blueGreenDeploymentConfig !== undefined ? i.blueGreenDeploymentConfig : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupBlueGreenDeploymentConfig(ctx, depth + 1)));
  out.computePlatform = "";
  out.deploymentConfigName = (i.deploymentConfigName !== undefined ? i.deploymentConfigName : "");
  out.deploymentGroupId = h.id(ctx, "deploymentGroupId");
  out.deploymentGroupName = (i.deploymentGroupName !== undefined ? i.deploymentGroupName : "");
  out.deploymentStyle = (i.deploymentStyle !== undefined ? i.deploymentStyle : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupDeploymentStyle(ctx, depth + 1)));
  out.ec2TagFilters = (i.ec2TagFilters !== undefined ? i.ec2TagFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupEc2TagFilter(ctx, depth + 1))]));
  out.ec2TagSets = (i.ec2TagSets !== undefined ? i.ec2TagSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupEc2TagSet(ctx, depth + 1))]));
  out.ecsService = (i.ecsService !== undefined ? i.ecsService : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupEcsService(ctx, depth + 1)));
  out.loadBalancerInfo = (i.loadBalancerInfo !== undefined ? i.loadBalancerInfo : (depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupLoadBalancerInfo(ctx, depth + 1)));
  out.onPremisesInstanceTagFilters = (i.onPremisesInstanceTagFilters !== undefined ? i.onPremisesInstanceTagFilters : (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupOnPremisesInstanceTagFilter(ctx, depth + 1))]));
  out.outdatedInstancesStrategy = (i.outdatedInstancesStrategy !== undefined ? i.outdatedInstancesStrategy : "");
  out.serviceRoleArn = (i.serviceRoleArn !== undefined ? i.serviceRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.terminationHookEnabled = (i.terminationHookEnabled !== undefined ? i.terminationHookEnabled : false);
  out.triggerConfigurations = (i.triggerConfigurations !== undefined ? i.triggerConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_codedeploy.codedeploy_DeploymentGroupTriggerConfiguration(ctx, depth + 1))]));
  return out;
}
