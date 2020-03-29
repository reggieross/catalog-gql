import { ProductRepository } from "./repository/ProductRepository";
import {Product} from "../types";

export interface CatalogService {

}

export class CatalogService {
  private repo: ProductRepository;
  constructor(userInfo: {}) {
    this.repo = ProductRepository;
  }

  getProductsForUser = (): Promise<Product[]> => {
    return this.repo.getProductsForUser();
  };
}
