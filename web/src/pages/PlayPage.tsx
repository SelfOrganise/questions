import { gql, useLazyQuery } from "@apollo/client";
import { Fade, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Centered } from "../components/Centered";
import { ErrorMessage } from "../components/PlayPage/ErrorMessage";
import { NoQuestionsLeft } from "../components/PlayPage/NoQuestionsLeft";
import { NotStarted } from "../components/PlayPage/NotStarted";
import { toRelativeTime } from "../utilities/time";

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

export function PlayPage() {
  const [getRandomQuestion, { data, loading, error, called }] = useLazyQuery(
    RANDOM_QUESTION,
    {
      fetchPolicy: "network-only",
    }
  );

  const question = data?.randomQuestion;
  const classes = useStyles();

  if (!called) {
    return <NotStarted onClick={getRandomQuestion} />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (called && !loading && !question) {
    return <NoQuestionsLeft />;
  }

  return (
    <Box paddingTop={4} paddingLeft={2} paddingRight={2}>
      {loading && (
        <Centered className={classes.paper} marginTop={0}>
          <CircularProgress />
        </Centered>
      )}
      {!loading && question && (
        <Grow timeout={1000} in={true}>
          <Fade timeout={1000} in={true}>
            <Paper className={classes.paper} elevation={4}>
              <Box
                height="100%"
                display="flex"
                flexDirection="column"
                flexGrow="1"
              >
                <Typography className={classes.date} variant="overline">
                  {toRelativeTime(question.createdAtUtc)} ago
                </Typography>
                <Box className={classes.questionContainer}>
                  <span className={classes.question}>{question.content}</span>
                </Box>
                <Typography className={classes.author} variant="caption">
                  {question.createdByName}
                </Typography>
              </Box>
            </Paper>
          </Fade>
        </Grow>
      )}
      {(loading || !error) && (
        <Button
          className={classes.nextQuestion}
          color="primary"
          disabled={loading}
          onClick={() => getRandomQuestion()}
        >
          📜 Next question
        </Button>
      )}
    </Box>
  );
}

const useStyles = makeStyles(() => ({
  nextQuestion: {
    marginTop: "15px",
    width: "100%",
  },
  paper: {
    padding: "20px",
    height: "60vh",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontFamily: "Indie Flower, cursive;",
    fontSize: "1.8rem",
  },
  questionContainer: {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
  },
  date: {
    display: "flex",
  },
  author: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
