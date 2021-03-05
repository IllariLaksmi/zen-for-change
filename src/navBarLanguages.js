import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '410px',
    height: '50px',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top:'-15px',
    zIndex: '-5'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'Regular',
    color:'#979797',
    fontWeight: 'regular'
  },
  white:{
      backgroundColor: 'white',

  }
}));

export default function ButtonAppBar1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.white} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            English
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Spanish
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Arabic
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}