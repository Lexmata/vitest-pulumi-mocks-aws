// GENERATED FILE — do not edit.
// Service: waf   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:waf/getIpset:getIpset
export function getIpset(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/getRateBasedRule:getRateBasedRule
export function getRateBasedRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/getRule:getRule
export function getRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/getSubscribedRuleGroup:getSubscribedRuleGroup
export function getSubscribedRuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/getWebAcl:getWebAcl
export function getWebAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}
