// GENERATED FILE — do not edit.
// Service: chimesdkmediapipelines   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_chimesdkmediapipelines from "../types/chimesdkmediapipelines.js";

// aws:chimesdkmediapipelines/mediaInsightsPipelineConfiguration:MediaInsightsPipelineConfiguration
export function MediaInsightsPipelineConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.elements = (i.elements !== undefined ? i.elements : (depth > 4 ? [] : [(depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.realTimeAlertConfiguration = (i.realTimeAlertConfiguration !== undefined ? i.realTimeAlertConfiguration : (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration(ctx, depth + 1)));
  out.resourceAccessRoleArn = (i.resourceAccessRoleArn !== undefined ? i.resourceAccessRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
