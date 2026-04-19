// GENERATED FILE — do not edit.
// Service: codeguruprofiler   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codeguruprofiler from "../types/codeguruprofiler.js";

// aws:codeguruprofiler/profilingGroup:ProfilingGroup
export function ProfilingGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.agentOrchestrationConfig = (i.agentOrchestrationConfig !== undefined ? i.agentOrchestrationConfig : (depth > 4 ? {} : T_codeguruprofiler.codeguruprofiler_ProfilingGroupAgentOrchestrationConfig(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.computePlatform = (i.computePlatform !== undefined ? i.computePlatform : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
