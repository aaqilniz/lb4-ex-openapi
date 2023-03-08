import {model, property} from '@loopback/repository';
import {CustomerIncludeFilterItems} from './customer-include-filter-items.model';

/**
 * The model class is generated from OpenAPI schema - Customer.Filter
 * Customer.Filter
 */
@model({name: 'Customer.Filter'})
export class CustomerFilter {
  constructor(data?: Partial<CustomerFilter>) {
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
  oneOf: [
    {
      type: 'object',
      properties: {
        id: {
          type: 'boolean',
        },
        name: {
          type: 'boolean',
        },
        accountIds: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    },
    {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'id',
          'name',
          'accountIds',
        ],
      },
      uniqueItems: true,
    },
  ],
  title: 'Customer.Fields',
}})
  fields?: {
  id?: boolean;
  name?: boolean;
  accountIds?: boolean;
} | ('id' | 'name' | 'accountIds')[];

  /**
   *
   */
  @property({jsonSchema: {
  title: 'Customer.IncludeFilter',
  type: 'array',
  items: {
    anyOf: [
      {
        $ref: '#/components/schemas/Customer.IncludeFilter.Items',
      },
      {
        type: 'string',
      },
    ],
  },
}})
  include?: (CustomerIncludeFilterItems | string)[];

}

export interface CustomerFilterRelations {
  // describe navigational properties here
}

export type CustomerFilterWithRelations = CustomerFilter & CustomerFilterRelations;


