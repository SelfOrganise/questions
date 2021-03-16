import { bookSchema } from "./questions";
import { personSchema } from "./persons";
import { mergeSchemas } from "apollo-server-express";

export const schema = mergeSchemas({
  schemas: [bookSchema, personSchema],
});
