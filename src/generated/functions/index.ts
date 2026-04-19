// GENERATED FILE — do not edit.
// Service: index   (12 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_index from "../types/index.js";

// aws:index/getArn:getArn
export function getArn(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.account = "";
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.partition = ctx.partition;
  out.region = ctx.region;
  out.resource = "";
  out.service = "";
  return out;
}

// aws:index/getAvailabilityZone:getAvailabilityZone
export function getAvailabilityZone(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allAvailabilityZones = (i.allAvailabilityZones !== undefined ? i.allAvailabilityZones : false);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_index.index_getAvailabilityZoneFilter(ctx, depth + 1))]));
  out.groupName = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nameSuffix = "";
  out.networkBorderGroup = "";
  out.optInStatus = "";
  out.parentZoneId = h.id(ctx, "parentZoneId");
  out.parentZoneName = "";
  out.region = ctx.region;
  out.state = (i.state !== undefined ? i.state : "active");
  out.zoneId = (i.zoneId !== undefined ? i.zoneId : h.id(ctx, "zoneId"));
  out.zoneType = "";
  return out;
}

// aws:index/getAvailabilityZones:getAvailabilityZones
export function getAvailabilityZones(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allAvailabilityZones = (i.allAvailabilityZones !== undefined ? i.allAvailabilityZones : false);
  out.excludeNames = (i.excludeNames !== undefined ? i.excludeNames : (depth > 4 ? [] : [""]));
  out.excludeZoneIds = (i.excludeZoneIds !== undefined ? i.excludeZoneIds : (depth > 4 ? [] : [""]));
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_index.index_getAvailabilityZonesFilter(ctx, depth + 1))]));
  out.groupNames = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.names = (depth > 4 ? [] : [""]);
  out.state = (i.state !== undefined ? i.state : "active");
  out.zoneIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:index/getBillingServiceAccount:getBillingServiceAccount
export function getBillingServiceAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  return out;
}

// aws:index/getCallerIdentity:getCallerIdentity
export function getCallerIdentity(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.arn = h.arn(ctx);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.userId = h.id(ctx, "userId");
  return out;
}

// aws:index/getDefaultTags:getDefaultTags
export function getDefaultTags(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.tags = {};
  return out;
}

// aws:index/getIpRanges:getIpRanges
export function getIpRanges(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrBlocks = (depth > 4 ? [] : ["10.0.0.0/16"]);
  out.createDate = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.ipv6CidrBlocks = (depth > 4 ? [] : [""]);
  out.regions = (i.regions !== undefined ? i.regions : (depth > 4 ? [] : [""]));
  out.services = (i.services !== undefined ? i.services : (depth > 4 ? [] : [""]));
  out.syncToken = 0;
  out.url = (i.url !== undefined ? i.url : h.endpoint(ctx, "url"));
  return out;
}

// aws:index/getPartition:getPartition
export function getPartition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsSuffix = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.partition = ctx.partition;
  out.reverseDnsPrefix = "";
  return out;
}

// aws:index/getRegion:getRegion
export function getRegion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.endpoint = (i.endpoint !== undefined ? i.endpoint : h.endpoint(ctx, "endpoint"));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:index/getRegions:getRegions
export function getRegions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allRegions = (i.allRegions !== undefined ? i.allRegions : false);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? [] : [(depth > 4 ? {} : T_index.index_getRegionsFilter(ctx, depth + 1))]));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.names = (depth > 4 ? [] : [""]);
  return out;
}

// aws:index/getService:getService
export function getService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dnsName = (i.dnsName !== undefined ? i.dnsName : h.endpoint(ctx, "dnsName"));
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.partition = ctx.partition;
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.reverseDnsName = (i.reverseDnsName !== undefined ? i.reverseDnsName : "");
  out.reverseDnsPrefix = (i.reverseDnsPrefix !== undefined ? i.reverseDnsPrefix : "");
  out.serviceId = (i.serviceId !== undefined ? i.serviceId : h.id(ctx, "serviceId"));
  out.supported = false;
  return out;
}

// aws:index/getServicePrincipal:getServicePrincipal
export function getServicePrincipal(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.suffix = "";
  return out;
}
