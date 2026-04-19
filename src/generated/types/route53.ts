// GENERATED FILE — do not edit.
// Service: route53   (41 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53 from "./route53.js";

// aws:route53/ProfilesAssociationTimeouts:ProfilesAssociationTimeouts
export function route53_ProfilesAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:route53/ProfilesProfileTimeouts:ProfilesProfileTimeouts
export function route53_ProfilesProfileTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.read = "";
  return out;
}

// aws:route53/ProfilesResourceAssociationTimeouts:ProfilesResourceAssociationTimeouts
export function route53_ProfilesResourceAssociationTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.read = "";
  return out;
}

// aws:route53/RecordAlias:RecordAlias
export function route53_RecordAlias(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.evaluateTargetHealth = false;
  out.name = ctx.name;
  out.zoneId = h.id(ctx, "zoneId");
  return out;
}

// aws:route53/RecordCidrRoutingPolicy:RecordCidrRoutingPolicy
export function route53_RecordCidrRoutingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionId = h.id(ctx, "collectionId");
  out.locationName = "";
  return out;
}

// aws:route53/RecordFailoverRoutingPolicy:RecordFailoverRoutingPolicy
export function route53_RecordFailoverRoutingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:route53/RecordGeolocationRoutingPolicy:RecordGeolocationRoutingPolicy
export function route53_RecordGeolocationRoutingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.continent = "";
  out.country = "";
  out.subdivision = "";
  return out;
}

// aws:route53/RecordGeoproximityRoutingPolicy:RecordGeoproximityRoutingPolicy
export function route53_RecordGeoproximityRoutingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsRegion = "";
  out.bias = 0;
  out.coordinates = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordGeoproximityRoutingPolicyCoordinate(ctx, depth + 1))]);
  out.localZoneGroup = "";
  return out;
}

// aws:route53/RecordGeoproximityRoutingPolicyCoordinate:RecordGeoproximityRoutingPolicyCoordinate
export function route53_RecordGeoproximityRoutingPolicyCoordinate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.latitude = "";
  out.longitude = "";
  return out;
}

// aws:route53/RecordLatencyRoutingPolicy:RecordLatencyRoutingPolicy
export function route53_RecordLatencyRoutingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.region = ctx.region;
  return out;
}

// aws:route53/RecordWeightedRoutingPolicy:RecordWeightedRoutingPolicy
export function route53_RecordWeightedRoutingPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.weight = 0;
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSet:RecordsExclusiveResourceRecordSet
export function route53_RecordsExclusiveResourceRecordSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasTarget = (depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSetAliasTarget(ctx, depth + 1));
  out.cidrRoutingConfig = (depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSetCidrRoutingConfig(ctx, depth + 1));
  out.failover = "";
  out.geolocation = (depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSetGeolocation(ctx, depth + 1));
  out.geoproximityLocation = (depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSetGeoproximityLocation(ctx, depth + 1));
  out.healthCheckId = h.id(ctx, "healthCheckId");
  out.multiValueAnswer = false;
  out.name = ctx.name;
  out.region = ctx.region;
  out.resourceRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSetResourceRecord(ctx, depth + 1))]);
  out.setIdentifier = "";
  out.trafficPolicyInstanceId = h.id(ctx, "trafficPolicyInstanceId");
  out.ttl = 0;
  out.type = "";
  out.weight = 0;
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSetAliasTarget:RecordsExclusiveResourceRecordSetAliasTarget
export function route53_RecordsExclusiveResourceRecordSetAliasTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.evaluateTargetHealth = false;
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSetCidrRoutingConfig:RecordsExclusiveResourceRecordSetCidrRoutingConfig
export function route53_RecordsExclusiveResourceRecordSetCidrRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionId = h.id(ctx, "collectionId");
  out.locationName = "";
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSetGeolocation:RecordsExclusiveResourceRecordSetGeolocation
export function route53_RecordsExclusiveResourceRecordSetGeolocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.continentCode = "";
  out.countryCode = "";
  out.subdivisionCode = "";
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSetGeoproximityLocation:RecordsExclusiveResourceRecordSetGeoproximityLocation
export function route53_RecordsExclusiveResourceRecordSetGeoproximityLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsRegion = "";
  out.bias = 0;
  out.coordinates = (depth > 4 ? {} : T_route53.route53_RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates(ctx, depth + 1));
  out.localZoneGroup = "";
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates:RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates
export function route53_RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.latitude = "";
  out.longitude = "";
  return out;
}

// aws:route53/RecordsExclusiveResourceRecordSetResourceRecord:RecordsExclusiveResourceRecordSetResourceRecord
export function route53_RecordsExclusiveResourceRecordSetResourceRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:route53/RecordsExclusiveTimeouts:RecordsExclusiveTimeouts
export function route53_RecordsExclusiveTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}

// aws:route53/ResolverEndpointIpAddress:ResolverEndpointIpAddress
export function route53_ResolverEndpointIpAddress(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ip = "";
  out.ipId = h.id(ctx, "ipId");
  out.ipv6 = "";
  out.subnetId = h.id(ctx, "subnetId", "subnet");
  return out;
}

// aws:route53/ResolverRuleTargetIp:ResolverRuleTargetIp
export function route53_ResolverRuleTargetIp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ip = "";
  out.ipv6 = "";
  out.port = 443;
  out.protocol = "";
  return out;
}

// aws:route53/ZoneVpc:ZoneVpc
export function route53_ZoneVpc(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcRegion = "";
  return out;
}

// aws:route53/getProfilesProfilesProfile:getProfilesProfilesProfile
export function route53_getProfilesProfilesProfile(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.shareStatus = "";
  return out;
}

// aws:route53/getQueryLogConfigFilter:getQueryLogConfigFilter
export function route53_getQueryLogConfigFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:route53/getRecordsResourceRecordSet:getRecordsResourceRecordSet
export function route53_getRecordsResourceRecordSet(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aliasTarget = (depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSetAliasTarget(ctx, depth + 1));
  out.cidrRoutingConfig = (depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSetCidrRoutingConfig(ctx, depth + 1));
  out.failover = "";
  out.geolocation = (depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSetGeolocation(ctx, depth + 1));
  out.geoproximityLocation = (depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSetGeoproximityLocation(ctx, depth + 1));
  out.healthCheckId = h.id(ctx, "healthCheckId");
  out.multiValueAnswer = false;
  out.name = ctx.name;
  out.region = ctx.region;
  out.resourceRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSetResourceRecord(ctx, depth + 1))]);
  out.setIdentifier = "";
  out.trafficPolicyInstanceId = h.id(ctx, "trafficPolicyInstanceId");
  out.ttl = 0;
  out.type = "";
  out.weight = 0;
  return out;
}

// aws:route53/getRecordsResourceRecordSetAliasTarget:getRecordsResourceRecordSetAliasTarget
export function route53_getRecordsResourceRecordSetAliasTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = h.endpoint(ctx, "dnsName");
  out.evaluateTargetHealth = false;
  out.hostedZoneId = "Z0000000000000000000";
  return out;
}

// aws:route53/getRecordsResourceRecordSetCidrRoutingConfig:getRecordsResourceRecordSetCidrRoutingConfig
export function route53_getRecordsResourceRecordSetCidrRoutingConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.collectionId = h.id(ctx, "collectionId");
  out.locationName = "";
  return out;
}

// aws:route53/getRecordsResourceRecordSetGeolocation:getRecordsResourceRecordSetGeolocation
export function route53_getRecordsResourceRecordSetGeolocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.continentCode = "";
  out.countryCode = "";
  out.subdivisionCode = "";
  return out;
}

// aws:route53/getRecordsResourceRecordSetGeoproximityLocation:getRecordsResourceRecordSetGeoproximityLocation
export function route53_getRecordsResourceRecordSetGeoproximityLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsRegion = "";
  out.bias = 0;
  out.coordinates = (depth > 4 ? {} : T_route53.route53_getRecordsResourceRecordSetGeoproximityLocationCoordinates(ctx, depth + 1));
  out.localZoneGroup = "";
  return out;
}

// aws:route53/getRecordsResourceRecordSetGeoproximityLocationCoordinates:getRecordsResourceRecordSetGeoproximityLocationCoordinates
export function route53_getRecordsResourceRecordSetGeoproximityLocationCoordinates(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.latitude = "";
  out.longitude = "";
  return out;
}

// aws:route53/getRecordsResourceRecordSetResourceRecord:getRecordsResourceRecordSetResourceRecord
export function route53_getRecordsResourceRecordSetResourceRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:route53/getResolverEndpointFilter:getResolverEndpointFilter
export function route53_getResolverEndpointFilter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:route53/getResolverFirewallRulesFirewallRule:getResolverFirewallRulesFirewallRule
export function route53_getResolverFirewallRulesFirewallRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = "";
  out.blockOverrideDnsType = "";
  out.blockOverrideDomain = h.endpoint(ctx, "blockOverrideDomain");
  out.blockOverrideTtl = 0;
  out.blockResponse = "";
  out.creationTime = "";
  out.creatorRequestId = h.id(ctx, "creatorRequestId");
  out.firewallDomainListId = h.id(ctx, "firewallDomainListId");
  out.firewallRuleGroupId = h.id(ctx, "firewallRuleGroupId");
  out.modificationTime = "";
  out.name = ctx.name;
  out.priority = 0;
  return out;
}

// aws:route53/getTrafficPolicyDocumentEndpoint:getTrafficPolicyDocumentEndpoint
export function route53_getTrafficPolicyDocumentEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.region = ctx.region;
  out.type = "";
  out.value = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRule:getTrafficPolicyDocumentRule
export function route53_getTrafficPolicyDocumentRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.geoProximityLocations = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRuleGeoProximityLocation(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.items = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRuleItem(ctx, depth + 1))]);
  out.locations = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRuleLocation(ctx, depth + 1))]);
  out.primary = (depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRulePrimary(ctx, depth + 1));
  out.regions = (depth > 4 ? [] : [(depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRuleRegion(ctx, depth + 1))]);
  out.secondary = (depth > 4 ? {} : T_route53.route53_getTrafficPolicyDocumentRuleSecondary(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRuleGeoProximityLocation:getTrafficPolicyDocumentRuleGeoProximityLocation
export function route53_getTrafficPolicyDocumentRuleGeoProximityLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bias = "";
  out.endpointReference = "";
  out.evaluateTargetHealth = false;
  out.healthCheck = "";
  out.latitude = "";
  out.longitude = "";
  out.region = ctx.region;
  out.ruleReference = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRuleItem:getTrafficPolicyDocumentRuleItem
export function route53_getTrafficPolicyDocumentRuleItem(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointReference = "";
  out.healthCheck = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRuleLocation:getTrafficPolicyDocumentRuleLocation
export function route53_getTrafficPolicyDocumentRuleLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.continent = "";
  out.country = "";
  out.endpointReference = "";
  out.evaluateTargetHealth = false;
  out.healthCheck = "";
  out.isDefault = true;
  out.ruleReference = "";
  out.subdivision = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRulePrimary:getTrafficPolicyDocumentRulePrimary
export function route53_getTrafficPolicyDocumentRulePrimary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointReference = "";
  out.evaluateTargetHealth = false;
  out.healthCheck = "";
  out.ruleReference = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRuleRegion:getTrafficPolicyDocumentRuleRegion
export function route53_getTrafficPolicyDocumentRuleRegion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointReference = "";
  out.evaluateTargetHealth = false;
  out.healthCheck = "";
  out.region = ctx.region;
  out.ruleReference = "";
  return out;
}

// aws:route53/getTrafficPolicyDocumentRuleSecondary:getTrafficPolicyDocumentRuleSecondary
export function route53_getTrafficPolicyDocumentRuleSecondary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpointReference = "";
  out.evaluateTargetHealth = false;
  out.healthCheck = "";
  out.ruleReference = "";
  return out;
}
