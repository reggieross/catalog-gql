"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductDao_1 = require("../ReadModel/Dao/ProductDao");
exports.resolvers = {
    Query: {
        getProducts: async (_, { input }, ctx) => {
            const products = await ProductDao_1.listProducts();
            console.log("here");
            return { products };
        }
    }
};
