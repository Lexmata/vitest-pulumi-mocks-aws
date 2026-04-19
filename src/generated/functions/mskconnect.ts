// GENERATED FILE — do not edit.
// Service: mskconnect   (3 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:mskconnect/getConnector:getConnector
export function getConnector(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.version = "1";
  return out;
}

// aws:mskconnect/getCustomPlugin:getCustomPlugin
export function getCustomPlugin(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.latestRevision = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:mskconnect/getWorkerConfiguration:getWorkerConfiguration
export function getWorkerConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = h.id(ctx, "id");
  out.latestRevision = 0;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.propertiesFileContent = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}
