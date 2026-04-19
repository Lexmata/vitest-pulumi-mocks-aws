// GENERATED FILE — do not edit.
// Service: route53   (29 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53 from "../types/route53.js";

// aws:route53/cidrCollection:CidrCollection
export function CidrCollection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.version = 0;
  return out;
}

// aws:route53/cidrLocation:CidrLocation
export function CidrLocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (i.cidrBlocks !== undefined ? i.cidrBlocks : (depth > 4 ? [] : ["10.0.0.0/16"]));
  out.cidrCollectionId = (i.cidrCollectionId !== undefined ? i.cidrCollectionId : h.id(ctx, "cidrCollectionId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:route53/delegationSet:DelegationSet
export function DelegationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.nameServers = (depth > 4 ? [] : [""]);
  out.referenceName = (i.referenceName !== undefined ? i.referenceName : "");
  return out;
}

// aws:route53/healthCheck:HealthCheck
export function HealthCheck(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.childHealthThreshold = (i.childHealthThreshold !== undefined ? i.childHealthThreshold : 0);
  out.childHealthchecks = (i.childHealthchecks !== undefined ? i.childHealthchecks : (depth > 4 ? [] : [""]));
  out.cloudwatchAlarmName = (i.cloudwatchAlarmName !== undefined ? i.cloudwatchAlarmName : "");
  out.cloudwatchAlarmRegion = (i.cloudwatchAlarmRegion !== undefined ? i.cloudwatchAlarmRegion : "");
  out.disabled = (i.disabled !== undefined ? i.disabled : false);
  out.enableSni = (i.enableSni !== undefined ? i.enableSni : true);
  out.failureThreshold = (i.failureThreshold !== undefined ? i.failureThreshold : 0);
  out.fqdn = (i.fqdn !== undefined ? i.fqdn : "");
  out.insufficientDataHealthStatus = (i.insufficientDataHealthStatus !== undefined ? i.insufficientDataHealthStatus : "");
  out.invertHealthcheck = (i.invertHealthcheck !== undefined ? i.invertHealthcheck : false);
  out.ipAddress = (i.ipAddress !== undefined ? i.ipAddress : "10.0.0.10");
  out.measureLatency = (i.measureLatency !== undefined ? i.measureLatency : false);
  out.port = (i.port !== undefined ? i.port : 443);
  out.referenceName = (i.referenceName !== undefined ? i.referenceName : "");
  out.regions = (i.regions !== undefined ? i.regions : (depth > 4 ? [] : [""]));
  out.requestInterval = (i.requestInterval !== undefined ? i.requestInterval : 0);
  out.resourcePath = (i.resourcePath !== undefined ? i.resourcePath : "");
  out.routingControlArn = (i.routingControlArn !== undefined ? i.routingControlArn : h.arn(ctx));
  out.searchString = (i.searchString !== undefined ? i.searchString : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.triggers = (i.triggers !== undefined ? i.triggers : {});
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:route53/hostedZoneDnsSec:HostedZoneDnsSec
export function HostedZoneDnsSec(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hostedZoneId = (i.hostedZoneId !== undefined ? i.hostedZoneId : "Z0000000000000000000");
  out.signingStatus = (i.signingStatus !== undefined ? i.signingStatus : "");
  return out;
}

// aws:route53/keySigningKey:KeySigningKey
export function KeySigningKey(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.digestAlgorithmMnemonic = "";
  out.digestAlgorithmType = 0;
  out.digestValue = "";
  out.dnskeyRecord = "";
  out.dsRecord = "";
  out.flag = 0;
  out.hostedZoneId = (i.hostedZoneId !== undefined ? i.hostedZoneId : "Z0000000000000000000");
  out.keyManagementServiceArn = (i.keyManagementServiceArn !== undefined ? i.keyManagementServiceArn : h.arn(ctx));
  out.keyTag = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.publicKey = "";
  out.signingAlgorithmMnemonic = "";
  out.signingAlgorithmType = 0;
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:route53/profilesAssociation:ProfilesAssociation
export function ProfilesAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.profileId = (i.profileId !== undefined ? i.profileId : h.id(ctx, "profileId"));
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.status = "active";
  out.statusMessage = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_route53.route53_ProfilesAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:route53/profilesProfile:ProfilesProfile
export function ProfilesProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.shareStatus = "";
  out.status = "active";
  out.statusMessage = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_route53.route53_ProfilesProfileTimeouts(ctx, depth + 1)));
  return out;
}

// aws:route53/profilesResourceAssociation:ProfilesResourceAssociation
export function ProfilesResourceAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.profileId = (i.profileId !== undefined ? i.profileId : h.id(ctx, "profileId"));
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.resourceProperties = (i.resourceProperties !== undefined ? i.resourceProperties : "");
  out.resourceType = "";
  out.status = "active";
  out.statusMessage = "";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_route53.route53_ProfilesResourceAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:route53/queryLog:QueryLog
export function QueryLog(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cloudwatchLogGroupArn = (i.cloudwatchLogGroupArn !== undefined ? i.cloudwatchLogGroupArn : h.arn(ctx));
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}

// aws:route53/record:Record
export function Record(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliases = (i.aliases !== undefined ? i.aliases : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordAlias(ctx, depth + 1))]));
  out.allowOverwrite = (i.allowOverwrite !== undefined ? i.allowOverwrite : true);
  out.cidrRoutingPolicy = (i.cidrRoutingPolicy !== undefined ? i.cidrRoutingPolicy : (depth > 4 ? {} : T_route53.route53_RecordCidrRoutingPolicy(ctx, depth + 1)));
  out.failoverRoutingPolicies = (i.failoverRoutingPolicies !== undefined ? i.failoverRoutingPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordFailoverRoutingPolicy(ctx, depth + 1))]));
  out.fqdn = "";
  out.geolocationRoutingPolicies = (i.geolocationRoutingPolicies !== undefined ? i.geolocationRoutingPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordGeolocationRoutingPolicy(ctx, depth + 1))]));
  out.geoproximityRoutingPolicy = (i.geoproximityRoutingPolicy !== undefined ? i.geoproximityRoutingPolicy : (depth > 4 ? {} : T_route53.route53_RecordGeoproximityRoutingPolicy(ctx, depth + 1)));
  out.healthCheckId = (i.healthCheckId !== undefined ? i.healthCheckId : h.id(ctx, "healthCheckId"));
  out.latencyRoutingPolicies = (i.latencyRoutingPolicies !== undefined ? i.latencyRoutingPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordLatencyRoutingPolicy(ctx, depth + 1))]));
  out.multivalueAnswerRoutingPolicy = (i.multivalueAnswerRoutingPolicy !== undefined ? i.multivalueAnswerRoutingPolicy : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.records = (i.records !== undefined ? i.records : (depth > 4 ? [] : [""]));
  out.setIdentifier = (i.setIdentifier !== undefined ? i.setIdentifier : "");
  out.ttl = (i.ttl !== undefined ? i.ttl : 0);
  out.type = (i.type !== undefined ? i.type : "");
  out.weightedRoutingPolicies = (i.weightedRoutingPolicies !== undefined ? i.weightedRoutingPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordWeightedRoutingPolicy(ctx, depth + 1))]));
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}

// aws:route53/recordsExclusive:RecordsExclusive
export function RecordsExclusive(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceRecordSets = (i.resourceRecordSets !== undefined ? i.resourceRecordSets : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSet(ctx, depth + 1))]));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_route53.route53_RecordsExclusiveTimeouts(ctx, depth + 1)));
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}

// aws:route53/resolverConfig:ResolverConfig
export function ResolverConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autodefinedReverseFlag = (i.autodefinedReverseFlag !== undefined ? i.autodefinedReverseFlag : "");
  out.ownerId = ctx.accountId;
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  return out;
}

// aws:route53/resolverDnsSecConfig:ResolverDnsSecConfig
export function ResolverDnsSecConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.ownerId = ctx.accountId;
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.validationStatus = "";
  return out;
}

// aws:route53/resolverEndpoint:ResolverEndpoint
export function ResolverEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.direction = (i.direction !== undefined ? i.direction : "");
  out.hostVpcId = h.id(ctx, "hostVpcId");
  out.ipAddresses = (i.ipAddresses !== undefined ? i.ipAddresses : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_ResolverEndpointIpAddress(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.protocols = (i.protocols !== undefined ? i.protocols : (depth > 4 ? [] : [""]));
  out.resolverEndpointType = (i.resolverEndpointType !== undefined ? i.resolverEndpointType : "");
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53/resolverFirewallConfig:ResolverFirewallConfig
export function ResolverFirewallConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.firewallFailOpen = (i.firewallFailOpen !== undefined ? i.firewallFailOpen : "");
  out.ownerId = ctx.accountId;
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  return out;
}

// aws:route53/resolverFirewallDomainList:ResolverFirewallDomainList
export function ResolverFirewallDomainList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domains = (i.domains !== undefined ? i.domains : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53/resolverFirewallRule:ResolverFirewallRule
export function ResolverFirewallRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.blockOverrideDnsType = (i.blockOverrideDnsType !== undefined ? i.blockOverrideDnsType : "");
  out.blockOverrideDomain = (i.blockOverrideDomain !== undefined ? i.blockOverrideDomain : h.endpoint(ctx, "blockOverrideDomain"));
  out.blockOverrideTtl = (i.blockOverrideTtl !== undefined ? i.blockOverrideTtl : 0);
  out.blockResponse = (i.blockResponse !== undefined ? i.blockResponse : "");
  out.firewallDomainListId = (i.firewallDomainListId !== undefined ? i.firewallDomainListId : h.id(ctx, "firewallDomainListId"));
  out.firewallDomainRedirectionAction = (i.firewallDomainRedirectionAction !== undefined ? i.firewallDomainRedirectionAction : "");
  out.firewallRuleGroupId = (i.firewallRuleGroupId !== undefined ? i.firewallRuleGroupId : h.id(ctx, "firewallRuleGroupId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.qType = (i.qType !== undefined ? i.qType : "");
  return out;
}

// aws:route53/resolverFirewallRuleGroup:ResolverFirewallRuleGroup
export function ResolverFirewallRuleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.shareStatus = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53/resolverFirewallRuleGroupAssociation:ResolverFirewallRuleGroupAssociation
export function ResolverFirewallRuleGroupAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.firewallRuleGroupId = (i.firewallRuleGroupId !== undefined ? i.firewallRuleGroupId : h.id(ctx, "firewallRuleGroupId"));
  out.mutationProtection = (i.mutationProtection !== undefined ? i.mutationProtection : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.priority = (i.priority !== undefined ? i.priority : 0);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:route53/resolverQueryLogConfig:ResolverQueryLogConfig
export function ResolverQueryLogConfig(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.destinationArn = (i.destinationArn !== undefined ? i.destinationArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.shareStatus = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:route53/resolverQueryLogConfigAssociation:ResolverQueryLogConfigAssociation
export function ResolverQueryLogConfigAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resolverQueryLogConfigId = (i.resolverQueryLogConfigId !== undefined ? i.resolverQueryLogConfigId : h.id(ctx, "resolverQueryLogConfigId"));
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  return out;
}

// aws:route53/resolverRule:ResolverRule
export function ResolverRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ownerId = ctx.accountId;
  out.resolverEndpointId = (i.resolverEndpointId !== undefined ? i.resolverEndpointId : h.id(ctx, "resolverEndpointId"));
  out.ruleType = (i.ruleType !== undefined ? i.ruleType : "");
  out.shareStatus = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetIps = (i.targetIps !== undefined ? i.targetIps : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_ResolverRuleTargetIp(ctx, depth + 1))]));
  return out;
}

// aws:route53/resolverRuleAssociation:ResolverRuleAssociation
export function ResolverRuleAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resolverRuleId = (i.resolverRuleId !== undefined ? i.resolverRuleId : h.id(ctx, "resolverRuleId"));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}

// aws:route53/trafficPolicy:TrafficPolicy
export function TrafficPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.document = (i.document !== undefined ? i.document : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.type = "";
  out.version = 0;
  return out;
}

// aws:route53/trafficPolicyInstance:TrafficPolicyInstance
export function TrafficPolicyInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.hostedZoneId = (i.hostedZoneId !== undefined ? i.hostedZoneId : "Z0000000000000000000");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.trafficPolicyId = (i.trafficPolicyId !== undefined ? i.trafficPolicyId : h.id(ctx, "trafficPolicyId"));
  out.trafficPolicyVersion = (i.trafficPolicyVersion !== undefined ? i.trafficPolicyVersion : 0);
  out.ttl = (i.ttl !== undefined ? i.ttl : 0);
  return out;
}

// aws:route53/vpcAssociationAuthorization:VpcAssociationAuthorization
export function VpcAssociationAuthorization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.vpcRegion = (i.vpcRegion !== undefined ? i.vpcRegion : "");
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}

// aws:route53/zone:Zone
export function Zone(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.comment = (i.comment !== undefined ? i.comment : "");
  out.delegationSetId = (i.delegationSetId !== undefined ? i.delegationSetId : h.id(ctx, "delegationSetId"));
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nameServers = (depth > 4 ? [] : [""]);
  out.primaryNameServer = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcs = (i.vpcs !== undefined ? i.vpcs : (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_ZoneVpc(ctx, depth + 1))]));
  out.zoneId = h.id(ctx, "zoneId");
  return out;
}

// aws:route53/zoneAssociation:ZoneAssociation
export function ZoneAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.owningAccount = "";
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  out.vpcRegion = (i.vpcRegion !== undefined ? i.vpcRegion : "");
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  return out;
}
