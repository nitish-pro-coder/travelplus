import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeIcon from '@mui/icons-material/Home';
import { Container, dividerClasses } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InsightsIcon from '@mui/icons-material/Insights';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='container-fluid card'>

    
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
 
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<HomeIcon />}  label="Book a hotel now" />
      <Tab icon={<FavoriteIcon />} label="Bookings" />
      <Tab icon={<InsightsIcon />} label="Insights and dashboard" />
      <Tab icon={<ReceiptIcon />} label="Payments and invoices" />
    </Tabs>
 
</Container>
</div>

  );
}