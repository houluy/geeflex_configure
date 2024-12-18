interface _Data2Table {
  (schema: object, data: object): object
}

type JSONSchemaStringFormat =
  | 'date'
  | 'date-time'
  | 'duration'
  | 'email'
  | 'hostname'
  | 'ipv4'
  | 'ipv6'
  | 'time'
  | 'uri'
  | 'uuid'

type BasicSchema = {
  description?: string
}

interface StringSchema {
  [key: string]: {
    format?: JSONSchemaStringFormat
    pattern?: string
    type: 'string'
  } & BasicSchema
}

interface NumberSchema {
  [key: string]: {
    exclusiveMaximum?: boolean
    exclusiveMinimum?: boolean
    maximum?: number
    minimum?: number
    type: 'integer' | 'number'
  } & BasicSchema
}

interface BasicEnumSchema<T> {
  [key: string]: {
    enum: T[]
    type: T
  }
}

type EnumSchema = BasicEnumSchema<number> | BasicEnumSchema<string>

interface _BasicTableColumn {
  title?: string
  dataIndex: string | string[]
  key?: string
  width?: number | string
}

interface _BasicTableValue {
  key: string
  title: string
  value: number | string
  type: string
  child: boolean
  tooltip?: string
}

interface _BasicParser {
  (schema: EnumSchema | NumberSchema | StringSchema, data: object): object
}

/*
Schema Example:

{
  "type": "object",
  "properties": {
    "<field_name>": {
      "type": "string"
    },
    "<field_name>": {
      "type": "number"
    },
    "<field_name>": {
      "type": "object",
      "properties": {
        "<child_field_name>": {

        },
      }
    },
    "<field_name>": {
      "type": "array",
      "items": {
        "type": "number"
      }
    },
    "<field_name>": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "<child_field_name>": {}
        }
      }
    }
  }

*/

// export function data2table: Data2Table (schema, data) {
//  for (const key in )
//
// }
