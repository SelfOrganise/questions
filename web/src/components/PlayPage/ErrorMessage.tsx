import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Centered } from '../Centered';

export function ErrorMessage({ message }: { message: string }) {
  return (
    <Centered>
      <Typography color="error">🛑 {message}. Sorry 😿.</Typography>
    </Centered>
  );
}
