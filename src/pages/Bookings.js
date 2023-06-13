import React from 'react';
import { Card, CardContent, Container, Grid, Tab, Tabs, TextField, InputAdornment, Typography, useMediaQuery, Box, IconButton,Drawer,Divider,List,ListItem,ListItemText} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Collapse from '@mui/material/Collapse';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { saveAs as fileDownload } from 'file-saver';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from '../components/Navbar/Navbar';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { pink, purple } from '@mui/material/colors';
import ListItemButton from '@mui/material/ListItemButton';
import { useEffect } from 'react';

export default function Bookings() {
  const [value, setValue] = React.useState('1');
  const [searchTerm, setSearchTerm] = React.useState('');
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isInclusions, setInclusions]  = React.useState(true);
  const [istraveller,setTraveller] = React.useState(true);
  const [iscreation,setCreation] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const handleView = ()=>{
     console.log('button-clicked');
     handleDrawerOpen();
   };
   const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleInclusions =()=>{
    setInclusions(!isInclusions)
  }
  const handleTraveller = () =>{
    setTraveller(!istraveller)
  }
  const handleCreation = ()=>{
   setCreation(!iscreation)
  }
  const handleDownload = () => {
    fetch('../Assets/dummy.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        fileDownload(blob, 'Bookings.pdf'); // Specify the desired file name with the extension
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
  };

  const columns = [
    { field: 'BOOKING ID', headerName: 'BOOKING ID', width: 180 },
    { field: 'TRAVELER(S)', headerName: 'TRAVELLER(S)', width: 180 },
    { field: 'CHECK-IN', headerName: 'CHECK-IN', width: 180 },
    { field: 'CHECK-OUT', headerName: 'CHECK-OUT', width: 180 },
    { field: 'DESTINATION', headerName: 'DESTINATION', width: 180 },
    {
      field: 'INVOICE',
      headerName: 'INVOICE',
      width: 100,
      renderCell: (params) => params.row['INVOICE'],
    },
  ];

  const column_ongoing = [
    { field: 'BOOKING ID', headerName: 'BOOKING ID', width: 180 },
    { field: 'TRAVELER(S)', headerName: 'TRAVELLER(S)', width: 180 },
    { field: 'CHECK-IN', headerName: 'CHECK-IN', width: 180 },
    { field: 'CHECK-OUT', headerName: 'CHECK-OUT', width: 180 },
    { field: 'DESTINATION', headerName: 'DESTINATION', width: 180 },
    { field: 'DETAILS', headerName: 'DETAILS', width: 180,  renderCell: (params) => params.row['DETAILS'], },
  ]
  const rows_ongoing = [
    {
      id: 1,
      'BOOKING ID': 1,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'DETAILS': <Button onClick={handleView} startIcon={<DescriptionIcon sx = {{color : purple[400]}} />} size="small" />,
    },
    {
      id: 2,
      'BOOKING ID': 1,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'DETAILS': <Button onClick={handleView} startIcon={<DescriptionIcon sx = {{color : purple[400]}}/>} size="small" />,
    },
    {
      id: 3,
      'BOOKING ID': 1,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'DETAILS': <Button onClick={handleView} startIcon={<DescriptionIcon sx = {{color : purple[400]}} />} size="small" />,
    },
    // Add more duplicated rows here
  ];
  
  const rows = [
    { id: 1, 'BOOKING ID': 1, 'TRAVELER(S)': 'John Doe', 'CHECK-IN': '2023-06-01', 'CHECK-OUT': '2023-06-07', 'DESTINATION': 'Paris', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    { id: 2, 'BOOKING ID': 2, 'TRAVELER(S)': 'Jane Smith', 'CHECK-IN': '2023-06-08', 'CHECK-OUT': '2023-06-15', 'DESTINATION': 'London', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    { id: 3, 'BOOKING ID': 3, 'TRAVELER(S)': 'Mike Johnson', 'CHECK-IN': '2023-06-16', 'CHECK-OUT': '2023-06-23', 'DESTINATION': 'New York', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    { id: 4, 'BOOKING ID': 4, 'TRAVELER(S)': 'Sarah Thompson', 'CHECK-IN': '2023-06-24', 'CHECK-OUT': '2023-06-30', 'DESTINATION': 'Tokyo', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}}/>} size="small" /> },
    { id: 5, 'BOOKING ID': 5, 'TRAVELER(S)': 'David Wilson', 'CHECK-IN': '2023-07-01', 'CHECK-OUT': '2023-07-07', 'DESTINATION': 'Sydney', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    {
      id: 6,
      'BOOKING ID': 6,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}}/>} size="small" />,
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows_ongoing = searchTerm 
   ? rows_ongoing.filter((row) => row['TRAVELER(S)'].toLowerCase().includes(searchTerm.toLowerCase()))
   : rows_ongoing;

  const filteredRows = searchTerm
    ? rows.filter((row) => row['TRAVELER(S)'].toLowerCase().includes(searchTerm.toLowerCase()))
    : rows;

  const tabStyles = {
    minWidth: isMobile ? 'auto' : 100,
  };

  React.useEffect(() => {
    const handleClick = (event) => {
      // Handle click event here
      console.log('Screen clicked!');
    };

    // Attach click event listener to the document
    document.addEventListener('click', handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box className="d-flex justify-content-center">
        <Container maxWidth="lg" className="mb-4 mt-4" sx={{ paddingTop: '80px' }}>
          <Card className="mt-2 " style={{ boxShadow: 'rgb(207 202 202) 0px 0px 10px', border: '1px solid #1976d2' }}>
            <CardContent>
              <Typography>
                <p className="mt-4 fw-bold">BOOKINGS</p>
              </Typography>
              <Card className="mt-4">
                <CardContent>
                  <TextField
                    label="Search Travel-id or Booking-id"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    style={{ marginRight: '500px', width: isMobile ? '100%' : '50%' }}
                  />
                  <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Past" value="1" />
                      <Tab label="Ongoing" value="2" />
                      <Tab label="Upcoming" value="3" />
                    </TabList>
                    <TabPanel value="1">
                      {filteredRows.length === 0  ? (
                        <div className="text-center mt-2">No past bookings.</div>
                      ) : (
                        <div style={{ height: 400, width: '100%' }}>
                          <DataGrid rows={filteredRows} columns={columns} pageSize={5} />
                        </div>
                      )}
                    </TabPanel>
                    <TabPanel value="2">
                     {filteredRows_ongoing.length===0 ? (
                      <div className="text-center mt-2">No Ongoing bookings.</div>
                     ): (
                      <div style={{ height: 400, width: '100%' }}>
                          <DataGrid rows={filteredRows_ongoing} columns={column_ongoing} pageSize={5} />
                        </div>
                     )}
                    </TabPanel>
                    <TabPanel value="3">
                      <div className="text-center mt-2">No Upcoming bookings.</div>
                    </TabPanel>
                  </TabContext>
                 </CardContent> 
              </Card>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
  <Box sx={{ width: 600 }}>
    <div className = "container">
    <div className='row'>
      <div className='col-8'>
    <Typography variant="h6" fontWeight='Bold' sx={{ p: 2 }}>
      Booking Details
    </Typography>
      </div>
    <div className='col-4 mt-3'>
    <IconButton><DownloadIcon/></IconButton>
    </div>
    </div>
    </div>
    <Divider />
    <List>
      <div className='row ms-3'>
        <div className='col-6'>
      <ListItem>
      <ListItemText
    primary=" City"
    primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
    secondary= " Chennai"/>
      </ListItem>
      </div>
      <div className = 'col-6'>
      <ListItem >
        <ListItemText primary="Traveler(s)" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
         secondary="John Doe" />
      </ListItem>
      </div>
      </div>
      <div className='row ms-3'>
       <div className='col-6'>
      <ListItem>
        <ListItemText  primary="2023-06-01"
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
         secondary="Check-in" />
      </ListItem>
      </div>
      <div className='col-6'>
      <ListItem>
        <ListItemText  primary ="2023-06-07" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
         secondary="Check-out" />
      </ListItem>
      </div>
      </div>
      <div className='row ms-3'>
        <div className = 'col-6'>
      <ListItem>
        <ListItemText  primary ="T Nagar" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
        secondary="Location" />
      </ListItem>
      </div>
      <div className = 'col-6'>
      <ListItem>
        <ListItemText primary="Destination" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
        secondary="Paris" />
      </ListItem>
      </div>
      </div>
      <div className = 'row ms-3'>
      <div className='col-6'>
      <ListItem >
        <ListItemText  primary ="NA" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
        secondary="Trip ID"/>
      </ListItem>
      </div>
      <div className='col-6'>
      <ListItem>
        <ListItemText primary ="Payment mode" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
         secondary="Prepaid"/>
      </ListItem>
      </div>
      </div>
      <div className = 'row ms-3'>
      <div className='col-6'>
      <ListItem >
        <ListItemText  primary ="Hotel Name" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
        secondary="faab Hotel"/>
      </ListItem>
      </div>
      <div className='col-6'>
      <ListItem>
        <ListItemText primary ="Number of rooms" 
         primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
        secondary="1"/>
      </ListItem>
      </div>
      <div className='row'>
        <div className='col-4'>
      <ListItemButton onClick={handleInclusions} >
        <ListItemText primary="Inclusions" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
        {isInclusions ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </div>
      </div>
      <Collapse in={isInclusions} timeout="auto" unmountOnExit>
    <div className="d-flex align-items-center">
      <div className="d-inline ">
    <ListItemIcon >
      <RestaurantIcon className='ms-3' />
    </ListItemIcon>
  </div>
  <div className="d-inline mb-3">
    <ListItemText primary="Breakfast" primaryTypographyProps={{ style: { fontWeight:'normal' } }} />
  </div>
  </div>
      </Collapse>
      <div className='row'>
        <div className='col-4 mb-4'>
      <ListItemButton onClick={handleTraveller} >
        <ListItemText primary="Traveller Details" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
        {istraveller ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </div>
      </div>
      <Collapse in={istraveller} timeout="auto" unmountOnExit>
    <div className="d-flex align-items-center">
      <div className="d-inline ">
    <ListItemIcon >
      <PersonIcon className='ms-2' />
    </ListItemIcon>
     </div>
  <div className="d-inline mb-4">
    <ListItemText primary="Nittin.G" primaryTypographyProps={{ style: { fontWeight:'normal' } }} secondary = "nittinjr29@gmail.com" />
  </div>
  </div>
  </Collapse>
  </div>
  <div className='row ms-4'>
    <div className='col-6'>
      <Typography fontWeight='Bolder'> Room Charges </Typography>
    </div>
     <div className='col-6'>
      <Typography fontWeight = 'Lighter'>7000</Typography>
     </div>
  </div>
  <div className='row ms-3'>
    <div className='col-6 mt-2'>
      <Typography fontWeight='Bolder'>Inclusion cost</Typography>
    </div>
     <div className='col-6 mt-2'>
      <Typography fontWeight = 'Lighter'>0.0</Typography>
     </div>
  </div>
  <div className='row ms-3'>
    <div className='col-6 mt-2'>
      <Typography fontWeight='Bolder'> GST </Typography>
    </div>
     <div className='col-6 mt-2'>
      <Typography fontWeight = 'Lighter'>1,764.0</Typography>
     </div>
  </div>
  <Divider className='mt-4'/>
  <div className='row ms-3'>
    <div className='col-6 mt-4'>
      <Typography fontWeight='Bolder'> Total Booking Amount </Typography>
    </div>
     <div className='col-6 mt-4'>
      <Typography fontWeight = 'Lighter'>16,464.0</Typography>
     </div>
  </div>
  <Divider className='mt-4'/>
  <div className='row ms-2'>
  <div className='col-4'>
  <ListItemButton onClick={handleCreation} >
        <ListItemText primary="Creation Details" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
        {isInclusions ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
  </div>
  </div>
    <Collapse in={iscreation} timeout="auto" unmountOnExit>
      <div className='row ms-2'>
        <div className = 'col-6'>
          <p> Created by</p>
        </div>
        <div className = 'col-6'>
         <p> Internal user</p>
        </div>
      </div>
      <div className='row ms-2'>
        <div className = 'col-6'>
          <p> Created on</p>
        </div>
        <div className = 'col-6'>
         <p> 03 Jun'23| 02:42 PM</p>
        </div>
      </div>
    
  </Collapse>
    </List>
  </Box>
</Drawer>
    </>
  );
}
