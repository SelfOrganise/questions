import Button from '@material-ui/core/Button';
import React from 'react';
import { Centered } from '../Centered';

export function NotStarted({ onClick }: { onClick: () => void }) {
  return (
    <Centered>
      <Button variant="contained" onClick={onClick}>
        Start
      </Button>
    </Centered>
  );
}
