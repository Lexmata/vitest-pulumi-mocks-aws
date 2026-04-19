// GENERATED FILE — do not edit.
// Service: resourceexplorer   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_resourceexplorer from "../types/resourceexplorer.js";

// aws:resourceexplorer/index:Index
export function Index(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_resourceexplorer.resourceexplorer_IndexTimeouts(ctx, depth + 1)));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:resourceexplorer/view:View
export function View(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultView = (i.defaultView !== undefined ? i.defaultView : false);
  out.filters = (i.filters !== undefined ? i.filters : (depth > 4 ? {} : T_resourceexplorer.resourceexplorer_ViewFilters(ctx, depth + 1)));
  out.includedProperties = (i.includedProperties !== undefined ? i.includedProperties : (depth > 4 ? [] : [(depth > 4 ? {} : T_resourceexplorer.resourceexplorer_ViewIncludedProperty(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scope = (i.scope !== undefined ? i.scope : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
