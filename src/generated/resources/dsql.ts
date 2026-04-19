// GENERATED FILE — do not edit.
// Service: dsql   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_dsql from "../types/dsql.js";

// aws:dsql/cluster:Cluster
export function Cluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtectionEnabled = (i.deletionProtectionEnabled !== undefined ? i.deletionProtectionEnabled : false);
  out.encryptionDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_dsql.dsql_ClusterEncryptionDetail(ctx, depth + 1))]);
  out.identifier = "";
  out.kmsEncryptionKey = (i.kmsEncryptionKey !== undefined ? i.kmsEncryptionKey : "");
  out.multiRegionProperties = (i.multiRegionProperties !== undefined ? i.multiRegionProperties : (depth > 4 ? {} : T_dsql.dsql_ClusterMultiRegionProperties(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_dsql.dsql_ClusterTimeouts(ctx, depth + 1)));
  out.vpcEndpointServiceName = "";
  return out;
}

// aws:dsql/clusterPeering:ClusterPeering
export function ClusterPeering(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clusters = (i.clusters !== undefined ? i.clusters : (depth > 4 ? [] : [""]));
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_dsql.dsql_ClusterPeeringTimeouts(ctx, depth + 1)));
  out.witnessRegion = (i.witnessRegion !== undefined ? i.witnessRegion : "");
  return out;
}
