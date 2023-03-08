import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Account.Filter
 * Account.Filter
 */
@model({name: 'Account.Filter'})
export class AccountFilter {
  constructor(data?: Partial<AccountFilter>) {
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
        amount: {
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
          'amount',
        ],
      },
      uniqueItems: true,
    },
  ],
  title: 'Account.Fields',
}})
  fields?: {
  id?: boolean;
  amount?: boolean;
} | ('id' | 'amount')[];

}

export interface AccountFilterRelations {
  // describe navigational properties here
}

export type AccountFilterWithRelations = AccountFilter & AccountFilterRelations;


