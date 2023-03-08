import {api, operation, param, requestBody} from '@loopback/rest';
import {inject} from '@loopback/core';
import {AccountService} from '../services';
import {LoopbackCount} from '../models/loopback-count.model';
import {Account} from '../models/account.model';
import {AccountPartial} from '../models/account-partial.model';
import {AccountFilter} from '../models/account-filter.model';
import {AccountWithRelations} from '../models/account-with-relations.model';
import {NewAccount} from '../models/new-account.model';
import {AccountFilter1} from '../models/account-filter1.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by AccountController.
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
export class AccountController {
  constructor(@inject('services.AccountService')
  protected accountService: AccountService) {}

  /**
   *
   *
   * @param where 
   * @returns Account count
   */
  @operation('get', '/accounts/count', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'count',
  tags: [
    'AccountController',
  ],
  responses: {
    '200': {
      description: 'Account count',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/loopback.Count',
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'where',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            title: 'Account.WhereFilter',
            additionalProperties: true,
            'x-typescript-type': '@loopback/repository#Where<Account>',
          },
        },
      },
    },
  ],
  operationId: 'AccountController.count',
})
  async count(@param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Account.WhereFilter',
        additionalProperties: true,
        'x-typescript-type': '@loopback/repository#Where<Account>',
      },
    },
  },
}) where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<LoopbackCount> {
    return this.accountService.count(where);
  }

  /**
   *
   *
   * @param id 
   * @param _requestBody
   */
  @operation('put', '/accounts/{id}', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'replaceById',
  tags: [
    'AccountController',
  ],
  responses: {
    '204': {
      description: 'Account was updated',
    },
  },
  parameters: [
    {
      name: 'id',
      in: 'path',
      schema: {
        type: 'number',
      },
      required: true,
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Account',
        },
      },
    },
    'x-parameter-index': 1,
  },
  operationId: 'AccountController.replaceById',
})
  async replaceById(@param({
  name: 'id',
  in: 'path',
  schema: {
    type: 'number',
  },
  required: true,
}) id: number, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Account',
      },
    },
  },
  'x-parameter-index': 1,
}) _requestBody: Account): Promise<unknown> {
    return this.accountService.replaceById(id, _requestBody);
  }

  /**
   *
   *
   * @param id 
   * @param _requestBody
   */
  @operation('patch', '/accounts/{id}', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'updateById',
  tags: [
    'AccountController',
  ],
  responses: {
    '204': {
      description: 'Account was updated',
    },
  },
  parameters: [
    {
      name: 'id',
      in: 'path',
      schema: {
        type: 'number',
      },
      required: true,
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/AccountPartial',
        },
      },
    },
    'x-parameter-index': 1,
  },
  operationId: 'AccountController.updateById',
})
  async updateById(@param({
  name: 'id',
  in: 'path',
  schema: {
    type: 'number',
  },
  required: true,
}) id: number, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/AccountPartial',
      },
    },
  },
  'x-parameter-index': 1,
}) _requestBody: AccountPartial): Promise<unknown> {
    return this.accountService.updateById(id, _requestBody);
  }

  /**
   *
   *
   * @param id 
   * @param filter 
   * @returns Account instance
   */
  @operation('get', '/accounts/{id}', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'findById',
  tags: [
    'AccountController',
  ],
  responses: {
    '200': {
      description: 'Account instance',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/AccountWithRelations',
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'id',
      in: 'path',
      schema: {
        type: 'number',
      },
      required: true,
    },
    {
      name: 'filter',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Account.Filter',
          },
        },
      },
    },
  ],
  operationId: 'AccountController.findById',
})
  async findById(@param({
  name: 'id',
  in: 'path',
  schema: {
    type: 'number',
  },
  required: true,
}) id: number, @param({
  name: 'filter',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Account.Filter',
      },
    },
  },
}) filter: AccountFilter | undefined): Promise<AccountWithRelations> {
    return this.accountService.findById(id, filter);
  }

  /**
   *
   *
   * @param id 
   */
  @operation('delete', '/accounts/{id}', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'deleteById',
  tags: [
    'AccountController',
  ],
  responses: {
    '204': {
      description: 'Account was deleted',
    },
  },
  parameters: [
    {
      name: 'id',
      in: 'path',
      schema: {
        type: 'number',
      },
      required: true,
    },
  ],
  operationId: 'AccountController.deleteById',
})
  async deleteById(@param({
  name: 'id',
  in: 'path',
  schema: {
    type: 'number',
  },
  required: true,
}) id: number): Promise<unknown> {
    return this.accountService.deleteById(id);
  }

  /**
   *
   *
   * @param _requestBody
   * @returns Account instance created
   */
  @operation('post', '/accounts', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'create',
  tags: [
    'AccountController',
  ],
  responses: {
    '200': {
      description: 'Account instance created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Account',
          },
        },
      },
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewAccount',
        },
      },
    },
  },
  operationId: 'AccountController.create',
})
  async create(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/NewAccount',
      },
    },
  },
}) _requestBody: NewAccount): Promise<Account> {
    return this.accountService.create(_requestBody);
  }

  /**
   *
   *
   * @param where 
   * @param _requestBody
   * @returns Count of Account models updated
   */
  @operation('patch', '/accounts', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'updateAll',
  tags: [
    'AccountController',
  ],
  responses: {
    '200': {
      description: 'Count of Account models updated',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/loopback.Count',
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'where',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            title: 'Account.WhereFilter',
            additionalProperties: true,
            'x-typescript-type': '@loopback/repository#Where<Account>',
          },
        },
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/AccountPartial',
        },
      },
    },
  },
  operationId: 'AccountController.updateAll',
})
  async updateAll(@param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Account.WhereFilter',
        additionalProperties: true,
        'x-typescript-type': '@loopback/repository#Where<Account>',
      },
    },
  },
}) where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/AccountPartial',
      },
    },
  },
}) _requestBody: AccountPartial): Promise<LoopbackCount> {
    return this.accountService.updateAll(where, _requestBody);
  }

  /**
   *
   *
   * @param filter 
   * @returns Array of Account instances
   */
  @operation('get', '/accounts', {
  'x-controller-name': 'AccountController',
  'x-operation-name': 'find',
  tags: [
    'AccountController',
  ],
  responses: {
    '200': {
      description: 'Array of Account instances',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/AccountWithRelations',
            },
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'filter',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Account.Filter1',
          },
        },
      },
    },
  ],
  operationId: 'AccountController.find',
})
  async find(@param({
  name: 'filter',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Account.Filter1',
      },
    },
  },
}) filter: AccountFilter1 | undefined): Promise<AccountWithRelations[]> {
    return this.accountService.find(filter);
  }

}

