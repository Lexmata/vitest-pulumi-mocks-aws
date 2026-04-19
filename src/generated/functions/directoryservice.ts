// GENERATED FILE — do not edit.
// Service: directoryservice   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_directoryservice from "../types/directoryservice.js";

// aws:directoryservice/getDirectory:getDirectory
export function getDirectory(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessUrl = h.endpoint(ctx, "accessUrl");
  out.alias = "";
  out.connectSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_directoryservice.directoryservice_getDirectoryConnectSetting(ctx, depth + 1))]);
  out.description = "";
  out.directoryId = (i.directoryId !== undefined ? i.directoryId : h.id(ctx, "directoryId"));
  out.dnsIpAddresses = (depth > 4 ? [] : [""]);
  out.edition = "";
  out.enableSso = true;
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.radiusSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_directoryservice.directoryservice_getDirectoryRadiusSetting(ctx, depth + 1))]);
  out.securityGroupId = h.id(ctx, "securityGroupId", "sg");
  out.shortName = "";
  out.size = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  out.vpcSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_directoryservice.directoryservice_getDirectoryVpcSetting(ctx, depth + 1))]);
  return out;
}
