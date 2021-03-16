import { gql } from 'apollo-server-express';

export const personTypeDefs = gql`
    type Person {
        name: String
        age: Int
    }

    type Query {
        persons(name: String, age: Int): [Person]
    }
`;
