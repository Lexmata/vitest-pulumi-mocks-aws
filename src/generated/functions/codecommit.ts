// GENERATED FILE — do not edit.
// Service: codecommit   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:codecommit/getApprovalRuleTemplate:getApprovalRuleTemplate
export function getApprovalRuleTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approvalRuleTemplateId = h.id(ctx, "approvalRuleTemplateId");
  out.content = "";
  out.creationDate = h.timestamp();
  out.description = "";
  out.id = h.id(ctx, "id");
  out.lastModifiedDate = "";
  out.lastModifiedUser = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleContentSha256 = "";
  return out;
}

// aws:codecommit/getRepository:getRepository
export function getRepository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cloneUrlHttp = "";
  out.cloneUrlSsh = "";
  out.id = h.id(ctx, "id");
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.repositoryId = h.id(ctx, "repositoryId");
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  return out;
}
