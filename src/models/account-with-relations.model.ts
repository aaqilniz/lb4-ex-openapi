import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - AccountWithRelations
 * (tsType: AccountWithRelations, schemaOptions: { includeRelations: true })
 */
@model({name: 'AccountWithRelations'})
export class AccountWithRelations {
  constructor(data?: Partial<AccountWithRelations>) {
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
  type: 'number',
}})
  amount?: number;

}

export interface AccountWithRelationsRelations {
  // describe navigational properties here
}

export type AccountWithRelationsWithRelations = AccountWithRelations & AccountWithRelationsRelations;


