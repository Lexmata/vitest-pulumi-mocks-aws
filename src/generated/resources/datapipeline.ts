// GENERATED FILE — do not edit.
// Service: datapipeline   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datapipeline from "../types/datapipeline.js";

// aws:datapipeline/pipeline:Pipeline
export function Pipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:datapipeline/pipelineDefinition:PipelineDefinition
export function PipelineDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.parameterObjects = (i.parameterObjects !== undefined ? i.parameterObjects : (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_PipelineDefinitionParameterObject(ctx, depth + 1))]));
  out.parameterValues = (i.parameterValues !== undefined ? i.parameterValues : (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_PipelineDefinitionParameterValue(ctx, depth + 1))]));
  out.pipelineId = (i.pipelineId !== undefined ? i.pipelineId : h.id(ctx, "pipelineId"));
  out.pipelineObjects = (i.pipelineObjects !== undefined ? i.pipelineObjects : (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_PipelineDefinitionPipelineObject(ctx, depth + 1))]));
  return out;
}
