// GENERATED FILE — do not edit.
// Service: ssmcontacts   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssmcontacts from "../types/ssmcontacts.js";

// aws:ssmcontacts/getContact:getContact
export function getContact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = "";
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.displayName = "";
  out.id = h.id(ctx, "id");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  return out;
}

// aws:ssmcontacts/getContactChannel:getContactChannel
export function getContactChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activationStatus = "";
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.contactId = h.id(ctx, "contactId");
  out.deliveryAddresses = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_getContactChannelDeliveryAddress(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.type = "";
  return out;
}

// aws:ssmcontacts/getPlan:getPlan
export function getPlan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactId = (i.contactId !== undefined ? i.contactId : h.id(ctx, "contactId"));
  out.id = h.id(ctx, "id");
  out.stages = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_getPlanStage(ctx, depth + 1))]);
  return out;
}
