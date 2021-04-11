import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: '5vw',
      right: '5vw',
      backgroundColor: '#6B3B91',
      width: '8vw',
      height:'8vw',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div id='call' className={classes.root}>
      <Fab  aria-label="add">
      <a href="tel:+1(443)326-9018" width='70px' height='20px'><span id='callIcon' class="iconify" data-icon="bx:bxs-phone-call" data-inline="false" style={{ color:`#B073E1`,
width:`5vw`,
height:`5vw`, }}></span></a>
      </Fab>
    </div>
  );
}