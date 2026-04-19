// GENERATED FILE — do not edit.
// Service: oam   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_oam from "../types/oam.js";

// aws:oam/link:Link
export function Link(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.label = "";
  out.labelTemplate = (i.labelTemplate !== undefined ? i.labelTemplate : "");
  out.linkConfiguration = (i.linkConfiguration !== undefined ? i.linkConfiguration : (depth > 4 ? {} : T_oam.oam_LinkLinkConfiguration(ctx, depth + 1)));
  out.linkId = h.id(ctx, "linkId");
  out.resourceTypes = (i.resourceTypes !== undefined ? i.resourceTypes : (depth > 4 ? [] : [""]));
  out.sinkArn = h.arn(ctx);
  out.sinkIdentifier = (i.sinkIdentifier !== undefined ? i.sinkIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:oam/sink:Sink
export function Sink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.sinkId = h.id(ctx, "sinkId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:oam/sinkPolicy:SinkPolicy
export function SinkPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.sinkId = h.id(ctx, "sinkId");
  out.sinkIdentifier = (i.sinkIdentifier !== undefined ? i.sinkIdentifier : "");
  return out;
}
