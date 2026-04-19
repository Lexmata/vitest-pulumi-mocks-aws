// GENERATED FILE — do not edit.
// Service: s3control   (14 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_s3control from "../types/s3control.js";

// aws:s3control/accessGrant:AccessGrant
export function AccessGrant(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessGrantArn = h.arn(ctx);
  out.accessGrantId = h.id(ctx, "accessGrantId");
  out.accessGrantsLocationConfiguration = (i.accessGrantsLocationConfiguration !== undefined ? i.accessGrantsLocationConfiguration : (depth > 4 ? {} : T_s3control.s3control_AccessGrantAccessGrantsLocationConfiguration(ctx, depth + 1)));
  out.accessGrantsLocationId = (i.accessGrantsLocationId !== undefined ? i.accessGrantsLocationId : h.id(ctx, "accessGrantsLocationId"));
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.grantScope = "";
  out.grantee = (i.grantee !== undefined ? i.grantee : (depth > 4 ? {} : T_s3control.s3control_AccessGrantGrantee(ctx, depth + 1)));
  out.permission = (i.permission !== undefined ? i.permission : "");
  out.s3PrefixType = (i.s3PrefixType !== undefined ? i.s3PrefixType : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:s3control/accessGrantsInstance:AccessGrantsInstance
export function AccessGrantsInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessGrantsInstanceArn = h.arn(ctx);
  out.accessGrantsInstanceId = h.id(ctx, "accessGrantsInstanceId");
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.identityCenterApplicationArn = h.arn(ctx);
  out.identityCenterArn = (i.identityCenterArn !== undefined ? i.identityCenterArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:s3control/accessGrantsInstanceResourcePolicy:AccessGrantsInstanceResourcePolicy
export function AccessGrantsInstanceResourcePolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:s3control/accessGrantsLocation:AccessGrantsLocation
export function AccessGrantsLocation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessGrantsLocationArn = h.arn(ctx);
  out.accessGrantsLocationId = h.id(ctx, "accessGrantsLocationId");
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.locationScope = (i.locationScope !== undefined ? i.locationScope : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:s3control/accessPointPolicy:AccessPointPolicy
export function AccessPointPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessPointArn = (i.accessPointArn !== undefined ? i.accessPointArn : h.arn(ctx));
  out.hasPublicAccessPolicy = false;
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:s3control/bucket:Bucket
export function Bucket(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.creationDate = h.timestamp();
  out.outpostId = (i.outpostId !== undefined ? i.outpostId : h.id(ctx, "outpostId"));
  out.publicAccessBlockEnabled = false;
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:s3control/bucketLifecycleConfiguration:BucketLifecycleConfiguration
export function BucketLifecycleConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.rules = (i.rules !== undefined ? i.rules : (depth > 4 ? [] : [(depth > 4 ? {} : T_s3control.s3control_BucketLifecycleConfigurationRule(ctx, depth + 1))]));
  return out;
}

// aws:s3control/bucketPolicy:BucketPolicy
export function BucketPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:s3control/directoryBucketAccessPointScope:DirectoryBucketAccessPointScope
export function DirectoryBucketAccessPointScope(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scope = (i.scope !== undefined ? i.scope : (depth > 4 ? {} : T_s3control.s3control_DirectoryBucketAccessPointScopeScope(ctx, depth + 1)));
  return out;
}

// aws:s3control/multiRegionAccessPoint:MultiRegionAccessPoint
export function MultiRegionAccessPoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.alias = "";
  out.arn = h.arn(ctx);
  out.details = (i.details !== undefined ? i.details : (depth > 4 ? {} : T_s3control.s3control_MultiRegionAccessPointDetails(ctx, depth + 1)));
  out.domainName = h.endpoint(ctx, "domainName");
  out.status = "active";
  return out;
}

// aws:s3control/multiRegionAccessPointPolicy:MultiRegionAccessPointPolicy
export function MultiRegionAccessPointPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.details = (i.details !== undefined ? i.details : (depth > 4 ? {} : T_s3control.s3control_MultiRegionAccessPointPolicyDetails(ctx, depth + 1)));
  out.established = "";
  out.proposed = "";
  return out;
}

// aws:s3control/objectLambdaAccessPoint:ObjectLambdaAccessPoint
export function ObjectLambdaAccessPoint(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.alias = "";
  out.arn = h.arn(ctx);
  out.configuration = (i.configuration !== undefined ? i.configuration : (depth > 4 ? {} : T_s3control.s3control_ObjectLambdaAccessPointConfiguration(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}

// aws:s3control/objectLambdaAccessPointPolicy:ObjectLambdaAccessPointPolicy
export function ObjectLambdaAccessPointPolicy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.hasPublicAccessPolicy = false;
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.policy = (i.policy !== undefined ? i.policy : "");
  return out;
}

// aws:s3control/storageLensConfiguration:StorageLensConfiguration
export function StorageLensConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.arn = h.arn(ctx);
  out.configId = (i.configId !== undefined ? i.configId : h.id(ctx, "configId"));
  out.storageLensConfiguration = (i.storageLensConfiguration !== undefined ? i.storageLensConfiguration : (depth > 4 ? {} : T_s3control.s3control_StorageLensConfigurationStorageLensConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}
