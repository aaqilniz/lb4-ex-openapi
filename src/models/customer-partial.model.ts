import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - CustomerPartial
 * (tsType: Partial<Customer>, schemaOptions: { partial: true })
 */
@model({name: 'CustomerPartial'})
export class CustomerPartial {
  constructor(data?: Partial<CustomerPartial>) {
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

export interface CustomerPartialRelations {
  // describe navigational properties here
}

export type CustomerPartialWithRelations = CustomerPartial & CustomerPartialRelations;


