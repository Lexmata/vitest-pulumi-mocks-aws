// GENERATED FILE — do not edit.
// Service: route53recoveryreadiness   (5 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_route53recoveryreadiness from "./route53recoveryreadiness.js";

// aws:route53recoveryreadiness/ResourceSetResource:ResourceSetResource
export function route53recoveryreadiness_ResourceSetResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.componentId = h.id(ctx, "componentId");
  out.dnsTargetResource = (depth > 4 ? {} : T_route53recoveryreadiness.route53recoveryreadiness_ResourceSetResourceDnsTargetResource(ctx, depth + 1));
  out.readinessScopes = (depth > 4 ? [] : [""]);
  out.resourceArn = h.arn(ctx);
  return out;
}

// aws:route53recoveryreadiness/ResourceSetResourceDnsTargetResource:ResourceSetResourceDnsTargetResource
export function route53recoveryreadiness_ResourceSetResourceDnsTargetResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.hostedZoneArn = h.arn(ctx);
  out.recordSetId = h.id(ctx, "recordSetId");
  out.recordType = "";
  out.targetResource = (depth > 4 ? {} : T_route53recoveryreadiness.route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource(ctx, depth + 1));
  return out;
}

// aws:route53recoveryreadiness/ResourceSetResourceDnsTargetResourceTargetResource:ResourceSetResourceDnsTargetResourceTargetResource
export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.nlbResource = (depth > 4 ? {} : T_route53recoveryreadiness.route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource(ctx, depth + 1));
  out.r53Resource = (depth > 4 ? {} : T_route53recoveryreadiness.route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource(ctx, depth + 1));
  return out;
}

// aws:route53recoveryreadiness/ResourceSetResourceDnsTargetResourceTargetResourceNlbResource:ResourceSetResourceDnsTargetResourceTargetResourceNlbResource
export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceNlbResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  return out;
}

// aws:route53recoveryreadiness/ResourceSetResourceDnsTargetResourceTargetResourceR53Resource:ResourceSetResourceDnsTargetResourceTargetResourceR53Resource
export function route53recoveryreadiness_ResourceSetResourceDnsTargetResourceTargetResourceR53Resource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.domainName = h.endpoint(ctx, "domainName");
  out.recordSetId = h.id(ctx, "recordSetId");
  return out;
}
