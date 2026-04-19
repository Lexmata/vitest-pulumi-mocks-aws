// GENERATED FILE — do not edit.
// Service: networkfirewall   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_networkfirewall from "../types/networkfirewall.js";

// aws:networkfirewall/firewall:Firewall
export function Firewall(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deleteProtection = (i.deleteProtection !== undefined ? i.deleteProtection : false);
  out.description = (i.description !== undefined ? i.description : "");
  out.enabledAnalysisTypes = (i.enabledAnalysisTypes !== undefined ? i.enabledAnalysisTypes : (depth > 4 ? [] : [""]));
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallEncryptionConfiguration(ctx, depth + 1)));
  out.firewallPolicyArn = (i.firewallPolicyArn !== undefined ? i.firewallPolicyArn : h.arn(ctx));
  out.firewallPolicyChangeProtection = (i.firewallPolicyChangeProtection !== undefined ? i.firewallPolicyChangeProtection : false);
  out.firewallStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallFirewallStatus(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetChangeProtection = (i.subnetChangeProtection !== undefined ? i.subnetChangeProtection : false);
  out.subnetMappings = (i.subnetMappings !== undefined ? i.subnetMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallSubnetMapping(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateToken = "";
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:networkfirewall/firewallPolicy:FirewallPolicy
export function FirewallPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyEncryptionConfiguration(ctx, depth + 1)));
  out.firewallPolicy = (i.firewallPolicy !== undefined ? i.firewallPolicy : (depth > 4 ? {} : T_networkfirewall.networkfirewall_FirewallPolicyFirewallPolicy(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updateToken = "";
  return out;
}

// aws:networkfirewall/loggingConfiguration:LoggingConfiguration
export function LoggingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firewallArn = (i.firewallArn !== undefined ? i.firewallArn : h.arn(ctx));
  out.loggingConfiguration = (i.loggingConfiguration !== undefined ? i.loggingConfiguration : (depth > 4 ? {} : T_networkfirewall.networkfirewall_LoggingConfigurationLoggingConfiguration(ctx, depth + 1)));
  return out;
}

// aws:networkfirewall/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:networkfirewall/ruleGroup:RuleGroup
export function RuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacity = (i.capacity !== undefined ? i.capacity : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupEncryptionConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleGroup = (i.ruleGroup !== undefined ? i.ruleGroup : (depth > 4 ? {} : T_networkfirewall.networkfirewall_RuleGroupRuleGroup(ctx, depth + 1)));
  out.rules = (i.rules !== undefined ? i.rules : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.updateToken = "";
  return out;
}

// aws:networkfirewall/tlsInspectionConfiguration:TlsInspectionConfiguration
export function TlsInspectionConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificateAuthorities = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationCertificateAuthority(ctx, depth + 1))]);
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationCertificate(ctx, depth + 1))]);
  out.description = (i.description !== undefined ? i.description : "");
  out.encryptionConfigurations = (i.encryptionConfigurations !== undefined ? i.encryptionConfigurations : (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationEncryptionConfiguration(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.numberOfAssociations = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTimeouts(ctx, depth + 1)));
  out.tlsInspectionConfiguration = (i.tlsInspectionConfiguration !== undefined ? i.tlsInspectionConfiguration : (depth > 4 ? {} : T_networkfirewall.networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration(ctx, depth + 1)));
  out.tlsInspectionConfigurationId = h.id(ctx, "tlsInspectionConfigurationId");
  out.updateToken = "";
  return out;
}
