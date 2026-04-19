// GENERATED FILE — do not edit.
// Service: waf   (23 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_waf from "./waf.js";

// aws:waf/ByteMatchSetByteMatchTuple:ByteMatchSetByteMatchTuple
export function waf_ByteMatchSetByteMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_waf.waf_ByteMatchSetByteMatchTupleFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.targetString = "";
  out.textTransformation = "";
  return out;
}

// aws:waf/ByteMatchSetByteMatchTupleFieldToMatch:ByteMatchSetByteMatchTupleFieldToMatch
export function waf_ByteMatchSetByteMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:waf/GeoMatchSetGeoMatchConstraint:GeoMatchSetGeoMatchConstraint
export function waf_GeoMatchSetGeoMatchConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:waf/IpSetIpSetDescriptor:IpSetIpSetDescriptor
export function waf_IpSetIpSetDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:waf/RateBasedRulePredicate:RateBasedRulePredicate
export function waf_RateBasedRulePredicate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataId = h.id(ctx, "dataId");
  out.negated = false;
  out.type = "";
  return out;
}

// aws:waf/RegexMatchSetRegexMatchTuple:RegexMatchSetRegexMatchTuple
export function waf_RegexMatchSetRegexMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_waf.waf_RegexMatchSetRegexMatchTupleFieldToMatch(ctx, depth + 1));
  out.regexPatternSetId = h.id(ctx, "regexPatternSetId");
  out.textTransformation = "";
  return out;
}

// aws:waf/RegexMatchSetRegexMatchTupleFieldToMatch:RegexMatchSetRegexMatchTupleFieldToMatch
export function waf_RegexMatchSetRegexMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:waf/RuleGroupActivatedRule:RuleGroupActivatedRule
export function waf_RuleGroupActivatedRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_waf.waf_RuleGroupActivatedRuleAction(ctx, depth + 1));
  out.priority = 0;
  out.ruleId = h.id(ctx, "ruleId");
  out.type = "";
  return out;
}

// aws:waf/RuleGroupActivatedRuleAction:RuleGroupActivatedRuleAction
export function waf_RuleGroupActivatedRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:waf/RulePredicate:RulePredicate
export function waf_RulePredicate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataId = h.id(ctx, "dataId");
  out.negated = false;
  out.type = "";
  return out;
}

// aws:waf/SizeConstraintSetSizeConstraint:SizeConstraintSetSizeConstraint
export function waf_SizeConstraintSetSizeConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_waf.waf_SizeConstraintSetSizeConstraintFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformation = "";
  return out;
}

// aws:waf/SizeConstraintSetSizeConstraintFieldToMatch:SizeConstraintSetSizeConstraintFieldToMatch
export function waf_SizeConstraintSetSizeConstraintFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:waf/SqlInjectionMatchSetSqlInjectionMatchTuple:SqlInjectionMatchSetSqlInjectionMatchTuple
export function waf_SqlInjectionMatchSetSqlInjectionMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_waf.waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch(ctx, depth + 1));
  out.textTransformation = "";
  return out;
}

// aws:waf/SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch:SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch
export function waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:waf/WebAclDefaultAction:WebAclDefaultAction
export function waf_WebAclDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:waf/WebAclLoggingConfiguration:WebAclLoggingConfiguration
export function waf_WebAclLoggingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDestination = "";
  out.redactedFields = (depth > 4 ? {} : T_waf.waf_WebAclLoggingConfigurationRedactedFields(ctx, depth + 1));
  return out;
}

// aws:waf/WebAclLoggingConfigurationRedactedFields:WebAclLoggingConfigurationRedactedFields
export function waf_WebAclLoggingConfigurationRedactedFields(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatches = (depth > 4 ? [] : [(depth > 4 ? {} : T_waf.waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch(ctx, depth + 1))]);
  return out;
}

// aws:waf/WebAclLoggingConfigurationRedactedFieldsFieldToMatch:WebAclLoggingConfigurationRedactedFieldsFieldToMatch
export function waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:waf/WebAclRule:WebAclRule
export function waf_WebAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_waf.waf_WebAclRuleAction(ctx, depth + 1));
  out.overrideAction = (depth > 4 ? {} : T_waf.waf_WebAclRuleOverrideAction(ctx, depth + 1));
  out.priority = 0;
  out.ruleId = h.id(ctx, "ruleId");
  out.type = "";
  return out;
}

// aws:waf/WebAclRuleAction:WebAclRuleAction
export function waf_WebAclRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:waf/WebAclRuleOverrideAction:WebAclRuleOverrideAction
export function waf_WebAclRuleOverrideAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:waf/XssMatchSetXssMatchTuple:XssMatchSetXssMatchTuple
export function waf_XssMatchSetXssMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_waf.waf_XssMatchSetXssMatchTupleFieldToMatch(ctx, depth + 1));
  out.textTransformation = "";
  return out;
}

// aws:waf/XssMatchSetXssMatchTupleFieldToMatch:XssMatchSetXssMatchTupleFieldToMatch
export function waf_XssMatchSetXssMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}
