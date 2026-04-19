// GENERATED FILE — do not edit.
// Service: waf   (12 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_waf from "../types/waf.js";

// aws:waf/byteMatchSet:ByteMatchSet
export function ByteMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.byteMatchTuples = (i.byteMatchTuples !== undefined ? i.byteMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_ByteMatchSetByteMatchTuple(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/geoMatchSet:GeoMatchSet
export function GeoMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.geoMatchConstraints = (i.geoMatchConstraints !== undefined ? i.geoMatchConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_GeoMatchSetGeoMatchConstraint(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/ipSet:IpSet
export function IpSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetDescriptors = (i.ipSetDescriptors !== undefined ? i.ipSetDescriptors : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_IpSetIpSetDescriptor(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:waf/rateBasedRule:RateBasedRule
export function RateBasedRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.predicates = (i.predicates !== undefined ? i.predicates : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_RateBasedRulePredicate(ctx, depth + 1))]));
  out.rateKey = (i.rateKey !== undefined ? i.rateKey : "");
  out.rateLimit = (i.rateLimit !== undefined ? i.rateLimit : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:waf/regexMatchSet:RegexMatchSet
export function RegexMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.regexMatchTuples = (i.regexMatchTuples !== undefined ? i.regexMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_RegexMatchSetRegexMatchTuple(ctx, depth + 1))]));
  return out;
}

// aws:waf/regexPatternSet:RegexPatternSet
export function RegexPatternSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.regexPatternStrings = (i.regexPatternStrings !== undefined ? i.regexPatternStrings : (depth > 4 ? [] : [""]));
  return out;
}

// aws:waf/rule:Rule
export function Rule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.predicates = (i.predicates !== undefined ? i.predicates : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_RulePredicate(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:waf/ruleGroup:RuleGroup
export function RuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activatedRules = (i.activatedRules !== undefined ? i.activatedRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_RuleGroupActivatedRule(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:waf/sizeConstraintSet:SizeConstraintSet
export function SizeConstraintSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sizeConstraints = (i.sizeConstraints !== undefined ? i.sizeConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_SizeConstraintSetSizeConstraint(ctx, depth + 1))]));
  return out;
}

// aws:waf/sqlInjectionMatchSet:SqlInjectionMatchSet
export function SqlInjectionMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sqlInjectionMatchTuples = (i.sqlInjectionMatchTuples !== undefined ? i.sqlInjectionMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_SqlInjectionMatchSetSqlInjectionMatchTuple(ctx, depth + 1))]));
  return out;
}

// aws:waf/webAcl:WebAcl
export function WebAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultAction = (i.defaultAction !== undefined ? i.defaultAction : (depth > 4 ? {} : T_waf.waf_WebAclDefaultAction(ctx, depth + 1)));
  out.loggingConfiguration = (i.loggingConfiguration !== undefined ? i.loggingConfiguration : (depth > 4 ? {} : T_waf.waf_WebAclLoggingConfiguration(ctx, depth + 1)));
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_WebAclRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:waf/xssMatchSet:XssMatchSet
export function XssMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.xssMatchTuples = (i.xssMatchTuples !== undefined ? i.xssMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_XssMatchSetXssMatchTuple(ctx, depth + 1))]));
  return out;
}
