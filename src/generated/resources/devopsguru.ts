// GENERATED FILE — do not edit.
// Service: devopsguru   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_devopsguru from "../types/devopsguru.js";

// aws:devopsguru/eventSourcesConfig:EventSourcesConfig
export function EventSourcesConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventSources = (i.eventSources !== undefined ? i.eventSources : (depth > 4 ? [] : [(depth > 4 ? {} : T_devopsguru.devopsguru_EventSourcesConfigEventSource(ctx, depth + 1))]));
  return out;
}

// aws:devopsguru/notificationChannel:NotificationChannel
export function NotificationChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? {} : T_devopsguru.devopsguru_NotificationChannelFilters(ctx, depth + 1)));
  out.sns = (i.sns !== undefined ? i.sns : (depth > 4 ? {} : T_devopsguru.devopsguru_NotificationChannelSns(ctx, depth + 1)));
  return out;
}

// aws:devopsguru/resourceCollection:ResourceCollection
export function ResourceCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudformation = (i.cloudformation !== undefined ? i.cloudformation : (depth > 4 ? {} : T_devopsguru.devopsguru_ResourceCollectionCloudformation(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : (depth > 4 ? {} : T_devopsguru.devopsguru_ResourceCollectionTags(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:devopsguru/serviceIntegration:ServiceIntegration
export function ServiceIntegration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsServerSideEncryption = (i.kmsServerSideEncryption !== undefined ? i.kmsServerSideEncryption : (depth > 4 ? {} : T_devopsguru.devopsguru_ServiceIntegrationKmsServerSideEncryption(ctx, depth + 1)));
  out.logsAnomalyDetection = (i.logsAnomalyDetection !== undefined ? i.logsAnomalyDetection : (depth > 4 ? {} : T_devopsguru.devopsguru_ServiceIntegrationLogsAnomalyDetection(ctx, depth + 1)));
  out.opsCenter = (i.opsCenter !== undefined ? i.opsCenter : (depth > 4 ? {} : T_devopsguru.devopsguru_ServiceIntegrationOpsCenter(ctx, depth + 1)));
  return out;
}
