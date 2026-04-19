// GENERATED FILE — do not edit.
// Service: chimesdkmediapipelines   (15 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_chimesdkmediapipelines from "./chimesdkmediapipelines.js";

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElement:MediaInsightsPipelineConfigurationElement
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonTranscribeCallAnalyticsProcessorConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration(ctx, depth + 1));
  out.amazonTranscribeProcessorConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration(ctx, depth + 1));
  out.kinesisDataStreamSinkConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration(ctx, depth + 1));
  out.lambdaFunctionSinkConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration(ctx, depth + 1));
  out.s3RecordingSinkConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration(ctx, depth + 1));
  out.snsTopicSinkConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration(ctx, depth + 1));
  out.sqsQueueSinkConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration(ctx, depth + 1));
  out.type = "";
  out.voiceAnalyticsProcessorConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration(ctx, depth + 1));
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration:MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.callAnalyticsStreamCategories = (depth > 4 ? [] : [""]);
  out.contentIdentificationType = "";
  out.contentRedactionType = "";
  out.enablePartialResultsStabilization = true;
  out.filterPartialResults = false;
  out.languageCode = "";
  out.languageModelName = "";
  out.partialResultsStability = "";
  out.piiEntityTypes = "";
  out.postCallAnalyticsSettings = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings(ctx, depth + 1));
  out.vocabularyFilterMethod = "";
  out.vocabularyFilterName = "";
  out.vocabularyName = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings:MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentRedactionOutput = "";
  out.dataAccessRoleArn = h.arn(ctx);
  out.outputEncryptionKmsKeyId = h.id(ctx, "outputEncryptionKmsKeyId");
  out.outputLocation = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration:MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentIdentificationType = "";
  out.contentRedactionType = "";
  out.enablePartialResultsStabilization = true;
  out.filterPartialResults = false;
  out.languageCode = "";
  out.languageModelName = "";
  out.partialResultsStability = "";
  out.piiEntityTypes = "";
  out.showSpeakerLabel = false;
  out.vocabularyFilterMethod = "";
  out.vocabularyFilterName = "";
  out.vocabularyName = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration:MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insightsTarget = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration:MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insightsTarget = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration:MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration:MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insightsTarget = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration:MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insightsTarget = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration:MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.speakerSearchStatus = "";
  out.voiceToneAnalysisStatus = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationRealTimeAlertConfiguration:MediaInsightsPipelineConfigurationRealTimeAlertConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.disabled = false;
  out.rules = (depth > 4 ? [] : [(depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule(ctx, depth + 1))]);
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule:MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.issueDetectionConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration(ctx, depth + 1));
  out.keywordMatchConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration(ctx, depth + 1));
  out.sentimentConfiguration = (depth > 4 ? {} : T_chimesdkmediapipelines.chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration:MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleName = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration:MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keywords = (depth > 4 ? [] : [""]);
  out.negate = false;
  out.ruleName = "";
  return out;
}

// aws:chimesdkmediapipelines/MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration:MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration
export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleName = "";
  out.sentimentType = "";
  out.timePeriod = 0;
  return out;
}
