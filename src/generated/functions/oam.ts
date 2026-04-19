// GENERATED FILE — do not edit.
// Service: oam   (4 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_oam from "../types/oam.js";

// aws:oam/getLink:getLink
export function getLink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.label = "";
  out.labelTemplate = "";
  out.linkConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_oam.oam_getLinkLinkConfiguration(ctx, depth + 1))]);
  out.linkId = h.id(ctx, "linkId");
  out.linkIdentifier = (i.linkIdentifier !== undefined ? i.linkIdentifier : "");
  out.resourceTypes = (depth > 4 ? [] : [""]);
  out.sinkArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:oam/getLinks:getLinks
export function getLinks(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}

// aws:oam/getSink:getSink
export function getSink(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.sinkId = h.id(ctx, "sinkId");
  out.sinkIdentifier = (i.sinkIdentifier !== undefined ? i.sinkIdentifier : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:oam/getSinks:getSinks
export function getSinks(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  return out;
}
