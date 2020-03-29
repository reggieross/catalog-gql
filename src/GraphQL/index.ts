import { ApolloServer, gql } from 'apollo-server-express';

import { resolvers } from './resolvers';
import { context } from './context';
import * as fs from 'fs';
import * as path from 'path';
import { buildFederatedSchema } from '@apollo/federation';
import { AuthDirective } from './AuthDirective';
import { SchemaDirectiveVisitor } from 'apollo-server';

const schema = fs.readFileSync(
  path.join(__dirname, '../../schema.graphql'),
  'utf8'
);
const typeDefs = gql`
  ${schema}
`;

const directives = {
  auth: AuthDirective,
};

let federatedSchema = buildFederatedSchema([
  {
    typeDefs,
    resolvers,
  },
]);

SchemaDirectiveVisitor.visitSchemaDirectives(federatedSchema, directives);

export const server = new ApolloServer({
  schema: federatedSchema,
  context,
  introspection: true,
  playground: true,
});
