// GENERATED FILE — do not edit.
// Service: redshift   (7 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshift from "../types/redshift.js";

// aws:redshift/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowVersionUpgrade = true;
  out.aquaConfigurationStatus = "";
  out.arn = h.arn(ctx);
  out.automatedSnapshotRetentionPeriod = 0;
  out.availabilityZone = ctx.region + "a";
  out.availabilityZoneRelocationEnabled = false;
  out.bucketName = ctx.name;
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.clusterNamespaceArn = h.arn(ctx);
  out.clusterNodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_getClusterClusterNode(ctx, depth + 1))]);
  out.clusterParameterGroupName = "";
  out.clusterPublicKey = "";
  out.clusterRevisionNumber = "";
  out.clusterSubnetGroupName = "";
  out.clusterType = "";
  out.clusterVersion = "";
  out.databaseName = "";
  out.defaultIamRoleArn = h.arn(ctx);
  out.elasticIp = "";
  out.enableLogging = true;
  out.encrypted = false;
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.enhancedVpcRouting = false;
  out.iamRoles = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.logDestinationType = "";
  out.logExports = (depth > 4 ? [] : [""]);
  out.maintenanceTrackName = "";
  out.manualSnapshotRetentionPeriod = 0;
  out.masterUsername = "";
  out.multiAz = false;
  out.nodeType = "";
  out.numberOfNodes = 0;
  out.port = 443;
  out.preferredMaintenanceWindow = "";
  out.publiclyAccessible = false;
  out.s3KeyPrefix = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  out.vpcSecurityGroupIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:redshift/getClusterCredentials:getClusterCredentials
export function getClusterCredentials(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoCreate = (i.autoCreate !== undefined ? i.autoCreate : false);
  out.clusterIdentifier = (i.clusterIdentifier !== undefined ? i.clusterIdentifier : "");
  out.dbGroups = (i.dbGroups !== undefined ? i.dbGroups : (depth > 4 ? [] : [""]));
  out.dbName = (i.dbName !== undefined ? i.dbName : "");
  out.dbPassword = "";
  out.dbUser = (i.dbUser !== undefined ? i.dbUser : "");
  out.durationSeconds = (i.durationSeconds !== undefined ? i.durationSeconds : 0);
  out.expiration = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:redshift/getDataShares:getDataShares
export function getDataShares(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataShares = (i.dataShares !== undefined ? i.dataShares : (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_getDataSharesDataShare(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  return out;
}

// aws:redshift/getOrderableCluster:getOrderableCluster
export function getOrderableCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.clusterType = (i.clusterType !== undefined ? i.clusterType : "");
  out.clusterVersion = (i.clusterVersion !== undefined ? i.clusterVersion : "");
  out.id = h.id(ctx, "id");
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.preferredNodeTypes = (i.preferredNodeTypes !== undefined ? i.preferredNodeTypes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:redshift/getProducerDataShares:getProducerDataShares
export function getProducerDataShares(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataShares = (i.dataShares !== undefined ? i.dataShares : (depth > 4 ? [] : [(depth > 4 ? {} : T_redshift.redshift_getProducerDataSharesDataShare(ctx, depth + 1))]));
  out.id = h.id(ctx, "id");
  out.producerArn = (i.producerArn !== undefined ? i.producerArn : h.arn(ctx));
  out.status = (i.status !== undefined ? i.status : "active");
  return out;
}

// aws:redshift/getServiceAccount:getServiceAccount
export function getServiceAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.region = (i.region !== undefined ? i.region : ctx.region);
  return out;
}

// aws:redshift/getSubnetGroup:getSubnetGroup
export function getSubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
