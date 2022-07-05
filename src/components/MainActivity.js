import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FilterBar from './FilterBar';
import { data } from '../data';
import { isDOMComponent } from 'react-dom/test-utils';
import PropertyListView from './PropertyListView';

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
  const [Maindata, setMainData] = useState(data || []);
  const [filterType, setFilterType] = useState('Any');
  const [filterPrice, setFilterPrice] = useState('Any');
  const [filterTime, setFilterTime] = useState('Any');
  const [filterLocation, setFilterLocation] = useState('Any');

  function mergeArrayObjects(arr1, arr2) {
    if (arr1.length === 0) {
      return arr2;
    }
    if (arr2.length === 0) {
      return arr1;
    }
    return arr1.map((item, i) => {
      if (item.id === arr2[i].id) {
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  const handleSearch = () => {
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
        handleSearch={handleSearch}
      />
      <PropertyListView resultsCount={Maindata.length} />
    </div>
  );
}

export default MainActivity;
