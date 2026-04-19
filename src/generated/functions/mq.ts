// GENERATED FILE — do not edit.
// Service: mq   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_mq from "../types/mq.js";

// aws:mq/getBroker:getBroker
export function getBroker(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.authenticationStrategy = "";
  out.autoMinorVersionUpgrade = false;
  out.brokerId = (i.brokerId !== undefined ? i.brokerId : h.id(ctx, "brokerId"));
  out.brokerName = (i.brokerName !== undefined ? i.brokerName : "");
  out.configuration = (depth > 4 ? {} : T_mq.mq_getBrokerConfiguration(ctx, depth + 1));
  out.deploymentMode = "";
  out.encryptionOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getBrokerEncryptionOption(ctx, depth + 1))]);
  out.engineType = "";
  out.engineVersion = "";
  out.hostInstanceType = "";
  out.id = h.id(ctx, "id");
  out.instances = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getBrokerInstance(ctx, depth + 1))]);
  out.ldapServerMetadatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getBrokerLdapServerMetadata(ctx, depth + 1))]);
  out.logs = (depth > 4 ? {} : T_mq.mq_getBrokerLogs(ctx, depth + 1));
  out.maintenanceWindowStartTime = (depth > 4 ? {} : T_mq.mq_getBrokerMaintenanceWindowStartTime(ctx, depth + 1));
  out.publiclyAccessible = false;
  out.securityGroups = (depth > 4 ? [] : [""]);
  out.storageType = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.users = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getBrokerUser(ctx, depth + 1))]);
  return out;
}

// aws:mq/getBrokerEngineTypes:getBrokerEngineTypes
export function getBrokerEngineTypes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.brokerEngineTypes = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getBrokerEngineTypesBrokerEngineType(ctx, depth + 1))]);
  out.engineType = (i.engineType !== undefined ? i.engineType : "");
  out.id = h.id(ctx, "id");
  return out;
}

// aws:mq/getInstanceTypeOfferings:getInstanceTypeOfferings
export function getInstanceTypeOfferings(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.brokerInstanceOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_mq.mq_getInstanceTypeOfferingsBrokerInstanceOption(ctx, depth + 1))]);
  out.engineType = (i.engineType !== undefined ? i.engineType : "");
  out.hostInstanceType = (i.hostInstanceType !== undefined ? i.hostInstanceType : "");
  out.id = h.id(ctx, "id");
  out.storageType = (i.storageType !== undefined ? i.storageType : "");
  return out;
}
