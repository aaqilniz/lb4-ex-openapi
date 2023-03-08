import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Customer
 * Customer
 */
@model({name: 'Customer'})
export class Customer {
  constructor(data?: Partial<Customer>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'number',
}})
  id?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  name?: string;

  /**
   *
   */
  @property.array(Number, {jsonSchema: {
  type: 'array',
  items: {
    type: 'number',
  },
}})
  accountIds?: number[];

}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;


