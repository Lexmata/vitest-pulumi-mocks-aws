// GENERATED FILE — do not edit.
// Service: mwaa   (9 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mwaa from "./mwaa.js";

// aws:mwaa/EnvironmentLastUpdated:EnvironmentLastUpdated
export function mwaa_EnvironmentLastUpdated(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createdAt = h.timestamp();
  out.errors = (depth > 4 ? [] : [(depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLastUpdatedError(ctx, depth + 1))]);
  out.status = "active";
  return out;
}

// aws:mwaa/EnvironmentLastUpdatedError:EnvironmentLastUpdatedError
export function mwaa_EnvironmentLastUpdatedError(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.errorCode = "";
  out.errorMessage = "";
  return out;
}

// aws:mwaa/EnvironmentLoggingConfiguration:EnvironmentLoggingConfiguration
export function mwaa_EnvironmentLoggingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dagProcessingLogs = (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLoggingConfigurationDagProcessingLogs(ctx, depth + 1));
  out.schedulerLogs = (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLoggingConfigurationSchedulerLogs(ctx, depth + 1));
  out.taskLogs = (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLoggingConfigurationTaskLogs(ctx, depth + 1));
  out.webserverLogs = (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLoggingConfigurationWebserverLogs(ctx, depth + 1));
  out.workerLogs = (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLoggingConfigurationWorkerLogs(ctx, depth + 1));
  return out;
}

// aws:mwaa/EnvironmentLoggingConfigurationDagProcessingLogs:EnvironmentLoggingConfigurationDagProcessingLogs
export function mwaa_EnvironmentLoggingConfigurationDagProcessingLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logLevel = "";
  return out;
}

// aws:mwaa/EnvironmentLoggingConfigurationSchedulerLogs:EnvironmentLoggingConfigurationSchedulerLogs
export function mwaa_EnvironmentLoggingConfigurationSchedulerLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logLevel = "";
  return out;
}

// aws:mwaa/EnvironmentLoggingConfigurationTaskLogs:EnvironmentLoggingConfigurationTaskLogs
export function mwaa_EnvironmentLoggingConfigurationTaskLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logLevel = "";
  return out;
}

// aws:mwaa/EnvironmentLoggingConfigurationWebserverLogs:EnvironmentLoggingConfigurationWebserverLogs
export function mwaa_EnvironmentLoggingConfigurationWebserverLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logLevel = "";
  return out;
}

// aws:mwaa/EnvironmentLoggingConfigurationWorkerLogs:EnvironmentLoggingConfigurationWorkerLogs
export function mwaa_EnvironmentLoggingConfigurationWorkerLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logLevel = "";
  return out;
}

// aws:mwaa/EnvironmentNetworkConfiguration:EnvironmentNetworkConfiguration
export function mwaa_EnvironmentNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}
