import { makeExecutableSchema } from "apollo-server-express";
import { personResolvers } from "./personResolver";
import { personTypeDefs } from "./personTypeDefs";

export const personSchema = makeExecutableSchema({
  typeDefs: personTypeDefs,
  resolvers: personResolvers,
});
