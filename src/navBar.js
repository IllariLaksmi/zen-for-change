import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '1000px',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'Regular',
    color:'#6B3B91',
    fontWeight: 'regular'
  },
  white:{
      backgroundColor: 'white',
      boxShadow: 'none'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.white} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            About us
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Therapy
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Forms
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}