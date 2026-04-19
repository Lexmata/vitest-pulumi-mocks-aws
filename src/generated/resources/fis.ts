// GENERATED FILE — do not edit.
// Service: fis   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fis from "../types/fis.js";

// aws:fis/experimentTemplate:ExperimentTemplate
export function ExperimentTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateAction(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.experimentOptions = (i.experimentOptions !== undefined ? i.experimentOptions : (depth > 4 ? {} : T_fis.fis_ExperimentTemplateExperimentOptions(ctx, depth + 1)));
  out.experimentReportConfiguration = (i.experimentReportConfiguration !== undefined ? i.experimentReportConfiguration : (depth > 4 ? {} : T_fis.fis_ExperimentTemplateExperimentReportConfiguration(ctx, depth + 1)));
  out.logConfiguration = (i.logConfiguration !== undefined ? i.logConfiguration : (depth > 4 ? {} : T_fis.fis_ExperimentTemplateLogConfiguration(ctx, depth + 1)));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.stopConditions = (i.stopConditions !== undefined ? i.stopConditions : (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateStopCondition(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targets = (i.targets !== undefined ? i.targets : (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateTarget(ctx, depth + 1))]));
  return out;
}
