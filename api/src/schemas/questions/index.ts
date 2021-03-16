import { makeExecutableSchema } from 'apollo-server-express';
import { questionResolver } from './questionResolver';
import { bookTypeDefs } from './questionTypeDefs';

export const bookSchema = makeExecutableSchema({
  typeDefs: bookTypeDefs,
  resolvers: questionResolver,
})
