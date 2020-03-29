import { Context } from "./context";
import { Resolvers } from "./generated/resolvers";

export const resolvers: Resolvers<Context> = {
  Query: {
    getProducts: async (_, { input }, ctx) => {
      const products = await ctx.catalogService.getProductsForUser();
      return { products };
    }
  }
};
