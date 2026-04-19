// GENERATED FILE — do not edit.
// Service: ssoadmin   (12 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_ssoadmin from "../types/ssoadmin.js";

// aws:ssoadmin/accountAssignment:AccountAssignment
export function AccountAssignment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.permissionSetArn = (i.permissionSetArn !== undefined ? i.permissionSetArn : h.arn(ctx));
  out.principalId = (i.principalId !== undefined ? i.principalId : h.id(ctx, "principalId"));
  out.principalType = (i.principalType !== undefined ? i.principalType : "");
  out.targetId = (i.targetId !== undefined ? i.targetId : h.id(ctx, "targetId"));
  out.targetType = (i.targetType !== undefined ? i.targetType : "");
  return out;
}

// aws:ssoadmin/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationAccount = "";
  out.applicationArn = h.arn(ctx);
  out.applicationProviderArn = (i.applicationProviderArn !== undefined ? i.applicationProviderArn : h.arn(ctx));
  out.clientToken = (i.clientToken !== undefined ? i.clientToken : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.portalOptions = (i.portalOptions !== undefined ? i.portalOptions : (depth > 4 ? {} : T_ssoadmin.ssoadmin_ApplicationPortalOptions(ctx, depth + 1)));
  out.status = (i.status !== undefined ? i.status : "active");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ssoadmin/applicationAccessScope:ApplicationAccessScope
export function ApplicationAccessScope(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = (i.applicationArn !== undefined ? i.applicationArn : h.arn(ctx));
  out.authorizedTargets = (i.authorizedTargets !== undefined ? i.authorizedTargets : (depth > 4 ? [] : [""]));
  out.scope = (i.scope !== undefined ? i.scope : "");
  return out;
}

// aws:ssoadmin/applicationAssignment:ApplicationAssignment
export function ApplicationAssignment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = (i.applicationArn !== undefined ? i.applicationArn : h.arn(ctx));
  out.principalId = (i.principalId !== undefined ? i.principalId : h.id(ctx, "principalId"));
  out.principalType = (i.principalType !== undefined ? i.principalType : "");
  return out;
}

// aws:ssoadmin/applicationAssignmentConfiguration:ApplicationAssignmentConfiguration
export function ApplicationAssignmentConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = (i.applicationArn !== undefined ? i.applicationArn : h.arn(ctx));
  out.assignmentRequired = (i.assignmentRequired !== undefined ? i.assignmentRequired : false);
  return out;
}

// aws:ssoadmin/customerManagedPolicyAttachment:CustomerManagedPolicyAttachment
export function CustomerManagedPolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customerManagedPolicyReference = (i.customerManagedPolicyReference !== undefined ? i.customerManagedPolicyReference : (depth > 4 ? {} : T_ssoadmin.ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference(ctx, depth + 1)));
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.permissionSetArn = (i.permissionSetArn !== undefined ? i.permissionSetArn : h.arn(ctx));
  return out;
}

// aws:ssoadmin/instanceAccessControlAttributes:InstanceAccessControlAttributes
export function InstanceAccessControlAttributes(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (i.attributes !== undefined ? i.attributes : (depth > 4 ? [] : [(depth > 4 ? {} : T_ssoadmin.ssoadmin_InstanceAccessControlAttributesAttribute(ctx, depth + 1))]));
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.status = "active";
  out.statusReason = "";
  return out;
}

// aws:ssoadmin/managedPolicyAttachment:ManagedPolicyAttachment
export function ManagedPolicyAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.managedPolicyArn = (i.managedPolicyArn !== undefined ? i.managedPolicyArn : h.arn(ctx));
  out.managedPolicyName = "";
  out.permissionSetArn = (i.permissionSetArn !== undefined ? i.permissionSetArn : h.arn(ctx));
  return out;
}

// aws:ssoadmin/permissionSet:PermissionSet
export function PermissionSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.createdDate = "";
  out.description = (i.description !== undefined ? i.description : "");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.relayState = (i.relayState !== undefined ? i.relayState : "");
  out.sessionDuration = (i.sessionDuration !== undefined ? i.sessionDuration : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:ssoadmin/permissionSetInlinePolicy:PermissionSetInlinePolicy
export function PermissionSetInlinePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.inlinePolicy = (i.inlinePolicy !== undefined ? i.inlinePolicy : "");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.permissionSetArn = (i.permissionSetArn !== undefined ? i.permissionSetArn : h.arn(ctx));
  return out;
}

// aws:ssoadmin/permissionsBoundaryAttachment:PermissionsBoundaryAttachment
export function PermissionsBoundaryAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.permissionSetArn = (i.permissionSetArn !== undefined ? i.permissionSetArn : h.arn(ctx));
  out.permissionsBoundary = (i.permissionsBoundary !== undefined ? i.permissionsBoundary : (depth > 4 ? {} : T_ssoadmin.ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary(ctx, depth + 1)));
  return out;
}

// aws:ssoadmin/trustedTokenIssuer:TrustedTokenIssuer
export function TrustedTokenIssuer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.clientToken = (i.clientToken !== undefined ? i.clientToken : "");
  out.instanceArn = (i.instanceArn !== undefined ? i.instanceArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trustedTokenIssuerConfiguration = (i.trustedTokenIssuerConfiguration !== undefined ? i.trustedTokenIssuerConfiguration : (depth > 4 ? {} : T_ssoadmin.ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration(ctx, depth + 1)));
  out.trustedTokenIssuerType = (i.trustedTokenIssuerType !== undefined ? i.trustedTokenIssuerType : "");
  return out;
}
