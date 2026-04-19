// GENERATED FILE — do not edit.
// Service: timestreamquery   (31 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreamquery from "./timestreamquery.js";

// aws:timestreamquery/ScheduledQueryErrorReportConfiguration:ScheduledQueryErrorReportConfiguration
export function timestreamquery_ScheduledQueryErrorReportConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Configuration = (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryErrorReportConfigurationS3Configuration(ctx, depth + 1));
  return out;
}

// aws:timestreamquery/ScheduledQueryErrorReportConfigurationS3Configuration:ScheduledQueryErrorReportConfigurationS3Configuration
export function timestreamquery_ScheduledQueryErrorReportConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.encryptionOption = "";
  out.objectKeyPrefix = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummary:ScheduledQueryLastRunSummary
export function timestreamquery_ScheduledQueryLastRunSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorReportLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryErrorReportLocation(ctx, depth + 1))]);
  out.executionStats = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryExecutionStat(ctx, depth + 1))]);
  out.failureReason = "";
  out.invocationTime = "";
  out.queryInsightsResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponse(ctx, depth + 1))]);
  out.runStatus = "";
  out.triggerTime = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryErrorReportLocation:ScheduledQueryLastRunSummaryErrorReportLocation
export function timestreamquery_ScheduledQueryLastRunSummaryErrorReportLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3ReportLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation:ScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation
export function timestreamquery_ScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.objectKey = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryExecutionStat:ScheduledQueryLastRunSummaryExecutionStat
export function timestreamquery_ScheduledQueryLastRunSummaryExecutionStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bytesMetered = 0;
  out.cumulativeBytesScanned = 0;
  out.dataWrites = 0;
  out.executionTimeInMillis = 0;
  out.queryResultRows = 0;
  out.recordsIngested = 0;
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryQueryInsightsResponse:ScheduledQueryLastRunSummaryQueryInsightsResponse
export function timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputBytes = 0;
  out.outputRows = 0;
  out.querySpatialCoverages = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage(ctx, depth + 1))]);
  out.queryTableCount = 1;
  out.queryTemporalRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage:ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage
export function timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxes = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxis(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxis:ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxis
export function timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKeys = (depth > 4 ? [] : [""]);
  out.tableArn = h.arn(ctx);
  out.value = 0;
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange:ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange
export function timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxes = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxis(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxis:ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxis
export function timestreamquery_ScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tableArn = h.arn(ctx);
  out.value = 0;
  return out;
}

// aws:timestreamquery/ScheduledQueryNotificationConfiguration:ScheduledQueryNotificationConfiguration
export function timestreamquery_ScheduledQueryNotificationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.snsConfiguration = (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryNotificationConfigurationSnsConfiguration(ctx, depth + 1));
  return out;
}

// aws:timestreamquery/ScheduledQueryNotificationConfigurationSnsConfiguration:ScheduledQueryNotificationConfigurationSnsConfiguration
export function timestreamquery_ScheduledQueryNotificationConfigurationSnsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRun:ScheduledQueryRecentlyFailedRun
export function timestreamquery_ScheduledQueryRecentlyFailedRun(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorReportLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunErrorReportLocation(ctx, depth + 1))]);
  out.executionStats = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunExecutionStat(ctx, depth + 1))]);
  out.failureReason = "";
  out.invocationTime = "";
  out.queryInsightsResponses = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponse(ctx, depth + 1))]);
  out.runStatus = "";
  out.triggerTime = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunErrorReportLocation:ScheduledQueryRecentlyFailedRunErrorReportLocation
export function timestreamquery_ScheduledQueryRecentlyFailedRunErrorReportLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3ReportLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunErrorReportLocationS3ReportLocation(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunErrorReportLocationS3ReportLocation:ScheduledQueryRecentlyFailedRunErrorReportLocationS3ReportLocation
export function timestreamquery_ScheduledQueryRecentlyFailedRunErrorReportLocationS3ReportLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.objectKey = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunExecutionStat:ScheduledQueryRecentlyFailedRunExecutionStat
export function timestreamquery_ScheduledQueryRecentlyFailedRunExecutionStat(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bytesMetered = 0;
  out.cumulativeBytesScanned = 0;
  out.dataWrites = 0;
  out.executionTimeInMillis = 0;
  out.queryResultRows = 0;
  out.recordsIngested = 0;
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunQueryInsightsResponse:ScheduledQueryRecentlyFailedRunQueryInsightsResponse
export function timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.outputBytes = 0;
  out.outputRows = 0;
  out.querySpatialCoverages = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverage(ctx, depth + 1))]);
  out.queryTableCount = 1;
  out.queryTemporalRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRange(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverage:ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverage
export function timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverage(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxes = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverageMaxis(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverageMaxis:ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverageMaxis
export function timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQuerySpatialCoverageMaxis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.partitionKeys = (depth > 4 ? [] : [""]);
  out.tableArn = h.arn(ctx);
  out.value = 0;
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRange:ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRange
export function timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxes = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRangeMaxis(ctx, depth + 1))]);
  return out;
}

// aws:timestreamquery/ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRangeMaxis:ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRangeMaxis
export function timestreamquery_ScheduledQueryRecentlyFailedRunQueryInsightsResponseQueryTemporalRangeMaxis(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tableArn = h.arn(ctx);
  out.value = 0;
  return out;
}

// aws:timestreamquery/ScheduledQueryScheduleConfiguration:ScheduledQueryScheduleConfiguration
export function timestreamquery_ScheduledQueryScheduleConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scheduleExpression = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfiguration:ScheduledQueryTargetConfiguration
export function timestreamquery_ScheduledQueryTargetConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.timestreamConfiguration = (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfiguration(ctx, depth + 1));
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfigurationTimestreamConfiguration:ScheduledQueryTargetConfigurationTimestreamConfiguration
export function timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.databaseName = "";
  out.dimensionMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping(ctx, depth + 1))]);
  out.measureNameColumn = "";
  out.mixedMeasureMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping(ctx, depth + 1))]);
  out.multiMeasureMappings = (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings(ctx, depth + 1));
  out.tableName = "";
  out.timeColumn = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping:ScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping
export function timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensionValueType = "";
  out.name = ctx.name;
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping:ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping
export function timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.measureName = "";
  out.measureValueType = "";
  out.multiMeasureAttributeMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping(ctx, depth + 1))]);
  out.sourceColumn = "";
  out.targetMeasureName = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping:ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping
export function timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.measureValueType = "";
  out.sourceColumn = "";
  out.targetMultiMeasureAttributeName = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings:ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings
export function timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.multiMeasureAttributeMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping(ctx, depth + 1))]);
  out.targetMultiMeasureName = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping:ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping
export function timestreamquery_ScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.measureValueType = "";
  out.sourceColumn = "";
  out.targetMultiMeasureAttributeName = "";
  return out;
}

// aws:timestreamquery/ScheduledQueryTimeouts:ScheduledQueryTimeouts
export function timestreamquery_ScheduledQueryTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}
