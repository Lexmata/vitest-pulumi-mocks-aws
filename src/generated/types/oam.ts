// GENERATED FILE — do not edit.
// Service: oam   (6 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_oam from "./oam.js";

// aws:oam/LinkLinkConfiguration:LinkLinkConfiguration
export function oam_LinkLinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupConfiguration = (depth > 4 ? {} : T_oam.oam_LinkLinkConfigurationLogGroupConfiguration(ctx, depth + 1));
  out.metricConfiguration = (depth > 4 ? {} : T_oam.oam_LinkLinkConfigurationMetricConfiguration(ctx, depth + 1));
  return out;
}

// aws:oam/LinkLinkConfigurationLogGroupConfiguration:LinkLinkConfigurationLogGroupConfiguration
export function oam_LinkLinkConfigurationLogGroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = "";
  return out;
}

// aws:oam/LinkLinkConfigurationMetricConfiguration:LinkLinkConfigurationMetricConfiguration
export function oam_LinkLinkConfigurationMetricConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = "";
  return out;
}

// aws:oam/getLinkLinkConfiguration:getLinkLinkConfiguration
export function oam_getLinkLinkConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logGroupConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_oam.oam_getLinkLinkConfigurationLogGroupConfiguration(ctx, depth + 1))]);
  out.metricConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_oam.oam_getLinkLinkConfigurationMetricConfiguration(ctx, depth + 1))]);
  return out;
}

// aws:oam/getLinkLinkConfigurationLogGroupConfiguration:getLinkLinkConfigurationLogGroupConfiguration
export function oam_getLinkLinkConfigurationLogGroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = "";
  return out;
}

// aws:oam/getLinkLinkConfigurationMetricConfiguration:getLinkLinkConfigurationMetricConfiguration
export function oam_getLinkLinkConfigurationMetricConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.filter = "";
  return out;
}
