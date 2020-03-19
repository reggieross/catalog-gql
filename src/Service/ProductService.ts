import { ProductRepository } from "./repository/ProductRepository";
import {Product} from "../types";

export interface ProductService {

}

export class ProductService {
  private repo: ProductRepository;
  constructor(userInfo: {}) {
    this.repo = ProductRepository;
  }

  getProductsForUser = (): Promise<Product[]> => {
    return this.repo.getProductsForUser();
  };
}
