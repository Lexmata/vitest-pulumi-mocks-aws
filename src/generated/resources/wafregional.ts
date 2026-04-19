// GENERATED FILE — do not edit.
// Service: wafregional   (13 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_wafregional from "../types/wafregional.js";

// aws:wafregional/byteMatchSet:ByteMatchSet
export function ByteMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.byteMatchTuples = (i.byteMatchTuples !== undefined ? i.byteMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_ByteMatchSetByteMatchTuple(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/geoMatchSet:GeoMatchSet
export function GeoMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.geoMatchConstraints = (i.geoMatchConstraints !== undefined ? i.geoMatchConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_GeoMatchSetGeoMatchConstraint(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/ipSet:IpSet
export function IpSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetDescriptors = (i.ipSetDescriptors !== undefined ? i.ipSetDescriptors : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_IpSetIpSetDescriptor(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:wafregional/rateBasedRule:RateBasedRule
export function RateBasedRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.predicates = (i.predicates !== undefined ? i.predicates : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_RateBasedRulePredicate(ctx, depth + 1))]));
  out.rateKey = (i.rateKey !== undefined ? i.rateKey : "");
  out.rateLimit = (i.rateLimit !== undefined ? i.rateLimit : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:wafregional/regexMatchSet:RegexMatchSet
export function RegexMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.regexMatchTuples = (i.regexMatchTuples !== undefined ? i.regexMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_RegexMatchSetRegexMatchTuple(ctx, depth + 1))]));
  return out;
}

// aws:wafregional/regexPatternSet:RegexPatternSet
export function RegexPatternSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.regexPatternStrings = (i.regexPatternStrings !== undefined ? i.regexPatternStrings : (depth > 4 ? [] : [""]));
  return out;
}

// aws:wafregional/rule:Rule
export function Rule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.predicates = (i.predicates !== undefined ? i.predicates : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_RulePredicate(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:wafregional/ruleGroup:RuleGroup
export function RuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.activatedRules = (i.activatedRules !== undefined ? i.activatedRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_RuleGroupActivatedRule(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:wafregional/sizeConstraintSet:SizeConstraintSet
export function SizeConstraintSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sizeConstraints = (i.sizeConstraints !== undefined ? i.sizeConstraints : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_SizeConstraintSetSizeConstraint(ctx, depth + 1))]));
  return out;
}

// aws:wafregional/sqlInjectionMatchSet:SqlInjectionMatchSet
export function SqlInjectionMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sqlInjectionMatchTuples = (i.sqlInjectionMatchTuples !== undefined ? i.sqlInjectionMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple(ctx, depth + 1))]));
  return out;
}

// aws:wafregional/webAcl:WebAcl
export function WebAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultAction = (i.defaultAction !== undefined ? i.defaultAction : (depth > 4 ? {} : T_wafregional.wafregional_WebAclDefaultAction(ctx, depth + 1)));
  out.loggingConfiguration = (i.loggingConfiguration !== undefined ? i.loggingConfiguration : (depth > 4 ? {} : T_wafregional.wafregional_WebAclLoggingConfiguration(ctx, depth + 1)));
  out.metricName = (i.metricName !== undefined ? i.metricName : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_WebAclRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:wafregional/webAclAssociation:WebAclAssociation
export function WebAclAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.webAclId = (i.webAclId !== undefined ? i.webAclId : h.id(ctx, "webAclId"));
  return out;
}

// aws:wafregional/xssMatchSet:XssMatchSet
export function XssMatchSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.xssMatchTuples = (i.xssMatchTuples !== undefined ? i.xssMatchTuples : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_XssMatchSetXssMatchTuple(ctx, depth + 1))]));
  return out;
}
