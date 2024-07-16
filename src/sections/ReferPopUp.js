import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import VerticalLinearStepper from '../elements/form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: '#ffefff',
  border: '0',
  boxShadow: "none",
  p: 4,
  borderRadius: '28px',


};



const ReferPopUp = ({ open, handleClose }) => {

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotprops={{
        backdrop: {
          timeout: 1000,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <VerticalLinearStepper handleClose={handleClose}/>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ReferPopUp;
