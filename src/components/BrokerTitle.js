import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {makeStyles} from '@material-ui/core/styles';
import  '../styles/broker.scss';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    arrow: {
        color: 'rgb(99, 217, 193)'
    }
  });

export default function BrokerTitle(props) {
    const classes = useStyles();
  return (
    <div className="brokerInfo">
        <ArrowBackIcon className={classes.arrow}/>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div className="summary">
            <div className="summary-title">Summary</div>
            <div className="summary-description">{props.description}</div>
        </div>
    </div>
  );
}
