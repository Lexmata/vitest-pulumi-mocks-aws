// GENERATED FILE — do not edit.
// Service: amplify   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_amplify from "../types/amplify.js";

// aws:amplify/app:App
export function App(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = (i.accessToken !== undefined ? i.accessToken : "");
  out.arn = h.arn(ctx);
  out.autoBranchCreationConfig = (i.autoBranchCreationConfig !== undefined ? i.autoBranchCreationConfig : (depth > 4 ? {} : T_amplify.amplify_AppAutoBranchCreationConfig(ctx, depth + 1)));
  out.autoBranchCreationPatterns = (i.autoBranchCreationPatterns !== undefined ? i.autoBranchCreationPatterns : (depth > 4 ? [] : [""]));
  out.basicAuthCredentials = (i.basicAuthCredentials !== undefined ? i.basicAuthCredentials : "");
  out.buildSpec = (i.buildSpec !== undefined ? i.buildSpec : "");
  out.cacheConfig = (i.cacheConfig !== undefined ? i.cacheConfig : (depth > 4 ? {} : T_amplify.amplify_AppCacheConfig(ctx, depth + 1)));
  out.computeRoleArn = (i.computeRoleArn !== undefined ? i.computeRoleArn : h.arn(ctx));
  out.customHeaders = (i.customHeaders !== undefined ? i.customHeaders : "");
  out.customRules = (i.customRules !== undefined ? i.customRules : (depth > 4 ? [] : [(depth > 4 ? {} : T_amplify.amplify_AppCustomRule(ctx, depth + 1))]));
  out.defaultDomain = h.endpoint(ctx, "defaultDomain");
  out.description = (i.description !== undefined ? i.description : "");
  out.enableAutoBranchCreation = (i.enableAutoBranchCreation !== undefined ? i.enableAutoBranchCreation : true);
  out.enableBasicAuth = (i.enableBasicAuth !== undefined ? i.enableBasicAuth : true);
  out.enableBranchAutoBuild = (i.enableBranchAutoBuild !== undefined ? i.enableBranchAutoBuild : true);
  out.enableBranchAutoDeletion = (i.enableBranchAutoDeletion !== undefined ? i.enableBranchAutoDeletion : true);
  out.environmentVariables = (i.environmentVariables !== undefined ? i.environmentVariables : {});
  out.iamServiceRoleArn = (i.iamServiceRoleArn !== undefined ? i.iamServiceRoleArn : h.arn(ctx));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.oauthToken = (i.oauthToken !== undefined ? i.oauthToken : "");
  out.platform = (i.platform !== undefined ? i.platform : "");
  out.productionBranches = (depth > 4 ? [] : [(depth > 4 ? {} : T_amplify.amplify_AppProductionBranch(ctx, depth + 1))]);
  out.repository = (i.repository !== undefined ? i.repository : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:amplify/backendEnvironment:BackendEnvironment
export function BackendEnvironment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appId = (i.appId !== undefined ? i.appId : h.id(ctx, "appId"));
  out.arn = h.arn(ctx);
  out.deploymentArtifacts = (i.deploymentArtifacts !== undefined ? i.deploymentArtifacts : "");
  out.environmentName = (i.environmentName !== undefined ? i.environmentName : "");
  out.stackName = (i.stackName !== undefined ? i.stackName : "");
  return out;
}

// aws:amplify/branch:Branch
export function Branch(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appId = (i.appId !== undefined ? i.appId : h.id(ctx, "appId"));
  out.arn = h.arn(ctx);
  out.associatedResources = (depth > 4 ? [] : [""]);
  out.backendEnvironmentArn = (i.backendEnvironmentArn !== undefined ? i.backendEnvironmentArn : h.arn(ctx));
  out.basicAuthCredentials = (i.basicAuthCredentials !== undefined ? i.basicAuthCredentials : "");
  out.branchName = (i.branchName !== undefined ? i.branchName : "");
  out.customDomains = (depth > 4 ? [] : [""]);
  out.description = (i.description !== undefined ? i.description : "");
  out.destinationBranch = "";
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.enableAutoBuild = (i.enableAutoBuild !== undefined ? i.enableAutoBuild : true);
  out.enableBasicAuth = (i.enableBasicAuth !== undefined ? i.enableBasicAuth : true);
  out.enableNotification = (i.enableNotification !== undefined ? i.enableNotification : true);
  out.enablePerformanceMode = (i.enablePerformanceMode !== undefined ? i.enablePerformanceMode : true);
  out.enablePullRequestPreview = (i.enablePullRequestPreview !== undefined ? i.enablePullRequestPreview : true);
  out.environmentVariables = (i.environmentVariables !== undefined ? i.environmentVariables : {});
  out.framework = (i.framework !== undefined ? i.framework : "");
  out.pullRequestEnvironmentName = (i.pullRequestEnvironmentName !== undefined ? i.pullRequestEnvironmentName : "");
  out.sourceBranch = "";
  out.stage = (i.stage !== undefined ? i.stage : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.ttl = (i.ttl !== undefined ? i.ttl : "");
  return out;
}

// aws:amplify/domainAssociation:DomainAssociation
export function DomainAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appId = (i.appId !== undefined ? i.appId : h.id(ctx, "appId"));
  out.arn = h.arn(ctx);
  out.certificateSettings = (i.certificateSettings !== undefined ? i.certificateSettings : (depth > 4 ? {} : T_amplify.amplify_DomainAssociationCertificateSettings(ctx, depth + 1)));
  out.certificateVerificationDnsRecord = "";
  out.domainName = (i.domainName !== undefined ? i.domainName : h.endpoint(ctx, "domainName"));
  out.enableAutoSubDomain = (i.enableAutoSubDomain !== undefined ? i.enableAutoSubDomain : true);
  out.subDomains = (i.subDomains !== undefined ? i.subDomains : (depth > 4 ? [] : [(depth > 4 ? {} : T_amplify.amplify_DomainAssociationSubDomain(ctx, depth + 1))]));
  out.waitForVerification = (i.waitForVerification !== undefined ? i.waitForVerification : false);
  return out;
}

// aws:amplify/webhook:Webhook
export function Webhook(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appId = (i.appId !== undefined ? i.appId : h.id(ctx, "appId"));
  out.arn = h.arn(ctx);
  out.branchName = (i.branchName !== undefined ? i.branchName : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.url = h.endpoint(ctx, "url");
  return out;
}
