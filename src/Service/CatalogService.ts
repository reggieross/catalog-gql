import { ProductRepository } from "./repository/ProductRepository";
import {Product} from "../types";
import {ProductsInput} from "../GraphQL/generated/resolvers";

export interface CatalogService {

}

export class CatalogService {
  private repo: ProductRepository;
  constructor(userInfo: {}) {
    this.repo = ProductRepository;
  }

  getProductsForUser = (where: ProductsInput): Promise<Product[]> => {
    return this.repo.getProductsForUser(where);
  };
}
