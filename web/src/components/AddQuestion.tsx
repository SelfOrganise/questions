import { gql, useMutation } from '@apollo/client';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import React, { useCallback, useState } from 'react';
import { GET_QUESTIONS } from './Questions';

const ADD_QUESTION = gql`
  mutation addQuestion($content: String!) {
    addQuestion(content: $content) {
      id
    }
  }
`;

export function AddQuestion() {
  const [text, setText] = useState('');

  const [addQuestion, { error: submitError }] = useMutation(ADD_QUESTION);

  const handleOnClick = useCallback(async () => {
    await addQuestion({
      variables: {
        content: text
      },
      optimisticResponse: {
        addQuestion: {
          __type: 'Question',
          id: -1,
          content: text,
          createdBy: -1,
          createdAtUtc: 'unknown',
        }
      },
      update: (cache, { data }) => {
        const existingQuestions: any = cache.readQuery({ query: GET_QUESTIONS}) || [];
        cache.writeQuery({
          query: GET_QUESTIONS,
          data: {
            questions: [...existingQuestions.questions, data.addQuestion],
          }
        })
      }
    });

    setText('');
  }, [addQuestion, text, setText]);

  return (
    <Box>
      <TextField value={text} onChange={ev => setText(ev.target.value)}/>
      <Button color="primary" onClick={handleOnClick}>Add question</Button>
      <span>{submitError ? submitError.message : ''}</span>
    </Box>
  )
}
