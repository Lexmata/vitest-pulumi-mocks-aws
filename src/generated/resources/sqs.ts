// GENERATED FILE — do not edit.
// Service: sqs   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:sqs/queue:Queue
export function Queue(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contentBasedDeduplication = (i.contentBasedDeduplication !== undefined ? i.contentBasedDeduplication : false);
  out.deduplicationScope = (i.deduplicationScope !== undefined ? i.deduplicationScope : "");
  out.delaySeconds = (i.delaySeconds !== undefined ? i.delaySeconds : 0);
  out.fifoQueue = (i.fifoQueue !== undefined ? i.fifoQueue : false);
  out.fifoThroughputLimit = (i.fifoThroughputLimit !== undefined ? i.fifoThroughputLimit : "");
  out.kmsDataKeyReusePeriodSeconds = (i.kmsDataKeyReusePeriodSeconds !== undefined ? i.kmsDataKeyReusePeriodSeconds : 0);
  out.kmsMasterKeyId = (i.kmsMasterKeyId !== undefined ? i.kmsMasterKeyId : h.id(ctx, "kmsMasterKeyId"));
  out.maxMessageSize = (i.maxMessageSize !== undefined ? i.maxMessageSize : 8);
  out.messageRetentionSeconds = (i.messageRetentionSeconds !== undefined ? i.messageRetentionSeconds : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.receiveWaitTimeSeconds = (i.receiveWaitTimeSeconds !== undefined ? i.receiveWaitTimeSeconds : 0);
  out.redriveAllowPolicy = (i.redriveAllowPolicy !== undefined ? i.redriveAllowPolicy : "");
  out.redrivePolicy = (i.redrivePolicy !== undefined ? i.redrivePolicy : "");
  out.sqsManagedSseEnabled = (i.sqsManagedSseEnabled !== undefined ? i.sqsManagedSseEnabled : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.url = h.endpoint(ctx, "url");
  out.visibilityTimeoutSeconds = (i.visibilityTimeoutSeconds !== undefined ? i.visibilityTimeoutSeconds : 30);
  return out;
}

// aws:sqs/queuePolicy:QueuePolicy
export function QueuePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.queueUrl = (i.queueUrl !== undefined ? i.queueUrl : h.endpoint(ctx, "queueUrl"));
  return out;
}

// aws:sqs/redriveAllowPolicy:RedriveAllowPolicy
export function RedriveAllowPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queueUrl = (i.queueUrl !== undefined ? i.queueUrl : h.endpoint(ctx, "queueUrl"));
  out.redriveAllowPolicy = (i.redriveAllowPolicy !== undefined ? i.redriveAllowPolicy : "");
  return out;
}

// aws:sqs/redrivePolicy:RedrivePolicy
export function RedrivePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queueUrl = (i.queueUrl !== undefined ? i.queueUrl : h.endpoint(ctx, "queueUrl"));
  out.redrivePolicy = (i.redrivePolicy !== undefined ? i.redrivePolicy : "");
  return out;
}
