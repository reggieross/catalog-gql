import { getDB } from "./db";
import { ProductFilterInput } from "../../../GraphQL/generated/resolvers";
import { Dao, Product } from "../../../types";

interface ProductEntity {
  id: string;
  brand_id?: string;
  description?: string;
  name: string;
}

const list = async (where: ProductFilterInput): Promise<Product[]> => {
  const query = `SELECT * FROM product;`;
  const rows: ProductEntity[] = await getDB().any(query);
  return transform(rows);
};

const transform = (entities: ProductEntity[]): Product[] => {
  return entities.map<Product>(entity => {
    return {
      id: entity.id,
      name: entity.name,
      brandId: entity.brand_id
    };
  });
};

export const ProdactDao: Dao<Product, ProductFilterInput> = {
  list
};
