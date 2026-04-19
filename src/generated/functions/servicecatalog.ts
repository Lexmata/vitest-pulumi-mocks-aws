// GENERATED FILE — do not edit.
// Service: servicecatalog   (9 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicecatalog from "../types/servicecatalog.js";

// aws:servicecatalog/getAppregistryApplication:getAppregistryApplication
export function getAppregistryApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationTag = {};
  out.arn = h.arn(ctx);
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = ctx.name;
  out.tags = {};
  return out;
}

// aws:servicecatalog/getAppregistryAttributeGroup:getAppregistryAttributeGroup
export function getAppregistryAttributeGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.attributes = "";
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = {};
  return out;
}

// aws:servicecatalog/getAppregistryAttributeGroupAssociations:getAppregistryAttributeGroupAssociations
export function getAppregistryAttributeGroupAssociations(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeGroupIds = (depth > 4 ? [] : [""]);
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:servicecatalog/getConstraint:getConstraint
export function getConstraint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.owner = ctx.accountId;
  out.parameters = "";
  out.portfolioId = h.id(ctx, "portfolioId");
  out.productId = h.id(ctx, "productId");
  out.status = "active";
  out.type = "";
  return out;
}

// aws:servicecatalog/getLaunchPaths:getLaunchPaths
export function getLaunchPaths(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.id = h.id(ctx, "id");
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  out.summaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicecatalog.servicecatalog_getLaunchPathsSummary(ctx, depth + 1))]);
  return out;
}

// aws:servicecatalog/getPortfolio:getPortfolio
export function getPortfolio(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = "";
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = ctx.name;
  out.providerName = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:servicecatalog/getPortfolioConstraints:getPortfolioConstraints
export function getPortfolioConstraints(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.details = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicecatalog.servicecatalog_getPortfolioConstraintsDetail(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.portfolioId = (i.portfolioId !== undefined ? i.portfolioId : h.id(ctx, "portfolioId"));
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  return out;
}

// aws:servicecatalog/getProduct:getProduct
export function getProduct(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = "";
  out.distributor = "";
  out.hasDefaultPath = false;
  out.id = (i.id !== undefined ? i.id : h.id(ctx, "id"));
  out.name = ctx.name;
  out.owner = ctx.accountId;
  out.status = "active";
  out.supportDescription = "";
  out.supportEmail = "";
  out.supportUrl = h.endpoint(ctx, "supportUrl");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.type = "";
  return out;
}

// aws:servicecatalog/getProvisioningArtifacts:getProvisioningArtifacts
export function getProvisioningArtifacts(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.id = h.id(ctx, "id");
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  out.provisioningArtifactDetails = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicecatalog.servicecatalog_getProvisioningArtifactsProvisioningArtifactDetail(ctx, depth + 1))]);
  return out;
}
