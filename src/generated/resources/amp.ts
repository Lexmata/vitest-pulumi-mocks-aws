// GENERATED FILE — do not edit.
// Service: amp   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_amp from "../types/amp.js";

// aws:amp/alertManagerDefinition:AlertManagerDefinition
export function AlertManagerDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definition = (i.definition !== undefined ? i.definition : "");
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:amp/ruleGroupNamespace:RuleGroupNamespace
export function RuleGroupNamespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.data = (i.data !== undefined ? i.data : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}

// aws:amp/scraper:Scraper
export function Scraper(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.arn = h.arn(ctx);
  out.destination = (i.destination !== undefined ? i.destination : (depth > 4 ? {} : T_amp.amp_ScraperDestination(ctx, depth + 1)));
  out.roleArn = h.arn(ctx);
  out.roleConfiguration = (i.roleConfiguration !== undefined ? i.roleConfiguration : (depth > 4 ? {} : T_amp.amp_ScraperRoleConfiguration(ctx, depth + 1)));
  out.scrapeConfiguration = (i.scrapeConfiguration !== undefined ? i.scrapeConfiguration : "");
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_amp.amp_ScraperSource(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_amp.amp_ScraperTimeouts(ctx, depth + 1)));
  return out;
}

// aws:amp/workspace:Workspace
export function Workspace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.arn = h.arn(ctx);
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.loggingConfiguration = (i.loggingConfiguration !== undefined ? i.loggingConfiguration : (depth > 4 ? {} : T_amp.amp_WorkspaceLoggingConfiguration(ctx, depth + 1)));
  out.prometheusEndpoint = h.endpoint(ctx, "prometheusEndpoint");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:amp/workspaceConfiguration:WorkspaceConfiguration
export function WorkspaceConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.limitsPerLabelSets = (i.limitsPerLabelSets !== undefined ? i.limitsPerLabelSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_amp.amp_WorkspaceConfigurationLimitsPerLabelSet(ctx, depth + 1))]));
  out.retentionPeriodInDays = (i.retentionPeriodInDays !== undefined ? i.retentionPeriodInDays : 0);
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_amp.amp_WorkspaceConfigurationTimeouts(ctx, depth + 1)));
  out.workspaceId = (i.workspaceId !== undefined ? i.workspaceId : h.id(ctx, "workspaceId"));
  return out;
}
