// GENERATED FILE — do not edit.
// Service: s3outposts   (1 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3outposts from "./s3outposts.js";

// aws:s3outposts/EndpointNetworkInterface:EndpointNetworkInterface
export function s3outposts_EndpointNetworkInterface(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.networkInterfaceId = h.id(ctx, "networkInterfaceId");
  return out;
}
