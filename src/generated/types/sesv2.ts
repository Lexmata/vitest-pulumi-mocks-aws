// GENERATED FILE — do not edit.
// Service: sesv2   (29 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sesv2 from "./sesv2.js";

// aws:sesv2/AccountVdmAttributesDashboardAttributes:AccountVdmAttributesDashboardAttributes
export function sesv2_AccountVdmAttributesDashboardAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engagementMetrics = "";
  return out;
}

// aws:sesv2/AccountVdmAttributesGuardianAttributes:AccountVdmAttributesGuardianAttributes
export function sesv2_AccountVdmAttributesGuardianAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optimizedSharedDelivery = "";
  return out;
}

// aws:sesv2/ConfigurationSetDeliveryOptions:ConfigurationSetDeliveryOptions
export function sesv2_ConfigurationSetDeliveryOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxDeliverySeconds = 0;
  out.sendingPoolName = "";
  out.tlsPolicy = "";
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestination:ConfigurationSetEventDestinationEventDestination
export function sesv2_ConfigurationSetEventDestinationEventDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudWatchDestination = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination(ctx, depth + 1));
  out.enabled = true;
  out.eventBridgeDestination = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestinationEventBridgeDestination(ctx, depth + 1));
  out.kinesisFirehoseDestination = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination(ctx, depth + 1));
  out.matchingEventTypes = (depth > 4 ? [] : [""]);
  out.pinpointDestination = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination(ctx, depth + 1));
  out.snsDestination = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination(ctx, depth + 1));
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestinationCloudWatchDestination:ConfigurationSetEventDestinationEventDestinationCloudWatchDestination
export function sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration:ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration
export function sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultDimensionValue = "";
  out.dimensionName = "";
  out.dimensionValueSource = "";
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestinationEventBridgeDestination:ConfigurationSetEventDestinationEventDestinationEventBridgeDestination
export function sesv2_ConfigurationSetEventDestinationEventDestinationEventBridgeDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventBusArn = h.arn(ctx);
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination:ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
export function sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStreamArn = h.arn(ctx);
  out.iamRoleArn = h.arn(ctx);
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestinationPinpointDestination:ConfigurationSetEventDestinationEventDestinationPinpointDestination
export function sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = h.arn(ctx);
  return out;
}

// aws:sesv2/ConfigurationSetEventDestinationEventDestinationSnsDestination:ConfigurationSetEventDestinationEventDestinationSnsDestination
export function sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.topicArn = h.arn(ctx);
  return out;
}

// aws:sesv2/ConfigurationSetReputationOptions:ConfigurationSetReputationOptions
export function sesv2_ConfigurationSetReputationOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lastFreshStart = "";
  out.reputationMetricsEnabled = false;
  return out;
}

// aws:sesv2/ConfigurationSetSendingOptions:ConfigurationSetSendingOptions
export function sesv2_ConfigurationSetSendingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sendingEnabled = false;
  return out;
}

// aws:sesv2/ConfigurationSetSuppressionOptions:ConfigurationSetSuppressionOptions
export function sesv2_ConfigurationSetSuppressionOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.suppressedReasons = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sesv2/ConfigurationSetTrackingOptions:ConfigurationSetTrackingOptions
export function sesv2_ConfigurationSetTrackingOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRedirectDomain = h.endpoint(ctx, "customRedirectDomain");
  out.httpsPolicy = "";
  return out;
}

// aws:sesv2/ConfigurationSetVdmOptions:ConfigurationSetVdmOptions
export function sesv2_ConfigurationSetVdmOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dashboardOptions = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetVdmOptionsDashboardOptions(ctx, depth + 1));
  out.guardianOptions = (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetVdmOptionsGuardianOptions(ctx, depth + 1));
  return out;
}

// aws:sesv2/ConfigurationSetVdmOptionsDashboardOptions:ConfigurationSetVdmOptionsDashboardOptions
export function sesv2_ConfigurationSetVdmOptionsDashboardOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engagementMetrics = "";
  return out;
}

// aws:sesv2/ConfigurationSetVdmOptionsGuardianOptions:ConfigurationSetVdmOptionsGuardianOptions
export function sesv2_ConfigurationSetVdmOptionsGuardianOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optimizedSharedDelivery = "";
  return out;
}

// aws:sesv2/ContactListTopic:ContactListTopic
export function sesv2_ContactListTopic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSubscriptionStatus = "";
  out.description = "";
  out.displayName = "";
  out.topicName = "";
  return out;
}

// aws:sesv2/EmailIdentityDkimSigningAttributes:EmailIdentityDkimSigningAttributes
export function sesv2_EmailIdentityDkimSigningAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.currentSigningKeyLength = "";
  out.domainSigningPrivateKey = "";
  out.domainSigningSelector = "";
  out.lastKeyGenerationTimestamp = "";
  out.nextSigningKeyLength = "";
  out.signingAttributesOrigin = "";
  out.status = "active";
  out.tokens = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sesv2/getConfigurationSetDeliveryOption:getConfigurationSetDeliveryOption
export function sesv2_getConfigurationSetDeliveryOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxDeliverySeconds = 0;
  out.sendingPoolName = "";
  out.tlsPolicy = "";
  return out;
}

// aws:sesv2/getConfigurationSetReputationOption:getConfigurationSetReputationOption
export function sesv2_getConfigurationSetReputationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lastFreshStart = "";
  out.reputationMetricsEnabled = false;
  return out;
}

// aws:sesv2/getConfigurationSetSendingOption:getConfigurationSetSendingOption
export function sesv2_getConfigurationSetSendingOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sendingEnabled = false;
  return out;
}

// aws:sesv2/getConfigurationSetSuppressionOption:getConfigurationSetSuppressionOption
export function sesv2_getConfigurationSetSuppressionOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.suppressedReasons = (depth > 4 ? [] : [""]);
  return out;
}

// aws:sesv2/getConfigurationSetTrackingOption:getConfigurationSetTrackingOption
export function sesv2_getConfigurationSetTrackingOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRedirectDomain = h.endpoint(ctx, "customRedirectDomain");
  out.httpsPolicy = "";
  return out;
}

// aws:sesv2/getConfigurationSetVdmOption:getConfigurationSetVdmOption
export function sesv2_getConfigurationSetVdmOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dashboardOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetVdmOptionDashboardOption(ctx, depth + 1))]);
  out.guardianOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetVdmOptionGuardianOption(ctx, depth + 1))]);
  return out;
}

// aws:sesv2/getConfigurationSetVdmOptionDashboardOption:getConfigurationSetVdmOptionDashboardOption
export function sesv2_getConfigurationSetVdmOptionDashboardOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engagementMetrics = "";
  return out;
}

// aws:sesv2/getConfigurationSetVdmOptionGuardianOption:getConfigurationSetVdmOptionGuardianOption
export function sesv2_getConfigurationSetVdmOptionGuardianOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.optimizedSharedDelivery = "";
  return out;
}

// aws:sesv2/getDedicatedIpPoolDedicatedIp:getDedicatedIpPoolDedicatedIp
export function sesv2_getDedicatedIpPoolDedicatedIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ip = "";
  out.warmupPercentage = 0;
  out.warmupStatus = "";
  return out;
}

// aws:sesv2/getEmailIdentityDkimSigningAttribute:getEmailIdentityDkimSigningAttribute
export function sesv2_getEmailIdentityDkimSigningAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.currentSigningKeyLength = "";
  out.domainSigningPrivateKey = "";
  out.domainSigningSelector = "";
  out.lastKeyGenerationTimestamp = "";
  out.nextSigningKeyLength = "";
  out.signingAttributesOrigin = "";
  out.status = "active";
  out.tokens = (depth > 4 ? [] : [""]);
  return out;
}
