import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { schema } from './schemas';

const app = express();
const server = new ApolloServer({ schema, tracing: process.env.NODE_ENV !== 'production' });
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
