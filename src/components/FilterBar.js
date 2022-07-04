import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '70px',
    backgroundColor: '#25282c',
    marginTop: '0.7rem',
    marginBottom: '0.7rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  content: {},
  heading: {
    marginTop: '0.5rem',
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'white',
  },
  form: {
    width: '15%',
    margin: '0.5rem',
  },
  formLabel: {
    color: '#5658dd',
  },
  select: {
    color: 'white',
    '&:after': {
      borderBottomColor: '#5658dd',
    },
    '&:before': {
      borderBottomColor: '#5658dd',
    },
    '& .MuiSvgIcon-root': {
      color: '#5658dd',
    },
    '&:hover': {
      borderBottomColor: '#5658dd',
    },
  },
  btn: {
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: '700',
    backgroundColor: '#5658dd',
    fontSize: '13px',
    width: '10%',
    '&:hover': {
      backgroundColor: '#5658dd',
      fontSize: '13.5px',
    },
  },
});

const LocationList = [
  { key: 'Any', value: 'Any' },
  { key: 'Delhi', value: 'Delhi' },
  { key: 'Goa', value: 'Goa' },
  ,
  { key: 'Punjab', value: 'Punjab' },
  ,
  { key: 'Uttar Pradesh', value: 'Uttar Pradesh' },
  { key: 'Bhopal', value: 'Bhopal' },
];

const PriceList = [
  { key: 'Any', value: 'Any' },
  { key: '0$-500$', value: '0$-500$' },
  { key: '500$-1000$', value: '500$-1000$' },
  { key: '1000$-1500$', value: '1000$-1500$' },
  ,
  { key: '1500$-2000$', value: '1500$-2000$' },
  ,
  { key: '2000$-2500$', value: '2000$-2500$' },
];

const TimeList = [
  { key: 'Any', value: 'Any' },
  { key: '10th July 2022', value: '10th July 2022' },
  { key: '11th July 2022', value: '11th July 2022' },
  { key: '12th July 2022', value: '12th July 2022' },
  ,
  { key: '13th July 2022', value: '13th July 2022' },
  ,
  { key: '14th July 2022', value: '14th July 2022' },
  { key: '15th July 2022', value: '15th July 2022' },
];

const TypeList = [
  { key: 'Any', value: 'Any' },
  { key: 'Flat', value: 'Flat' },
  { key: 'Double Story', value: 'Double Story' },
  { key: 'Triple Story', value: 'Triple Story' },
  ,
  { key: 'Mension', value: 'Mension' },
];

function FilterBar(props) {
  const {
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    filterTime,
    setFilterTime,
    filterLocation,
    setFilterLocation,
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <FormControl className={classes.form}>
        <InputLabel
          className={classes.formLabel}
          id="demo-simple-select-standard-label"
        >
          Location
        </InputLabel>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
          className={classes.select}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          label="Location"
        >
          {LocationList.map((item, i) => (
            <MenuItem value={item.value}>{item.key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.form}>
        <InputLabel
          className={classes.formLabel}
          id="demo-simple-select-standard-label"
        >
          When
        </InputLabel>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
          className={classes.select}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filterTime}
          onChange={(e) => setFilterTime(e.target.value)}
          label="When"
        >
          {TimeList.map((item, i) => (
            <MenuItem value={item.value}>{item.key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.form}>
        <InputLabel
          className={classes.formLabel}
          id="demo-simple-select-standard-label"
        >
          Price
        </InputLabel>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
          className={classes.select}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
          label="Price"
        >
          {PriceList.map((item, i) => (
            <MenuItem value={item.value}>{item.key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.form}>
        <InputLabel
          className={classes.formLabel}
          id="demo-simple-select-standard-label"
        >
          Property Type
        </InputLabel>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
          className={classes.select}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          label="Property Type"
        >
          {TypeList.map((item, i) => (
            <MenuItem value={item.value}>{item.key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button className={classes.btn}>Search</Button>
    </Card>
  );
}

export default FilterBar;
