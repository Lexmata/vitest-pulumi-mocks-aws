// GENERATED FILE — do not edit.
// Service: cognito   (66 types)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_cognito from "./cognito.js";

// aws:cognito/IdentityPoolCognitoIdentityProvider:IdentityPoolCognitoIdentityProvider
export function cognito_IdentityPoolCognitoIdentityProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.providerName = "";
  out.serverSideTokenCheck = false;
  return out;
}

// aws:cognito/IdentityPoolRoleAttachmentRoleMapping:IdentityPoolRoleAttachmentRoleMapping
export function cognito_IdentityPoolRoleAttachmentRoleMapping(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.ambiguousRoleResolution = "";
  out.identityProvider = "";
  out.mappingRules = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule(ctx, depth + 1))]);
  out.type = "";
  return out;
}

// aws:cognito/IdentityPoolRoleAttachmentRoleMappingMappingRule:IdentityPoolRoleAttachmentRoleMappingMappingRule
export function cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.claim = "";
  out.matchType = "";
  out.roleArn = h.arn(ctx);
  out.value = "";
  return out;
}

// aws:cognito/ManagedUserPoolClientAnalyticsConfiguration:ManagedUserPoolClientAnalyticsConfiguration
export function cognito_ManagedUserPoolClientAnalyticsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = h.arn(ctx);
  out.applicationId = h.id(ctx, "applicationId");
  out.externalId = h.id(ctx, "externalId");
  out.roleArn = h.arn(ctx);
  out.userDataShared = false;
  return out;
}

// aws:cognito/ManagedUserPoolClientRefreshTokenRotation:ManagedUserPoolClientRefreshTokenRotation
export function cognito_ManagedUserPoolClientRefreshTokenRotation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.feature = "";
  out.retryGracePeriodSeconds = 0;
  return out;
}

// aws:cognito/ManagedUserPoolClientTokenValidityUnits:ManagedUserPoolClientTokenValidityUnits
export function cognito_ManagedUserPoolClientTokenValidityUnits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.idToken = "";
  out.refreshToken = "";
  return out;
}

// aws:cognito/ResourceServerScope:ResourceServerScope
export function cognito_ResourceServerScope(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.scopeDescription = "";
  out.scopeName = "";
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfiguration:RiskConfigurationAccountTakeoverRiskConfiguration
export function cognito_RiskConfigurationAccountTakeoverRiskConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions(ctx, depth + 1));
  out.notifyConfiguration = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration(ctx, depth + 1));
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationActions:RiskConfigurationAccountTakeoverRiskConfigurationActions
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.highAction = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction(ctx, depth + 1));
  out.lowAction = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction(ctx, depth + 1));
  out.mediumAction = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction(ctx, depth + 1));
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction:RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventAction = "";
  out.notify = false;
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction:RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventAction = "";
  out.notify = false;
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction:RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventAction = "";
  out.notify = false;
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration:RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockEmail = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail(ctx, depth + 1));
  out.from = "";
  out.mfaEmail = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail(ctx, depth + 1));
  out.noActionEmail = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail(ctx, depth + 1));
  out.replyTo = "";
  out.sourceArn = h.arn(ctx);
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail:RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.htmlBody = "";
  out.subject = "";
  out.textBody = "";
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail:RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.htmlBody = "";
  out.subject = "";
  out.textBody = "";
  return out;
}

// aws:cognito/RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail:RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail
export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.htmlBody = "";
  out.subject = "";
  out.textBody = "";
  return out;
}

// aws:cognito/RiskConfigurationCompromisedCredentialsRiskConfiguration:RiskConfigurationCompromisedCredentialsRiskConfiguration
export function cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actions = (depth > 4 ? {} : T_cognito.cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions(ctx, depth + 1));
  out.eventFilters = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cognito/RiskConfigurationCompromisedCredentialsRiskConfigurationActions:RiskConfigurationCompromisedCredentialsRiskConfigurationActions
export function cognito_RiskConfigurationCompromisedCredentialsRiskConfigurationActions(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.eventAction = "";
  return out;
}

// aws:cognito/RiskConfigurationRiskExceptionConfiguration:RiskConfigurationRiskExceptionConfiguration
export function cognito_RiskConfigurationRiskExceptionConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.blockedIpRangeLists = (depth > 4 ? [] : [""]);
  out.skippedIpRangeLists = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cognito/UserPoolAccountRecoverySetting:UserPoolAccountRecoverySetting
export function cognito_UserPoolAccountRecoverySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recoveryMechanisms = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_UserPoolAccountRecoverySettingRecoveryMechanism(ctx, depth + 1))]);
  return out;
}

// aws:cognito/UserPoolAccountRecoverySettingRecoveryMechanism:UserPoolAccountRecoverySettingRecoveryMechanism
export function cognito_UserPoolAccountRecoverySettingRecoveryMechanism(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.priority = 0;
  return out;
}

// aws:cognito/UserPoolAdminCreateUserConfig:UserPoolAdminCreateUserConfig
export function cognito_UserPoolAdminCreateUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAdminCreateUserOnly = true;
  out.inviteMessageTemplate = (depth > 4 ? {} : T_cognito.cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate(ctx, depth + 1));
  return out;
}

// aws:cognito/UserPoolAdminCreateUserConfigInviteMessageTemplate:UserPoolAdminCreateUserConfigInviteMessageTemplate
export function cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emailMessage = "";
  out.emailSubject = "";
  out.smsMessage = "";
  return out;
}

// aws:cognito/UserPoolClientAnalyticsConfiguration:UserPoolClientAnalyticsConfiguration
export function cognito_UserPoolClientAnalyticsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = h.arn(ctx);
  out.applicationId = h.id(ctx, "applicationId");
  out.externalId = h.id(ctx, "externalId");
  out.roleArn = h.arn(ctx);
  out.userDataShared = false;
  return out;
}

// aws:cognito/UserPoolClientRefreshTokenRotation:UserPoolClientRefreshTokenRotation
export function cognito_UserPoolClientRefreshTokenRotation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.feature = "";
  out.retryGracePeriodSeconds = 0;
  return out;
}

// aws:cognito/UserPoolClientTokenValidityUnits:UserPoolClientTokenValidityUnits
export function cognito_UserPoolClientTokenValidityUnits(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.idToken = "";
  out.refreshToken = "";
  return out;
}

// aws:cognito/UserPoolDeviceConfiguration:UserPoolDeviceConfiguration
export function cognito_UserPoolDeviceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.challengeRequiredOnNewDevice = false;
  out.deviceOnlyRememberedOnUserPrompt = false;
  return out;
}

// aws:cognito/UserPoolEmailConfiguration:UserPoolEmailConfiguration
export function cognito_UserPoolEmailConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationSet = "";
  out.emailSendingAccount = "";
  out.fromEmailAddress = "";
  out.replyToEmailAddress = "";
  out.sourceArn = h.arn(ctx);
  return out;
}

// aws:cognito/UserPoolEmailMfaConfiguration:UserPoolEmailMfaConfiguration
export function cognito_UserPoolEmailMfaConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.message = "";
  out.subject = "";
  return out;
}

// aws:cognito/UserPoolLambdaConfig:UserPoolLambdaConfig
export function cognito_UserPoolLambdaConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createAuthChallenge = "";
  out.customEmailSender = (depth > 4 ? {} : T_cognito.cognito_UserPoolLambdaConfigCustomEmailSender(ctx, depth + 1));
  out.customMessage = "";
  out.customSmsSender = (depth > 4 ? {} : T_cognito.cognito_UserPoolLambdaConfigCustomSmsSender(ctx, depth + 1));
  out.defineAuthChallenge = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.postAuthentication = "";
  out.postConfirmation = "";
  out.preAuthentication = "";
  out.preSignUp = "";
  out.preTokenGeneration = "";
  out.preTokenGenerationConfig = (depth > 4 ? {} : T_cognito.cognito_UserPoolLambdaConfigPreTokenGenerationConfig(ctx, depth + 1));
  out.userMigration = "";
  out.verifyAuthChallengeResponse = "";
  return out;
}

// aws:cognito/UserPoolLambdaConfigCustomEmailSender:UserPoolLambdaConfigCustomEmailSender
export function cognito_UserPoolLambdaConfigCustomEmailSender(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  out.lambdaVersion = "";
  return out;
}

// aws:cognito/UserPoolLambdaConfigCustomSmsSender:UserPoolLambdaConfigCustomSmsSender
export function cognito_UserPoolLambdaConfigCustomSmsSender(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  out.lambdaVersion = "";
  return out;
}

// aws:cognito/UserPoolLambdaConfigPreTokenGenerationConfig:UserPoolLambdaConfigPreTokenGenerationConfig
export function cognito_UserPoolLambdaConfigPreTokenGenerationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  out.lambdaVersion = "";
  return out;
}

// aws:cognito/UserPoolPasswordPolicy:UserPoolPasswordPolicy
export function cognito_UserPoolPasswordPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.minimumLength = 0;
  out.passwordHistorySize = 8;
  out.requireLowercase = false;
  out.requireNumbers = false;
  out.requireSymbols = false;
  out.requireUppercase = false;
  out.temporaryPasswordValidityDays = 0;
  return out;
}

// aws:cognito/UserPoolSchema:UserPoolSchema
export function cognito_UserPoolSchema(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeDataType = "";
  out.developerOnlyAttribute = false;
  out.mutable = false;
  out.name = ctx.name;
  out.numberAttributeConstraints = (depth > 4 ? {} : T_cognito.cognito_UserPoolSchemaNumberAttributeConstraints(ctx, depth + 1));
  out.required = false;
  out.stringAttributeConstraints = (depth > 4 ? {} : T_cognito.cognito_UserPoolSchemaStringAttributeConstraints(ctx, depth + 1));
  return out;
}

// aws:cognito/UserPoolSchemaNumberAttributeConstraints:UserPoolSchemaNumberAttributeConstraints
export function cognito_UserPoolSchemaNumberAttributeConstraints(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxValue = "";
  out.minValue = "";
  return out;
}

// aws:cognito/UserPoolSchemaStringAttributeConstraints:UserPoolSchemaStringAttributeConstraints
export function cognito_UserPoolSchemaStringAttributeConstraints(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxLength = "";
  out.minLength = "";
  return out;
}

// aws:cognito/UserPoolSignInPolicy:UserPoolSignInPolicy
export function cognito_UserPoolSignInPolicy(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowedFirstAuthFactors = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cognito/UserPoolSmsConfiguration:UserPoolSmsConfiguration
export function cognito_UserPoolSmsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.externalId = h.id(ctx, "externalId");
  out.snsCallerArn = h.arn(ctx);
  out.snsRegion = "";
  return out;
}

// aws:cognito/UserPoolSoftwareTokenMfaConfiguration:UserPoolSoftwareTokenMfaConfiguration
export function cognito_UserPoolSoftwareTokenMfaConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.enabled = true;
  return out;
}

// aws:cognito/UserPoolUserAttributeUpdateSettings:UserPoolUserAttributeUpdateSettings
export function cognito_UserPoolUserAttributeUpdateSettings(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributesRequireVerificationBeforeUpdates = (depth > 4 ? [] : [""]);
  return out;
}

// aws:cognito/UserPoolUserPoolAddOns:UserPoolUserPoolAddOns
export function cognito_UserPoolUserPoolAddOns(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advancedSecurityAdditionalFlows = (depth > 4 ? {} : T_cognito.cognito_UserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows(ctx, depth + 1));
  out.advancedSecurityMode = "";
  return out;
}

// aws:cognito/UserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows:UserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows
export function cognito_UserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customAuthMode = "";
  return out;
}

// aws:cognito/UserPoolUsernameConfiguration:UserPoolUsernameConfiguration
export function cognito_UserPoolUsernameConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.caseSensitive = false;
  return out;
}

// aws:cognito/UserPoolVerificationMessageTemplate:UserPoolVerificationMessageTemplate
export function cognito_UserPoolVerificationMessageTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.defaultEmailOption = "";
  out.emailMessage = "";
  out.emailMessageByLink = "";
  out.emailSubject = "";
  out.emailSubjectByLink = "";
  out.smsMessage = "";
  return out;
}

// aws:cognito/UserPoolWebAuthnConfiguration:UserPoolWebAuthnConfiguration
export function cognito_UserPoolWebAuthnConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.relyingPartyId = h.id(ctx, "relyingPartyId");
  out.userVerification = "";
  return out;
}

// aws:cognito/getIdentityPoolCognitoIdentityProvider:getIdentityPoolCognitoIdentityProvider
export function cognito_getIdentityPoolCognitoIdentityProvider(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.clientId = h.id(ctx, "clientId");
  out.providerName = "";
  out.serverSideTokenCheck = false;
  return out;
}

// aws:cognito/getUserGroupsGroup:getUserGroupsGroup
export function cognito_getUserGroupsGroup(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.description = "";
  out.groupName = "";
  out.precedence = 0;
  out.roleArn = h.arn(ctx);
  return out;
}

// aws:cognito/getUserPoolAccountRecoverySetting:getUserPoolAccountRecoverySetting
export function cognito_getUserPoolAccountRecoverySetting(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.recoveryMechanisms = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolAccountRecoverySettingRecoveryMechanism(ctx, depth + 1))]);
  return out;
}

// aws:cognito/getUserPoolAccountRecoverySettingRecoveryMechanism:getUserPoolAccountRecoverySettingRecoveryMechanism
export function cognito_getUserPoolAccountRecoverySettingRecoveryMechanism(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.name = ctx.name;
  out.priority = 0;
  return out;
}

// aws:cognito/getUserPoolAdminCreateUserConfig:getUserPoolAdminCreateUserConfig
export function cognito_getUserPoolAdminCreateUserConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allowAdminCreateUserOnly = true;
  out.inviteMessageTemplates = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate(ctx, depth + 1))]);
  out.unusedAccountValidityDays = 1;
  return out;
}

// aws:cognito/getUserPoolAdminCreateUserConfigInviteMessageTemplate:getUserPoolAdminCreateUserConfigInviteMessageTemplate
export function cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.emailMessage = "";
  out.emailSubject = "";
  out.smsMessage = "";
  return out;
}

// aws:cognito/getUserPoolClientAnalyticsConfiguration:getUserPoolClientAnalyticsConfiguration
export function cognito_getUserPoolClientAnalyticsConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationArn = h.arn(ctx);
  out.applicationId = h.id(ctx, "applicationId");
  out.externalId = h.id(ctx, "externalId");
  out.roleArn = h.arn(ctx);
  out.userDataShared = false;
  return out;
}

// aws:cognito/getUserPoolClientRefreshTokenRotation:getUserPoolClientRefreshTokenRotation
export function cognito_getUserPoolClientRefreshTokenRotation(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.feature = "";
  out.retryGracePeriodSeconds = 0;
  return out;
}

// aws:cognito/getUserPoolClientTokenValidityUnit:getUserPoolClientTokenValidityUnit
export function cognito_getUserPoolClientTokenValidityUnit(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.accessToken = "";
  out.idToken = "";
  out.refreshToken = "";
  return out;
}

// aws:cognito/getUserPoolDeviceConfiguration:getUserPoolDeviceConfiguration
export function cognito_getUserPoolDeviceConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.challengeRequiredOnNewDevice = false;
  out.deviceOnlyRememberedOnUserPrompt = false;
  return out;
}

// aws:cognito/getUserPoolEmailConfiguration:getUserPoolEmailConfiguration
export function cognito_getUserPoolEmailConfiguration(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.configurationSet = "";
  out.emailSendingAccount = "";
  out.from = "";
  out.replyToEmailAddress = "";
  out.sourceArn = h.arn(ctx);
  return out;
}

// aws:cognito/getUserPoolLambdaConfig:getUserPoolLambdaConfig
export function cognito_getUserPoolLambdaConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.createAuthChallenge = "";
  out.customEmailSenders = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolLambdaConfigCustomEmailSender(ctx, depth + 1))]);
  out.customMessage = "";
  out.customSmsSenders = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolLambdaConfigCustomSmsSender(ctx, depth + 1))]);
  out.defineAuthChallenge = "";
  out.kmsKeyId = h.id(ctx, "kmsKeyId");
  out.postAuthentication = "";
  out.postConfirmation = "";
  out.preAuthentication = "";
  out.preSignUp = "";
  out.preTokenGeneration = "";
  out.preTokenGenerationConfigs = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolLambdaConfigPreTokenGenerationConfig(ctx, depth + 1))]);
  out.userMigration = "";
  out.verifyAuthChallengeResponse = "";
  return out;
}

// aws:cognito/getUserPoolLambdaConfigCustomEmailSender:getUserPoolLambdaConfigCustomEmailSender
export function cognito_getUserPoolLambdaConfigCustomEmailSender(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  out.lambdaVersion = "";
  return out;
}

// aws:cognito/getUserPoolLambdaConfigCustomSmsSender:getUserPoolLambdaConfigCustomSmsSender
export function cognito_getUserPoolLambdaConfigCustomSmsSender(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  out.lambdaVersion = "";
  return out;
}

// aws:cognito/getUserPoolLambdaConfigPreTokenGenerationConfig:getUserPoolLambdaConfigPreTokenGenerationConfig
export function cognito_getUserPoolLambdaConfigPreTokenGenerationConfig(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.lambdaArn = h.arn(ctx);
  out.lambdaVersion = "";
  return out;
}

// aws:cognito/getUserPoolSchemaAttribute:getUserPoolSchemaAttribute
export function cognito_getUserPoolSchemaAttribute(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.attributeDataType = "";
  out.developerOnlyAttribute = false;
  out.mutable = false;
  out.name = ctx.name;
  out.numberAttributeConstraints = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolSchemaAttributeNumberAttributeConstraint(ctx, depth + 1))]);
  out.required = false;
  out.stringAttributeConstraints = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolSchemaAttributeStringAttributeConstraint(ctx, depth + 1))]);
  return out;
}

// aws:cognito/getUserPoolSchemaAttributeNumberAttributeConstraint:getUserPoolSchemaAttributeNumberAttributeConstraint
export function cognito_getUserPoolSchemaAttributeNumberAttributeConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxValue = "";
  out.minValue = "";
  return out;
}

// aws:cognito/getUserPoolSchemaAttributeStringAttributeConstraint:getUserPoolSchemaAttributeStringAttributeConstraint
export function cognito_getUserPoolSchemaAttributeStringAttributeConstraint(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.maxLength = "";
  out.minLength = "";
  return out;
}

// aws:cognito/getUserPoolUserPoolAddOn:getUserPoolUserPoolAddOn
export function cognito_getUserPoolUserPoolAddOn(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.advancedSecurityAdditionalFlows = (depth > 4 ? [] : [(depth > 4 ? {} : T_cognito.cognito_getUserPoolUserPoolAddOnAdvancedSecurityAdditionalFlow(ctx, depth + 1))]);
  out.advancedSecurityMode = "";
  return out;
}

// aws:cognito/getUserPoolUserPoolAddOnAdvancedSecurityAdditionalFlow:getUserPoolUserPoolAddOnAdvancedSecurityAdditionalFlow
export function cognito_getUserPoolUserPoolAddOnAdvancedSecurityAdditionalFlow(ctx: MockCtx, depth = 0): Record<string, any> {
  if (depth > 4) return {};
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.customAuthMode = "";
  return out;
}
