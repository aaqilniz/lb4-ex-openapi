import {model, property} from '@loopback/repository';
import {CustomerScopeFilter} from './customer-scope-filter.model';

/**
 * The model class is generated from OpenAPI schema - Customer.IncludeFilter.Items
 * Customer.IncludeFilter.Items
 */
@model({name: 'Customer.IncludeFilter.Items'})
export class CustomerIncludeFilterItems {
  constructor(data?: Partial<CustomerIncludeFilterItems>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
  enum: [
    'accounts',
  ],
}})
  relation?: 'accounts';

  /**
   *
   */
  @property({jsonSchema: {
  $ref: '#/components/schemas/Customer.ScopeFilter',
}})
  scope?: CustomerScopeFilter;

}

export interface CustomerIncludeFilterItemsRelations {
  // describe navigational properties here
}

export type CustomerIncludeFilterItemsWithRelations = CustomerIncludeFilterItems & CustomerIncludeFilterItemsRelations;


