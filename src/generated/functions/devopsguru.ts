// GENERATED FILE — do not edit.
// Service: devopsguru   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_devopsguru from "../types/devopsguru.js";

// aws:devopsguru/getNotificationChannel:getNotificationChannel
export function getNotificationChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_devopsguru.devopsguru_getNotificationChannelFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.sns = (i.sns !== undefined ? i.sns : (depth > 4 ? [] : [(depth > 4 ? {} : T_devopsguru.devopsguru_getNotificationChannelSn(ctx, depth + 1))]));
  return out;
}

// aws:devopsguru/getResourceCollection:getResourceCollection
export function getResourceCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudformations = (i.cloudformations !== undefined ? i.cloudformations : (depth > 4 ? [] : [(depth > 4 ? {} : T_devopsguru.devopsguru_getResourceCollectionCloudformation(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : (depth > 4 ? [] : [(depth > 4 ? {} : T_devopsguru.devopsguru_getResourceCollectionTag(ctx, depth + 1))]));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}
