// GENERATED FILE — do not edit.
// Service: msk   (6 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_msk from "../types/msk.js";

// aws:msk/getBootstrapBrokers:getBootstrapBrokers
export function getBootstrapBrokers(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
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
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:msk/getBrokerNodes:getBrokerNodes
export function getBrokerNodes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterArn = (i.clusterArn !== undefined ? i.clusterArn : h.arn(ctx));
  out.id = h.id(ctx, "id");
  out.nodeInfoLists = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getBrokerNodesNodeInfoList(ctx, depth + 1))]);
  return out;
}

// aws:msk/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
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
  out.brokerNodeGroupInfos = (depth > 4 ? [] : [(depth > 4 ? {} : T_msk.msk_getClusterBrokerNodeGroupInfo(ctx, depth + 1))]);
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.clusterUuid = h.id(ctx, "clusterUuid");
  out.id = h.id(ctx, "id");
  out.kafkaVersion = "";
  out.numberOfBrokerNodes = 0;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.zookeeperConnectString = "";
  out.zookeeperConnectStringTls = "";
  return out;
}

// aws:msk/getConfiguration:getConfiguration
export function getConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.kafkaVersions = (depth > 4 ? [] : [""]);
  out.latestRevision = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.serverProperties = "";
  return out;
}

// aws:msk/getKafkaVersion:getKafkaVersion
export function getKafkaVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.preferredVersions = (i.preferredVersions !== undefined ? i.preferredVersions : (depth > 4 ? [] : [""]));
  out.status = "active";
  out.version = (i.version !== undefined ? i.version : "1");
  return out;
}

// aws:msk/getVpcConnection:getVpcConnection
export function getVpcConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.authentication = "";
  out.clientSubnets = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.targetClusterArn = h.arn(ctx);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}
