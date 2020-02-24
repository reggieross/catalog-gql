"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader = require("dataloader");
exports.productDataLoader = (xToken) => {
    return new DataLoader(async (ids) => {
        const product = {
            id: 'some-id',
            name: 'some-name',
            sale: false,
            brandId: 'some-brand-id'
        };
        return ids.map(id => product);
    }, {
        maxBatchSize: 1000,
    });
};
