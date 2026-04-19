// GENERATED FILE — do not edit.
// Service: ses   (12 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ses from "./ses.js";

// aws:ses/ConfigurationSetDeliveryOptions:ConfigurationSetDeliveryOptions
export function ses_ConfigurationSetDeliveryOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tlsPolicy = "";
  return out;
}

// aws:ses/ConfigurationSetTrackingOptions:ConfigurationSetTrackingOptions
export function ses_ConfigurationSetTrackingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRedirectDomain = h.endpoint(ctx, "customRedirectDomain");
  return out;
}

// aws:ses/EventDestinationCloudwatchDestination:EventDestinationCloudwatchDestination
export function ses_EventDestinationCloudwatchDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultValue = "";
  out.dimensionName = "";
  out.valueSource = "";
  return out;
}

// aws:ses/EventDestinationKinesisDestination:EventDestinationKinesisDestination
export function ses_EventDestinationKinesisDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = h.arn(ctx);
  out.streamArn = h.arn(ctx);
  return out;
}

// aws:ses/EventDestinationSnsDestination:EventDestinationSnsDestination
export function ses_EventDestinationSnsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:ses/ReceiptRuleAddHeaderAction:ReceiptRuleAddHeaderAction
export function ses_ReceiptRuleAddHeaderAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headerName = "";
  out.headerValue = "";
  out.position = 0;
  return out;
}

// aws:ses/ReceiptRuleBounceAction:ReceiptRuleBounceAction
export function ses_ReceiptRuleBounceAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = "";
  out.position = 0;
  out.sender = "";
  out.smtpReplyCode = "";
  out.statusCode = "";
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:ses/ReceiptRuleLambdaAction:ReceiptRuleLambdaAction
export function ses_ReceiptRuleLambdaAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.functionArn = h.arn(ctx);
  out.invocationType = "";
  out.position = 0;
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:ses/ReceiptRuleS3Action:ReceiptRuleS3Action
export function ses_ReceiptRuleS3Action(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.iamRoleArn = h.arn(ctx);
  out.kmsKeyArn = h.arn(ctx);
  out.objectKeyPrefix = "";
  out.position = 0;
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:ses/ReceiptRuleSnsAction:ReceiptRuleSnsAction
export function ses_ReceiptRuleSnsAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encoding = "";
  out.position = 0;
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:ses/ReceiptRuleStopAction:ReceiptRuleStopAction
export function ses_ReceiptRuleStopAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.position = 0;
  out.scope = "";
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:ses/ReceiptRuleWorkmailAction:ReceiptRuleWorkmailAction
export function ses_ReceiptRuleWorkmailAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.organizationArn = h.arn(ctx);
  out.position = 0;
  out.topicArn = h.arn(ctx);
  return out;
}
