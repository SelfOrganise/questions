import { gql, useMutation } from "@apollo/client";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React, { useCallback } from "react";
import { Centered } from "./Centered";
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

        const existingQuestions: any =
          cache.readQuery({ query: GET_QUESTIONS }) || [];
        cache.writeQuery({
          query: GET_QUESTIONS,
          data: {
            questions: [
              ...existingQuestions.questions.filter(
                (q: Question) => q.id !== question.id
              ),
            ],
          },
        });
      },
    });
  }, [deleteQuestion, question.id]);

  return (
    <TableRow>
      <TableCell align="left">{question.content}</TableCell>
      <TableCell align="right">
        {loading ? (
          <Centered>
            <CircularProgress size="1em" />
          </Centered>
        ) : (
          <IconButton onClick={handleDeleteClick}>
            <DeleteOutlinedIcon />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
}
