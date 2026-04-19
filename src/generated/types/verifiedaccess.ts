// GENERATED FILE — do not edit.
// Service: verifiedaccess   (18 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_verifiedaccess from "./verifiedaccess.js";

// aws:verifiedaccess/EndpointCidrOptions:EndpointCidrOptions
export function verifiedaccess_EndpointCidrOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cidr = "10.0.0.0/16";
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointCidrOptionsPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:verifiedaccess/EndpointCidrOptionsPortRange:EndpointCidrOptionsPortRange
export function verifiedaccess_EndpointCidrOptionsPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:verifiedaccess/EndpointLoadBalancerOptions:EndpointLoadBalancerOptions
export function verifiedaccess_EndpointLoadBalancerOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.loadBalancerArn = h.arn(ctx);
  out.port = 443;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointLoadBalancerOptionsPortRange(ctx, depth + 1))]);
  out.protocol = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:verifiedaccess/EndpointLoadBalancerOptionsPortRange:EndpointLoadBalancerOptionsPortRange
export function verifiedaccess_EndpointLoadBalancerOptionsPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:verifiedaccess/EndpointNetworkInterfaceOptions:EndpointNetworkInterfaceOptions
export function verifiedaccess_EndpointNetworkInterfaceOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  out.port = 443;
  out.portRanges = (depth > 4 ? [] : [(depth > 4 ? {} : T_verifiedaccess.verifiedaccess_EndpointNetworkInterfaceOptionsPortRange(ctx, depth + 1))]);
  out.protocol = "";
  return out;
}

// aws:verifiedaccess/EndpointNetworkInterfaceOptionsPortRange:EndpointNetworkInterfaceOptionsPortRange
export function verifiedaccess_EndpointNetworkInterfaceOptionsPortRange(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.fromPort = 443;
  out.toPort = 443;
  return out;
}

// aws:verifiedaccess/EndpointRdsOptions:EndpointRdsOptions
export function verifiedaccess_EndpointRdsOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = 443;
  out.protocol = "";
  out.rdsDbClusterArn = h.arn(ctx);
  out.rdsDbInstanceArn = h.arn(ctx);
  out.rdsDbProxyArn = h.arn(ctx);
  out.rdsEndpoint = h.endpoint(ctx, "rdsEndpoint");
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:verifiedaccess/EndpointSseSpecification:EndpointSseSpecification
export function verifiedaccess_EndpointSseSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerManagedKeyEnabled = false;
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:verifiedaccess/GroupSseConfiguration:GroupSseConfiguration
export function verifiedaccess_GroupSseConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerManagedKeyEnabled = false;
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:verifiedaccess/InstanceLoggingConfigurationAccessLogs:InstanceLoggingConfigurationAccessLogs
export function verifiedaccess_InstanceLoggingConfigurationAccessLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs(ctx, depth + 1));
  out.includeTrustContext = false;
  out.kinesisDataFirehose = (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose(ctx, depth + 1));
  out.logVersion = "";
  out.s3 = (depth > 4 ? {} : T_verifiedaccess.verifiedaccess_InstanceLoggingConfigurationAccessLogsS3(ctx, depth + 1));
  return out;
}

// aws:verifiedaccess/InstanceLoggingConfigurationAccessLogsCloudwatchLogs:InstanceLoggingConfigurationAccessLogsCloudwatchLogs
export function verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroup = "";
  return out;
}

// aws:verifiedaccess/InstanceLoggingConfigurationAccessLogsKinesisDataFirehose:InstanceLoggingConfigurationAccessLogsKinesisDataFirehose
export function verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStream = "";
  out.enabled = true;
  return out;
}

// aws:verifiedaccess/InstanceLoggingConfigurationAccessLogsS3:InstanceLoggingConfigurationAccessLogsS3
export function verifiedaccess_InstanceLoggingConfigurationAccessLogsS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.bucketOwner = "";
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:verifiedaccess/InstanceVerifiedAccessTrustProvider:InstanceVerifiedAccessTrustProvider
export function verifiedaccess_InstanceVerifiedAccessTrustProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.deviceTrustProviderType = "";
  out.trustProviderType = "";
  out.userTrustProviderType = "";
  out.verifiedAccessTrustProviderId = h.id(ctx, "verifiedAccessTrustProviderId");
  return out;
}

// aws:verifiedaccess/TrustProviderDeviceOptions:TrustProviderDeviceOptions
export function verifiedaccess_TrustProviderDeviceOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.tenantId = h.id(ctx, "tenantId");
  return out;
}

// aws:verifiedaccess/TrustProviderNativeApplicationOidcOptions:TrustProviderNativeApplicationOidcOptions
export function verifiedaccess_TrustProviderNativeApplicationOidcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.issuer = "";
  out.publicSigningKeyEndpoint = h.endpoint(ctx, "publicSigningKeyEndpoint");
  out.scope = "";
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:verifiedaccess/TrustProviderOidcOptions:TrustProviderOidcOptions
export function verifiedaccess_TrustProviderOidcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationEndpoint = h.endpoint(ctx, "authorizationEndpoint");
  out.clientId = h.id(ctx, "clientId");
  out.clientSecret = "";
  out.issuer = "";
  out.scope = "";
  out.tokenEndpoint = h.endpoint(ctx, "tokenEndpoint");
  out.userInfoEndpoint = h.endpoint(ctx, "userInfoEndpoint");
  return out;
}

// aws:verifiedaccess/TrustProviderSseSpecification:TrustProviderSseSpecification
export function verifiedaccess_TrustProviderSseSpecification(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerManagedKeyEnabled = false;
  out.kmsKeyArn = h.arn(ctx);
  return out;
}
