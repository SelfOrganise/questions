import { ForbiddenError } from 'apollo-server-express';
import { addQuestions, deleteQuestion, getQuestions, getRandomQuestion, } from '../../repository/questions';

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
    addQuestions: async (
      _: never,
      args: { questions: Array<string> },
      { currentUserId }
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
      { currentUserId }
    ) => {
      return await deleteQuestion(args.id, currentUserId);
    },
  },
};
