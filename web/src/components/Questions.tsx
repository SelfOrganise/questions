import { gql, useQuery } from "@apollo/client";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Centered } from "./Centered";
import { QuestionRow } from "./QuestionRow";
import { Question } from "./types";

export const GET_QUESTIONS = gql`
  query getQuestions {
    questions {
      id
      content
      createdBy
      createdAtUtc
    }
  }
`;

export function Questions() {
  const { data, error, loading } = useQuery(GET_QUESTIONS);

  if (loading || data == null) {
    return (
      <Centered>
        <Typography variant="body1">Loading questions</Typography>
      </Centered>
    );
  }

  if (error) {
    return (
      <Centered>
        <Typography variant="body1">Error loading questions</Typography>
      </Centered>
    );
  }

  if (data.questions?.length <= 0) {
    return (
      <Centered>
        <Typography variant="body1">No questions added</Typography>
      </Centered>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Question</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.questions.map((question: Question) => (
            <QuestionRow question={question} key={question.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
