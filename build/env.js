"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = {
    RUN_PORT: process.env.RUN_PORT || '5000',
    ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
    POSTGRES_DATABASE_URL: `postgres://rross:2019Ianyfm@marketplace-catalog-dev.cjfkccsro3vy.us-east-1.rds.amazonaws.com/productCatalog`
};
