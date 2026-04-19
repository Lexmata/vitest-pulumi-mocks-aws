// GENERATED FILE — do not edit.
// Service: pipes   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_pipes from "../types/pipes.js";

// aws:pipes/pipe:Pipe
export function Pipe(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.desiredState = (i.desiredState !== undefined ? i.desiredState : "");
  out.enrichment = (i.enrichment !== undefined ? i.enrichment : "");
  out.enrichmentParameters = (i.enrichmentParameters !== undefined ? i.enrichmentParameters : (depth > 4 ? {} : T_pipes.pipes_PipeEnrichmentParameters(ctx, depth + 1)));
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.logConfiguration = (i.logConfiguration !== undefined ? i.logConfiguration : (depth > 4 ? {} : T_pipes.pipes_PipeLogConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.source = (i.source !== undefined ? i.source : "");
  out.sourceParameters = (i.sourceParameters !== undefined ? i.sourceParameters : (depth > 4 ? {} : T_pipes.pipes_PipeSourceParameters(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.target = (i.target !== undefined ? i.target : "");
  out.targetParameters = (i.targetParameters !== undefined ? i.targetParameters : (depth > 4 ? {} : T_pipes.pipes_PipeTargetParameters(ctx, depth + 1)));
  return out;
}
