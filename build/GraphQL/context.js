"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productDataLoader_1 = require("./dataloaders/productDataLoader");
const categoryDataLoader_1 = require("./dataloaders/categoryDataLoader");
exports.context = ({ req }) => {
    const token = req.headers['x-token'] || '';
    return {
        token,
        productDataLoader: productDataLoader_1.productDataLoader(token),
        categoryDataLoader: categoryDataLoader_1.categoryDataLoader(token),
    };
};
