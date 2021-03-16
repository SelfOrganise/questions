import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { withAuth0 } from "@auth0/auth0-react";
import { WithAuth0Props } from "@auth0/auth0-react/dist/with-auth0";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useBearerToken } from "../utilities/useBearerToken";
import { Centered } from "./Centered";
import { QuestionRow } from "./QuestionRow";
import { Question } from "./types";

export const GET_QUESTIONS = gql`
  query questions {
    questions {
      id
      content
      createdBy
      createdAtUtc
    }
  }
`;

export function Questions() {
  const bearerToken = useBearerToken();
  const [getQuestions, { data, error, loading }] = useLazyQuery(GET_QUESTIONS, {
    context: {
      headers: {
        Authorization: bearerToken,
      },
    },
  });

  useEffect(() => {
    if (bearerToken != null) {
      getQuestions();
    }
  }, [bearerToken]);

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
