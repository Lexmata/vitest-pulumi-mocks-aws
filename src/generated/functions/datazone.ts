// GENERATED FILE — do not edit.
// Service: datazone   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:datazone/getDomain:getDomain
export function getDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = "";
  out.domainVersion = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.lastUpdatedAt = "";
  out.managedAccountId = h.id(ctx, "managedAccountId");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.portalUrl = h.endpoint(ctx, "portalUrl");
  out.status = "active";
  return out;
}

// aws:datazone/getEnvironmentBlueprint:getEnvironmentBlueprint
export function getEnvironmentBlueprint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blueprintProvider = "";
  out.description = "";
  out.domainId = (i.domainId !== undefined ? i.domainId : h.id(ctx, "domainId"));
  out.id = h.id(ctx, "id");
  out.managed = (i.managed !== undefined ? i.managed : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}
