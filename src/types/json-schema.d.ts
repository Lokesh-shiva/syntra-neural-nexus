declare module 'json-schema' {
  export interface JSONSchema7 {
    $id?: string;
    $schema?: string;
    $ref?: string;
    title?: string;
    description?: string;
    default?: any;
    type?: string | string[];
    enum?: any[];
    const?: any;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    additionalItems?: JSONSchema7 | boolean;
    items?: JSONSchema7 | JSONSchema7[];
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    contains?: JSONSchema7;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    additionalProperties?: JSONSchema7 | boolean;
    definitions?: { [key: string]: JSONSchema7 };
    properties?: { [key: string]: JSONSchema7 };
    patternProperties?: { [key: string]: JSONSchema7 };
    dependencies?: { [key: string]: JSONSchema7 | string[] };
    propertyNames?: JSONSchema7;
    if?: JSONSchema7;
    then?: JSONSchema7;
    else?: JSONSchema7;
    allOf?: JSONSchema7[];
    anyOf?: JSONSchema7[];
    oneOf?: JSONSchema7[];
    not?: JSONSchema7;
    format?: string;
  }
} 