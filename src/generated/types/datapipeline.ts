// GENERATED FILE — do not edit.
// Service: datapipeline   (10 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_datapipeline from "./datapipeline.js";

// aws:datapipeline/PipelineDefinitionParameterObject:PipelineDefinitionParameterObject
export function datapipeline_PipelineDefinitionParameterObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_PipelineDefinitionParameterObjectAttribute(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:datapipeline/PipelineDefinitionParameterObjectAttribute:PipelineDefinitionParameterObjectAttribute
export function datapipeline_PipelineDefinitionParameterObjectAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.stringValue = "";
  return out;
}

// aws:datapipeline/PipelineDefinitionParameterValue:PipelineDefinitionParameterValue
export function datapipeline_PipelineDefinitionParameterValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.stringValue = "";
  return out;
}

// aws:datapipeline/PipelineDefinitionPipelineObject:PipelineDefinitionPipelineObject
export function datapipeline_PipelineDefinitionPipelineObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fields = (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_PipelineDefinitionPipelineObjectField(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:datapipeline/PipelineDefinitionPipelineObjectField:PipelineDefinitionPipelineObjectField
export function datapipeline_PipelineDefinitionPipelineObjectField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.refValue = "";
  out.stringValue = "";
  return out;
}

// aws:datapipeline/getPipelineDefinitionParameterObject:getPipelineDefinitionParameterObject
export function datapipeline_getPipelineDefinitionParameterObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_getPipelineDefinitionParameterObjectAttribute(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:datapipeline/getPipelineDefinitionParameterObjectAttribute:getPipelineDefinitionParameterObjectAttribute
export function datapipeline_getPipelineDefinitionParameterObjectAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.stringValue = "";
  return out;
}

// aws:datapipeline/getPipelineDefinitionParameterValue:getPipelineDefinitionParameterValue
export function datapipeline_getPipelineDefinitionParameterValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.stringValue = "";
  return out;
}

// aws:datapipeline/getPipelineDefinitionPipelineObject:getPipelineDefinitionPipelineObject
export function datapipeline_getPipelineDefinitionPipelineObject(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fields = (depth > 4 ? [] : [(depth > 4 ? {} : T_datapipeline.datapipeline_getPipelineDefinitionPipelineObjectField(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  return out;
}

// aws:datapipeline/getPipelineDefinitionPipelineObjectField:getPipelineDefinitionPipelineObjectField
export function datapipeline_getPipelineDefinitionPipelineObjectField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.refValue = "";
  out.stringValue = "";
  return out;
}
