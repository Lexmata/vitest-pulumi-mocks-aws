// GENERATED FILE — do not edit.
// Service: cognito   (14 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cognito from "../types/cognito.js";

// aws:cognito/identityPool:IdentityPool
export function IdentityPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowClassicFlow = (i.allowClassicFlow !== undefined ? i.allowClassicFlow : true);
  out.allowUnauthenticatedIdentities = (i.allowUnauthenticatedIdentities !== undefined ? i.allowUnauthenticatedIdentities : true);
  out.arn = h.arn(ctx);
  out.cognitoIdentityProviders = (i.cognitoIdentityProviders !== undefined ? i.cognitoIdentityProviders : (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_IdentityPoolCognitoIdentityProvider(ctx, depth + 1))]));
  out.developerProviderName = (i.developerProviderName !== undefined ? i.developerProviderName : "");
  out.identityPoolName = (i.identityPoolName !== undefined ? i.identityPoolName : "");
  out.openidConnectProviderArns = (i.openidConnectProviderArns !== undefined ? i.openidConnectProviderArns : (depth > 4 ? [] : [""]));
  out.samlProviderArns = (i.samlProviderArns !== undefined ? i.samlProviderArns : (depth > 4 ? [] : [""]));
  out.supportedLoginProviders = (i.supportedLoginProviders !== undefined ? i.supportedLoginProviders : {});
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:cognito/identityPoolProviderPrincipalTag:IdentityPoolProviderPrincipalTag
export function IdentityPoolProviderPrincipalTag(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identityPoolId = (i.identityPoolId !== undefined ? i.identityPoolId : h.id(ctx, "identityPoolId"));
  out.identityProviderName = (i.identityProviderName !== undefined ? i.identityProviderName : "");
  out.principalTags = (i.principalTags !== undefined ? i.principalTags : {});
  out.useDefaults = (i.useDefaults !== undefined ? i.useDefaults : false);
  return out;
}

// aws:cognito/identityPoolRoleAttachment:IdentityPoolRoleAttachment
export function IdentityPoolRoleAttachment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identityPoolId = (i.identityPoolId !== undefined ? i.identityPoolId : h.id(ctx, "identityPoolId"));
  out.roleMappings = (i.roleMappings !== undefined ? i.roleMappings : (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_IdentityPoolRoleAttachmentRoleMapping(ctx, depth + 1))]));
  out.roles = (i.roles !== undefined ? i.roles : {});
  return out;
}

// aws:cognito/identityProvider:IdentityProvider
export function IdentityProvider(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeMapping = (i.attributeMapping !== undefined ? i.attributeMapping : {});
  out.idpIdentifiers = (i.idpIdentifiers !== undefined ? i.idpIdentifiers : (depth > 4 ? [] : [""]));
  out.providerDetails = (i.providerDetails !== undefined ? i.providerDetails : {});
  out.providerName = (i.providerName !== undefined ? i.providerName : "");
  out.providerType = (i.providerType !== undefined ? i.providerType : "");
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/managedUserPoolClient:ManagedUserPoolClient
export function ManagedUserPoolClient(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessTokenValidity = (i.accessTokenValidity !== undefined ? i.accessTokenValidity : 0);
  out.allowedOauthFlows = (i.allowedOauthFlows !== undefined ? i.allowedOauthFlows : (depth > 4 ? [] : [""]));
  out.allowedOauthFlowsUserPoolClient = (i.allowedOauthFlowsUserPoolClient !== undefined ? i.allowedOauthFlowsUserPoolClient : true);
  out.allowedOauthScopes = (i.allowedOauthScopes !== undefined ? i.allowedOauthScopes : (depth > 4 ? [] : [""]));
  out.analyticsConfiguration = (i.analyticsConfiguration !== undefined ? i.analyticsConfiguration : (depth > 4 ? {} : T_cognito.cognito_ManagedUserPoolClientAnalyticsConfiguration(ctx, depth + 1)));
  out.authSessionValidity = (i.authSessionValidity !== undefined ? i.authSessionValidity : 0);
  out.callbackUrls = (i.callbackUrls !== undefined ? i.callbackUrls : (depth > 4 ? [] : [""]));
  out.clientSecret = "";
  out.defaultRedirectUri = (i.defaultRedirectUri !== undefined ? i.defaultRedirectUri : h.endpoint(ctx, "defaultRedirectUri"));
  out.enablePropagateAdditionalUserContextData = (i.enablePropagateAdditionalUserContextData !== undefined ? i.enablePropagateAdditionalUserContextData : true);
  out.enableTokenRevocation = (i.enableTokenRevocation !== undefined ? i.enableTokenRevocation : true);
  out.explicitAuthFlows = (i.explicitAuthFlows !== undefined ? i.explicitAuthFlows : (depth > 4 ? [] : [""]));
  out.idTokenValidity = (i.idTokenValidity !== undefined ? i.idTokenValidity : 0);
  out.logoutUrls = (i.logoutUrls !== undefined ? i.logoutUrls : (depth > 4 ? [] : [""]));
  out.name = ctx.name;
  out.namePattern = (i.namePattern !== undefined ? i.namePattern : "");
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.preventUserExistenceErrors = (i.preventUserExistenceErrors !== undefined ? i.preventUserExistenceErrors : "");
  out.readAttributes = (i.readAttributes !== undefined ? i.readAttributes : (depth > 4 ? [] : [""]));
  out.refreshTokenRotation = (i.refreshTokenRotation !== undefined ? i.refreshTokenRotation : (depth > 4 ? {} : T_cognito.cognito_ManagedUserPoolClientRefreshTokenRotation(ctx, depth + 1)));
  out.refreshTokenValidity = (i.refreshTokenValidity !== undefined ? i.refreshTokenValidity : 0);
  out.supportedIdentityProviders = (i.supportedIdentityProviders !== undefined ? i.supportedIdentityProviders : (depth > 4 ? [] : [""]));
  out.tokenValidityUnits = (i.tokenValidityUnits !== undefined ? i.tokenValidityUnits : (depth > 4 ? {} : T_cognito.cognito_ManagedUserPoolClientTokenValidityUnits(ctx, depth + 1)));
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.writeAttributes = (i.writeAttributes !== undefined ? i.writeAttributes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:cognito/resourceServer:ResourceServer
export function ResourceServer(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.identifier = (i.identifier !== undefined ? i.identifier : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.scopeIdentifiers = (depth > 4 ? [] : [""]);
  out.scopes = (i.scopes !== undefined ? i.scopes : (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_ResourceServerScope(ctx, depth + 1))]));
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/riskConfiguration:RiskConfiguration
export function RiskConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountTakeoverRiskConfiguration = (i.accountTakeoverRiskConfiguration !== undefined ? i.accountTakeoverRiskConfiguration : (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfiguration(ctx, depth + 1)));
  out.clientId = (i.clientId !== undefined ? i.clientId : h.id(ctx, "clientId"));
  out.compromisedCredentialsRiskConfiguration = (i.compromisedCredentialsRiskConfiguration !== undefined ? i.compromisedCredentialsRiskConfiguration : (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration(ctx, depth + 1)));
  out.riskExceptionConfiguration = (i.riskExceptionConfiguration !== undefined ? i.riskExceptionConfiguration : (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationRiskExceptionConfiguration(ctx, depth + 1)));
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/user:User
export function User(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributes = (i.attributes !== undefined ? i.attributes : {});
  out.clientMetadata = (i.clientMetadata !== undefined ? i.clientMetadata : {});
  out.creationDate = h.timestamp();
  out.desiredDeliveryMediums = (i.desiredDeliveryMediums !== undefined ? i.desiredDeliveryMediums : (depth > 4 ? [] : [""]));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.forceAliasCreation = (i.forceAliasCreation !== undefined ? i.forceAliasCreation : false);
  out.lastModifiedDate = "";
  out.messageAction = (i.messageAction !== undefined ? i.messageAction : "");
  out.mfaSettingLists = (depth > 4 ? [] : [""]);
  out.password = (i.password !== undefined ? i.password : "");
  out.preferredMfaSetting = "";
  out.status = "active";
  out.sub = "";
  out.temporaryPassword = (i.temporaryPassword !== undefined ? i.temporaryPassword : "");
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.username = (i.username !== undefined ? i.username : "");
  out.validationData = (i.validationData !== undefined ? i.validationData : {});
  return out;
}

// aws:cognito/userGroup:UserGroup
export function UserGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.precedence = (i.precedence !== undefined ? i.precedence : 0);
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}

// aws:cognito/userInGroup:UserInGroup
export function UserInGroup(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.groupName = (i.groupName !== undefined ? i.groupName : "");
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.username = (i.username !== undefined ? i.username : "");
  return out;
}

// aws:cognito/userPool:UserPool
export function UserPool(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accountRecoverySetting = (i.accountRecoverySetting !== undefined ? i.accountRecoverySetting : (depth > 4 ? {} : T_cognito.cognito_UserPoolAccountRecoverySetting(ctx, depth + 1)));
  out.adminCreateUserConfig = (i.adminCreateUserConfig !== undefined ? i.adminCreateUserConfig : (depth > 4 ? {} : T_cognito.cognito_UserPoolAdminCreateUserConfig(ctx, depth + 1)));
  out.aliasAttributes = (i.aliasAttributes !== undefined ? i.aliasAttributes : (depth > 4 ? [] : [""]));
  out.arn = h.arn(ctx);
  out.autoVerifiedAttributes = (i.autoVerifiedAttributes !== undefined ? i.autoVerifiedAttributes : (depth > 4 ? [] : [""]));
  out.creationDate = h.timestamp();
  out.customDomain = h.endpoint(ctx, "customDomain");
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : "");
  out.deviceConfiguration = (i.deviceConfiguration !== undefined ? i.deviceConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolDeviceConfiguration(ctx, depth + 1)));
  out.domain = h.endpoint(ctx, "domain");
  out.emailConfiguration = (i.emailConfiguration !== undefined ? i.emailConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolEmailConfiguration(ctx, depth + 1)));
  out.emailMfaConfiguration = (i.emailMfaConfiguration !== undefined ? i.emailMfaConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolEmailMfaConfiguration(ctx, depth + 1)));
  out.emailVerificationMessage = (i.emailVerificationMessage !== undefined ? i.emailVerificationMessage : "");
  out.emailVerificationSubject = (i.emailVerificationSubject !== undefined ? i.emailVerificationSubject : "");
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.estimatedNumberOfUsers = 0;
  out.lambdaConfig = (i.lambdaConfig !== undefined ? i.lambdaConfig : (depth > 4 ? {} : T_cognito.cognito_UserPoolLambdaConfig(ctx, depth + 1)));
  out.lastModifiedDate = "";
  out.mfaConfiguration = (i.mfaConfiguration !== undefined ? i.mfaConfiguration : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.passwordPolicy = (i.passwordPolicy !== undefined ? i.passwordPolicy : (depth > 4 ? {} : T_cognito.cognito_UserPoolPasswordPolicy(ctx, depth + 1)));
  out.schemas = (i.schemas !== undefined ? i.schemas : (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_UserPoolSchema(ctx, depth + 1))]));
  out.signInPolicy = (i.signInPolicy !== undefined ? i.signInPolicy : (depth > 4 ? {} : T_cognito.cognito_UserPoolSignInPolicy(ctx, depth + 1)));
  out.smsAuthenticationMessage = (i.smsAuthenticationMessage !== undefined ? i.smsAuthenticationMessage : "");
  out.smsConfiguration = (i.smsConfiguration !== undefined ? i.smsConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolSmsConfiguration(ctx, depth + 1)));
  out.smsVerificationMessage = (i.smsVerificationMessage !== undefined ? i.smsVerificationMessage : "");
  out.softwareTokenMfaConfiguration = (i.softwareTokenMfaConfiguration !== undefined ? i.softwareTokenMfaConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolSoftwareTokenMfaConfiguration(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.userAttributeUpdateSettings = (i.userAttributeUpdateSettings !== undefined ? i.userAttributeUpdateSettings : (depth > 4 ? {} : T_cognito.cognito_UserPoolUserAttributeUpdateSettings(ctx, depth + 1)));
  out.userPoolAddOns = (i.userPoolAddOns !== undefined ? i.userPoolAddOns : (depth > 4 ? {} : T_cognito.cognito_UserPoolUserPoolAddOns(ctx, depth + 1)));
  out.userPoolTier = (i.userPoolTier !== undefined ? i.userPoolTier : "");
  out.usernameAttributes = (i.usernameAttributes !== undefined ? i.usernameAttributes : (depth > 4 ? [] : [""]));
  out.usernameConfiguration = (i.usernameConfiguration !== undefined ? i.usernameConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolUsernameConfiguration(ctx, depth + 1)));
  out.verificationMessageTemplate = (i.verificationMessageTemplate !== undefined ? i.verificationMessageTemplate : (depth > 4 ? {} : T_cognito.cognito_UserPoolVerificationMessageTemplate(ctx, depth + 1)));
  out.webAuthnConfiguration = (i.webAuthnConfiguration !== undefined ? i.webAuthnConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolWebAuthnConfiguration(ctx, depth + 1)));
  return out;
}

// aws:cognito/userPoolClient:UserPoolClient
export function UserPoolClient(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessTokenValidity = (i.accessTokenValidity !== undefined ? i.accessTokenValidity : 0);
  out.allowedOauthFlows = (i.allowedOauthFlows !== undefined ? i.allowedOauthFlows : (depth > 4 ? [] : [""]));
  out.allowedOauthFlowsUserPoolClient = (i.allowedOauthFlowsUserPoolClient !== undefined ? i.allowedOauthFlowsUserPoolClient : true);
  out.allowedOauthScopes = (i.allowedOauthScopes !== undefined ? i.allowedOauthScopes : (depth > 4 ? [] : [""]));
  out.analyticsConfiguration = (i.analyticsConfiguration !== undefined ? i.analyticsConfiguration : (depth > 4 ? {} : T_cognito.cognito_UserPoolClientAnalyticsConfiguration(ctx, depth + 1)));
  out.authSessionValidity = (i.authSessionValidity !== undefined ? i.authSessionValidity : 0);
  out.callbackUrls = (i.callbackUrls !== undefined ? i.callbackUrls : (depth > 4 ? [] : [""]));
  out.clientSecret = "";
  out.defaultRedirectUri = (i.defaultRedirectUri !== undefined ? i.defaultRedirectUri : h.endpoint(ctx, "defaultRedirectUri"));
  out.enablePropagateAdditionalUserContextData = (i.enablePropagateAdditionalUserContextData !== undefined ? i.enablePropagateAdditionalUserContextData : true);
  out.enableTokenRevocation = (i.enableTokenRevocation !== undefined ? i.enableTokenRevocation : true);
  out.explicitAuthFlows = (i.explicitAuthFlows !== undefined ? i.explicitAuthFlows : (depth > 4 ? [] : [""]));
  out.generateSecret = (i.generateSecret !== undefined ? i.generateSecret : false);
  out.idTokenValidity = (i.idTokenValidity !== undefined ? i.idTokenValidity : 0);
  out.logoutUrls = (i.logoutUrls !== undefined ? i.logoutUrls : (depth > 4 ? [] : [""]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.preventUserExistenceErrors = (i.preventUserExistenceErrors !== undefined ? i.preventUserExistenceErrors : "");
  out.readAttributes = (i.readAttributes !== undefined ? i.readAttributes : (depth > 4 ? [] : [""]));
  out.refreshTokenRotation = (i.refreshTokenRotation !== undefined ? i.refreshTokenRotation : (depth > 4 ? {} : T_cognito.cognito_UserPoolClientRefreshTokenRotation(ctx, depth + 1)));
  out.refreshTokenValidity = (i.refreshTokenValidity !== undefined ? i.refreshTokenValidity : 0);
  out.supportedIdentityProviders = (i.supportedIdentityProviders !== undefined ? i.supportedIdentityProviders : (depth > 4 ? [] : [""]));
  out.tokenValidityUnits = (i.tokenValidityUnits !== undefined ? i.tokenValidityUnits : (depth > 4 ? {} : T_cognito.cognito_UserPoolClientTokenValidityUnits(ctx, depth + 1)));
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.writeAttributes = (i.writeAttributes !== undefined ? i.writeAttributes : (depth > 4 ? [] : [""]));
  return out;
}

// aws:cognito/userPoolDomain:UserPoolDomain
export function UserPoolDomain(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.awsAccountId = h.id(ctx, "awsAccountId");
  out.certificateArn = (i.certificateArn !== undefined ? i.certificateArn : h.arn(ctx));
  out.cloudfrontDistribution = "";
  out.cloudfrontDistributionArn = h.arn(ctx);
  out.cloudfrontDistributionZoneId = h.id(ctx, "cloudfrontDistributionZoneId");
  out.domain = (i.domain !== undefined ? i.domain : h.endpoint(ctx, "domain"));
  out.managedLoginVersion = (i.managedLoginVersion !== undefined ? i.managedLoginVersion : 0);
  out.s3Bucket = "";
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  out.version = "1";
  return out;
}

// aws:cognito/userPoolUICustomization:UserPoolUICustomization
export function UserPoolUICustomization(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = (i.clientId !== undefined ? i.clientId : h.id(ctx, "clientId"));
  out.creationDate = h.timestamp();
  out.css = (i.css !== undefined ? i.css : "");
  out.cssVersion = "";
  out.imageFile = (i.imageFile !== undefined ? i.imageFile : "");
  out.imageUrl = h.endpoint(ctx, "imageUrl");
  out.lastModifiedDate = "";
  out.userPoolId = (i.userPoolId !== undefined ? i.userPoolId : h.id(ctx, "userPoolId"));
  return out;
}
