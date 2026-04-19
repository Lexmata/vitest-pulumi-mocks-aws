// GENERATED FILE — do not edit.
// Service: mediastore   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:mediastore/container:Container
export function Container(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:mediastore/containerPolicy:ContainerPolicy
export function ContainerPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.containerName = (i.containerName !== undefined ? i.containerName : "");
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}
