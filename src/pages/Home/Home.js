import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { Box, Button, Card, CardContent, Checkbox, Rating, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Slider from '@mui/material/Slider';
import Popular from '../Popular/Popular';
import Navbar from '../../components/Navbar/Navbar';
import { CheckBox, NearMe } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import DoneIcon from '@mui/icons-material/Done';
import img2 from '../../Assets/image (2).jpg'
import img5 from '../../Assets/image (5).jpg'
import img9 from '../../Assets/image (2).jpg'
import img7 from '../../Assets/image (7).jpg'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




 const Home = () => {
  function valuetext(value) {
    return value;
  }
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
    const handleRangeChange = (ranges) => {
      setDateRange([ranges.selection]);
    };
    const [dateRange, setDateRange] = React.useState([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    const [showDateRangePicker, setShowDateRangePicker] = React.useState(false);
    const [recentsearch,setrecentsearch]=React.useState(true);
    const [searchrender,setsearchrender]=React.useState(false);
    const [loadingsearch,setloadingsearch]=React.useState(false);

    const handleToggleDateRangePicker = () => {
      setShowDateRangePicker((prevState) => !prevState);
    };
    const [locationlist,setlocationlist]=React.useState([])
  const [location,setlocation]=React.useState([{locationname:"",lat:"",lon:""}])
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });
  
  const handleSelect = (event, value) => {
    setSelectedLocation(value);
    console.log(value)
  };

  const calculateDistance = () => {
    const userLat = selectedLocation.lat;
    const userLon = selectedLocation.lon;
    const propertyLat = 10.2381136;
    const propertyLon = 77.48918219999996;

    // Calculate the distance using Haversine formula
    const earthRadius = 6371; // in kilometers
    const latDiff = (propertyLat - userLat) * (Math.PI / 180);
    const lonDiff = (propertyLon - userLon) * (Math.PI / 180);
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(userLat * (Math.PI / 180)) *
      Math.cos(propertyLat * (Math.PI / 180)) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  console.log(distance.toFixed(2));
  };
  const [value, setValue] = React.useState([0, 8000]); // Set initial range values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Showrecentsearch=()=>{  
    setrecentsearch(false)
    setloadingsearch(true)
    
    setTimeout(() => {
      setloadingsearch(false)
      setsearchrender(true)
    }, 3500);
    
    
    
    
  }
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangerating = (event, newValue) => {
    console.log(newValue);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const carouselItems = [
    {
      title: 'First Slide',
      description: 'Description for first slide',
     
    },
    {
      title: 'Second Slide',
      description: 'Description for second slide',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      title: 'Third Slide',
      description: 'Description for third slide',
      
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
   return (
    <>
    <Navbar/>
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
           <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Plan Your Trip !!!
           </h1>
           <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
             Travel to your favourite city !
           </p>
          
        </div>
        
        <div  className="homeCard grid">
        <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="name">Traveller's Name</label>
              <input type="text" placeholder='Name'/>
           </div>
           <div className="datePickerContain locationDiv" >
           <label htmlFor="CheckIn">Check-In - Check-Out Date</label>
        <input
          type="text"
          placeholder="Select Dates"
          onClick={handleToggleDateRangePicker}
          readOnly
          data-aos="fade-right" data-aos-duration="2000"
          
        />
        {showDateRangePicker && (
          <div className="datePickerOverlay">
            <DateRange
              ranges={dateRange}
              onChange={handleRangeChange}
              moveRangeOnFirstSelection={false}
            />
          </div>
        )}
      </div>
           <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Location</label>
              
              <Autocomplete
              type="text"
      disablePortal
      id="combo-box-demo"
      options={locationlist}
    onChange={handleSelect}
     value={selectedLocation}
    getOptionLabel={(option) =>`${option.display_name}`}
   
      renderInput={(params) => <TextField {...params}  
      variant="standard"
      onChange={(event) => { 
        console.log(event.target.value);
        if(event.target.value.length>1){
        axios.get(`https://api.locationiq.com/v1/autocomplete?key=pk.22e9b35abed8cd67a1b40fd18915d085&q=${event.target.value}&limit=5&countrycodes=IN&&dedupe=1`).
      then((response)=>{
        console.log(response.data)
        response.data.map((item)=>{
          console.log(item.display_name)
          console.log(locationlist)
          const updatedList = response.data.map((item) => ({
          display_name: item.display_name,
          lat: item.lat,
          lon: item.lon,
          }))
          console.log(selectedLocation)
         
       
          setlocationlist(updatedList)
          setSelectedLocation(null);
          
        })
    }).catch((err)=>{
      console.log(err)
    })
  }else{
    setlocationlist([])
    setSelectedLocation(null);
  }
}
  
  } />}/>
              
           </div>
           <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder='1 Kms'/>
             
           </div>
           <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Price Range</label>
              {/* <input type="text" placeholder='$100-$500'/> */}
              
              <div className="rangeValues">
        <span>{value[0]}</span>
         <span>{value[1]}</span>
        </div>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0} // Set the minimum value to 0
            max={8000} // Set the maximum value to 8000
          />
        </Box>
           </div>
           <button data-aos="fade-left" data-aos-duration="3500" className='btn' onClick={Showrecentsearch}>Search</button>
        </div>
       
        
      </div>
  
    </section>
    <Popular recentsearch={recentsearch}/>
    {/* <Loadingscreen/> */}
    <div className='container'>
      {loadingsearch &&
  <div className='row mt-5'>
    <div className='col-lg-3 col-md-6 col-sm-12'>
      <div className='mt-2'>
        <Skeleton variant="reactangular" className='float-start' width={60} height={30} />
        <Skeleton variant="rectangular" className='float-end' width={60} height={30} />
      </div>
      <Skeleton variant="rectangular" className='mt-5' width={260} height={30} />
      <Skeleton variant="rectangular" className='mt-2' width={260} height={30} />
      <Skeleton variant="rectangular" className='mt-5' width={100} height={25} />
      <Skeleton variant="rectangular" className='mt-5' width={260} height={30} />
      <div className='mt-3'>
        <Skeleton variant="reactangular" className='float-start' width={60} height={30} />
        <Skeleton variant="rectangular" className='float-end' width={60} height={30} />
      </div>
      <Skeleton variant="rectangular" className='mt-5' width={260} height={30} />
      <Skeleton variant="rectangular" className='mt-2' width={260} height={30} />
      <Skeleton variant="rectangular" className='mt-5' width={100} height={25} />
      <Skeleton variant="rectangular" className='mt-5' width={260} height={30} />
      <div className='mt-3 mb-5'>
        <Skeleton variant="reactangular" className='float-start' width={60} height={30} />
        <Skeleton variant="rectangular" className='float-end' width={60} height={30} />
      </div>
      <Skeleton variant="rectangular" className='mt-5' width={260} height={30} />
      <Skeleton variant="rectangular" className='mt-2' width={260} height={30} />
      <Skeleton variant="rectangular" className='mt-5' width={100} height={25} />
      <Skeleton variant="rectangular" className='mt-5' width={260} height={30} />
    </div>
    <div className='col-lg-6 col-md-12 col-sm-12 mt-2'>
      <Skeleton variant="rectangular" className='mb-4' width={400} height={20} />
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <Skeleton variant="rounded" className='mt-2 mb-2' width={180} height={250} />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12'>
          <Skeleton variant="rectangular" className='mt-2 mb-4' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={350} height={20} />
          <Skeleton variant="rounded" className='mt-2' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-3' width={250} height={20} />
          <Skeleton variant="rectangular" className='mt-3' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={250} height={20} />
        </div>
      </div>
      <Skeleton variant="rectangular" className='mb-4' width={400} height={20} />
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <Skeleton variant="rounded" className='mt-2 mb-2' width={180} height={250} />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12'>
          <Skeleton variant="rectangular" className='mt-2 mb-4' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={350} height={20} />
          <Skeleton variant="rounded" className='mt-2' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-3' width={250} height={20} />
          <Skeleton variant="rectangular" className='mt-3' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={250} height={20} />
        </div>
      </div>
      <Skeleton variant="rectangular" className='mb-4' width={400} height={20} />
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <Skeleton variant="rounded" className='mt-2 mb-2' width={180} height={250} />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12'>
          <Skeleton variant="rectangular" className='mt-2 mb-4' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={350} height={20} />
          <Skeleton variant="rounded" className='mt-2' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-3' width={250} height={20} />
          <Skeleton variant="rectangular" className='mt-3' width={350} height={20} />
          <Skeleton variant="rectangular" className='mt-2' width={250} height={20} />
        </div>
      </div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'>
      <Skeleton variant="rounded" className='mt-2 ms-3 mb-2' width={300} height={20} />
      <Skeleton variant="rounded" className='mt-4 mb-2' width={200} height={20} />
      <Skeleton variant="rounded" className='mt-4' width={200} height={20} />
      <Skeleton variant="rectangular" className='mt-4' width={170} height={20} />
      <Skeleton variant="rounded" className='mt-5 mb-2' width={200} height={20} />
      <Skeleton variant="rounded" className='mt-2' width={100} height={20} />
      <Skeleton variant="rounded" className='mt-5' width={300} height={40} />
    </div>
  </div>
 }
 {searchrender &&
  <Card className='mt-5'>
      <CardContent>
        <div className='row'>
          <div className='col-md-3'>
            <Card>
              <CardContent>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Filters</p>
                  <p>Clear All</p>
                </div>
                <div className="row">
                  <div className="col-9">
                    <p className="d-inline" style={{ fontSize: "12px" }}>
                      Show recommended only
                    </p>
                  </div>
                  <div className="col-3">
                    <Checkbox
                      className="mr-auto"
                      checked={checked}
                      onChange={handleCheckboxChange}
                      color="primary"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-9">
                    <p className="d-inline" style={{ fontSize: "12px" }}>
                      Show pay@Hotel only
                    </p>
                  </div>
                  <div className="col-3">
                    <Checkbox
                      className="mr-auto"
                      checked={checked}
                      onChange={handleCheckboxChange}
                      color="primary"
                    />
                  </div>
                </div>
                <div className="row mt-3">
          <div className="col-md-9 col-8">
            <p>Price range</p>
          </div>
          <div className="col-md-3 col-4">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 col-8">
            <p className="d-inline" style={{ fontSize: "14px" }}>
              Upto ₹2,000
            </p>
          </div>
          <div className="col-md-3 col-4">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 col-8">
            <p className="d-inline" style={{ fontSize: "14px" }}>
              ₹2,001 - ₹4,000
            </p>
          </div>
          <div className="col-md-3 col-4">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 col-8">
            <p className="d-inline" style={{ fontSize: "14px" }}>
              ₹4,001 - ₹6,000
            </p>
          </div>
          <div className="col-md-3 col-4">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 col-8">
            <p className="d-inline" style={{ fontSize: "14px" }}>
              ₹6,001 - ₹8,000
            </p>
          </div>
          <div className="col-md-3 col-4">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 col-8">
            <p className="d-inline" style={{ fontSize: "14px" }}>
              ₹8,000 +
            </p>
          </div>
          <div className="col-md-3 col-4">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          </div>
        </div>

                 
<div className="mt-3">
  <p>Star rating</p>
  {[5, 4, 3, 2, 1].map((rating) => (
    <div className="row" key={rating}>
      <div className="col-9">
      <Rating
        name="star-rating"
        value={rating}
        readOnly
        onChange={handleChangerating}
        size="small"
      />
      </div>
      <div className="col-3">
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        color="primary"
      />
      </div>
    </div>
  ))}
</div>

              </CardContent>
            </Card>
          </div>
          <div className='col-12 col-md-9'>
  <Card>
    <CardContent>
      <div>Hotel</div>
      <div className='mt-3'>
        <div className="row">
          <div className='col-12 col-md-4'>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              interval={3000}
              stopOnHover={false}
            >
              {/* Carousel slides */}
                    <div>
                      <img src={img2} alt="Image 1" />
                    </div>
                    <div>
                      <img src={img5} alt="Image 2" />
                    </div>
                    <div>
                      <img src={img7} alt="Image 3" />
                    </div>
            </Carousel>
          </div>
          <div className='col-12 col-md-4'>
            <Rating
              name="star-rating"
              value={4}
              readOnly 
              onChange={handleChangerating}
              size="small"
            />
            <p>Hotel Sam Residency</p>
            <div style={{ fontSize: '12px', display: 'inline' }}>
              <LocationOnIcon />
              <span>Gandhipuram</span>
              <br />
              <NearMeIcon />
              <span>4.5 km from city center</span>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <span><DoneIcon color='success'/>100% GST invoice</span><br/>
            <span><DoneIcon color='success'/>Free cancellation till 11 Jul'23 11:59 AM</span><br/>
            <h5 className='mt-1'>₹1,100/night</h5>
            <button className='btn' onClick={toggleDrawer('right', true)}>Select Room</button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <div>Hotel</div>
      <div className='mt-3'>
        <div className="row">
          <div className='col-12 col-md-4'>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              interval={3000}
              stopOnHover={false}
            >
              {/* Carousel slides */}
                    <div>
                      <img src={img2} alt="Image 1" />
                    </div>
                    <div>
                      <img src={img5} alt="Image 2" />
                    </div>
                    <div>
                      <img src={img7} alt="Image 3" />
                    </div>
            </Carousel>
          </div>
          <div className='col-12 col-md-4'>
            <Rating
              name="star-rating"
              value={4}
              readOnly 
              onChange={handleChangerating}
              size="small"
            />
            <p>Hotel Sam Residency</p>
            <div style={{ fontSize: '12px', display: 'inline' }}>
              <LocationOnIcon />
              <span>Gandhipuram</span>
              <br />
              <NearMeIcon />
              <span>4.5 km from city center</span>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <span><DoneIcon color='success'/>100% GST invoice</span><br/>
            <span><DoneIcon color='success'/>Free cancellation till 11 Jul'23 11:59 AM</span><br/>
            <h5 className='mt-1'>₹1,100/night</h5>
            <button className='btn' onClick={toggleDrawer('right', true)}>Select Room</button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card>
    <CardContent>
      <div>Hotel</div>
      <div className='mt-3'>
        <div className="row">
          <div className='col-12 col-md-4'>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              interval={3000}
              stopOnHover={false}
            >
              {/* Carousel slides */}
                    <div>
                      <img src={img2} alt="Image 1" />
                    </div>
                    <div>
                      <img src={img5} alt="Image 2" />
                    </div>
                    <div>
                      <img src={img7} alt="Image 3" />
                    </div>
            </Carousel>
          </div>
          <div className='col-12 col-md-4'>
            <Rating
              name="star-rating"
              value={4}
              readOnly 
              onChange={handleChangerating}
              size="small"
            />
            <p>Hotel Sam Residency</p>
            <div style={{ fontSize: '12px', display: 'inline' }}>
              <LocationOnIcon />
              <span>Gandhipuram</span>
              <br />
              <NearMeIcon />
              <span>4.5 km from city center</span>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <span><DoneIcon color='success'/>100% GST invoice</span><br/>
            <span><DoneIcon color='success'/>Free cancellation till 11 Jul'23 11:59 AM</span><br/>
            <h5 className='mt-1'>₹1,100/night</h5>
            <button className='btn' >Select Room</button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>


           
            
          </div>
        </div>
      </CardContent>
    </Card>
 }
    </div>

    {/* <Drawer anchor="right" open={isOpen} onClose={toggleDrawer} PaperProps={{ style: { width: 1000 } }}>
           <div style={{background:"blue"}}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>
   
    </Drawer> */}
    <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        PaperProps={{ style: { width: 1000 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2,backgroundColor:'#7862dc'}}>
          <Typography variant="h6" color={"#fff"}>Hotel Sam Residency</Typography>
          <IconButton onClick={toggleDrawer('right', false)}>
            <CloseIcon htmlColor={'#fff'} />
          </IconButton>
        </Box>

    <Table className='mt-3'>
  <TableHead>
    <TableRow>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>Hotel Name</TableCell>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>Travellers</TableCell>
      <TableCell style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>Check-in/Check-out date</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Hotel Sam Residency</TableCell>    
      <TableCell>2</TableCell>
      <TableCell>09 Jun - 10 Jun</TableCell>
    </TableRow>

    </TableBody>
    </Table>

     <div className='row justify-content-center'>
      <div className='col-6'>
      
            </div>
            </div>


    


        


      
</Drawer>


    
    </>
   )
 }
 
 export default Home