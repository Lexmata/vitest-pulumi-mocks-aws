// Token parsing + identifier naming for the Pulumi AWS schema.
//
// Resource tokens look like:   aws:<module>/<submodule>:<Name>
//   e.g. aws:s3/bucketV2:BucketV2
// Type tokens look like:       aws:<module>/<Name>:<Name>
//   e.g. aws:ec2/InstanceEbsBlockDevice:InstanceEbsBlockDevice

export interface ParsedToken {
  raw: string;
  service: string;
  symbol: string;
  submodule: string;
}

export function parseToken(tok: string): ParsedToken {
  const [pkg, modAndSub, name] = tok.split(":");
  if (pkg !== "aws") {
    throw new Error(`unexpected provider in token: ${tok}`);
  }
  const slash = modAndSub.indexOf("/");
  const service = slash === -1 ? modAndSub : modAndSub.slice(0, slash);
  const submodule = slash === -1 ? "" : modAndSub.slice(slash + 1);
  return { raw: tok, service, submodule, symbol: name };
}

const RESERVED = new Set([
  "break", "case", "catch", "class", "const", "continue", "debugger",
  "default", "delete", "do", "else", "enum", "export", "extends", "false",
  "finally", "for", "function", "if", "import", "in", "instanceof", "new",
  "null", "return", "super", "switch", "this", "throw", "true", "try",
  "typeof", "var", "void", "while", "with", "yield", "let", "static",
  "implements", "interface", "package", "private", "protected", "public",
  "any", "boolean", "number", "string", "symbol", "object", "undefined",
  "never", "unknown", "type", "declare", "module",
]);

export function safeIdent(name: string): string {
  if (RESERVED.has(name)) return `_${name}`;
  const withPrefix = /^[A-Za-z_$]/.test(name) ? name : `_${name}`;
  return withPrefix.replace(/[^A-Za-z0-9_$]/g, "_");
}

// Per-service group used for filenames.
export function serviceSlug(service: string): string {
  return service.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Used to disambiguate PascalCase symbols across modules when building a
// per-service factory identifier.
export function resourceFactoryIdent(token: string): string {
  const { symbol } = parseToken(token);
  return safeIdent(symbol);
}

// Type builder identifier is prefixed with a leading underscore + service so
// we avoid collisions between services that reuse the same type name.
export function typeBuilderIdent(token: string): string {
  const { service, symbol } = parseToken(token);
  const svc = service.replace(/[^A-Za-z0-9]/g, "");
  return safeIdent(`${svc}_${symbol}`);
}

export function functionFactoryIdent(token: string): string {
  const { symbol } = parseToken(token);
  // Preserve the lowercase "getFoo" / "getAmiIds" naming.
  return safeIdent(symbol);
}
