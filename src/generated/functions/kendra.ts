// GENERATED FILE — do not edit.
// Service: kendra   (5 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kendra from "../types/kendra.js";

// aws:kendra/getExperience:getExperience
export function getExperience(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getExperienceConfiguration(ctx, depth + 1))]);
  out.createdAt = h.timestamp();
  out.description = "";
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getExperienceEndpoint(ctx, depth + 1))]);
  out.errorMessage = "";
  out.experienceId = (i.experienceId !== undefined ? i.experienceId : h.id(ctx, "experienceId"));
  out.id = h.id(ctx, "id");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.name = ctx.name;
  out.roleArn = h.arn(ctx);
  out.status = "active";
  out.updatedAt = "";
  return out;
}

// aws:kendra/getFaq:getFaq
export function getFaq(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = "";
  out.errorMessage = "";
  out.faqId = (i.faqId !== undefined ? i.faqId : h.id(ctx, "faqId"));
  out.fileFormat = "";
  out.id = h.id(ctx, "id");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.languageCode = "";
  out.name = ctx.name;
  out.roleArn = h.arn(ctx);
  out.s3Paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getFaqS3Path(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updatedAt = "";
  return out;
}

// aws:kendra/getIndex:getIndex
export function getIndex(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacityUnits = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexCapacityUnit(ctx, depth + 1))]);
  out.createdAt = h.timestamp();
  out.description = "";
  out.documentMetadataConfigurationUpdates = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexDocumentMetadataConfigurationUpdate(ctx, depth + 1))]);
  out.edition = "";
  out.errorMessage = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.indexStatistics = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexIndexStatistic(ctx, depth + 1))]);
  out.name = ctx.name;
  out.roleArn = h.arn(ctx);
  out.serverSideEncryptionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexServerSideEncryptionConfiguration(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updatedAt = "";
  out.userContextPolicy = "";
  out.userGroupResolutionConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexUserGroupResolutionConfiguration(ctx, depth + 1))]);
  out.userTokenConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexUserTokenConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:kendra/getQuerySuggestionsBlockList:getQuerySuggestionsBlockList
export function getQuerySuggestionsBlockList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = "";
  out.errorMessage = "";
  out.fileSizeBytes = 8;
  out.id = h.id(ctx, "id");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.itemCount = 1;
  out.name = ctx.name;
  out.querySuggestionsBlockListId = (i.querySuggestionsBlockListId !== undefined ? i.querySuggestionsBlockListId : h.id(ctx, "querySuggestionsBlockListId"));
  out.roleArn = h.arn(ctx);
  out.sourceS3Paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getQuerySuggestionsBlockListSourceS3Path(ctx, depth + 1))]);
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.updatedAt = "";
  return out;
}

// aws:kendra/getThesaurus:getThesaurus
export function getThesaurus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = "";
  out.errorMessage = "";
  out.fileSizeBytes = 8;
  out.id = h.id(ctx, "id");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.name = ctx.name;
  out.roleArn = h.arn(ctx);
  out.sourceS3Paths = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getThesaurusSourceS3Path(ctx, depth + 1))]);
  out.status = "active";
  out.synonymRuleCount = 1;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.termCount = 1;
  out.thesaurusId = (i.thesaurusId !== undefined ? i.thesaurusId : h.id(ctx, "thesaurusId"));
  out.updatedAt = "";
  return out;
}
