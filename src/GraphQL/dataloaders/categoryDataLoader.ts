import * as DataLoader from 'dataloader';
import {Category} from "../../types";

export const categoryDataLoader = (xToken: string) => {
  return new DataLoader(
    async (ids: string[]) => {
      const category: Category[] = [{
        id: 'some-id',
        name: 'some-name',
      }];
      return ids.map(id => category);
    },
    {
      maxBatchSize: 1000,
    }
  );
};