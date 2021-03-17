import { gql, useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Centered } from "../components/Centered";

const RANDOM_QUESTION = gql`
  query getRandomQuestion {
    randomQuestion {
      id
      content
      createdAtUtc
    }
  }
`;

const useStyles = makeStyles(() => ({
  nextQuestion: {
    marginTop: "15px",
    width: "100%",
  },
}));

export function PlayPage() {
  const { data, loading, refetch, error } = useQuery(RANDOM_QUESTION, {
    notifyOnNetworkStatusChange: true,
  });
  const question = data?.randomQuestion;
  const classes = useStyles();
  return (
    <Box padding={5}>
      <Grow in={true}>
        <Card key={question?.id}>
          <CardHeader title={<Typography>test</Typography>} />
          <CardMedia>👍️</CardMedia>
          <CardContent>
            {loading && (
              <Centered marginTop={0}>
                <CircularProgress />
              </Centered>
            )}
            {!loading && !error && (
              <Box textAlign="center">
                {!question && <Typography>No questions left 😿</Typography>}
                {question && <Typography>{question.content}</Typography>}
              </Box>
            )}
            {error && <Typography color="error">{error.message}</Typography>}
          </CardContent>
        </Card>
      </Grow>
      {(loading || !error) && (
        <Button
          className={classes.nextQuestion}
          color="primary"
          disabled={loading}
          onClick={() => refetch()}
        >
          Next question
        </Button>
      )}
    </Box>
  );
}
