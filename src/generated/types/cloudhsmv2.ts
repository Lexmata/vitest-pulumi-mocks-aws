// GENERATED FILE — do not edit.
// Service: cloudhsmv2   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudhsmv2 from "./cloudhsmv2.js";

// aws:cloudhsmv2/ClusterClusterCertificate:ClusterClusterCertificate
export function cloudhsmv2_ClusterClusterCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsHardwareCertificate = "";
  out.clusterCertificate = "";
  out.clusterCsr = "";
  out.hsmCertificate = "";
  out.manufacturerHardwareCertificate = "";
  return out;
}

// aws:cloudhsmv2/getClusterClusterCertificate:getClusterClusterCertificate
export function cloudhsmv2_getClusterClusterCertificate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsHardwareCertificate = "";
  out.clusterCertificate = "";
  out.clusterCsr = "";
  out.hsmCertificate = "";
  out.manufacturerHardwareCertificate = "";
  return out;
}
