// GENERATED FILE — do not edit.
// Service: datapipeline   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datapipeline from "../types/datapipeline.js";

// aws:datapipeline/getPipeline:getPipeline
export function getPipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.pipelineId = (i.pipelineId !== undefined ? i.pipelineId : h.id(ctx, "pipelineId"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:datapipeline/getPipelineDefinition:getPipelineDefinition
export function getPipelineDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.parameterObjects = (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_getPipelineDefinitionParameterObject(ctx, depth + 1))]);
  out.parameterValues = (i.parameterValues !== undefined ? i.parameterValues : (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_getPipelineDefinitionParameterValue(ctx, depth + 1))]));
  out.pipelineId = (i.pipelineId !== undefined ? i.pipelineId : h.id(ctx, "pipelineId"));
  out.pipelineObjects = (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_getPipelineDefinitionPipelineObject(ctx, depth + 1))]);
  return out;
}
