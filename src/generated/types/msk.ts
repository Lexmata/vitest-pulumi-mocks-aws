// GENERATED FILE — do not edit.
// Service: msk   (46 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_msk from "./msk.js";

// aws:msk/ClusterBrokerNodeGroupInfo:ClusterBrokerNodeGroupInfo
export function msk_ClusterBrokerNodeGroupInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.azDistribution = "";
  out.clientSubnets = (depth > 4 ? [] : [""]);
  out.connectivityInfo = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoConnectivityInfo(ctx, depth + 1));
  out.instanceType = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.storageInfo = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoStorageInfo(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoConnectivityInfo:ClusterBrokerNodeGroupInfoConnectivityInfo
export function msk_ClusterBrokerNodeGroupInfoConnectivityInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.publicAccess = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess(ctx, depth + 1));
  out.vpcConnectivity = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess:ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess
export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity:ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity
export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientAuthentication = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication:ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication
export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sasl = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl(ctx, depth + 1));
  out.tls = false;
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl:ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl
export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iam = false;
  out.scram = false;
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoStorageInfo:ClusterBrokerNodeGroupInfoStorageInfo
export function msk_ClusterBrokerNodeGroupInfoStorageInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsStorageInfo = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo:ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo
export function msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.provisionedThroughput = (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput(ctx, depth + 1));
  out.volumeSize = 8;
  return out;
}

// aws:msk/ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput:ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput
export function msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.volumeThroughput = 0;
  return out;
}

// aws:msk/ClusterClientAuthentication:ClusterClientAuthentication
export function msk_ClusterClientAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sasl = (depth > 4 ? {} : T_msk.msk_ClusterClientAuthenticationSasl(ctx, depth + 1));
  out.tls = (depth > 4 ? {} : T_msk.msk_ClusterClientAuthenticationTls(ctx, depth + 1));
  out.unauthenticated = false;
  return out;
}

// aws:msk/ClusterClientAuthenticationSasl:ClusterClientAuthenticationSasl
export function msk_ClusterClientAuthenticationSasl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iam = false;
  out.scram = false;
  return out;
}

// aws:msk/ClusterClientAuthenticationTls:ClusterClientAuthenticationTls
export function msk_ClusterClientAuthenticationTls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateAuthorityArns = (depth > 4 ? [] : [""]);
  return out;
}

// aws:msk/ClusterConfigurationInfo:ClusterConfigurationInfo
export function msk_ClusterConfigurationInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.revision = 0;
  return out;
}

// aws:msk/ClusterEncryptionInfo:ClusterEncryptionInfo
export function msk_ClusterEncryptionInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.encryptionAtRestKmsKeyArn = h.arn(ctx);
  out.encryptionInTransit = (depth > 4 ? {} : T_msk.msk_ClusterEncryptionInfoEncryptionInTransit(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterEncryptionInfoEncryptionInTransit:ClusterEncryptionInfoEncryptionInTransit
export function msk_ClusterEncryptionInfoEncryptionInTransit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientBroker = "";
  out.inCluster = false;
  return out;
}

// aws:msk/ClusterLoggingInfo:ClusterLoggingInfo
export function msk_ClusterLoggingInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.brokerLogs = (depth > 4 ? {} : T_msk.msk_ClusterLoggingInfoBrokerLogs(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterLoggingInfoBrokerLogs:ClusterLoggingInfoBrokerLogs
export function msk_ClusterLoggingInfoBrokerLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cloudwatchLogs = (depth > 4 ? {} : T_msk.msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs(ctx, depth + 1));
  out.firehose = (depth > 4 ? {} : T_msk.msk_ClusterLoggingInfoBrokerLogsFirehose(ctx, depth + 1));
  out.s3 = (depth > 4 ? {} : T_msk.msk_ClusterLoggingInfoBrokerLogsS3(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterLoggingInfoBrokerLogsCloudwatchLogs:ClusterLoggingInfoBrokerLogsCloudwatchLogs
export function msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.logGroup = "";
  return out;
}

// aws:msk/ClusterLoggingInfoBrokerLogsFirehose:ClusterLoggingInfoBrokerLogsFirehose
export function msk_ClusterLoggingInfoBrokerLogsFirehose(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deliveryStream = "";
  out.enabled = true;
  return out;
}

// aws:msk/ClusterLoggingInfoBrokerLogsS3:ClusterLoggingInfoBrokerLogsS3
export function msk_ClusterLoggingInfoBrokerLogsS3(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.enabled = true;
  out.prefix = "";
  return out;
}

// aws:msk/ClusterOpenMonitoring:ClusterOpenMonitoring
export function msk_ClusterOpenMonitoring(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prometheus = (depth > 4 ? {} : T_msk.msk_ClusterOpenMonitoringPrometheus(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterOpenMonitoringPrometheus:ClusterOpenMonitoringPrometheus
export function msk_ClusterOpenMonitoringPrometheus(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jmxExporter = (depth > 4 ? {} : T_msk.msk_ClusterOpenMonitoringPrometheusJmxExporter(ctx, depth + 1));
  out.nodeExporter = (depth > 4 ? {} : T_msk.msk_ClusterOpenMonitoringPrometheusNodeExporter(ctx, depth + 1));
  return out;
}

// aws:msk/ClusterOpenMonitoringPrometheusJmxExporter:ClusterOpenMonitoringPrometheusJmxExporter
export function msk_ClusterOpenMonitoringPrometheusJmxExporter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabledInBroker = true;
  return out;
}

// aws:msk/ClusterOpenMonitoringPrometheusNodeExporter:ClusterOpenMonitoringPrometheusNodeExporter
export function msk_ClusterOpenMonitoringPrometheusNodeExporter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabledInBroker = true;
  return out;
}

// aws:msk/ReplicatorKafkaCluster:ReplicatorKafkaCluster
export function msk_ReplicatorKafkaCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amazonMskCluster = (depth > 4 ? {} : T_msk.msk_ReplicatorKafkaClusterAmazonMskCluster(ctx, depth + 1));
  out.vpcConfig = (depth > 4 ? {} : T_msk.msk_ReplicatorKafkaClusterVpcConfig(ctx, depth + 1));
  return out;
}

// aws:msk/ReplicatorKafkaClusterAmazonMskCluster:ReplicatorKafkaClusterAmazonMskCluster
export function msk_ReplicatorKafkaClusterAmazonMskCluster(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mskClusterArn = h.arn(ctx);
  return out;
}

// aws:msk/ReplicatorKafkaClusterVpcConfig:ReplicatorKafkaClusterVpcConfig
export function msk_ReplicatorKafkaClusterVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupsIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:msk/ReplicatorReplicationInfoList:ReplicatorReplicationInfoList
export function msk_ReplicatorReplicationInfoList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerGroupReplications = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_ReplicatorReplicationInfoListConsumerGroupReplication(ctx, depth + 1))]);
  out.sourceKafkaClusterAlias = "";
  out.sourceKafkaClusterArn = h.arn(ctx);
  out.targetCompressionType = "";
  out.targetKafkaClusterAlias = "";
  out.targetKafkaClusterArn = h.arn(ctx);
  out.topicReplications = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_ReplicatorReplicationInfoListTopicReplication(ctx, depth + 1))]);
  return out;
}

// aws:msk/ReplicatorReplicationInfoListConsumerGroupReplication:ReplicatorReplicationInfoListConsumerGroupReplication
export function msk_ReplicatorReplicationInfoListConsumerGroupReplication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.consumerGroupsToExcludes = (depth > 4 ? [] : [""]);
  out.consumerGroupsToReplicates = (depth > 4 ? [] : [""]);
  out.detectAndCopyNewConsumerGroups = false;
  out.synchroniseConsumerGroupOffsets = false;
  return out;
}

// aws:msk/ReplicatorReplicationInfoListTopicReplication:ReplicatorReplicationInfoListTopicReplication
export function msk_ReplicatorReplicationInfoListTopicReplication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.copyAccessControlListsForTopics = false;
  out.copyTopicConfigurations = false;
  out.detectAndCopyNewTopics = false;
  out.startingPosition = (depth > 4 ? {} : T_msk.msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition(ctx, depth + 1));
  out.topicNameConfiguration = (depth > 4 ? {} : T_msk.msk_ReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration(ctx, depth + 1));
  out.topicsToExcludes = (depth > 4 ? [] : [""]);
  out.topicsToReplicates = (depth > 4 ? [] : [""]);
  return out;
}

// aws:msk/ReplicatorReplicationInfoListTopicReplicationStartingPosition:ReplicatorReplicationInfoListTopicReplicationStartingPosition
export function msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:msk/ReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration:ReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration
export function msk_ReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:msk/ServerlessClusterClientAuthentication:ServerlessClusterClientAuthentication
export function msk_ServerlessClusterClientAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sasl = (depth > 4 ? {} : T_msk.msk_ServerlessClusterClientAuthenticationSasl(ctx, depth + 1));
  return out;
}

// aws:msk/ServerlessClusterClientAuthenticationSasl:ServerlessClusterClientAuthenticationSasl
export function msk_ServerlessClusterClientAuthenticationSasl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iam = (depth > 4 ? {} : T_msk.msk_ServerlessClusterClientAuthenticationSaslIam(ctx, depth + 1));
  return out;
}

// aws:msk/ServerlessClusterClientAuthenticationSaslIam:ServerlessClusterClientAuthenticationSaslIam
export function msk_ServerlessClusterClientAuthenticationSaslIam(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:msk/ServerlessClusterVpcConfig:ServerlessClusterVpcConfig
export function msk_ServerlessClusterVpcConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:msk/getBrokerNodesNodeInfoList:getBrokerNodesNodeInfoList
export function msk_getBrokerNodesNodeInfoList(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attachedEniId = h.id(ctx, "attachedEniId");
  out.brokerId = 0;
  out.clientSubnet = "";
  out.clientVpcIpAddress = "";
  out.endpoints = (depth > 4 ? [] : [""]);
  out.nodeArn = h.arn(ctx);
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfo:getClusterBrokerNodeGroupInfo
export function msk_getClusterBrokerNodeGroupInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.azDistribution = "";
  out.clientSubnets = (depth > 4 ? [] : [""]);
  out.connectivityInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoConnectivityInfo(ctx, depth + 1))]);
  out.instanceType = "";
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.storageInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoStorageInfo(ctx, depth + 1))]);
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoConnectivityInfo:getClusterBrokerNodeGroupInfoConnectivityInfo
export function msk_getClusterBrokerNodeGroupInfoConnectivityInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.publicAccesses = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess(ctx, depth + 1))]);
  out.vpcConnectivities = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity(ctx, depth + 1))]);
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess:getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess
export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.type = "";
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity:getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity
export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientAuthentications = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication(ctx, depth + 1))]);
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication:getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication
export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sasls = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl(ctx, depth + 1))]);
  out.tls = false;
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl:getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl
export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.iam = false;
  out.scram = false;
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoStorageInfo:getClusterBrokerNodeGroupInfoStorageInfo
export function msk_getClusterBrokerNodeGroupInfoStorageInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ebsStorageInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo(ctx, depth + 1))]);
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo:getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo
export function msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.provisionedThroughputs = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput(ctx, depth + 1))]);
  out.volumeSize = 8;
  return out;
}

// aws:msk/getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput:getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput
export function msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  out.volumeThroughput = 0;
  return out;
}
