// GENERATED FILE — do not edit.
// Service: mskconnect   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mskconnect from "../types/mskconnect.js";

// aws:mskconnect/connector:Connector
export function Connector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacity = (i.capacity !== undefined ? i.capacity : (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorCapacity(ctx, depth + 1)));
  out.connectorConfiguration = (i.connectorConfiguration !== undefined ? i.connectorConfiguration : {});
  out.description = (i.description !== undefined ? i.description : "");
  out.kafkaCluster = (i.kafkaCluster !== undefined ? i.kafkaCluster : (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorKafkaCluster(ctx, depth + 1)));
  out.kafkaClusterClientAuthentication = (i.kafkaClusterClientAuthentication !== undefined ? i.kafkaClusterClientAuthentication : (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorKafkaClusterClientAuthentication(ctx, depth + 1)));
  out.kafkaClusterEncryptionInTransit = (i.kafkaClusterEncryptionInTransit !== undefined ? i.kafkaClusterEncryptionInTransit : (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorKafkaClusterEncryptionInTransit(ctx, depth + 1)));
  out.kafkaconnectVersion = (i.kafkaconnectVersion !== undefined ? i.kafkaconnectVersion : "");
  out.logDelivery = (i.logDelivery !== undefined ? i.logDelivery : (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorLogDelivery(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.plugins = (i.plugins !== undefined ? i.plugins : (depth > 4 ? [] : [(depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorPlugin(ctx, depth + 1))]));
  out.serviceExecutionRoleArn = (i.serviceExecutionRoleArn !== undefined ? i.serviceExecutionRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = "1";
  out.workerConfiguration = (i.workerConfiguration !== undefined ? i.workerConfiguration : (depth > 4 ? {} : T_mskconnect.mskconnect_ConnectorWorkerConfiguration(ctx, depth + 1)));
  return out;
}

// aws:mskconnect/customPlugin:CustomPlugin
export function CustomPlugin(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.latestRevision = 0;
  out.location = (i.location !== undefined ? i.location : (depth > 4 ? {} : T_mskconnect.mskconnect_CustomPluginLocation(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:mskconnect/workerConfiguration:WorkerConfiguration
export function WorkerConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.latestRevision = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.propertiesFileContent = (i.propertiesFileContent !== undefined ? i.propertiesFileContent : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
