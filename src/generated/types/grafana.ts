// GENERATED FILE — do not edit.
// Service: grafana   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_grafana from "./grafana.js";

// aws:grafana/WorkspaceNetworkAccessControl:WorkspaceNetworkAccessControl
export function grafana_WorkspaceNetworkAccessControl(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.prefixListIds = (depth > 4 ? [] : [""]);
  out.vpceIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:grafana/WorkspaceVpcConfiguration:WorkspaceVpcConfiguration
export function grafana_WorkspaceVpcConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.securityGroupIds = (depth > 4 ? [] : [""]);
  out.subnetIds = (depth > 4 ? [] : [""]);
  return out;
}
