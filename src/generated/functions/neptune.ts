// GENERATED FILE — do not edit.
// Service: neptune   (2 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";

// aws:neptune/getEngineVersion:getEngineVersion
export function getEngineVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultCharacterSet = "";
  out.defaultOnly = (i.defaultOnly !== undefined ? i.defaultOnly : false);
  out.engine = (i.engine !== undefined ? i.engine : "");
  out.engineDescription = "";
  out.exportableLogTypes = (depth > 4 ? [] : [""]);
  out.hasMajorTarget = (i.hasMajorTarget !== undefined ? i.hasMajorTarget : false);
  out.hasMinorTarget = (i.hasMinorTarget !== undefined ? i.hasMinorTarget : false);
  out.id = h.id(ctx, "id");
  out.latest = (i.latest !== undefined ? i.latest : false);
  out.parameterGroupFamily = (i.parameterGroupFamily !== undefined ? i.parameterGroupFamily : "");
  out.preferredMajorTargets = (i.preferredMajorTargets !== undefined ? i.preferredMajorTargets : (depth > 4 ? [] : [""]));
  out.preferredUpgradeTargets = (i.preferredUpgradeTargets !== undefined ? i.preferredUpgradeTargets : (depth > 4 ? [] : [""]));
  out.preferredVersions = (i.preferredVersions !== undefined ? i.preferredVersions : (depth > 4 ? [] : [""]));
  out.supportedCharacterSets = (depth > 4 ? [] : [""]);
  out.supportedTimezones = (depth > 4 ? [] : [""]);
  out.supportsGlobalDatabases = false;
  out.supportsLogExportsToCloudwatch = false;
  out.supportsReadReplica = false;
  out.validMajorTargets = (depth > 4 ? [] : [""]);
  out.validMinorTargets = (depth > 4 ? [] : [""]);
  out.validUpgradeTargets = (depth > 4 ? [] : [""]);
  out.version = (i.version !== undefined ? i.version : "1");
  out.versionActual = "";
  out.versionDescription = "";
  return out;
}

// aws:neptune/getOrderableDbInstance:getOrderableDbInstance
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
  out.maxIopsPerDbInstance = 0;
  out.maxIopsPerGib = 0;
  out.maxStorageSize = 8;
  out.minIopsPerDbInstance = 0;
  out.minIopsPerGib = 0;
  out.minStorageSize = 8;
  out.multiAzCapable = false;
  out.preferredInstanceClasses = (i.preferredInstanceClasses !== undefined ? i.preferredInstanceClasses : (depth > 4 ? [] : [""]));
  out.readReplicaCapable = false;
  out.storageType = "";
  out.supportsEnhancedMonitoring = false;
  out.supportsIamDatabaseAuthentication = false;
  out.supportsIops = false;
  out.supportsPerformanceInsights = false;
  out.supportsStorageEncryption = false;
  out.vpc = (i.vpc !== undefined ? i.vpc : false);
  return out;
}
