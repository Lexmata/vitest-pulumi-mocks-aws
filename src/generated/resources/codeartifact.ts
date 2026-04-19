// GENERATED FILE — do not edit.
// Service: codeartifact   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codeartifact from "../types/codeartifact.js";

// aws:codeartifact/domain:Domain
export function Domain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.assetSizeBytes = "";
  out.createdTime = h.timestamp();
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.encryptionKey = (i.encryptionKey !== undefined ? i.encryptionKey : "");
  out.owner = ctx.accountId;
  out.repositoryCount = 1;
  out.s3BucketArn = h.arn(ctx);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:codeartifact/domainPermissions:DomainPermissions
export function DomainPermissions(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainOwner = (i.domainOwner !== undefined ? i.domainOwner : "");
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.policyRevision = (i.policyRevision !== undefined ? i.policyRevision : "");
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:codeartifact/repository:Repository
export function Repository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.administratorAccount = "";
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainOwner = (i.domainOwner !== undefined ? i.domainOwner : "");
  out.externalConnections = (i.externalConnections !== undefined ? i.externalConnections : (depth > 4 ? {} : T_codeartifact.codeartifact_RepositoryExternalConnections(ctx, depth + 1)));
  out.repository = (i.repository !== undefined ? i.repository : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.upstreams = (i.upstreams !== undefined ? i.upstreams : (depth > 4 ? [] : [(depth > 4 ? {} : T_codeartifact.codeartifact_RepositoryUpstream(ctx, depth + 1))]));
  return out;
}

// aws:codeartifact/repositoryPermissionsPolicy:RepositoryPermissionsPolicy
export function RepositoryPermissionsPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.domainOwner = (i.domainOwner !== undefined ? i.domainOwner : "");
  out.policyDocument = (i.policyDocument !== undefined ? i.policyDocument : "");
  out.policyRevision = (i.policyRevision !== undefined ? i.policyRevision : "");
  out.repository = (i.repository !== undefined ? i.repository : "");
  out.resourceArn = h.arn(ctx);
  return out;
}
