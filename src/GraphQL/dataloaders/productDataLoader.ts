import * as DataLoader from "dataloader";
import { ProductService } from "../../Service/ProductService";

export const productDataLoader = (
  xToken: string,
  productService: ProductService
) => {
  return new DataLoader(
    async (ids: string[]) => {
      const products = await productService.getProductsForUser();
      return ids.map(id => products[id] || null);
    },
    {
      maxBatchSize: 1000
    }
  );
};
