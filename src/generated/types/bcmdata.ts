// GENERATED FILE — do not edit.
// Service: bcmdata   (7 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_bcmdata from "./bcmdata.js";

// aws:bcmdata/ExportExport:ExportExport
export function bcmdata_ExportExport(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.dataQueries = (depth > 4 ? [] : [(depth > 4 ? {} : T_bcmdata.bcmdata_ExportExportDataQuery(ctx, depth + 1))]);
  out.description = "";
  out.destinationConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bcmdata.bcmdata_ExportExportDestinationConfiguration(ctx, depth + 1))]);
  out.exportArn = h.arn(ctx);
  out.name = ctx.name;
  out.refreshCadences = (depth > 4 ? [] : [(depth > 4 ? {} : T_bcmdata.bcmdata_ExportExportRefreshCadence(ctx, depth + 1))]);
  return out;
}

// aws:bcmdata/ExportExportDataQuery:ExportExportDataQuery
export function bcmdata_ExportExportDataQuery(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.queryStatement = "";
  out.tableConfigurations = {};
  return out;
}

// aws:bcmdata/ExportExportDestinationConfiguration:ExportExportDestinationConfiguration
export function bcmdata_ExportExportDestinationConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Destinations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bcmdata.bcmdata_ExportExportDestinationConfigurationS3Destination(ctx, depth + 1))]);
  return out;
}

// aws:bcmdata/ExportExportDestinationConfigurationS3Destination:ExportExportDestinationConfigurationS3Destination
export function bcmdata_ExportExportDestinationConfigurationS3Destination(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.s3Bucket = "";
  out.s3OutputConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_bcmdata.bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration(ctx, depth + 1))]);
  out.s3Prefix = "";
  out.s3Region = "";
  return out;
}

// aws:bcmdata/ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration:ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration
export function bcmdata_ExportExportDestinationConfigurationS3DestinationS3OutputConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.compression = "";
  out.format = "";
  out.outputType = "";
  out.overwrite = "";
  return out;
}

// aws:bcmdata/ExportExportRefreshCadence:ExportExportRefreshCadence
export function bcmdata_ExportExportRefreshCadence(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.frequency = "";
  return out;
}

// aws:bcmdata/ExportTimeouts:ExportTimeouts
export function bcmdata_ExportTimeouts(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.create = "";
  out.update = "";
  return out;
}
