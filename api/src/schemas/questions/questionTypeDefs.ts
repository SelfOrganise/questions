import { gql } from "apollo-server-express";

export const bookTypeDefs = gql`
  type Question {
    id: Int
    content: String
    createdBy: Int
    createdAtUtc: String
  }

  type GameQuestion {
    id: Int
    content: String
    createdAtUtc: String
    createdByName: String
  }

  type AddQuestionsResult {
    questions: [Question]
  }

  type Query {
    questions(content: String): [Question]
    randomQuestion: GameQuestion
  }

  type Mutation {
    addQuestions(questions: [String!]): [Question]
    deleteQuestion(id: Int!): Boolean
  }
`;

export interface GameQuestion {
  id: number;
  content: string;
  createdAtUtc: string;
  createdByName: string;
}

export interface QuestionEntity {
  id: number;
  createdBy: number;
  content: string;
  createdAtUtc: string;
}
