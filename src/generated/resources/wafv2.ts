// GENERATED FILE — do not edit.
// Service: wafv2   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_wafv2 from "../types/wafv2.js";

// aws:wafv2/apiKey:ApiKey
export function ApiKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = "";
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.tokenDomains = (i.tokenDomains !== undefined ? i.tokenDomains : (depth > 4 ? [] : [""]));
  return out;
}

// aws:wafv2/ipSet:IpSet
export function IpSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addresses = (i.addresses !== undefined ? i.addresses : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.ipAddressVersion = (i.ipAddressVersion !== undefined ? i.ipAddressVersion : "");
  out.lockToken = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:wafv2/regexPatternSet:RegexPatternSet
export function RegexPatternSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.lockToken = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.regularExpressions = (i.regularExpressions !== undefined ? i.regularExpressions : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RegexPatternSetRegularExpression(ctx, depth + 1))]));
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:wafv2/ruleGroup:RuleGroup
export function RuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacity = (i.capacity !== undefined ? i.capacity : 0);
  out.customResponseBodies = (i.customResponseBodies !== undefined ? i.customResponseBodies : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupCustomResponseBody(ctx, depth + 1))]));
  out.description = (i.description !== undefined ? i.description : "");
  out.lockToken = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_RuleGroupRule(ctx, depth + 1))]));
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.visibilityConfig = (i.visibilityConfig !== undefined ? i.visibilityConfig : (depth > 4 ? {} : T_wafv2.wafv2_RuleGroupVisibilityConfig(ctx, depth + 1)));
  return out;
}

// aws:wafv2/webAcl:WebAcl
export function WebAcl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationIntegrationUrl = h.endpoint(ctx, "applicationIntegrationUrl");
  out.arn = h.arn(ctx);
  out.associationConfig = (i.associationConfig !== undefined ? i.associationConfig : (depth > 4 ? {} : T_wafv2.wafv2_WebAclAssociationConfig(ctx, depth + 1)));
  out.capacity = 0;
  out.captchaConfig = (i.captchaConfig !== undefined ? i.captchaConfig : (depth > 4 ? {} : T_wafv2.wafv2_WebAclCaptchaConfig(ctx, depth + 1)));
  out.challengeConfig = (i.challengeConfig !== undefined ? i.challengeConfig : (depth > 4 ? {} : T_wafv2.wafv2_WebAclChallengeConfig(ctx, depth + 1)));
  out.customResponseBodies = (i.customResponseBodies !== undefined ? i.customResponseBodies : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclCustomResponseBody(ctx, depth + 1))]));
  out.dataProtectionConfig = (i.dataProtectionConfig !== undefined ? i.dataProtectionConfig : (depth > 4 ? {} : T_wafv2.wafv2_WebAclDataProtectionConfig(ctx, depth + 1)));
  out.defaultAction = (i.defaultAction !== undefined ? i.defaultAction : (depth > 4 ? {} : T_wafv2.wafv2_WebAclDefaultAction(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.lockToken = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.ruleJson = (i.ruleJson !== undefined ? i.ruleJson : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclRule(ctx, depth + 1))]));
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.tokenDomains = (i.tokenDomains !== undefined ? i.tokenDomains : (depth > 4 ? [] : [""]));
  out.visibilityConfig = (i.visibilityConfig !== undefined ? i.visibilityConfig : (depth > 4 ? {} : T_wafv2.wafv2_WebAclVisibilityConfig(ctx, depth + 1)));
  return out;
}

// aws:wafv2/webAclAssociation:WebAclAssociation
export function WebAclAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.webAclArn = (i.webAclArn !== undefined ? i.webAclArn : h.arn(ctx));
  return out;
}

// aws:wafv2/webAclLoggingConfiguration:WebAclLoggingConfiguration
export function WebAclLoggingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDestinationConfigs = (i.logDestinationConfigs !== undefined ? i.logDestinationConfigs : (depth > 4 ? [] : [""]));
  out.loggingFilter = (i.loggingFilter !== undefined ? i.loggingFilter : (depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationLoggingFilter(ctx, depth + 1)));
  out.redactedFields = (i.redactedFields !== undefined ? i.redactedFields : (depth > 4 ? [] : [(depth > 4 ? {} : T_wafv2.wafv2_WebAclLoggingConfigurationRedactedField(ctx, depth + 1))]));
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}
