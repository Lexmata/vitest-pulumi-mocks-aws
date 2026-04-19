// GENERATED FILE — do not edit.
// Service: opensearch   (55 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opensearch from "./opensearch.js";

// aws:opensearch/AuthorizeVpcEndpointAccessAuthorizedPrincipal:AuthorizeVpcEndpointAccessAuthorizedPrincipal
export function opensearch_AuthorizeVpcEndpointAccessAuthorizedPrincipal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.principal = "";
  out.principalType = "";
  return out;
}

// aws:opensearch/DomainAdvancedSecurityOptions:DomainAdvancedSecurityOptions
export function opensearch_DomainAdvancedSecurityOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.anonymousAuthEnabled = false;
  out.enabled = true;
  out.internalUserDatabaseEnabled = false;
  out.masterUserOptions = (depth > 4 ? {} : T_opensearch.opensearch_DomainAdvancedSecurityOptionsMasterUserOptions(ctx, depth + 1));
  return out;
}

// aws:opensearch/DomainAdvancedSecurityOptionsMasterUserOptions:DomainAdvancedSecurityOptionsMasterUserOptions
export function opensearch_DomainAdvancedSecurityOptionsMasterUserOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.masterUserArn = h.arn(ctx);
  out.masterUserName = "";
  out.masterUserPassword = "";
  return out;
}

// aws:opensearch/DomainAutoTuneOptions:DomainAutoTuneOptions
export function opensearch_DomainAutoTuneOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredState = "";
  out.maintenanceSchedules = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_DomainAutoTuneOptionsMaintenanceSchedule(ctx, depth + 1))]);
  out.rollbackOnDisable = "";
  out.useOffPeakWindow = false;
  return out;
}

// aws:opensearch/DomainAutoTuneOptionsMaintenanceSchedule:DomainAutoTuneOptionsMaintenanceSchedule
export function opensearch_DomainAutoTuneOptionsMaintenanceSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cronExpressionForRecurrence = "";
  out.duration = (depth > 4 ? {} : T_opensearch.opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration(ctx, depth + 1));
  out.startAt = "";
  return out;
}

// aws:opensearch/DomainAutoTuneOptionsMaintenanceScheduleDuration:DomainAutoTuneOptionsMaintenanceScheduleDuration
export function opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:opensearch/DomainClusterConfig:DomainClusterConfig
export function opensearch_DomainClusterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageOptions = (depth > 4 ? {} : T_opensearch.opensearch_DomainClusterConfigColdStorageOptions(ctx, depth + 1));
  out.dedicatedMasterCount = 1;
  out.dedicatedMasterEnabled = false;
  out.dedicatedMasterType = "";
  out.instanceCount = 1;
  out.instanceType = "";
  out.multiAzWithStandbyEnabled = false;
  out.nodeOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_DomainClusterConfigNodeOption(ctx, depth + 1))]);
  out.warmCount = 1;
  out.warmEnabled = false;
  out.warmType = "";
  out.zoneAwarenessConfig = (depth > 4 ? {} : T_opensearch.opensearch_DomainClusterConfigZoneAwarenessConfig(ctx, depth + 1));
  out.zoneAwarenessEnabled = false;
  return out;
}

// aws:opensearch/DomainClusterConfigColdStorageOptions:DomainClusterConfigColdStorageOptions
export function opensearch_DomainClusterConfigColdStorageOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:opensearch/DomainClusterConfigNodeOption:DomainClusterConfigNodeOption
export function opensearch_DomainClusterConfigNodeOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nodeConfig = (depth > 4 ? {} : T_opensearch.opensearch_DomainClusterConfigNodeOptionNodeConfig(ctx, depth + 1));
  out.nodeType = "";
  return out;
}

// aws:opensearch/DomainClusterConfigNodeOptionNodeConfig:DomainClusterConfigNodeOptionNodeConfig
export function opensearch_DomainClusterConfigNodeOptionNodeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.enabled = true;
  out.type = "";
  return out;
}

// aws:opensearch/DomainClusterConfigZoneAwarenessConfig:DomainClusterConfigZoneAwarenessConfig
export function opensearch_DomainClusterConfigZoneAwarenessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneCount = 1;
  return out;
}

// aws:opensearch/DomainCognitoOptions:DomainCognitoOptions
export function opensearch_DomainCognitoOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.identityPoolId = h.id(ctx, "identityPoolId");
  out.roleArn = h.arn(ctx);
  out.userPoolId = h.id(ctx, "userPoolId");
  return out;
}

// aws:opensearch/DomainDomainEndpointOptions:DomainDomainEndpointOptions
export function opensearch_DomainDomainEndpointOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customEndpoint = h.endpoint(ctx, "customEndpoint");
  out.customEndpointCertificateArn = h.arn(ctx);
  out.customEndpointEnabled = false;
  out.enforceHttps = false;
  out.tlsSecurityPolicy = "";
  return out;
}

// aws:opensearch/DomainEbsOptions:DomainEbsOptions
export function opensearch_DomainEbsOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsEnabled = false;
  out.iops = 0;
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:opensearch/DomainEncryptAtRest:DomainEncryptAtRest
export function opensearch_DomainEncryptAtRest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:opensearch/DomainLogPublishingOption:DomainLogPublishingOption
export function opensearch_DomainLogPublishingOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logType = "";
  return out;
}

// aws:opensearch/DomainNodeToNodeEncryption:DomainNodeToNodeEncryption
export function opensearch_DomainNodeToNodeEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:opensearch/DomainOffPeakWindowOptions:DomainOffPeakWindowOptions
export function opensearch_DomainOffPeakWindowOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.offPeakWindow = (depth > 4 ? {} : T_opensearch.opensearch_DomainOffPeakWindowOptionsOffPeakWindow(ctx, depth + 1));
  return out;
}

// aws:opensearch/DomainOffPeakWindowOptionsOffPeakWindow:DomainOffPeakWindowOptionsOffPeakWindow
export function opensearch_DomainOffPeakWindowOptionsOffPeakWindow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.windowStartTime = (depth > 4 ? {} : T_opensearch.opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime(ctx, depth + 1));
  return out;
}

// aws:opensearch/DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime:DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
export function opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hours = 0;
  out.minutes = 0;
  return out;
}

// aws:opensearch/DomainSamlOptionsSamlOptions:DomainSamlOptionsSamlOptions
export function opensearch_DomainSamlOptionsSamlOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.idp = (depth > 4 ? {} : T_opensearch.opensearch_DomainSamlOptionsSamlOptionsIdp(ctx, depth + 1));
  out.masterBackendRole = "";
  out.masterUserName = "";
  out.rolesKey = "";
  out.sessionTimeoutMinutes = 30;
  out.subjectKey = "";
  return out;
}

// aws:opensearch/DomainSamlOptionsSamlOptionsIdp:DomainSamlOptionsSamlOptionsIdp
export function opensearch_DomainSamlOptionsSamlOptionsIdp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityId = h.id(ctx, "entityId");
  out.metadataContent = "";
  return out;
}

// aws:opensearch/DomainSnapshotOptions:DomainSnapshotOptions
export function opensearch_DomainSnapshotOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automatedSnapshotStartHour = 0;
  return out;
}

// aws:opensearch/DomainSoftwareUpdateOptions:DomainSoftwareUpdateOptions
export function opensearch_DomainSoftwareUpdateOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoSoftwareUpdateEnabled = false;
  return out;
}

// aws:opensearch/DomainVpcOptions:DomainVpcOptions
export function opensearch_DomainVpcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:opensearch/OutboundConnectionConnectionProperties:OutboundConnectionConnectionProperties
export function opensearch_OutboundConnectionConnectionProperties(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.crossClusterSearch = (depth > 4 ? {} : T_opensearch.opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch(ctx, depth + 1));
  out.endpoint = h.endpoint(ctx, "endpoint");
  return out;
}

// aws:opensearch/OutboundConnectionConnectionPropertiesCrossClusterSearch:OutboundConnectionConnectionPropertiesCrossClusterSearch
export function opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.skipUnavailable = "";
  return out;
}

// aws:opensearch/OutboundConnectionLocalDomainInfo:OutboundConnectionLocalDomainInfo
export function opensearch_OutboundConnectionLocalDomainInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.ownerId = ctx.accountId;
  out.region = ctx.region;
  return out;
}

// aws:opensearch/OutboundConnectionRemoteDomainInfo:OutboundConnectionRemoteDomainInfo
export function opensearch_OutboundConnectionRemoteDomainInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.ownerId = ctx.accountId;
  out.region = ctx.region;
  return out;
}

// aws:opensearch/PackagePackageSource:PackagePackageSource
export function opensearch_PackagePackageSource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3BucketName = "";
  out.s3Key = "";
  return out;
}

// aws:opensearch/ServerlessCollectionTimeouts:ServerlessCollectionTimeouts
export function opensearch_ServerlessCollectionTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  return out;
}

// aws:opensearch/ServerlessSecurityConfigSamlOptions:ServerlessSecurityConfigSamlOptions
export function opensearch_ServerlessSecurityConfigSamlOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupAttribute = "";
  out.metadata = "";
  out.sessionTimeout = 30;
  out.userAttribute = "";
  return out;
}

// aws:opensearch/ServerlessVpcEndpointTimeouts:ServerlessVpcEndpointTimeouts
export function opensearch_ServerlessVpcEndpointTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.delete = "";
  out.update = "";
  return out;
}

// aws:opensearch/VpcEndpointVpcOptions:VpcEndpointVpcOptions
export function opensearch_VpcEndpointVpcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:opensearch/getDomainAdvancedSecurityOption:getDomainAdvancedSecurityOption
export function opensearch_getDomainAdvancedSecurityOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.anonymousAuthEnabled = false;
  out.enabled = true;
  out.internalUserDatabaseEnabled = false;
  return out;
}

// aws:opensearch/getDomainAutoTuneOption:getDomainAutoTuneOption
export function opensearch_getDomainAutoTuneOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredState = "";
  out.maintenanceSchedules = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainAutoTuneOptionMaintenanceSchedule(ctx, depth + 1))]);
  out.rollbackOnDisable = "";
  out.useOffPeakWindow = false;
  return out;
}

// aws:opensearch/getDomainAutoTuneOptionMaintenanceSchedule:getDomainAutoTuneOptionMaintenanceSchedule
export function opensearch_getDomainAutoTuneOptionMaintenanceSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cronExpressionForRecurrence = "";
  out.durations = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration(ctx, depth + 1))]);
  out.startAt = "";
  return out;
}

// aws:opensearch/getDomainAutoTuneOptionMaintenanceScheduleDuration:getDomainAutoTuneOptionMaintenanceScheduleDuration
export function opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:opensearch/getDomainClusterConfig:getDomainClusterConfig
export function opensearch_getDomainClusterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainClusterConfigColdStorageOption(ctx, depth + 1))]);
  out.dedicatedMasterCount = 1;
  out.dedicatedMasterEnabled = false;
  out.dedicatedMasterType = "";
  out.instanceCount = 1;
  out.instanceType = "";
  out.multiAzWithStandbyEnabled = false;
  out.nodeOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainClusterConfigNodeOption(ctx, depth + 1))]);
  out.warmCount = 1;
  out.warmEnabled = false;
  out.warmType = "";
  out.zoneAwarenessConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainClusterConfigZoneAwarenessConfig(ctx, depth + 1))]);
  out.zoneAwarenessEnabled = false;
  return out;
}

// aws:opensearch/getDomainClusterConfigColdStorageOption:getDomainClusterConfigColdStorageOption
export function opensearch_getDomainClusterConfigColdStorageOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:opensearch/getDomainClusterConfigNodeOption:getDomainClusterConfigNodeOption
export function opensearch_getDomainClusterConfigNodeOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nodeConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainClusterConfigNodeOptionNodeConfig(ctx, depth + 1))]);
  out.nodeType = "";
  return out;
}

// aws:opensearch/getDomainClusterConfigNodeOptionNodeConfig:getDomainClusterConfigNodeOptionNodeConfig
export function opensearch_getDomainClusterConfigNodeOptionNodeConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.count = 1;
  out.enabled = true;
  out.type = "";
  return out;
}

// aws:opensearch/getDomainClusterConfigZoneAwarenessConfig:getDomainClusterConfigZoneAwarenessConfig
export function opensearch_getDomainClusterConfigZoneAwarenessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneCount = 1;
  return out;
}

// aws:opensearch/getDomainCognitoOption:getDomainCognitoOption
export function opensearch_getDomainCognitoOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.identityPoolId = h.id(ctx, "identityPoolId");
  out.roleArn = h.arn(ctx);
  out.userPoolId = h.id(ctx, "userPoolId");
  return out;
}

// aws:opensearch/getDomainEbsOption:getDomainEbsOption
export function opensearch_getDomainEbsOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsEnabled = false;
  out.iops = 0;
  out.throughput = 0;
  out.volumeSize = 8;
  out.volumeType = "";
  return out;
}

// aws:opensearch/getDomainEncryptionAtRest:getDomainEncryptionAtRest
export function opensearch_getDomainEncryptionAtRest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:opensearch/getDomainLogPublishingOption:getDomainLogPublishingOption
export function opensearch_getDomainLogPublishingOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logType = "";
  return out;
}

// aws:opensearch/getDomainNodeToNodeEncryption:getDomainNodeToNodeEncryption
export function opensearch_getDomainNodeToNodeEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:opensearch/getDomainOffPeakWindowOptions:getDomainOffPeakWindowOptions
export function opensearch_getDomainOffPeakWindowOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.offPeakWindows = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainOffPeakWindowOptionsOffPeakWindow(ctx, depth + 1))]);
  return out;
}

// aws:opensearch/getDomainOffPeakWindowOptionsOffPeakWindow:getDomainOffPeakWindowOptionsOffPeakWindow
export function opensearch_getDomainOffPeakWindowOptionsOffPeakWindow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.windowStartTimes = (depth > 4 ? [] : [(depth > 4 ? {} : T_opensearch.opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime(ctx, depth + 1))]);
  return out;
}

// aws:opensearch/getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime:getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
export function opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.hours = 0;
  out.minutes = 0;
  return out;
}

// aws:opensearch/getDomainSnapshotOption:getDomainSnapshotOption
export function opensearch_getDomainSnapshotOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automatedSnapshotStartHour = 0;
  return out;
}

// aws:opensearch/getDomainSoftwareUpdateOption:getDomainSoftwareUpdateOption
export function opensearch_getDomainSoftwareUpdateOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoSoftwareUpdateEnabled = false;
  return out;
}

// aws:opensearch/getDomainVpcOption:getDomainVpcOption
export function opensearch_getDomainVpcOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:opensearch/getServerlessSecurityConfigSamlOptions:getServerlessSecurityConfigSamlOptions
export function opensearch_getServerlessSecurityConfigSamlOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupAttribute = "";
  out.metadata = "";
  out.sessionTimeout = 30;
  out.userAttribute = "";
  return out;
}
