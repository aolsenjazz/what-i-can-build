import morgan from 'morgan';
import { logger } from '../logger';

const format = `{
  "httpMethod": ":method",
  "requestUrl": ":url",
  "responseStatus": ":status",
  "responseTime": ":response-time ms"
}`;

const messageHandler = (message: string) => {
  logger.info(`HTTP request received`, JSON.parse(message.trim()));
};

export const morganMiddlware = morgan(format, { stream: { write: messageHandler } });
