// GENERATED FILE — do not edit.
// Service: sesv2   (11 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sesv2 from "../types/sesv2.js";

// aws:sesv2/accountSuppressionAttributes:AccountSuppressionAttributes
export function AccountSuppressionAttributes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.suppressedReasons = (i.suppressedReasons !== undefined ? i.suppressedReasons : (depth > 4 ? [] : [""]));
  return out;
}

// aws:sesv2/accountVdmAttributes:AccountVdmAttributes
export function AccountVdmAttributes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dashboardAttributes = (i.dashboardAttributes !== undefined ? i.dashboardAttributes : (depth > 4 ? {} : T_sesv2.sesv2_AccountVdmAttributesDashboardAttributes(ctx, depth + 1)));
  out.guardianAttributes = (i.guardianAttributes !== undefined ? i.guardianAttributes : (depth > 4 ? {} : T_sesv2.sesv2_AccountVdmAttributesGuardianAttributes(ctx, depth + 1)));
  out.vdmEnabled = (i.vdmEnabled !== undefined ? i.vdmEnabled : "");
  return out;
}

// aws:sesv2/configurationSet:ConfigurationSet
export function ConfigurationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurationSetName = (i.configurationSetName !== undefined ? i.configurationSetName : "");
  out.deliveryOptions = (i.deliveryOptions !== undefined ? i.deliveryOptions : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetDeliveryOptions(ctx, depth + 1)));
  out.reputationOptions = (i.reputationOptions !== undefined ? i.reputationOptions : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetReputationOptions(ctx, depth + 1)));
  out.sendingOptions = (i.sendingOptions !== undefined ? i.sendingOptions : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetSendingOptions(ctx, depth + 1)));
  out.suppressionOptions = (i.suppressionOptions !== undefined ? i.suppressionOptions : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetSuppressionOptions(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trackingOptions = (i.trackingOptions !== undefined ? i.trackingOptions : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetTrackingOptions(ctx, depth + 1)));
  out.vdmOptions = (i.vdmOptions !== undefined ? i.vdmOptions : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetVdmOptions(ctx, depth + 1)));
  return out;
}

// aws:sesv2/configurationSetEventDestination:ConfigurationSetEventDestination
export function ConfigurationSetEventDestination(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationSetName = (i.configurationSetName !== undefined ? i.configurationSetName : "");
  out.eventDestination = (i.eventDestination !== undefined ? i.eventDestination : (depth > 4 ? {} : T_sesv2.sesv2_ConfigurationSetEventDestinationEventDestination(ctx, depth + 1)));
  out.eventDestinationName = (i.eventDestinationName !== undefined ? i.eventDestinationName : "");
  return out;
}

// aws:sesv2/contactList:ContactList
export function ContactList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contactListName = (i.contactListName !== undefined ? i.contactListName : "");
  out.createdTimestamp = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.lastUpdatedTimestamp = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.topics = (i.topics !== undefined ? i.topics : (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_ContactListTopic(ctx, depth + 1))]));
  return out;
}

// aws:sesv2/dedicatedIpAssignment:DedicatedIpAssignment
export function DedicatedIpAssignment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationPoolName = (i.destinationPoolName !== undefined ? i.destinationPoolName : "");
  out.ip = (i.ip !== undefined ? i.ip : "");
  return out;
}

// aws:sesv2/dedicatedIpPool:DedicatedIpPool
export function DedicatedIpPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.poolName = (i.poolName !== undefined ? i.poolName : "");
  out.scalingMode = (i.scalingMode !== undefined ? i.scalingMode : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:sesv2/emailIdentity:EmailIdentity
export function EmailIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurationSetName = (i.configurationSetName !== undefined ? i.configurationSetName : "");
  out.dkimSigningAttributes = (i.dkimSigningAttributes !== undefined ? i.dkimSigningAttributes : (depth > 4 ? {} : T_sesv2.sesv2_EmailIdentityDkimSigningAttributes(ctx, depth + 1)));
  out.emailIdentity = (i.emailIdentity !== undefined ? i.emailIdentity : "");
  out.identityType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.verifiedForSendingStatus = false;
  return out;
}

// aws:sesv2/emailIdentityFeedbackAttributes:EmailIdentityFeedbackAttributes
export function EmailIdentityFeedbackAttributes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emailForwardingEnabled = (i.emailForwardingEnabled !== undefined ? i.emailForwardingEnabled : false);
  out.emailIdentity = (i.emailIdentity !== undefined ? i.emailIdentity : "");
  return out;
}

// aws:sesv2/emailIdentityMailFromAttributes:EmailIdentityMailFromAttributes
export function EmailIdentityMailFromAttributes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.behaviorOnMxFailure = (i.behaviorOnMxFailure !== undefined ? i.behaviorOnMxFailure : "");
  out.emailIdentity = (i.emailIdentity !== undefined ? i.emailIdentity : "");
  out.mailFromDomain = (i.mailFromDomain !== undefined ? i.mailFromDomain : h.endpoint(ctx, "mailFromDomain"));
  return out;
}

// aws:sesv2/emailIdentityPolicy:EmailIdentityPolicy
export function EmailIdentityPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emailIdentity = (i.emailIdentity !== undefined ? i.emailIdentity : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.policyName = (i.policyName !== undefined ? i.policyName : "");
  return out;
}
