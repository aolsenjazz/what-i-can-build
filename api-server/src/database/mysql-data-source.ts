import { DataSource } from 'typeorm';

export default new DataSource({
  // Connection details
  type: 'mysql',
  port: Number(process.env.DB_PORT) || 3307,
  username: process.env.DB_USER || 'default',
  password: process.env.DB_PASSWORD || 'default',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'main',

  // TypeORM files
  entities: ['src/database/entities/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  subscribers: ['src/database/subscribers/**/*.ts'],

  // Other
  synchronize: false,
  logging: false,
});
