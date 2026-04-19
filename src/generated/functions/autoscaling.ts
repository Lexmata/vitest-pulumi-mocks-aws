// GENERATED FILE — do not edit.
// Service: autoscaling   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_autoscaling from "../types/autoscaling.js";

// aws:autoscaling/getAmiIds:getAmiIds
export function getAmiIds(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getAmiIdsFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.names = (i.names !== undefined ? i.names : (depth > 4 ? [] : [""]));
  return out;
}

// aws:autoscaling/getGroup:getGroup
export function getGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.defaultCooldown = 0;
  out.desiredCapacity = 0;
  out.desiredCapacityType = "";
  out.enabledMetrics = (depth > 4 ? [] : [""]);
  out.healthCheckGracePeriod = 0;
  out.healthCheckType = "";
  out.id = h.id(ctx, "id");
  out.instanceMaintenancePolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupInstanceMaintenancePolicy(ctx, depth + 1))]);
  out.launchConfiguration = "";
  out.launchTemplates = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupLaunchTemplate(ctx, depth + 1))]);
  out.loadBalancers = (depth > 4 ? [] : [""]);
  out.maxInstanceLifetime = 0;
  out.maxSize = 8;
  out.minSize = 8;
  out.mixedInstancesPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupMixedInstancesPolicy(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.newInstancesProtectedFromScaleIn = false;
  out.placementGroup = "";
  out.predictedCapacity = 0;
  out.serviceLinkedRoleArn = h.arn(ctx);
  out.status = "active";
  out.suspendedProcesses = (depth > 4 ? [] : [""]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupTag(ctx, depth + 1))]);
  out.targetGroupArns = (depth > 4 ? [] : [""]);
  out.terminationPolicies = (depth > 4 ? [] : [""]);
  out.trafficSources = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupTrafficSource(ctx, depth + 1))]);
  out.vpcZoneIdentifier = "";
  out.warmPoolSize = 8;
  out.warmPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_autoscaling.autoscaling_getGroupWarmPool(ctx, depth + 1))]);
  return out;
}
