/**
 * Exports the currently-configured `DataSource` as the default `DataSource`
 */

import { MysqlDataSource } from './mysql-data-source';
export const AppDataSource = MysqlDataSource;
