// GENERATED FILE — do not edit.
// Service: cur   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:cur/getReportDefinition:getReportDefinition
export function getReportDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalArtifacts = (depth > 4 ? [] : [""]);
  out.additionalSchemaElements = (depth > 4 ? [] : [""]);
  out.compression = "";
  out.format = "";
  out.id = h.id(ctx, "id");
  out.refreshClosedReports = false;
  out.reportName = (i.reportName !== undefined ? i.reportName : "");
  out.reportVersioning = "";
  out.s3Bucket = "";
  out.s3Prefix = "";
  out.s3Region = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.timeUnit = "";
  return out;
}
