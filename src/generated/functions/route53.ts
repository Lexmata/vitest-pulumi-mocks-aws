// GENERATED FILE — do not edit.
// Service: route53   (15 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53 from "../types/route53.js";

// aws:route53/getDelegationSet:getDelegationSet
export function getDelegationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.nameServers = (depth > 4 ? [] : [""]);
  return out;
}

// aws:route53/getProfilesProfiles:getProfilesProfiles
export function getProfilesProfiles(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.profiles = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getProfilesProfilesProfile(ctx, depth + 1))]);
  return out;
}

// aws:route53/getQueryLogConfig:getQueryLogConfig
export function getQueryLogConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destinationArn = h.arn(ctx);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getQueryLogConfigFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.resolverQueryLogConfigId = (i.resolverQueryLogConfigId !== undefined ? i.resolverQueryLogConfigId : h.id(ctx, "resolverQueryLogConfigId"));
  out.shareStatus = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:route53/getRecords:getRecords
export function getRecords(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.resourceRecordSets = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSet(ctx, depth + 1))]);
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}

// aws:route53/getResolverEndpoint:getResolverEndpoint
export function getResolverEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.direction = "";
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getResolverEndpointFilter(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.ipAddresses = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.protocols = (depth > 4 ? [] : [""]);
  out.resolverEndpointId = (i.resolverEndpointId !== undefined ? i.resolverEndpointId : h.id(ctx, "resolverEndpointId"));
  out.resolverEndpointType = "";
  out.status = "active";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:route53/getResolverFirewallConfig:getResolverFirewallConfig
export function getResolverFirewallConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firewallFailOpen = "";
  out.id = h.id(ctx, "id");
  out.ownerId = ctx.accountId;
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  return out;
}

// aws:route53/getResolverFirewallDomainList:getResolverFirewallDomainList
export function getResolverFirewallDomainList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.creatorRequestId = h.id(ctx, "creatorRequestId");
  out.domainCount = 1;
  out.firewallDomainListId = (i.firewallDomainListId !== undefined ? i.firewallDomainListId : h.id(ctx, "firewallDomainListId"));
  out.id = h.id(ctx, "id");
  out.managedOwnerName = "";
  out.modificationTime = "";
  out.name = ctx.name;
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:route53/getResolverFirewallRuleGroup:getResolverFirewallRuleGroup
export function getResolverFirewallRuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.creatorRequestId = h.id(ctx, "creatorRequestId");
  out.firewallRuleGroupId = (i.firewallRuleGroupId !== undefined ? i.firewallRuleGroupId : h.id(ctx, "firewallRuleGroupId"));
  out.id = h.id(ctx, "id");
  out.modificationTime = "";
  out.name = ctx.name;
  out.ownerId = ctx.accountId;
  out.ruleCount = 1;
  out.shareStatus = "";
  out.status = "active";
  out.statusMessage = "";
  return out;
}

// aws:route53/getResolverFirewallRuleGroupAssociation:getResolverFirewallRuleGroupAssociation
export function getResolverFirewallRuleGroupAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.creatorRequestId = h.id(ctx, "creatorRequestId");
  out.firewallRuleGroupAssociationId = (i.firewallRuleGroupAssociationId !== undefined ? i.firewallRuleGroupAssociationId : h.id(ctx, "firewallRuleGroupAssociationId"));
  out.firewallRuleGroupId = h.id(ctx, "firewallRuleGroupId");
  out.id = h.id(ctx, "id");
  out.managedOwnerName = "";
  out.modificationTime = "";
  out.mutationProtection = "";
  out.name = ctx.name;
  out.priority = 0;
  out.status = "active";
  out.statusMessage = "";
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:route53/getResolverFirewallRules:getResolverFirewallRules
export function getResolverFirewallRules(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.firewallRuleGroupId = (i.firewallRuleGroupId !== undefined ? i.firewallRuleGroupId : h.id(ctx, "firewallRuleGroupId"));
  out.firewallRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getResolverFirewallRulesFirewallRule(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.priority = (i.priority !== undefined ? i.priority : 0);
  return out;
}

// aws:route53/getResolverRule:getResolverRule
export function getResolverRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.resolverEndpointId = (i.resolverEndpointId !== undefined ? i.resolverEndpointId : h.id(ctx, "resolverEndpointId"));
  out.resolverRuleId = (i.resolverRuleId !== undefined ? i.resolverRuleId : h.id(ctx, "resolverRuleId"));
  out.ruleType = (i.ruleType !== undefined ? i.ruleType : "");
  out.shareStatus = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:route53/getResolverRules:getResolverRules
export function getResolverRules(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.nameRegex = (i.nameRegex !== undefined ? i.nameRegex : "");
  out.ownerId = (i.ownerId !== undefined ? i.ownerId : ctx.accountId);
  out.resolverEndpointId = (i.resolverEndpointId !== undefined ? i.resolverEndpointId : h.id(ctx, "resolverEndpointId"));
  out.resolverRuleIds = (depth > 4 ? [] : [""]);
  out.ruleType = (i.ruleType !== undefined ? i.ruleType : "");
  out.shareStatus = (i.shareStatus !== undefined ? i.shareStatus : "");
  return out;
}

// aws:route53/getTrafficPolicyDocument:getTrafficPolicyDocument
export function getTrafficPolicyDocument(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoints = (i.endpoints !== undefined ? i.endpoints : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentEndpoint(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.json = "";
  out.recordType = (i.recordType !== undefined ? i.recordType : "");
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRule(ctx, depth + 1))]));
  out.startEndpoint = (i.startEndpoint !== undefined ? i.startEndpoint : h.endpoint(ctx, "startEndpoint"));
  out.startRule = (i.startRule !== undefined ? i.startRule : "");
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:route53/getZone:getZone
export function getZone(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.callerReference = "";
  out.comment = "";
  out.id = h.id(ctx, "id");
  out.linkedServiceDescription = "";
  out.linkedServicePrincipal = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nameServers = (depth > 4 ? [] : [""]);
  out.primaryNameServer = "";
  out.privateZone = (i.privateZone !== undefined ? i.privateZone : false);
  out.resourceRecordSetCount = 1;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}

// aws:route53/getZones:getZones
export function getZones(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  return out;
}
