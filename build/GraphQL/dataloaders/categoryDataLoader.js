"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader = require("dataloader");
exports.categoryDataLoader = (xToken) => {
    return new DataLoader(async (ids) => {
        const category = [{
                id: 'some-id',
                name: 'some-name',
            }];
        return ids.map(id => category);
    }, {
        maxBatchSize: 1000,
    });
};
