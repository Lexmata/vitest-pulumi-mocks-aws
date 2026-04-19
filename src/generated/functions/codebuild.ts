// GENERATED FILE — do not edit.
// Service: codebuild   (1 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_codebuild from "../types/codebuild.js";

// aws:codebuild/getFleet:getFleet
export function getFleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.baseCapacity = 0;
  out.computeConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_getFleetComputeConfiguration(ctx, depth + 1))]);
  out.computeType = "";
  out.created = "";
  out.environmentType = "";
  out.fleetServiceRole = "";
  out.id = h.id(ctx, "id");
  out.imageId = h.id(ctx, "imageId");
  out.lastModified = h.timestamp();
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.overflowBehavior = "";
  out.scalingConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_getFleetScalingConfiguration(ctx, depth + 1))]);
  out.statuses = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_getFleetStatus(ctx, depth + 1))]);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.vpcConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_codebuild.codebuild_getFleetVpcConfig(ctx, depth + 1))]);
  return out;
}
