import { Context } from "./context";
import { Resolvers } from "./generated/resolvers";

export const resolvers: Resolvers<Context> = {
  Query: {
    getProducts: async (_, { input }, ctx) => {
      console.log("here");
      const products = await ctx.productService.getProductsForUser();
      return { products };
    }
  }
};
