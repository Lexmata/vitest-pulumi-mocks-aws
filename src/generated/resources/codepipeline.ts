// GENERATED FILE — do not edit.
// Service: codepipeline   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codepipeline from "../types/codepipeline.js";

// aws:codepipeline/customActionType:CustomActionType
export function CustomActionType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.category = (i.category !== undefined ? i.category : "");
  out.configurationProperties = (i.configurationProperties !== undefined ? i.configurationProperties : (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_CustomActionTypeConfigurationProperty(ctx, depth + 1))]));
  out.inputArtifactDetails = (i.inputArtifactDetails !== undefined ? i.inputArtifactDetails : (depth > 4 ? {} : T_codepipeline.codepipeline_CustomActionTypeInputArtifactDetails(ctx, depth + 1)));
  out.outputArtifactDetails = (i.outputArtifactDetails !== undefined ? i.outputArtifactDetails : (depth > 4 ? {} : T_codepipeline.codepipeline_CustomActionTypeOutputArtifactDetails(ctx, depth + 1)));
  out.owner = ctx.accountId;
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.settings = (i.settings !== undefined ? i.settings : (depth > 4 ? {} : T_codepipeline.codepipeline_CustomActionTypeSettings(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:codepipeline/pipeline:Pipeline
export function Pipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.artifactStores = (i.artifactStores !== undefined ? i.artifactStores : (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineArtifactStore(ctx, depth + 1))]));
  out.executionMode = (i.executionMode !== undefined ? i.executionMode : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.pipelineType = (i.pipelineType !== undefined ? i.pipelineType : "");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.stages = (i.stages !== undefined ? i.stages : (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStage(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.triggerAlls = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAll(ctx, depth + 1))]);
  out.triggers = (i.triggers !== undefined ? i.triggers : (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTrigger(ctx, depth + 1))]));
  out.variables = (i.variables !== undefined ? i.variables : (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineVariable(ctx, depth + 1))]));
  return out;
}

// aws:codepipeline/webhook:Webhook
export function Webhook(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authentication = (i.authentication !== undefined ? i.authentication : "");
  out.authenticationConfiguration = (i.authenticationConfiguration !== undefined ? i.authenticationConfiguration : (depth > 4 ? {} : T_codepipeline.codepipeline_WebhookAuthenticationConfiguration(ctx, depth + 1)));
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_WebhookFilter(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetAction = (i.targetAction !== undefined ? i.targetAction : "");
  out.targetPipeline = (i.targetPipeline !== undefined ? i.targetPipeline : "");
  out.url = h.endpoint(ctx, "url");
  return out;
}
