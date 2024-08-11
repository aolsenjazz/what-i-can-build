import config from '../../ormconfig.mjs';
import { DataSource } from 'typeorm';

export const MysqlDataSource = new DataSource({
  ...config,
  type: 'mysql',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
});
