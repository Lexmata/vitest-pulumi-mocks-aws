// GENERATED FILE — do not edit.
// Service: mq   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mq from "../types/mq.js";

// aws:mq/broker:Broker
export function Broker(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applyImmediately = (i.applyImmediately !== undefined ? i.applyImmediately : false);
  out.arn = h.arn(ctx);
  out.authenticationStrategy = (i.authenticationStrategy !== undefined ? i.authenticationStrategy : "");
  out.autoMinorVersionUpgrade = (i.autoMinorVersionUpgrade !== undefined ? i.autoMinorVersionUpgrade : false);
  out.brokerName = (i.brokerName !== undefined ? i.brokerName : "");
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_mq.mq_BrokerConfiguration(ctx, depth + 1)));
  out.dataReplicationMode = (i.dataReplicationMode !== undefined ? i.dataReplicationMode : "");
  out.dataReplicationPrimaryBrokerArn = (i.dataReplicationPrimaryBrokerArn !== undefined ? i.dataReplicationPrimaryBrokerArn : h.arn(ctx));
  out.deploymentMode = (i.deploymentMode !== undefined ? i.deploymentMode : "");
  out.encryptionOptions = (i.encryptionOptions !== undefined ? i.encryptionOptions : (depth > 4 ? {} : T_mq.mq_BrokerEncryptionOptions(ctx, depth + 1)));
  out.engineType = (i.engineType !== undefined ? i.engineType : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.hostInstanceType = (i.hostInstanceType !== undefined ? i.hostInstanceType : "");
  out.instances = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_BrokerInstance(ctx, depth + 1))]);
  out.ldapServerMetadata = (i.ldapServerMetadata !== undefined ? i.ldapServerMetadata : (depth > 4 ? {} : T_mq.mq_BrokerLdapServerMetadata(ctx, depth + 1)));
  out.logs = (i.logs !== undefined ? i.logs : (depth > 4 ? {} : T_mq.mq_BrokerLogs(ctx, depth + 1)));
  out.maintenanceWindowStartTime = (i.maintenanceWindowStartTime !== undefined ? i.maintenanceWindowStartTime : (depth > 4 ? {} : T_mq.mq_BrokerMaintenanceWindowStartTime(ctx, depth + 1)));
  out.pendingDataReplicationMode = "";
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.securityGroups = (i.securityGroups !== undefined ? i.securityGroups : (depth > 4 ? [] : [""]));
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.users = (i.users !== undefined ? i.users : (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_BrokerUser(ctx, depth + 1))]));
  return out;
}

// aws:mq/configuration:Configuration
export function Configuration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authenticationStrategy = (i.authenticationStrategy !== undefined ? i.authenticationStrategy : "");
  out.data = (i.data !== undefined ? i.data : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.engineType = (i.engineType !== undefined ? i.engineType : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.latestRevision = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
