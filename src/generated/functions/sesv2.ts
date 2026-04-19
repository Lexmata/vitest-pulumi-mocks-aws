// GENERATED FILE — do not edit.
// Service: sesv2   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_sesv2 from "../types/sesv2.js";

// aws:sesv2/getConfigurationSet:getConfigurationSet
export function getConfigurationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurationSetName = (i.configurationSetName !== undefined ? i.configurationSetName : "");
  out.deliveryOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetDeliveryOption(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.reputationOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetReputationOption(ctx, depth + 1))]);
  out.sendingOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetSendingOption(ctx, depth + 1))]);
  out.suppressionOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetSuppressionOption(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.trackingOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetTrackingOption(ctx, depth + 1))]);
  out.vdmOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getConfigurationSetVdmOption(ctx, depth + 1))]);
  return out;
}

// aws:sesv2/getDedicatedIpPool:getDedicatedIpPool
export function getDedicatedIpPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.dedicatedIps = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getDedicatedIpPoolDedicatedIp(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.poolName = (i.poolName !== undefined ? i.poolName : "");
  out.scalingMode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:sesv2/getEmailIdentity:getEmailIdentity
export function getEmailIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurationSetName = "";
  out.dkimSigningAttributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_sesv2.sesv2_getEmailIdentityDkimSigningAttribute(ctx, depth + 1))]);
  out.emailIdentity = (i.emailIdentity !== undefined ? i.emailIdentity : "");
  out.id = h.id(ctx, "id");
  out.identityType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.verifiedForSendingStatus = false;
  return out;
}

// aws:sesv2/getEmailIdentityMailFromAttributes:getEmailIdentityMailFromAttributes
export function getEmailIdentityMailFromAttributes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.behaviorOnMxFailure = "";
  out.emailIdentity = (i.emailIdentity !== undefined ? i.emailIdentity : "");
  out.id = h.id(ctx, "id");
  out.mailFromDomain = h.endpoint(ctx, "mailFromDomain");
  return out;
}
