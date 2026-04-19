// GENERATED FILE — do not edit.
// Service: kinesisanalyticsv2   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kinesisanalyticsv2 from "../types/kinesisanalyticsv2.js";

// aws:kinesisanalyticsv2/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationConfiguration = (i.applicationConfiguration !== undefined ? i.applicationConfiguration : (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationApplicationConfiguration(ctx, depth + 1)));
  out.applicationMode = (i.applicationMode !== undefined ? i.applicationMode : "");
  out.arn = h.arn(ctx);
  out.cloudwatchLoggingOptions = (i.cloudwatchLoggingOptions !== undefined ? i.cloudwatchLoggingOptions : (depth > 4 ? {} : T_kinesisanalyticsv2.kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions(ctx, depth + 1)));
  out.createTimestamp = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.forceStop = (i.forceStop !== undefined ? i.forceStop : false);
  out.lastUpdateTimestamp = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.runtimeEnvironment = (i.runtimeEnvironment !== undefined ? i.runtimeEnvironment : "");
  out.serviceExecutionRole = (i.serviceExecutionRole !== undefined ? i.serviceExecutionRole : "");
  out.startApplication = (i.startApplication !== undefined ? i.startApplication : false);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.versionId = 0;
  return out;
}

// aws:kinesisanalyticsv2/applicationSnapshot:ApplicationSnapshot
export function ApplicationSnapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationName = (i.applicationName !== undefined ? i.applicationName : "");
  out.applicationVersionId = 0;
  out.snapshotCreationTimestamp = "";
  out.snapshotName = (i.snapshotName !== undefined ? i.snapshotName : "");
  return out;
}
