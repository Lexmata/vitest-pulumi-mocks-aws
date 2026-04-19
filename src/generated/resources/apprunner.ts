// GENERATED FILE — do not edit.
// Service: apprunner   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_apprunner from "../types/apprunner.js";

// aws:apprunner/autoScalingConfigurationVersion:AutoScalingConfigurationVersion
export function AutoScalingConfigurationVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoScalingConfigurationName = (i.autoScalingConfigurationName !== undefined ? i.autoScalingConfigurationName : "");
  out.autoScalingConfigurationRevision = 0;
  out.hasAssociatedService = false;
  out.isDefault = true;
  out.latest = false;
  out.maxConcurrency = (i.maxConcurrency !== undefined ? i.maxConcurrency : 0);
  out.maxSize = (i.maxSize !== undefined ? i.maxSize : 8);
  out.minSize = (i.minSize !== undefined ? i.minSize : 8);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apprunner/connection:Connection
export function Connection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectionName = (i.connectionName !== undefined ? i.connectionName : "");
  out.providerType = (i.providerType !== undefined ? i.providerType : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apprunner/customDomainAssociation:CustomDomainAssociation
export function CustomDomainAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateValidationRecords = (depth > 4 ? [] : [(depth > 4 ? {} : T_apprunner.apprunner_CustomDomainAssociationCertificateValidationRecord(ctx, depth + 1))]);
  out.dnsTarget = "";
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.enableWwwSubdomain = (i.enableWwwSubdomain !== undefined ? i.enableWwwSubdomain : true);
  out.serviceArn = (i.serviceArn !== undefined ? i.serviceArn : h.arn(ctx));
  out.status = "active";
  return out;
}

// aws:apprunner/defaultAutoScalingConfigurationVersion:DefaultAutoScalingConfigurationVersion
export function DefaultAutoScalingConfigurationVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoScalingConfigurationArn = (i.autoScalingConfigurationArn !== undefined ? i.autoScalingConfigurationArn : h.arn(ctx));
  return out;
}

// aws:apprunner/deployment:Deployment
export function Deployment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.operationId = h.id(ctx, "operationId");
  out.serviceArn = (i.serviceArn !== undefined ? i.serviceArn : h.arn(ctx));
  out.status = "active";
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_apprunner.apprunner_DeploymentTimeouts(ctx, depth + 1)));
  return out;
}

// aws:apprunner/observabilityConfiguration:ObservabilityConfiguration
export function ObservabilityConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.latest = false;
  out.observabilityConfigurationName = (i.observabilityConfigurationName !== undefined ? i.observabilityConfigurationName : "");
  out.observabilityConfigurationRevision = 0;
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.traceConfiguration = (i.traceConfiguration !== undefined ? i.traceConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ObservabilityConfigurationTraceConfiguration(ctx, depth + 1)));
  return out;
}

// aws:apprunner/service:Service
export function Service(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoScalingConfigurationArn = (i.autoScalingConfigurationArn !== undefined ? i.autoScalingConfigurationArn : h.arn(ctx));
  out.encryptionConfiguration = (i.encryptionConfiguration !== undefined ? i.encryptionConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ServiceEncryptionConfiguration(ctx, depth + 1)));
  out.healthCheckConfiguration = (i.healthCheckConfiguration !== undefined ? i.healthCheckConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ServiceHealthCheckConfiguration(ctx, depth + 1)));
  out.instanceConfiguration = (i.instanceConfiguration !== undefined ? i.instanceConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ServiceInstanceConfiguration(ctx, depth + 1)));
  out.networkConfiguration = (i.networkConfiguration !== undefined ? i.networkConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ServiceNetworkConfiguration(ctx, depth + 1)));
  out.observabilityConfiguration = (i.observabilityConfiguration !== undefined ? i.observabilityConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ServiceObservabilityConfiguration(ctx, depth + 1)));
  out.serviceId = h.id(ctx, "serviceId");
  out.serviceName = (i.serviceName !== undefined ? i.serviceName : "");
  out.serviceUrl = h.endpoint(ctx, "serviceUrl");
  out.sourceConfiguration = (i.sourceConfiguration !== undefined ? i.sourceConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_ServiceSourceConfiguration(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:apprunner/vpcConnector:VpcConnector
export function VpcConnector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.status = "active";
  out.subnets = (i.subnets !== undefined ? i.subnets : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConnectorName = (i.vpcConnectorName !== undefined ? i.vpcConnectorName : "");
  out.vpcConnectorRevision = 0;
  return out;
}

// aws:apprunner/vpcIngressConnection:VpcIngressConnection
export function VpcIngressConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.domainName = h.endpoint(ctx, "domainName");
  out.ingressVpcConfiguration = (i.ingressVpcConfiguration !== undefined ? i.ingressVpcConfiguration : (depth > 4 ? {} : T_apprunner.apprunner_VpcIngressConnectionIngressVpcConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serviceArn = (i.serviceArn !== undefined ? i.serviceArn : h.arn(ctx));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
