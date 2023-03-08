import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenapiDataSource} from '../datasources';

import {PingResponse} from '../models/ping-response.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by PingController.
 */
export interface PingService {
  /**
   * @returns Ping Response
   */
  ping(): Promise<PingResponse>;

}

export class PingServiceProvider implements Provider<PingService> {
  constructor(
    // openapi must match the name property in the datasource json file
    @inject('datasources.openapi')
    protected dataSource: OpenapiDataSource = new OpenapiDataSource(),
  ) {}

  async value(): Promise<PingService> {
    const service = await getService<{apis: {'PingController': PingService}}>(
      this.dataSource,
    );
    return service.apis['PingController'];
  }
}
