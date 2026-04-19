// GENERATED FILE — do not edit.
// Service: batch   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_batch from "../types/batch.js";

// aws:batch/getComputeEnvironment:getComputeEnvironment
export function getComputeEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeEnvironmentName = (i.computeEnvironmentName !== undefined ? i.computeEnvironmentName : "");
  out.ecsClusterArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.serviceRole = "";
  out.state = "active";
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  out.updatePolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getComputeEnvironmentUpdatePolicy(ctx, depth + 1))]);
  return out;
}

// aws:batch/getJobDefinition:getJobDefinition
export function getJobDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.arnPrefix = "";
  out.containerOrchestrationType = "";
  out.eksProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionEksProperty(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nodeProperties = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionNodeProperty(ctx, depth + 1))]);
  out.retryStrategies = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionRetryStrategy(ctx, depth + 1))]);
  out.revision = (i.revision !== undefined ? i.revision : 0);
  out.schedulingPriority = 0;
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = {};
  out.timeouts = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobDefinitionTimeout(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:batch/getJobQueue:getJobQueue
export function getJobQueue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeEnvironmentOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobQueueComputeEnvironmentOrder(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.jobStateTimeLimitActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getJobQueueJobStateTimeLimitAction(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.priority = 0;
  out.schedulingPolicyArn = h.arn(ctx);
  out.state = "active";
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:batch/getSchedulingPolicy:getSchedulingPolicy
export function getSchedulingPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.fairSharePolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_getSchedulingPolicyFairSharePolicy(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
