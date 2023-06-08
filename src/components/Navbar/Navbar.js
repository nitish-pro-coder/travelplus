import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {SiYourtraveldottv} from 'react-icons/si'
import {SlWallet } from 'react-icons/sl'
import { Drawer, IconButton, TextField, Select, MenuItem, Table, TableHead, TableBody, TableRow, TableCell, Typography, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Settings as SettingsIcon } from '@mui/icons-material';

const Navbar = () => {

  const [active, setActive]  = useState('navBar')
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  
  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sample data
  const transactions = [
    { id: 1, name: 'Transaction 1', status: 'Pending', type: 'Deposit' },
    { id: 2, name: 'Transaction 2', status: 'Completed', type: 'Withdrawal' },
    // Add more transactions here
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  return (
    <section className='navBarSection'>
       <header className={transparent}>
        
          <div className="logoDiv">
            <a href="#" className="logo flex"><h1>P4</h1></a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <Link to='/' className='navLink'>Home</Link>
              </li>
              <li className="navItem">
                <Link to='/Bookings' className='navLink'>Bookings</Link>
                
              </li>
              <li className="navItem">
                <Link to='/Insights' className='navLink'>Insights</Link>
                
              </li>
              <li className="navItem">
                <Link to='/payment' className='navLink'>Payment & Invoices</Link>
              </li>
              
              <div className="headerBtns flex">
              <button className="btn loginBtn" onClick={toggleDrawer('right', true)}>
               <SlWallet classname="icon" fill="white"/>
              </button>
              <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        PaperProps={{ style: { width: 1000 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2,backgroundColor:'#7862dc'}}>
          <Typography variant="h6" color={"#fff"}>Wallet</Typography>
          <IconButton onClick={toggleDrawer('right', false)}>
            <CloseIcon htmlColor={'#fff'} />
          </IconButton>
        </Box>

        <Box sx={{ p: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Balance amount</h3>
  
  <Button variant='contained'  startIcon={<AddIcon />} sx={{ marginLeft: 'auto',backgroundColor:'#7862dc'}}>
    Add Balance
  </Button>
  
</div>
<h5>₹ 0.00</h5>


          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <TextField
  label="Search"
  value={searchTerm}
  onChange={handleSearchChange}
  variant="outlined"
  fullWidth={isMobile}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
    sx: {
      borderRadius: '20px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#000000',
      },
    },
  }}
/>
           

            <Select
//   value={typeFilter}
//   onChange={handleTypeFilterChange}
  variant="outlined"
  sx={{
    width: isMobile ? '50px' : '100px',
    borderRadius: '30px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
    },
  }}
>
  <MenuItem value="Jun'23">Jun'23</MenuItem>
  <MenuItem value="May'23">May'23</MenuItem>
  <MenuItem value="April'23">April'23</MenuItem>
</Select>


<Select
//   value={typeFilter}
//   onChange={handleTypeFilterChange}
  variant="outlined"
  sx={{
    width: isMobile ? '50px' : '100px',
    borderRadius: '30px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
    },
  }}
>
  <MenuItem value="Credit">Credit</MenuItem>
  <MenuItem value="Debit">Debit</MenuItem>
</Select>
          </div>

          <Table>
  <TableHead>
    <TableRow>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>ID</TableCell>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>Name</TableCell>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>Status</TableCell>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>Type</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {transactions.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.type}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</Box>
</Drawer>
<div className="loginBtn">
<Link sx={{color:"#fff"}} to="/settings">
      <IconButton color="#fff">
        <SettingsIcon />
      </IconButton>
    </Link>
    </div>
              
              </div>
            </ul>
            <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
       </header>
    </section>
    
    
  )
}

export default Navbar