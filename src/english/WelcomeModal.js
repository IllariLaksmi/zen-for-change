import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'modal 1s 1s forwards',
    visibility: 'hidden',
    opacity: '0',
  },
  paper: {
    backgroundColor: 'white',
    padding:'30px 20px',
    width: '50vw',
    outline: 'none',
    textAlign: 'center',
    borderRadius:'20px',
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <button id='buttonClose' onClick={handleClose}>X</button>
            <h2 className='modal' id='modalh2'>Book a free 15 minutes consultation / Para una consulta gratis de 15 minutos presione aquí</h2>
            <p className='modal' id='modalp'>If you have questions, feel free to reach out to us / Si tiene alguna pregunta, por favor comuníquese con nosotros</p>
        <a href="mailto:info@zenforchange.com" className='modalButton'>I'm interested! /Me interesa</a>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}