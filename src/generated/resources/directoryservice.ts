// GENERATED FILE — do not edit.
// Service: directoryservice   (10 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_directoryservice from "../types/directoryservice.js";

// aws:directoryservice/conditionalForwader:ConditionalForwader
export function ConditionalForwader(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.dnsIps = (i.dnsIps !== undefined ? i.dnsIps : (depth > 4 ? [] : [""]));
  out.remoteDomainName = (i.remoteDomainName !== undefined ? i.remoteDomainName : h.endpoint(ctx, "remoteDomainName"));
  return out;
}

// aws:directoryservice/conditionalForwarder:ConditionalForwarder
export function ConditionalForwarder(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.dnsIps = (i.dnsIps !== undefined ? i.dnsIps : (depth > 4 ? [] : [""]));
  out.remoteDomainName = (i.remoteDomainName !== undefined ? i.remoteDomainName : h.endpoint(ctx, "remoteDomainName"));
  return out;
}

// aws:directoryservice/directory:Directory
export function Directory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessUrl = h.endpoint(ctx, "accessUrl");
  out.alias = (i.alias !== undefined ? i.alias : "");
  out.connectSettings = (i.connectSettings !== undefined ? i.connectSettings : (depth > 4 ? {} : T_directoryservice.directoryservice_DirectoryConnectSettings(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.desiredNumberOfDomainControllers = (i.desiredNumberOfDomainControllers !== undefined ? i.desiredNumberOfDomainControllers : 0);
  out.dnsIpAddresses = (depth > 4 ? [] : [""]);
  out.edition = (i.edition !== undefined ? i.edition : "");
  out.enableSso = (i.enableSso !== undefined ? i.enableSso : true);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.password = (i.password !== undefined ? i.password : "");
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  out.shortName = (i.shortName !== undefined ? i.shortName : "");
  out.size = (i.size !== undefined ? i.size : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.vpcSettings = (i.vpcSettings !== undefined ? i.vpcSettings : (depth > 4 ? {} : T_directoryservice.directoryservice_DirectoryVpcSettings(ctx, depth + 1)));
  return out;
}

// aws:directoryservice/logService:LogService
export function LogService(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  return out;
}

// aws:directoryservice/logSubscription:LogSubscription
export function LogSubscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.logGroupName = (i.logGroupName !== undefined ? i.logGroupName : "");
  return out;
}

// aws:directoryservice/radiusSettings:RadiusSettings
export function RadiusSettings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationProtocol = (i.authenticationProtocol !== undefined ? i.authenticationProtocol : "");
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.displayLabel = (i.displayLabel !== undefined ? i.displayLabel : "");
  out.radiusPort = (i.radiusPort !== undefined ? i.radiusPort : 443);
  out.radiusRetries = (i.radiusRetries !== undefined ? i.radiusRetries : 0);
  out.radiusServers = (i.radiusServers !== undefined ? i.radiusServers : (depth > 4 ? [] : [""]));
  out.radiusTimeout = (i.radiusTimeout !== undefined ? i.radiusTimeout : 30);
  out.sharedSecret = (i.sharedSecret !== undefined ? i.sharedSecret : "");
  out.useSameUsername = (i.useSameUsername !== undefined ? i.useSameUsername : false);
  return out;
}

// aws:directoryservice/serviceRegion:ServiceRegion
export function ServiceRegion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredNumberOfDomainControllers = (i.desiredNumberOfDomainControllers !== undefined ? i.desiredNumberOfDomainControllers : 0);
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.regionName = (i.regionName !== undefined ? i.regionName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcSettings = (i.vpcSettings !== undefined ? i.vpcSettings : (depth > 4 ? {} : T_directoryservice.directoryservice_ServiceRegionVpcSettings(ctx, depth + 1)));
  return out;
}

// aws:directoryservice/sharedDirectory:SharedDirectory
export function SharedDirectory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.method = (i.method !== undefined ? i.method : "");
  out.notes = (i.notes !== undefined ? i.notes : "");
  out.sharedDirectoryId = h.id(ctx, "sharedDirectoryId");
  out.target = (i.target !== undefined ? i.target : (depth > 4 ? {} : T_directoryservice.directoryservice_SharedDirectoryTarget(ctx, depth + 1)));
  return out;
}

// aws:directoryservice/sharedDirectoryAccepter:SharedDirectoryAccepter
export function SharedDirectoryAccepter(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.method = "";
  out.notes = "";
  out.ownerAccountId = h.id(ctx, "ownerAccountId");
  out.ownerDirectoryId = h.id(ctx, "ownerDirectoryId");
  out.sharedDirectoryId = (i.sharedDirectoryId !== undefined ? i.sharedDirectoryId : h.id(ctx, "sharedDirectoryId"));
  return out;
}

// aws:directoryservice/trust:Trust
export function Trust(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditionalForwarderIpAddrs = (i.conditionalForwarderIpAddrs !== undefined ? i.conditionalForwarderIpAddrs : (depth > 4 ? [] : [""]));
  out.createdDateTime = "";
  out.deleteAssociatedConditionalForwarder = (i.deleteAssociatedConditionalForwarder !== undefined ? i.deleteAssociatedConditionalForwarder : false);
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.lastUpdatedDateTime = "";
  out.remoteDomainName = (i.remoteDomainName !== undefined ? i.remoteDomainName : h.endpoint(ctx, "remoteDomainName"));
  out.selectiveAuth = (i.selectiveAuth !== undefined ? i.selectiveAuth : "");
  out.stateLastUpdatedDateTime = "";
  out.trustDirection = (i.trustDirection !== undefined ? i.trustDirection : "");
  out.trustPassword = (i.trustPassword !== undefined ? i.trustPassword : "");
  out.trustState = "";
  out.trustStateReason = "";
  out.trustType = (i.trustType !== undefined ? i.trustType : "");
  return out;
}
