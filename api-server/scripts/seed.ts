/**
 * Inserts seed data in the local development database.
 */

import { AppDataSource } from '../src/database';

async function seed() {
  await AppDataSource.initialize();
  await AppDataSource.destroy();

  console.log('successfully opened and closed database connection');
}

seed().catch((error) => console.log('Error seeding data:', error));
