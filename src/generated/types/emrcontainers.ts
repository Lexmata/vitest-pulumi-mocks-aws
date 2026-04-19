// GENERATED FILE — do not edit.
// Service: emrcontainers   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emrcontainers from "./emrcontainers.js";

// aws:emrcontainers/JobTemplateJobTemplateData:JobTemplateJobTemplateData
export function emrcontainers_JobTemplateJobTemplateData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationOverrides = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides(ctx, depth + 1));
  out.executionRoleArn = h.arn(ctx);
  out.jobDriver = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataJobDriver(ctx, depth + 1));
  out.jobTags = {};
  out.releaseLabel = "";
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataConfigurationOverrides:JobTemplateJobTemplateDataConfigurationOverrides
export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration(ctx, depth + 1))]);
  out.monitoringConfiguration = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration(ctx, depth + 1));
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration:JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration
export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration(ctx, depth + 1))]);
  out.properties = {};
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration:JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration
export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.classification = "";
  out.properties = {};
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration:JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration
export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchMonitoringConfiguration = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration(ctx, depth + 1));
  out.persistentAppUi = "";
  out.s3MonitoringConfiguration = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration(ctx, depth + 1));
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration:JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration
export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupName = "";
  out.logStreamNamePrefix = "";
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration:JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration
export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logUri = h.endpoint(ctx, "logUri");
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataJobDriver:JobTemplateJobTemplateDataJobDriver
export function emrcontainers_JobTemplateJobTemplateDataJobDriver(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sparkSqlJobDriver = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver(ctx, depth + 1));
  out.sparkSubmitJobDriver = (depth > 4 ? {} : T_emrcontainers.emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver(ctx, depth + 1));
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver:JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver
export function emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entryPoint = "";
  out.sparkSqlParameters = "";
  return out;
}

// aws:emrcontainers/JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver:JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver
export function emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entryPoint = "";
  out.entryPointArguments = (depth > 4 ? [] : [""]);
  out.sparkSubmitParameters = "";
  return out;
}

// aws:emrcontainers/VirtualClusterContainerProvider:VirtualClusterContainerProvider
export function emrcontainers_VirtualClusterContainerProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.info = (depth > 4 ? {} : T_emrcontainers.emrcontainers_VirtualClusterContainerProviderInfo(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:emrcontainers/VirtualClusterContainerProviderInfo:VirtualClusterContainerProviderInfo
export function emrcontainers_VirtualClusterContainerProviderInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eksInfo = (depth > 4 ? {} : T_emrcontainers.emrcontainers_VirtualClusterContainerProviderInfoEksInfo(ctx, depth + 1));
  return out;
}

// aws:emrcontainers/VirtualClusterContainerProviderInfoEksInfo:VirtualClusterContainerProviderInfoEksInfo
export function emrcontainers_VirtualClusterContainerProviderInfoEksInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespace = "";
  return out;
}

// aws:emrcontainers/getVirtualClusterContainerProvider:getVirtualClusterContainerProvider
export function emrcontainers_getVirtualClusterContainerProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.infos = (depth > 4 ? [] : [(depth > 4 ? {} : T_emrcontainers.emrcontainers_getVirtualClusterContainerProviderInfo(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:emrcontainers/getVirtualClusterContainerProviderInfo:getVirtualClusterContainerProviderInfo
export function emrcontainers_getVirtualClusterContainerProviderInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eksInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_emrcontainers.emrcontainers_getVirtualClusterContainerProviderInfoEksInfo(ctx, depth + 1))]);
  return out;
}

// aws:emrcontainers/getVirtualClusterContainerProviderInfoEksInfo:getVirtualClusterContainerProviderInfoEksInfo
export function emrcontainers_getVirtualClusterContainerProviderInfoEksInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespace = "";
  return out;
}
