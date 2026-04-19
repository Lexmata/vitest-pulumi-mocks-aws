// GENERATED FILE — do not edit.
// Service: wafregional   (23 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_wafregional from "./wafregional.js";

// aws:wafregional/ByteMatchSetByteMatchTuple:ByteMatchSetByteMatchTuple
export function wafregional_ByteMatchSetByteMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafregional.wafregional_ByteMatchSetByteMatchTupleFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.targetString = "";
  out.textTransformation = "";
  return out;
}

// aws:wafregional/ByteMatchSetByteMatchTupleFieldToMatch:ByteMatchSetByteMatchTupleFieldToMatch
export function wafregional_ByteMatchSetByteMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:wafregional/GeoMatchSetGeoMatchConstraint:GeoMatchSetGeoMatchConstraint
export function wafregional_GeoMatchSetGeoMatchConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:wafregional/IpSetIpSetDescriptor:IpSetIpSetDescriptor
export function wafregional_IpSetIpSetDescriptor(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:wafregional/RateBasedRulePredicate:RateBasedRulePredicate
export function wafregional_RateBasedRulePredicate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataId = h.id(ctx, "dataId");
  out.negated = false;
  out.type = "";
  return out;
}

// aws:wafregional/RegexMatchSetRegexMatchTuple:RegexMatchSetRegexMatchTuple
export function wafregional_RegexMatchSetRegexMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafregional.wafregional_RegexMatchSetRegexMatchTupleFieldToMatch(ctx, depth + 1));
  out.regexPatternSetId = h.id(ctx, "regexPatternSetId");
  out.textTransformation = "";
  return out;
}

// aws:wafregional/RegexMatchSetRegexMatchTupleFieldToMatch:RegexMatchSetRegexMatchTupleFieldToMatch
export function wafregional_RegexMatchSetRegexMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:wafregional/RuleGroupActivatedRule:RuleGroupActivatedRule
export function wafregional_RuleGroupActivatedRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_wafregional.wafregional_RuleGroupActivatedRuleAction(ctx, depth + 1));
  out.priority = 0;
  out.ruleId = h.id(ctx, "ruleId");
  out.type = "";
  return out;
}

// aws:wafregional/RuleGroupActivatedRuleAction:RuleGroupActivatedRuleAction
export function wafregional_RuleGroupActivatedRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:wafregional/RulePredicate:RulePredicate
export function wafregional_RulePredicate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataId = h.id(ctx, "dataId");
  out.negated = false;
  out.type = "";
  return out;
}

// aws:wafregional/SizeConstraintSetSizeConstraint:SizeConstraintSetSizeConstraint
export function wafregional_SizeConstraintSetSizeConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_wafregional.wafregional_SizeConstraintSetSizeConstraintFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformation = "";
  return out;
}

// aws:wafregional/SizeConstraintSetSizeConstraintFieldToMatch:SizeConstraintSetSizeConstraintFieldToMatch
export function wafregional_SizeConstraintSetSizeConstraintFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:wafregional/SqlInjectionMatchSetSqlInjectionMatchTuple:SqlInjectionMatchSetSqlInjectionMatchTuple
export function wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafregional.wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch(ctx, depth + 1));
  out.textTransformation = "";
  return out;
}

// aws:wafregional/SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch:SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch
export function wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:wafregional/WebAclDefaultAction:WebAclDefaultAction
export function wafregional_WebAclDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:wafregional/WebAclLoggingConfiguration:WebAclLoggingConfiguration
export function wafregional_WebAclLoggingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDestination = "";
  out.redactedFields = (depth > 4 ? {} : T_wafregional.wafregional_WebAclLoggingConfigurationRedactedFields(ctx, depth + 1));
  return out;
}

// aws:wafregional/WebAclLoggingConfigurationRedactedFields:WebAclLoggingConfigurationRedactedFields
export function wafregional_WebAclLoggingConfigurationRedactedFields(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatches = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafregional.wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch(ctx, depth + 1))]);
  return out;
}

// aws:wafregional/WebAclLoggingConfigurationRedactedFieldsFieldToMatch:WebAclLoggingConfigurationRedactedFieldsFieldToMatch
export function wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}

// aws:wafregional/WebAclRule:WebAclRule
export function wafregional_WebAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_wafregional.wafregional_WebAclRuleAction(ctx, depth + 1));
  out.overrideAction = (depth > 4 ? {} : T_wafregional.wafregional_WebAclRuleOverrideAction(ctx, depth + 1));
  out.priority = 0;
  out.ruleId = h.id(ctx, "ruleId");
  out.type = "";
  return out;
}

// aws:wafregional/WebAclRuleAction:WebAclRuleAction
export function wafregional_WebAclRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:wafregional/WebAclRuleOverrideAction:WebAclRuleOverrideAction
export function wafregional_WebAclRuleOverrideAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:wafregional/XssMatchSetXssMatchTuple:XssMatchSetXssMatchTuple
export function wafregional_XssMatchSetXssMatchTuple(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafregional.wafregional_XssMatchSetXssMatchTupleFieldToMatch(ctx, depth + 1));
  out.textTransformation = "";
  return out;
}

// aws:wafregional/XssMatchSetXssMatchTupleFieldToMatch:XssMatchSetXssMatchTupleFieldToMatch
export function wafregional_XssMatchSetXssMatchTupleFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.data = "";
  out.type = "";
  return out;
}
