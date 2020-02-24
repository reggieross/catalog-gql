import {Context} from "./context";
import {Resolvers} from "./generated/resolvers";

export const resolvers: Resolvers<Context> = {
  Query: {
    getProducts: async(_, args, ctx) => {
      const products = [
        {
          id: 'some-id',
          name: 'some-name',
          sale: false,
          brandId: 'some-brand-id'
        },
        {
          id: 'some-id',
          name: 'some-name',
          sale: false,
          brandId: 'some-brand-id'
        },
        {
          id: 'some-id',
          name: 'some-name',
          sale: false,
          brandId: 'some-brand-id'
        }
      ];
      return { products }
    }
  },
  Product: {
   category: async (product, args, context) => {
     return  await context.categoryDataLoader.load(product.id);
   }
  }
};