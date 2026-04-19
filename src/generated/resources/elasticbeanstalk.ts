// GENERATED FILE — do not edit.
// Service: elasticbeanstalk   (4 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_elasticbeanstalk from "../types/elasticbeanstalk.js";

// aws:elasticbeanstalk/application:Application
export function Application(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.appversionLifecycle = (i.appversionLifecycle !== undefined ? i.appversionLifecycle : (depth > 4 ? {} : T_elasticbeanstalk.elasticbeanstalk_ApplicationAppversionLifecycle(ctx, depth + 1)));
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:elasticbeanstalk/applicationVersion:ApplicationVersion
export function ApplicationVersion(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.application = (i.application !== undefined ? i.application : "");
  out.arn = h.arn(ctx);
  out.bucket = (i.bucket !== undefined ? i.bucket : ctx.name);
  out.description = (i.description !== undefined ? i.description : "");
  out.forceDelete = (i.forceDelete !== undefined ? i.forceDelete : false);
  out.key = (i.key !== undefined ? i.key : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.process = (i.process !== undefined ? i.process : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:elasticbeanstalk/configurationTemplate:ConfigurationTemplate
export function ConfigurationTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.application = (i.application !== undefined ? i.application : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.environmentId = (i.environmentId !== undefined ? i.environmentId : h.id(ctx, "environmentId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.settings = (i.settings !== undefined ? i.settings : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticbeanstalk.elasticbeanstalk_ConfigurationTemplateSetting(ctx, depth + 1))]));
  out.solutionStackName = (i.solutionStackName !== undefined ? i.solutionStackName : "");
  return out;
}

// aws:elasticbeanstalk/environment:Environment
export function Environment(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.allSettings = (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticbeanstalk.elasticbeanstalk_EnvironmentAllSetting(ctx, depth + 1))]);
  out.application = (i.application !== undefined ? i.application : "");
  out.arn = h.arn(ctx);
  out.autoscalingGroups = (depth > 4 ? [] : [""]);
  out.cname = "";
  out.cnamePrefix = (i.cnamePrefix !== undefined ? i.cnamePrefix : "");
  out.description = (i.description !== undefined ? i.description : "");
  out.endpointUrl = h.endpoint(ctx, "endpointUrl");
  out.instances = (depth > 4 ? [] : [""]);
  out.launchConfigurations = (depth > 4 ? [] : [""]);
  out.loadBalancers = (depth > 4 ? [] : [""]);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.platformArn = (i.platformArn !== undefined ? i.platformArn : h.arn(ctx));
  out.pollInterval = (i.pollInterval !== undefined ? i.pollInterval : "");
  out.queues = (depth > 4 ? [] : [""]);
  out.settings = (i.settings !== undefined ? i.settings : (depth > 4 ? [] : [(depth > 4 ? {} : T_elasticbeanstalk.elasticbeanstalk_EnvironmentSetting(ctx, depth + 1))]));
  out.solutionStackName = (i.solutionStackName !== undefined ? i.solutionStackName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateName = (i.templateName !== undefined ? i.templateName : "");
  out.tier = (i.tier !== undefined ? i.tier : "");
  out.triggers = (depth > 4 ? [] : [""]);
  out.version = (i.version !== undefined ? i.version : undefined);
  out.waitForReadyTimeout = (i.waitForReadyTimeout !== undefined ? i.waitForReadyTimeout : "");
  return out;
}
