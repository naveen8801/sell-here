import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import PropertyCard from './PropertyCard';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0.4rem',
    height: 'calc(100vh - 350px)',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
});

function PropertyListView(props) {
  const { results } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {results.map((item, i) => (
          <PropertyCard
            key={i}
            imgUrl={item.img}
            price={item.price}
            name={item.name}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyListView;
