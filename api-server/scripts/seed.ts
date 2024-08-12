/**
 * Inserts seed data in the local development database.
 */
import 'reflect-metadata';
import AppDataSource from '../src/database';

import { Location } from '../src/database/entities/Location';
import { Owner } from '../src/database/entities/Owner';
import { User } from '../src/database/entities/User';
import { Device } from '../src/database/entities/Device';
import { Metrics } from '../src/database/entities/Metrics';
import { Event } from '../src/database/entities/Event';
import { MaintenanceLog } from '../src/database/entities/MaintenanceLog';
import { DeviceConfiguration } from '../src/database/entities/DeviceConfiguration';

import locations from './seed-data/locations-data.json';
import owners from './seed-data/owners-data.json';
import users from './seed-data/users-data.json';
import devices from './seed-data/devices-data.json';
import metrics from './seed-data/metrics-data.json';
import events from './seed-data/event-data.json';
import maintenanceLogs from './seed-data/maintenance-logs-data.json';
import deviceConfigurations from './seed-data/devices-configuration-data.json';

async function seed() {
  console.log('hello');
  await AppDataSource.initialize();
  await AppDataSource.runMigrations();

  const locationRepository = AppDataSource.getRepository(Location);
  const ownerRepository = AppDataSource.getRepository(Owner);
  const userRepository = AppDataSource.getRepository(User);
  const deviceRepository = AppDataSource.getRepository(Device);
  const metricsRepository = AppDataSource.getRepository(Metrics);
  const eventsRepository = AppDataSource.getRepository(Event);
  const maintenanceLogRepository = AppDataSource.getRepository(MaintenanceLog);
  const deviceConfigurationRepository = AppDataSource.getRepository(DeviceConfiguration);

  // Insert locations
  await locationRepository.save(locations);

  // Insert owners
  await ownerRepository.save(owners as Owner[]);

  // Insert users
  await userRepository.save(users as User[]);

  // Insert devices
  await deviceRepository.save(devices as unknown as Device[]);

  // Insert metrics
  await metricsRepository.save(metrics);

  // Insert events
  await eventsRepository.save(events as unknown as Event[]);

  // Insert maintenance logs
  await maintenanceLogRepository.save(maintenanceLogs as unknown as MaintenanceLog);

  // Insert device configurations
  await deviceConfigurationRepository.save(deviceConfigurations);

  await AppDataSource.destroy();

  console.log('Successfully seeded data and closed database connection');
}

seed().catch((error) => console.log('Error seeding data:', error));
