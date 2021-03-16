import { makeExecutableSchema } from 'apollo-server';
import { personResolvers } from './personResolver';
import { personTypeDefs } from './personTypeDefs';

export const personSchema = makeExecutableSchema({
  typeDefs: personTypeDefs,
  resolvers: personResolvers,
})
