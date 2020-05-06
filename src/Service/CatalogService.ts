import { ProductRepository } from "./repository/ProductRepository";
import {Brand, Product} from "../types";
import {ProductsInput} from "../GraphQL/generated/resolvers";
import {BrandRepository} from "./repository/BrandRepository";

export interface CatalogService {

}

export class CatalogService {
  private productRepo: ProductRepository;
  private brandRepo: BrandRepository;
  constructor(userInfo: {}) {
    this.productRepo = ProductRepository;
    this.brandRepo = BrandRepository;
  }

  getProductsForUser = (where: ProductsInput): Promise<Product[]> => {
    return this.productRepo.getProductsForUser(where);
  };

  getBrands = (): Promise<Brand[]> => {
    return this.brandRepo.getBrands();
  };
}
