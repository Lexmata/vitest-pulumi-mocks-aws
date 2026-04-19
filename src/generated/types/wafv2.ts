// GENERATED FILE — do not edit.
// Service: wafv2   (928 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_wafv2 from "./wafv2.js";

// aws:wafv2/RegexPatternSetRegularExpression:RegexPatternSetRegularExpression
export function wafv2_RegexPatternSetRegularExpression(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regexString = "";
  return out;
}

// aws:wafv2/RuleGroupCustomResponseBody:RuleGroupCustomResponseBody
export function wafv2_RuleGroupCustomResponseBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.key = "";
  return out;
}

// aws:wafv2/RuleGroupRule:RuleGroupRule
export function wafv2_RuleGroupRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleAction(ctx, depth + 1));
  out.captchaConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleCaptchaConfig(ctx, depth + 1));
  out.name = ctx.name;
  out.priority = 0;
  out.ruleLabels = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleRuleLabel(ctx, depth + 1))]);
  out.statement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1));
  out.visibilityConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleVisibilityConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleAction:RuleGroupRuleAction
export function wafv2_RuleGroupRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allow = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionAllow(ctx, depth + 1));
  out.block = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionBlock(ctx, depth + 1));
  out.captcha = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionCaptcha(ctx, depth + 1));
  out.challenge = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionChallenge(ctx, depth + 1));
  out.count = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionCount(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleActionAllow:RuleGroupRuleActionAllow
export function wafv2_RuleGroupRuleActionAllow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionAllowCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleActionAllowCustomRequestHandling:RuleGroupRuleActionAllowCustomRequestHandling
export function wafv2_RuleGroupRuleActionAllowCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader:RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader
export function wafv2_RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/RuleGroupRuleActionBlock:RuleGroupRuleActionBlock
export function wafv2_RuleGroupRuleActionBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponse = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionBlockCustomResponse(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleActionBlockCustomResponse:RuleGroupRuleActionBlockCustomResponse
export function wafv2_RuleGroupRuleActionBlockCustomResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponseBodyKey = "";
  out.responseCode = 0;
  out.responseHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleActionBlockCustomResponseResponseHeader:RuleGroupRuleActionBlockCustomResponseResponseHeader
export function wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/RuleGroupRuleActionCaptcha:RuleGroupRuleActionCaptcha
export function wafv2_RuleGroupRuleActionCaptcha(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleActionCaptchaCustomRequestHandling:RuleGroupRuleActionCaptchaCustomRequestHandling
export function wafv2_RuleGroupRuleActionCaptchaCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader:RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader
export function wafv2_RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/RuleGroupRuleActionChallenge:RuleGroupRuleActionChallenge
export function wafv2_RuleGroupRuleActionChallenge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionChallengeCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleActionChallengeCustomRequestHandling:RuleGroupRuleActionChallengeCustomRequestHandling
export function wafv2_RuleGroupRuleActionChallengeCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader:RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader
export function wafv2_RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/RuleGroupRuleActionCount:RuleGroupRuleActionCount
export function wafv2_RuleGroupRuleActionCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionCountCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleActionCountCustomRequestHandling:RuleGroupRuleActionCountCustomRequestHandling
export function wafv2_RuleGroupRuleActionCountCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleActionCountCustomRequestHandlingInsertHeader:RuleGroupRuleActionCountCustomRequestHandlingInsertHeader
export function wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/RuleGroupRuleCaptchaConfig:RuleGroupRuleCaptchaConfig
export function wafv2_RuleGroupRuleCaptchaConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTimeProperty = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleCaptchaConfigImmunityTimeProperty:RuleGroupRuleCaptchaConfigImmunityTimeProperty
export function wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTime = 0;
  return out;
}

// aws:wafv2/RuleGroupRuleRuleLabel:RuleGroupRuleRuleLabel
export function wafv2_RuleGroupRuleRuleLabel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatement:RuleGroupRuleStatement
export function wafv2_RuleGroupRuleStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.andStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementAndStatement(ctx, depth + 1));
  out.asnMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementAsnMatchStatement(ctx, depth + 1));
  out.byteMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatement(ctx, depth + 1));
  out.geoMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementGeoMatchStatement(ctx, depth + 1));
  out.ipSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementIpSetReferenceStatement(ctx, depth + 1));
  out.labelMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementLabelMatchStatement(ctx, depth + 1));
  out.notStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementNotStatement(ctx, depth + 1));
  out.orStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementOrStatement(ctx, depth + 1));
  out.rateBasedStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatement(ctx, depth + 1));
  out.regexMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatement(ctx, depth + 1));
  out.regexPatternSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement(ctx, depth + 1));
  out.sizeConstraintStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatement(ctx, depth + 1));
  out.sqliMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatement(ctx, depth + 1));
  out.xssMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementAndStatement:RuleGroupRuleStatementAndStatement
export function wafv2_RuleGroupRuleStatementAndStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementAsnMatchStatement:RuleGroupRuleStatementAsnMatchStatement
export function wafv2_RuleGroupRuleStatementAsnMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asnLists = (depth > 4 ? [] : [0]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementAsnMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementAsnMatchStatementForwardedIpConfig:RuleGroupRuleStatementAsnMatchStatementForwardedIpConfig
export function wafv2_RuleGroupRuleStatementAsnMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatement:RuleGroupRuleStatementByteMatchStatement
export function wafv2_RuleGroupRuleStatementByteMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.searchString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatch:RuleGroupRuleStatementByteMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchBody:RuleGroupRuleStatementByteMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies:RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader:RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod:RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementByteMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementByteMatchStatementTextTransformation:RuleGroupRuleStatementByteMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementByteMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementGeoMatchStatement:RuleGroupRuleStatementGeoMatchStatement
export function wafv2_RuleGroupRuleStatementGeoMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.countryCodes = (depth > 4 ? [] : [""]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig:RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig
export function wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementIpSetReferenceStatement:RuleGroupRuleStatementIpSetReferenceStatement
export function wafv2_RuleGroupRuleStatementIpSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetForwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig:RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig
export function wafv2_RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  out.position = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementLabelMatchStatement:RuleGroupRuleStatementLabelMatchStatement
export function wafv2_RuleGroupRuleStatementLabelMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.scope = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementNotStatement:RuleGroupRuleStatementNotStatement
export function wafv2_RuleGroupRuleStatementNotStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementOrStatement:RuleGroupRuleStatementOrStatement
export function wafv2_RuleGroupRuleStatementOrStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatement:RuleGroupRuleStatementRateBasedStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregateKeyType = "";
  out.customKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey(ctx, depth + 1))]);
  out.evaluationWindowSec = 0;
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig(ctx, depth + 1));
  out.limit = 0;
  out.scopeDownStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKey:RuleGroupRuleStatementRateBasedStatementCustomKey
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookie = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie(ctx, depth + 1));
  out.forwardedIp = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp(ctx, depth + 1));
  out.header = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader(ctx, depth + 1));
  out.httpMethod = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod(ctx, depth + 1));
  out.ip = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp(ctx, depth + 1));
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyJa4Fingerprint(ctx, depth + 1));
  out.labelNamespace = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace(ctx, depth + 1));
  out.queryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyCookie:RuleGroupRuleStatementRateBasedStatementCustomKeyCookie
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookieTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyCookieTextTransformation:RuleGroupRuleStatementRateBasedStatementCustomKeyCookieTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookieTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp:RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyHeader:RuleGroupRuleStatementRateBasedStatementCustomKeyHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation:RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod:RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyIp:RuleGroupRuleStatementRateBasedStatementCustomKeyIp
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementCustomKeyJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementCustomKeyJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace:RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespace = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument:RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation:RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString:RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation:RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath:RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation:RuleGroupRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementForwardedIpConfig:RuleGroupRuleStatementRateBasedStatementForwardedIpConfig
export function wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.andStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement(ctx, depth + 1));
  out.asnMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement(ctx, depth + 1));
  out.byteMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement(ctx, depth + 1));
  out.geoMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement(ctx, depth + 1));
  out.ipSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement(ctx, depth + 1));
  out.labelMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement(ctx, depth + 1));
  out.notStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement(ctx, depth + 1));
  out.orStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement(ctx, depth + 1));
  out.regexMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement(ctx, depth + 1));
  out.regexPatternSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement(ctx, depth + 1));
  out.sizeConstraintStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement(ctx, depth + 1));
  out.sqliMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement(ctx, depth + 1));
  out.xssMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asnLists = (depth > 4 ? [] : [0]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig:RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.searchString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation:RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.countryCodes = (depth > 4 ? [] : [""]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig:RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetForwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig:RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  out.position = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.scope = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementNotStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementOrStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch(ctx, depth + 1));
  out.regexString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation:RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch(ctx, depth + 1));
  out.sensitivityLevel = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation:RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation:RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatement:RuleGroupRuleStatementRegexMatchStatement
export function wafv2_RuleGroupRuleStatementRegexMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch(ctx, depth + 1));
  out.regexString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatch:RuleGroupRuleStatementRegexMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody:RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies:RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader:RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod:RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexMatchStatementTextTransformation:RuleGroupRuleStatementRegexMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatement:RuleGroupRuleStatementRegexPatternSetReferenceStatement
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath:RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation:RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation
export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatement:RuleGroupRuleStatementSizeConstraintStatement
export function wafv2_RuleGroupRuleStatementSizeConstraintStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatch:RuleGroupRuleStatementSizeConstraintStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriFragment:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath:RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSizeConstraintStatementTextTransformation:RuleGroupRuleStatementSizeConstraintStatementTextTransformation
export function wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatement:RuleGroupRuleStatementSqliMatchStatement
export function wafv2_RuleGroupRuleStatementSqliMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch(ctx, depth + 1));
  out.sensitivityLevel = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatch:RuleGroupRuleStatementSqliMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody:RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies:RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader:RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod:RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementSqliMatchStatementTextTransformation:RuleGroupRuleStatementSqliMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatement:RuleGroupRuleStatementXssMatchStatement
export function wafv2_RuleGroupRuleStatementXssMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatch:RuleGroupRuleStatementXssMatchStatementFieldToMatch
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments:RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchBody:RuleGroupRuleStatementXssMatchStatementFieldToMatchBody
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies:RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern:RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll:RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader:RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern:RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll:RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder:RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint:RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint:RuleGroupRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody:RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern:RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll:RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod:RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString:RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader:RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument:RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchUriFragment:RuleGroupRuleStatementXssMatchStatementFieldToMatchUriFragment
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath:RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath
export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/RuleGroupRuleStatementXssMatchStatementTextTransformation:RuleGroupRuleStatementXssMatchStatementTextTransformation
export function wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/RuleGroupRuleVisibilityConfig:RuleGroupRuleVisibilityConfig
export function wafv2_RuleGroupRuleVisibilityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchMetricsEnabled = false;
  out.metricName = "";
  out.sampledRequestsEnabled = false;
  return out;
}

// aws:wafv2/RuleGroupVisibilityConfig:RuleGroupVisibilityConfig
export function wafv2_RuleGroupVisibilityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchMetricsEnabled = false;
  out.metricName = "";
  out.sampledRequestsEnabled = false;
  return out;
}

// aws:wafv2/WebAclAssociationConfig:WebAclAssociationConfig
export function wafv2_WebAclAssociationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.requestBodies = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfigRequestBody(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclAssociationConfigRequestBody:WebAclAssociationConfigRequestBody
export function wafv2_WebAclAssociationConfigRequestBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiGateways = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfigRequestBodyApiGateway(ctx, depth + 1))]);
  out.appRunnerServices = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfigRequestBodyAppRunnerService(ctx, depth + 1))]);
  out.cloudfronts = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfigRequestBodyCloudfront(ctx, depth + 1))]);
  out.cognitoUserPools = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool(ctx, depth + 1))]);
  out.verifiedAccessInstances = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclAssociationConfigRequestBodyApiGateway:WebAclAssociationConfigRequestBodyApiGateway
export function wafv2_WebAclAssociationConfigRequestBodyApiGateway(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSizeInspectionLimit = "";
  return out;
}

// aws:wafv2/WebAclAssociationConfigRequestBodyAppRunnerService:WebAclAssociationConfigRequestBodyAppRunnerService
export function wafv2_WebAclAssociationConfigRequestBodyAppRunnerService(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSizeInspectionLimit = "";
  return out;
}

// aws:wafv2/WebAclAssociationConfigRequestBodyCloudfront:WebAclAssociationConfigRequestBodyCloudfront
export function wafv2_WebAclAssociationConfigRequestBodyCloudfront(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSizeInspectionLimit = "";
  return out;
}

// aws:wafv2/WebAclAssociationConfigRequestBodyCognitoUserPool:WebAclAssociationConfigRequestBodyCognitoUserPool
export function wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSizeInspectionLimit = "";
  return out;
}

// aws:wafv2/WebAclAssociationConfigRequestBodyVerifiedAccessInstance:WebAclAssociationConfigRequestBodyVerifiedAccessInstance
export function wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultSizeInspectionLimit = "";
  return out;
}

// aws:wafv2/WebAclCaptchaConfig:WebAclCaptchaConfig
export function wafv2_WebAclCaptchaConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTimeProperty = (depth > 4 ? {} : T_wafv2.wafv2_WebAclCaptchaConfigImmunityTimeProperty(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclCaptchaConfigImmunityTimeProperty:WebAclCaptchaConfigImmunityTimeProperty
export function wafv2_WebAclCaptchaConfigImmunityTimeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTime = 0;
  return out;
}

// aws:wafv2/WebAclChallengeConfig:WebAclChallengeConfig
export function wafv2_WebAclChallengeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTimeProperty = (depth > 4 ? {} : T_wafv2.wafv2_WebAclChallengeConfigImmunityTimeProperty(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclChallengeConfigImmunityTimeProperty:WebAclChallengeConfigImmunityTimeProperty
export function wafv2_WebAclChallengeConfigImmunityTimeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTime = 0;
  return out;
}

// aws:wafv2/WebAclCustomResponseBody:WebAclCustomResponseBody
export function wafv2_WebAclCustomResponseBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.content = "";
  out.contentType = "";
  out.key = "";
  return out;
}

// aws:wafv2/WebAclDataProtectionConfig:WebAclDataProtectionConfig
export function wafv2_WebAclDataProtectionConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataProtections = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclDataProtectionConfigDataProtection(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclDataProtectionConfigDataProtection:WebAclDataProtectionConfigDataProtection
export function wafv2_WebAclDataProtectionConfigDataProtection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.excludeRateBasedDetails = false;
  out.excludeRuleMatchDetails = false;
  out.field = (depth > 4 ? {} : T_wafv2.wafv2_WebAclDataProtectionConfigDataProtectionField(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclDataProtectionConfigDataProtectionField:WebAclDataProtectionConfigDataProtectionField
export function wafv2_WebAclDataProtectionConfigDataProtectionField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldKeys = (depth > 4 ? [] : [""]);
  out.fieldType = "";
  return out;
}

// aws:wafv2/WebAclDefaultAction:WebAclDefaultAction
export function wafv2_WebAclDefaultAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allow = (depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultActionAllow(ctx, depth + 1));
  out.block = (depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultActionBlock(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclDefaultActionAllow:WebAclDefaultActionAllow
export function wafv2_WebAclDefaultActionAllow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultActionAllowCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclDefaultActionAllowCustomRequestHandling:WebAclDefaultActionAllowCustomRequestHandling
export function wafv2_WebAclDefaultActionAllowCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultActionAllowCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclDefaultActionAllowCustomRequestHandlingInsertHeader:WebAclDefaultActionAllowCustomRequestHandlingInsertHeader
export function wafv2_WebAclDefaultActionAllowCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclDefaultActionBlock:WebAclDefaultActionBlock
export function wafv2_WebAclDefaultActionBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponse = (depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultActionBlockCustomResponse(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclDefaultActionBlockCustomResponse:WebAclDefaultActionBlockCustomResponse
export function wafv2_WebAclDefaultActionBlockCustomResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponseBodyKey = "";
  out.responseCode = 0;
  out.responseHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclDefaultActionBlockCustomResponseResponseHeader:WebAclDefaultActionBlockCustomResponseResponseHeader
export function wafv2_WebAclDefaultActionBlockCustomResponseResponseHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationLoggingFilter:WebAclLoggingConfigurationLoggingFilter
export function wafv2_WebAclLoggingConfigurationLoggingFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultBehavior = "";
  out.filters = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationLoggingFilterFilter(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationLoggingFilterFilter:WebAclLoggingConfigurationLoggingFilterFilter
export function wafv2_WebAclLoggingConfigurationLoggingFilterFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.behavior = "";
  out.conditions = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition(ctx, depth + 1))]);
  out.requirement = "";
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationLoggingFilterFilterCondition:WebAclLoggingConfigurationLoggingFilterFilterCondition
export function wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionCondition = (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition(ctx, depth + 1));
  out.labelNameCondition = (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition:WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition
export function wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition:WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition
export function wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.labelName = "";
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationRedactedField:WebAclLoggingConfigurationRedactedField
export function wafv2_WebAclLoggingConfigurationRedactedField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationRedactedFieldMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationRedactedFieldQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationRedactedFieldUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationRedactedFieldMethod:WebAclLoggingConfigurationRedactedFieldMethod
export function wafv2_WebAclLoggingConfigurationRedactedFieldMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationRedactedFieldQueryString:WebAclLoggingConfigurationRedactedFieldQueryString
export function wafv2_WebAclLoggingConfigurationRedactedFieldQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationRedactedFieldSingleHeader:WebAclLoggingConfigurationRedactedFieldSingleHeader
export function wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclLoggingConfigurationRedactedFieldUriPath:WebAclLoggingConfigurationRedactedFieldUriPath
export function wafv2_WebAclLoggingConfigurationRedactedFieldUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRule:WebAclRule
export function wafv2_WebAclRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleAction(ctx, depth + 1));
  out.captchaConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleCaptchaConfig(ctx, depth + 1));
  out.challengeConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleChallengeConfig(ctx, depth + 1));
  out.name = ctx.name;
  out.overrideAction = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleOverrideAction(ctx, depth + 1));
  out.priority = 0;
  out.ruleLabels = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleRuleLabel(ctx, depth + 1))]);
  out.statement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1));
  out.visibilityConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleVisibilityConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleAction:WebAclRuleAction
export function wafv2_WebAclRuleAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allow = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionAllow(ctx, depth + 1));
  out.block = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionBlock(ctx, depth + 1));
  out.captcha = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionCaptcha(ctx, depth + 1));
  out.challenge = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionChallenge(ctx, depth + 1));
  out.count = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionCount(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleActionAllow:WebAclRuleActionAllow
export function wafv2_WebAclRuleActionAllow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionAllowCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleActionAllowCustomRequestHandling:WebAclRuleActionAllowCustomRequestHandling
export function wafv2_WebAclRuleActionAllowCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleActionAllowCustomRequestHandlingInsertHeader:WebAclRuleActionAllowCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleActionAllowCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleActionBlock:WebAclRuleActionBlock
export function wafv2_WebAclRuleActionBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponse = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionBlockCustomResponse(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleActionBlockCustomResponse:WebAclRuleActionBlockCustomResponse
export function wafv2_WebAclRuleActionBlockCustomResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponseBodyKey = "";
  out.responseCode = 0;
  out.responseHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionBlockCustomResponseResponseHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleActionBlockCustomResponseResponseHeader:WebAclRuleActionBlockCustomResponseResponseHeader
export function wafv2_WebAclRuleActionBlockCustomResponseResponseHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleActionCaptcha:WebAclRuleActionCaptcha
export function wafv2_WebAclRuleActionCaptcha(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionCaptchaCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleActionCaptchaCustomRequestHandling:WebAclRuleActionCaptchaCustomRequestHandling
export function wafv2_WebAclRuleActionCaptchaCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader:WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleActionChallenge:WebAclRuleActionChallenge
export function wafv2_WebAclRuleActionChallenge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionChallengeCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleActionChallengeCustomRequestHandling:WebAclRuleActionChallengeCustomRequestHandling
export function wafv2_WebAclRuleActionChallengeCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionChallengeCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleActionChallengeCustomRequestHandlingInsertHeader:WebAclRuleActionChallengeCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleActionChallengeCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleActionCount:WebAclRuleActionCount
export function wafv2_WebAclRuleActionCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionCountCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleActionCountCustomRequestHandling:WebAclRuleActionCountCustomRequestHandling
export function wafv2_WebAclRuleActionCountCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleActionCountCustomRequestHandlingInsertHeader:WebAclRuleActionCountCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleActionCountCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleCaptchaConfig:WebAclRuleCaptchaConfig
export function wafv2_WebAclRuleCaptchaConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTimeProperty = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleCaptchaConfigImmunityTimeProperty:WebAclRuleCaptchaConfigImmunityTimeProperty
export function wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTime = 0;
  return out;
}

// aws:wafv2/WebAclRuleChallengeConfig:WebAclRuleChallengeConfig
export function wafv2_WebAclRuleChallengeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTimeProperty = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleChallengeConfigImmunityTimeProperty(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleChallengeConfigImmunityTimeProperty:WebAclRuleChallengeConfigImmunityTimeProperty
export function wafv2_WebAclRuleChallengeConfigImmunityTimeProperty(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.immunityTime = 0;
  return out;
}

// aws:wafv2/WebAclRuleOverrideAction:WebAclRuleOverrideAction
export function wafv2_WebAclRuleOverrideAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleOverrideActionCount(ctx, depth + 1));
  out.none = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleOverrideActionNone(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleOverrideActionCount:WebAclRuleOverrideActionCount
export function wafv2_WebAclRuleOverrideActionCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleOverrideActionNone:WebAclRuleOverrideActionNone
export function wafv2_WebAclRuleOverrideActionNone(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleRuleLabel:WebAclRuleRuleLabel
export function wafv2_WebAclRuleRuleLabel(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatement:WebAclRuleStatement
export function wafv2_WebAclRuleStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.andStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementAndStatement(ctx, depth + 1));
  out.asnMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementAsnMatchStatement(ctx, depth + 1));
  out.byteMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatement(ctx, depth + 1));
  out.geoMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementGeoMatchStatement(ctx, depth + 1));
  out.ipSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementIpSetReferenceStatement(ctx, depth + 1));
  out.labelMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementLabelMatchStatement(ctx, depth + 1));
  out.managedRuleGroupStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatement(ctx, depth + 1));
  out.notStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementNotStatement(ctx, depth + 1));
  out.orStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementOrStatement(ctx, depth + 1));
  out.rateBasedStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatement(ctx, depth + 1));
  out.regexMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatement(ctx, depth + 1));
  out.regexPatternSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement(ctx, depth + 1));
  out.ruleGroupReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatement(ctx, depth + 1));
  out.sizeConstraintStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatement(ctx, depth + 1));
  out.sqliMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatement(ctx, depth + 1));
  out.xssMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementAndStatement:WebAclRuleStatementAndStatement
export function wafv2_WebAclRuleStatementAndStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementAsnMatchStatement:WebAclRuleStatementAsnMatchStatement
export function wafv2_WebAclRuleStatementAsnMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asnLists = (depth > 4 ? [] : [0]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementAsnMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementAsnMatchStatementForwardedIpConfig:WebAclRuleStatementAsnMatchStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementAsnMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatement:WebAclRuleStatementByteMatchStatement
export function wafv2_WebAclRuleStatementByteMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.searchString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatch:WebAclRuleStatementByteMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchBody:WebAclRuleStatementByteMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchCookies:WebAclRuleStatementByteMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchHeader:WebAclRuleStatementByteMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody:WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchMethod:WebAclRuleStatementByteMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchQueryString:WebAclRuleStatementByteMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchUriFragment:WebAclRuleStatementByteMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementFieldToMatchUriPath:WebAclRuleStatementByteMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementByteMatchStatementTextTransformation:WebAclRuleStatementByteMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementByteMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementGeoMatchStatement:WebAclRuleStatementGeoMatchStatement
export function wafv2_WebAclRuleStatementGeoMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.countryCodes = (depth > 4 ? [] : [""]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementGeoMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementGeoMatchStatementForwardedIpConfig:WebAclRuleStatementGeoMatchStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementGeoMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementIpSetReferenceStatement:WebAclRuleStatementIpSetReferenceStatement
export function wafv2_WebAclRuleStatementIpSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetForwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig:WebAclRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig
export function wafv2_WebAclRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  out.position = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementLabelMatchStatement:WebAclRuleStatementLabelMatchStatement
export function wafv2_WebAclRuleStatementLabelMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.scope = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatement:WebAclRuleStatementManagedRuleGroupStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.managedRuleGroupConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig(ctx, depth + 1))]);
  out.name = ctx.name;
  out.ruleActionOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride(ctx, depth + 1))]);
  out.scopeDownStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement(ctx, depth + 1));
  out.vendorName = "";
  out.version = "1";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsManagedRulesAcfpRuleSet = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet(ctx, depth + 1));
  out.awsManagedRulesAtpRuleSet = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet(ctx, depth + 1));
  out.awsManagedRulesBotControlRuleSet = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet(ctx, depth + 1));
  out.loginPath = "";
  out.passwordField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField(ctx, depth + 1));
  out.payloadType = "";
  out.usernameField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationPath = "";
  out.enableRegexInPath = true;
  out.registrationPagePath = "";
  out.requestInspection = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspection(ctx, depth + 1));
  out.responseInspection = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspection(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspection:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspection
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressFields = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields(ctx, depth + 1));
  out.emailField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionEmailField(ctx, depth + 1));
  out.passwordField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField(ctx, depth + 1));
  out.payloadType = "";
  out.phoneNumberFields = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields(ctx, depth + 1));
  out.usernameField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifiers = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionEmailField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionEmailField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionEmailField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifiers = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspection:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspection
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bodyContains = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains(ctx, depth + 1));
  out.header = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionHeader(ctx, depth + 1));
  out.json = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson(ctx, depth + 1));
  out.statusCode = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureStrings = (depth > 4 ? [] : [""]);
  out.successStrings = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionHeader:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureValues = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.successValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureValues = (depth > 4 ? [] : [""]);
  out.identifier = "";
  out.successValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureCodes = (depth > 4 ? [] : [0]);
  out.successCodes = (depth > 4 ? [] : [0]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableRegexInPath = true;
  out.loginPath = "";
  out.requestInspection = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection(ctx, depth + 1));
  out.responseInspection = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.passwordField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionPasswordField(ctx, depth + 1));
  out.payloadType = "";
  out.usernameField = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionUsernameField(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionPasswordField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionPasswordField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionPasswordField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionUsernameField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionUsernameField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspectionUsernameField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bodyContains = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionBodyContains(ctx, depth + 1));
  out.header = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionHeader(ctx, depth + 1));
  out.json = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionJson(ctx, depth + 1));
  out.statusCode = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionStatusCode(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionBodyContains:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionBodyContains
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionBodyContains(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureStrings = (depth > 4 ? [] : [""]);
  out.successStrings = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionHeader:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureValues = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.successValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionJson:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionJson
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionJson(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureValues = (depth > 4 ? [] : [""]);
  out.identifier = "";
  out.successValues = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionStatusCode:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionStatusCode
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspectionStatusCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.failureCodes = (depth > 4 ? [] : [0]);
  out.successCodes = (depth > 4 ? [] : [0]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enableMachineLearning = true;
  out.inspectionLevel = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField:WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionToUse = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allow = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow(ctx, depth + 1));
  out.block = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock(ctx, depth + 1));
  out.captcha = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha(ctx, depth + 1));
  out.challenge = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge(ctx, depth + 1));
  out.count = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandling:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandling
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponse = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponse(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponse:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponse
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponseBodyKey = "";
  out.responseCode = 0;
  out.responseHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandling:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandling
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader:WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.andStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement(ctx, depth + 1));
  out.asnMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatement(ctx, depth + 1));
  out.byteMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement(ctx, depth + 1));
  out.geoMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement(ctx, depth + 1));
  out.ipSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement(ctx, depth + 1));
  out.labelMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement(ctx, depth + 1));
  out.notStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement(ctx, depth + 1));
  out.orStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement(ctx, depth + 1));
  out.regexMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement(ctx, depth + 1));
  out.regexPatternSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement(ctx, depth + 1));
  out.sizeConstraintStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement(ctx, depth + 1));
  out.sqliMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement(ctx, depth + 1));
  out.xssMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asnLists = (depth > 4 ? [] : [0]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatementForwardedIpConfig:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAsnMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.searchString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatch:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookies:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchMethod:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementTextTransformation:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.countryCodes = (depth > 4 ? [] : [""]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatementForwardedIpConfig:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetForwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  out.position = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.scope = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatch(ctx, depth + 1));
  out.regexString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatch:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementTextTransformation:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch(ctx, depth + 1));
  out.sensitivityLevel = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookies:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation:WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementNotStatement:WebAclRuleStatementNotStatement
export function wafv2_WebAclRuleStatementNotStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementOrStatement:WebAclRuleStatementOrStatement
export function wafv2_WebAclRuleStatementOrStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatement:WebAclRuleStatementRateBasedStatement
export function wafv2_WebAclRuleStatementRateBasedStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregateKeyType = "";
  out.customKeys = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKey(ctx, depth + 1))]);
  out.evaluationWindowSec = 0;
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig(ctx, depth + 1));
  out.limit = 0;
  out.scopeDownStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKey:WebAclRuleStatementRateBasedStatementCustomKey
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKey(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookie = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie(ctx, depth + 1));
  out.forwardedIp = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp(ctx, depth + 1));
  out.header = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader(ctx, depth + 1));
  out.httpMethod = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod(ctx, depth + 1));
  out.ip = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp(ctx, depth + 1));
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyJa4Fingerprint(ctx, depth + 1));
  out.labelNamespace = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace(ctx, depth + 1));
  out.queryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyCookie:WebAclRuleStatementRateBasedStatementCustomKeyCookie
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation:WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookieTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp:WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyHeader:WebAclRuleStatementRateBasedStatementCustomKeyHeader
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation:WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeaderTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod:WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyIp:WebAclRuleStatementRateBasedStatementCustomKeyIp
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyJa3Fingerprint:WebAclRuleStatementRateBasedStatementCustomKeyJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyJa4Fingerprint:WebAclRuleStatementRateBasedStatementCustomKeyJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace:WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.namespace = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument:WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation:WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgumentTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyQueryString:WebAclRuleStatementRateBasedStatementCustomKeyQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation:WebAclRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyUriPath:WebAclRuleStatementRateBasedStatementCustomKeyUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation:WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPathTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementForwardedIpConfig:WebAclRuleStatementRateBasedStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatement:WebAclRuleStatementRateBasedStatementScopeDownStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.andStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement(ctx, depth + 1));
  out.asnMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement(ctx, depth + 1));
  out.byteMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement(ctx, depth + 1));
  out.geoMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement(ctx, depth + 1));
  out.ipSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement(ctx, depth + 1));
  out.labelMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement(ctx, depth + 1));
  out.notStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement(ctx, depth + 1));
  out.orStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement(ctx, depth + 1));
  out.regexMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement(ctx, depth + 1));
  out.regexPatternSetReferenceStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement(ctx, depth + 1));
  out.sizeConstraintStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement(ctx, depth + 1));
  out.sqliMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement(ctx, depth + 1));
  out.xssMatchStatement = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.asnLists = (depth > 4 ? [] : [0]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig:WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementAsnMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch(ctx, depth + 1));
  out.positionalConstraint = "";
  out.searchString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation:WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.countryCodes = (depth > 4 ? [] : [""]);
  out.forwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig:WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ipSetForwardedIpConfig = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig:WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  out.headerName = "";
  out.position = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.scope = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.statements = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatement(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch(ctx, depth + 1));
  out.regexString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation:WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation:WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch(ctx, depth + 1));
  out.sensitivityLevel = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation:WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation:WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatement:WebAclRuleStatementRegexMatchStatement
export function wafv2_WebAclRuleStatementRegexMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch(ctx, depth + 1));
  out.regexString = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatch:WebAclRuleStatementRegexMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchBody:WebAclRuleStatementRegexMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchCookies:WebAclRuleStatementRegexMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchHeader:WebAclRuleStatementRegexMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody:WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchMethod:WebAclRuleStatementRegexMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString:WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchUriFragment:WebAclRuleStatementRegexMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath:WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexMatchStatementTextTransformation:WebAclRuleStatementRegexMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatement:WebAclRuleStatementRegexPatternSetReferenceStatement
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath:WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation:WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation
export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatement:WebAclRuleStatementRuleGroupReferenceStatement
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ruleActionOverrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionToUse = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse(ctx, depth + 1));
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allow = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllow(ctx, depth + 1));
  out.block = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlock(ctx, depth + 1));
  out.captcha = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptcha(ctx, depth + 1));
  out.challenge = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallenge(ctx, depth + 1));
  out.count = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCount(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllow:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllow
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandling:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandling
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlock:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlock
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlock(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponse = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customResponseBodyKey = "";
  out.responseCode = 0;
  out.responseHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponseResponseHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptcha:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptcha
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptcha(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallenge:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallenge
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallenge(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCount:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCount
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCount(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customRequestHandling = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.insertHeaders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader:WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader
export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.value = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatement:WebAclRuleStatementSizeConstraintStatement
export function wafv2_WebAclRuleStatementSizeConstraintStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparisonOperator = "";
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatch(ctx, depth + 1));
  out.size = 8;
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatch:WebAclRuleStatementSizeConstraintStatementFieldToMatch
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments:WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchBody:WebAclRuleStatementSizeConstraintStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies:WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader:WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder:WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody:WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod:WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString:WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader:WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchUriFragment:WebAclRuleStatementSizeConstraintStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath:WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSizeConstraintStatementTextTransformation:WebAclRuleStatementSizeConstraintStatementTextTransformation
export function wafv2_WebAclRuleStatementSizeConstraintStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatement:WebAclRuleStatementSqliMatchStatement
export function wafv2_WebAclRuleStatementSqliMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch(ctx, depth + 1));
  out.sensitivityLevel = "";
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatch:WebAclRuleStatementSqliMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchBody:WebAclRuleStatementSqliMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchCookies:WebAclRuleStatementSqliMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchHeader:WebAclRuleStatementSqliMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody:WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchMethod:WebAclRuleStatementSqliMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString:WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchUriFragment:WebAclRuleStatementSqliMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath:WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementSqliMatchStatementTextTransformation:WebAclRuleStatementSqliMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatement:WebAclRuleStatementXssMatchStatement
export function wafv2_WebAclRuleStatementXssMatchStatement(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fieldToMatch = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch(ctx, depth + 1));
  out.textTransformations = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementTextTransformation(ctx, depth + 1))]);
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatch:WebAclRuleStatementXssMatchStatementFieldToMatch
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allQueryArguments = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx, depth + 1));
  out.body = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody(ctx, depth + 1));
  out.cookies = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies(ctx, depth + 1));
  out.headerOrders = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder(ctx, depth + 1))]);
  out.headers = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader(ctx, depth + 1))]);
  out.ja3Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx, depth + 1));
  out.ja4Fingerprint = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx, depth + 1));
  out.jsonBody = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody(ctx, depth + 1));
  out.method = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod(ctx, depth + 1));
  out.queryString = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString(ctx, depth + 1));
  out.singleHeader = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader(ctx, depth + 1));
  out.singleQueryArgument = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx, depth + 1));
  out.uriFragment = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriFragment(ctx, depth + 1));
  out.uriPath = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath(ctx, depth + 1));
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments:WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchBody:WebAclRuleStatementXssMatchStatementFieldToMatchBody
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchCookies:WebAclRuleStatementXssMatchStatementFieldToMatchCookies
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPatterns = (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx, depth + 1))]);
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern:WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx, depth + 1));
  out.excludedCookies = (depth > 4 ? [] : [""]);
  out.includedCookies = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll:WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchHeader:WebAclRuleStatementXssMatchStatementFieldToMatchHeader
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern:WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx, depth + 1));
  out.excludedHeaders = (depth > 4 ? [] : [""]);
  out.includedHeaders = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll:WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder:WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint:WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint:WebAclRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa4Fingerprint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody:WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invalidFallbackBehavior = "";
  out.matchPattern = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx, depth + 1));
  out.matchScope = "";
  out.oversizeHandling = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern:WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.all = (depth > 4 ? {} : T_wafv2.wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx, depth + 1));
  out.includedPaths = (depth > 4 ? [] : [""]);
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll:WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchMethod:WebAclRuleStatementXssMatchStatementFieldToMatchMethod
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchQueryString:WebAclRuleStatementXssMatchStatementFieldToMatchQueryString
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader:WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument:WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchUriFragment:WebAclRuleStatementXssMatchStatementFieldToMatchUriFragment
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriFragment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fallbackBehavior = "";
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementFieldToMatchUriPath:WebAclRuleStatementXssMatchStatementFieldToMatchUriPath
export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  return out;
}

// aws:wafv2/WebAclRuleStatementXssMatchStatementTextTransformation:WebAclRuleStatementXssMatchStatementTextTransformation
export function wafv2_WebAclRuleStatementXssMatchStatementTextTransformation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.type = "";
  return out;
}

// aws:wafv2/WebAclRuleVisibilityConfig:WebAclRuleVisibilityConfig
export function wafv2_WebAclRuleVisibilityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchMetricsEnabled = false;
  out.metricName = "";
  out.sampledRequestsEnabled = false;
  return out;
}

// aws:wafv2/WebAclVisibilityConfig:WebAclVisibilityConfig
export function wafv2_WebAclVisibilityConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchMetricsEnabled = false;
  out.metricName = "";
  out.sampledRequestsEnabled = false;
  return out;
}

// aws:wafv2/getRegexPatternSetRegularExpression:getRegexPatternSetRegularExpression
export function wafv2_getRegexPatternSetRegularExpression(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.regexString = "";
  return out;
}
