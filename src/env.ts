import { Environment } from "./types";

export const ENV = {
  RUN_PORT: process.env.RUN_PORT || "5000",
  ENVIRONMENT: (process.env.ENVIRONMENT as Environment) || "dev",
  POSTGRES_DATABASE_URL: `postgres://${process.env.POSTGRES_DATABASE_USER}:${process.env.POSTGRES_DATABASE_PW}@${process.env.POSTGRES_DATABASE_HOST_DEV}/catalog`
};
