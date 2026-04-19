// GENERATED FILE — do not edit.
// Service: cur   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:cur/reportDefinition:ReportDefinition
export function ReportDefinition(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.additionalArtifacts = (i.additionalArtifacts !== undefined ? i.additionalArtifacts : (depth > 4 ? [] : [""]));
  out.additionalSchemaElements = (i.additionalSchemaElements !== undefined ? i.additionalSchemaElements : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.compression = (i.compression !== undefined ? i.compression : "");
  out.format = (i.format !== undefined ? i.format : "");
  out.refreshClosedReports = (i.refreshClosedReports !== undefined ? i.refreshClosedReports : false);
  out.reportName = (i.reportName !== undefined ? i.reportName : "");
  out.reportVersioning = (i.reportVersioning !== undefined ? i.reportVersioning : "");
  out.s3Bucket = (i.s3Bucket !== undefined ? i.s3Bucket : "");
  out.s3Prefix = (i.s3Prefix !== undefined ? i.s3Prefix : "");
  out.s3Region = (i.s3Region !== undefined ? i.s3Region : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeUnit = (i.timeUnit !== undefined ? i.timeUnit : "");
  return out;
}
