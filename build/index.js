"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const express = require("express");
const cors = require("cors");
const BodyParser = require("body-parser");
//this is a total hack, but it's a simple way to get visibility into logs of this service while debugging deployment
//we should figure out a better solution to this problem.
const logs = [];
var ogLog = console.log;
console.log = function () {
    if (logs.length > 100) {
        logs.shift();
    }
    logs.push(arguments);
    ogLog.apply(this, arguments);
};
console.log('starting up!');
console.log(env_1.ENV);
const app = express();
app.use(cors());
app.use(BodyParser());
app.use('/healthy', async (req, res) => {
    res.send({
        message: 'we up',
    });
});
const GraphQL_1 = require("./GraphQL");
GraphQL_1.server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: env_1.ENV.RUN_PORT }, () => {
    console.log(`product-gql listening at :${env_1.ENV.RUN_PORT}...`);
});
