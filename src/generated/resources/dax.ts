// GENERATED FILE — do not edit.
// Service: dax   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dax from "../types/dax.js";

// aws:dax/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.availabilityZones = (i.availabilityZones !== undefined ? i.availabilityZones : (depth > 4 ? [] : [""]));
  out.clusterAddress = "";
  out.clusterEndpointEncryptionType = (i.clusterEndpointEncryptionType !== undefined ? i.clusterEndpointEncryptionType : "");
  out.clusterName = (i.clusterName !== undefined ? i.clusterName : "");
  out.configurationEndpoint = h.endpoint(ctx, "configurationEndpoint");
  out.description = (i.description !== undefined ? i.description : "");
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.maintenanceWindow = (i.maintenanceWindow !== undefined ? i.maintenanceWindow : "");
  out.nodeType = (i.nodeType !== undefined ? i.nodeType : "");
  out.nodes = (depth > 4 ? [] : [(depth > 4 ? {} : T_dax.dax_ClusterNode(ctx, depth + 1))]);
  out.notificationTopicArn = (i.notificationTopicArn !== undefined ? i.notificationTopicArn : h.arn(ctx));
  out.parameterGroupName = (i.parameterGroupName !== undefined ? i.parameterGroupName : "");
  out.port = 443;
  out.replicationFactor = (i.replicationFactor !== undefined ? i.replicationFactor : 0);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.serverSideEncryption = (i.serverSideEncryption !== undefined ? i.serverSideEncryption : (depth > 4 ? {} : T_dax.dax_ClusterServerSideEncryption(ctx, depth + 1)));
  out.subnetGroupName = (i.subnetGroupName !== undefined ? i.subnetGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:dax/parameterGroup:ParameterGroup
export function ParameterGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_dax.dax_ParameterGroupParameter(ctx, depth + 1))]));
  return out;
}

// aws:dax/subnetGroup:SubnetGroup
export function SubnetGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}
