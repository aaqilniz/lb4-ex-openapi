import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - AccountPartial
 * (tsType: Partial<Account>, schemaOptions: { partial: true })
 */
@model({name: 'AccountPartial'})
export class AccountPartial {
  constructor(data?: Partial<AccountPartial>) {
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

export interface AccountPartialRelations {
  // describe navigational properties here
}

export type AccountPartialWithRelations = AccountPartial & AccountPartialRelations;


