import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewCustomer
 * (tsType: Omit<Customer, 'id'>, schemaOptions: { title: 'NewCustomer',
exclude: [ 'id' ] })
 */
@model({name: 'NewCustomer'})
export class NewCustomer {
  constructor(data?: Partial<NewCustomer>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

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

export interface NewCustomerRelations {
  // describe navigational properties here
}

export type NewCustomerWithRelations = NewCustomer & NewCustomerRelations;


