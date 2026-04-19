// GENERATED FILE — do not edit.
// Service: verifiedpermissions   (16 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_verifiedpermissions from "./verifiedpermissions.js";

// aws:verifiedpermissions/IdentitySourceConfiguration:IdentitySourceConfiguration
export function verifiedpermissions_IdentitySourceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.cognitoUserPoolConfiguration = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration(ctx, depth + 1));
  out.openIdConnectConfiguration = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration(ctx, depth + 1));
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationCognitoUserPoolConfiguration:IdentitySourceConfigurationCognitoUserPoolConfiguration
export function verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientIds = (depth > 4 ? [] : [""]);
  out.groupConfiguration = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration(ctx, depth + 1));
  out.userPoolArn = h.arn(ctx);
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration:IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration
export function verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupEntityType = "";
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationOpenIdConnectConfiguration:IdentitySourceConfigurationOpenIdConnectConfiguration
export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityIdPrefix = "";
  out.groupConfiguration = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration(ctx, depth + 1));
  out.issuer = "";
  out.tokenSelection = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection(ctx, depth + 1));
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration:IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration
export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupClaim = "";
  out.groupEntityType = "";
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection:IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection
export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessTokenOnly = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly(ctx, depth + 1));
  out.identityTokenOnly = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly(ctx, depth + 1));
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly:IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly
export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.audiences = (depth > 4 ? [] : [""]);
  out.principalIdClaim = "";
  return out;
}

// aws:verifiedpermissions/IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly:IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly
export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientIds = (depth > 4 ? [] : [""]);
  out.principalIdClaim = "";
  return out;
}

// aws:verifiedpermissions/PolicyDefinition:PolicyDefinition
export function verifiedpermissions_PolicyDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.static = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_PolicyDefinitionStatic(ctx, depth + 1));
  out.templateLinked = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_PolicyDefinitionTemplateLinked(ctx, depth + 1));
  return out;
}

// aws:verifiedpermissions/PolicyDefinitionStatic:PolicyDefinitionStatic
export function verifiedpermissions_PolicyDefinitionStatic(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.statement = "";
  return out;
}

// aws:verifiedpermissions/PolicyDefinitionTemplateLinked:PolicyDefinitionTemplateLinked
export function verifiedpermissions_PolicyDefinitionTemplateLinked(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policyTemplateId = h.id(ctx, "policyTemplateId");
  out.principal = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal(ctx, depth + 1));
  out.resource = (depth > 4 ? {} : T_verifiedpermissions.verifiedpermissions_PolicyDefinitionTemplateLinkedResource(ctx, depth + 1));
  return out;
}

// aws:verifiedpermissions/PolicyDefinitionTemplateLinkedPrincipal:PolicyDefinitionTemplateLinkedPrincipal
export function verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityId = h.id(ctx, "entityId");
  out.entityType = "";
  return out;
}

// aws:verifiedpermissions/PolicyDefinitionTemplateLinkedResource:PolicyDefinitionTemplateLinkedResource
export function verifiedpermissions_PolicyDefinitionTemplateLinkedResource(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.entityId = h.id(ctx, "entityId");
  out.entityType = "";
  return out;
}

// aws:verifiedpermissions/PolicyStoreValidationSettings:PolicyStoreValidationSettings
export function verifiedpermissions_PolicyStoreValidationSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mode = "";
  return out;
}

// aws:verifiedpermissions/SchemaDefinition:SchemaDefinition
export function verifiedpermissions_SchemaDefinition(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.value = "";
  return out;
}

// aws:verifiedpermissions/getPolicyStoreValidationSetting:getPolicyStoreValidationSetting
export function verifiedpermissions_getPolicyStoreValidationSetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.mode = "";
  return out;
}
