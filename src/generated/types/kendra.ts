// GENERATED FILE — do not edit.
// Service: kendra   (62 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_kendra from "./kendra.js";

// aws:kendra/DataSourceConfiguration:DataSourceConfiguration
export function kendra_DataSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Configuration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationS3Configuration(ctx, depth + 1));
  out.templateConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationTemplateConfiguration(ctx, depth + 1));
  out.webCrawlerConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfiguration(ctx, depth + 1));
  return out;
}

// aws:kendra/DataSourceConfigurationS3Configuration:DataSourceConfigurationS3Configuration
export function kendra_DataSourceConfigurationS3Configuration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessControlListConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration(ctx, depth + 1));
  out.bucketName = ctx.name;
  out.documentsMetadataConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration(ctx, depth + 1));
  out.exclusionPatterns = (depth > 4 ? [] : [""]);
  out.inclusionPatterns = (depth > 4 ? [] : [""]);
  out.inclusionPrefixes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kendra/DataSourceConfigurationS3ConfigurationAccessControlListConfiguration:DataSourceConfigurationS3ConfigurationAccessControlListConfiguration
export function kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.keyPath = "";
  return out;
}

// aws:kendra/DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration:DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration
export function kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Prefix = "";
  return out;
}

// aws:kendra/DataSourceConfigurationTemplateConfiguration:DataSourceConfigurationTemplateConfiguration
export function kendra_DataSourceConfigurationTemplateConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.template = "";
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfiguration:DataSourceConfigurationWebCrawlerConfiguration
export function kendra_DataSourceConfigurationWebCrawlerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.authenticationConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration(ctx, depth + 1));
  out.crawlDepth = 0;
  out.maxContentSizePerPageInMegaBytes = 8;
  out.maxLinksPerPage = 0;
  out.maxUrlsPerMinuteCrawlRate = 0;
  out.proxyConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfigurationProxyConfiguration(ctx, depth + 1));
  out.urlExclusionPatterns = (depth > 4 ? [] : [""]);
  out.urlInclusionPatterns = (depth > 4 ? [] : [""]);
  out.urls = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfigurationUrls(ctx, depth + 1));
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration:DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration
export function kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.basicAuthentications = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication(ctx, depth + 1))]);
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication:DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication
export function kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentials = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfigurationProxyConfiguration:DataSourceConfigurationWebCrawlerConfigurationProxyConfiguration
export function kendra_DataSourceConfigurationWebCrawlerConfigurationProxyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.credentials = "";
  out.host = "";
  out.port = 443;
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfigurationUrls:DataSourceConfigurationWebCrawlerConfigurationUrls
export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrls(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.seedUrlConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration(ctx, depth + 1));
  out.siteMapsConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration(ctx, depth + 1));
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration:DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration
export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.seedUrls = (depth > 4 ? [] : [""]);
  out.webCrawlerMode = "";
  return out;
}

// aws:kendra/DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration:DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration
export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.siteMaps = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfiguration:DataSourceCustomDocumentEnrichmentConfiguration
export function kendra_DataSourceCustomDocumentEnrichmentConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inlineConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration(ctx, depth + 1))]);
  out.postExtractionHookConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration(ctx, depth + 1));
  out.preExtractionHookConfiguration = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration(ctx, depth + 1));
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration:DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.condition = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition(ctx, depth + 1));
  out.documentContentDeletion = false;
  out.target = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget(ctx, depth + 1));
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition:DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditionDocumentAttributeKey = "";
  out.conditionOnValue = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue(ctx, depth + 1));
  out.operator = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue:DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateValue = "";
  out.longValue = 0;
  out.stringListValues = (depth > 4 ? [] : [""]);
  out.stringValue = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget:DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.targetDocumentAttributeKey = "";
  out.targetDocumentAttributeValue = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTargetTargetDocumentAttributeValue(ctx, depth + 1));
  out.targetDocumentAttributeValueDeletion = false;
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTargetTargetDocumentAttributeValue:DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTargetTargetDocumentAttributeValue
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTargetTargetDocumentAttributeValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateValue = "";
  out.longValue = 0;
  out.stringListValues = (depth > 4 ? [] : [""]);
  out.stringValue = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration:DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invocationCondition = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition(ctx, depth + 1));
  out.lambdaArn = h.arn(ctx);
  out.s3Bucket = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition:DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditionDocumentAttributeKey = "";
  out.conditionOnValue = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue(ctx, depth + 1));
  out.operator = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue:DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateValue = "";
  out.longValue = 0;
  out.stringListValues = (depth > 4 ? [] : [""]);
  out.stringValue = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration:DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.invocationCondition = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition(ctx, depth + 1));
  out.lambdaArn = h.arn(ctx);
  out.s3Bucket = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition:DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.conditionDocumentAttributeKey = "";
  out.conditionOnValue = (depth > 4 ? {} : T_kendra.kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue(ctx, depth + 1));
  out.operator = "";
  return out;
}

// aws:kendra/DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue:DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue
export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dateValue = "";
  out.longValue = 0;
  out.stringListValues = (depth > 4 ? [] : [""]);
  out.stringValue = "";
  return out;
}

// aws:kendra/ExperienceConfiguration:ExperienceConfiguration
export function kendra_ExperienceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentSourceConfiguration = (depth > 4 ? {} : T_kendra.kendra_ExperienceConfigurationContentSourceConfiguration(ctx, depth + 1));
  out.userIdentityConfiguration = (depth > 4 ? {} : T_kendra.kendra_ExperienceConfigurationUserIdentityConfiguration(ctx, depth + 1));
  return out;
}

// aws:kendra/ExperienceConfigurationContentSourceConfiguration:ExperienceConfigurationContentSourceConfiguration
export function kendra_ExperienceConfigurationContentSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceIds = (depth > 4 ? [] : [""]);
  out.directPutContent = false;
  out.faqIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kendra/ExperienceConfigurationUserIdentityConfiguration:ExperienceConfigurationUserIdentityConfiguration
export function kendra_ExperienceConfigurationUserIdentityConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identityAttributeName = "";
  return out;
}

// aws:kendra/ExperienceEndpoint:ExperienceEndpoint
export function kendra_ExperienceEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointType = "";
  return out;
}

// aws:kendra/FaqS3Path:FaqS3Path
export function kendra_FaqS3Path(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:kendra/IndexCapacityUnits:IndexCapacityUnits
export function kendra_IndexCapacityUnits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryCapacityUnits = 0;
  out.storageCapacityUnits = 0;
  return out;
}

// aws:kendra/IndexDocumentMetadataConfigurationUpdate:IndexDocumentMetadataConfigurationUpdate
export function kendra_IndexDocumentMetadataConfigurationUpdate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.relevance = (depth > 4 ? {} : T_kendra.kendra_IndexDocumentMetadataConfigurationUpdateRelevance(ctx, depth + 1));
  out.search = (depth > 4 ? {} : T_kendra.kendra_IndexDocumentMetadataConfigurationUpdateSearch(ctx, depth + 1));
  out.type = "";
  return out;
}

// aws:kendra/IndexDocumentMetadataConfigurationUpdateRelevance:IndexDocumentMetadataConfigurationUpdateRelevance
export function kendra_IndexDocumentMetadataConfigurationUpdateRelevance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = "";
  out.freshness = false;
  out.importance = 443;
  out.rankOrder = "";
  out.valuesImportanceMap = {};
  return out;
}

// aws:kendra/IndexDocumentMetadataConfigurationUpdateSearch:IndexDocumentMetadataConfigurationUpdateSearch
export function kendra_IndexDocumentMetadataConfigurationUpdateSearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayable = false;
  out.facetable = false;
  out.searchable = false;
  out.sortable = false;
  return out;
}

// aws:kendra/IndexIndexStatistic:IndexIndexStatistic
export function kendra_IndexIndexStatistic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.faqStatistics = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_IndexIndexStatisticFaqStatistic(ctx, depth + 1))]);
  out.textDocumentStatistics = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_IndexIndexStatisticTextDocumentStatistic(ctx, depth + 1))]);
  return out;
}

// aws:kendra/IndexIndexStatisticFaqStatistic:IndexIndexStatisticFaqStatistic
export function kendra_IndexIndexStatisticFaqStatistic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexedQuestionAnswersCount = 1;
  return out;
}

// aws:kendra/IndexIndexStatisticTextDocumentStatistic:IndexIndexStatisticTextDocumentStatistic
export function kendra_IndexIndexStatisticTextDocumentStatistic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexedTextBytes = 0;
  out.indexedTextDocumentsCount = 1;
  return out;
}

// aws:kendra/IndexServerSideEncryptionConfiguration:IndexServerSideEncryptionConfiguration
export function kendra_IndexServerSideEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:kendra/IndexUserGroupResolutionConfiguration:IndexUserGroupResolutionConfiguration
export function kendra_IndexUserGroupResolutionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.userGroupResolutionMode = "";
  return out;
}

// aws:kendra/IndexUserTokenConfigurations:IndexUserTokenConfigurations
export function kendra_IndexUserTokenConfigurations(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsonTokenTypeConfiguration = (depth > 4 ? {} : T_kendra.kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration(ctx, depth + 1));
  out.jwtTokenTypeConfiguration = (depth > 4 ? {} : T_kendra.kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration(ctx, depth + 1));
  return out;
}

// aws:kendra/IndexUserTokenConfigurationsJsonTokenTypeConfiguration:IndexUserTokenConfigurationsJsonTokenTypeConfiguration
export function kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupAttributeField = "";
  out.userNameAttributeField = "";
  return out;
}

// aws:kendra/IndexUserTokenConfigurationsJwtTokenTypeConfiguration:IndexUserTokenConfigurationsJwtTokenTypeConfiguration
export function kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.claimRegex = "";
  out.groupAttributeField = "";
  out.issuer = "";
  out.keyLocation = "";
  out.secretsManagerArn = h.arn(ctx);
  out.url = h.endpoint(ctx, "url");
  out.userNameAttributeField = "";
  return out;
}

// aws:kendra/QuerySuggestionsBlockListSourceS3Path:QuerySuggestionsBlockListSourceS3Path
export function kendra_QuerySuggestionsBlockListSourceS3Path(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:kendra/ThesaurusSourceS3Path:ThesaurusSourceS3Path
export function kendra_ThesaurusSourceS3Path(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:kendra/getExperienceConfiguration:getExperienceConfiguration
export function kendra_getExperienceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.contentSourceConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getExperienceConfigurationContentSourceConfiguration(ctx, depth + 1))]);
  out.userIdentityConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getExperienceConfigurationUserIdentityConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:kendra/getExperienceConfigurationContentSourceConfiguration:getExperienceConfigurationContentSourceConfiguration
export function kendra_getExperienceConfigurationContentSourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataSourceIds = (depth > 4 ? [] : [""]);
  out.directPutContent = false;
  out.faqIds = (depth > 4 ? [] : [""]);
  return out;
}

// aws:kendra/getExperienceConfigurationUserIdentityConfiguration:getExperienceConfigurationUserIdentityConfiguration
export function kendra_getExperienceConfigurationUserIdentityConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identityAttributeName = "";
  return out;
}

// aws:kendra/getExperienceEndpoint:getExperienceEndpoint
export function kendra_getExperienceEndpoint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.endpointType = "";
  return out;
}

// aws:kendra/getFaqS3Path:getFaqS3Path
export function kendra_getFaqS3Path(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:kendra/getIndexCapacityUnit:getIndexCapacityUnit
export function kendra_getIndexCapacityUnit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryCapacityUnits = 0;
  out.storageCapacityUnits = 0;
  return out;
}

// aws:kendra/getIndexDocumentMetadataConfigurationUpdate:getIndexDocumentMetadataConfigurationUpdate
export function kendra_getIndexDocumentMetadataConfigurationUpdate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.relevances = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexDocumentMetadataConfigurationUpdateRelevance(ctx, depth + 1))]);
  out.searches = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexDocumentMetadataConfigurationUpdateSearch(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:kendra/getIndexDocumentMetadataConfigurationUpdateRelevance:getIndexDocumentMetadataConfigurationUpdateRelevance
export function kendra_getIndexDocumentMetadataConfigurationUpdateRelevance(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.duration = "";
  out.freshness = false;
  out.importance = 443;
  out.rankOrder = "";
  out.valuesImportanceMap = {};
  return out;
}

// aws:kendra/getIndexDocumentMetadataConfigurationUpdateSearch:getIndexDocumentMetadataConfigurationUpdateSearch
export function kendra_getIndexDocumentMetadataConfigurationUpdateSearch(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.displayable = false;
  out.facetable = false;
  out.searchable = false;
  out.sortable = false;
  return out;
}

// aws:kendra/getIndexIndexStatistic:getIndexIndexStatistic
export function kendra_getIndexIndexStatistic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.faqStatistics = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexIndexStatisticFaqStatistic(ctx, depth + 1))]);
  out.textDocumentStatistics = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexIndexStatisticTextDocumentStatistic(ctx, depth + 1))]);
  return out;
}

// aws:kendra/getIndexIndexStatisticFaqStatistic:getIndexIndexStatisticFaqStatistic
export function kendra_getIndexIndexStatisticFaqStatistic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexedQuestionAnswersCount = 1;
  return out;
}

// aws:kendra/getIndexIndexStatisticTextDocumentStatistic:getIndexIndexStatisticTextDocumentStatistic
export function kendra_getIndexIndexStatisticTextDocumentStatistic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.indexedTextBytes = 0;
  out.indexedTextDocumentsCount = 1;
  return out;
}

// aws:kendra/getIndexServerSideEncryptionConfiguration:getIndexServerSideEncryptionConfiguration
export function kendra_getIndexServerSideEncryptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  return out;
}

// aws:kendra/getIndexUserGroupResolutionConfiguration:getIndexUserGroupResolutionConfiguration
export function kendra_getIndexUserGroupResolutionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.userGroupResolutionMode = "";
  return out;
}

// aws:kendra/getIndexUserTokenConfiguration:getIndexUserTokenConfiguration
export function kendra_getIndexUserTokenConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jsonTokenTypeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration(ctx, depth + 1))]);
  out.jwtTokenTypeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_kendra.kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:kendra/getIndexUserTokenConfigurationJsonTokenTypeConfiguration:getIndexUserTokenConfigurationJsonTokenTypeConfiguration
export function kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupAttributeField = "";
  out.userNameAttributeField = "";
  return out;
}

// aws:kendra/getIndexUserTokenConfigurationJwtTokenTypeConfiguration:getIndexUserTokenConfigurationJwtTokenTypeConfiguration
export function kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.claimRegex = "";
  out.groupAttributeField = "";
  out.issuer = "";
  out.keyLocation = "";
  out.secretsManagerArn = h.arn(ctx);
  out.url = h.endpoint(ctx, "url");
  out.userNameAttributeField = "";
  return out;
}

// aws:kendra/getQuerySuggestionsBlockListSourceS3Path:getQuerySuggestionsBlockListSourceS3Path
export function kendra_getQuerySuggestionsBlockListSourceS3Path(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}

// aws:kendra/getThesaurusSourceS3Path:getThesaurusSourceS3Path
export function kendra_getThesaurusSourceS3Path(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = ctx.name;
  out.key = "";
  return out;
}
