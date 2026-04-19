// GENERATED FILE — do not edit.
// Service: timestreamquery   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_timestreamquery from "../types/timestreamquery.js";

// aws:timestreamquery/scheduledQuery:ScheduledQuery
export function ScheduledQuery(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationTime = "";
  out.errorReportConfiguration = (i.errorReportConfiguration !== undefined ? i.errorReportConfiguration : (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryErrorReportConfiguration(ctx, depth + 1)));
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.lastRunSummaries = (i.lastRunSummaries !== undefined ? i.lastRunSummaries : (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryLastRunSummary(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.nextInvocationTime = "";
  out.notificationConfiguration = (i.notificationConfiguration !== undefined ? i.notificationConfiguration : (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryNotificationConfiguration(ctx, depth + 1)));
  out.previousInvocationTime = "";
  out.queryString = (i.queryString !== undefined ? i.queryString : "");
  out.recentlyFailedRuns = (i.recentlyFailedRuns !== undefined ? i.recentlyFailedRuns : (depth > 4 ? [] : [(depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryRecentlyFailedRun(ctx, depth + 1))]));
  out.scheduleConfiguration = (i.scheduleConfiguration !== undefined ? i.scheduleConfiguration : (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryScheduleConfiguration(ctx, depth + 1)));
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.targetConfiguration = (i.targetConfiguration !== undefined ? i.targetConfiguration : (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTargetConfiguration(ctx, depth + 1)));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_timestreamquery.timestreamquery_ScheduledQueryTimeouts(ctx, depth + 1)));
  return out;
}
