// GENERATED FILE — do not edit.
// Service: emrcontainers   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emrcontainers from "../types/emrcontainers.js";

// aws:emrcontainers/jobTemplate:JobTemplate
export function JobTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.jobTemplateData = (i.jobTemplateData !== undefined ? i.jobTemplateData : (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateData(ctx, depth + 1)));
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:emrcontainers/virtualCluster:VirtualCluster
export function VirtualCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.containerProvider = (i.containerProvider !== undefined ? i.containerProvider : (depth > 4 ? {} : T_emrcontainers.emrcontainers_VirtualClusterContainerProvider(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
