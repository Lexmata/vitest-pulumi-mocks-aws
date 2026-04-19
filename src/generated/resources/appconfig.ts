// GENERATED FILE — do not edit.
// Service: appconfig   (9 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_appconfig from "../types/appconfig.js";

// aws:appconfig/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appconfig/configurationProfile:ConfigurationProfile
export function ConfigurationProfile(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.arn = h.arn(ctx);
  out.configurationProfileId = h.id(ctx, "configurationProfileId");
  out.description = (i.description !== undefined ? i.description : "");
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.locationUri = (i.locationUri !== undefined ? i.locationUri : h.endpoint(ctx, "locationUri"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.retrievalRoleArn = (i.retrievalRoleArn !== undefined ? i.retrievalRoleArn : h.arn(ctx));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.type = (i.type !== undefined ? i.type : "");
  out.validators = (i.validators !== undefined ? i.validators : (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_ConfigurationProfileValidator(ctx, depth + 1))]));
  return out;
}

// aws:appconfig/deployment:Deployment
export function Deployment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.arn = h.arn(ctx);
  out.configurationProfileId = (i.configurationProfileId !== undefined ? i.configurationProfileId : h.id(ctx, "configurationProfileId"));
  out.configurationVersion = (i.configurationVersion !== undefined ? i.configurationVersion : "");
  out.deploymentNumber = 0;
  out.deploymentStrategyId = (i.deploymentStrategyId !== undefined ? i.deploymentStrategyId : h.id(ctx, "deploymentStrategyId"));
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.kmsKeyArn = h.arn(ctx);
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appconfig/deploymentStrategy:DeploymentStrategy
export function DeploymentStrategy(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deploymentDurationInMinutes = (i.deploymentDurationInMinutes !== undefined ? i.deploymentDurationInMinutes : 0);
  out.description = (i.description !== undefined ? i.description : "");
  out.finalBakeTimeInMinutes = (i.finalBakeTimeInMinutes !== undefined ? i.finalBakeTimeInMinutes : 0);
  out.growthFactor = (i.growthFactor !== undefined ? i.growthFactor : 0);
  out.growthType = (i.growthType !== undefined ? i.growthType : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.replicateTo = (i.replicateTo !== undefined ? i.replicateTo : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appconfig/environment:Environment
export function Environment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = h.id(ctx, "environmentId");
  out.monitors = (i.monitors !== undefined ? i.monitors : (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_EnvironmentMonitor(ctx, depth + 1))]));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.state = "active";
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appconfig/eventIntegration:EventIntegration
export function EventIntegration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.eventFilter = (i.eventFilter !== undefined ? i.eventFilter : (depth > 4 ? {} : T_appconfig.appconfig_EventIntegrationEventFilter(ctx, depth + 1)));
  out.eventbridgeBus = (i.eventbridgeBus !== undefined ? i.eventbridgeBus : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:appconfig/extension:Extension
export function Extension(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.actionPoints = (i.actionPoints !== undefined ? i.actionPoints : (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_ExtensionActionPoint(ctx, depth + 1))]));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.parameters = (i.parameters !== undefined ? i.parameters : (depth > 4 ? [] : [(depth > 4 ? {} : T_appconfig.appconfig_ExtensionParameter(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.version = 0;
  return out;
}

// aws:appconfig/extensionAssociation:ExtensionAssociation
export function ExtensionAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.extensionArn = (i.extensionArn !== undefined ? i.extensionArn : h.arn(ctx));
  out.extensionVersion = 0;
  out.parameters = (i.parameters !== undefined ? i.parameters : {});
  out.resourceArn = (i.resourceArn !== undefined ? i.resourceArn : h.arn(ctx));
  return out;
}

// aws:appconfig/hostedConfigurationVersion:HostedConfigurationVersion
export function HostedConfigurationVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.arn = h.arn(ctx);
  out.configurationProfileId = (i.configurationProfileId !== undefined ? i.configurationProfileId : h.id(ctx, "configurationProfileId"));
  out.content = (i.content !== undefined ? i.content : "");
  out.contentType = (i.contentType !== undefined ? i.contentType : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.versionNumber = 0;
  return out;
}
