"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader = require("dataloader");
const ProductDao_1 = require("../../ReadModel/Dao/ProductDao");
exports.productDataLoader = (xToken) => {
    return new DataLoader(async (ids) => {
        const products = await ProductDao_1.listProducts();
        return ids.map(id => products[id] || null);
    }, {
        maxBatchSize: 1000,
    });
};
