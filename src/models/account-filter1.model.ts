import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Account.Filter1
 * Account.Filter1
 */
@model({name: 'Account.Filter1'})
export class AccountFilter1 {
  constructor(data?: Partial<AccountFilter1>) {
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
  title: 'Account.WhereFilter',
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

export interface AccountFilter1Relations {
  // describe navigational properties here
}

export type AccountFilter1WithRelations = AccountFilter1 & AccountFilter1Relations;


