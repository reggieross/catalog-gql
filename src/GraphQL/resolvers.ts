import { Context } from './context';
import { Resolvers } from './generated/resolvers';

export const resolvers: Resolvers<Context> = {
  Query: {
    catalog: async (_, { input }, ctx) => {
      const products = await ctx.catalogService.getProductsForUser(input);
      return { products };
    },
  },
};
