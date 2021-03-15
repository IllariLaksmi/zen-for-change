import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'modal 2s 2s forwards',
    visibility: 'hidden',
    opacity: '0',
  },
  paper: {
    backgroundColor: 'white',
    padding:'50px 30px',
    width: '30%',
    outline: 'none',
    textAlign: 'center',
    borderRadius:'20px',
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <h2 className='modal' id='modalh2'>Book a free 15 minute consultation!</h2>
            <p className='modal' id='modalp'>If you feel in doubt when requesting an appointment, this is for you.
<br></br>Solve all your doubts in your free 15 minute consultation and start healing!</p>
        <button className='modalButton'>Great! Let's Start!</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}