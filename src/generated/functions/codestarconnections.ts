// GENERATED FILE — do not edit.
// Service: codestarconnections   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:codestarconnections/getConnection:getConnection
export function getConnection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.connectionStatus = "";
  out.hostArn = h.arn(ctx);
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.providerType = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
