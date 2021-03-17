import { IResolverObject } from "apollo-server-express";
import {
  addQuestion,
  deleteQuestion,
  getQuestions,
} from "../../repository/questions";
import { Question } from "./data";

export const questionResolver = {
  Query: {
    questions: async (_: unknown, args: unknown, { currentUserId }) => {
      return await getQuestions(currentUserId);
    },
  },

  Mutation: {
    addQuestion: async (
      _: unknown,
      args: { content: string },
      { currentUserId }
    ) => {
      const newQuestion: Partial<Question> = {
        createdBy: currentUserId,
        content: args.content,
      };

      return await addQuestion(newQuestion);
    },

    deleteQuestion: async (
      _: unknown,
      args: { id: number },
      { currentUserId }
    ) => {
      return await deleteQuestion(args.id, currentUserId);
    },
  },
};
