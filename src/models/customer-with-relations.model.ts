import {model, property} from '@loopback/repository';
import {AccountWithRelations} from './account-with-relations.model';

/**
 * The model class is generated from OpenAPI schema - CustomerWithRelations
 * (tsType: CustomerWithRelations, schemaOptions: { includeRelations: true })
 */
@model({name: 'CustomerWithRelations'})
export class CustomerWithRelations {
  constructor(data?: Partial<CustomerWithRelations>) {
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

  /**
   *
   */
  @property.array(AccountWithRelations, {jsonSchema: {
  type: 'array',
  items: {
    $ref: '#/components/schemas/AccountWithRelations',
  },
}})
  accounts?: AccountWithRelations[];

}

export interface CustomerWithRelationsRelations {
  // describe navigational properties here
}

export type CustomerWithRelationsWithRelations = CustomerWithRelations & CustomerWithRelationsRelations;


