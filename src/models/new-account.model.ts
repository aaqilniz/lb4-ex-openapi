import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewAccount
 * (tsType: Omit<Account, 'id'>, schemaOptions: { title: 'NewAccount', exclude:
[ 'id' ] })
 */
@model({name: 'NewAccount'})
export class NewAccount {
  constructor(data?: Partial<NewAccount>) {
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
  amount?: number;

}

export interface NewAccountRelations {
  // describe navigational properties here
}

export type NewAccountWithRelations = NewAccount & NewAccountRelations;


