// GENERATED FILE — do not edit.
// Service: autoscaling   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_autoscaling from "../types/autoscaling.js";

// aws:autoscaling/attachment:Attachment
export function Attachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingGroupName = (i.autoscalingGroupName !== undefined ? i.autoscalingGroupName : "");
  out.elb = (i.elb !== undefined ? i.elb : "");
  out.lbTargetGroupArn = (i.lbTargetGroupArn !== undefined ? i.lbTargetGroupArn : h.arn(ctx));
  return out;
}

// aws:autoscaling/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZoneDistribution = (i.availabilityZoneDistribution !== undefined ? i.availabilityZoneDistribution : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupAvailabilityZoneDistribution(ctx, depth + 1)));
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.capacityRebalance = (i.capacityRebalance !== undefined ? i.capacityRebalance : false);
  out.capacityReservationSpecification = (i.capacityReservationSpecification !== undefined ? i.capacityReservationSpecification : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupCapacityReservationSpecification(ctx, depth + 1)));
  out.context = (i.context !== undefined ? i.context : "");
  out.defaultCooldown = (i.defaultCooldown !== undefined ? i.defaultCooldown : 0);
  out.defaultInstanceWarmup = (i.defaultInstanceWarmup !== undefined ? i.defaultInstanceWarmup : 0);
  out.desiredCapacity = (i.desiredCapacity !== undefined ? i.desiredCapacity : 0);
  out.desiredCapacityType = (i.desiredCapacityType !== undefined ? i.desiredCapacityType : "");
  out.enabledMetrics = (i.enabledMetrics !== undefined ? i.enabledMetrics : (depth > 4 ? [] : [undefined]));
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.forceDeleteWarmPool = (i.forceDeleteWarmPool !== undefined ? i.forceDeleteWarmPool : false);
  out.healthCheckGracePeriod = (i.healthCheckGracePeriod !== undefined ? i.healthCheckGracePeriod : 0);
  out.healthCheckType = (i.healthCheckType !== undefined ? i.healthCheckType : "");
  out.ignoreFailedScalingActivities = (i.ignoreFailedScalingActivities !== undefined ? i.ignoreFailedScalingActivities : false);
  out.initialLifecycleHooks = (i.initialLifecycleHooks !== undefined ? i.initialLifecycleHooks : (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_GroupInitialLifecycleHook(ctx, depth + 1))]));
  out.instanceMaintenancePolicy = (i.instanceMaintenancePolicy !== undefined ? i.instanceMaintenancePolicy : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupInstanceMaintenancePolicy(ctx, depth + 1)));
  out.instanceRefresh = (i.instanceRefresh !== undefined ? i.instanceRefresh : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupInstanceRefresh(ctx, depth + 1)));
  out.launchConfiguration = (i.launchConfiguration !== undefined ? i.launchConfiguration : "");
  out.launchTemplate = (i.launchTemplate !== undefined ? i.launchTemplate : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupLaunchTemplate(ctx, depth + 1)));
  out.loadBalancers = (i.loadBalancers !== undefined ? i.loadBalancers : (depth > 4 ? [] : [""]));
  out.maxInstanceLifetime = (i.maxInstanceLifetime !== undefined ? i.maxInstanceLifetime : 0);
  out.maxSize = (i.maxSize !== undefined ? i.maxSize : 8);
  out.metricsGranularity = (i.metricsGranularity !== undefined ? i.metricsGranularity : "");
  out.minElbCapacity = (i.minElbCapacity !== undefined ? i.minElbCapacity : 0);
  out.minSize = (i.minSize !== undefined ? i.minSize : 8);
  out.mixedInstancesPolicy = (i.mixedInstancesPolicy !== undefined ? i.mixedInstancesPolicy : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupMixedInstancesPolicy(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.placementGroup = (i.placementGroup !== undefined ? i.placementGroup : "");
  out.predictedCapacity = 0;
  out.protectFromScaleIn = (i.protectFromScaleIn !== undefined ? i.protectFromScaleIn : false);
  out.serviceLinkedRoleArn = (i.serviceLinkedRoleArn !== undefined ? i.serviceLinkedRoleArn : h.arn(ctx));
  out.suspendedProcesses = (i.suspendedProcesses !== undefined ? i.suspendedProcesses : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_GroupTag(ctx, depth + 1))]));
  out.targetGroupArns = (i.targetGroupArns !== undefined ? i.targetGroupArns : (depth > 4 ? [] : [""]));
  out.terminationPolicies = (i.terminationPolicies !== undefined ? i.terminationPolicies : (depth > 4 ? [] : [""]));
  out.trafficSources = (i.trafficSources !== undefined ? i.trafficSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_GroupTrafficSource(ctx, depth + 1))]));
  out.vpcZoneIdentifiers = (i.vpcZoneIdentifiers !== undefined ? i.vpcZoneIdentifiers : (depth > 4 ? [] : [""]));
  out.waitForCapacityTimeout = (i.waitForCapacityTimeout !== undefined ? i.waitForCapacityTimeout : "");
  out.waitForElbCapacity = (i.waitForElbCapacity !== undefined ? i.waitForElbCapacity : 0);
  out.warmPool = (i.warmPool !== undefined ? i.warmPool : (depth > 4 ? {} : T_autoscaling.autoscaling_GroupWarmPool(ctx, depth + 1)));
  out.warmPoolSize = 8;
  return out;
}

// aws:autoscaling/lifecycleHook:LifecycleHook
export function LifecycleHook(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingGroupName = (i.autoscalingGroupName !== undefined ? i.autoscalingGroupName : "");
  out.defaultResult = (i.defaultResult !== undefined ? i.defaultResult : "");
  out.heartbeatTimeout = (i.heartbeatTimeout !== undefined ? i.heartbeatTimeout : 30);
  out.lifecycleTransition = (i.lifecycleTransition !== undefined ? i.lifecycleTransition : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationMetadata = (i.notificationMetadata !== undefined ? i.notificationMetadata : "");
  out.notificationTargetArn = (i.notificationTargetArn !== undefined ? i.notificationTargetArn : h.arn(ctx));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:autoscaling/notification:Notification
export function Notification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupNames = (i.groupNames !== undefined ? i.groupNames : (depth > 4 ? [] : [""]));
  out.notifications = (i.notifications !== undefined ? i.notifications : (depth > 4 ? [] : [undefined]));
  out.topicArn = (i.topicArn !== undefined ? i.topicArn : h.arn(ctx));
  return out;
}

// aws:autoscaling/policy:Policy
export function Policy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adjustmentType = (i.adjustmentType !== undefined ? i.adjustmentType : "");
  out.arn = h.arn(ctx);
  out.autoscalingGroupName = (i.autoscalingGroupName !== undefined ? i.autoscalingGroupName : "");
  out.cooldown = (i.cooldown !== undefined ? i.cooldown : 0);
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.estimatedInstanceWarmup = (i.estimatedInstanceWarmup !== undefined ? i.estimatedInstanceWarmup : 0);
  out.metricAggregationType = (i.metricAggregationType !== undefined ? i.metricAggregationType : "");
  out.minAdjustmentMagnitude = (i.minAdjustmentMagnitude !== undefined ? i.minAdjustmentMagnitude : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policyType = (i.policyType !== undefined ? i.policyType : "");
  out.predictiveScalingConfiguration = (i.predictiveScalingConfiguration !== undefined ? i.predictiveScalingConfiguration : (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyPredictiveScalingConfiguration(ctx, depth + 1)));
  out.scalingAdjustment = (i.scalingAdjustment !== undefined ? i.scalingAdjustment : 0);
  out.stepAdjustments = (i.stepAdjustments !== undefined ? i.stepAdjustments : (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_PolicyStepAdjustment(ctx, depth + 1))]));
  out.targetTrackingConfiguration = (i.targetTrackingConfiguration !== undefined ? i.targetTrackingConfiguration : (depth > 4 ? {} : T_autoscaling.autoscaling_PolicyTargetTrackingConfiguration(ctx, depth + 1)));
  return out;
}

// aws:autoscaling/schedule:Schedule
export function Schedule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoscalingGroupName = (i.autoscalingGroupName !== undefined ? i.autoscalingGroupName : "");
  out.desiredCapacity = (i.desiredCapacity !== undefined ? i.desiredCapacity : 0);
  out.endTime = (i.endTime !== undefined ? i.endTime : "");
  out.maxSize = (i.maxSize !== undefined ? i.maxSize : 8);
  out.minSize = (i.minSize !== undefined ? i.minSize : 8);
  out.recurrence = (i.recurrence !== undefined ? i.recurrence : "");
  out.scheduledActionName = (i.scheduledActionName !== undefined ? i.scheduledActionName : "");
  out.startTime = (i.startTime !== undefined ? i.startTime : "");
  out.timeZone = (i.timeZone !== undefined ? i.timeZone : "");
  return out;
}

// aws:autoscaling/tag:Tag
export function Tag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingGroupName = (i.autoscalingGroupName !== undefined ? i.autoscalingGroupName : "");
  out.tag = (i.tag !== undefined ? i.tag : (depth > 4 ? {} : T_autoscaling.autoscaling_TagTag(ctx, depth + 1)));
  return out;
}

// aws:autoscaling/trafficSourceAttachment:TrafficSourceAttachment
export function TrafficSourceAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoscalingGroupName = (i.autoscalingGroupName !== undefined ? i.autoscalingGroupName : "");
  out.trafficSource = (i.trafficSource !== undefined ? i.trafficSource : (depth > 4 ? {} : T_autoscaling.autoscaling_TrafficSourceAttachmentTrafficSource(ctx, depth + 1)));
  return out;
}
