import {api, operation, param, requestBody} from '@loopback/rest';
import {inject} from '@loopback/core';
import {CustomerService} from '../services';
import {LoopbackCount} from '../models/loopback-count.model';
import {Customer} from '../models/customer.model';
import {CustomerPartial} from '../models/customer-partial.model';
import {CustomerFilter} from '../models/customer-filter.model';
import {CustomerWithRelations} from '../models/customer-with-relations.model';
import {NewCustomer} from '../models/new-customer.model';
import {CustomerFilter1} from '../models/customer-filter1.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by CustomerController.
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
export class CustomerController {
  constructor(@inject('services.CustomerService')
  protected customerService: CustomerService) {}

  /**
   *
   *
   * @param where 
   * @returns Customer count
   */
  @operation('get', '/customers/count', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'count',
  tags: [
    'CustomerController',
  ],
  responses: {
    '200': {
      description: 'Customer count',
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
            title: 'Customer.WhereFilter',
            additionalProperties: true,
            'x-typescript-type': '@loopback/repository#Where<Customer>',
          },
        },
      },
    },
  ],
  operationId: 'CustomerController.count',
})
  async count(@param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Customer.WhereFilter',
        additionalProperties: true,
        'x-typescript-type': '@loopback/repository#Where<Customer>',
      },
    },
  },
}) where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<LoopbackCount> {
    return this.customerService.count(where);
  }

  /**
   *
   *
   * @param id 
   * @param _requestBody
   */
  @operation('put', '/customers/{id}', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'replaceById',
  tags: [
    'CustomerController',
  ],
  responses: {
    '204': {
      description: 'Customer was updated',
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
          $ref: '#/components/schemas/Customer',
        },
      },
    },
    'x-parameter-index': 1,
  },
  operationId: 'CustomerController.replaceById',
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
        $ref: '#/components/schemas/Customer',
      },
    },
  },
  'x-parameter-index': 1,
}) _requestBody: Customer): Promise<unknown> {
    return this.customerService.replaceById(id, _requestBody);
  }

  /**
   *
   *
   * @param id 
   * @param _requestBody
   */
  @operation('patch', '/customers/{id}', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'updateById',
  tags: [
    'CustomerController',
  ],
  responses: {
    '204': {
      description: 'Customer was updated',
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
          $ref: '#/components/schemas/CustomerPartial',
        },
      },
    },
    'x-parameter-index': 1,
  },
  operationId: 'CustomerController.updateById',
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
        $ref: '#/components/schemas/CustomerPartial',
      },
    },
  },
  'x-parameter-index': 1,
}) _requestBody: CustomerPartial): Promise<unknown> {
    return this.customerService.updateById(id, _requestBody);
  }

  /**
   *
   *
   * @param id 
   * @param filter 
   * @returns Customer instance
   */
  @operation('get', '/customers/{id}', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'findById',
  tags: [
    'CustomerController',
  ],
  responses: {
    '200': {
      description: 'Customer instance',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/CustomerWithRelations',
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
            $ref: '#/components/schemas/Customer.Filter',
          },
        },
      },
    },
  ],
  operationId: 'CustomerController.findById',
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
        $ref: '#/components/schemas/Customer.Filter',
      },
    },
  },
}) filter: CustomerFilter | undefined): Promise<CustomerWithRelations> {
    return this.customerService.findById(id, filter);
  }

  /**
   *
   *
   * @param id 
   */
  @operation('delete', '/customers/{id}', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'deleteById',
  tags: [
    'CustomerController',
  ],
  responses: {
    '204': {
      description: 'Customer was deleted',
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
  operationId: 'CustomerController.deleteById',
})
  async deleteById(@param({
  name: 'id',
  in: 'path',
  schema: {
    type: 'number',
  },
  required: true,
}) id: number): Promise<unknown> {
    return this.customerService.deleteById(id);
  }

  /**
   *
   *
   * @param _requestBody
   * @returns Customer instance created
   */
  @operation('post', '/customers', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'create',
  tags: [
    'CustomerController',
  ],
  responses: {
    '200': {
      description: 'Customer instance created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Customer',
          },
        },
      },
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewCustomer',
        },
      },
    },
  },
  operationId: 'CustomerController.create',
})
  async create(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/NewCustomer',
      },
    },
  },
}) _requestBody: NewCustomer): Promise<Customer> {
    return this.customerService.create(_requestBody);
  }

  /**
   *
   *
   * @param where 
   * @param _requestBody
   * @returns Count of Customer models updated
   */
  @operation('patch', '/customers', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'updateAll',
  tags: [
    'CustomerController',
  ],
  responses: {
    '200': {
      description: 'Count of Customer models updated',
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
            title: 'Customer.WhereFilter',
            additionalProperties: true,
            'x-typescript-type': '@loopback/repository#Where<Customer>',
          },
        },
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/CustomerPartial',
        },
      },
    },
  },
  operationId: 'CustomerController.updateAll',
})
  async updateAll(@param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Customer.WhereFilter',
        additionalProperties: true,
        'x-typescript-type': '@loopback/repository#Where<Customer>',
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
        $ref: '#/components/schemas/CustomerPartial',
      },
    },
  },
}) _requestBody: CustomerPartial): Promise<LoopbackCount> {
    return this.customerService.updateAll(where, _requestBody);
  }

  /**
   *
   *
   * @param filter 
   * @returns Array of Customer instances
   */
  @operation('get', '/customers', {
  'x-controller-name': 'CustomerController',
  'x-operation-name': 'find',
  tags: [
    'CustomerController',
  ],
  responses: {
    '200': {
      description: 'Array of Customer instances',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/CustomerWithRelations',
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
            $ref: '#/components/schemas/Customer.Filter1',
          },
        },
      },
    },
  ],
  operationId: 'CustomerController.find',
})
  async find(@param({
  name: 'filter',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Customer.Filter1',
      },
    },
  },
}) filter: CustomerFilter1 | undefined): Promise<CustomerWithRelations[]> {
    return this.customerService.find(filter);
  }

}

