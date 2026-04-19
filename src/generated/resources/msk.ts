// GENERATED FILE — do not edit.
// Service: msk   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_msk from "../types/msk.js";

// aws:msk/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bootstrapBrokers = "";
  out.bootstrapBrokersPublicSaslIam = "";
  out.bootstrapBrokersPublicSaslScram = "";
  out.bootstrapBrokersPublicTls = "";
  out.bootstrapBrokersSaslIam = "";
  out.bootstrapBrokersSaslScram = "";
  out.bootstrapBrokersTls = "";
  out.bootstrapBrokersVpcConnectivitySaslIam = "";
  out.bootstrapBrokersVpcConnectivitySaslScram = "";
  out.bootstrapBrokersVpcConnectivityTls = "";
  out.brokerNodeGroupInfo = (i.brokerNodeGroupInfo !== undefined ? i.brokerNodeGroupInfo : (depth > 4 ? {} : T_msk.msk_ClusterBrokerNodeGroupInfo(ctx, depth + 1)));
  out.clientAuthentication = (i.clientAuthentication !== undefined ? i.clientAuthentication : (depth > 4 ? {} : T_msk.msk_ClusterClientAuthentication(ctx, depth + 1)));
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.clusterUuid = h.id(ctx, "clusterUuid");
  out.configurationInfo = (i.configurationInfo !== undefined ? i.configurationInfo : (depth > 4 ? {} : T_msk.msk_ClusterConfigurationInfo(ctx, depth + 1)));
  out.currentVersion = "";
  out.encryptionInfo = (i.encryptionInfo !== undefined ? i.encryptionInfo : (depth > 4 ? {} : T_msk.msk_ClusterEncryptionInfo(ctx, depth + 1)));
  out.enhancedMonitoring = (i.enhancedMonitoring !== undefined ? i.enhancedMonitoring : "");
  out.kafkaVersion = (i.kafkaVersion !== undefined ? i.kafkaVersion : "");
  out.loggingInfo = (i.loggingInfo !== undefined ? i.loggingInfo : (depth > 4 ? {} : T_msk.msk_ClusterLoggingInfo(ctx, depth + 1)));
  out.numberOfBrokerNodes = (i.numberOfBrokerNodes !== undefined ? i.numberOfBrokerNodes : 0);
  out.openMonitoring = (i.openMonitoring !== undefined ? i.openMonitoring : (depth > 4 ? {} : T_msk.msk_ClusterOpenMonitoring(ctx, depth + 1)));
  out.storageMode = (i.storageMode !== undefined ? i.storageMode : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.zookeeperConnectString = "";
  out.zookeeperConnectStringTls = "";
  return out;
}

// aws:msk/clusterPolicy:ClusterPolicy
export function ClusterPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.currentVersion = "";
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:msk/configuration:Configuration
export function Configuration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.kafkaVersions = (i.kafkaVersions !== undefined ? i.kafkaVersions : (depth > 4 ? [] : [""]));
  out.latestRevision = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serverProperties = (i.serverProperties !== undefined ? i.serverProperties : "");
  return out;
}

// aws:msk/replicator:Replicator
export function Replicator(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.currentVersion = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.kafkaClusters = (i.kafkaClusters !== undefined ? i.kafkaClusters : (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_ReplicatorKafkaCluster(ctx, depth + 1))]));
  out.replicationInfoList = (i.replicationInfoList !== undefined ? i.replicationInfoList : (depth > 4 ? {} : T_msk.msk_ReplicatorReplicationInfoList(ctx, depth + 1)));
  out.replicatorName = (i.replicatorName !== undefined ? i.replicatorName : "");
  out.serviceExecutionRoleArn = (i.serviceExecutionRoleArn !== undefined ? i.serviceExecutionRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:msk/scramSecretAssociation:ScramSecretAssociation
export function ScramSecretAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.secretArnLists = (i.secretArnLists !== undefined ? i.secretArnLists : (depth > 4 ? [] : [""]));
  return out;
}

// aws:msk/serverlessCluster:ServerlessCluster
export function ServerlessCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bootstrapBrokersSaslIam = "";
  out.clientAuthentication = (i.clientAuthentication !== undefined ? i.clientAuthentication : (depth > 4 ? {} : T_msk.msk_ServerlessClusterClientAuthentication(ctx, depth + 1)));
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.clusterUuid = h.id(ctx, "clusterUuid");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfigs = (i.vpcConfigs !== undefined ? i.vpcConfigs : (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_ServerlessClusterVpcConfig(ctx, depth + 1))]));
  return out;
}

// aws:msk/singleScramSecretAssociation:SingleScramSecretAssociation
export function SingleScramSecretAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.secretArn = (i.secretArn !== undefined ? i.secretArn : h.arn(ctx));
  return out;
}

// aws:msk/vpcConnection:VpcConnection
export function VpcConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authentication = (i.authentication !== undefined ? i.authentication : "");
  out.clientSubnets = (i.clientSubnets !== undefined ? i.clientSubnets : (depth > 4 ? [] : [""]));
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetClusterArn = (i.targetClusterArn !== undefined ? i.targetClusterArn : h.arn(ctx));
  out.vpcId = (i.vpcId !== undefined ? i.vpcId : h.id(ctx, "vpcId", "vpc"));
  return out;
}
