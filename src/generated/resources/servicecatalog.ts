// GENERATED FILE — do not edit.
// Service: servicecatalog   (16 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_servicecatalog from "../types/servicecatalog.js";

// aws:servicecatalog/appregistryApplication:AppregistryApplication
export function AppregistryApplication(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationTag = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:servicecatalog/appregistryAttributeGroup:AppregistryAttributeGroup
export function AppregistryAttributeGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.attributes = (i.attributes !== undefined ? i.attributes : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:servicecatalog/appregistryAttributeGroupAssociation:AppregistryAttributeGroupAssociation
export function AppregistryAttributeGroupAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.attributeGroupId = (i.attributeGroupId !== undefined ? i.attributeGroupId : h.id(ctx, "attributeGroupId"));
  return out;
}

// aws:servicecatalog/budgetResourceAssociation:BudgetResourceAssociation
export function BudgetResourceAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.budgetName = (i.budgetName !== undefined ? i.budgetName : "");
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  return out;
}

// aws:servicecatalog/constraint:Constraint
export function Constraint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.owner = ctx.accountId;
  out.parameters = (i.parameters !== undefined ? i.parameters : "");
  out.portfolioId = (i.portfolioId !== undefined ? i.portfolioId : h.id(ctx, "portfolioId"));
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  out.status = "active";
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:servicecatalog/organizationsAccess:OrganizationsAccess
export function OrganizationsAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  return out;
}

// aws:servicecatalog/portfolio:Portfolio
export function Portfolio(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:servicecatalog/portfolioShare:PortfolioShare
export function PortfolioShare(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.accepted = false;
  out.portfolioId = (i.portfolioId !== undefined ? i.portfolioId : h.id(ctx, "portfolioId"));
  out.principalId = (i.principalId !== undefined ? i.principalId : h.id(ctx, "principalId"));
  out.sharePrincipals = (i.sharePrincipals !== undefined ? i.sharePrincipals : false);
  out.shareTagOptions = (i.shareTagOptions !== undefined ? i.shareTagOptions : false);
  out.type = (i.type !== undefined ? i.type : "");
  out.waitForAcceptance = (i.waitForAcceptance !== undefined ? i.waitForAcceptance : false);
  return out;
}

// aws:servicecatalog/principalPortfolioAssociation:PrincipalPortfolioAssociation
export function PrincipalPortfolioAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.portfolioId = (i.portfolioId !== undefined ? i.portfolioId : h.id(ctx, "portfolioId"));
  out.principalArn = (i.principalArn !== undefined ? i.principalArn : h.arn(ctx));
  out.principalType = (i.principalType !== undefined ? i.principalType : "");
  return out;
}

// aws:servicecatalog/product:Product
export function Product(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.arn = h.arn(ctx);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.distributor = (i.distributor !== undefined ? i.distributor : "");
  out.hasDefaultPath = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.owner = (i.owner !== undefined ? i.owner : ctx.accountId);
  out.provisioningArtifactParameters = (i.provisioningArtifactParameters !== undefined ? i.provisioningArtifactParameters : (depth > 4 ? {} : T_servicecatalog.servicecatalog_ProductProvisioningArtifactParameters(ctx, depth + 1)));
  out.status = "active";
  out.supportDescription = (i.supportDescription !== undefined ? i.supportDescription : "");
  out.supportEmail = (i.supportEmail !== undefined ? i.supportEmail : "");
  out.supportUrl = (i.supportUrl !== undefined ? i.supportUrl : h.endpoint(ctx, "supportUrl"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:servicecatalog/productPortfolioAssociation:ProductPortfolioAssociation
export function ProductPortfolioAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.portfolioId = (i.portfolioId !== undefined ? i.portfolioId : h.id(ctx, "portfolioId"));
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  out.sourcePortfolioId = (i.sourcePortfolioId !== undefined ? i.sourcePortfolioId : h.id(ctx, "sourcePortfolioId"));
  return out;
}

// aws:servicecatalog/provisionedProduct:ProvisionedProduct
export function ProvisionedProduct(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.arn = h.arn(ctx);
  out.cloudwatchDashboardNames = (depth > 4 ? [] : [""]);
  out.createdTime = h.timestamp();
  out.ignoreErrors = (i.ignoreErrors !== undefined ? i.ignoreErrors : false);
  out.lastProvisioningRecordId = h.id(ctx, "lastProvisioningRecordId");
  out.lastRecordId = h.id(ctx, "lastRecordId");
  out.lastSuccessfulProvisioningRecordId = h.id(ctx, "lastSuccessfulProvisioningRecordId");
  out.launchRoleArn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationArns = (i.notificationArns !== undefined ? i.notificationArns : (depth > 4 ? [] : [""]));
  out.outputs = (depth > 4 ? [] : [(depth > 4 ? {} : T_servicecatalog.servicecatalog_ProvisionedProductOutput(ctx, depth + 1))]);
  out.pathId = (i.pathId !== undefined ? i.pathId : h.id(ctx, "pathId"));
  out.pathName = (i.pathName !== undefined ? i.pathName : "");
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  out.productName = (i.productName !== undefined ? i.productName : "");
  out.provisioningArtifactId = (i.provisioningArtifactId !== undefined ? i.provisioningArtifactId : h.id(ctx, "provisioningArtifactId"));
  out.provisioningArtifactName = (i.provisioningArtifactName !== undefined ? i.provisioningArtifactName : "");
  out.provisioningParameters = (i.provisioningParameters !== undefined ? i.provisioningParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_servicecatalog.servicecatalog_ProvisionedProductProvisioningParameter(ctx, depth + 1))]));
  out.retainPhysicalResources = (i.retainPhysicalResources !== undefined ? i.retainPhysicalResources : false);
  out.stackSetProvisioningPreferences = (i.stackSetProvisioningPreferences !== undefined ? i.stackSetProvisioningPreferences : (depth > 4 ? {} : T_servicecatalog.servicecatalog_ProvisionedProductStackSetProvisioningPreferences(ctx, depth + 1)));
  out.status = "active";
  out.statusMessage = "";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = "";
  return out;
}

// aws:servicecatalog/provisioningArtifact:ProvisioningArtifact
export function ProvisioningArtifact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.active = (i.active !== undefined ? i.active : false);
  out.createdTime = h.timestamp();
  out.description = (i.description !== undefined ? i.description : "");
  out.disableTemplateValidation = (i.disableTemplateValidation !== undefined ? i.disableTemplateValidation : false);
  out.guidance = (i.guidance !== undefined ? i.guidance : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.productId = (i.productId !== undefined ? i.productId : h.id(ctx, "productId"));
  out.provisioningArtifactId = h.id(ctx, "provisioningArtifactId");
  out.templatePhysicalId = (i.templatePhysicalId !== undefined ? i.templatePhysicalId : h.id(ctx, "templatePhysicalId"));
  out.templateUrl = (i.templateUrl !== undefined ? i.templateUrl : h.endpoint(ctx, "templateUrl"));
  out.type = (i.type !== undefined ? i.type : "");
  return out;
}

// aws:servicecatalog/serviceAction:ServiceAction
export function ServiceAction(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.acceptLanguage = (i.acceptLanguage !== undefined ? i.acceptLanguage : "");
  out.definition = (i.definition !== undefined ? i.definition : (depth > 4 ? {} : T_servicecatalog.servicecatalog_ServiceActionDefinition(ctx, depth + 1)));
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:servicecatalog/tagOption:TagOption
export function TagOption(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.active = (i.active !== undefined ? i.active : false);
  out.key = (i.key !== undefined ? i.key : "");
  out.owner = ctx.accountId;
  out.value = (i.value !== undefined ? i.value : "");
  return out;
}

// aws:servicecatalog/tagOptionResourceAssociation:TagOptionResourceAssociation
export function TagOptionResourceAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.resourceArn = h.arn(ctx);
  out.resourceCreatedTime = "";
  out.resourceDescription = "";
  out.resourceId = (i.resourceId !== undefined ? i.resourceId : h.id(ctx, "resourceId"));
  out.resourceName = "";
  out.tagOptionId = (i.tagOptionId !== undefined ? i.tagOptionId : h.id(ctx, "tagOptionId"));
  return out;
}
