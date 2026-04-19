// GENERATED FILE — do not edit.
// Service: elasticbeanstalk   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticbeanstalk from "./elasticbeanstalk.js";

// aws:elasticbeanstalk/ApplicationAppversionLifecycle:ApplicationAppversionLifecycle
export function elasticbeanstalk_ApplicationAppversionLifecycle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteSourceFromS3 = false;
  out.maxAgeInDays = 0;
  out.maxCount = 1;
  out.serviceRole = "";
  return out;
}

// aws:elasticbeanstalk/ConfigurationTemplateSetting:ConfigurationTemplateSetting
export function elasticbeanstalk_ConfigurationTemplateSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.namespace = "";
  out.resource = "";
  out.value = "";
  return out;
}

// aws:elasticbeanstalk/EnvironmentAllSetting:EnvironmentAllSetting
export function elasticbeanstalk_EnvironmentAllSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.namespace = "";
  out.resource = "";
  out.value = "";
  return out;
}

// aws:elasticbeanstalk/EnvironmentSetting:EnvironmentSetting
export function elasticbeanstalk_EnvironmentSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.namespace = "";
  out.resource = "";
  out.value = "";
  return out;
}

// aws:elasticbeanstalk/getApplicationAppversionLifecycle:getApplicationAppversionLifecycle
export function elasticbeanstalk_getApplicationAppversionLifecycle(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.deleteSourceFromS3 = false;
  out.maxAgeInDays = 0;
  out.maxCount = 1;
  out.serviceRole = "";
  return out;
}
