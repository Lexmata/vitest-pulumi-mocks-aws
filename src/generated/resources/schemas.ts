// GENERATED FILE — do not edit.
// Service: schemas   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:schemas/discoverer:Discoverer
export function Discoverer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.sourceArn = (i.sourceArn !== undefined ? i.sourceArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:schemas/registry:Registry
export function Registry(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:schemas/registryPolicy:RegistryPolicy
export function RegistryPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.registryName = (i.registryName !== undefined ? i.registryName : "");
  return out;
}

// aws:schemas/schema:Schema
export function Schema(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.content = (i.content !== undefined ? i.content : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.lastModified = h.timestamp();
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.registryName = (i.registryName !== undefined ? i.registryName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.version = "1";
  out.versionCreatedDate = "";
  return out;
}
