// GENERATED FILE — do not edit.
// Service: drs   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_drs from "../types/drs.js";

// aws:drs/replicationConfigurationTemplate:ReplicationConfigurationTemplate
export function ReplicationConfigurationTemplate(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.associateDefaultSecurityGroup = (i.associateDefaultSecurityGroup !== undefined ? i.associateDefaultSecurityGroup : false);
  out.autoReplicateNewDisks = (i.autoReplicateNewDisks !== undefined ? i.autoReplicateNewDisks : false);
  out.bandwidthThrottling = (i.bandwidthThrottling !== undefined ? i.bandwidthThrottling : 0);
  out.createPublicIp = (i.createPublicIp !== undefined ? i.createPublicIp : false);
  out.dataPlaneRouting = (i.dataPlaneRouting !== undefined ? i.dataPlaneRouting : "");
  out.defaultLargeStagingDiskType = (i.defaultLargeStagingDiskType !== undefined ? i.defaultLargeStagingDiskType : "");
  out.ebsEncryption = (i.ebsEncryption !== undefined ? i.ebsEncryption : "");
  out.ebsEncryptionKeyArn = (i.ebsEncryptionKeyArn !== undefined ? i.ebsEncryptionKeyArn : h.arn(ctx));
  out.pitPolicies = (i.pitPolicies !== undefined ? i.pitPolicies : (depth > 4 ? [] : [(depth > 4 ? {} : T_drs.drs_ReplicationConfigurationTemplatePitPolicy(ctx, depth + 1))]));
  out.replicationServerInstanceType = (i.replicationServerInstanceType !== undefined ? i.replicationServerInstanceType : "");
  out.replicationServersSecurityGroupsIds = (i.replicationServersSecurityGroupsIds !== undefined ? i.replicationServersSecurityGroupsIds : (depth > 4 ? [] : [""]));
  out.stagingAreaSubnetId = (i.stagingAreaSubnetId !== undefined ? i.stagingAreaSubnetId : h.id(ctx, "stagingAreaSubnetId"));
  out.stagingAreaTags = (i.stagingAreaTags !== undefined ? i.stagingAreaTags : {});
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_drs.drs_ReplicationConfigurationTemplateTimeouts(ctx, depth + 1)));
  out.useDedicatedReplicationServer = (i.useDedicatedReplicationServer !== undefined ? i.useDedicatedReplicationServer : false);
  return out;
}
