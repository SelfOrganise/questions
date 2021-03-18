import { gql, useLazyQuery } from "@apollo/client";
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
      createdByName
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
  const [getRandomQuestion, { data, loading, error, called }] = useLazyQuery(
    RANDOM_QUESTION,
    {
      fetchPolicy: "network-only",
    }
  );

  const question = data?.randomQuestion;
  const classes = useStyles();
  return (
    <Box padding={5}>
      <Grow in={true}>
        <Card key={question?.id}>
          <CardHeader
            title={<Typography>{question?.createdByName}</Typography>}
          />
          <CardMedia>👍️</CardMedia>
          <CardContent>
            {loading && (
              <Centered marginTop={0}>
                <CircularProgress />
              </Centered>
            )}
            {!loading && !error && (
              <Box textAlign="center">
                {called && !question && (
                  <Typography>No questions left 😿</Typography>
                )}
                {question && <Typography>{question.content}</Typography>}
                {!called && (
                  <Typography>
                    Start by pressing the 'Next question' button
                  </Typography>
                )}
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
          onClick={() => getRandomQuestion()}
        >
          ⏩ Next question
        </Button>
      )}
    </Box>
  );
}
