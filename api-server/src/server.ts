import 'reflect-metadata';
import express from 'express';

import { logger } from './logger';

import AppDataSource from './database';
import { UserRepository } from './repository/user-repository';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const users = await UserRepository.find();

  res.json(users);
});

(async () => {
  await AppDataSource.initialize();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`api-server is now running on port ${PORT}`);
  });
})();
