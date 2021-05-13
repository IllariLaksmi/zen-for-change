import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: '17vw',
      right: '1vw',
      backgroundColor: '#6B3B91',
      width: '10vw',
      height:'10vw',
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
        <div className='doxyR'>
      <a href="mailto:info@zenforchange.com?Subject=Free%2015%20minute%20consultation"  width='70px' height='20px'><span id='callIcon' class="iconify" data-icon="fluent:chat-mail-20-filled" data-inline="false" style={{ color:`#B073E1`,
width:`5vw`,
height:`5vw`, }}></span></a>
<h4>Free 15 minutes consultation</h4>
</div>
      </Fab>
    </div>
  );
}