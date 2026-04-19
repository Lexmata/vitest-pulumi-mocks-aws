// GENERATED FILE — do not edit.
// Service: devicefarm   (6 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_devicefarm from "../types/devicefarm.js";

// aws:devicefarm/devicePool:DevicePool
export function DevicePool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.maxDevices = (i.maxDevices !== undefined ? i.maxDevices : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectArn = (i.projectArn !== undefined ? i.projectArn : h.arn(ctx));
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_devicefarm.devicefarm_DevicePoolRule(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  return out;
}

// aws:devicefarm/instanceProfile:InstanceProfile
export function InstanceProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.excludeAppPackagesFromCleanups = (i.excludeAppPackagesFromCleanups !== undefined ? i.excludeAppPackagesFromCleanups : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.packageCleanup = (i.packageCleanup !== undefined ? i.packageCleanup : false);
  out.rebootAfterUse = (i.rebootAfterUse !== undefined ? i.rebootAfterUse : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:devicefarm/networkProfile:NetworkProfile
export function NetworkProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.downlinkBandwidthBits = (i.downlinkBandwidthBits !== undefined ? i.downlinkBandwidthBits : 0);
  out.downlinkDelayMs = (i.downlinkDelayMs !== undefined ? i.downlinkDelayMs : 0);
  out.downlinkJitterMs = (i.downlinkJitterMs !== undefined ? i.downlinkJitterMs : 0);
  out.downlinkLossPercent = (i.downlinkLossPercent !== undefined ? i.downlinkLossPercent : 0);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectArn = (i.projectArn !== undefined ? i.projectArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.uplinkBandwidthBits = (i.uplinkBandwidthBits !== undefined ? i.uplinkBandwidthBits : 0);
  out.uplinkDelayMs = (i.uplinkDelayMs !== undefined ? i.uplinkDelayMs : 0);
  out.uplinkJitterMs = (i.uplinkJitterMs !== undefined ? i.uplinkJitterMs : 0);
  out.uplinkLossPercent = (i.uplinkLossPercent !== undefined ? i.uplinkLossPercent : 0);
  return out;
}

// aws:devicefarm/project:Project
export function Project(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultJobTimeoutMinutes = (i.defaultJobTimeoutMinutes !== undefined ? i.defaultJobTimeoutMinutes : 30);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:devicefarm/testGridProject:TestGridProject
export function TestGridProject(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.vpcConfig = (i.vpcConfig !== undefined ? i.vpcConfig : (depth > 4 ? {} : T_devicefarm.devicefarm_TestGridProjectVpcConfig(ctx, depth + 1)));
  return out;
}

// aws:devicefarm/upload:Upload
export function Upload(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.category = "";
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.metadata = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.projectArn = (i.projectArn !== undefined ? i.projectArn : h.arn(ctx));
  out.type = (i.type !== undefined ? i.type : "");
  out.url = h.endpoint(ctx, "url");
  return out;
}
