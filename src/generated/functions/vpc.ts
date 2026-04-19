// GENERATED FILE — do not edit.
// Service: vpc   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_vpc from "../types/vpc.js";

// aws:vpc/getSecurityGroupRule:getSecurityGroupRule
export function getSecurityGroupRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cidrIpv4 = "";
  out.cidrIpv6 = "";
  out.description = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_vpc.vpc_getSecurityGroupRuleFilter(ctx, depth + 1))]));
  out.fromPort = 443;
  out.id = h.id(ctx, "id");
  out.ipProtocol = "";
  out.isEgress = true;
  out.prefixListId = h.id(ctx, "prefixListId");
  out.referencedSecurityGroupId = h.id(ctx, "referencedSecurityGroupId");
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  out.securityGroupRuleId = (i.securityGroupRuleId !== undefined ? i.securityGroupRuleId : h.id(ctx, "securityGroupRuleId"));
  out.tags = {};
  out.toPort = 443;
  return out;
}

// aws:vpc/getSecurityGroupRules:getSecurityGroupRules
export function getSecurityGroupRules(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_vpc.vpc_getSecurityGroupRulesFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:vpc/getVpcEndpointAssociations:getVpcEndpointAssociations
export function getVpcEndpointAssociations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.associations = (depth > 4 ? [] : [(depth > 4 ? {} : T_vpc.vpc_getVpcEndpointAssociationsAssociation(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.vpcEndpointId = (i.vpcEndpointId !== undefined ? i.vpcEndpointId : h.id(ctx, "vpcEndpointId"));
  return out;
}
