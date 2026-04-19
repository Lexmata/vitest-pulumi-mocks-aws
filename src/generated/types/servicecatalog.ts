// GENERATED FILE — do not edit.
// Service: servicecatalog   (9 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicecatalog from "./servicecatalog.js";

// aws:servicecatalog/ProductProvisioningArtifactParameters:ProductProvisioningArtifactParameters
export function servicecatalog_ProductProvisioningArtifactParameters(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.disableTemplateValidation = false;
  out.name = ctx.name;
  out.templatePhysicalId = h.id(ctx, "templatePhysicalId");
  out.templateUrl = h.endpoint(ctx, "templateUrl");
  out.type = "";
  return out;
}

// aws:servicecatalog/ProvisionedProductOutput:ProvisionedProductOutput
export function servicecatalog_ProvisionedProductOutput(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.key = "";
  out.value = "";
  return out;
}

// aws:servicecatalog/ProvisionedProductProvisioningParameter:ProvisionedProductProvisioningParameter
export function servicecatalog_ProvisionedProductProvisioningParameter(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.usePreviousValue = false;
  out.value = "";
  return out;
}

// aws:servicecatalog/ProvisionedProductStackSetProvisioningPreferences:ProvisionedProductStackSetProvisioningPreferences
export function servicecatalog_ProvisionedProductStackSetProvisioningPreferences(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (depth > 4 ? [] : [""]);
  out.failureToleranceCount = 1;
  out.failureTolerancePercentage = 0;
  out.maxConcurrencyCount = 1;
  out.maxConcurrencyPercentage = 0;
  out.regions = (depth > 4 ? [] : [""]);
  return out;
}

// aws:servicecatalog/ServiceActionDefinition:ServiceActionDefinition
export function servicecatalog_ServiceActionDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.assumeRole = "";
  out.name = ctx.name;
  out.parameters = "";
  out.type = "";
  out.version = "1";
  return out;
}

// aws:servicecatalog/getLaunchPathsSummary:getLaunchPathsSummary
export function servicecatalog_getLaunchPathsSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.constraintSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicecatalog.servicecatalog_getLaunchPathsSummaryConstraintSummary(ctx, depth + 1))]);
  out.name = ctx.name;
  out.pathId = h.id(ctx, "pathId");
  out.tags = {};
  return out;
}

// aws:servicecatalog/getLaunchPathsSummaryConstraintSummary:getLaunchPathsSummaryConstraintSummary
export function servicecatalog_getLaunchPathsSummaryConstraintSummary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.type = "";
  return out;
}

// aws:servicecatalog/getPortfolioConstraintsDetail:getPortfolioConstraintsDetail
export function servicecatalog_getPortfolioConstraintsDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.constraintId = h.id(ctx, "constraintId");
  out.description = "";
  out.owner = ctx.accountId;
  out.portfolioId = h.id(ctx, "portfolioId");
  out.productId = h.id(ctx, "productId");
  out.type = "";
  return out;
}

// aws:servicecatalog/getProvisioningArtifactsProvisioningArtifactDetail:getProvisioningArtifactsProvisioningArtifactDetail
export function servicecatalog_getProvisioningArtifactsProvisioningArtifactDetail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = false;
  out.createdTime = h.timestamp();
  out.description = "";
  out.guidance = "";
  out.id = h.id(ctx, "id");
  out.name = ctx.name;
  out.type = "";
  return out;
}
