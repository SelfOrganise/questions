import { mergeSchemas } from 'apollo-server';
import { bookSchema } from './questions';
import { personSchema } from './persons';

export const schema = mergeSchemas({
  schemas: [bookSchema, personSchema]
})
