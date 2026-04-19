// GENERATED FILE — do not edit.
// Service: worklink   (2 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_worklink from "../types/worklink.js";

// aws:worklink/fleet:Fleet
export function Fleet(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.auditStreamArn = (i.auditStreamArn !== undefined ? i.auditStreamArn : h.arn(ctx));
  out.companyCode = "";
  out.createdTime = h.timestamp();
  out.deviceCaCertificate = (i.deviceCaCertificate !== undefined ? i.deviceCaCertificate : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.identityProvider = (i.identityProvider !== undefined ? i.identityProvider : (depth > 4 ? {} : T_worklink.worklink_FleetIdentityProvider(ctx, depth + 1)));
  out.lastUpdatedTime = "";
  out.name = (i.name !== undefined ? i.name : ctx.name);
  out.network = (i.network !== undefined ? i.network : (depth > 4 ? {} : T_worklink.worklink_FleetNetwork(ctx, depth + 1)));
  out.optimizeForEndUserLocation = (i.optimizeForEndUserLocation !== undefined ? i.optimizeForEndUserLocation : false);
  return out;
}

// aws:worklink/websiteCertificateAuthorityAssociation:WebsiteCertificateAuthorityAssociation
export function WebsiteCertificateAuthorityAssociation(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.certificate = (i.certificate !== undefined ? i.certificate : "");
  out.displayName = (i.displayName !== undefined ? i.displayName : "");
  out.fleetArn = (i.fleetArn !== undefined ? i.fleetArn : h.arn(ctx));
  out.websiteCaId = h.id(ctx, "websiteCaId");
  return out;
}
