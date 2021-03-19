import { gql, useQuery } from "@apollo/client";
import { TablePagination } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
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

const rowsPerPage = 5;

export function Questions() {
  const { data, error, loading } = useQuery(GET_QUESTIONS);
  const [page, setPage] = useState(0);
  const classes = useStyles();

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
    <TableContainer className={classes.container} component={Paper}>
      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        count={data.questions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(_, newPage) => setPage(newPage)}
      />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Question</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.questions
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((question: Question) => (
              <QuestionRow question={question} key={question.id} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "10px",
  },
}));
