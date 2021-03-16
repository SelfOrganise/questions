import { gql } from 'apollo-server';

export const bookTypeDefs = gql`
  type Question {
    id: Int
    content: String
    createdBy: Int
    createdAtUtc: String
  }

  type Query {
    questions(content: String): [Question]
  }

  type Mutation {
    addQuestion(content: String!): Question
    deleteQuestion(id: Int!): Boolean
  }
`;
