// GENERATED FILE — do not edit.
// Service: securitylake   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_securitylake from "../types/securitylake.js";

// aws:securitylake/awsLogSource:AwsLogSource
export function AwsLogSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_securitylake.securitylake_AwsLogSourceSource(ctx, depth + 1)));
  return out;
}

// aws:securitylake/customLogSource:CustomLogSource
export function CustomLogSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_securitylake.securitylake_CustomLogSourceAttribute(ctx, depth + 1))]);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_securitylake.securitylake_CustomLogSourceConfiguration(ctx, depth + 1)));
  out.eventClasses = (i.eventClasses !== undefined ? i.eventClasses : (depth > 4 ? [] : [""]));
  out.providerDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_securitylake.securitylake_CustomLogSourceProviderDetail(ctx, depth + 1))]);
  out.sourceName = (i.sourceName !== undefined ? i.sourceName : "");
  out.sourceVersion = (i.sourceVersion !== undefined ? i.sourceVersion : "");
  return out;
}

// aws:securitylake/dataLake:DataLake
export function DataLake(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_securitylake.securitylake_DataLakeConfiguration(ctx, depth + 1)));
  out.metaStoreManagerRoleArn = (i.metaStoreManagerRoleArn !== undefined ? i.metaStoreManagerRoleArn : h.arn(ctx));
  out.s3BucketArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_securitylake.securitylake_DataLakeTimeouts(ctx, depth + 1)));
  return out;
}

// aws:securitylake/subscriber:Subscriber
export function Subscriber(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessType = (i.accessType !== undefined ? i.accessType : "");
  out.arn = h.arn(ctx);
  out.resourceShareArn = h.arn(ctx);
  out.resourceShareName = "";
  out.roleArn = h.arn(ctx);
  out.s3BucketArn = h.arn(ctx);
  out.source = (i.source !== undefined ? i.source : (depth > 4 ? {} : T_securitylake.securitylake_SubscriberSource(ctx, depth + 1)));
  out.subscriberDescription = (i.subscriberDescription !== undefined ? i.subscriberDescription : "");
  out.subscriberEndpoint = h.endpoint(ctx, "subscriberEndpoint");
  out.subscriberIdentity = (i.subscriberIdentity !== undefined ? i.subscriberIdentity : (depth > 4 ? {} : T_securitylake.securitylake_SubscriberSubscriberIdentity(ctx, depth + 1)));
  out.subscriberName = (i.subscriberName !== undefined ? i.subscriberName : "");
  out.subscriberStatus = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_securitylake.securitylake_SubscriberTimeouts(ctx, depth + 1)));
  return out;
}

// aws:securitylake/subscriberNotification:SubscriberNotification
export function SubscriberNotification(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_securitylake.securitylake_SubscriberNotificationConfiguration(ctx, depth + 1)));
  out.endpointId = h.id(ctx, "endpointId");
  out.subscriberEndpoint = h.endpoint(ctx, "subscriberEndpoint");
  out.subscriberId = (i.subscriberId !== undefined ? i.subscriberId : h.id(ctx, "subscriberId"));
  return out;
}
