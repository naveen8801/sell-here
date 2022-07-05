import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import FilterBar from './FilterBar';
import { data } from '../data';
import { isDOMComponent } from 'react-dom/test-utils';
import PropertyListView from './PropertyListView';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '1rem',
  },
  heading: {
    marginTop: '0.5rem',
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'white',
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

function MainActivity() {
  const classes = useStyles();
  const [Maindata, setMainData] = useState(data || []);
  const [filterType, setFilterType] = useState('Any');
  const [filterPrice, setFilterPrice] = useState('Any');
  const [filterTime, setFilterTime] = useState('Any');
  const [filterLocation, setFilterLocation] = useState('Any');
  const [loading, setLoading] = useState(false);

  const clearFilterHandler = () => {
    setFilterType('Any');
    setFilterPrice('Any');
    setFilterTime('Any');
    setFilterLocation('Any');
    setMainData(data);
  };

  const handleFilter = () => {
    setLoading(true);
    if (
      filterType === 'Any' &&
      filterPrice === 'Any' &&
      filterTime === 'Any' &&
      filterLocation === 'Any'
    ) {
      setMainData(data);
    } else {
      let list1 = [];
      let list2 = [];
      let list3 = [];
      let list4 = [];

      if (filterType !== 'Any') {
        list1 = data.filter((item) => item.type === filterType);
      }
      if (filterLocation !== 'Any') {
        list2 = data.filter((item) => item.location === filterLocation);
      }
      if (filterPrice !== 'Any') {
        list3 = data.filter((item) => item.price === filterPrice);
      }
      if (filterTime !== 'Any') {
        list4 = data.filter((item) => item.when === filterTime);
      }

      if (filterType === 'Any') {
        list1 = data;
      }
      if (filterLocation === 'Any') {
        list2 = data;
      }
      if (filterPrice === 'Any') {
        list3 = data;
      }
      if (filterTime === 'Any') {
        list4 = data;
      }

      let merge1 = list1.filter((e) => {
        return list2.some((item) => item.id === e.id);
      });

      let merge2 = list3.filter((e) => {
        return list4.some((item) => item.id === e.id);
      });

      let merge = merge1.filter((e) => {
        return merge2.some((item) => item.id === e.id);
      });

      setMainData(merge);
    }
    setLoading(false);
  };

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
        handleFilter={handleFilter}
      />
      <div className={classes.flexBox}>
        <Typography variant="h7" className={classes.subtext}>
          {Maindata.length} Results Found
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
      <PropertyListView loading={loading} results={Maindata} />
    </div>
  );
}

export default MainActivity;
