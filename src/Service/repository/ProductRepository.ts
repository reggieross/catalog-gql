import { Product, Repository } from "../../types";
import { ProductDao } from "./dao/ProductDao";

export interface ProductRepository extends Repository {
  getProductsForUser: () => Promise<Product[]>;
}

const getProductsForUser = async () => {
  return ProductDao.list({});
};

export const ProductRepository: ProductRepository = {
  getProductsForUser
};
