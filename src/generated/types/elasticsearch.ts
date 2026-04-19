// GENERATED FILE — do not edit.
// Service: elasticsearch   (33 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticsearch from "./elasticsearch.js";

// aws:elasticsearch/DomainAdvancedSecurityOptions:DomainAdvancedSecurityOptions
export function elasticsearch_DomainAdvancedSecurityOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.internalUserDatabaseEnabled = false;
  out.masterUserOptions = (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions(ctx, depth + 1));
  return out;
}

// aws:elasticsearch/DomainAdvancedSecurityOptionsMasterUserOptions:DomainAdvancedSecurityOptionsMasterUserOptions
export function elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.masterUserArn = h.arn(ctx);
  out.masterUserName = "";
  out.masterUserPassword = "";
  return out;
}

// aws:elasticsearch/DomainAutoTuneOptions:DomainAutoTuneOptions
export function elasticsearch_DomainAutoTuneOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredState = "";
  out.maintenanceSchedules = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule(ctx, depth + 1))]);
  out.rollbackOnDisable = "";
  return out;
}

// aws:elasticsearch/DomainAutoTuneOptionsMaintenanceSchedule:DomainAutoTuneOptionsMaintenanceSchedule
export function elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cronExpressionForRecurrence = "";
  out.duration = (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration(ctx, depth + 1));
  out.startAt = "";
  return out;
}

// aws:elasticsearch/DomainAutoTuneOptionsMaintenanceScheduleDuration:DomainAutoTuneOptionsMaintenanceScheduleDuration
export function elasticsearch_DomainAutoTuneOptionsMaintenanceScheduleDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:elasticsearch/DomainClusterConfig:DomainClusterConfig
export function elasticsearch_DomainClusterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageOptions = (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainClusterConfigColdStorageOptions(ctx, depth + 1));
  out.dedicatedMasterCount = 1;
  out.dedicatedMasterEnabled = false;
  out.dedicatedMasterType = "";
  out.instanceCount = 1;
  out.instanceType = "";
  out.warmCount = 1;
  out.warmEnabled = false;
  out.warmType = "";
  out.zoneAwarenessConfig = (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainClusterConfigZoneAwarenessConfig(ctx, depth + 1));
  out.zoneAwarenessEnabled = false;
  return out;
}

// aws:elasticsearch/DomainClusterConfigColdStorageOptions:DomainClusterConfigColdStorageOptions
export function elasticsearch_DomainClusterConfigColdStorageOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:elasticsearch/DomainClusterConfigZoneAwarenessConfig:DomainClusterConfigZoneAwarenessConfig
export function elasticsearch_DomainClusterConfigZoneAwarenessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneCount = 1;
  return out;
}

// aws:elasticsearch/DomainCognitoOptions:DomainCognitoOptions
export function elasticsearch_DomainCognitoOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.identityPoolId = h.id(ctx, "identityPoolId");
  out.roleArn = h.arn(ctx);
  out.userPoolId = h.id(ctx, "userPoolId");
  return out;
}

// aws:elasticsearch/DomainDomainEndpointOptions:DomainDomainEndpointOptions
export function elasticsearch_DomainDomainEndpointOptions(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:elasticsearch/DomainEbsOptions:DomainEbsOptions
export function elasticsearch_DomainEbsOptions(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:elasticsearch/DomainEncryptAtRest:DomainEncryptAtRest
export function elasticsearch_DomainEncryptAtRest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:elasticsearch/DomainLogPublishingOption:DomainLogPublishingOption
export function elasticsearch_DomainLogPublishingOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logType = "";
  return out;
}

// aws:elasticsearch/DomainNodeToNodeEncryption:DomainNodeToNodeEncryption
export function elasticsearch_DomainNodeToNodeEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:elasticsearch/DomainSamlOptionsSamlOptions:DomainSamlOptionsSamlOptions
export function elasticsearch_DomainSamlOptionsSamlOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.idp = (depth > 4 ? {} : T_elasticsearch.elasticsearch_DomainSamlOptionsSamlOptionsIdp(ctx, depth + 1));
  out.masterBackendRole = "";
  out.masterUserName = "";
  out.rolesKey = "";
  out.sessionTimeoutMinutes = 30;
  out.subjectKey = "";
  return out;
}

// aws:elasticsearch/DomainSamlOptionsSamlOptionsIdp:DomainSamlOptionsSamlOptionsIdp
export function elasticsearch_DomainSamlOptionsSamlOptionsIdp(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityId = h.id(ctx, "entityId");
  out.metadataContent = "";
  return out;
}

// aws:elasticsearch/DomainSnapshotOptions:DomainSnapshotOptions
export function elasticsearch_DomainSnapshotOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automatedSnapshotStartHour = 0;
  return out;
}

// aws:elasticsearch/DomainVpcOptions:DomainVpcOptions
export function elasticsearch_DomainVpcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:elasticsearch/VpcEndpointVpcOptions:VpcEndpointVpcOptions
export function elasticsearch_VpcEndpointVpcOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:elasticsearch/getDomainAdvancedSecurityOption:getDomainAdvancedSecurityOption
export function elasticsearch_getDomainAdvancedSecurityOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.internalUserDatabaseEnabled = false;
  return out;
}

// aws:elasticsearch/getDomainAutoTuneOption:getDomainAutoTuneOption
export function elasticsearch_getDomainAutoTuneOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.desiredState = "";
  out.maintenanceSchedules = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule(ctx, depth + 1))]);
  out.rollbackOnDisable = "";
  return out;
}

// aws:elasticsearch/getDomainAutoTuneOptionMaintenanceSchedule:getDomainAutoTuneOptionMaintenanceSchedule
export function elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cronExpressionForRecurrence = "";
  out.durations = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainAutoTuneOptionMaintenanceScheduleDuration(ctx, depth + 1))]);
  out.startAt = "";
  return out;
}

// aws:elasticsearch/getDomainAutoTuneOptionMaintenanceScheduleDuration:getDomainAutoTuneOptionMaintenanceScheduleDuration
export function elasticsearch_getDomainAutoTuneOptionMaintenanceScheduleDuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.unit = "";
  out.value = 0;
  return out;
}

// aws:elasticsearch/getDomainClusterConfig:getDomainClusterConfig
export function elasticsearch_getDomainClusterConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.coldStorageOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainClusterConfigColdStorageOption(ctx, depth + 1))]);
  out.dedicatedMasterCount = 1;
  out.dedicatedMasterEnabled = false;
  out.dedicatedMasterType = "";
  out.instanceCount = 1;
  out.instanceType = "";
  out.warmCount = 1;
  out.warmEnabled = false;
  out.warmType = "";
  out.zoneAwarenessConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticsearch.elasticsearch_getDomainClusterConfigZoneAwarenessConfig(ctx, depth + 1))]);
  out.zoneAwarenessEnabled = false;
  return out;
}

// aws:elasticsearch/getDomainClusterConfigColdStorageOption:getDomainClusterConfigColdStorageOption
export function elasticsearch_getDomainClusterConfigColdStorageOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:elasticsearch/getDomainClusterConfigZoneAwarenessConfig:getDomainClusterConfigZoneAwarenessConfig
export function elasticsearch_getDomainClusterConfigZoneAwarenessConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZoneCount = 1;
  return out;
}

// aws:elasticsearch/getDomainCognitoOption:getDomainCognitoOption
export function elasticsearch_getDomainCognitoOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.identityPoolId = h.id(ctx, "identityPoolId");
  out.roleArn = h.arn(ctx);
  out.userPoolId = h.id(ctx, "userPoolId");
  return out;
}

// aws:elasticsearch/getDomainEbsOption:getDomainEbsOption
export function elasticsearch_getDomainEbsOption(ctx: MockCtx, depth = 0): Record<string, any> {
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

// aws:elasticsearch/getDomainEncryptionAtRest:getDomainEncryptionAtRest
export function elasticsearch_getDomainEncryptionAtRest(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:elasticsearch/getDomainLogPublishingOption:getDomainLogPublishingOption
export function elasticsearch_getDomainLogPublishingOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogGroupArn = h.arn(ctx);
  out.enabled = true;
  out.logType = "";
  return out;
}

// aws:elasticsearch/getDomainNodeToNodeEncryption:getDomainNodeToNodeEncryption
export function elasticsearch_getDomainNodeToNodeEncryption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:elasticsearch/getDomainSnapshotOption:getDomainSnapshotOption
export function elasticsearch_getDomainSnapshotOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.automatedSnapshotStartHour = 0;
  return out;
}

// aws:elasticsearch/getDomainVpcOption:getDomainVpcOption
export function elasticsearch_getDomainVpcOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}
