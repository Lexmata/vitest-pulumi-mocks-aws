// GENERATED FILE — do not edit.
// Service: ssmcontacts   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssmcontacts from "../types/ssmcontacts.js";

// aws:ssmcontacts/contact:Contact
export function Contact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.arn = h.arn(ctx);
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:ssmcontacts/contactChannel:ContactChannel
export function ContactChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activationStatus = "";
  out.arn = h.arn(ctx);
  out.contactId = (i.contactId !== undefined ? i.contactId : h.id(ctx, "contactId"));
  out.deliveryAddress = (i.deliveryAddress !== undefined ? i.deliveryAddress : (depth > 4 ? {} : T_ssmcontacts.ssmcontacts_ContactChannelDeliveryAddress(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:ssmcontacts/plan:Plan
export function Plan(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contactId = (i.contactId !== undefined ? i.contactId : h.id(ctx, "contactId"));
  out.stages = (i.stages !== undefined ? i.stages : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssmcontacts.ssmcontacts_PlanStage(ctx, depth + 1))]));
  return out;
}
