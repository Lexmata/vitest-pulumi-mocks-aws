// GENERATED FILE — do not edit.
// Service: securityhub   (15 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_securityhub from "../types/securityhub.js";

// aws:securityhub/account:Account
export function Account(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoEnableControls = (i.autoEnableControls !== undefined ? i.autoEnableControls : false);
  out.controlFindingGenerator = (i.controlFindingGenerator !== undefined ? i.controlFindingGenerator : "");
  out.enableDefaultStandards = (i.enableDefaultStandards !== undefined ? i.enableDefaultStandards : true);
  return out;
}

// aws:securityhub/actionTarget:ActionTarget
export function ActionTarget(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:securityhub/automationRule:AutomationRule
export function AutomationRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (i.actions !== undefined ? i.actions : (depth > 4 ? [] : [(depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleAction(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.criteria = (i.criteria !== undefined ? i.criteria : (depth > 4 ? {} : T_securityhub.securityhub_AutomationRuleCriteria(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.isTerminal = (i.isTerminal !== undefined ? i.isTerminal : true);
  out.ruleName = (i.ruleName !== undefined ? i.ruleName : "");
  out.ruleOrder = (i.ruleOrder !== undefined ? i.ruleOrder : 0);
  out.ruleStatus = (i.ruleStatus !== undefined ? i.ruleStatus : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:securityhub/configurationPolicy:ConfigurationPolicy
export function ConfigurationPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurationPolicy = (i.configurationPolicy !== undefined ? i.configurationPolicy : (depth > 4 ? {} : T_securityhub.securityhub_ConfigurationPolicyConfigurationPolicy(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:securityhub/configurationPolicyAssociation:ConfigurationPolicyAssociation
export function ConfigurationPolicyAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyId = (i.policyId !== undefined ? i.policyId : h.id(ctx, "policyId"));
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  return out;
}

// aws:securityhub/findingAggregator:FindingAggregator
export function FindingAggregator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.linkingMode = (i.linkingMode !== undefined ? i.linkingMode : "");
  out.specifiedRegions = (i.specifiedRegions !== undefined ? i.specifiedRegions : (depth > 4 ? [] : [""]));
  return out;
}

// aws:securityhub/insight:Insight
export function Insight(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? {} : T_securityhub.securityhub_InsightFilters(ctx, depth + 1)));
  out.groupByAttribute = (i.groupByAttribute !== undefined ? i.groupByAttribute : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:securityhub/inviteAccepter:InviteAccepter
export function InviteAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invitationId = h.id(ctx, "invitationId");
  out.masterId = (i.masterId !== undefined ? i.masterId : h.id(ctx, "masterId"));
  return out;
}

// aws:securityhub/member:Member
export function Member(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.email = (i.email !== undefined ? i.email : "");
  out.invite = (i.invite !== undefined ? i.invite : false);
  out.masterId = h.id(ctx, "masterId");
  out.memberStatus = "";
  return out;
}

// aws:securityhub/organizationAdminAccount:OrganizationAdminAccount
export function OrganizationAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminAccountId = (i.adminAccountId !== undefined ? i.adminAccountId : h.id(ctx, "adminAccountId"));
  return out;
}

// aws:securityhub/organizationConfiguration:OrganizationConfiguration
export function OrganizationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoEnable = (i.autoEnable !== undefined ? i.autoEnable : false);
  out.autoEnableStandards = (i.autoEnableStandards !== undefined ? i.autoEnableStandards : "");
  out.organizationConfiguration = (i.organizationConfiguration !== undefined ? i.organizationConfiguration : (depth > 4 ? {} : T_securityhub.securityhub_OrganizationConfigurationOrganizationConfiguration(ctx, depth + 1)));
  return out;
}

// aws:securityhub/productSubscription:ProductSubscription
export function ProductSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.productArn = (i.productArn !== undefined ? i.productArn : h.arn(ctx));
  return out;
}

// aws:securityhub/standardsControl:StandardsControl
export function StandardsControl(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.controlId = h.id(ctx, "controlId");
  out.controlStatus = (i.controlStatus !== undefined ? i.controlStatus : "");
  out.controlStatusUpdatedAt = "";
  out.description = "";
  out.disabledReason = (i.disabledReason !== undefined ? i.disabledReason : "");
  out.relatedRequirements = (depth > 4 ? [] : [""]);
  out.remediationUrl = h.endpoint(ctx, "remediationUrl");
  out.severityRating = "";
  out.standardsControlArn = (i.standardsControlArn !== undefined ? i.standardsControlArn : h.arn(ctx));
  out.title = "";
  return out;
}

// aws:securityhub/standardsControlAssociation:StandardsControlAssociation
export function StandardsControlAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associationStatus = (i.associationStatus !== undefined ? i.associationStatus : "");
  out.securityControlId = (i.securityControlId !== undefined ? i.securityControlId : h.id(ctx, "securityControlId"));
  out.standardsArn = (i.standardsArn !== undefined ? i.standardsArn : h.arn(ctx));
  out.updatedReason = (i.updatedReason !== undefined ? i.updatedReason : "");
  return out;
}

// aws:securityhub/standardsSubscription:StandardsSubscription
export function StandardsSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.standardsArn = (i.standardsArn !== undefined ? i.standardsArn : h.arn(ctx));
  return out;
}
