import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: '5vw',
      right: '1vw',
      backgroundColor: '#6B3B91',
      width: '10vw',
      height:'10vw',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div id='doxy' className={classes.root}>
      <Fab  aria-label="add">
        <div className='doxyR'>
        
      <a href="https://doxy.me/zenforchange" width='70px' height='20px'><span href='https://doxy.me/zenforchange' id='callIcon' class="iconify" data-icon="whh:appointment" data-inline="false" style={{ color:`#B073E1`,
width:`5vw`,
height:`5vw`, }}></span></a>
<h4>Cita</h4>
</div>
      </Fab>
    </div>
  );
}