// GENERATED FILE — do not edit.
// Service: macie2   (27 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_macie2 from "./macie2.js";

// aws:macie2/ClassificationExportConfigurationS3Destination:ClassificationExportConfigurationS3Destination
export function macie2_ClassificationExportConfigurationS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketName = ctx.name;
  out.keyPrefix = "";
  out.kmsKeyArn = h.arn(ctx);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinition:ClassificationJobS3JobDefinition
export function macie2_ClassificationJobS3JobDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucketCriteria = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteria(ctx, depth + 1));
  out.bucketDefinitions = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketDefinition(ctx, depth + 1))]);
  out.scoping = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScoping(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteria:ClassificationJobS3JobDefinitionBucketCriteria
export function macie2_ClassificationJobS3JobDefinitionBucketCriteria(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes(ctx, depth + 1));
  out.includes = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaExcludes:ClassificationJobS3JobDefinitionBucketCriteriaExcludes
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd(ctx, depth + 1))]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd:ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.simpleCriterion = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion(ctx, depth + 1));
  out.tagCriterion = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion:ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion:ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.tagValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue(ctx, depth + 1))]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue:ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaIncludes:ClassificationJobS3JobDefinitionBucketCriteriaIncludes
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd(ctx, depth + 1))]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd:ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.simpleCriterion = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion(ctx, depth + 1));
  out.tagCriterion = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion:ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion:ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.tagValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValue(ctx, depth + 1))]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValue:ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValue
export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionBucketDefinition:ClassificationJobS3JobDefinitionBucketDefinition
export function macie2_ClassificationJobS3JobDefinitionBucketDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = ctx.accountId;
  out.buckets = (depth > 4 ? [] : [""]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScoping:ClassificationJobS3JobDefinitionScoping
export function macie2_ClassificationJobS3JobDefinitionScoping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.excludes = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingExcludes(ctx, depth + 1));
  out.includes = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingIncludes(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingExcludes:ClassificationJobS3JobDefinitionScopingExcludes
export function macie2_ClassificationJobS3JobDefinitionScopingExcludes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd(ctx, depth + 1))]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingExcludesAnd:ClassificationJobS3JobDefinitionScopingExcludesAnd
export function macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.simpleScopeTerm = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm(ctx, depth + 1));
  out.tagScopeTerm = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm:ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm
export function macie2_ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm:ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm
export function macie2_ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.key = "";
  out.tagValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValue(ctx, depth + 1))]);
  out.target = "";
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValue:ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValue
export function macie2_ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingIncludes:ClassificationJobS3JobDefinitionScopingIncludes
export function macie2_ClassificationJobS3JobDefinitionScopingIncludes(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ands = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingIncludesAnd(ctx, depth + 1))]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingIncludesAnd:ClassificationJobS3JobDefinitionScopingIncludesAnd
export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAnd(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.simpleScopeTerm = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm(ctx, depth + 1));
  out.tagScopeTerm = (depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm(ctx, depth + 1));
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm:ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm
export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.key = "";
  out.values = (depth > 4 ? [] : [""]);
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm:ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm
export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.comparator = "";
  out.key = "";
  out.tagValues = (depth > 4 ? [] : [(depth > 4 ? {} : T_macie2.macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue(ctx, depth + 1))]);
  out.target = "";
  return out;
}

// aws:macie2/ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue:ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue
export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.value = "";
  return out;
}

// aws:macie2/ClassificationJobScheduleFrequency:ClassificationJobScheduleFrequency
export function macie2_ClassificationJobScheduleFrequency(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dailySchedule = false;
  out.monthlySchedule = 0;
  out.weeklySchedule = "";
  return out;
}

// aws:macie2/ClassificationJobUserPausedDetail:ClassificationJobUserPausedDetail
export function macie2_ClassificationJobUserPausedDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.jobExpiresAt = "";
  out.jobImminentExpirationHealthEventArn = h.arn(ctx);
  out.jobPausedAt = "";
  return out;
}
