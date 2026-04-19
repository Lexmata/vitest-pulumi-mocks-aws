// GENERATED FILE — do not edit.
// Service: codeguruprofiler   (4 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codeguruprofiler from "./codeguruprofiler.js";

// aws:codeguruprofiler/ProfilingGroupAgentOrchestrationConfig:ProfilingGroupAgentOrchestrationConfig
export function codeguruprofiler_ProfilingGroupAgentOrchestrationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.profilingEnabled = false;
  return out;
}

// aws:codeguruprofiler/getProfilingGroupAgentOrchestrationConfig:getProfilingGroupAgentOrchestrationConfig
export function codeguruprofiler_getProfilingGroupAgentOrchestrationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.profilingEnabled = false;
  return out;
}

// aws:codeguruprofiler/getProfilingGroupProfilingStatus:getProfilingGroupProfilingStatus
export function codeguruprofiler_getProfilingGroupProfilingStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.latestAgentOrchestratedAt = "";
  out.latestAgentProfileReportedAt = "";
  out.latestAggregatedProfiles = (depth > 4 ? [] : [(depth > 4 ? {} : T_codeguruprofiler.codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile(ctx, depth + 1))]);
  return out;
}

// aws:codeguruprofiler/getProfilingGroupProfilingStatusLatestAggregatedProfile:getProfilingGroupProfilingStatusLatestAggregatedProfile
export function codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.period = "";
  out.start = "";
  return out;
}
