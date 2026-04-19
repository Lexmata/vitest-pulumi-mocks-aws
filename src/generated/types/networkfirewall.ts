// GENERATED FILE — do not edit.
// Service: networkfirewall   (83 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_networkfirewall from "./networkfirewall.js";

// aws:networkfirewall/FirewallEncryptionConfiguration:FirewallEncryptionConfiguration
export function networkfirewall_FirewallEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  out.type = "";
  return out;
}

// aws:networkfirewall/FirewallFirewallStatus:FirewallFirewallStatus
export function networkfirewall_FirewallFirewallStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.syncStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallFirewallStatusSyncState(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/FirewallFirewallStatusSyncState:FirewallFirewallStatusSyncState
export function networkfirewall_FirewallFirewallStatusSyncState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachments = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallFirewallStatusSyncStateAttachment(ctx, depth + 1))]);
  out.availabilityZone = ctx.region + "a";
  return out;
}

// aws:networkfirewall/FirewallFirewallStatusSyncStateAttachment:FirewallFirewallStatusSyncStateAttachment
export function networkfirewall_FirewallFirewallStatusSyncStateAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointId = h.id(ctx, "endpointId");
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:networkfirewall/FirewallPolicyEncryptionConfiguration:FirewallPolicyEncryptionConfiguration
export function networkfirewall_FirewallPolicyEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  out.type = "";
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicy:FirewallPolicyFirewallPolicy
export function networkfirewall_FirewallPolicyFirewallPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyVariables = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables(ctx, depth + 1));
  out.statefulDefaultActions = (depth > 4 ? [] : [""]);
  out.statefulEngineOptions = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions(ctx, depth + 1));
  out.statefulRuleGroupReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference(ctx, depth + 1))]);
  out.statelessCustomActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction(ctx, depth + 1))]);
  out.statelessDefaultActions = (depth > 4 ? [] : [""]);
  out.statelessFragmentDefaultActions = (depth > 4 ? [] : [""]);
  out.statelessRuleGroupReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference(ctx, depth + 1))]);
  out.tlsInspectionConfigurationArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyPolicyVariables:FirewallPolicyFirewallPolicyPolicyVariables
export function networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleVariables = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable:FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable
export function networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipSet = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet(ctx, depth + 1));
  out.key = "";
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet:FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet
export function networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definitions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatefulEngineOptions:FirewallPolicyFirewallPolicyStatefulEngineOptions
export function networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flowTimeouts = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts(ctx, depth + 1));
  out.ruleOrder = "";
  out.streamExceptionPolicy = "";
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts:FirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts
export function networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tcpIdleTimeoutSeconds = 30;
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatefulRuleGroupReference:FirewallPolicyFirewallPolicyStatefulRuleGroupReference
export function networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.override = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride(ctx, depth + 1));
  out.priority = 0;
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride:FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride
export function networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatelessCustomAction:FirewallPolicyFirewallPolicyStatelessCustomAction
export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionDefinition = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition(ctx, depth + 1));
  out.actionName = "";
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition:FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition
export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.publishMetricAction = (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction:FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction
export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension:FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension
export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:networkfirewall/FirewallPolicyFirewallPolicyStatelessRuleGroupReference:FirewallPolicyFirewallPolicyStatelessRuleGroupReference
export function networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/FirewallSubnetMapping:FirewallSubnetMapping
export function networkfirewall_FirewallSubnetMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipAddressType = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:networkfirewall/LoggingConfigurationLoggingConfiguration:LoggingConfigurationLoggingConfiguration
export function networkfirewall_LoggingConfigurationLoggingConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDestinationConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/LoggingConfigurationLoggingConfigurationLogDestinationConfig:LoggingConfigurationLoggingConfigurationLogDestinationConfig
export function networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logDestination = {};
  out.logDestinationType = "";
  out.logType = "";
  return out;
}

// aws:networkfirewall/RuleGroupEncryptionConfiguration:RuleGroupEncryptionConfiguration
export function networkfirewall_RuleGroupEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  out.type = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroup:RuleGroupRuleGroup
export function networkfirewall_RuleGroupRuleGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.referenceSets = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupReferenceSets(ctx, depth + 1));
  out.ruleVariables = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRuleVariables(ctx, depth + 1));
  out.rulesSource = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSource(ctx, depth + 1));
  out.statefulRuleOptions = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupStatefulRuleOptions(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupReferenceSets:RuleGroupRuleGroupReferenceSets
export function networkfirewall_RuleGroupRuleGroupReferenceSets(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipSetReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupReferenceSetsIpSetReference:RuleGroupRuleGroupReferenceSetsIpSetReference
export function networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipSetReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference(ctx, depth + 1))]);
  out.key = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference:RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference
export function networkfirewall_RuleGroupRuleGroupReferenceSetsIpSetReferenceIpSetReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.referenceArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRuleVariables:RuleGroupRuleGroupRuleVariables
export function networkfirewall_RuleGroupRuleGroupRuleVariables(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet(ctx, depth + 1))]);
  out.portSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRuleVariablesIpSet:RuleGroupRuleGroupRuleVariablesIpSet
export function networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipSet = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet(ctx, depth + 1));
  out.key = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRuleVariablesIpSetIpSet:RuleGroupRuleGroupRuleVariablesIpSetIpSet
export function networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definitions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRuleVariablesPortSet:RuleGroupRuleGroupRuleVariablesPortSet
export function networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.portSet = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRuleVariablesPortSetPortSet:RuleGroupRuleGroupRuleVariablesPortSetPortSet
export function networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definitions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSource:RuleGroupRuleGroupRulesSource
export function networkfirewall_RuleGroupRuleGroupRulesSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.rulesSourceList = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList(ctx, depth + 1));
  out.rulesString = "";
  out.statefulRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule(ctx, depth + 1))]);
  out.statelessRulesAndCustomActions = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceRulesSourceList:RuleGroupRuleGroupRulesSourceRulesSourceList
export function networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.generatedRulesType = "";
  out.targetTypes = (depth > 4 ? [] : [""]);
  out.targets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatefulRule:RuleGroupRuleGroupRulesSourceStatefulRule
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.header = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader(ctx, depth + 1));
  out.ruleOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatefulRuleHeader:RuleGroupRuleGroupRulesSourceStatefulRuleHeader
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destination = "";
  out.destinationPort = "";
  out.direction = "";
  out.protocol = "";
  out.source = "";
  out.sourcePort = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption:RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyword = "";
  out.settings = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction(ctx, depth + 1))]);
  out.statelessRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionDefinition = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition(ctx, depth + 1));
  out.actionName = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.publishMetricAction = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.ruleDefinition = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? [] : [""]);
  out.matchAttributes = (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationPorts = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort(ctx, depth + 1))]);
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination(ctx, depth + 1))]);
  out.protocols = (depth > 4 ? [] : [0]);
  out.sourcePorts = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort(ctx, depth + 1))]);
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource(ctx, depth + 1))]);
  out.tcpFlags = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressDefinition = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressDefinition = "";
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag:RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag
export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.flags = (depth > 4 ? [] : [""]);
  out.masks = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/RuleGroupRuleGroupStatefulRuleOptions:RuleGroupRuleGroupStatefulRuleOptions
export function networkfirewall_RuleGroupRuleGroupStatefulRuleOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleOrder = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationCertificate:TlsInspectionConfigurationCertificate
export function networkfirewall_TlsInspectionConfigurationCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  out.certificateSerial = "";
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationCertificateAuthority:TlsInspectionConfigurationCertificateAuthority
export function networkfirewall_TlsInspectionConfigurationCertificateAuthority(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  out.certificateSerial = "";
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationEncryptionConfiguration:TlsInspectionConfigurationEncryptionConfiguration
export function networkfirewall_TlsInspectionConfigurationEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  out.type = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTimeouts:TlsInspectionConfigurationTimeouts
export function networkfirewall_TlsInspectionConfigurationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfiguration:TlsInspectionConfigurationTlsInspectionConfiguration
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.serverCertificateConfiguration = (depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration(ctx, depth + 1));
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArn = h.arn(ctx);
  out.checkCertificateRevocationStatus = (depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus(ctx, depth + 1));
  out.scopes = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope(ctx, depth + 1))]);
  out.serverCertificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.revokedStatusAction = "";
  out.unknownStatusAction = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.destinationPorts = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPort(ctx, depth + 1))]);
  out.destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination(ctx, depth + 1))]);
  out.protocols = (depth > 4 ? [] : [0]);
  out.sourcePorts = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePort(ctx, depth + 1))]);
  out.sources = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressDefinition = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPort:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPort
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPort(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.addressDefinition = "";
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePort:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePort
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePort(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:networkfirewall/TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate:TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate
export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/getFirewallEncryptionConfiguration:getFirewallEncryptionConfiguration
export function networkfirewall_getFirewallEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyId = h.id(ctx, "keyId");
  out.type = "";
  return out;
}

// aws:networkfirewall/getFirewallFirewallStatus:getFirewallFirewallStatus
export function networkfirewall_getFirewallFirewallStatus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capacityUsageSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallFirewallStatusCapacityUsageSummary(ctx, depth + 1))]);
  out.configurationSyncStateSummary = "";
  out.status = "active";
  out.syncStates = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallFirewallStatusSyncState(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/getFirewallFirewallStatusCapacityUsageSummary:getFirewallFirewallStatusCapacityUsageSummary
export function networkfirewall_getFirewallFirewallStatusCapacityUsageSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrs = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/getFirewallFirewallStatusCapacityUsageSummaryCidr:getFirewallFirewallStatusCapacityUsageSummaryCidr
export function networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availableCidrCount = 1;
  out.ipSetReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference(ctx, depth + 1))]);
  out.utilizedCidrCount = 1;
  return out;
}

// aws:networkfirewall/getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference:getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference
export function networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resolvedCidrCount = 1;
  return out;
}

// aws:networkfirewall/getFirewallFirewallStatusSyncState:getFirewallFirewallStatusSyncState
export function networkfirewall_getFirewallFirewallStatusSyncState(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachments = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallFirewallStatusSyncStateAttachment(ctx, depth + 1))]);
  out.availabilityZone = ctx.region + "a";
  return out;
}

// aws:networkfirewall/getFirewallFirewallStatusSyncStateAttachment:getFirewallFirewallStatusSyncStateAttachment
export function networkfirewall_getFirewallFirewallStatusSyncStateAttachment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointId = h.id(ctx, "endpointId");
  out.status = "active";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicy:getFirewallPolicyFirewallPolicy
export function networkfirewall_getFirewallPolicyFirewallPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyVariables = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyPolicyVariable(ctx, depth + 1))]);
  out.statefulDefaultActions = (depth > 4 ? [] : [""]);
  out.statefulEngineOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption(ctx, depth + 1))]);
  out.statefulRuleGroupReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference(ctx, depth + 1))]);
  out.statelessCustomActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction(ctx, depth + 1))]);
  out.statelessDefaultActions = (depth > 4 ? [] : [""]);
  out.statelessFragmentDefaultActions = (depth > 4 ? [] : [""]);
  out.statelessRuleGroupReferences = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference(ctx, depth + 1))]);
  out.tlsInspectionConfigurationArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyPolicyVariable:getFirewallPolicyFirewallPolicyPolicyVariable
export function networkfirewall_getFirewallPolicyFirewallPolicyPolicyVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleVariables = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyPolicyVariableRuleVariable(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyPolicyVariableRuleVariable:getFirewallPolicyFirewallPolicyPolicyVariableRuleVariable
export function networkfirewall_getFirewallPolicyFirewallPolicyPolicyVariableRuleVariable(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ipSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyPolicyVariableRuleVariableIpSet(ctx, depth + 1))]);
  out.key = "";
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyPolicyVariableRuleVariableIpSet:getFirewallPolicyFirewallPolicyPolicyVariableRuleVariableIpSet
export function networkfirewall_getFirewallPolicyFirewallPolicyPolicyVariableRuleVariableIpSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.definitions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatefulEngineOption:getFirewallPolicyFirewallPolicyStatefulEngineOption
export function networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ruleOrder = "";
  out.streamExceptionPolicy = "";
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatefulRuleGroupReference:getFirewallPolicyFirewallPolicyStatefulRuleGroupReference
export function networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.overrides = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride(ctx, depth + 1))]);
  out.priority = 0;
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride:getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride
export function networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatelessCustomAction:getFirewallPolicyFirewallPolicyStatelessCustomAction
export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionDefinitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition(ctx, depth + 1))]);
  out.actionName = "";
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition:getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition
export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.publishMetricActions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction:getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction
export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dimensions = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension(ctx, depth + 1))]);
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension:getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension
export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:networkfirewall/getFirewallPolicyFirewallPolicyStatelessRuleGroupReference:getFirewallPolicyFirewallPolicyStatelessRuleGroupReference
export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessRuleGroupReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.priority = 0;
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:networkfirewall/getFirewallSubnetMapping:getFirewallSubnetMapping
export function networkfirewall_getFirewallSubnetMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}
