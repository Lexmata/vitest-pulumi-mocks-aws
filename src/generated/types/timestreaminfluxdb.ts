// GENERATED FILE — do not edit.
// Service: timestreaminfluxdb   (3 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreaminfluxdb from "./timestreaminfluxdb.js";

// aws:timestreaminfluxdb/DbInstanceLogDeliveryConfiguration:DbInstanceLogDeliveryConfiguration
export function timestreaminfluxdb_DbInstanceLogDeliveryConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Configuration = (depth > 4 ? {} : T_timestreaminfluxdb.timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration(ctx, depth + 1));
  return out;
}

// aws:timestreaminfluxdb/DbInstanceLogDeliveryConfigurationS3Configuration:DbInstanceLogDeliveryConfigurationS3Configuration
export function timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.enabled = true;
  return out;
}

// aws:timestreaminfluxdb/DbInstanceTimeouts:DbInstanceTimeouts
export function timestreaminfluxdb_DbInstanceTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}
