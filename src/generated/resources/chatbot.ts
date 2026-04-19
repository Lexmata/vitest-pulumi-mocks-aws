// GENERATED FILE — do not edit.
// Service: chatbot   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_chatbot from "../types/chatbot.js";

// aws:chatbot/slackChannelConfiguration:SlackChannelConfiguration
export function SlackChannelConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.chatConfigurationArn = h.arn(ctx);
  out.configurationName = (i.configurationName !== undefined ? i.configurationName : "");
  out.guardrailPolicyArns = (i.guardrailPolicyArns !== undefined ? i.guardrailPolicyArns : (depth > 4 ? [] : [""]));
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.loggingLevel = (i.loggingLevel !== undefined ? i.loggingLevel : "");
  out.slackChannelId = (i.slackChannelId !== undefined ? i.slackChannelId : h.id(ctx, "slackChannelId"));
  out.slackChannelName = "";
  out.slackTeamId = (i.slackTeamId !== undefined ? i.slackTeamId : h.id(ctx, "slackTeamId"));
  out.slackTeamName = "";
  out.snsTopicArns = (i.snsTopicArns !== undefined ? i.snsTopicArns : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_chatbot.chatbot_SlackChannelConfigurationTimeouts(ctx, depth + 1)));
  out.userAuthorizationRequired = (i.userAuthorizationRequired !== undefined ? i.userAuthorizationRequired : false);
  return out;
}

// aws:chatbot/teamsChannelConfiguration:TeamsChannelConfiguration
export function TeamsChannelConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.channelId = (i.channelId !== undefined ? i.channelId : h.id(ctx, "channelId"));
  out.channelName = (i.channelName !== undefined ? i.channelName : "");
  out.chatConfigurationArn = h.arn(ctx);
  out.configurationName = (i.configurationName !== undefined ? i.configurationName : "");
  out.guardrailPolicyArns = (i.guardrailPolicyArns !== undefined ? i.guardrailPolicyArns : (depth > 4 ? [] : [""]));
  out.iamRoleArn = (i.iamRoleArn !== undefined ? i.iamRoleArn : h.arn(ctx));
  out.loggingLevel = (i.loggingLevel !== undefined ? i.loggingLevel : "");
  out.snsTopicArns = (i.snsTopicArns !== undefined ? i.snsTopicArns : (depth > 4 ? [] : [""]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.teamId = (i.teamId !== undefined ? i.teamId : h.id(ctx, "teamId"));
  out.teamName = (i.teamName !== undefined ? i.teamName : "");
  out.tenantId = (i.tenantId !== undefined ? i.tenantId : h.id(ctx, "tenantId"));
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_chatbot.chatbot_TeamsChannelConfigurationTimeouts(ctx, depth + 1)));
  out.userAuthorizationRequired = (i.userAuthorizationRequired !== undefined ? i.userAuthorizationRequired : false);
  return out;
}
