import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Customer.ScopeFilter
 * Customer.ScopeFilter
 */
@model({name: 'Customer.ScopeFilter'})
export class CustomerScopeFilter {
  constructor(data?: Partial<CustomerScopeFilter>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  minimum: 0,
}})
  offset?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  minimum: 1,
}})
  limit?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  minimum: 0,
}})
  skip?: number;

  /**
   *
   */
  @property({jsonSchema: {
  oneOf: [
    {
      type: 'string',
    },
    {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  ],
}})
  order?: string | string[];

  /**
   *
   */
  @property({jsonSchema: {
  type: 'object',
  additionalProperties: true,
}})
  where?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
};

  /**
   *
   */
  @property({jsonSchema: {
  oneOf: [
    {
      type: 'object',
      additionalProperties: true,
    },
    {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  ],
}})
  fields?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | string[];

  /**
   *
   */
  @property({jsonSchema: {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: true,
  },
}})
  include?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
}[];

}

export interface CustomerScopeFilterRelations {
  // describe navigational properties here
}

export type CustomerScopeFilterWithRelations = CustomerScopeFilter & CustomerScopeFilterRelations;


