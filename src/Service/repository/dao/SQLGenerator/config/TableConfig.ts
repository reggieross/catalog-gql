export interface Table {
  name: string;
  propertyMapping: Record<string, string>;
}

export type TableConfig = {
  product: Table;
  brand: Table;
};

export const Tables: TableConfig = {
  product: {
    name: 'product',
    propertyMapping: {
      id: 'id',
      brandId: 'brand_id',
      name: 'name',
    },
  },
  brand: {
    name: 'brand',
    propertyMapping: {
      id: 'id',
      name: 'name',
    },
  },
};
