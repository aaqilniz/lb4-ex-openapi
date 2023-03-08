import {api, operation, param, requestBody} from '@loopback/rest';
import {inject} from '@loopback/core';
import {PingService} from '../services';
import {PingResponse} from '../models/ping-response.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by PingController.
 *
 */
@api({
  components: {
    schemas: {
      AccountWithRelations: {
        title: 'AccountWithRelations',
        type: 'object',
        description: '(tsType: AccountWithRelations, schemaOptions: { includeRelations: true })',
        properties: {
          id: {
            type: 'number',
          },
          amount: {
            type: 'number',
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'AccountWithRelations',
      },
      Account: {
        title: 'Account',
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          amount: {
            type: 'number',
          },
        },
        additionalProperties: false,
      },
      NewAccount: {
        title: 'NewAccount',
        type: 'object',
        description: "(tsType: Omit<Account, 'id'>, schemaOptions: { title: 'NewAccount', exclude: [ 'id' ] })",
        properties: {
          amount: {
            type: 'number',
          },
        },
        additionalProperties: false,
        'x-typescript-type': "Omit<Account, 'id'>",
      },
      AccountPartial: {
        title: 'AccountPartial',
        type: 'object',
        description: '(tsType: Partial<Account>, schemaOptions: { partial: true })',
        properties: {
          id: {
            type: 'number',
          },
          amount: {
            type: 'number',
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'Partial<Account>',
      },
      CustomerWithRelations: {
        title: 'CustomerWithRelations',
        type: 'object',
        description: '(tsType: CustomerWithRelations, schemaOptions: { includeRelations: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          accountIds: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
          accounts: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/AccountWithRelations',
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'CustomerWithRelations',
      },
      Customer: {
        title: 'Customer',
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          accountIds: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
        },
        additionalProperties: false,
      },
      NewCustomer: {
        title: 'NewCustomer',
        type: 'object',
        description: "(tsType: Omit<Customer, 'id'>, schemaOptions: { title: 'NewCustomer', exclude: [ 'id' ] })",
        properties: {
          name: {
            type: 'string',
          },
          accountIds: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': "Omit<Customer, 'id'>",
      },
      CustomerPartial: {
        title: 'CustomerPartial',
        type: 'object',
        description: '(tsType: Partial<Customer>, schemaOptions: { partial: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          accountIds: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'Partial<Customer>',
      },
      'loopback.Count': {
        type: 'object',
        title: 'loopback.Count',
        'x-typescript-type': '@loopback/repository#Count',
        properties: {
          count: {
            type: 'number',
          },
        },
      },
      'Account.Filter': {
        type: 'object',
        title: 'Account.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
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
          },
          fields: {
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
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Account.Fields',
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Account>',
      },
      'Account.Filter1': {
        type: 'object',
        title: 'Account.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
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
          },
          where: {
            title: 'Account.WhereFilter',
            type: 'object',
            additionalProperties: true,
          },
          fields: {
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
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Account.Fields',
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Account>',
      },
      'Customer.ScopeFilter': {
        type: 'object',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
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
          },
          where: {
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {},
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
          },
          include: {
            type: 'array',
            items: {
              type: 'object',
              properties: {},
              additionalProperties: true,
            },
          },
        },
        additionalProperties: false,
        title: 'Customer.ScopeFilter',
      },
      'Customer.IncludeFilter.Items': {
        title: 'Customer.IncludeFilter.Items',
        type: 'object',
        properties: {
          relation: {
            type: 'string',
            enum: [
              'accounts',
            ],
          },
          scope: {
            $ref: '#/components/schemas/Customer.ScopeFilter',
          },
        },
      },
      'Customer.Filter': {
        type: 'object',
        title: 'Customer.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
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
          },
          fields: {
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
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Customer.Fields',
          },
          include: {
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
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Customer>',
      },
      'Customer.Filter1': {
        type: 'object',
        title: 'Customer.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
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
          },
          where: {
            title: 'Customer.WhereFilter',
            type: 'object',
            additionalProperties: true,
          },
          fields: {
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
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Customer.Fields',
          },
          include: {
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
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Customer>',
      },
      PingResponse: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {
            type: 'string',
          },
          date: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {
                type: 'string',
              },
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
  paths: {},
})
export class PingController {
  constructor(@inject('services.PingService')
  protected pingService: PingService) {}

  /**
   *
   *
   * @returns Ping Response
   */
  @operation('get', '/ping', {
  'x-controller-name': 'PingController',
  'x-operation-name': 'ping',
  tags: [
    'PingController',
  ],
  responses: {
    '200': {
      description: 'Ping Response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/PingResponse',
          },
        },
      },
    },
  },
  operationId: 'PingController.ping',
})
  async ping(): Promise<PingResponse> {
    return this.pingService.ping();
  }

}

