// Minimal type projection over the Pulumi AWS schema shape we consume.
export interface PulumiSchema {
  name: string;
  version: string;
  resources: Record<string, ResourceDef>;
  functions: Record<string, FunctionDef>;
  types: Record<string, TypeDef>;
}

export interface PropertyDef {
  type?: "string" | "integer" | "number" | "boolean" | "array" | "object";
  $ref?: string;
  items?: PropertyDef;
  additionalProperties?: PropertyDef;
  description?: string;
  deprecationMessage?: string;
  default?: unknown;
  enum?: Array<{ name?: string; value: string | number | boolean }>;
  willReplaceOnChanges?: boolean;
  oneOf?: PropertyDef[];
}

export interface ResourceDef {
  description?: string;
  properties?: Record<string, PropertyDef>;
  required?: string[];
  inputProperties?: Record<string, PropertyDef>;
  requiredInputs?: string[];
  stateInputs?: { properties?: Record<string, PropertyDef> };
  deprecationMessage?: string;
  isComponent?: boolean;
}

export interface FunctionDef {
  description?: string;
  inputs?: { properties?: Record<string, PropertyDef>; required?: string[] };
  outputs?: { properties?: Record<string, PropertyDef>; required?: string[] };
  deprecationMessage?: string;
}

export interface TypeDef {
  type?: "string" | "integer" | "number" | "boolean" | "object";
  properties?: Record<string, PropertyDef>;
  required?: string[];
  enum?: Array<{ name?: string; value: string | number | boolean }>;
}
