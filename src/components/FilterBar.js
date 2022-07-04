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

function FilterBar() {
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
          value={10}
          //   onChange={handleChange}
          label="Location"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          value={10}
          //   onChange={handleChange}
          label="When"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          value={10}
          //   onChange={handleChange}
          label="Price"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          value={10}
          //   onChange={handleChange}
          label="Property Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.btn}>Search</Button>
    </Card>
  );
}

export default FilterBar;
