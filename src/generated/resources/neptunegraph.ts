// GENERATED FILE — do not edit.
// Service: neptunegraph   (1 resources)

import type { MockCtx } from "../helpers.js";
import * as h from "../helpers.js";
import * as T_neptunegraph from "../types/neptunegraph.js";

// aws:neptunegraph/graph:Graph
export function Graph(ctx: MockCtx): Record<string, any> {
  const depth = 0;
  const i: Record<string, any> = (ctx.inputs ?? {}) as any;
  const out: Record<string, any> = {};
  out.arn = h.arn(ctx);
  out.deletionProtection = (i.deletionProtection !== undefined ? i.deletionProtection : false);
  out.endpoint = h.endpoint(ctx, "endpoint");
  out.graphName = (i.graphName !== undefined ? i.graphName : "");
  out.graphNamePrefix = (i.graphNamePrefix !== undefined ? i.graphNamePrefix : "");
  out.kmsKeyIdentifier = (i.kmsKeyIdentifier !== undefined ? i.kmsKeyIdentifier : "");
  out.provisionedMemory = (i.provisionedMemory !== undefined ? i.provisionedMemory : 0);
  out.publicConnectivity = (i.publicConnectivity !== undefined ? i.publicConnectivity : false);
  out.replicaCount = (i.replicaCount !== undefined ? i.replicaCount : 1);
  out.tags = (i.tags !== undefined ? i.tags : {});
  out.tagsAll = { ...(i.tags ?? {}) };
  out.timeouts = (i.timeouts !== undefined ? i.timeouts : (depth > 4 ? {} : T_neptunegraph.neptunegraph_GraphTimeouts(ctx, depth + 1)));
  out.vectorSearchConfiguration = (i.vectorSearchConfiguration !== undefined ? i.vectorSearchConfiguration : (depth > 4 ? {} : T_neptunegraph.neptunegraph_GraphVectorSearchConfiguration(ctx, depth + 1)));
  return out;
}
