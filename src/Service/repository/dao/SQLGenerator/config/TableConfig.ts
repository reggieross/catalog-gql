export interface Table {
  name: string;
  propertyMapping: Record<string, string>;
}

export type TableConfig = {
  product: Table;
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
};
