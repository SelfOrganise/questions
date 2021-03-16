import {
  addQuestion,
  deleteQuestion,
  getQuestions,
} from "../../repository/questions";
import { Question } from "./data";

export const questionResolver = {
  Query: {
    questions: async (_: unknown, args: { content: string }) => {
      return await getQuestions();
    },
  },

  Mutation: {
    addQuestion: async (_: unknown, args: { content: string }) => {
      const newQuestion: Partial<Question> = {
        createdBy: 1,
        content: args.content,
      };

      return await addQuestion(newQuestion);
    },

    deleteQuestion: async (_: unknown, args: { id: number }) => {
      return await deleteQuestion(args.id);
    },
  },
};
