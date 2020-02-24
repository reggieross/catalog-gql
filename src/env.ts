import { Environment } from './types';

export const ENV = {
  RUN_PORT: process.env.RUN_PORT || '5000',
  ENVIRONMENT: (process.env.ENVIRONMENT as Environment) || 'dev',
};