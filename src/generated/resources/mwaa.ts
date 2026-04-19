// GENERATED FILE — do not edit.
// Service: mwaa   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mwaa from "../types/mwaa.js";

// aws:mwaa/environment:Environment
export function Environment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.airflowConfigurationOptions = (i.airflowConfigurationOptions !== undefined ? i.airflowConfigurationOptions : {});
  out.airflowVersion = (i.airflowVersion !== undefined ? i.airflowVersion : "");
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.dagS3Path = (i.dagS3Path !== undefined ? i.dagS3Path : "");
  out.databaseVpcEndpointService = "";
  out.endpointManagement = (i.endpointManagement !== undefined ? i.endpointManagement : "");
  out.environmentClass = (i.environmentClass !== undefined ? i.environmentClass : "");
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.kmsKey = (i.kmsKey !== undefined ? i.kmsKey : "");
  out.lastUpdateds = (depth > 4 ? [] : [(depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLastUpdated(ctx, depth + 1))]);
  out.loggingConfiguration = (i.loggingConfiguration !== undefined ? i.loggingConfiguration : (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentLoggingConfiguration(ctx, depth + 1)));
  out.maxWebservers = (i.maxWebservers !== undefined ? i.maxWebservers : 0);
  out.maxWorkers = (i.maxWorkers !== undefined ? i.maxWorkers : 0);
  out.minWebservers = (i.minWebservers !== undefined ? i.minWebservers : 0);
  out.minWorkers = (i.minWorkers !== undefined ? i.minWorkers : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkConfiguration = (i.networkConfiguration !== undefined ? i.networkConfiguration : (depth > 4 ? {} : T_mwaa.mwaa_EnvironmentNetworkConfiguration(ctx, depth + 1)));
  out.pluginsS3ObjectVersion = (i.pluginsS3ObjectVersion !== undefined ? i.pluginsS3ObjectVersion : "");
  out.pluginsS3Path = (i.pluginsS3Path !== undefined ? i.pluginsS3Path : "");
  out.requirementsS3ObjectVersion = (i.requirementsS3ObjectVersion !== undefined ? i.requirementsS3ObjectVersion : "");
  out.requirementsS3Path = (i.requirementsS3Path !== undefined ? i.requirementsS3Path : "");
  out.schedulers = (i.schedulers !== undefined ? i.schedulers : 0);
  out.serviceRoleArn = h.arn(ctx);
  out.sourceBucketArn = (i.sourceBucketArn !== undefined ? i.sourceBucketArn : h.arn(ctx));
  out.startupScriptS3ObjectVersion = (i.startupScriptS3ObjectVersion !== undefined ? i.startupScriptS3ObjectVersion : "");
  out.startupScriptS3Path = (i.startupScriptS3Path !== undefined ? i.startupScriptS3Path : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.webserverAccessMode = (i.webserverAccessMode !== undefined ? i.webserverAccessMode : "");
  out.webserverUrl = h.endpoint(ctx, "webserverUrl");
  out.webserverVpcEndpointService = "";
  out.weeklyMaintenanceWindowStart = (i.weeklyMaintenanceWindowStart !== undefined ? i.weeklyMaintenanceWindowStart : "");
  return out;
}
