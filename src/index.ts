import { ENV } from './env';
import * as express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';

console.log('Starting up!');
console.log(ENV);

const app = express();
app.use(cors());
app.use(BodyParser());

app.use('/healthy', async (req, res) => {
  res.send({
    message: 'Catalog GQL Healthy',
  });
});

import { server } from './GraphQL';
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: ENV.RUN_PORT }, () => {
  console.log(`product-gql listening at :${ENV.RUN_PORT}...`);
});
