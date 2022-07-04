import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '900',
    color: 'white',
    margin: '1rem 1rem 1rem 2rem',
  },
  span: {
    fontFamily: 'Inter',
    fontWeight: '900',
    color: '#5658dd',
  },
  subText: {
    margin: 0,
    fontFamily: 'Inter',
    fontWight: '600',
    margin: '1rem 2rem 1rem 1rem',
    color: '#909ca5',
    '&:hover': {
      color: 'white',
      cursor: 'pointer',
    },
  },
  selectedLink: {
    margin: 0,
    fontFamily: 'Inter',
    fontWight: '600',
    margin: '1rem 2rem 1rem 1rem',
    color: 'white',
    borderBottom: 'solid 1px #5658dd',
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    displayDirection: 'row',
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Sell<span className={classes.span}>here</span>
      </Typography>
      <div className={classes.flexBox}>
        <Typography className={classes.selectedLink} variant="h6">
          Rent
        </Typography>
        <Typography className={classes.subText} variant="h6">
          Sell
        </Typography>
        <Typography className={classes.subText} variant="h6">
          Buy
        </Typography>
        <Typography className={classes.subText} variant="h6">
          Manage Property
        </Typography>
        <Typography className={classes.subText} variant="h6">
          Resources
        </Typography>
      </div>
    </div>
  );
}

export default NavBar;
