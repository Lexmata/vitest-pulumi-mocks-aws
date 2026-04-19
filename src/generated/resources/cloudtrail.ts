// GENERATED FILE — do not edit.
// Service: cloudtrail   (3 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudtrail from "../types/cloudtrail.js";

// aws:cloudtrail/eventDataStore:EventDataStore
export function EventDataStore(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advancedEventSelectors = (i.advancedEventSelectors !== undefined ? i.advancedEventSelectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_EventDataStoreAdvancedEventSelector(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.billingMode = (i.billingMode !== undefined ? i.billingMode : "");
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.multiRegionEnabled = (i.multiRegionEnabled !== undefined ? i.multiRegionEnabled : false);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.organizationEnabled = (i.organizationEnabled !== undefined ? i.organizationEnabled : false);
  out.retentionPeriod = (i.retentionPeriod !== undefined ? i.retentionPeriod : 0);
  out.suspend = (i.suspend !== undefined ? i.suspend : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.terminationProtectionEnabled = (i.terminationProtectionEnabled !== undefined ? i.terminationProtectionEnabled : false);
  return out;
}

// aws:cloudtrail/organizationDelegatedAdminAccount:OrganizationDelegatedAdminAccount
export function OrganizationDelegatedAdminAccount(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.email = "";
  out.name = ctx.name;
  out.servicePrincipal = "";
  return out;
}

// aws:cloudtrail/trail:Trail
export function Trail(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advancedEventSelectors = (i.advancedEventSelectors !== undefined ? i.advancedEventSelectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_TrailAdvancedEventSelector(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.cloudWatchLogsGroupArn = (i.cloudWatchLogsGroupArn !== undefined ? i.cloudWatchLogsGroupArn : h.arn(ctx));
  out.cloudWatchLogsRoleArn = (i.cloudWatchLogsRoleArn !== undefined ? i.cloudWatchLogsRoleArn : h.arn(ctx));
  out.enableLogFileValidation = (i.enableLogFileValidation !== undefined ? i.enableLogFileValidation : true);
  out.enableLogging = (i.enableLogging !== undefined ? i.enableLogging : true);
  out.eventSelectors = (i.eventSelectors !== undefined ? i.eventSelectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_TrailEventSelector(ctx, depth + 1))]));
  out.homeRegion = "";
  out.includeGlobalServiceEvents = (i.includeGlobalServiceEvents !== undefined ? i.includeGlobalServiceEvents : false);
  out.insightSelectors = (i.insightSelectors !== undefined ? i.insightSelectors : (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudtrail.cloudtrail_TrailInsightSelector(ctx, depth + 1))]));
  out.isMultiRegionTrail = (i.isMultiRegionTrail !== undefined ? i.isMultiRegionTrail : true);
  out.isOrganizationTrail = (i.isOrganizationTrail !== undefined ? i.isOrganizationTrail : true);
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.s3BucketName = (i.s3BucketName !== undefined ? i.s3BucketName : "");
  out.s3KeyPrefix = (i.s3KeyPrefix !== undefined ? i.s3KeyPrefix : "");
  out.snsTopicArn = h.arn(ctx);
  out.snsTopicName = (i.snsTopicName !== undefined ? i.snsTopicName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
