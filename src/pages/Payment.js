import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Tab, Tabs, TextField,Grid} from '@mui/material';
import { DataGrid, GridCloseIcon } from '@mui/x-data-grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Table, TableHead, TableBody, TableRow, TableCell,Box} from '@mui/material';
import Chip from '@mui/material/Chip';
import { Dialog, DialogTitle, DialogContent, Button} from '@mui/material';
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles for the date picker
import 'react-date-range/dist/theme/default.css'; // Import the default theme for the date picker
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../components/Navbar/Navbar';


export default function Payment() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  const columns = [
    { field: 'Payment date', headerName: 'Payment date', width: 150 },
    { field: 'Transaction reference', headerName: 'Transaction reference', width: 300 },
    { field: 'TDS', headerName: 'TDS', width: 80 },
    {
      field: 'Amount transferred',
      headerName: 'Amount transferred',
      width:200,
    },
    {
      field: 'Total amount',
      headerName: 'Total amount',
      
      
      width: 220,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  const rows = [

  ];
  const [searchTerm, setSearchTerm] = React.useState('');

  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more data as needed
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [showDateRange, setShowDateRange] = useState(false);

  const handleDateClick = () => {
    setShowDateRange(true);
  };
 
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const handleRangeChange = (ranges) => {
    setDateRange([ranges.selection]);
  };
  const [open, setOpen] = useState(false);

  const handlePopClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick =()=>{
    console.log('clicked');
  }
  const handleClear = () => {
    setDateRange([{ startDate: null, endDate: null, key: 'selection' }]);
  };

  return (
    <>
    <Navbar/>
    <Box className="d-flex justify-content-center">
    <Container maxWidth="lg" className="mb-4 mt-4" sx={{ paddingTop: '80px' }}>
  <Card className='mt-2 ' style={{boxShadow: "rgb(207 202 202) 0px 0px 10px",border:"1px solid #1976d2"}}>
 
    <CardContent>
    
{/*     
      <Card>
        <CardContent> */}
        
          <Typography variant="p" fontWeight={"bold"}>
            Outstanding payments
          </Typography>
          <Grid item xs={12} md={6} lg={12}>
          <Card className="mt-2">
            <CardContent style={{borderBottom:"1px solid #1976d2"}}> 
            <div className="row p-3">
  <div className="col-md-5">
    <div className="row">
      <div className="col-md-4">
        <Typography variant="p" fontWeight={"bold"}>
          Total
        </Typography>
        <br/>
        <Typography variant="p" fontWeight={"bold"}>
          ₹ 0
        </Typography>
      </div>
      <div className="col-md-4">
        <Typography variant="p" fontWeight={"bold"}>
          Billed
        </Typography>
        <br/>
        <Typography variant="p" fontWeight={"bold"}>
          ₹ 0
        </Typography>
      </div>
      <div className="col-md-4">
        <Typography variant="p" fontWeight={"bold"}>
          Non-Billed
        </Typography>
        <br/>
        <Typography variant="p" fontWeight={"bold"}>
          ₹ 0
        </Typography>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <Typography variant="p" fontWeight={"bold"}>
      Billed outstanding since 15+ days
    </Typography>
    <br/>
    <Typography variant="p" fontWeight={"bold"}>
      ₹ 0
    </Typography>
  </div>
  <div className="col-md-3">
    <Typography variant="p" fontWeight={"bold"}>
      Lifetime interest accrued
    </Typography>
    <br/>
    <Typography variant="p" fontWeight={"bold"}>
      ₹ 0
    </Typography>
    <br/>
    <Typography variant='p'>
      as per contract
    </Typography>
  </div>
</div>

         
            </CardContent>
          </Card>
          </Grid>    
        {/* </CardContent>
      </Card> */}
      {/* <Card  className='mt-4'>
        <CardContent> */}
          
          <p className='mt-4 fw-bold'>View invoices by</p>
          
          <Card className="mt-2">
            <CardContent style={{borderBottom:"1px solid #1976d2"}}>
            <p className='fw-bold'>Ageing</p>
              <div className="row ">
                <div className="row">
                 <div className='col-6'>
                 <div className="row">
                
  <div className="col-3" >
    <Chip label="0-45 days" variant="outlined" onClick={handleClick} />
  </div>
  <div className="col-3" >
    <Chip label="45-60 days" variant="outlined" onClick={handleClick} />
  </div>
   <div className="col-3">
    <Chip label="60-90 days" variant="outlined" onClick={handleClick} />
  </div>
  <div className="col-3">
    <Chip label="90-120 days" variant="outlined" onClick={handleClick} />
  </div> 
</div>
</div>

                <div className='col-3'>
                  
                <p className='fw-bold' style={{marginTop:"-35px"}}>Cumulative</p>
                <Chip label="45+ days" variant="outlined" onClick={handleClick} style={{ marginRight: '5px' }} />
                <Chip label="60+ days" variant="outlined" onClick={handleClick} style={{ marginRight: '5px' }} />
                
                </div>
                
                <div className='col-3'>
                <p className='fw-bold' style={{marginTop:"-35px"}}>Date Range</p>
                <Chip label="Custom" variant="outlined" onClick={handlePopClick} style={{ marginRight: '5px' }} />
           {/* Date Picker */}
           <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Date Picker
        {open
         ? (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
        </DialogTitle>
        <DialogContent>
          <DateRange
            // editableDateInputs={true}
            onChange={handleRangeChange}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
        </DialogContent>
      </Dialog>
                </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
        {/* </CardContent>
      </Card> */}
      {/* <Card style={{boxShadow: "rgb(207 202 202) 0px 0px 10px",border:"3px solid #1976d2"}} className='mt-4'>
        <CardContent> */}
          
          <p className='mt-4 fw-bold'>Payments history</p>
          
          <Card className="mt-4" >
            <CardContent >
            <TabContext value={value}>
        
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Adjusted" value="2" />
            <Tab label="Unadjusted" value="3" />
          </TabList>
        <TabPanel value="1">
        <div className="container">
  <div className="row">
    <div className="col">
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSize={5}
        />
      </div>
    </div>
  </div>
</div>

        </TabPanel>
        <TabPanel value="2">
        <div className="container">
  <div className="row">
    <div className="col">
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSize={5}
        />
      </div>
    </div>
  </div>
</div>
        </TabPanel>
        <TabPanel value="3">
        <div className="container">
  <div className="row">
    <div className="col">
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSize={5}
        />
      </div>
    </div>
  </div>
</div>
        </TabPanel>
      </TabContext>
    
        

            </CardContent>
          </Card>
          
        {/* </CardContent>
      </Card> */}
      {/* <Card  className='mt-4'>
        <CardContent> */}
          <p className='mt-4 fw-bold'> Invoices by booking</p>
          <Card className="mt-4" >
            <CardContent>
            {/* <TextField
      placeholder="Search By Booking ID, Trip ID, Invoice ID"
      id="outlined-start-adornment"
      sx={{ height: 70, width: 300 }}
      InputLabelProps={{
        style: { fontSize: '8px' },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
      
        <div className='mt-4' style={{ height: 300, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSize={5}
      />
      </div>
         */}
         <div>
    <TextField
      label="Search"
      variant="outlined"
      sx={{ textAlign: 'right' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={searchTerm}
      onChange={handleSearch}
    />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </div>
      
      <Button variant="outlined" onClick={handleClear}>
        Clear
      </Button>
    
        

            </CardContent>
          </Card>
          
        </CardContent>
      </Card>
    
    {/* </CardContent>
  </Card> */}
  </Container>
</Box>
</>

  )
}


