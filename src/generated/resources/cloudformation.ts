// GENERATED FILE — do not edit.
// Service: cloudformation   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cloudformation from "../types/cloudformation.js";

// aws:cloudformation/cloudFormationType:CloudFormationType
export function CloudFormationType(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultVersionId = h.id(ctx, "defaultVersionId");
  out.deprecatedStatus = "";
  out.description = "";
  out.documentationUrl = h.endpoint(ctx, "documentationUrl");
  out.executionRoleArn = (i.executionRoleArn !== undefined ? i.executionRoleArn : h.arn(ctx));
  out.isDefaultVersion = true;
  out.loggingConfig = (i.loggingConfig !== undefined ? i.loggingConfig : (depth > 4 ? {} : T_cloudformation.cloudformation_CloudFormationTypeLoggingConfig(ctx, depth + 1)));
  out.provisioningType = "";
  out.schema = "";
  out.schemaHandlerPackage = (i.schemaHandlerPackage !== undefined ? i.schemaHandlerPackage : "");
  out.sourceUrl = h.endpoint(ctx, "sourceUrl");
  out.type = (i.type !== undefined ? i.type : "");
  out.typeArn = h.arn(ctx);
  out.typeName = (i.typeName !== undefined ? i.typeName : "");
  out.versionId = h.id(ctx, "versionId");
  out.visibility = "";
  return out;
}

// aws:cloudformation/stack:Stack
export function Stack(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.capabilities = (i.capabilities !== undefined ? i.capabilities : (depth > 4 ? [] : [""]));
  out.disableRollback = (i.disableRollback !== undefined ? i.disableRollback : false);
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.notificationArns = (i.notificationArns !== undefined ? i.notificationArns : (depth > 4 ? [] : [""]));
  out.onFailure = (i.onFailure !== undefined ? i.onFailure : "");
  out.outputs = {};
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.policyBody = (i.policyBody !== undefined ? i.policyBody : "");
  out.policyUrl = (i.policyUrl !== undefined ? i.policyUrl : h.endpoint(ctx, "policyUrl"));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateBody = (i.templateBody !== undefined ? i.templateBody : "");
  out.templateUrl = (i.templateUrl !== undefined ? i.templateUrl : h.endpoint(ctx, "templateUrl"));
  out.timeoutInMinutes = (i.timeoutInMinutes !== undefined ? i.timeoutInMinutes : 30);
  return out;
}

// aws:cloudformation/stackInstances:StackInstances
export function StackInstances(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accounts = (i.accounts !== undefined ? i.accounts : (depth > 4 ? [] : [""]));
  out.callAs = (i.callAs !== undefined ? i.callAs : "");
  out.deploymentTargets = (i.deploymentTargets !== undefined ? i.deploymentTargets : (depth > 4 ? {} : T_cloudformation.cloudformation_StackInstancesDeploymentTargets(ctx, depth + 1)));
  out.operationPreferences = (i.operationPreferences !== undefined ? i.operationPreferences : (depth > 4 ? {} : T_cloudformation.cloudformation_StackInstancesOperationPreferences(ctx, depth + 1)));
  out.parameterOverrides = (i.parameterOverrides !== undefined ? i.parameterOverrides : {});
  out.regions = (i.regions !== undefined ? i.regions : (depth > 4 ? [] : [""]));
  out.retainStacks = (i.retainStacks !== undefined ? i.retainStacks : false);
  out.stackInstanceSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudformation.cloudformation_StackInstancesStackInstanceSummary(ctx, depth + 1))]);
  out.stackSetId = h.id(ctx, "stackSetId");
  out.stackSetName = (i.stackSetName !== undefined ? i.stackSetName : "");
  return out;
}

// aws:cloudformation/stackSet:StackSet
export function StackSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.administrationRoleArn = (i.administrationRoleArn !== undefined ? i.administrationRoleArn : h.arn(ctx));
  out.arn = h.arn(ctx);
  out.autoDeployment = (i.autoDeployment !== undefined ? i.autoDeployment : (depth > 4 ? {} : T_cloudformation.cloudformation_StackSetAutoDeployment(ctx, depth + 1)));
  out.callAs = (i.callAs !== undefined ? i.callAs : "");
  out.capabilities = (i.capabilities !== undefined ? i.capabilities : (depth > 4 ? [] : [""]));
  out.description = (i.description !== undefined ? i.description : "");
  out.executionRoleName = (i.executionRoleName !== undefined ? i.executionRoleName : "");
  out.managedExecution = (i.managedExecution !== undefined ? i.managedExecution : (depth > 4 ? {} : T_cloudformation.cloudformation_StackSetManagedExecution(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.operationPreferences = (i.operationPreferences !== undefined ? i.operationPreferences : (depth > 4 ? {} : T_cloudformation.cloudformation_StackSetOperationPreferences(ctx, depth + 1)));
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.permissionModel = (i.permissionModel !== undefined ? i.permissionModel : "");
  out.stackSetId = h.id(ctx, "stackSetId");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateBody = (i.templateBody !== undefined ? i.templateBody : "");
  out.templateUrl = (i.templateUrl !== undefined ? i.templateUrl : h.endpoint(ctx, "templateUrl"));
  return out;
}

// aws:cloudformation/stackSetInstance:StackSetInstance
export function StackSetInstance(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountId = (i.accountId !== undefined ? i.accountId : ctx.accountId);
  out.callAs = (i.callAs !== undefined ? i.callAs : "");
  out.deploymentTargets = (i.deploymentTargets !== undefined ? i.deploymentTargets : (depth > 4 ? {} : T_cloudformation.cloudformation_StackSetInstanceDeploymentTargets(ctx, depth + 1)));
  out.operationPreferences = (i.operationPreferences !== undefined ? i.operationPreferences : (depth > 4 ? {} : T_cloudformation.cloudformation_StackSetInstanceOperationPreferences(ctx, depth + 1)));
  out.organizationalUnitId = h.id(ctx, "organizationalUnitId");
  out.parameterOverrides = (i.parameterOverrides !== undefined ? i.parameterOverrides : {});
  out.region = (i.region !== undefined ? i.region : ctx.region);
  out.retainStack = (i.retainStack !== undefined ? i.retainStack : false);
  out.stackId = h.id(ctx, "stackId");
  out.stackInstanceSummaries = (depth > 4 ? [] : [(depth > 4 ? {} : T_cloudformation.cloudformation_StackSetInstanceStackInstanceSummary(ctx, depth + 1))]);
  out.stackSetName = (i.stackSetName !== undefined ? i.stackSetName : "");
  return out;
}
