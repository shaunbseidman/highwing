import React from 'react';
import Container from '@material-ui/core/Container';

export default function ChartItem(props) {
  return (
    <Container>
        <div>{props.title}</div>
        <div>{props.premium}</div>
        <div>{props.proportion}</div>
    </Container>
  );
}
