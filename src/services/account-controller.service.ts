import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenapiDataSource} from '../datasources';

import {LoopbackCount} from '../models/loopback-count.model';
import {Account} from '../models/account.model';
import {AccountPartial} from '../models/account-partial.model';
import {AccountFilter} from '../models/account-filter.model';
import {AccountWithRelations} from '../models/account-with-relations.model';
import {NewAccount} from '../models/new-account.model';
import {AccountFilter1} from '../models/account-filter1.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by AccountController.
 */
export interface AccountService {
  /**
   * @param where 
   * @returns Account count
   */
  count(where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<LoopbackCount>;

  /**
   * @param id 
   * @param _requestBody
   */
  replaceById(id: number, _requestBody: Account): Promise<unknown>;

  /**
   * @param id 
   * @param _requestBody
   */
  updateById(id: number, _requestBody: AccountPartial): Promise<unknown>;

  /**
   * @param id 
   * @param filter 
   * @returns Account instance
   */
  findById(id: number, filter: AccountFilter | undefined): Promise<AccountWithRelations>;

  /**
   * @param id 
   */
  deleteById(id: number): Promise<unknown>;

  /**
   * @param _requestBody
   * @returns Account instance created
   */
  create(_requestBody: NewAccount): Promise<Account>;

  /**
   * @param where 
   * @param _requestBody
   * @returns Count of Account models updated
   */
  updateAll(where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined, _requestBody: AccountPartial): Promise<LoopbackCount>;

  /**
   * @param filter 
   * @returns Array of Account instances
   */
  find(filter: AccountFilter1 | undefined): Promise<AccountWithRelations[]>;

}

export class AccountServiceProvider implements Provider<AccountService> {
  constructor(
    // openapi must match the name property in the datasource json file
    @inject('datasources.openapi')
    protected dataSource: OpenapiDataSource = new OpenapiDataSource(),
  ) {}

  async value(): Promise<AccountService> {
    const service = await getService<{apis: {'AccountController': AccountService}}>(
      this.dataSource,
    );
    return service.apis['AccountController'];
  }
}
