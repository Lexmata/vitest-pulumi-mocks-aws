// GENERATED FILE — do not edit.
// Service: opensearchingest   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_opensearchingest from "../types/opensearchingest.js";

// aws:opensearchingest/pipeline:Pipeline
export function Pipeline(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.bufferOptions = (i.bufferOptions !== undefined ? i.bufferOptions : (depth > 4 ? {} : T_opensearchingest.opensearchingest_PipelineBufferOptions(ctx, depth + 1)));
  out.encryptionAtRestOptions = (i.encryptionAtRestOptions !== undefined ? i.encryptionAtRestOptions : (depth > 4 ? {} : T_opensearchingest.opensearchingest_PipelineEncryptionAtRestOptions(ctx, depth + 1)));
  out.ingestEndpointUrls = (depth > 4 ? [] : [""]);
  out.logPublishingOptions = (i.logPublishingOptions !== undefined ? i.logPublishingOptions : (depth > 4 ? {} : T_opensearchingest.opensearchingest_PipelineLogPublishingOptions(ctx, depth + 1)));
  out.maxUnits = (i.maxUnits !== undefined ? i.maxUnits : 0);
  out.minUnits = (i.minUnits !== undefined ? i.minUnits : 0);
  out.pipelineArn = h.arn(ctx);
  out.pipelineConfigurationBody = (i.pipelineConfigurationBody !== undefined ? i.pipelineConfigurationBody : "");
  out.pipelineName = (i.pipelineName !== undefined ? i.pipelineName : "");
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_opensearchingest.opensearchingest_PipelineTimeouts(ctx, depth + 1)));
  out.vpcOptions = (i.vpcOptions !== undefined ? i.vpcOptions : (depth > 4 ? {} : T_opensearchingest.opensearchingest_PipelineVpcOptions(ctx, depth + 1)));
  return out;
}
