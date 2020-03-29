import { ENV } from './env';
import * as express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';
import { server } from './GraphQL';
import { authentication } from './middleware/authentication';

console.log('Starting up!');

const app = express();
app.use(cors());
app.use(BodyParser());

app.use(authentication);

app.use('/healthy', async (req, res) => {
  res.send({
    message: 'Catalog GQL Healthy',
  });
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: ENV.RUN_PORT }, () => {
  console.log(`catalog-gql listening at :${ENV.RUN_PORT}...`);
});
