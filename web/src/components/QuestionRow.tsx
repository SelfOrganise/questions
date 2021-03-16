import { gql, useMutation } from "@apollo/client";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React, { useCallback } from "react";
import { GET_QUESTIONS } from "./Questions";
import { Question } from "./types";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

const DELETE_QUESTION = gql`
  mutation addQuestion($id: Int!) {
    deleteQuestion(id: $id)
  }
`;

export function QuestionRow({ question }: { question: Question }) {
  const [deleteQuestion, { loading }] = useMutation(DELETE_QUESTION);

  const handleDeleteClick = useCallback(async () => {
    await deleteQuestion({
      variables: { id: question.id },
      update: (cache, { data }) => {
        if (data.deleteQuestion !== true) {
          return;
        }

        const getQuestionsQuery: any =
          cache.readQuery({ query: GET_QUESTIONS }) || [];

        if (!getQuestionsQuery.questions) {
          return;
        }

        cache.writeQuery({
          query: GET_QUESTIONS,
          data: {
            questions: [
              ...getQuestionsQuery.questions.filter(
                (q: Question) => q.id !== question.id
              ),
            ],
          },
        });
      },
    });
  }, [deleteQuestion, question.id]);

  const canDelete = !loading && question.id >= 0;

  return (
    <TableRow>
      <TableCell align="left">{question.content}</TableCell>
      <TableCell align="right">
        <IconButton disabled={!canDelete} onClick={handleDeleteClick}>
          {canDelete ? <DeleteOutlinedIcon /> : <CircularProgress size="1em" />}
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
