import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0.5rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  subtext: {
    fontFamily: 'Inter',
    fontWeight: '500',
    color: 'white',
    fontSize: '15px',
  },
  btn: {
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: '700',
    backgroundColor: '#5658dd',
    fontSize: '11px',
    '&:hover': {
      backgroundColor: '#5658dd',
    },
    marginLeft: '0.5rem',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '40px',
  },
});

function PropertyListView(props) {
  const {
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    filterTime,
    setFilterTime,
    filterLocation,
    setFilterLocation,
    results,
  } = props;
  const classes = useStyles();

  const clearFilterHandler = () => {
    setFilterType('Any');
    setFilterPrice('Any');
    setFilterTime('Any');
    setFilterLocation('Any');
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexBox}>
        <Typography variant="h7" className={classes.subtext}>
          {results.length} Results Found
        </Typography>
        {filterLocation !== 'Any' ||
        filterPrice !== 'Any' ||
        filterTime !== 'Any' ||
        filterType !== 'Any' ? (
          <Button onClick={clearFilterHandler} className={classes.btn}>
            Clear Filters
          </Button>
        ) : null}
      </div>
      <div className={classes.content}></div>
    </div>
  );
}

export default PropertyListView;
