import { ProductRepository } from "./repository/ProductRepository";

export interface ProductService {

}

export class ProductService {
  private repo: ProductRepository;
  constructor(userInfo: {}) {
    this.repo = ProductRepository;
  }

  getProductsForUser = async () => {
    return this.repo.getProductsForUser();
  };
}
