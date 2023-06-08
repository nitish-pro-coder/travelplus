import '../index.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function FormDialog() {
  
  const columns = [
    { field: 'Entity Name', headerName: 'Entity Name', width: 100 },
    { field: 'State', headerName: 'State', width: 100 },
    { field: 'GSTIN', headerName: 'GSTIN', width: 100 },
    { field: 'Address', headerName: 'Address', width: 100 },
    { field: 'Pincode', headerName: 'Pincode', width: 110 },
  ];

  const rows = [
    { id: 1, 'Entity Name': 'Company A', State: 'State A', GSTIN: 'GSTIN A', Address: 'Address A', Pincode: 'Pincode A' },
    { id: 2, 'Entity Name': 'Company B', State: 'State B', GSTIN: 'GSTIN B', Address: 'Address B', Pincode: 'Pincode B' },
    { id: 3, 'Entity Name': 'Company C', State: 'State C', GSTIN: 'GSTIN C', Address: 'Address C', Pincode: 'Pincode C' },
  ];
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" id="agst" onClick={handleClickOpen}>
        Add GST
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add GST</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the following information to add GST:
          </DialogContentText>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              select
              margin="dense"
              id="states"
              label="States"
              fullWidth
              variant="outlined"
              
              
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="State 1">State 1</MenuItem>
              <MenuItem value="State 2">State 2</MenuItem>
            </TextField>
            <TextField
              margin="dense"
              id="entityName"
              label="Entity Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="gstin"
              label="GSTIN"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="pincode"
              label="Pincode"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="address1"
              label="Address 1"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="address2"
              label="Address 2"
              type="text"
              fullWidth
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleClose} id="cancelb" variant="outlined" sx={{ marginRight: '40px',marginBottom:'20px'}}>
              Cancel
            </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleClose} id="addb" variant="contained" sx={{ marginRight: '85px',marginBottom:'20px', 
                }}>
              Add
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <div style={{ height: 265, width: '50%', marginBottom: '10px' }}>
  <DataGrid rows={rows} columns={columns} pageSize={5} />
</div> 
</div>
  );
}

