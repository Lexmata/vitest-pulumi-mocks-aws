// GENERATED FILE — do not edit.
// Service: ecrpublic   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ecrpublic from "../types/ecrpublic.js";

// aws:ecrpublic/repository:Repository
export function Repository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.catalogData = (i.catalogData !== undefined ? i.catalogData : (depth > 4 ? {} : T_ecrpublic.ecrpublic_RepositoryCatalogData(ctx, depth + 1)));
  out.forceDestroy = (i.forceDestroy !== undefined ? i.forceDestroy : false);
  out.registryId = h.id(ctx, "registryId");
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  out.repositoryUri = h.endpoint(ctx, "repositoryUri");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ecrpublic/repositoryPolicy:RepositoryPolicy
export function RepositoryPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.registryId = h.id(ctx, "registryId");
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  return out;
}
