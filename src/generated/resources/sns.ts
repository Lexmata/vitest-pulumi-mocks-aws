// GENERATED FILE — do not edit.
// Service: sns   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:sns/dataProtectionPolicy:DataProtectionPolicy
export function DataProtectionPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:sns/platformApplication:PlatformApplication
export function PlatformApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applePlatformBundleId = (i.applePlatformBundleId !== undefined ? i.applePlatformBundleId : h.id(ctx, "applePlatformBundleId"));
  out.applePlatformTeamId = (i.applePlatformTeamId !== undefined ? i.applePlatformTeamId : h.id(ctx, "applePlatformTeamId"));
  out.arn = h.arn(ctx);
  out.eventDeliveryFailureTopicArn = (i.eventDeliveryFailureTopicArn !== undefined ? i.eventDeliveryFailureTopicArn : h.arn(ctx));
  out.eventEndpointCreatedTopicArn = (i.eventEndpointCreatedTopicArn !== undefined ? i.eventEndpointCreatedTopicArn : h.arn(ctx));
  out.eventEndpointDeletedTopicArn = (i.eventEndpointDeletedTopicArn !== undefined ? i.eventEndpointDeletedTopicArn : h.arn(ctx));
  out.eventEndpointUpdatedTopicArn = (i.eventEndpointUpdatedTopicArn !== undefined ? i.eventEndpointUpdatedTopicArn : h.arn(ctx));
  out.failureFeedbackRoleArn = (i.failureFeedbackRoleArn !== undefined ? i.failureFeedbackRoleArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.platform = (i.platform !== undefined ? i.platform : "");
  out.platformCredential = (i.platformCredential !== undefined ? i.platformCredential : "");
  out.platformPrincipal = (i.platformPrincipal !== undefined ? i.platformPrincipal : "");
  out.successFeedbackRoleArn = (i.successFeedbackRoleArn !== undefined ? i.successFeedbackRoleArn : h.arn(ctx));
  out.successFeedbackSampleRate = (i.successFeedbackSampleRate !== undefined ? i.successFeedbackSampleRate : "");
  return out;
}

// aws:sns/smsPreferences:SmsPreferences
export function SmsPreferences(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSenderId = (i.defaultSenderId !== undefined ? i.defaultSenderId : h.id(ctx, "defaultSenderId"));
  out.defaultSmsType = (i.defaultSmsType !== undefined ? i.defaultSmsType : "");
  out.deliveryStatusIamRoleArn = (i.deliveryStatusIamRoleArn !== undefined ? i.deliveryStatusIamRoleArn : h.arn(ctx));
  out.deliveryStatusSuccessSamplingRate = (i.deliveryStatusSuccessSamplingRate !== undefined ? i.deliveryStatusSuccessSamplingRate : "");
  out.monthlySpendLimit = (i.monthlySpendLimit !== undefined ? i.monthlySpendLimit : 0);
  out.usageReportS3Bucket = (i.usageReportS3Bucket !== undefined ? i.usageReportS3Bucket : "");
  return out;
}

// aws:sns/topic:Topic
export function Topic(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationFailureFeedbackRoleArn = (i.applicationFailureFeedbackRoleArn !== undefined ? i.applicationFailureFeedbackRoleArn : h.arn(ctx));
  out.applicationSuccessFeedbackRoleArn = (i.applicationSuccessFeedbackRoleArn !== undefined ? i.applicationSuccessFeedbackRoleArn : h.arn(ctx));
  out.applicationSuccessFeedbackSampleRate = (i.applicationSuccessFeedbackSampleRate !== undefined ? i.applicationSuccessFeedbackSampleRate : 0);
  out.archivePolicy = (i.archivePolicy !== undefined ? i.archivePolicy : "");
  out.arn = undefined;
  out.beginningArchiveTime = "";
  out.contentBasedDeduplication = (i.contentBasedDeduplication !== undefined ? i.contentBasedDeduplication : false);
  out.deliveryPolicy = (i.deliveryPolicy !== undefined ? i.deliveryPolicy : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.fifoThroughputScope = (i.fifoThroughputScope !== undefined ? i.fifoThroughputScope : "");
  out.fifoTopic = (i.fifoTopic !== undefined ? i.fifoTopic : false);
  out.firehoseFailureFeedbackRoleArn = (i.firehoseFailureFeedbackRoleArn !== undefined ? i.firehoseFailureFeedbackRoleArn : h.arn(ctx));
  out.firehoseSuccessFeedbackRoleArn = (i.firehoseSuccessFeedbackRoleArn !== undefined ? i.firehoseSuccessFeedbackRoleArn : h.arn(ctx));
  out.firehoseSuccessFeedbackSampleRate = (i.firehoseSuccessFeedbackSampleRate !== undefined ? i.firehoseSuccessFeedbackSampleRate : 0);
  out.httpFailureFeedbackRoleArn = (i.httpFailureFeedbackRoleArn !== undefined ? i.httpFailureFeedbackRoleArn : h.arn(ctx));
  out.httpSuccessFeedbackRoleArn = (i.httpSuccessFeedbackRoleArn !== undefined ? i.httpSuccessFeedbackRoleArn : h.arn(ctx));
  out.httpSuccessFeedbackSampleRate = (i.httpSuccessFeedbackSampleRate !== undefined ? i.httpSuccessFeedbackSampleRate : 0);
  out.kmsMasterKeyId = (i.kmsMasterKeyId !== undefined ? i.kmsMasterKeyId : h.id(ctx, "kmsMasterKeyId"));
  out.lambdaFailureFeedbackRoleArn = (i.lambdaFailureFeedbackRoleArn !== undefined ? i.lambdaFailureFeedbackRoleArn : h.arn(ctx));
  out.lambdaSuccessFeedbackRoleArn = (i.lambdaSuccessFeedbackRoleArn !== undefined ? i.lambdaSuccessFeedbackRoleArn : h.arn(ctx));
  out.lambdaSuccessFeedbackSampleRate = (i.lambdaSuccessFeedbackSampleRate !== undefined ? i.lambdaSuccessFeedbackSampleRate : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.owner = ctx.accountId;
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.signatureVersion = (i.signatureVersion !== undefined ? i.signatureVersion : 0);
  out.sqsFailureFeedbackRoleArn = (i.sqsFailureFeedbackRoleArn !== undefined ? i.sqsFailureFeedbackRoleArn : h.arn(ctx));
  out.sqsSuccessFeedbackRoleArn = (i.sqsSuccessFeedbackRoleArn !== undefined ? i.sqsSuccessFeedbackRoleArn : h.arn(ctx));
  out.sqsSuccessFeedbackSampleRate = (i.sqsSuccessFeedbackSampleRate !== undefined ? i.sqsSuccessFeedbackSampleRate : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tracingConfig = (i.tracingConfig !== undefined ? i.tracingConfig : "");
  return out;
}

// aws:sns/topicPolicy:TopicPolicy
export function TopicPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.owner = ctx.accountId;
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:sns/topicSubscription:TopicSubscription
export function TopicSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.confirmationTimeoutInMinutes = (i.confirmationTimeoutInMinutes !== undefined ? i.confirmationTimeoutInMinutes : 30);
  out.confirmationWasAuthenticated = false;
  out.deliveryPolicy = (i.deliveryPolicy !== undefined ? i.deliveryPolicy : "");
  out.endpoint = (i.endpoint !== undefined ? i.endpoint : h.endpoint(ctx, "endpoint"));
  out.endpointAutoConfirms = (i.endpointAutoConfirms !== undefined ? i.endpointAutoConfirms : false);
  out.filterPolicy = (i.filterPolicy !== undefined ? i.filterPolicy : "");
  out.filterPolicyScope = (i.filterPolicyScope !== undefined ? i.filterPolicyScope : "");
  out.ownerId = ctx.accountId;
  out.pendingConfirmation = false;
  out.protocol = (i.protocol !== undefined ? i.protocol : "");
  out.rawMessageDelivery = (i.rawMessageDelivery !== undefined ? i.rawMessageDelivery : false);
  out.redrivePolicy = (i.redrivePolicy !== undefined ? i.redrivePolicy : "");
  out.replayPolicy = (i.replayPolicy !== undefined ? i.replayPolicy : "");
  out.subscriptionRoleArn = (i.subscriptionRoleArn !== undefined ? i.subscriptionRoleArn : h.arn(ctx));
  out.topic = (i.topic !== undefined ? i.topic : "");
  return out;
}
