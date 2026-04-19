// GENERATED FILE — do not edit.
// Service: ses   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:ses/getActiveReceiptRuleSet:getActiveReceiptRuleSet
export function getActiveReceiptRuleSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.ruleSetName = "";
  return out;
}

// aws:ses/getDomainIdentity:getDomainIdentity
export function getDomainIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.id = h.id(ctx, "id");
  out.verificationToken = "";
  return out;
}

// aws:ses/getEmailIdentity:getEmailIdentity
export function getEmailIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.email = (i.email !== undefined ? i.email : "");
  out.id = h.id(ctx, "id");
  return out;
}
