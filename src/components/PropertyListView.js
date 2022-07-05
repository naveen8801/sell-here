import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {},
  heading: {
    marginTop: '0.5rem',
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'white',
  },
});

function PropertyListView(props) {
  const { resultsCount } = props;
  const classes = useStyles();
  return <div>{resultsCount}</div>;
}

export default PropertyListView;
