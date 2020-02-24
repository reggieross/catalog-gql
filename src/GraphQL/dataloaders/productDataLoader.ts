import * as DataLoader from 'dataloader';
import {Product} from "../../types";

export const productDataLoader = (xToken: string) => {
    return new DataLoader(
      async (ids: string[]) => {
        const product: Product = {
          id: 'some-id',
          name: 'some-name',
          sale: false,
          brandId: 'some-brand-id'
        };
        return ids.map(id => product);
      },
      {
        maxBatchSize: 1000,
      }
    );
};