import React, { useEffect, useRef, useState } from 'react';
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Chart from 'chart.js/auto';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';
import { CalendarToday } from '@mui/icons-material';
import Navbar from '../components/Navbar/Navbar';

const InsightsDashboard = () => {
  
  const chartRef = useRef(null);
  const barChartRef = useRef(null);
  const [barChartData, setBarChartData] = useState([]);
  const [spendByCities, setSpendByCities] = useState([
    { city: 'Coimbatore', totalSpend: 6000 },
    { city: 'Delhi', totalSpend: 8000 },
    { city: 'Bangalore', totalSpend: 5000 },
    { city: 'Chennai', totalSpend: 7000 },
    { city: 'Kolkata', totalSpend: 9000 },
  ]);
  const [selectedOption, setSelectedOption] = useState('');
      
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
  useEffect(() => {
    let barChart;
    let doughnutChart;

    const createCharts = () => {
      // Destroy existing charts if they exist
      if (barChart) {
        barChart.destroy();
      }
      if (doughnutChart) {
        doughnutChart.destroy();
      }

      // Initialize the bar chart
      barChart = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: spendByCities.map((city) => city.city),
          datasets: [
            {
              label: 'Total Spend',
              data: spendByCities.map((city) => city.totalSpend),
              backgroundColor: '#7862dc',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              maxTicksLimit: 5,
            },
          },
        },
      });
    
       
    
      
      // Initialize the doughnut chart
      doughnutChart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: spendByCities.map((city) => city.city),
          datasets: [
            {
              data: spendByCities.map((city) => city.totalSpend),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    };

    createCharts();

    // Cleanup function
    return () => {
      if (barChart) {
        barChart.destroy();
      }
      if (doughnutChart) {
        doughnutChart.destroy();
      }
    };
  }, [spendByCities]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    let startDate;
    let endDate = new Date();

    switch (selectedDate) {
      case 'last30':
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 29);
        break;
      case 'last15':
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 14);
        break;
      case 'last7':
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 6);
        break;
      case 'today':
        startDate = new Date();
        break;
      // Add custom date logic here
      default:
        break;
    }

    // Replace the following line with your data fetching logic based on the selected date range
    const randomData = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 1000)
    );
    setBarChartData(randomData);
  };

  return (
    <>
    <Navbar/>
    {/* <Container className='container-sm'> */}
    <Box className="d-flex justify-content-center">
        <Container maxWidth="lg" className="mb-4 mt-4" sx={{ paddingTop: '80px' }}>
    <Card variant="outlined" style={{boxShadow: "rgb(207 202 202) 0px 0px 10px",border:"1px solid #1976d2"}}>
      <div className='container ' >
            <FormControl  variant="outlined" className='float-end'>
              <InputLabel id="select-label">
                <Icon>
                  <CalendarToday />
                </Icon>{' '}
                Select Date
              </InputLabel>
              <Select labelId="select-label" id="select" label="Select Date" onChange={handleDateChange} maxWidth='120px' width='120px'>
                <MenuItem value="last30">Last 30 Days</MenuItem>
                <MenuItem value="last15">Last 15 Days</MenuItem>
                <MenuItem value="last7">Last 7 Days</MenuItem>
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="custom">Custom</MenuItem>
              </Select>
            </FormControl>
        <main>
          <section id="booking-overview">
          <p className="mt-4 fw-bold">BOOKINGS</p>
            <Grid container spacing={2}>
              <div className='row'>
              <div className='col-6'>
              <Grid item xs={12} md={3}>
                <Card sx={{ boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',height: '100px',width: '300px' }}>
                  <CardContent>
                   <p className='text-secondary'>Total Spend on Hotels</p>
                   <div className='row'>
                    <div className='col-6'>
                    <h3 className='text-dark'>$50,000</h3>
                    </div>
                    <div className='col-6'>
                    <Chip label="75.0%" icon = {<ArrowDropDownIcon color='red' />}  sx={{ color: '#8B0000', bgcolor: '#FFCDD2', borderColor: 'red' }}/>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              </div>
              <div className='col-6'>
              <Grid item xs={12} md={3}>
                <Card sx={{ boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',height: '100px',width: '300px' }}>
                  <CardContent>
                    <p className='text-secondary'>Average Booking Window</p>
                    <h3 className='text-dark'>14 days</h3>
                  </CardContent>
                </Card>
              </Grid>
              </div>
              </div>
              <div className='row mt-4'>
              <div className='col-6'>
              <Grid item xs={12} md={3}>
                <Card sx={{ boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',height: '100px',width: '300px' }}>
                  <CardContent>
                    <p className='text-secondary'>Average Daily Rate</p>
                    <div className='row'>
                    <div className='col-6'>
                    <h3 className='text-dark'>$150</h3>
                    </div>
                    <div className='col-6'>
                    <Chip label="75.0%" icon = {<ArrowDropUpIcon color='#006400' />}  sx={{ color: '#006400', bgcolor: '#CAEEC2', borderColor: 'green' }}/>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              </div>
              <div className='col-6'>
              <Grid item xs={12} md={3}>
                <Card sx={{ boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',height: '100px',width: '300px' }}>
                  <CardContent>
                    <p className='text-secondary'>Average Length of Stay</p>
                    <h3>3 nights</h3>
                  </CardContent>
                </Card>
              </Grid>
              </div>
              </div>
              <Grid item xs={12} md={12}>
                <Card variant="outlined" sx={{boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)'}}>
                  <CardContent>
                    <h4>Total Spend by Day</h4>
                    <Box sx={{ position: 'relative', height: '300px' }}>
                      <canvas ref={barChartRef} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card md={{ height: '100%' }} sx={{boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)'}}>
                  <CardContent>
                    <h4>Spend by Cities</h4>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell align="right">Total Spend</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {spendByCities.map((city) => (
                            <TableRow key={city.city}>
                              <TableCell component="th" scope="row">
                                {city.city}
                              </TableCell>
                              <TableCell align="right">${city.totalSpend}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card sx={{boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)'}}>
                  <CardContent>
                    <h4>Spend by Cities Chart</h4>
                    <Box sx={{ position: 'relative', height: '300px' }}>
                      <canvas ref={chartRef} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>
        </main>
        </div>
    </Card>
    {/* </Container> */}
    </Container>
    </Box>
    </>
  );
};

export default InsightsDashboard;
