// GENERATED FILE — do not edit.
// Service: cloudhsmv2   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudhsmv2 from "../types/cloudhsmv2.js";

// aws:cloudhsmv2/getCluster:getCluster
export function getCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusterCertificates = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudhsmv2.cloudhsmv2_getClusterClusterCertificate(ctx, depth + 1))]);
  out.clusterId = (i.clusterId !== undefined ? i.clusterId : h.id(ctx, "clusterId"));
  out.clusterState = (i.clusterState !== undefined ? i.clusterState : "");
  out.id = h.id(ctx, "id");
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  out.subnetIds = (depth > 4 ? [] : [""]);
  out.vpcId = h.id(ctx, "vpcId", "vpc");
  return out;
}
