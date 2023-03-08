import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - loopback.Count
 * loopback.Count
 */
@model({name: 'loopback.Count'})
export class LoopbackCount {
  constructor(data?: Partial<LoopbackCount>) {
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
  count?: number;

}

export interface LoopbackCountRelations {
  // describe navigational properties here
}

export type LoopbackCountWithRelations = LoopbackCount & LoopbackCountRelations;


