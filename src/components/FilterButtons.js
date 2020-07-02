import React from 'react';
import Button from '@material-ui/core/Button';

export default function FilterButtons(props) {
  return (
    <Button
        onClick={props.onClick}
        className={props.className}
        variant={props.variant}>
        {props.title}
    </Button>
  );
}
