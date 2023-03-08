import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Account
 * Account
 */
@model({name: 'Account'})
export class Account {
  constructor(data?: Partial<Account>) {
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

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;


