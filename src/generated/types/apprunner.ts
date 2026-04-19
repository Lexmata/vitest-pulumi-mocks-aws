// GENERATED FILE — do not edit.
// Service: apprunner   (19 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apprunner from "./apprunner.js";

// aws:apprunner/CustomDomainAssociationCertificateValidationRecord:CustomDomainAssociationCertificateValidationRecord
export function apprunner_CustomDomainAssociationCertificateValidationRecord(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.status = "active";
  out.type = "";
  out.value = "";
  return out;
}

// aws:apprunner/DeploymentTimeouts:DeploymentTimeouts
export function apprunner_DeploymentTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  return out;
}

// aws:apprunner/ObservabilityConfigurationTraceConfiguration:ObservabilityConfigurationTraceConfiguration
export function apprunner_ObservabilityConfigurationTraceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vendor = "";
  return out;
}

// aws:apprunner/ServiceEncryptionConfiguration:ServiceEncryptionConfiguration
export function apprunner_ServiceEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKey = "";
  return out;
}

// aws:apprunner/ServiceHealthCheckConfiguration:ServiceHealthCheckConfiguration
export function apprunner_ServiceHealthCheckConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthyThreshold = 0;
  out.interval = 0;
  out.path = "";
  out.protocol = "";
  out.timeout = 30;
  out.unhealthyThreshold = 0;
  return out;
}

// aws:apprunner/ServiceInstanceConfiguration:ServiceInstanceConfiguration
export function apprunner_ServiceInstanceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cpu = "";
  out.instanceRoleArn = h.arn(ctx);
  out.memory = "";
  return out;
}

// aws:apprunner/ServiceNetworkConfiguration:ServiceNetworkConfiguration
export function apprunner_ServiceNetworkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.egressConfiguration = (depth > 4 ? {} : T_apprunner.apprunner_ServiceNetworkConfigurationEgressConfiguration(ctx, depth + 1));
  out.ingressConfiguration = (depth > 4 ? {} : T_apprunner.apprunner_ServiceNetworkConfigurationIngressConfiguration(ctx, depth + 1));
  out.ipAddressType = "";
  return out;
}

// aws:apprunner/ServiceNetworkConfigurationEgressConfiguration:ServiceNetworkConfigurationEgressConfiguration
export function apprunner_ServiceNetworkConfigurationEgressConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.egressType = "";
  out.vpcConnectorArn = h.arn(ctx);
  return out;
}

// aws:apprunner/ServiceNetworkConfigurationIngressConfiguration:ServiceNetworkConfigurationIngressConfiguration
export function apprunner_ServiceNetworkConfigurationIngressConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.isPubliclyAccessible = true;
  return out;
}

// aws:apprunner/ServiceObservabilityConfiguration:ServiceObservabilityConfiguration
export function apprunner_ServiceObservabilityConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.observabilityConfigurationArn = h.arn(ctx);
  out.observabilityEnabled = false;
  return out;
}

// aws:apprunner/ServiceSourceConfiguration:ServiceSourceConfiguration
export function apprunner_ServiceSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationConfiguration = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationAuthenticationConfiguration(ctx, depth + 1));
  out.autoDeploymentsEnabled = false;
  out.codeRepository = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationCodeRepository(ctx, depth + 1));
  out.imageRepository = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationImageRepository(ctx, depth + 1));
  return out;
}

// aws:apprunner/ServiceSourceConfigurationAuthenticationConfiguration:ServiceSourceConfigurationAuthenticationConfiguration
export function apprunner_ServiceSourceConfigurationAuthenticationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessRoleArn = h.arn(ctx);
  out.connectionArn = h.arn(ctx);
  return out;
}

// aws:apprunner/ServiceSourceConfigurationCodeRepository:ServiceSourceConfigurationCodeRepository
export function apprunner_ServiceSourceConfigurationCodeRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeConfiguration = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration(ctx, depth + 1));
  out.repositoryUrl = h.endpoint(ctx, "repositoryUrl");
  out.sourceCodeVersion = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion(ctx, depth + 1));
  out.sourceDirectory = "";
  return out;
}

// aws:apprunner/ServiceSourceConfigurationCodeRepositoryCodeConfiguration:ServiceSourceConfigurationCodeRepositoryCodeConfiguration
export function apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.codeConfigurationValues = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(ctx, depth + 1));
  out.configurationSource = "";
  return out;
}

// aws:apprunner/ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues:ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
export function apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.buildCommand = "";
  out.port = "";
  out.runtime = "";
  out.runtimeEnvironmentSecrets = {};
  out.runtimeEnvironmentVariables = {};
  out.startCommand = "";
  return out;
}

// aws:apprunner/ServiceSourceConfigurationCodeRepositorySourceCodeVersion:ServiceSourceConfigurationCodeRepositorySourceCodeVersion
export function apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  out.value = "";
  return out;
}

// aws:apprunner/ServiceSourceConfigurationImageRepository:ServiceSourceConfigurationImageRepository
export function apprunner_ServiceSourceConfigurationImageRepository(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.imageConfiguration = (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration(ctx, depth + 1));
  out.imageIdentifier = "";
  out.imageRepositoryType = "";
  return out;
}

// aws:apprunner/ServiceSourceConfigurationImageRepositoryImageConfiguration:ServiceSourceConfigurationImageRepositoryImageConfiguration
export function apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.port = "";
  out.runtimeEnvironmentSecrets = {};
  out.runtimeEnvironmentVariables = {};
  out.startCommand = "";
  return out;
}

// aws:apprunner/VpcIngressConnectionIngressVpcConfiguration:VpcIngressConnectionIngressVpcConfiguration
export function apprunner_VpcIngressConnectionIngressVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.vpcEndpointId = h.id(ctx, "vpcEndpointId");
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}
