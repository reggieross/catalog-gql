import { ENV } from './env';
import * as express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';

//this is a total hack, but it's a simple way to get visibility into logs of this service while debugging deployment
//we should figure out a better solution to this problem.
const logs: any[] = [];
var ogLog = console.log;
console.log = function() {
  if (logs.length > 100) {
    logs.shift();
  }
  logs.push(arguments);

  ogLog.apply(this, arguments);
};

console.log('starting up!');
console.log(ENV);

const app = express();
app.use(cors());

app.use(BodyParser());

app.use('/healthy', async (req, res) => {
  res.send({
    message: 'we up',
  });
});

import { server } from './GraphQL';
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: ENV.RUN_PORT }, () => {
  console.log(`product-gql listening at :${ENV.RUN_PORT}...`);
});
