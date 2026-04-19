// GENERATED FILE — do not edit.
// Service: codecommit   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codecommit from "../types/codecommit.js";

// aws:codecommit/approvalRuleTemplate:ApprovalRuleTemplate
export function ApprovalRuleTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approvalRuleTemplateId = h.id(ctx, "approvalRuleTemplateId");
  out.content = (i.content !== undefined ? i.content : "");
  out.creationDate = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.lastModifiedDate = "";
  out.lastModifiedUser = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.ruleContentSha256 = "";
  return out;
}

// aws:codecommit/approvalRuleTemplateAssociation:ApprovalRuleTemplateAssociation
export function ApprovalRuleTemplateAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.approvalRuleTemplateName = (i.approvalRuleTemplateName !== undefined ? i.approvalRuleTemplateName : "");
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  return out;
}

// aws:codecommit/repository:Repository
export function Repository(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.cloneUrlHttp = "";
  out.cloneUrlSsh = "";
  out.defaultBranch = (i.defaultBranch !== undefined ? i.defaultBranch : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.repositoryId = h.id(ctx, "repositoryId");
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:codecommit/trigger:Trigger
export function Trigger(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationId = h.id(ctx, "configurationId");
  out.repositoryName = (i.repositoryName !== undefined ? i.repositoryName : "");
  out.triggers = (i.triggers !== undefined ? i.triggers : (depth > 4 ? [] : [(depth > 4 ? {} : T_codecommit.codecommit_TriggerTrigger(ctx, depth + 1))]));
  return out;
}
