// GENERATED FILE — do not edit.
// Service: redshiftserverless   (7 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_redshiftserverless from "../types/redshiftserverless.js";

// aws:redshiftserverless/customDomainAssociation:CustomDomainAssociation
export function CustomDomainAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customDomainCertificateArn = (i.customDomainCertificateArn !== undefined ? i.customDomainCertificateArn : h.arn(ctx));
  out.customDomainCertificateExpiryTime = "";
  out.customDomainName = (i.customDomainName !== undefined ? i.customDomainName : h.endpoint(ctx, "customDomainName"));
  out.workgroupName = (i.workgroupName !== undefined ? i.workgroupName : "");
  return out;
}

// aws:redshiftserverless/endpointAccess:EndpointAccess
export function EndpointAccess(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.address = "";
  out.arn = h.arn(ctx);
  out.endpointName = (i.endpointName !== undefined ? i.endpointName : "");
  out.ownerAccount = (i.ownerAccount !== undefined ? i.ownerAccount : "");
  out.port = 443;
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.vpcEndpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_EndpointAccessVpcEndpoint(ctx, depth + 1))]);
  out.vpcSecurityGroupIds = (i.vpcSecurityGroupIds !== undefined ? i.vpcSecurityGroupIds : (depth > 4 ? [] : [""]));
  out.workgroupName = (i.workgroupName !== undefined ? i.workgroupName : "");
  return out;
}

// aws:redshiftserverless/namespace:Namespace
export function Namespace(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.adminPasswordSecretArn = h.arn(ctx);
  out.adminPasswordSecretKmsKeyId = (i.adminPasswordSecretKmsKeyId !== undefined ? i.adminPasswordSecretKmsKeyId : h.id(ctx, "adminPasswordSecretKmsKeyId"));
  out.adminUserPassword = (i.adminUserPassword !== undefined ? i.adminUserPassword : "");
  out.adminUsername = (i.adminUsername !== undefined ? i.adminUsername : "");
  out.arn = h.arn(ctx);
  out.dbName = (i.dbName !== undefined ? i.dbName : "");
  out.defaultIamRoleArn = (i.defaultIamRoleArn !== undefined ? i.defaultIamRoleArn : h.arn(ctx));
  out.iamRoles = (i.iamRoles !== undefined ? i.iamRoles : (depth > 4 ? [] : [""]));
  out.kmsKeyId = (i.kmsKeyId !== undefined ? i.kmsKeyId : h.id(ctx, "kmsKeyId"));
  out.logExports = (i.logExports !== undefined ? i.logExports : (depth > 4 ? [] : [""]));
  out.manageAdminPassword = (i.manageAdminPassword !== undefined ? i.manageAdminPassword : false);
  out.namespaceId = h.id(ctx, "namespaceId");
  out.namespaceName = (i.namespaceName !== undefined ? i.namespaceName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:redshiftserverless/resourcePolicy:ResourcePolicy
export function ResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.policy = (i.policy !== undefined ? i.policy : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:redshiftserverless/snapshot:Snapshot
export function Snapshot(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountsWithProvisionedRestoreAccesses = (depth > 4 ? [] : [""]);
  out.accountsWithRestoreAccesses = (depth > 4 ? [] : [""]);
  out.adminUsername = "";
  out.arn = h.arn(ctx);
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.namespaceArn = h.arn(ctx);
  out.namespaceName = (i.namespaceName !== undefined ? i.namespaceName : "");
  out.ownerAccount = "";
  out.retentionPeriod = (i.retentionPeriod !== undefined ? i.retentionPeriod : 0);
  out.snapshotName = (i.snapshotName !== undefined ? i.snapshotName : "");
  return out;
}

// aws:redshiftserverless/usageLimit:UsageLimit
export function UsageLimit(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.amount = (i.amount !== undefined ? i.amount : 0);
  out.arn = h.arn(ctx);
  out.breachAction = (i.breachAction !== undefined ? i.breachAction : "");
  out.period = (i.period !== undefined ? i.period : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.usageType = (i.usageType !== undefined ? i.usageType : "");
  return out;
}

// aws:redshiftserverless/workgroup:Workgroup
export function Workgroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.baseCapacity = (i.baseCapacity !== undefined ? i.baseCapacity : 0);
  out.configParameters = (i.configParameters !== undefined ? i.configParameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_WorkgroupConfigParameter(ctx, depth + 1))]));
  out.endpoints = (depth > 4 ? [] : [(depth > 4 ? {} : T_redshiftserverless.redshiftserverless_WorkgroupEndpoint(ctx, depth + 1))]);
  out.enhancedVpcRouting = (i.enhancedVpcRouting !== undefined ? i.enhancedVpcRouting : false);
  out.maxCapacity = (i.maxCapacity !== undefined ? i.maxCapacity : 0);
  out.namespaceName = (i.namespaceName !== undefined ? i.namespaceName : "");
  out.port = (i.port !== undefined ? i.port : 443);
  out.pricePerformanceTarget = (i.pricePerformanceTarget !== undefined ? i.pricePerformanceTarget : (depth > 4 ? {} : T_redshiftserverless.redshiftserverless_WorkgroupPricePerformanceTarget(ctx, depth + 1)));
  out.publiclyAccessible = (i.publiclyAccessible !== undefined ? i.publiclyAccessible : false);
  out.securityGroupIds = (i.securityGroupIds !== undefined ? i.securityGroupIds : (depth > 4 ? [] : [""]));
  out.subnetIds = (i.subnetIds !== undefined ? i.subnetIds : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.trackName = (i.trackName !== undefined ? i.trackName : "");
  out.workgroupId = h.id(ctx, "workgroupId");
  out.workgroupName = (i.workgroupName !== undefined ? i.workgroupName : "");
  return out;
}
