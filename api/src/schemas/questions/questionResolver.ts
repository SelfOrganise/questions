import { ForbiddenError } from "apollo-server-express";
import {
  addQuestions,
  completeQuestion,
  deleteQuestion,
  getQuestions,
  getRandomQuestion,
} from "../../repository/questions";

export const questionResolver = {
  Query: {
    questions: async (_: never, args: never, { currentUserId }: any) => {
      return await getQuestions(currentUserId);
    },

    randomQuestion: async (
      parent: never,
      args: { lastCompletedQuestionId?: number },
      { user, currentUserId }: any
    ) => {
      if (!user.permissions.includes("start:questions")) {
        throw new ForbiddenError("You do not have permissions to access this");
      }

      if (args?.lastCompletedQuestionId) {
        await completeQuestion(currentUserId, args.lastCompletedQuestionId);
      }

      return await getRandomQuestion();
    },
  },

  Mutation: {
    addQuestions: async (
      _: never,
      args: { questions: Array<string> },
      { currentUserId }: any
    ) => {
      const newQuestions = args.questions.map((q) => ({
        createdBy: currentUserId,
        content: q,
      }));

      return await addQuestions(newQuestions);
    },

    deleteQuestion: async (
      _: never,
      args: { id: number },
      { currentUserId } : any
    ) => {
      return await deleteQuestion(args.id, currentUserId);
    },
  },
};
