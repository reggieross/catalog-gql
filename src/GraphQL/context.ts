import { productDataLoader } from './dataloaders/productDataLoader';
import {categoryDataLoader} from "./dataloaders/categoryDataLoader";

export type Context = ReturnType<typeof context>;

export const context = ({ req }) => {
  const token: string = req.headers['x-token'] || '';

  return {
    token,
    productDataLoader: productDataLoader(token),
    categoryDataLoader: categoryDataLoader(token),
  };
};
