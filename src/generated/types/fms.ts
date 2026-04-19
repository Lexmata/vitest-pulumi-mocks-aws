// GENERATED FILE — do not edit.
// Service: fms   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_fms from "./fms.js";

// aws:fms/PolicyExcludeMap:PolicyExcludeMap
export function fms_PolicyExcludeMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [""]);
  out.orgunits = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fms/PolicyIncludeMap:PolicyIncludeMap
export function fms_PolicyIncludeMap(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [""]);
  out.orgunits = (depth > 4 ? [] : [""]);
  return out;
}

// aws:fms/PolicySecurityServicePolicyData:PolicySecurityServicePolicyData
export function fms_PolicySecurityServicePolicyData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.managedServiceData = "";
  out.policyOption = (depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOption(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOption:PolicySecurityServicePolicyDataPolicyOption
export function fms_PolicySecurityServicePolicyDataPolicyOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkAclCommonPolicy = (depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy(ctx, depth + 1));
  out.networkFirewallPolicy = (depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy(ctx, depth + 1));
  out.thirdPartyFirewallPolicy = (depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy(ctx, depth + 1));
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkAclEntrySet = (depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet(ctx, depth + 1));
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firstEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry(ctx, depth + 1))]);
  out.forceRemediateForFirstEntries = false;
  out.forceRemediateForLastEntries = false;
  out.lastEntries = (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry(ctx, depth + 1))]);
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  out.egress = false;
  out.icmpTypeCodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode(ctx, depth + 1))]);
  out.ipv6CidrBlock = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = 0;
  out.type = 0;
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlock = "10.0.0.0/16";
  out.egress = false;
  out.icmpTypeCodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode(ctx, depth + 1))]);
  out.ipv6CidrBlock = "";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_fms.fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.ruleAction = "";
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.code = 0;
  out.type = 0;
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange:PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.from = 0;
  out.to = 0;
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy:PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firewallDeploymentModel = "";
  return out;
}

// aws:fms/PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy:PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
export function fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firewallDeploymentModel = "";
  return out;
}

// aws:fms/ResourceSetResourceSet:ResourceSetResourceSet
export function fms_ResourceSetResourceSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastUpdateTime = "";
  out.name = ctx.name;
  out.resourceSetStatus = "";
  out.resourceTypeLists = (depth > 4 ? [] : [""]);
  out.updateToken = "";
  return out;
}

// aws:fms/ResourceSetTimeouts:ResourceSetTimeouts
export function fms_ResourceSetTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}
