import { Context } from './context';
import { ProductResponse, Resolvers } from './generated/resolvers';

export const resolvers: Resolvers<Context> = {
  Query: {
    catalog: async (_, {}, ctx) => {
      return {} as ProductResponse;
    },
  },
  ProductResponse: {
    filters: async (_, {}, ctx) => {
      const brand = await ctx.catalogService.getBrands();
      return { brand };
    },
    products: async (prev, { input }, ctx) => {
      const products = await ctx.catalogService.getProductsForUser(input);
      return products;
    },
  },
};
