import { gql, useMutation } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React, { useCallback } from 'react';
import { GET_QUESTIONS } from './Questions';
import { Question } from './types';

const DELETE_QUESTION = gql`
  mutation addQuestion($id: Int!) {
    deleteQuestion(id: $id)
  }
`;

export function QuestionRow({ question }: { question: Question }) {
  const [deleteQuestion, { loading }] = useMutation(DELETE_QUESTION);

  const handleDeleteClick = useCallback(async () => {
    await deleteQuestion({
      variables: { id: question.id }, update: (cache, { data }) => {
        if (data.deleteQuestion !== true) {
          return;
        }

        const existingQuestions: any = cache.readQuery({ query: GET_QUESTIONS }) || [];
        cache.writeQuery({
          query: GET_QUESTIONS,
          data: {
            questions: [...existingQuestions.questions.filter((q: Question) => q.id !== question.id)],
          }
        })
      }
    });
  }, [deleteQuestion, question.id])

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {question.id}
      </TableCell>
      <TableCell align="right">{question.content}</TableCell>
      <TableCell align="right">{question.createdAtUtc}</TableCell>
      <TableCell align="right">
        {loading ? <CircularProgress size="1em"/> : <Button onClick={handleDeleteClick}>Delete</Button>}
      </TableCell>
    </TableRow>
  )
}
