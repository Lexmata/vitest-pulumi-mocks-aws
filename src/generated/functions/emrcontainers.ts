// GENERATED FILE — do not edit.
// Service: emrcontainers   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_emrcontainers from "../types/emrcontainers.js";

// aws:emrcontainers/getVirtualCluster:getVirtualCluster
export function getVirtualCluster(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.containerProviders = (depth > 4 ? [] : [(depth > 4 ? {} : T_emrcontainers.emrcontainers_getVirtualClusterContainerProvider(ctx, depth + 1))]);
  out.createdAt = h.timestamp();
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.virtualClusterId = (i.virtualClusterId !== undefined ? i.virtualClusterId : h.id(ctx, "virtualClusterId"));
  return out;
}
