import { gql, useQuery } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { QuestionRow } from './QuestionRow';
import { Question } from './types';

export const GET_QUESTIONS = gql`
  query {
    questions {
      id,
      content,
      createdBy,
      createdAtUtc
    }
  }
`;


export function Questions() {
  const { data, error, loading } = useQuery(GET_QUESTIONS);

  if (loading) {
    return <span>'Loading questions'</span>;
  }

  if (error) {
    return <span>'Error loading questions'</span>
  }

  if (data.questions?.length <= 0) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Question</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.questions.map((question: Question) => (<QuestionRow question={question} key={question.id}/>))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
