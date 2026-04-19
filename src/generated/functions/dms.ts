// GENERATED FILE — do not edit.
// Service: dms   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dms from "../types/dms.js";

// aws:dms/getCertificate:getCertificate
export function getCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  out.certificateCreationDate = "";
  out.certificateId = (i.certificateId !== undefined ? i.certificateId : h.id(ctx, "certificateId"));
  out.certificateOwner = "";
  out.certificatePem = "";
  out.certificateWallet = "";
  out.id = h.id(ctx, "id");
  out.keyLength = 0;
  out.signingAlgorithm = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.validFromDate = "";
  out.validToDate = "";
  return out;
}

// aws:dms/getEndpoint:getEndpoint
export function getEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificateArn = h.arn(ctx);
  out.databaseName = "";
  out.elasticsearchSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointElasticsearchSetting(ctx, depth + 1))]);
  out.endpointArn = h.arn(ctx);
  out.endpointId = (i.endpointId !== undefined ? i.endpointId : h.id(ctx, "endpointId"));
  out.endpointType = "";
  out.engineName = "";
  out.extraConnectionAttributes = "";
  out.id = h.id(ctx, "id");
  out.kafkaSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointKafkaSetting(ctx, depth + 1))]);
  out.kinesisSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointKinesisSetting(ctx, depth + 1))]);
  out.kmsKeyArn = h.arn(ctx);
  out.mongodbSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointMongodbSetting(ctx, depth + 1))]);
  out.password = "";
  out.port = 443;
  out.postgresSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointPostgresSetting(ctx, depth + 1))]);
  out.redisSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointRedisSetting(ctx, depth + 1))]);
  out.redshiftSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointRedshiftSetting(ctx, depth + 1))]);
  out.s3Settings = (depth > 4 ? [] : [(depth > 4 ? {} : T_dms.dms_getEndpointS3Setting(ctx, depth + 1))]);
  out.secretsManagerAccessRoleArn = h.arn(ctx);
  out.secretsManagerArn = h.arn(ctx);
  out.serverName = "";
  out.serviceAccessRole = "";
  out.sslMode = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.username = "";
  return out;
}

// aws:dms/getReplicationInstance:getReplicationInstance
export function getReplicationInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allocatedStorage = 0;
  out.autoMinorVersionUpgrade = false;
  out.availabilityZone = ctx.region + "a";
  out.engineVersion = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyArn = h.arn(ctx);
  out.multiAz = false;
  out.networkType = "";
  out.preferredMaintenanceWindow = "";
  out.publiclyAccessible = false;
  out.replicationInstanceArn = h.arn(ctx);
  out.replicationInstanceClass = "";
  out.replicationInstanceId = (i.replicationInstanceId !== undefined ? i.replicationInstanceId : h.id(ctx, "replicationInstanceId"));
  out.replicationInstancePrivateIps = (depth > 4 ? [] : [""]);
  out.replicationInstancePublicIps = (depth > 4 ? [] : [""]);
  out.replicationSubnetGroupId = h.id(ctx, "replicationSubnetGroupId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:dms/getReplicationSubnetGroup:getReplicationSubnetGroup
export function getReplicationSubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.id = h.id(ctx, "id");
  out.replicationSubnetGroupArn = h.arn(ctx);
  out.replicationSubnetGroupDescription = "";
  out.replicationSubnetGroupId = (i.replicationSubnetGroupId !== undefined ? i.replicationSubnetGroupId : h.id(ctx, "replicationSubnetGroupId"));
  out.subnetGroupStatus = "";
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:dms/getReplicationTask:getReplicationTask
export function getReplicationTask(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cdcStartPosition = "";
  out.cdcStartTime = "";
  out.id = h.id(ctx, "id");
  out.migrationType = "";
  out.replicationInstanceArn = h.arn(ctx);
  out.replicationTaskArn = h.arn(ctx);
  out.replicationTaskId = (i.replicationTaskId !== undefined ? i.replicationTaskId : h.id(ctx, "replicationTaskId"));
  out.replicationTaskSettings = "";
  out.sourceEndpointArn = h.arn(ctx);
  out.startReplicationTask = false;
  out.status = "active";
  out.tableMappings = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.targetEndpointArn = h.arn(ctx);
  return out;
}
