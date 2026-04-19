// GENERATED FILE — do not edit.
// Service: evidently   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_evidently from "../types/evidently.js";

// aws:evidently/feature:Feature
export function Feature(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.defaultVariation = (i.defaultVariation !== undefined ? i.defaultVariation : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.entityOverrides = (i.entityOverrides !== undefined ? i.entityOverrides : {});
  out.evaluationRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_FeatureEvaluationRule(ctx, depth + 1))]);
  out.evaluationStrategy = (i.evaluationStrategy !== undefined ? i.evaluationStrategy : "");
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.project = (i.project !== undefined ? i.project : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.valueType = "";
  out.variations = (i.variations !== undefined ? i.variations : (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_FeatureVariation(ctx, depth + 1))]));
  return out;
}

// aws:evidently/launch:Launch
export function Launch(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.executions = (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_LaunchExecution(ctx, depth + 1))]);
  out.groups = (i.groups !== undefined ? i.groups : (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_LaunchGroup(ctx, depth + 1))]));
  out.lastUpdatedTime = "";
  out.metricMonitors = (i.metricMonitors !== undefined ? i.metricMonitors : (depth > 4 ? [] : [(depth > 4 ? {} : T_evidently.evidently_LaunchMetricMonitor(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.project = (i.project !== undefined ? i.project : "");
  out.randomizationSalt = (i.randomizationSalt !== undefined ? i.randomizationSalt : "");
  out.scheduledSplitsConfig = (i.scheduledSplitsConfig !== undefined ? i.scheduledSplitsConfig : (depth > 4 ? {} : T_evidently.evidently_LaunchScheduledSplitsConfig(ctx, depth + 1)));
  out.status = "active";
  out.statusReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  return out;
}

// aws:evidently/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activeExperimentCount = 1;
  out.activeLaunchCount = 1;
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.dataDelivery = (i.dataDelivery !== undefined ? i.dataDelivery : (depth > 4 ? {} : T_evidently.evidently_ProjectDataDelivery(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.experimentCount = 1;
  out.featureCount = 1;
  out.lastUpdatedTime = "";
  out.launchCount = 1;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:evidently/segment:Segment
export function Segment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.experimentCount = 1;
  out.lastUpdatedTime = "";
  out.launchCount = 1;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.pattern = (i.pattern !== undefined ? i.pattern : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
