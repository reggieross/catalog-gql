import { Product, Repository } from "../../types";
import { ProdactDao } from "./dao/ProductDao";

export interface ProductRepository extends Repository {
  getProductsForUser: () => Promise<Product[]>;
}

const getProductsForUser = async () => {
  return ProdactDao.list({});
};

export const ProductRepository: ProductRepository = {
  getProductsForUser
};
