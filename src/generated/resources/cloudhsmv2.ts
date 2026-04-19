// GENERATED FILE — do not edit.
// Service: cloudhsmv2   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudhsmv2 from "../types/cloudhsmv2.js";

// aws:cloudhsmv2/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterCertificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudhsmv2.cloudhsmv2_ClusterClusterCertificate(ctx, depth + 1))]);
  out.clusterId = h.id(ctx, "clusterId");
  out.clusterState = "";
  out.hsmType = (i.hsmType !== undefined ? i.hsmType : "");
  out.mode = (i.mode !== undefined ? i.mode : "");
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  out.sourceBackupIdentifier = (i.sourceBackupIdentifier !== undefined ? i.sourceBackupIdentifier : "");
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}

// aws:cloudhsmv2/hsm:Hsm
export function Hsm(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZone = (i.availabilityZone !== undefined ? i.availabilityZone : ctx.region + "a");
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.hsmEniId = h.id(ctx, "hsmEniId");
  out.hsmId = h.id(ctx, "hsmId");
  out.hsmState = "";
  out.ipAddress = (i.ipAddress !== undefined ? i.ipAddress : "10.0.0.10");
  out.subnetId = (i.subnetId !== undefined ? i.subnetId : h.id(ctx, "subnetId", "subnet"));
  return out;
}
