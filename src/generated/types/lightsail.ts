// GENERATED FILE — do not edit.
// Service: lightsail   (19 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_lightsail from "./lightsail.js";

// aws:lightsail/CertificateDomainValidationOption:CertificateDomainValidationOption
export function lightsail_CertificateDomainValidationOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.resourceRecordName = "";
  out.resourceRecordType = "";
  out.resourceRecordValue = "";
  return out;
}

// aws:lightsail/ContainerServiceDeploymentVersionContainer:ContainerServiceDeploymentVersionContainer
export function lightsail_ContainerServiceDeploymentVersionContainer(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.commands = (depth > 4 ? [] : [""]);
  out.containerName = "";
  out.environment = {};
  out.image = "";
  out.ports = {};
  return out;
}

// aws:lightsail/ContainerServiceDeploymentVersionPublicEndpoint:ContainerServiceDeploymentVersionPublicEndpoint
export function lightsail_ContainerServiceDeploymentVersionPublicEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = "";
  out.containerPort = 443;
  out.healthCheck = (depth > 4 ? {} : T_lightsail.lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck(ctx, depth + 1));
  return out;
}

// aws:lightsail/ContainerServiceDeploymentVersionPublicEndpointHealthCheck:ContainerServiceDeploymentVersionPublicEndpointHealthCheck
export function lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.intervalSeconds = 0;
  out.path = "";
  out.successCodes = "";
  out.timeoutSeconds = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:lightsail/ContainerServicePrivateRegistryAccess:ContainerServicePrivateRegistryAccess
export function lightsail_ContainerServicePrivateRegistryAccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ecrImagePullerRole = (depth > 4 ? {} : T_lightsail.lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole(ctx, depth + 1));
  return out;
}

// aws:lightsail/ContainerServicePrivateRegistryAccessEcrImagePullerRole:ContainerServicePrivateRegistryAccessEcrImagePullerRole
export function lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isActive = true;
  out.principalArn = h.arn(ctx);
  return out;
}

// aws:lightsail/ContainerServicePublicDomainNames:ContainerServicePublicDomainNames
export function lightsail_ContainerServicePublicDomainNames(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_lightsail.lightsail_ContainerServicePublicDomainNamesCertificate(ctx, depth + 1))]);
  return out;
}

// aws:lightsail/ContainerServicePublicDomainNamesCertificate:ContainerServicePublicDomainNamesCertificate
export function lightsail_ContainerServicePublicDomainNamesCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateName = "";
  out.domainNames = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lightsail/DistributionCacheBehavior:DistributionCacheBehavior
export function lightsail_DistributionCacheBehavior(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.behavior = "";
  out.path = "";
  return out;
}

// aws:lightsail/DistributionCacheBehaviorSettings:DistributionCacheBehaviorSettings
export function lightsail_DistributionCacheBehaviorSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedHttpMethods = "";
  out.cachedHttpMethods = "";
  out.defaultTtl = 0;
  out.forwardedCookies = (depth > 4 ? {} : T_lightsail.lightsail_DistributionCacheBehaviorSettingsForwardedCookies(ctx, depth + 1));
  out.forwardedHeaders = (depth > 4 ? {} : T_lightsail.lightsail_DistributionCacheBehaviorSettingsForwardedHeaders(ctx, depth + 1));
  out.forwardedQueryStrings = (depth > 4 ? {} : T_lightsail.lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings(ctx, depth + 1));
  out.maximumTtl = 0;
  out.minimumTtl = 0;
  return out;
}

// aws:lightsail/DistributionCacheBehaviorSettingsForwardedCookies:DistributionCacheBehaviorSettingsForwardedCookies
export function lightsail_DistributionCacheBehaviorSettingsForwardedCookies(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cookiesAllowLists = (depth > 4 ? [] : [""]);
  out.option = "";
  return out;
}

// aws:lightsail/DistributionCacheBehaviorSettingsForwardedHeaders:DistributionCacheBehaviorSettingsForwardedHeaders
export function lightsail_DistributionCacheBehaviorSettingsForwardedHeaders(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.headersAllowLists = (depth > 4 ? [] : [""]);
  out.option = "";
  return out;
}

// aws:lightsail/DistributionCacheBehaviorSettingsForwardedQueryStrings:DistributionCacheBehaviorSettingsForwardedQueryStrings
export function lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.option = false;
  out.queryStringsAllowedLists = (depth > 4 ? [] : [""]);
  return out;
}

// aws:lightsail/DistributionDefaultCacheBehavior:DistributionDefaultCacheBehavior
export function lightsail_DistributionDefaultCacheBehavior(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.behavior = "";
  return out;
}

// aws:lightsail/DistributionLocation:DistributionLocation
export function lightsail_DistributionLocation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = ctx.region + "a";
  out.regionName = "";
  return out;
}

// aws:lightsail/DistributionOrigin:DistributionOrigin
export function lightsail_DistributionOrigin(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.protocolPolicy = "";
  out.regionName = "";
  out.resourceType = "";
  return out;
}

// aws:lightsail/InstanceAddOn:InstanceAddOn
export function lightsail_InstanceAddOn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.snapshotTime = "";
  out.status = "active";
  out.type = "";
  return out;
}

// aws:lightsail/InstancePublicPortsPortInfo:InstancePublicPortsPortInfo
export function lightsail_InstancePublicPortsPortInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrListAliases = (depth > 4 ? [] : [""]);
  out.cidrs = (depth > 4 ? [] : [""]);
  out.fromPort = 443;
  out.ipv6Cidrs = (depth > 4 ? [] : [""]);
  out.protocol = "";
  out.toPort = 443;
  return out;
}

// aws:lightsail/LbCertificateDomainValidationRecord:LbCertificateDomainValidationRecord
export function lightsail_LbCertificateDomainValidationRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.resourceRecordName = "";
  out.resourceRecordType = "";
  out.resourceRecordValue = "";
  return out;
}
