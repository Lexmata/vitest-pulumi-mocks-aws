// GENERATED FILE — do not edit.
// Service: kinesis   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kinesis from "../types/kinesis.js";

// aws:kinesis/getFirehoseDeliveryStream:getFirehoseDeliveryStream
export function getFirehoseDeliveryStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:kinesis/getStream:getStream
export function getStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.closedShards = (depth > 4 ? [] : [""]);
  out.creationTimestamp = 0;
  out.encryptionType = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.openShards = (depth > 4 ? [] : [""]);
  out.retentionPeriod = 0;
  out.shardLevelMetrics = (depth > 4 ? [] : [""]);
  out.status = "active";
  out.streamModeDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_kinesis.kinesis_getStreamStreamModeDetail(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:kinesis/getStreamConsumer:getStreamConsumer
export function getStreamConsumer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.creationTimestamp = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.status = "active";
  out.streamArn = (i.streamArn !== undefined ? i.streamArn : h.arn(ctx));
  return out;
}
