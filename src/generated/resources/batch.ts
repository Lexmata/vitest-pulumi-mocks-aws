// GENERATED FILE — do not edit.
// Service: batch   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_batch from "../types/batch.js";

// aws:batch/computeEnvironment:ComputeEnvironment
export function ComputeEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeEnvironmentName = (i.computeEnvironmentName !== undefined ? i.computeEnvironmentName : "");
  out.computeEnvironmentNamePrefix = (i.computeEnvironmentNamePrefix !== undefined ? i.computeEnvironmentNamePrefix : "");
  out.computeResources = (i.computeResources !== undefined ? i.computeResources : (depth > 4 ? {} : T_batch.batch_ComputeEnvironmentComputeResources(ctx, depth + 1)));
  out.ecsClusterArn = h.arn(ctx);
  out.eksConfiguration = (i.eksConfiguration !== undefined ? i.eksConfiguration : (depth > 4 ? {} : T_batch.batch_ComputeEnvironmentEksConfiguration(ctx, depth + 1)));
  out.serviceRole = (i.serviceRole !== undefined ? i.serviceRole : "");
  out.state = (i.state !== undefined ? i.state : "active");
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.updatePolicy = (i.updatePolicy !== undefined ? i.updatePolicy : (depth > 4 ? {} : T_batch.batch_ComputeEnvironmentUpdatePolicy(ctx, depth + 1)));
  return out;
}

// aws:batch/jobDefinition:JobDefinition
export function JobDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.arnPrefix = "";
  out.containerProperties = (i.containerProperties !== undefined ? i.containerProperties : "");
  out.deregisterOnNewRevision = (i.deregisterOnNewRevision !== undefined ? i.deregisterOnNewRevision : false);
  out.ecsProperties = (i.ecsProperties !== undefined ? i.ecsProperties : "");
  out.eksProperties = (i.eksProperties !== undefined ? i.eksProperties : (depth > 4 ? {} : T_batch.batch_JobDefinitionEksProperties(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nodeProperties = (i.nodeProperties !== undefined ? i.nodeProperties : "");
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.platformCapabilities = (i.platformCapabilities !== undefined ? i.platformCapabilities : (depth > 4 ? [] : [""]));
  out.propagateTags = (i.propagateTags !== undefined ? i.propagateTags : false);
  out.retryStrategy = (i.retryStrategy !== undefined ? i.retryStrategy : (depth > 4 ? {} : T_batch.batch_JobDefinitionRetryStrategy(ctx, depth + 1)));
  out.revision = 0;
  out.schedulingPriority = (i.schedulingPriority !== undefined ? i.schedulingPriority : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeout = (i.timeout !== undefined ? i.timeout : (depth > 4 ? {} : T_batch.batch_JobDefinitionTimeout(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:batch/jobQueue:JobQueue
export function JobQueue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.computeEnvironmentOrders = (i.computeEnvironmentOrders !== undefined ? i.computeEnvironmentOrders : (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobQueueComputeEnvironmentOrder(ctx, depth + 1))]));
  out.computeEnvironments = (i.computeEnvironments !== undefined ? i.computeEnvironments : (depth > 4 ? [] : [""]));
  out.jobStateTimeLimitActions = (i.jobStateTimeLimitActions !== undefined ? i.jobStateTimeLimitActions : (depth > 4 ? [] : [(depth > 4 ? {} : T_batch.batch_JobQueueJobStateTimeLimitAction(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.schedulingPolicyArn = (i.schedulingPolicyArn !== undefined ? i.schedulingPolicyArn : h.arn(ctx));
  out.state = (i.state !== undefined ? i.state : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_batch.batch_JobQueueTimeouts(ctx, depth + 1)));
  return out;
}

// aws:batch/schedulingPolicy:SchedulingPolicy
export function SchedulingPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fairSharePolicy = (i.fairSharePolicy !== undefined ? i.fairSharePolicy : (depth > 4 ? {} : T_batch.batch_SchedulingPolicyFairSharePolicy(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
