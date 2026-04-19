// GENERATED FILE — do not edit.
// Service: amp   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_amp from "./amp.js";

// aws:amp/ScraperDestination:ScraperDestination
export function amp_ScraperDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amp = (depth > 4 ? {} : T_amp.amp_ScraperDestinationAmp(ctx, depth + 1));
  return out;
}

// aws:amp/ScraperDestinationAmp:ScraperDestinationAmp
export function amp_ScraperDestinationAmp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.workspaceArn = h.arn(ctx);
  return out;
}

// aws:amp/ScraperRoleConfiguration:ScraperRoleConfiguration
export function amp_ScraperRoleConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sourceRoleArn = h.arn(ctx);
  out.targetRoleArn = h.arn(ctx);
  return out;
}

// aws:amp/ScraperSource:ScraperSource
export function amp_ScraperSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eks = (depth > 4 ? {} : T_amp.amp_ScraperSourceEks(ctx, depth + 1));
  return out;
}

// aws:amp/ScraperSourceEks:ScraperSourceEks
export function amp_ScraperSourceEks(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArn = h.arn(ctx);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:amp/ScraperTimeouts:ScraperTimeouts
export function amp_ScraperTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:amp/WorkspaceConfigurationLimitsPerLabelSet:WorkspaceConfigurationLimitsPerLabelSet
export function amp_WorkspaceConfigurationLimitsPerLabelSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.labelSet = {};
  out.limits = (depth > 4 ? {} : T_amp.amp_WorkspaceConfigurationLimitsPerLabelSetLimits(ctx, depth + 1));
  return out;
}

// aws:amp/WorkspaceConfigurationLimitsPerLabelSetLimits:WorkspaceConfigurationLimitsPerLabelSetLimits
export function amp_WorkspaceConfigurationLimitsPerLabelSetLimits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxSeries = 0;
  return out;
}

// aws:amp/WorkspaceConfigurationTimeouts:WorkspaceConfigurationTimeouts
export function amp_WorkspaceConfigurationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:amp/WorkspaceLoggingConfiguration:WorkspaceLoggingConfiguration
export function amp_WorkspaceLoggingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupArn = h.arn(ctx);
  return out;
}
