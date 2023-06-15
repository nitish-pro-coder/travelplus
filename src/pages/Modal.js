import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"xs"} >
        <DialogTitle className='border-bottom'>
          Dialog Title
          <IconButton aria-label="close" onClick={handleClose} className="position-absolute end-0">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p>Dialog content goes here...</p>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default MyComponent;
