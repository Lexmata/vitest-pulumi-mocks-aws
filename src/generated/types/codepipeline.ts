// GENERATED FILE — do not edit.
// Service: codepipeline   (42 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codepipeline from "./codepipeline.js";

// aws:codepipeline/CustomActionTypeConfigurationProperty:CustomActionTypeConfigurationProperty
export function codepipeline_CustomActionTypeConfigurationProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.key = false;
  out.name = ctx.name;
  out.queryable = false;
  out.required = false;
  out.secret = false;
  out.type = "";
  return out;
}

// aws:codepipeline/CustomActionTypeInputArtifactDetails:CustomActionTypeInputArtifactDetails
export function codepipeline_CustomActionTypeInputArtifactDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumCount = 1;
  out.minimumCount = 1;
  return out;
}

// aws:codepipeline/CustomActionTypeOutputArtifactDetails:CustomActionTypeOutputArtifactDetails
export function codepipeline_CustomActionTypeOutputArtifactDetails(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maximumCount = 1;
  out.minimumCount = 1;
  return out;
}

// aws:codepipeline/CustomActionTypeSettings:CustomActionTypeSettings
export function codepipeline_CustomActionTypeSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityUrlTemplate = "";
  out.executionUrlTemplate = "";
  out.revisionUrlTemplate = "";
  out.thirdPartyConfigurationUrl = h.endpoint(ctx, "thirdPartyConfigurationUrl");
  return out;
}

// aws:codepipeline/PipelineArtifactStore:PipelineArtifactStore
export function codepipeline_PipelineArtifactStore(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionKey = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineArtifactStoreEncryptionKey(ctx, depth + 1));
  out.location = "";
  out.region = ctx.region;
  out.type = "";
  return out;
}

// aws:codepipeline/PipelineArtifactStoreEncryptionKey:PipelineArtifactStoreEncryptionKey
export function codepipeline_PipelineArtifactStoreEncryptionKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.type = "";
  return out;
}

// aws:codepipeline/PipelineStage:PipelineStage
export function codepipeline_PipelineStage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageAction(ctx, depth + 1))]);
  out.beforeEntry = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageBeforeEntry(ctx, depth + 1));
  out.name = ctx.name;
  out.onFailure = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnFailure(ctx, depth + 1));
  out.onSuccess = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnSuccess(ctx, depth + 1));
  return out;
}

// aws:codepipeline/PipelineStageAction:PipelineStageAction
export function codepipeline_PipelineStageAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.category = "";
  out.configuration = {};
  out.inputArtifacts = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.namespace = "";
  out.outputArtifacts = (depth > 4 ? [] : [""]);
  out.owner = ctx.accountId;
  out.provider = "";
  out.region = ctx.region;
  out.roleArn = h.arn(ctx);
  out.runOrder = 0;
  out.timeoutInMinutes = 30;
  out.version = "1";
  return out;
}

// aws:codepipeline/PipelineStageBeforeEntry:PipelineStageBeforeEntry
export function codepipeline_PipelineStageBeforeEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageBeforeEntryCondition(ctx, depth + 1));
  return out;
}

// aws:codepipeline/PipelineStageBeforeEntryCondition:PipelineStageBeforeEntryCondition
export function codepipeline_PipelineStageBeforeEntryCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.result = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageBeforeEntryConditionRule(ctx, depth + 1))]);
  return out;
}

// aws:codepipeline/PipelineStageBeforeEntryConditionRule:PipelineStageBeforeEntryConditionRule
export function codepipeline_PipelineStageBeforeEntryConditionRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.configuration = {};
  out.inputArtifacts = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.region = ctx.region;
  out.roleArn = h.arn(ctx);
  out.ruleTypeId = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageBeforeEntryConditionRuleRuleTypeId(ctx, depth + 1));
  out.timeoutInMinutes = 30;
  return out;
}

// aws:codepipeline/PipelineStageBeforeEntryConditionRuleRuleTypeId:PipelineStageBeforeEntryConditionRuleRuleTypeId
export function codepipeline_PipelineStageBeforeEntryConditionRuleRuleTypeId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.category = "";
  out.owner = ctx.accountId;
  out.provider = "";
  out.version = "1";
  return out;
}

// aws:codepipeline/PipelineStageOnFailure:PipelineStageOnFailure
export function codepipeline_PipelineStageOnFailure(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnFailureCondition(ctx, depth + 1));
  out.result = "";
  out.retryConfiguration = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnFailureRetryConfiguration(ctx, depth + 1));
  return out;
}

// aws:codepipeline/PipelineStageOnFailureCondition:PipelineStageOnFailureCondition
export function codepipeline_PipelineStageOnFailureCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.result = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnFailureConditionRule(ctx, depth + 1))]);
  return out;
}

// aws:codepipeline/PipelineStageOnFailureConditionRule:PipelineStageOnFailureConditionRule
export function codepipeline_PipelineStageOnFailureConditionRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.configuration = {};
  out.inputArtifacts = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.region = ctx.region;
  out.roleArn = h.arn(ctx);
  out.ruleTypeId = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnFailureConditionRuleRuleTypeId(ctx, depth + 1));
  out.timeoutInMinutes = 30;
  return out;
}

// aws:codepipeline/PipelineStageOnFailureConditionRuleRuleTypeId:PipelineStageOnFailureConditionRuleRuleTypeId
export function codepipeline_PipelineStageOnFailureConditionRuleRuleTypeId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.category = "";
  out.owner = ctx.accountId;
  out.provider = "";
  out.version = "1";
  return out;
}

// aws:codepipeline/PipelineStageOnFailureRetryConfiguration:PipelineStageOnFailureRetryConfiguration
export function codepipeline_PipelineStageOnFailureRetryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.retryMode = "";
  return out;
}

// aws:codepipeline/PipelineStageOnSuccess:PipelineStageOnSuccess
export function codepipeline_PipelineStageOnSuccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnSuccessCondition(ctx, depth + 1));
  return out;
}

// aws:codepipeline/PipelineStageOnSuccessCondition:PipelineStageOnSuccessCondition
export function codepipeline_PipelineStageOnSuccessCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.result = "";
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnSuccessConditionRule(ctx, depth + 1))]);
  return out;
}

// aws:codepipeline/PipelineStageOnSuccessConditionRule:PipelineStageOnSuccessConditionRule
export function codepipeline_PipelineStageOnSuccessConditionRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.configuration = {};
  out.inputArtifacts = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.region = ctx.region;
  out.roleArn = h.arn(ctx);
  out.ruleTypeId = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineStageOnSuccessConditionRuleRuleTypeId(ctx, depth + 1));
  out.timeoutInMinutes = 30;
  return out;
}

// aws:codepipeline/PipelineStageOnSuccessConditionRuleRuleTypeId:PipelineStageOnSuccessConditionRuleRuleTypeId
export function codepipeline_PipelineStageOnSuccessConditionRuleRuleTypeId(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.category = "";
  out.owner = ctx.accountId;
  out.provider = "";
  out.version = "1";
  return out;
}

// aws:codepipeline/PipelineTrigger:PipelineTrigger
export function codepipeline_PipelineTrigger(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gitConfiguration = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfiguration(ctx, depth + 1));
  out.providerType = "";
  return out;
}

// aws:codepipeline/PipelineTriggerAll:PipelineTriggerAll
export function codepipeline_PipelineTriggerAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.gitConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfiguration(ctx, depth + 1))]);
  out.providerType = "";
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfiguration:PipelineTriggerAllGitConfiguration
export function codepipeline_PipelineTriggerAllGitConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pullRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPullRequest(ctx, depth + 1))]);
  out.pushes = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPush(ctx, depth + 1))]);
  out.sourceActionName = "";
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPullRequest:PipelineTriggerAllGitConfigurationPullRequest
export function codepipeline_PipelineTriggerAllGitConfigurationPullRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branches = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPullRequestBranch(ctx, depth + 1))]);
  out.events = (depth > 4 ? [] : [""]);
  out.filePaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPullRequestFilePath(ctx, depth + 1))]);
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPullRequestBranch:PipelineTriggerAllGitConfigurationPullRequestBranch
export function codepipeline_PipelineTriggerAllGitConfigurationPullRequestBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPullRequestFilePath:PipelineTriggerAllGitConfigurationPullRequestFilePath
export function codepipeline_PipelineTriggerAllGitConfigurationPullRequestFilePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPush:PipelineTriggerAllGitConfigurationPush
export function codepipeline_PipelineTriggerAllGitConfigurationPush(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branches = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPushBranch(ctx, depth + 1))]);
  out.filePaths = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPushFilePath(ctx, depth + 1))]);
  out.tags = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerAllGitConfigurationPushTag(ctx, depth + 1))]);
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPushBranch:PipelineTriggerAllGitConfigurationPushBranch
export function codepipeline_PipelineTriggerAllGitConfigurationPushBranch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPushFilePath:PipelineTriggerAllGitConfigurationPushFilePath
export function codepipeline_PipelineTriggerAllGitConfigurationPushFilePath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerAllGitConfigurationPushTag:PipelineTriggerAllGitConfigurationPushTag
export function codepipeline_PipelineTriggerAllGitConfigurationPushTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfiguration:PipelineTriggerGitConfiguration
export function codepipeline_PipelineTriggerGitConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.pullRequests = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPullRequest(ctx, depth + 1))]);
  out.pushes = (depth > 4 ? [] : [(depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPush(ctx, depth + 1))]);
  out.sourceActionName = "";
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPullRequest:PipelineTriggerGitConfigurationPullRequest
export function codepipeline_PipelineTriggerGitConfigurationPullRequest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branches = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPullRequestBranches(ctx, depth + 1));
  out.events = (depth > 4 ? [] : [""]);
  out.filePaths = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths(ctx, depth + 1));
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPullRequestBranches:PipelineTriggerGitConfigurationPullRequestBranches
export function codepipeline_PipelineTriggerGitConfigurationPullRequestBranches(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPullRequestFilePaths:PipelineTriggerGitConfigurationPullRequestFilePaths
export function codepipeline_PipelineTriggerGitConfigurationPullRequestFilePaths(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPush:PipelineTriggerGitConfigurationPush
export function codepipeline_PipelineTriggerGitConfigurationPush(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.branches = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPushBranches(ctx, depth + 1));
  out.filePaths = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPushFilePaths(ctx, depth + 1));
  out.tags = (depth > 4 ? {} : T_codepipeline.codepipeline_PipelineTriggerGitConfigurationPushTags(ctx, depth + 1));
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPushBranches:PipelineTriggerGitConfigurationPushBranches
export function codepipeline_PipelineTriggerGitConfigurationPushBranches(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPushFilePaths:PipelineTriggerGitConfigurationPushFilePaths
export function codepipeline_PipelineTriggerGitConfigurationPushFilePaths(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineTriggerGitConfigurationPushTags:PipelineTriggerGitConfigurationPushTags
export function codepipeline_PipelineTriggerGitConfigurationPushTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? [] : [""]);
  out.includes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:codepipeline/PipelineVariable:PipelineVariable
export function codepipeline_PipelineVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValue = "";
  out.description = "";
  out.name = ctx.name;
  return out;
}

// aws:codepipeline/WebhookAuthenticationConfiguration:WebhookAuthenticationConfiguration
export function codepipeline_WebhookAuthenticationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedIpRange = "";
  out.secretToken = "";
  return out;
}

// aws:codepipeline/WebhookFilter:WebhookFilter
export function codepipeline_WebhookFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsonPath = "";
  out.matchEquals = "";
  return out;
}
