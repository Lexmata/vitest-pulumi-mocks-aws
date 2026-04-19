// GENERATED FILE — do not edit.
// Service: cognito   (8 functions)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cognito from "../types/cognito.js";

// aws:cognito/getIdentityPool:getIdentityPool
export function getIdentityPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowClassicFlow = true;
  out.allowUnauthenticatedIdentities = true;
  out.arn = h.arn(ctx);
  out.cognitoIdentityProviders = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getIdentityPoolCognitoIdentityProvider(ctx, depth + 1))]);
  out.developerProviderName = "";
  out.id = h.id(ctx, "id");
  out.identityPoolName = (i.identityPoolName !== undefined ? i.identityPoolName : "");
  out.openidConnectProviderArns = (depth > 4 ? [] : [""]);
  out.samlProviderArns = (depth > 4 ? [] : [""]);
  out.supportedLoginProviders = {};
  out.tags = (i.tags !== undefined ? i.tags : {});
  return out;
}

// aws:cognito/getUserGroup:getUserGroup
export function getUserGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.id = h.id(ctx, "id");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.precedence = 0;
  out.roleArn = h.arn(ctx);
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/getUserGroups:getUserGroups
export function getUserGroups(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groups = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserGroupsGroup(ctx, depth + 1))]);
  out.id = h.id(ctx, "id");
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/getUserPool:getUserPool
export function getUserPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountRecoverySettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolAccountRecoverySetting(ctx, depth + 1))]);
  out.adminCreateUserConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolAdminCreateUserConfig(ctx, depth + 1))]);
  out.arn = h.arn(ctx);
  out.autoVerifiedAttributes = (depth > 4 ? [] : [""]);
  out.creationDate = h.timestamp();
  out.customDomain = h.endpoint(ctx, "customDomain");
  out.deletionProtection = "";
  out.deviceConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolDeviceConfiguration(ctx, depth + 1))]);
  out.domain = h.endpoint(ctx, "domain");
  out.emailConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolEmailConfiguration(ctx, depth + 1))]);
  out.estimatedNumberOfUsers = 0;
  out.id = h.id(ctx, "id");
  out.lambdaConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolLambdaConfig(ctx, depth + 1))]);
  out.lastModifiedDate = "";
  out.mfaConfiguration = "";
  out.name = ctx.name;
  out.schemaAttributes = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolSchemaAttribute(ctx, depth + 1))]);
  out.smsAuthenticationMessage = "";
  out.smsConfigurationFailure = "";
  out.smsVerificationMessage = "";
  out.tags = {};
  out.userPoolAddOns = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolUserPoolAddOn(ctx, depth + 1))]);
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.userPoolTags = {};
  out.usernameAttributes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cognito/getUserPoolClient:getUserPoolClient
export function getUserPoolClient(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessTokenValidity = 0;
  out.allowedOauthFlows = (depth > 4 ? [] : [""]);
  out.allowedOauthFlowsUserPoolClient = true;
  out.allowedOauthScopes = (depth > 4 ? [] : [""]);
  out.analyticsConfigurations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolClientAnalyticsConfiguration(ctx, depth + 1))]);
  out.callbackUrls = (depth > 4 ? [] : [""]);
  out.clientId = (i.clientId !== undefined ? i.clientId : h.id(ctx, "clientId"));
  out.clientSecret = "";
  out.defaultRedirectUri = h.endpoint(ctx, "defaultRedirectUri");
  out.enablePropagateAdditionalUserContextData = true;
  out.enableTokenRevocation = true;
  out.explicitAuthFlows = (depth > 4 ? [] : [""]);
  out.generateSecret = false;
  out.id = h.id(ctx, "id");
  out.idTokenValidity = 0;
  out.logoutUrls = (depth > 4 ? [] : [""]);
  out.name = ctx.name;
  out.preventUserExistenceErrors = "";
  out.readAttributes = (depth > 4 ? [] : [""]);
  out.refreshTokenRotations = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolClientRefreshTokenRotation(ctx, depth + 1))]);
  out.refreshTokenValidity = 0;
  out.supportedIdentityProviders = (depth > 4 ? [] : [""]);
  out.tokenValidityUnits = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolClientTokenValidityUnit(ctx, depth + 1))]);
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.writeAttributes = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cognito/getUserPoolClients:getUserPoolClients
export function getUserPoolClients(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientIds = (depth > 4 ? [] : [""]);
  out.clientNames = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/getUserPoolSigningCertificate:getUserPoolSigningCertificate
export function getUserPoolSigningCertificate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = "";
  out.id = h.id(ctx, "id");
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/getUserPools:getUserPools
export function getUserPools(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arns = (depth > 4 ? [] : [""]);
  out.id = h.id(ctx, "id");
  out.ids = (depth > 4 ? [] : [""]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  return out;
}
