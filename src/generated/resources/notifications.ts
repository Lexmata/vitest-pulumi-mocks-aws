// GENERATED FILE — do not edit.
// Service: notifications   (5 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_notifications from "../types/notifications.js";

// aws:notifications/channelAssociation:ChannelAssociation
export function ChannelAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = (i.arn !== undefined ? i.arn : h.arn(ctx));
  out.notificationConfigurationArn = (i.notificationConfigurationArn !== undefined ? i.notificationConfigurationArn : h.arn(ctx));
  return out;
}

// aws:notifications/contactsEmailContact:ContactsEmailContact
export function ContactsEmailContact(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.emailAddress = (i.emailAddress !== undefined ? i.emailAddress : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:notifications/eventRule:EventRule
export function EventRule(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.eventPattern = (i.eventPattern !== undefined ? i.eventPattern : "");
  out.eventType = (i.eventType !== undefined ? i.eventType : "");
  out.notificationConfigurationArn = (i.notificationConfigurationArn !== undefined ? i.notificationConfigurationArn : h.arn(ctx));
  out.regions = (i.regions !== undefined ? i.regions : (depth > 4 ? [] : [""]));
  out.source = (i.source !== undefined ? i.source : "");
  return out;
}

// aws:notifications/notificationConfiguration:NotificationConfiguration
export function NotificationConfiguration(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.aggregationDuration = (i.aggregationDuration !== undefined ? i.aggregationDuration : "");
  out.arn = h.arn(ctx);
  out.description = (i.description !== undefined ? i.description : "");
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  return out;
}

// aws:notifications/notificationHub:NotificationHub
export function NotificationHub(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.notificationHubRegion = (i.notificationHubRegion !== undefined ? i.notificationHubRegion : "");
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_notifications.notifications_NotificationHubTimeouts(ctx, depth + 1)));
  return out;
}
