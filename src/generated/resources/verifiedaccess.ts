// GENERATED FILE — do not edit.
// Service: verifiedaccess   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_verifiedaccess from "../types/verifiedaccess.js";

// aws:verifiedaccess/endpoint:Endpoint
export function Endpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationDomain = (i.applicationDomain !== undefined ? i.applicationDomain : h.endpoint(ctx, "applicationDomain"));
  out.attachmentType = (i.attachmentType !== undefined ? i.attachmentType : "");
  out.cidrOptions = (i.cidrOptions !== undefined ? i.cidrOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointCidrOptions(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.deviceValidationDomain = h.endpoint(ctx, "deviceValidationDomain");
  out.domainCertificateArn = (i.domainCertificateArn !== undefined ? i.domainCertificateArn : h.arn(ctx));
  out.endpointDomain = h.endpoint(ctx, "endpointDomain");
  out.endpointDomainPrefix = (i.endpointDomainPrefix !== undefined ? i.endpointDomainPrefix : "");
  out.endpointType = (i.endpointType !== undefined ? i.endpointType : "");
  out.loadBalancerOptions = (i.loadBalancerOptions !== undefined ? i.loadBalancerOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointLoadBalancerOptions(ctx, depth + 1)));
  out.networkInterfaceOptions = (i.networkInterfaceOptions !== undefined ? i.networkInterfaceOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointNetworkInterfaceOptions(ctx, depth + 1)));
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.rdsOptions = (i.rdsOptions !== undefined ? i.rdsOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointRdsOptions(ctx, depth + 1)));
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.sseSpecification = (i.sseSpecification !== undefined ? i.sseSpecification : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointSseSpecification(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.verifiedAccessGroupId = (i.verifiedAccessGroupId !== undefined ? i.verifiedAccessGroupId : h.id(ctx, "verifiedAccessGroupId"));
  out.verifiedAccessInstanceId = h.id(ctx, "verifiedAccessInstanceId");
  return out;
}

// aws:verifiedaccess/group:Group
export function Group(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.creationTime = "";
  out.deletionTime = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.lastUpdatedTime = "";
  out.owner = ctx.accountId;
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.sseConfiguration = (i.sseConfiguration !== undefined ? i.sseConfiguration : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_GroupSseConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.verifiedaccessGroupArn = h.arn(ctx);
  out.verifiedaccessGroupId = h.id(ctx, "verifiedaccessGroupId");
  out.verifiedaccessInstanceId = (i.verifiedaccessInstanceId !== undefined ? i.verifiedaccessInstanceId : h.id(ctx, "verifiedaccessInstanceId"));
  return out;
}

// aws:verifiedaccess/instance:Instance
export function Instance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidrEndpointsCustomSubdomain = (i.cidrEndpointsCustomSubdomain !== undefined ? i.cidrEndpointsCustomSubdomain : h.endpoint(ctx, "cidrEndpointsCustomSubdomain"));
  out.creationTime = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.fipsEnabled = (i.fipsEnabled !== undefined ? i.fipsEnabled : false);
  out.lastUpdatedTime = "";
  out.nameServers = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.verifiedAccessTrustProviders = (depth > 4 ? [] : [(depth > 4 ? {} : T_verifiedaccess.verifiedaccess_InstanceVerifiedAccessTrustProvider(ctx, depth + 1))]);
  return out;
}

// aws:verifiedaccess/instanceLoggingConfiguration:InstanceLoggingConfiguration
export function InstanceLoggingConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessLogs = (i.accessLogs !== undefined ? i.accessLogs : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_InstanceLoggingConfigurationAccessLogs(ctx, depth + 1)));
  out.verifiedaccessInstanceId = (i.verifiedaccessInstanceId !== undefined ? i.verifiedaccessInstanceId : h.id(ctx, "verifiedaccessInstanceId"));
  return out;
}

// aws:verifiedaccess/instanceTrustProviderAttachment:InstanceTrustProviderAttachment
export function InstanceTrustProviderAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.verifiedaccessInstanceId = (i.verifiedaccessInstanceId !== undefined ? i.verifiedaccessInstanceId : h.id(ctx, "verifiedaccessInstanceId"));
  out.verifiedaccessTrustProviderId = (i.verifiedaccessTrustProviderId !== undefined ? i.verifiedaccessTrustProviderId : h.id(ctx, "verifiedaccessTrustProviderId"));
  return out;
}

// aws:verifiedaccess/trustProvider:TrustProvider
export function TrustProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.deviceOptions = (i.deviceOptions !== undefined ? i.deviceOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_TrustProviderDeviceOptions(ctx, depth + 1)));
  out.deviceTrustProviderType = (i.deviceTrustProviderType !== undefined ? i.deviceTrustProviderType : "");
  out.nativeApplicationOidcOptions = (i.nativeApplicationOidcOptions !== undefined ? i.nativeApplicationOidcOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_TrustProviderNativeApplicationOidcOptions(ctx, depth + 1)));
  out.oidcOptions = (i.oidcOptions !== undefined ? i.oidcOptions : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_TrustProviderOidcOptions(ctx, depth + 1)));
  out.policyReferenceName = (i.policyReferenceName !== undefined ? i.policyReferenceName : "");
  out.sseSpecification = (i.sseSpecification !== undefined ? i.sseSpecification : (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_TrustProviderSseSpecification(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trustProviderType = (i.trustProviderType !== undefined ? i.trustProviderType : "");
  out.userTrustProviderType = (i.userTrustProviderType !== undefined ? i.userTrustProviderType : "");
  return out;
}
