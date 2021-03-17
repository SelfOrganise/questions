import { ForbiddenError } from "apollo-server-express";
import {
  addQuestion,
  deleteQuestion,
  getQuestions,
  getRandomQuestion,
} from "../../repository/questions";
import { QuestionEntity } from "./questionTypeDefs";

export const questionResolver = {
  Query: {
    questions: async (_: never, args: never, { currentUserId }) => {
      return await getQuestions(currentUserId);
    },

    randomQuestion: async (parent: never, args: never, context: any) => {
      if (!context.user.permissions.includes("start:questions")) {
        throw new ForbiddenError("You do not have permissions to access this");
      }

      return await getRandomQuestion();
    },
  },

  Mutation: {
    addQuestion: async (
      _: never,
      args: { content: string },
      { currentUserId }
    ) => {
      const newQuestion: Partial<QuestionEntity> = {
        createdBy: currentUserId,
        content: args.content,
      };

      return await addQuestion(newQuestion);
    },

    deleteQuestion: async (
      _: never,
      args: { id: number },
      { currentUserId }
    ) => {
      return await deleteQuestion(args.id, currentUserId);
    },
  },
};
