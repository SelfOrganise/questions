import { persons } from './data';

export interface Args {
  name: string,
  age: number
}

export const personResolvers = {
  Query: {
    persons: (_: unknown, { name, age }: Args) => {
      return persons
        .filter(b => name ? b.name.includes(name) : true)
        .filter(b => age ? b.age >= age : true);
    },
  },
};
