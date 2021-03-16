import { gql } from 'apollo-server-express';

export const bookTypeDefs = gql`
  type Question {
    id: Int
    content: String
    createdBy: Int
    createdAtUtc: Int
  }

  type Query {
    questions(content: String): [Question]
  }

  type Mutation {
    addQuestion(content: String!): Question
    deleteQuestion(id: Int!): Boolean
  }
`;
