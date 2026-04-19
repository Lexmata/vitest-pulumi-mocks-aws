// GENERATED FILE — do not edit.
// Service: shield   (8 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_shield from "../types/shield.js";

// aws:shield/applicationLayerAutomaticResponse:ApplicationLayerAutomaticResponse
export function ApplicationLayerAutomaticResponse(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.action = (i.action !== undefined ? i.action : "");
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_shield.shield_ApplicationLayerAutomaticResponseTimeouts(ctx, depth + 1)));
  return out;
}

// aws:shield/drtAccessLogBucketAssociation:DrtAccessLogBucketAssociation
export function DrtAccessLogBucketAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.logBucket = (i.logBucket !== undefined ? i.logBucket : "");
  out.roleArnAssociationId = (i.roleArnAssociationId !== undefined ? i.roleArnAssociationId : h.id(ctx, "roleArnAssociationId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_shield.shield_DrtAccessLogBucketAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:shield/drtAccessRoleArnAssociation:DrtAccessRoleArnAssociation
export function DrtAccessRoleArnAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_shield.shield_DrtAccessRoleArnAssociationTimeouts(ctx, depth + 1)));
  return out;
}

// aws:shield/proactiveEngagement:ProactiveEngagement
export function ProactiveEngagement(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emergencyContacts = (i.emergencyContacts !== undefined ? i.emergencyContacts : (depth > 4 ? [] : [(depth > 4 ? {} : T_shield.shield_ProactiveEngagementEmergencyContact(ctx, depth + 1))]));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  return out;
}

// aws:shield/protection:Protection
export function Protection(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:shield/protectionGroup:ProtectionGroup
export function ProtectionGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregation = (i.aggregation !== undefined ? i.aggregation : "");
  out.members = (i.members !== undefined ? i.members : (depth > 4 ? [] : [""]));
  out.pattern = (i.pattern !== undefined ? i.pattern : "");
  out.protectionGroupArn = h.arn(ctx);
  out.protectionGroupId = (i.protectionGroupId !== undefined ? i.protectionGroupId : h.id(ctx, "protectionGroupId"));
  out.resourceType = (i.resourceType !== undefined ? i.resourceType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:shield/protectionHealthCheckAssociation:ProtectionHealthCheckAssociation
export function ProtectionHealthCheckAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.healthCheckArn = (i.healthCheckArn !== undefined ? i.healthCheckArn : h.arn(ctx));
  out.shieldProtectionId = (i.shieldProtectionId !== undefined ? i.shieldProtectionId : h.id(ctx, "shieldProtectionId"));
  return out;
}

// aws:shield/subscription:Subscription
export function Subscription(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.autoRenew = (i.autoRenew !== undefined ? i.autoRenew : "");
  out.skipDestroy = (i.skipDestroy !== undefined ? i.skipDestroy : false);
  return out;
}
