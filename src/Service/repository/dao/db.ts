import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';
import { ENV } from '../../../env';

const pgp: IMain = pgPromise({
  // Initialization Options
});

export const getDB = (): IDatabase<any> => {
  return pgp(ENV.POSTGRES_DATABASE_URL);
};
