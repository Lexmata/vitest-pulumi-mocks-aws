// GENERATED FILE — do not edit.
// Service: kendra   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kendra from "../types/kendra.js";

// aws:kendra/dataSource:DataSource
export function DataSource(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_kendra.kendra_DataSourceConfiguration(ctx, depth + 1)));
  out.createdAt = h.timestamp();
  out.customDocumentEnrichmentConfiguration = (i.customDocumentEnrichmentConfiguration !== undefined ? i.customDocumentEnrichmentConfiguration : (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfiguration(ctx, depth + 1)));
  out.dataSourceId = h.id(ctx, "dataSourceId");
  out.description = (i.description !== undefined ? i.description : "");
  out.errorMessage = "";
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.schedule = (i.schedule !== undefined ? i.schedule : "");
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.updatedAt = "";
  return out;
}

// aws:kendra/experience:Experience
export function Experience(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_kendra.kendra_ExperienceConfiguration(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_ExperienceEndpoint(ctx, depth + 1))]);
  out.experienceId = h.id(ctx, "experienceId");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.status = "active";
  return out;
}

// aws:kendra/faq:Faq
export function Faq(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.errorMessage = "";
  out.faqId = h.id(ctx, "faqId");
  out.fileFormat = (i.fileFormat !== undefined ? i.fileFormat : "");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.languageCode = (i.languageCode !== undefined ? i.languageCode : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.s3Path = (i.s3Path !== undefined ? i.s3Path : (depth > 4 ? {} : T_kendra.kendra_FaqS3Path(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updatedAt = "";
  return out;
}

// aws:kendra/index:Index
export function Index(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.capacityUnits = (i.capacityUnits !== undefined ? i.capacityUnits : (depth > 4 ? {} : T_kendra.kendra_IndexCapacityUnits(ctx, depth + 1)));
  out.createdAt = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.documentMetadataConfigurationUpdates = (i.documentMetadataConfigurationUpdates !== undefined ? i.documentMetadataConfigurationUpdates : (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_IndexDocumentMetadataConfigurationUpdate(ctx, depth + 1))]));
  out.edition = (i.edition !== undefined ? i.edition : "");
  out.errorMessage = "";
  out.indexStatistics = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_IndexIndexStatistic(ctx, depth + 1))]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.serverSideEncryptionConfiguration = (i.serverSideEncryptionConfiguration !== undefined ? i.serverSideEncryptionConfiguration : (depth > 4 ? {} : T_kendra.kendra_IndexServerSideEncryptionConfiguration(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.updatedAt = "";
  out.userContextPolicy = (i.userContextPolicy !== undefined ? i.userContextPolicy : "");
  out.userGroupResolutionConfiguration = (i.userGroupResolutionConfiguration !== undefined ? i.userGroupResolutionConfiguration : (depth > 4 ? {} : T_kendra.kendra_IndexUserGroupResolutionConfiguration(ctx, depth + 1)));
  out.userTokenConfigurations = (i.userTokenConfigurations !== undefined ? i.userTokenConfigurations : (depth > 4 ? {} : T_kendra.kendra_IndexUserTokenConfigurations(ctx, depth + 1)));
  return out;
}

// aws:kendra/querySuggestionsBlockList:QuerySuggestionsBlockList
export function QuerySuggestionsBlockList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.querySuggestionsBlockListId = h.id(ctx, "querySuggestionsBlockListId");
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.sourceS3Path = (i.sourceS3Path !== undefined ? i.sourceS3Path : (depth > 4 ? {} : T_kendra.kendra_QuerySuggestionsBlockListSourceS3Path(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:kendra/thesaurus:Thesaurus
export function Thesaurus(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.indexId = (i.indexId !== undefined ? i.indexId : h.id(ctx, "indexId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.sourceS3Path = (i.sourceS3Path !== undefined ? i.sourceS3Path : (depth > 4 ? {} : T_kendra.kendra_ThesaurusSourceS3Path(ctx, depth + 1)));
  out.status = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.thesaurusId = h.id(ctx, "thesaurusId");
  return out;
}
