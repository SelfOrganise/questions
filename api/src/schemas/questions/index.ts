import { makeExecutableSchema } from 'apollo-server';
import { questionResolver } from './questionResolver';
import { bookTypeDefs } from './questionTypeDefs';

export const bookSchema = makeExecutableSchema({
  typeDefs: bookTypeDefs,
  resolvers: questionResolver,
})
