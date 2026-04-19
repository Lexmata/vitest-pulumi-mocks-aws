// GENERATED FILE — do not edit.
// Service: acm   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:acm/getCertificate:getCertificate
export function getCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.certificate = "";
  out.certificateChain = "";
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.id = h.id(ctx, "id");
  out.keyTypes = (i.keyTypes !== undefined ? i.keyTypes : (depth > 4 ? [] : [""]));
  out.mostRecent = (i.mostRecent !== undefined ? i.mostRecent : false);
  out.status = "active";
  out.statuses = (i.statuses !== undefined ? i.statuses : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.types = (i.types !== undefined ? i.types : (depth > 4 ? [] : [""]));
  return out;
}
