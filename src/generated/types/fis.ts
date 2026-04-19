// GENERATED FILE — do not edit.
// Service: fis   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fis from "./fis.js";

// aws:fis/ExperimentTemplateAction:ExperimentTemplateAction
export function fis_ExperimentTemplateAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionId = h.id(ctx, "actionId");
  out.description = "";
  out.name = ctx.name;
  out.parameters = (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateActionParameter(ctx, depth + 1))]);
  out.startAfters = (depth > 4 ? [] : [""]);
  out.target = (depth > 4 ? {} : T_fis.fis_ExperimentTemplateActionTarget(ctx, depth + 1));
  return out;
}

// aws:fis/ExperimentTemplateActionParameter:ExperimentTemplateActionParameter
export function fis_ExperimentTemplateActionParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:fis/ExperimentTemplateActionTarget:ExperimentTemplateActionTarget
export function fis_ExperimentTemplateActionTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:fis/ExperimentTemplateExperimentOptions:ExperimentTemplateExperimentOptions
export function fis_ExperimentTemplateExperimentOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountTargeting = "";
  out.emptyTargetResolutionMode = "";
  return out;
}

// aws:fis/ExperimentTemplateExperimentReportConfiguration:ExperimentTemplateExperimentReportConfiguration
export function fis_ExperimentTemplateExperimentReportConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSources = (depth > 4 ? {} : T_fis.fis_ExperimentTemplateExperimentReportConfigurationDataSources(ctx, depth + 1));
  out.outputs = (depth > 4 ? {} : T_fis.fis_ExperimentTemplateExperimentReportConfigurationOutputs(ctx, depth + 1));
  out.postExperimentDuration = "";
  out.preExperimentDuration = "";
  return out;
}

// aws:fis/ExperimentTemplateExperimentReportConfigurationDataSources:ExperimentTemplateExperimentReportConfigurationDataSources
export function fis_ExperimentTemplateExperimentReportConfigurationDataSources(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchDashboards = (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard(ctx, depth + 1))]);
  return out;
}

// aws:fis/ExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard:ExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard
export function fis_ExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dashboardArn = h.arn(ctx);
  return out;
}

// aws:fis/ExperimentTemplateExperimentReportConfigurationOutputs:ExperimentTemplateExperimentReportConfigurationOutputs
export function fis_ExperimentTemplateExperimentReportConfigurationOutputs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Configuration = (depth > 4 ? {} : T_fis.fis_ExperimentTemplateExperimentReportConfigurationOutputsS3Configuration(ctx, depth + 1));
  return out;
}

// aws:fis/ExperimentTemplateExperimentReportConfigurationOutputsS3Configuration:ExperimentTemplateExperimentReportConfigurationOutputsS3Configuration
export function fis_ExperimentTemplateExperimentReportConfigurationOutputsS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.prefix = "";
  return out;
}

// aws:fis/ExperimentTemplateLogConfiguration:ExperimentTemplateLogConfiguration
export function fis_ExperimentTemplateLogConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogsConfiguration = (depth > 4 ? {} : T_fis.fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration(ctx, depth + 1));
  out.logSchemaVersion = 0;
  out.s3Configuration = (depth > 4 ? {} : T_fis.fis_ExperimentTemplateLogConfigurationS3Configuration(ctx, depth + 1));
  return out;
}

// aws:fis/ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration:ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration
export function fis_ExperimentTemplateLogConfigurationCloudwatchLogsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupArn = h.arn(ctx);
  return out;
}

// aws:fis/ExperimentTemplateLogConfigurationS3Configuration:ExperimentTemplateLogConfigurationS3Configuration
export function fis_ExperimentTemplateLogConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.prefix = "";
  return out;
}

// aws:fis/ExperimentTemplateStopCondition:ExperimentTemplateStopCondition
export function fis_ExperimentTemplateStopCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = "";
  out.value = "";
  return out;
}

// aws:fis/ExperimentTemplateTarget:ExperimentTemplateTarget
export function fis_ExperimentTemplateTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateTargetFilter(ctx, depth + 1))]);
  out.name = ctx.name;
  out.parameters = {};
  out.resourceArns = (depth > 4 ? [] : [""]);
  out.resourceTags = (depth > 4 ? [] : [(depth > 4 ? {} : T_fis.fis_ExperimentTemplateTargetResourceTag(ctx, depth + 1))]);
  out.resourceType = "";
  out.selectionMode = "";
  return out;
}

// aws:fis/ExperimentTemplateTargetFilter:ExperimentTemplateTargetFilter
export function fis_ExperimentTemplateTargetFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.path = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fis/ExperimentTemplateTargetResourceTag:ExperimentTemplateTargetResourceTag
export function fis_ExperimentTemplateTargetResourceTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}
