// GENERATED FILE — do not edit.
// Service: scheduler   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_scheduler from "../types/scheduler.js";

// aws:scheduler/schedule:Schedule
export function Schedule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.endDate = (i.endDate !== undefined ? i.endDate : "");
  out.flexibleTimeWindow = (i.flexibleTimeWindow !== undefined ? i.flexibleTimeWindow : (depth > 4 ? {} : T_scheduler.scheduler_ScheduleFlexibleTimeWindow(ctx, depth + 1)));
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.kmsKeyArn = (i.kmsKeyArn !== undefined ? i.kmsKeyArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.scheduleExpression = (i.scheduleExpression !== undefined ? i.scheduleExpression : "");
  out.scheduleExpressionTimezone = (i.scheduleExpressionTimezone !== undefined ? i.scheduleExpressionTimezone : "");
  out.startDate = (i.startDate !== undefined ? i.startDate : "");
  out.state = (i.state !== undefined ? i.state : "active");
  out.target = (i.target !== undefined ? i.target : (depth > 4 ? {} : T_scheduler.scheduler_ScheduleTarget(ctx, depth + 1)));
  return out;
}

// aws:scheduler/scheduleGroup:ScheduleGroup
export function ScheduleGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.creationDate = h.timestamp();
  out.lastModificationDate = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
