// GENERATED FILE — do not edit.
// Service: wafregional   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:wafregional/getIpset:getIpset
export function getIpset(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/getRateBasedMod:getRateBasedMod
export function getRateBasedMod(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/getRule:getRule
export function getRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/getSubscribedRuleGroup:getSubscribedRuleGroup
export function getSubscribedRuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/getWebAcl:getWebAcl
export function getWebAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}
