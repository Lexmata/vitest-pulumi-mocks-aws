// GENERATED FILE — do not edit.
// Service: codeartifact   (2 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codeartifact from "./codeartifact.js";

// aws:codeartifact/RepositoryExternalConnections:RepositoryExternalConnections
export function codeartifact_RepositoryExternalConnections(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalConnectionName = "";
  out.packageFormat = "";
  out.status = "active";
  return out;
}

// aws:codeartifact/RepositoryUpstream:RepositoryUpstream
export function codeartifact_RepositoryUpstream(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.repositoryName = "";
  return out;
}
