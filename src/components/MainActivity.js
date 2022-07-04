import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FilterBar from './FilterBar';
import { data } from '../data';

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
  const [filterType, setFilterType] = useState('Any');
  const [filterPrice, setFilterPrice] = useState('Any');
  const [filterTime, setFilterTime] = useState('Any');
  const [filterLocation, setFilterLocation] = useState('Any');
  return (
    <div className={classes.root}>
      <FilterBar
        filterType={filterType}
        setFilterType={setFilterType}
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}
        filterTime={filterTime}
        setFilterTime={setFilterTime}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
      />
    </div>
  );
}

export default MainActivity;
