// GENERATED FILE — do not edit.
// Service: emr   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emr from "../types/emr.js";

// aws:emr/blockPublicAccessConfiguration:BlockPublicAccessConfiguration
export function BlockPublicAccessConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockPublicSecurityGroupRules = (i.blockPublicSecurityGroupRules !== undefined ? i.blockPublicSecurityGroupRules : false);
  out.permittedPublicSecurityGroupRuleRanges = (i.permittedPublicSecurityGroupRuleRanges !== undefined ? i.permittedPublicSecurityGroupRuleRanges : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange(ctx, depth + 1))]));
  return out;
}

// aws:emr/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalInfo = (i.additionalInfo !== undefined ? i.additionalInfo : "");
  out.applications = (i.applications !== undefined ? i.applications : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.autoTerminationPolicy = (i.autoTerminationPolicy !== undefined ? i.autoTerminationPolicy : (depth > 4 ? {} : T_emr.emr_ClusterAutoTerminationPolicy(ctx, depth + 1)));
  out.autoscalingRole = (i.autoscalingRole !== undefined ? i.autoscalingRole : "");
  out.bootstrapActions = (i.bootstrapActions !== undefined ? i.bootstrapActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterBootstrapAction(ctx, depth + 1))]));
  out.clusterState = "";
  out.configurations = (i.configurations !== undefined ? i.configurations : "");
  out.configurationsJson = (i.configurationsJson !== undefined ? i.configurationsJson : "");
  out.coreInstanceFleet = (i.coreInstanceFleet !== undefined ? i.coreInstanceFleet : (depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceFleet(ctx, depth + 1)));
  out.coreInstanceGroup = (i.coreInstanceGroup !== undefined ? i.coreInstanceGroup : (depth > 4 ? {} : T_emr.emr_ClusterCoreInstanceGroup(ctx, depth + 1)));
  out.customAmiId = (i.customAmiId !== undefined ? i.customAmiId : h.id(ctx, "customAmiId"));
  out.ebsRootVolumeSize = (i.ebsRootVolumeSize !== undefined ? i.ebsRootVolumeSize : 8);
  out.ec2Attributes = (i.ec2Attributes !== undefined ? i.ec2Attributes : (depth > 4 ? {} : T_emr.emr_ClusterEc2Attributes(ctx, depth + 1)));
  out.keepJobFlowAliveWhenNoSteps = (i.keepJobFlowAliveWhenNoSteps !== undefined ? i.keepJobFlowAliveWhenNoSteps : false);
  out.kerberosAttributes = (i.kerberosAttributes !== undefined ? i.kerberosAttributes : (depth > 4 ? {} : T_emr.emr_ClusterKerberosAttributes(ctx, depth + 1)));
  out.listStepsStates = (i.listStepsStates !== undefined ? i.listStepsStates : (depth > 4 ? [] : [""]));
  out.logEncryptionKmsKeyId = (i.logEncryptionKmsKeyId !== undefined ? i.logEncryptionKmsKeyId : h.id(ctx, "logEncryptionKmsKeyId"));
  out.logUri = (i.logUri !== undefined ? i.logUri : h.endpoint(ctx, "logUri"));
  out.masterInstanceFleet = (i.masterInstanceFleet !== undefined ? i.masterInstanceFleet : (depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceFleet(ctx, depth + 1)));
  out.masterInstanceGroup = (i.masterInstanceGroup !== undefined ? i.masterInstanceGroup : (depth > 4 ? {} : T_emr.emr_ClusterMasterInstanceGroup(ctx, depth + 1)));
  out.masterPublicDns = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.placementGroupConfigs = (i.placementGroupConfigs !== undefined ? i.placementGroupConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterPlacementGroupConfig(ctx, depth + 1))]));
  out.releaseLabel = (i.releaseLabel !== undefined ? i.releaseLabel : "");
  out.scaleDownBehavior = (i.scaleDownBehavior !== undefined ? i.scaleDownBehavior : "");
  out.securityConfiguration = (i.securityConfiguration !== undefined ? i.securityConfiguration : "");
  out.serviceRole = (i.serviceRole !== undefined ? i.serviceRole : "");
  out.stepConcurrencyLevel = (i.stepConcurrencyLevel !== undefined ? i.stepConcurrencyLevel : 0);
  out.steps = (i.steps !== undefined ? i.steps : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ClusterStep(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.terminationProtection = (i.terminationProtection !== undefined ? i.terminationProtection : false);
  out.unhealthyNodeReplacement = (i.unhealthyNodeReplacement !== undefined ? i.unhealthyNodeReplacement : false);
  out.visibleToAllUsers = (i.visibleToAllUsers !== undefined ? i.visibleToAllUsers : false);
  return out;
}

// aws:emr/instanceFleet:InstanceFleet
export function InstanceFleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.instanceTypeConfigs = (i.instanceTypeConfigs !== undefined ? i.instanceTypeConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_InstanceFleetInstanceTypeConfig(ctx, depth + 1))]));
  out.launchSpecifications = (i.launchSpecifications !== undefined ? i.launchSpecifications : (depth > 4 ? {} : T_emr.emr_InstanceFleetLaunchSpecifications(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.provisionedOnDemandCapacity = 0;
  out.provisionedSpotCapacity = 0;
  out.targetOnDemandCapacity = (i.targetOnDemandCapacity !== undefined ? i.targetOnDemandCapacity : 0);
  out.targetSpotCapacity = (i.targetSpotCapacity !== undefined ? i.targetSpotCapacity : 0);
  return out;
}

// aws:emr/instanceGroup:InstanceGroup
export function InstanceGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingPolicy = (i.autoscalingPolicy !== undefined ? i.autoscalingPolicy : "");
  out.bidPrice = (i.bidPrice !== undefined ? i.bidPrice : "");
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.configurationsJson = (i.configurationsJson !== undefined ? i.configurationsJson : "");
  out.ebsConfigs = (i.ebsConfigs !== undefined ? i.ebsConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_InstanceGroupEbsConfig(ctx, depth + 1))]));
  out.ebsOptimized = (i.ebsOptimized !== undefined ? i.ebsOptimized : false);
  out.instanceCount = (i.instanceCount !== undefined ? i.instanceCount : 1);
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.runningInstanceCount = 1;
  out.status = "active";
  return out;
}

// aws:emr/managedScalingPolicy:ManagedScalingPolicy
export function ManagedScalingPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.computeLimits = (i.computeLimits !== undefined ? i.computeLimits : (depth > 4 ? [] : [(depth > 4 ? {} : T_emr.emr_ManagedScalingPolicyComputeLimit(ctx, depth + 1))]));
  return out;
}

// aws:emr/securityConfiguration:SecurityConfiguration
export function SecurityConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = (i.configuration !== undefined ? i.configuration : "");
  out.creationDate = h.timestamp();
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  return out;
}

// aws:emr/studio:Studio
export function Studio(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authMode = (i.authMode !== undefined ? i.authMode : "");
  out.defaultS3Location = (i.defaultS3Location !== undefined ? i.defaultS3Location : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.encryptionKeyArn = (i.encryptionKeyArn !== undefined ? i.encryptionKeyArn : h.arn(ctx));
  out.engineSecurityGroupId = (i.engineSecurityGroupId !== undefined ? i.engineSecurityGroupId : h.id(ctx, "engineSecurityGroupId"));
  out.idpAuthUrl = (i.idpAuthUrl !== undefined ? i.idpAuthUrl : h.endpoint(ctx, "idpAuthUrl"));
  out.idpRelayStateParameterName = (i.idpRelayStateParameterName !== undefined ? i.idpRelayStateParameterName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serviceRole = (i.serviceRole !== undefined ? i.serviceRole : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  out.userRole = (i.userRole !== undefined ? i.userRole : "");
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.workspaceSecurityGroupId = (i.workspaceSecurityGroupId !== undefined ? i.workspaceSecurityGroupId : h.id(ctx, "workspaceSecurityGroupId"));
  return out;
}

// aws:emr/studioSessionMapping:StudioSessionMapping
export function StudioSessionMapping(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identityId = (i.identityId !== undefined ? i.identityId : h.id(ctx, "identityId"));
  out.identityName = (i.identityName !== undefined ? i.identityName : "");
  out.identityType = (i.identityType !== undefined ? i.identityType : "");
  out.sessionPolicyArn = (i.sessionPolicyArn !== undefined ? i.sessionPolicyArn : h.arn(ctx));
  out.studioId = (i.studioId !== undefined ? i.studioId : h.id(ctx, "studioId"));
  return out;
}
