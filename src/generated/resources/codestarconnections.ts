// GENERATED FILE — do not edit.
// Service: codestarconnections   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codestarconnections from "../types/codestarconnections.js";

// aws:codestarconnections/connection:Connection
export function Connection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.connectionStatus = "";
  out.hostArn = (i.hostArn !== undefined ? i.hostArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.providerType = (i.providerType !== undefined ? i.providerType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:codestarconnections/host:Host
export function Host(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.providerEndpoint = (i.providerEndpoint !== undefined ? i.providerEndpoint : h.endpoint(ctx, "providerEndpoint"));
  out.providerType = (i.providerType !== undefined ? i.providerType : "");
  out.status = "active";
  out.vpcConfiguration = (i.vpcConfiguration !== undefined ? i.vpcConfiguration : (depth > 4 ? {} : T_codestarconnections.codestarconnections_HostVpcConfiguration(ctx, depth + 1)));
  return out;
}
