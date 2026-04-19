// GENERATED FILE — do not edit.
// Service: docdb   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:docdb/getEngineVersion:getEngineVersion
export function getEngineVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineDescription = "";
  out.exportableLogTypes = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.parameterGroupFamily = (i.parameterGroupFamily !== undefined ? i.parameterGroupFamily : "");
  out.preferredVersions = (i.preferredVersions !== undefined ? i.preferredVersions : (depth > 4 ? [] : [""]));
  out.supportsLogExportsToCloudwatch = false;
  out.validUpgradeTargets = (depth > 4 ? [] : [""]);
  out.version = (i.version !== undefined ? i.version : "1");
  out.versionDescription = "";
  return out;
}

// aws:docdb/getOrderableDbInstance:getOrderableDbInstance
export function getOrderableDbInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.availabilityZones = (depth > 4 ? [] : [""]);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineVersion = (i.engineVersion !== undefined ? i.engineVersion : "");
  out.id = h.id(ctx, "id");
  out.instanceClass = (i.instanceClass !== undefined ? i.instanceClass : "");
  out.licenseModel = (i.licenseModel !== undefined ? i.licenseModel : "");
  out.preferredInstanceClasses = (i.preferredInstanceClasses !== undefined ? i.preferredInstanceClasses : (depth > 4 ? [] : [""]));
  out.vpc = (i.vpc !== undefined ? i.vpc : false);
  return out;
}
