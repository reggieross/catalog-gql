"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const resolvers_1 = require("./resolvers");
const context_1 = require("./context");
const fs = require("fs");
const path = require("path");
const schema = fs.readFileSync(path.join(__dirname, "../../schema.graphql"), "utf8");
const typeDefs = apollo_server_express_1.gql `
  ${schema}
`;
exports.server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.resolvers,
    context: context_1.context,
    introspection: true,
    playground: true
});
