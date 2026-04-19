// GENERATED FILE — do not edit.
// Service: networkfirewall   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_networkfirewall from "../types/networkfirewall.js";

// aws:networkfirewall/getFirewall:getFirewall
export function getFirewall(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.deleteProtection = false;
  out.description = "";
  out.enabledAnalysisTypes = (depth > 4 ? [] : [""]);
  out.encryptionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallEncryptionConfiguration(ctx, depth + 1))]);
  out.firewallPolicyArn = h.arn(ctx);
  out.firewallPolicyChangeProtection = false;
  out.firewallStatuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallFirewallStatus(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetChangeProtection = false;
  out.subnetMappings = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallSubnetMapping(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updateToken = "";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:networkfirewall/getFirewallPolicy:getFirewallPolicy
export function getFirewallPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.description = "";
  out.firewallPolicies = (depth > 4 ? [] : [(depth > 4 ? {} : T_networkfirewall.networkfirewall_getFirewallPolicyFirewallPolicy(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updateToken = "";
  return out;
}

// aws:networkfirewall/getResourcePolicy:getResourcePolicy
export function getResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.policy = "";
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}
