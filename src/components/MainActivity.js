import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FilterBar from './FilterBar';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '1rem',
  },
  content: {},
  heading: {
    marginTop: '0.5rem',
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'white',
  },
});

function MainActivity() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FilterBar />
    </div>
  );
}

export default MainActivity;
