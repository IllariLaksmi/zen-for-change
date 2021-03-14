import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: '20px',
      right: '50px',
      backgroundColor: '#6B3B91',
      width: '100px',
      height:'100px',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
      <span class="iconify" data-icon="bx:bxs-phone-call" data-inline="false" style={{ color:`#B073E1`,
width:`70px`,
height:`70px`, }}></span>
      </Fab>
    </div>
  );
}