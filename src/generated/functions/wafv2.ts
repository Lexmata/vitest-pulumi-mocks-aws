// GENERATED FILE — do not edit.
// Service: wafv2   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_wafv2 from "../types/wafv2.js";

// aws:wafv2/getIpSet:getIpSet
export function getIpSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addresses = (depth > 4 ? [] : [""]);
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.ipAddressVersion = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scope = (i.scope !== undefined ? i.scope : "");
  return out;
}

// aws:wafv2/getRegexPatternSet:getRegexPatternSet
export function getRegexPatternSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.regularExpressions = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_getRegexPatternSetRegularExpression(ctx, depth + 1))]);
  out.scope = (i.scope !== undefined ? i.scope : "");
  return out;
}

// aws:wafv2/getRuleGroup:getRuleGroup
export function getRuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scope = (i.scope !== undefined ? i.scope : "");
  return out;
}

// aws:wafv2/getWebAcl:getWebAcl
export function getWebAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scope = (i.scope !== undefined ? i.scope : "");
  return out;
}
