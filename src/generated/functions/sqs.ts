// GENERATED FILE — do not edit.
// Service: sqs   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:sqs/getQueue:getQueue
export function getQueue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.url = h.endpoint(ctx, "url");
  return out;
}

// aws:sqs/getQueues:getQueues
export function getQueues(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.queueNamePrefix = (i.queueNamePrefix !== undefined ? i.queueNamePrefix : "");
  out.queueUrls = (depth > 4 ? [] : [""]);
  return out;
}
