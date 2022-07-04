import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainActivity from '../components/MainActivity';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '75%',
  },
  heading: {
    marginTop: '0.7rem',
    marginBottom: '0.7rem',
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'white',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h4">
        Search Properties To Rent Here.
      </Typography>
      <div className={classes.content}>
        <MainActivity />
      </div>
    </div>
  );
}

export default Home;
