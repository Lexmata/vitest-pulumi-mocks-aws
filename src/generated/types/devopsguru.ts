// GENERATED FILE — do not edit.
// Service: devopsguru   (13 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_devopsguru from "./devopsguru.js";

// aws:devopsguru/EventSourcesConfigEventSource:EventSourcesConfigEventSource
export function devopsguru_EventSourcesConfigEventSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonCodeGuruProfilers = (depth > 4 ? [] : [(depth > 4 ? {} : T_devopsguru.devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler(ctx, depth + 1))]);
  return out;
}

// aws:devopsguru/EventSourcesConfigEventSourceAmazonCodeGuruProfiler:EventSourcesConfigEventSourceAmazonCodeGuruProfiler
export function devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.status = "active";
  return out;
}

// aws:devopsguru/NotificationChannelFilters:NotificationChannelFilters
export function devopsguru_NotificationChannelFilters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageTypes = (depth > 4 ? [] : [""]);
  out.severities = (depth > 4 ? [] : [""]);
  return out;
}

// aws:devopsguru/NotificationChannelSns:NotificationChannelSns
export function devopsguru_NotificationChannelSns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:devopsguru/ResourceCollectionCloudformation:ResourceCollectionCloudformation
export function devopsguru_ResourceCollectionCloudformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stackNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:devopsguru/ResourceCollectionTags:ResourceCollectionTags
export function devopsguru_ResourceCollectionTags(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appBoundaryKey = "";
  out.tagValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:devopsguru/ServiceIntegrationKmsServerSideEncryption:ServiceIntegrationKmsServerSideEncryption
export function devopsguru_ServiceIntegrationKmsServerSideEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.optInStatus = "";
  out.type = "";
  return out;
}

// aws:devopsguru/ServiceIntegrationLogsAnomalyDetection:ServiceIntegrationLogsAnomalyDetection
export function devopsguru_ServiceIntegrationLogsAnomalyDetection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optInStatus = "";
  return out;
}

// aws:devopsguru/ServiceIntegrationOpsCenter:ServiceIntegrationOpsCenter
export function devopsguru_ServiceIntegrationOpsCenter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optInStatus = "";
  return out;
}

// aws:devopsguru/getNotificationChannelFilter:getNotificationChannelFilter
export function devopsguru_getNotificationChannelFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.messageTypes = (depth > 4 ? [] : [""]);
  out.severities = (depth > 4 ? [] : [""]);
  return out;
}

// aws:devopsguru/getNotificationChannelSn:getNotificationChannelSn
export function devopsguru_getNotificationChannelSn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:devopsguru/getResourceCollectionCloudformation:getResourceCollectionCloudformation
export function devopsguru_getResourceCollectionCloudformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.stackNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:devopsguru/getResourceCollectionTag:getResourceCollectionTag
export function devopsguru_getResourceCollectionTag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appBoundaryKey = "";
  out.tagValues = (depth > 4 ? [] : [""]);
  return out;
}
