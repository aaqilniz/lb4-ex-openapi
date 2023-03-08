import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenapiDataSource} from '../datasources';

import {LoopbackCount} from '../models/loopback-count.model';
import {Customer} from '../models/customer.model';
import {CustomerPartial} from '../models/customer-partial.model';
import {CustomerFilter} from '../models/customer-filter.model';
import {CustomerWithRelations} from '../models/customer-with-relations.model';
import {NewCustomer} from '../models/new-customer.model';
import {CustomerFilter1} from '../models/customer-filter1.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by CustomerController.
 */
export interface CustomerService {
  /**
   * @param where 
   * @returns Customer count
   */
  count(where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<LoopbackCount>;

  /**
   * @param id 
   * @param _requestBody
   */
  replaceById(id: number, _requestBody: Customer): Promise<unknown>;

  /**
   * @param id 
   * @param _requestBody
   */
  updateById(id: number, _requestBody: CustomerPartial): Promise<unknown>;

  /**
   * @param id 
   * @param filter 
   * @returns Customer instance
   */
  findById(id: number, filter: CustomerFilter | undefined): Promise<CustomerWithRelations>;

  /**
   * @param id 
   */
  deleteById(id: number): Promise<unknown>;

  /**
   * @param _requestBody
   * @returns Customer instance created
   */
  create(_requestBody: NewCustomer): Promise<Customer>;

  /**
   * @param where 
   * @param _requestBody
   * @returns Count of Customer models updated
   */
  updateAll(where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined, _requestBody: CustomerPartial): Promise<LoopbackCount>;

  /**
   * @param filter 
   * @returns Array of Customer instances
   */
  find(filter: CustomerFilter1 | undefined): Promise<CustomerWithRelations[]>;

}

export class CustomerServiceProvider implements Provider<CustomerService> {
  constructor(
    // openapi must match the name property in the datasource json file
    @inject('datasources.openapi')
    protected dataSource: OpenapiDataSource = new OpenapiDataSource(),
  ) {}

  async value(): Promise<CustomerService> {
    const service = await getService<{apis: {'CustomerController': CustomerService}}>(
      this.dataSource,
    );
    return service.apis['CustomerController'];
  }
}
