// GENERATED FILE — do not edit.
// Service: codeartifact   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:codeartifact/getAuthorizationToken:getAuthorizationToken
export function getAuthorizationToken(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authorizationToken = "";
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainOwner = (i.domainOwner !== undefined ? i.domainOwner : "");
  out.durationSeconds = (i.durationSeconds !== undefined ? i.durationSeconds : 0);
  out.expiration = "";
  out.id = h.id(ctx, "id");
  return out;
}

// aws:codeartifact/getRepositoryEndpoint:getRepositoryEndpoint
export function getRepositoryEndpoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainOwner = (i.domainOwner !== undefined ? i.domainOwner : "");
  out.format = (i.format !== undefined ? i.format : "");
  out.id = h.id(ctx, "id");
  out.repository = (i.repository !== undefined ? i.repository : "");
  out.repositoryEndpoint = h.endpoint(ctx, "repositoryEndpoint");
  return out;
}
