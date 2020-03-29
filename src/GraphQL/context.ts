import { productDataLoader } from './dataloaders/productDataLoader';
import { categoryDataLoader } from './dataloaders/categoryDataLoader';
import { ProductService } from '../Service/ProductService';
import {parse} from "cookie";

export type Context = ReturnType<typeof context>;

export const context = ({ req }) => {
  const token = parse(req.headers.cookie || '')['accessToken'] || '';

   //TODO use middleWare to add user data to request
  const userInfo = {}
  const productService = new ProductService(userInfo);

  return {
    token,
    productDataLoader: productDataLoader(token, productService),
    categoryDataLoader: categoryDataLoader(token),
    productService,
  };
};
