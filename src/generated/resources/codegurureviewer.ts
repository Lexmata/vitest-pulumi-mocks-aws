// GENERATED FILE — do not edit.
// Service: codegurureviewer   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codegurureviewer from "../types/codegurureviewer.js";

// aws:codegurureviewer/repositoryAssociation:RepositoryAssociation
export function RepositoryAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associationId = h.id(ctx, "associationId");
  out.connectionArn = h.arn(ctx);
  out.kmsKeyDetails = (i.kmsKeyDetails !== undefined ? i.kmsKeyDetails : (depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationKmsKeyDetails(ctx, depth + 1)));
  out.name = ctx.name;
  out.owner = ctx.accountId;
  out.providerType = "";
  out.repository = (i.repository !== undefined ? i.repository : (depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationRepository(ctx, depth + 1)));
  out.s3RepositoryDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_codegurureviewer.codegurureviewer_RepositoryAssociationS3RepositoryDetail(ctx, depth + 1))]);
  out.state = "active";
  out.stateReason = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
