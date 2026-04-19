// GENERATED FILE — do not edit.
// Service: applicationinsights   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:applicationinsights/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.autoConfigEnabled = (i.autoConfigEnabled !== undefined ? i.autoConfigEnabled : false);
  out.autoCreate = (i.autoCreate !== undefined ? i.autoCreate : false);
  out.cweMonitorEnabled = (i.cweMonitorEnabled !== undefined ? i.cweMonitorEnabled : false);
  out.groupingType = (i.groupingType !== undefined ? i.groupingType : "");
  out.opsCenterEnabled = (i.opsCenterEnabled !== undefined ? i.opsCenterEnabled : false);
  out.opsItemSnsTopicArn = (i.opsItemSnsTopicArn !== undefined ? i.opsItemSnsTopicArn : h.arn(ctx));
  out.resourceGroupName = (i.resourceGroupName !== undefined ? i.resourceGroupName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
