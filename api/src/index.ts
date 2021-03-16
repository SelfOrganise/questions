import { ApolloServer, ServerInfo } from 'apollo-server';
import { schema } from './schemas';

const server = new ApolloServer({ schema, tracing: process.env.NODE_ENV !== 'production' });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
});
