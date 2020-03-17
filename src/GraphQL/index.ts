import { ApolloServer, gql } from "apollo-server-express";

import { resolvers } from "./resolvers";
import { context } from "./context";
import * as fs from "fs";
import * as path from "path";
import { buildFederatedSchema } from "@apollo/federation";

const schema = fs.readFileSync(
  path.join(__dirname, "../../schema.graphql"),
  "utf8"
);
const typeDefs = gql`
  ${schema}
`;

export const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ]),
  context,
  introspection: true,
  playground: true
});
