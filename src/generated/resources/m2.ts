// GENERATED FILE — do not edit.
// Service: m2   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_m2 from "../types/m2.js";

// aws:m2/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = h.id(ctx, "applicationId");
  out.arn = h.arn(ctx);
  out.currentVersion = 0;
  out.definition = (i.definition !== undefined ? i.definition : (depth > 4 ? {} : T_m2.m2_ApplicationDefinition(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.engineType = (i.engineType !== undefined ? i.engineType : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_m2.m2_ApplicationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:m2/deployment:Deployment
export function Deployment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.applicationVersion = (i.applicationVersion !== undefined ? i.applicationVersion : 0);
  out.deploymentId = h.id(ctx, "deploymentId");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.forceStop = (i.forceStop !== undefined ? i.forceStop : false);
  out.start = (i.start !== undefined ? i.start : false);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_m2.m2_DeploymentTimeouts(ctx, depth + 1)));
  return out;
}

// aws:m2/environment:Environment
export function Environment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyChangesDuringMaintenanceWindow = (i.applyChangesDuringMaintenanceWindow !== undefined ? i.applyChangesDuringMaintenanceWindow : false);
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.engineType = (i.engineType !== undefined ? i.engineType : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.environmentId = h.id(ctx, "environmentId");
  out.forceUpdate = (i.forceUpdate !== undefined ? i.forceUpdate : false);
  out.highAvailabilityConfig = (i.highAvailabilityConfig !== undefined ? i.highAvailabilityConfig : (depth > 4 ? {} : T_m2.m2_EnvironmentHighAvailabilityConfig(ctx, depth + 1)));
  out.instanceType = (i.instanceType !== undefined ? i.instanceType : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.loadBalancerArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.preferredMaintenanceWindow = (i.preferredMaintenanceWindow !== undefined ? i.preferredMaintenanceWindow : "");
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.storageConfiguration = (i.storageConfiguration !== undefined ? i.storageConfiguration : (depth > 4 ? {} : T_m2.m2_EnvironmentStorageConfiguration(ctx, depth + 1)));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_m2.m2_EnvironmentTimeouts(ctx, depth + 1)));
  return out;
}
