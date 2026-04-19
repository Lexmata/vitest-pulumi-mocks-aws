// GENERATED FILE — do not edit.
// Service: ecrpublic   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:ecrpublic/getAuthorizationToken:getAuthorizationToken
export function getAuthorizationToken(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationToken = "";
  out.expiresAt = "";
  out.id = h.id(ctx, "id");
  out.password = "";
  out.userName = "";
  return out;
}
