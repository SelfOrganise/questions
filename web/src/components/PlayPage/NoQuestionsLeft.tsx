import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Centered } from '../Centered';

export function NoQuestionsLeft() {
  return (
    <Centered>
      <Typography>You have completed all questions.</Typography>
    </Centered>
  );
}
