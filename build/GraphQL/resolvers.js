"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        getProducts: async (_, args, ctx) => {
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
            return { products };
        }
    },
    Product: {
        category: async (product, args, context) => {
            const category = await context.categoryDataLoader.load(product.id);
            return category;
        }
    }
};
