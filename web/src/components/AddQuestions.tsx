import { gql, useMutation } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useCallback, useState } from "react";
import { GET_QUESTIONS } from "./Questions";

const ADD_QUESTION = gql`
  mutation addQuestions($questions: [String!]) {
    addQuestions(questions: $questions) {
      id
      content
      createdAtUtc
      createdBy
    }
  }
`;

export function AddQuestions() {
  const [text, setText] = useState("");

  const [addQuestions, { error: submitError, loading }] = useMutation(
    ADD_QUESTION
  );

  const handleOnClick = useCallback(async () => {
    setText("");
    const questions = text.split("\n").filter((q) => q && q.length > 0);

    await addQuestions({
      variables: {
        questions,
      },
      optimisticResponse: {
        __typename: "Mutation",
        addQuestions: questions.map((text) => toOptimisticResponse(text)),
      },
      update: (cache, { data }) => {
        const query: any = cache.readQuery({ query: GET_QUESTIONS });
        cache.writeQuery({
          query: GET_QUESTIONS,
          data: { questions: [...data.addQuestions, ...query.questions] },
        });
      },
    });
  }, [addQuestions, text, setText]);

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        variant="outlined"
        multiline={true}
        rows={5}
        label="Type in a new question"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <Box marginTop="10px" display="flex" justifyContent="flex-end">
        <Button
          disabled={text.length === 0 || loading}
          variant="contained"
          color="primary"
          onClick={handleOnClick}
        >
          Add question
        </Button>
      </Box>
      <span>{submitError ? submitError.message : ""}</span>
    </Box>
  );
}

function toOptimisticResponse(text: string) {
  return {
    __typename: "Question",
    id: -Math.floor(Math.random() * 100000000),
    content: text,
    createdBy: -1,
    createdAtUtc: "",
  };
}
