import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: '150px',
      right: '50px',
      backgroundColor: '#6B3B91',
      width: '105px',
      height:'105px',
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
      <Fab  aria-label="add">
      <a href="https://doxy.me/zenforchange" width='70px' height='20px'><span href='https://doxy.me/zenforchange' id='callIcon' class="iconify" data-icon="whh:appointment" data-inline="false" style={{ color:`#B073E1`,
width:`70px`,
height:`70px`, }}></span></a>
      </Fab>
    </div>
  );
}