import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {
    width: '75%',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}></div>
    </div>
  );
}

export default Home;
