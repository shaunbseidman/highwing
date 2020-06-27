import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {makeStyles} from '@material-ui/core/styles';
import  '../styles/summary.scss';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    arrow: {
        color: 'red'
    }
  });

export default function BrokerTitle(props) {
    const classes = useStyles();
  return (
    <Container maxWidth="sm">
        <ArrowBackIcon className={classes.arrow}/>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div className="summary">
            <div className="summary-title">Summary</div>
            <div className="summary-description">{props.description}</div>
        </div>
    </Container>
  );
}
