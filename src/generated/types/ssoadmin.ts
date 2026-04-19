// GENERATED FILE — do not edit.
// Service: ssoadmin   (15 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssoadmin from "./ssoadmin.js";

// aws:ssoadmin/ApplicationPortalOptions:ApplicationPortalOptions
export function ssoadmin_ApplicationPortalOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.signInOptions = (depth > 4 ? {} : T_ssoadmin.ssoadmin_ApplicationPortalOptionsSignInOptions(ctx, depth + 1));
  out.visibility = "";
  return out;
}

// aws:ssoadmin/ApplicationPortalOptionsSignInOptions:ApplicationPortalOptionsSignInOptions
export function ssoadmin_ApplicationPortalOptionsSignInOptions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationUrl = h.endpoint(ctx, "applicationUrl");
  out.origin = "";
  return out;
}

// aws:ssoadmin/CustomerManagedPolicyAttachmentCustomerManagedPolicyReference:CustomerManagedPolicyAttachmentCustomerManagedPolicyReference
export function ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:ssoadmin/InstanceAccessControlAttributesAttribute:InstanceAccessControlAttributesAttribute
export function ssoadmin_InstanceAccessControlAttributesAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.key = "";
  out.values = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_InstanceAccessControlAttributesAttributeValue(ctx, depth + 1))]);
  return out;
}

// aws:ssoadmin/InstanceAccessControlAttributesAttributeValue:InstanceAccessControlAttributesAttributeValue
export function ssoadmin_InstanceAccessControlAttributesAttributeValue(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.sources = (depth > 4 ? [] : [""]);
  return out;
}

// aws:ssoadmin/PermissionsBoundaryAttachmentPermissionsBoundary:PermissionsBoundaryAttachmentPermissionsBoundary
export function ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerManagedPolicyReference = (depth > 4 ? {} : T_ssoadmin.ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference(ctx, depth + 1));
  out.managedPolicyArn = h.arn(ctx);
  return out;
}

// aws:ssoadmin/PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference:PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference
export function ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.path = "";
  return out;
}

// aws:ssoadmin/TrustedTokenIssuerTrustedTokenIssuerConfiguration:TrustedTokenIssuerTrustedTokenIssuerConfiguration
export function ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.oidcJwtConfiguration = (depth > 4 ? {} : T_ssoadmin.ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration(ctx, depth + 1));
  return out;
}

// aws:ssoadmin/TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration:TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration
export function ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.claimAttributePath = "";
  out.identityStoreAttributePath = "";
  out.issuerUrl = h.endpoint(ctx, "issuerUrl");
  out.jwksRetrievalOption = "";
  return out;
}

// aws:ssoadmin/getApplicationAssignmentsApplicationAssignment:getApplicationAssignmentsApplicationAssignment
export function ssoadmin_getApplicationAssignmentsApplicationAssignment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = h.arn(ctx);
  out.principalId = h.id(ctx, "principalId");
  out.principalType = "";
  return out;
}

// aws:ssoadmin/getApplicationPortalOption:getApplicationPortalOption
export function ssoadmin_getApplicationPortalOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.signInOptions = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_getApplicationPortalOptionSignInOption(ctx, depth + 1))]);
  out.visibility = "";
  return out;
}

// aws:ssoadmin/getApplicationPortalOptionSignInOption:getApplicationPortalOptionSignInOption
export function ssoadmin_getApplicationPortalOptionSignInOption(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationUrl = h.endpoint(ctx, "applicationUrl");
  out.origin = "";
  return out;
}

// aws:ssoadmin/getApplicationProvidersApplicationProvider:getApplicationProvidersApplicationProvider
export function ssoadmin_getApplicationProvidersApplicationProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationProviderArn = h.arn(ctx);
  out.displayDatas = (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_getApplicationProvidersApplicationProviderDisplayData(ctx, depth + 1))]);
  out.federationProtocol = "";
  return out;
}

// aws:ssoadmin/getApplicationProvidersApplicationProviderDisplayData:getApplicationProvidersApplicationProviderDisplayData
export function ssoadmin_getApplicationProvidersApplicationProviderDisplayData(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.displayName = "";
  out.iconUrl = h.endpoint(ctx, "iconUrl");
  return out;
}

// aws:ssoadmin/getPrincipalApplicationAssignmentsApplicationAssignment:getPrincipalApplicationAssignmentsApplicationAssignment
export function ssoadmin_getPrincipalApplicationAssignmentsApplicationAssignment(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = h.arn(ctx);
  out.principalId = h.id(ctx, "principalId");
  out.principalType = "";
  return out;
}
