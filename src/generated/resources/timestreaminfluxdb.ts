// GENERATED FILE — do not edit.
// Service: timestreaminfluxdb   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreaminfluxdb from "../types/timestreaminfluxdb.js";

// aws:timestreaminfluxdb/dbInstance:DbInstance
export function DbInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = (i.allocatedStorage !== undefined ? i.allocatedStorage : 0);
  out.arn = h.arn(ctx);
  out.availabilityZone = ctx.region + "a";
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.dbInstanceType = (i.dbInstanceType !== undefined ? i.dbInstanceType : "");
  out.dbParameterGroupIdentifier = (i.dbParameterGroupIdentifier !== undefined ? i.dbParameterGroupIdentifier : "");
  out.dbStorageType = (i.dbStorageType !== undefined ? i.dbStorageType : "");
  out.deploymentType = (i.deploymentType !== undefined ? i.deploymentType : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.influxAuthParametersSecretArn = h.arn(ctx);
  out.logDeliveryConfiguration = (i.logDeliveryConfiguration !== undefined ? i.logDeliveryConfiguration : (depth > 4 ? {} : T_timestreaminfluxdb.timestreaminfluxdb_DbInstanceLogDeliveryConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.networkType = (i.networkType !== undefined ? i.networkType : "");
  out.organization = (i.organization !== undefined ? i.organization : "");
  out.password = (i.password !== undefined ? i.password : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.secondaryAvailabilityZone = ctx.region + "a";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_timestreaminfluxdb.timestreaminfluxdb_DbInstanceTimeouts(ctx, depth + 1)));
  out.username = (i.username !== undefined ? i.username : "");
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.vpcSubnetIds = (i.vpcSubnetIds !== undefined ? i.vpcSubnetIds : (depth > 4 ? [] : [""]));
  return out;
}
