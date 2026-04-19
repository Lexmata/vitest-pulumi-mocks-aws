// GENERATED FILE — do not edit.
// Service: codeguruprofiler   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codeguruprofiler from "../types/codeguruprofiler.js";

// aws:codeguruprofiler/getProfilingGroup:getProfilingGroup
export function getProfilingGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentOrchestrationConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_codeguruprofiler.codeguruprofiler_getProfilingGroupAgentOrchestrationConfig(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.computePlatform = "";
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.profilingStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_codeguruprofiler.codeguruprofiler_getProfilingGroupProfilingStatus(ctx, depth + 1))]);
  out.tags = {};
  out.updatedAt = "";
  return out;
}
