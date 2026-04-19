// GENERATED FILE — do not edit.
// Service: pinpoint   (15 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_pinpoint from "../types/pinpoint.js";

// aws:pinpoint/admChannel:AdmChannel
export function AdmChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.clientId = (i.clientId !== undefined ? i.clientId : h.id(ctx, "clientId"));
  out.clientSecret = (i.clientSecret !== undefined ? i.clientSecret : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  return out;
}

// aws:pinpoint/apnsChannel:ApnsChannel
export function ApnsChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.defaultAuthenticationMethod = (i.defaultAuthenticationMethod !== undefined ? i.defaultAuthenticationMethod : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.teamId = (i.teamId !== undefined ? i.teamId : h.id(ctx, "teamId"));
  out.tokenKey = (i.tokenKey !== undefined ? i.tokenKey : "");
  out.tokenKeyId = (i.tokenKeyId !== undefined ? i.tokenKeyId : h.id(ctx, "tokenKeyId"));
  return out;
}

// aws:pinpoint/apnsSandboxChannel:ApnsSandboxChannel
export function ApnsSandboxChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.defaultAuthenticationMethod = (i.defaultAuthenticationMethod !== undefined ? i.defaultAuthenticationMethod : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.teamId = (i.teamId !== undefined ? i.teamId : h.id(ctx, "teamId"));
  out.tokenKey = (i.tokenKey !== undefined ? i.tokenKey : "");
  out.tokenKeyId = (i.tokenKeyId !== undefined ? i.tokenKeyId : h.id(ctx, "tokenKeyId"));
  return out;
}

// aws:pinpoint/apnsVoipChannel:ApnsVoipChannel
export function ApnsVoipChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.defaultAuthenticationMethod = (i.defaultAuthenticationMethod !== undefined ? i.defaultAuthenticationMethod : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.teamId = (i.teamId !== undefined ? i.teamId : h.id(ctx, "teamId"));
  out.tokenKey = (i.tokenKey !== undefined ? i.tokenKey : "");
  out.tokenKeyId = (i.tokenKeyId !== undefined ? i.tokenKeyId : h.id(ctx, "tokenKeyId"));
  return out;
}

// aws:pinpoint/apnsVoipSandboxChannel:ApnsVoipSandboxChannel
export function ApnsVoipSandboxChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.bundleId = (i.bundleId !== undefined ? i.bundleId : h.id(ctx, "bundleId"));
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.defaultAuthenticationMethod = (i.defaultAuthenticationMethod !== undefined ? i.defaultAuthenticationMethod : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.privateKey = (i.privateKey !== undefined ? i.privateKey : "");
  out.teamId = (i.teamId !== undefined ? i.teamId : h.id(ctx, "teamId"));
  out.tokenKey = (i.tokenKey !== undefined ? i.tokenKey : "");
  out.tokenKeyId = (i.tokenKeyId !== undefined ? i.tokenKeyId : h.id(ctx, "tokenKeyId"));
  return out;
}

// aws:pinpoint/app:App
export function App(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = h.id(ctx, "applicationId");
  out.arn = h.arn(ctx);
  out.campaignHook = (i.campaignHook !== undefined ? i.campaignHook : (depth > 4 ? {} : T_pinpoint.pinpoint_AppCampaignHook(ctx, depth + 1)));
  out.limits = (i.limits !== undefined ? i.limits : (depth > 4 ? {} : T_pinpoint.pinpoint_AppLimits(ctx, depth + 1)));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.namePrefix = (i.namePrefix !== undefined ? i.namePrefix : "");
  out.quietTime = (i.quietTime !== undefined ? i.quietTime : (depth > 4 ? {} : T_pinpoint.pinpoint_AppQuietTime(ctx, depth + 1)));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:pinpoint/baiduChannel:BaiduChannel
export function BaiduChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = (i.apiKey !== undefined ? i.apiKey : "");
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.secretKey = (i.secretKey !== undefined ? i.secretKey : "");
  return out;
}

// aws:pinpoint/emailChannel:EmailChannel
export function EmailChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.configurationSet = (i.configurationSet !== undefined ? i.configurationSet : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.fromAddress = (i.fromAddress !== undefined ? i.fromAddress : "");
  out.identity = (i.identity !== undefined ? i.identity : "");
  out.messagesPerSecond = 0;
  out.orchestrationSendingRoleArn = (i.orchestrationSendingRoleArn !== undefined ? i.orchestrationSendingRoleArn : h.arn(ctx));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:pinpoint/emailTemplate:EmailTemplate
export function EmailTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.emailTemplates = (i.emailTemplates !== undefined ? i.emailTemplates : (depth > 4 ? [] : [(depth > 4 ? {} : T_pinpoint.pinpoint_EmailTemplateEmailTemplate(ctx, depth + 1))]));
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.templateName = (i.templateName !== undefined ? i.templateName : "");
  return out;
}

// aws:pinpoint/eventStream:EventStream
export function EventStream(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.destinationStreamArn = (i.destinationStreamArn !== undefined ? i.destinationStreamArn : h.arn(ctx));
  out.roleArn = (i.roleArn !== undefined ? i.roleArn : h.arn(ctx));
  return out;
}

// aws:pinpoint/gcmChannel:GcmChannel
export function GcmChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.apiKey = (i.apiKey !== undefined ? i.apiKey : "");
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.defaultAuthenticationMethod = (i.defaultAuthenticationMethod !== undefined ? i.defaultAuthenticationMethod : "");
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.serviceJson = (i.serviceJson !== undefined ? i.serviceJson : "");
  return out;
}

// aws:pinpoint/smsChannel:SmsChannel
export function SmsChannel(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.applicationId = (i.applicationId !== undefined ? i.applicationId : h.id(ctx, "applicationId"));
  out.enabled = (i.enabled !== undefined ? i.enabled : true);
  out.promotionalMessagesPerSecond = 0;
  out.senderId = (i.senderId !== undefined ? i.senderId : h.id(ctx, "senderId"));
  out.shortCode = (i.shortCode !== undefined ? i.shortCode : "");
  out.transactionalMessagesPerSecond = 0;
  return out;
}

// aws:pinpoint/smsvoicev2ConfigurationSet:Smsvoicev2ConfigurationSet
export function Smsvoicev2ConfigurationSet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.defaultMessageType = (i.defaultMessageType !== undefined ? i.defaultMessageType : "");
  out.defaultSenderId = (i.defaultSenderId !== undefined ? i.defaultSenderId : h.id(ctx, "defaultSenderId"));
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:pinpoint/smsvoicev2OptOutList:Smsvoicev2OptOutList
export function Smsvoicev2OptOutList(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:pinpoint/smsvoicev2PhoneNumber:Smsvoicev2PhoneNumber
export function Smsvoicev2PhoneNumber(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtectionEnabled = (i.deletionProtectionEnabled !== undefined ? i.deletionProtectionEnabled : false);
  out.isoCountryCode = (i.isoCountryCode !== undefined ? i.isoCountryCode : "");
  out.messageType = (i.messageType !== undefined ? i.messageType : "");
  out.monthlyLeasingPrice = "";
  out.numberCapabilities = (i.numberCapabilities !== undefined ? i.numberCapabilities : (depth > 4 ? [] : [""]));
  out.numberType = (i.numberType !== undefined ? i.numberType : "");
  out.optOutListName = (i.optOutListName !== undefined ? i.optOutListName : "");
  out.phoneNumber = "";
  out.registrationId = (i.registrationId !== undefined ? i.registrationId : h.id(ctx, "registrationId"));
  out.selfManagedOptOutsEnabled = (i.selfManagedOptOutsEnabled !== undefined ? i.selfManagedOptOutsEnabled : false);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_pinpoint.pinpoint_Smsvoicev2PhoneNumberTimeouts(ctx, depth + 1)));
  out.twoWayChannelArn = (i.twoWayChannelArn !== undefined ? i.twoWayChannelArn : h.arn(ctx));
  out.twoWayChannelEnabled = (i.twoWayChannelEnabled !== undefined ? i.twoWayChannelEnabled : false);
  out.twoWayChannelRole = (i.twoWayChannelRole !== undefined ? i.twoWayChannelRole : "");
  return out;
}
