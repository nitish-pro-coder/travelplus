import React, {useContext, useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { Box, Button, CardContent, Checkbox, Chip, DialogContentText, Divider, FormGroup, MenuItem, Popover, Rating, Select, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { Box, Button,  CardContent, Checkbox, Divider, Popover, Rating, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Slider from '@mui/material/Slider';
import Popular from '../Popular/Popular';
import Navbar from '../../components/Navbar/Navbar';
import { CheckBox, NearMe, RemoveCircle } from '@mui/icons-material';
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
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle,DialogContent,DialogActions} from '@mui/material';
import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {BookingContext} from '../../Context/BookingContextProvider'
import { add } from 'date-fns';
import { GridAddIcon } from '@mui/x-data-grid';

 const Home = () => {
  const [open, setOpen] = React.useState(false);
  const {Initialbookingdetails,addtobookingsearch,Addtorecentsearch,}= useContext(BookingContext)
  function valuetext(value) {
    return value;
  }
    useEffect(()=>{
      Aos.init({duration: 1000})
    }, [])
    const handleRangeChange = (ranges) => {
      setDateRange([ranges.selection]);
      console.log(ranges);
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
    const [hotelapilist,sethotelapilist]=React.useState([])
    const [roomapilist,setroomapilist]=React.useState([])
    const [locationlist,setlocationlist]=React.useState([])
  const [location,setlocation]=React.useState([{locationname:"",lat:"",lon:""}])
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });
  const [select,setSelect] = React.useState('Select');
  const [trdetopen,settrdetopen]=React.useState(false);
  const [recentsearcharr,setrecentsearcharr]=React.useState([]);
  const [roomrequest,setroomrequest]=React.useState();
  const [hotelrequest,sethotelrequest]=React.useState();
  const [selectedroom,setselectedroom] = React.useState();


  
  const handleSelect = (event, value) => {
    setSelectedLocation(value);
    console.log(value)
    

    setlocation([{locationname:value?.display_name,lat:value?.lat,lon:value?.lon}])
  };

 
  const [value, setValue] = React.useState([100, 5000]); // Set initial range values

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  const GST=[];
  
  const Showrecentsearch=()=>{
    

    axios.post('http://localhost:3000/api/Citylist/',{Cityname:selectedLocation}).
    then((res)=>{console.log(res.data)})
    .catch((err)=>{console.log(err)})
    console.log(Initialbookingdetails)
    // addtobookingsearch([
    //   {
    //     locationname:"Lsdjfsbfwqeqeiosdjg"||Initialbookingdetails?.locationname
    //   }])
      console.log(Initialbookingdetails)

      // if(selectedLocation!==""){
           
      // }
    addtobookingsearch([])
    setrecentsearch(false)
    setloadingsearch(true)
//     console.log(location)
//     var data = {
//       checkin: checkInDate,
//       checkout: checkOutDate,
//       expected_checkin_time: "13:00",
//       expected_checkout_time: "11:59",
//       latitude: location[0]?.lat,
//       longitude: location[0]?.lon,
//       room_config: "A,A,A,A",
//       // grade: "HS1",
//       payment_mode: "Pay at Hotel",
//       radius: 15,
//       min:100,
//       max: value[1]
//     };
    
//     var config = {
//       method: 'post',
//       url: 'https://developers.hummingbirdindia.com/api/v2.2/hotelavailability',
//       headers: { 
//         'Authorization': 'FA31C4183B624FF6A70D776420B49B41',
//         'Content-Type': 'application/json', 
//         'Accept': 'application/json'
//       },
//       data : data
//     }
//     axios(config)
// .then(response=> {
//   console.log(response.data.data);
//   sethotelapilist(response.data.data);
// })
// .catch(error=> {
//   console.log(error);
// });
    
    setTimeout(() => {
      setloadingsearch(false)
      setsearchrender(true)
    }, 3500);
    
    
    
    
  }
  const [checked, setChecked] = React.useState([]);

  const handleCheckboxChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    if (checked.includes(value)) {
      setChecked(checked.filter((item) => item !== value));
    } else {
      setChecked([...checked, value]);
    }
  };
  const handleChangerating = (event, newValue) => {
    console.log(newValue);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (anchor, open,index,item) => (event) => {
    console.log(item)
    sethotelrequest(item)
    var roomdata = {
      "hotelid": hotelapilist[index]?.hotelid,
      "hotelcode":hotelapilist[index]?.hotelcode,
      "checkin": checkInDate,
      "checkout":checkOutDate, 
      "expected_checkin_time": "12:00",
      "expected_checkout_time": "12:00",
      room_config: "A",
      "grade": "HS1"
    }
    setroomrequest(roomdata);
    var config = {
      method: 'post',
      url: 'https://developers.hummingbirdindia.com/api/v2.2/roomavailability',
      headers: { 
        'Authorization': 'FA31C4183B624FF6A70D776420B49B41',
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      data : roomdata
    }
    axios(config)
.then(response=> {
  console.log(response.data.data);
  setroomapilist(response.data.data);
})
.catch(error=> {
  console.log(error);
});
    

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });

  };
  const carouselItems = [
    {
      title: 'Deluxe Room',
      description: '₹1,935.0',
      description1: 'Room Only',
     
    },
    {
      title: 'Executive Room',
      description: '₹2,128.0',
    },
    {
      title: 'Family Room',
      description: '₹2,707.0',
      
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };  
  const [hoteldetailsopen,sethoteldetailsopen]=React.useState(false);
  let tempElement = document.createElement("div");
  let textContent = tempElement.textContent;
  

  const handleClickOpen = () => {
    sethoteldetailsopen(true);
  };
  const handletrdetopenOpen = () => {
    settrdetopen(true);
  };

  const handleClose = () => {
    sethoteldetailsopen(false);
  };
  const handletrdetclose =()=>{
    settrdetopen(false)
  }
  

  const onButtonClick = (ind) =>{
    console.log(ind)
    console.log(roomapilist[0].room_type[ind])
    console.log(roomapilist)
    console.log(selectedroom)
    setselectedroom(roomapilist[0].room_type[ind])
    
  }
  const [popoverOpen, setPopoverOpen] = React.useState(Array(hotelapilist.length).fill(false));
  const [amenitiesOpen, setamenitiesOpen] = React.useState(Array(hotelapilist.length).fill(false));

  const handlePopoverOpen = (index) => {
    const updatedPopoverOpen = [...popoverOpen];
    updatedPopoverOpen[index] = true;
    setPopoverOpen(updatedPopoverOpen);
  };
  const handleamenitiesOpen = (index) => {
    const updatedPopoverOpen = [...popoverOpen];
    updatedPopoverOpen[index] = true;
    setamenitiesOpen(updatedPopoverOpen);
  };
  const handlePopoverClose = (index) => {
    const updatedPopoverOpen = [...popoverOpen];
    updatedPopoverOpen[index] = false;
    setPopoverOpen(updatedPopoverOpen);
  };
  const handleaminitiesClose = (index) => {
    const updatedPopoverOpen = [...popoverOpen];
    updatedPopoverOpen[index] = false;
    setamenitiesOpen(updatedPopoverOpen);
  };
 
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEl(null);
  };
  const checkInDateRef = React.useRef(null);
  const checkOutDateRef = React.useRef(null);
  const [currentDate, setCurrentDate] = React.useState('');
  useEffect(() => {
    
   
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
  
    const formattedDate = `${year}-${month}-${day}`;
    setCheckInDate(formattedDate)
    setCheckOutDate(formattedDate)
  }, []);
  const [checkInDate, setCheckInDate] = React.useState('');
const [checkOutDate, setCheckOutDate] = React.useState('');
  
  const handleCheckInDateChange = (event) => {
    checkOutDateRef.current.focus();
    console.log(event.target.value);
    const selectedDate = event.target.value;
    setCheckInDate(selectedDate);
  setCheckOutDate(selectedDate);
  };

  const handleCheckOutDateChange = (event) => {
    const selectedDate = event.target.value;
    console.log(selectedDate)
    
  setCheckOutDate(selectedDate);
  };

  const handleBackdropClick = (event) => {
    //these fail to keep the modal open
    event.stopPropagation();
    return false;
  };

  const BookingConfirmation=(ind)=>{
    // console.log(roomrequest)
    
    console.log(selectedroom)
    console.log(roomrequest)
    // Create three objects
const object1 = 
{
  BookingId:"",
  Booking_status:"Booked",
  Check_In_Date:"",
  Check_Out_Date:"",
  Client_name:"",
  City:"",
  City_Id:"",
  StateId:"",
  State:"",
  Expected_CheckIn_Time:"",
  Expected_CheckOut_TIme:"",
  CreatedDate:"",
  MOdifiedDate: "",
}
const object2 = {
  Id:0,
  Traveler_name:"Guru",
  BookingId:"",
  CreatedDate: "",
  MOdifiedDate: "",
};
const object3 = {
  Id:0,
  HotelId:roomrequest?.hotelid,
  Hotel_Name:hotelrequest.hotelname,
  Hotel_Amenities:hotelrequest.amenities,
  CreatedDate: "",
  MOdifiedDate: "",
};

// Create a new object to hold the three objects
const combinedObject = { objects: [object1,object2,object3] };
console.log(combinedObject);
// axios.post('https://developers.hummingbirdindia.com/api/v2.2/hotelbooking',{})
// .then(response=> {
//   console.log(response);
// })
// .catch(error=> {
//   console.log(error)
// })

    
    // var data = 
    //   {
    //     "hotelid":  roomrequest?.hotelid,
    //     "checkin": checkInDate,
    //     "checkout": checkOutDate,
    //     "expected_checkin_time": "12:00",
    //     "expected_checkout_time": "11:59",
    //     "room_type_code": selectedroom?.room_type_code,
    //     "rate_plan_code": selectedroom?.rate_plan_code,
    //     "booker_name": "Nitish",
    //     "booker_email": "nitish@warblerit.com",
    //     "client_requestno": "XYZ",
    //     "room_config": roomrequest?.room_config,
    //     "tariff": selectedroom?.tariff.toString(),
    //     "room1": [
    //       {
    //         "emp_code": "EMP1082",
    //         "title": "Mr",
    //         "first_name": "XXXX",
    //         "last_name": "YYYY",
    //         "mobile_no": "123456789",
    //         "email": "xxxxx@yyy.com",
    //         "designation": "Manager",
    //         "grade": "Manager",
    //         "column1": "Test Data 1",
    //         "column2": "Test Data 2",
    //         "column3": "Test Data 3",
    //         "column4": "Test Data 4",
    //         "column5": "Test Data 5",
    //         "column6": "Test Data 6",
    //         "column7": "Test Data 1",
    //         "column8": "Test Data 8",
    //         "column9": "Test Data 9",
    //         "column10": "Test Data 10"
    //       }
    //     ]
        
      
    // };
    

    // console.log(data)
    // console.log(hotelapilist[index]?.hotelid)
    
//     var config = {
//       method: 'post',
//       url: 'https://developers.hummingbirdindia.com/api/v2.2/hotelavailability',
//       headers: { 
//         'Authorization': 'FA31C4183B624FF6A70D776420B49B41',
//         'Content-Type': 'application/json', 
//         'Accept': 'application/json'
//       },
//       data : data
//     }
//     axios(config)
// .then(response=> {
//   console.log(response.data.data);
//   sethotelapilist(response.data.data);
// })
// .catch(error=> {
//   console.log(error);
// });
    
  }
  const open1 = Boolean(anchorEl);

  const [selectedValue, setSelectedValue] = React.useState(0);
  const [selectedtrvValue, setSelectedtrvValue] = React.useState(0);
  const [isCardVisible, setIsCardVisible] = React.useState(false);
  const [formattedChkInDate,setformattedChkInDate]=React.useState('');
  const [formattedChkOutDate,setformattedChkOutDate]=React.useState('');

  const handleIncrement = () => {
    setSelectedValue((prevValue) =>prevValue < 4 ? prevValue + 1 : prevValue);
  };
  const handletrvIncrement = () => {
    setSelectedtrvValue((prevValue) =>prevValue < 8 ? prevValue + 1 : prevValue);
  };

  const handleDecrement = () => {
    setSelectedValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  };
  const handletrvDecrement = () => {
    setSelectedtrvValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
    
  };

  const handleTextFieldClick = () => {
    setIsCardVisible((prevState) => !prevState);
  };

  React.useEffect(() => { 
    console.log(checked);
    const item = {
      amenities: [true, false, true, false, true, true]
    };
    
    
    const dateObj = new Date(checkInDate);
    const dateObj1 = new Date(checkOutDate);

    setformattedChkInDate(dateObj.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short'
}))

  setformattedChkOutDate(dateObj1.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short'
}))

console.log(selectedroom?.tariff != null || selectedroom?.tariff != ''||selectedroom?.tariff===undefined ? selectedroom?.tariff : "dgsdg")
},[checked],[checkInDate],[checkOutDate],[selectedroom])

useEffect(() => {
  
  console.log(recentsearcharr);
}, []);


const [chips, setChips] = React.useState([]);
const [chipvisible, setchipvisible] = React.useState(false);
const handleChipDelete = (chipToDelete) => () => {
  setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
 
};

const handleKeyDown = (event) => {
  if (event.key === 'Enter' && event.target.value !== '') {
    const newChip = event.target.value;
    console.log(newChip)
    if (chips.length < selectedtrvValue) {
      setChips((prevChips) => [...prevChips, newChip]);
      setchipvisible(false);
    }
    if (chips.length > selectedtrvValue) {
      setchipvisible(true);
    }
    
    
    event.target.value = '';
  }
};

const handleBlur = () => {
 
  setIsCardVisible((prevState) => !prevState);
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
        <div data-aos="fade-right" data-aos-duration="2000" >
              <label htmlFor="location">Location</label>
              
              <Autocomplete
              type="text"
      disablePortal
      id="combo-box-demo"
      options={locationlist}
    onChange={handleSelect}
     value={selectedLocation}
    getOptionLabel={(option) =>`${option?.display_name}`}
      renderInput={(params) => <TextField {...params}  
      variant="standard"
      onChange={(event) => { 
        console.log(event.target.value);
        if(event.target.value.length>1){
        axios.get(`https://api.locationiq.com/v1/autocomplete?key=pk.22e9b35abed8cd67a1b40fd18915d085&q=${event.target.value}&limit=5&countrycodes=IN&&dedupe=1`).
      then((response)=>{
        console.log(response.data)
        response.data.map((item)=>{
          console.log(locationlist)
          const updatedList = response.data.map((item) => ({
          display_name: item?.display_name,
          lat: item.lat,
          lon: item.lon,
          }))
          setrecentsearcharr([...recentsearcharr,updatedList])
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
  } />}
  PaperComponent={({ children }) => (
    <div style={{ zIndex: 1500 /* Set your desired z-index value */, position: 'relative' }}>{children}</div>
  )}
  />
              
           </div>
           <div data-aos="fade-right" data-aos-duration="2500">
    <TextField
      id="check-in-date"
      label="Check-In Date"
      type="date"
      value={checkInDate}
      fullWidth
      
      inputProps={{
        min: currentDate,
      }}
      onChange={handleCheckInDateChange}
      inputRef={checkInDateRef}
    />
  </div>
  <div data-aos="fade-right" data-aos-duration="2500">
    <TextField
      id="check-out-date"
      label="Check-Out Date"
      type="date"
      value={checkOutDate}
      onChange={handleCheckOutDateChange}
      fullWidth
      inputRef={checkOutDateRef}
    />
  </div>

<Dialog open={trdetopen} onClose={handletrdetclose}  onBackdropClick={handleBackdropClick} disableBackdropClick>
<DialogTitle>
    No of Travelers
    <IconButton
      edge="end"
      color="inherit"
      onClick={handletrdetclose}
      aria-label="close"
      className='float-end'
      >
     
      <CloseIcon />
    </IconButton>
  </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              margin="dense"
              
              label="Traveler Name"
              type="text"
              fullWidth
              variant="outlined"
              required // Added required attribute
   
            />
            <TextField
              margin="dense"
              
              label="Mobileno"
              type="number"
              fullWidth
              variant="outlined"
              required // Added required attribute
              inputProps={{
                inputMode: 'numeric',
              }}
            />
            <TextField
              margin="dense"
              id="gstin"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              required // Added required attribute
            />
           
          </Box>
        </DialogContent>
      </Dialog>
          
                     
           
           {/* <div data-aos="fade-right" data-aos-duration="2500">
              <label htmlFor="distance">Distance</label>
              <TextField id="standard-basic" variant="standard" />
           </div> */}
           <div data-aos="fade-right" data-aos-duration="2000">
              <label htmlFor="name">Rooms and Travelers</label>
              <div style={{ height: '50px' }}>
              
                <TextField id="standard-basic"  variant="standard" readOnly="true" value={
    selectedValue !== "" ? "Rooms: " + selectedValue + " Travelers: " + selectedtrvValue : ""
}
 onClick={handleTextFieldClick} />
              {/* </div> */}
              
              {isCardVisible && (  
              <Card>
               <CardContent>
     
      <div className="row">
        <div className="col-5 mt-2">
          <span>Rooms:</span>
        </div>
        <div className="col-7">
      <IconButton onClick={handleDecrement}>
        <RemoveCircle />
      </IconButton>
      <span>{selectedValue}</span>
      <IconButton onClick={handleIncrement}>
        <GridAddIcon />
      </IconButton>
       </div>
       
       </div>
       <div className="row mt-3">
        <div className="col-5 mt-2">
          <span>Travelers:</span>
        </div>
        <div className="col-7">
        <IconButton onClick={handletrvDecrement}>
        <RemoveCircle />
      </IconButton>
      <span>{selectedtrvValue}</span>
      <IconButton onClick={handletrvIncrement}>
        <GridAddIcon />
      </IconButton>
       </div>
       </div>
       </CardContent> 
      </Card>
              )}
              </div>
        </div>
           <div data-aos="fade-right" data-aos-duration="3000">
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
            min={100} 
            max={5000} 
          />
        </Box>
           </div>
           <div data-aos="fade-right" data-aos-duration="2000">
              <label htmlFor="name">Traveler Name</label>
              <div style={{ height: '50px' }}>
              <TextField
      id="standard-basic"
      variant="standard"
      onKeyDown={handleKeyDown}
      InputProps={{
        readOnly: chipvisible,
        startAdornment: (
          <>
            { chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                onDelete={handleChipDelete(chip)}
                style={{ margin: '2px' }}
              />
            ))}
          </>
        ),
      }}
    />
              </div>
        </div>
           <button data-aos="fade-left" data-aos-duration="3500" className='btn' onClick={Showrecentsearch}>Search</button>
        </div>
       
        
      </div>
  
    </section>
    <Popular recentsearch={recentsearch} recentsearcharr={recentsearcharr}/>
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
          <Typography variant="body1">Filters</Typography>
          <button className='btn-like'  onClick={()=>{setChecked([])}} >Clear All</button>
        </div>

        

        

      

        <div className="mt-3">
          
          <Typography variant="body1">Star rating</Typography>
           
         <FormGroup>
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
                <FormControlLabel
        control={<Checkbox checked={checked.includes(rating.toString())}
        onChange={handleCheckboxChange}
        value={rating.toString()}
        color="primary" />}
      />
                </div>
              </div>
            ))}
            </FormGroup>
          
        </div>
      </CardContent>
    </Card>
          </div>
     
          <div className='col-12 col-md-9' >
         
          {searchrender && hotelapilist && hotelapilist.map((item, index) => {
  if (item.star_rating && checked.includes(item.star_rating.toString()) || checked.length === 0) {
    if (item.hoteltype !== "GH") {
    return (
  <Card key={index}>
    <CardContent>
      <div>{item.hoteltype}</div>
      <div className='mt-3'>
        <div className="row">
          <div className='col-12 col-md-4'>
            {item.hotelimage.length > 1 && 
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
  <img
    src={item.hotelimage}
    style={{ maxHeight: "150px", objectFit: "cover" }}
    alt="Image 1"
  />
</div>
                    {/* <div>
                      <img src={img5} alt="Image 2" />
                    </div>
                    <div>
                      <img src={img7} alt="Image 3" />
                    </div> */}
            </Carousel>
            }
            
            {/* {item.hotelimage.length === 1 &&
              <img
              src={item.hotelimage}
              style={{ maxHeight: "150px", objectFit: "cover" }}
              alt="Image 1"
            />
          
            } */}
          </div>
          
          <div className='col-12 col-md-4'>
          
  <Rating
    name="star-rating"
    value={item.star_rating}
    readOnly
    onChange={handleChangerating}
    size="small"
  />
  {/* {item.star_rating && checked.includes(item.star_rating.toString()) && (
)} */}
            <p>{item.hotelname}</p>
            <div style={{ fontSize: '12px', display: 'inline' }}>
              <LocationOnIcon />
              <span>{item.locationinfo.address.locality}</span>
              <br />
              <NearMeIcon />
              <span>{item.distance} km from destination</span>
              <br/>
              {/* <span className='text-decoration-underline' key={index} style={{cursor:"pointer"}} 
              onClick={() => handlePopoverOpen(index)}
              aria-describedby={`popover-${index}`}
              >Details</span> */}
              <button
       className='btn-like' key={index} style={{cursor:"pointer"}} 
       onClick={() => handlePopoverOpen(index)}
       aria-describedby={`popover-${index}`}
>
  Details
</button>
<button
       className='btn-like ms-3' key={index} style={{cursor:"pointer"}} 
       onClick={() => handleamenitiesOpen(index)}
       aria-describedby={`popover-${index}`}
>
  Amenities
</button>
              {/* <button
      className='btn'
      onClick={() => handlePopoverOpen(index)}
      aria-describedby={`popover-${index}`}
    >
      Details
    </button> */}
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <span><DoneIcon color='success'/>Gst Status : {item.gst_status}</span><br/>
            <span><DoneIcon color='success'/>Free cancellation till {item.freecancellationuntil}</span><br/>
            <h5 className='mt-1'>₹{item.tariff}/night</h5>
            <button className='btn' onClick={toggleDrawer('right', true,index,item)}>Select Room</button>
            <Dialog
  open={popoverOpen[index]}
  onClose={() => handlePopoverClose(index)}
  fullWidth
  maxWidth="xs"
  disableBackdropClick
>
  <DialogTitle className="border-bottom text-center">
      {item.hotelname}
    <IconButton aria-label="close" onClick={() => handlePopoverClose(index)} className="position-absolute end-0">
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent>
    <p>{item.hoteldescription}</p>
  </DialogContent>
</Dialog>
{/* {item.amenities
  .filter((amenity) => amenity === true)
   */}
    
      <div key={index}>
        
        {/* Render additional JSX for each filtered amenity */}
      
    

<Dialog
key={index}
  open={amenitiesOpen[index]}
  onClose={() => handleaminitiesClose(index)}
  fullWidth
  maxWidth="xs"
>
  <DialogTitle className="border-bottom text-center">
  Amenities List
    <IconButton aria-label="close" onClick={() => handleaminitiesClose(index)} className="position-absolute end-0">
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent>
  {Object.keys(item.amenities).map((key, index) => {
      if (item.amenities[key]) {
        return <li key={index}>{key}</li>;
      }
      return null;
    })}
  </DialogContent>
</Dialog>
</div>
{/* ); */}


        
      
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  
  
  
  );
}
}

return null; // Return null if the condition is not met to skip rendering
})}
           
            
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
    {roomapilist.map((item, indexkey) => (
    <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        PaperProps={{ style: { width: "80%" } }}
      >

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2,backgroundColor:'#7862dc'}}>
          <Typography variant="h6" color={"#fff"}>{item.hotelname}</Typography>
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
      <TableCell>{item.hotelname}</TableCell>    
      <TableCell>{selectedValue}</TableCell>
      <TableCell>{formattedChkInDate} - {formattedChkOutDate}</TableCell>
    </TableRow>

    </TableBody>
    </Table>

     <div className='row mt-3'>
      <div className='col-6'>
        {/* <Card >
          <CardContent> */}
      {/* <Carousel
      showThumbs={false}
      infiniteLoop
      swipeable={false}
      showIndicators={false}
      autoFocus={true}
       
     > */}
       
        <>
        
        {
        item.room_type.map((roomtype, ind) => (
         
            <>
         <Card className='mb-3' key={ind}>
          <CardContent>
     <Typography  variant="h5" component="div" sx={{background:"rgba(216, 216, 216, 0.2)",p:3}}>
          {roomtype.name}
        </Typography>
        <div className='row mt-3'>
  <div className='col-6'>
    <img
      className='mx-auto d-block'
      src={roomtype.room_image}
      style={{ maxHeight: "150px", objectFit: "cover",maxWidth: "50%" }}
      alt="Image 1"
    />
  </div>
  <div className='col-6'>
  <TableContainer>
      <Table className="table table-bordered">
        <TableHead>
          <TableRow>
            <TableCell>Tariff</TableCell>
            <TableCell>Meal Plan</TableCell>
            <TableCell>Inclusion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{roomtype.tariff}</TableCell>
            <TableCell>{roomtype.mealplan}</TableCell>
            <TableCell>{roomtype.inclusion}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
</div>






      
       
      <div className='row mt-3'>
        <div className='col-8'>
        <Accordion sx={{width:'350px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>View cancellation policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
            {roomtype.cancellation_policy.replace(/<[^>]+>/g,'')}
          {/* </Typography> */}
         
          
          
        </AccordionDetails>
      </Accordion>
          </div>
          <div className='col-4'>
          <button className='btn' onClick={() => onButtonClick(ind)}>Select</button>
          </div>
        </div>


        
       
        </CardContent>
     
        </Card>
        </>
        
         ))} 
        </>
       
    
  
            </div>
            
      <div className='col-6'>
    <Card >
     <CardContent>
   <h4>Price Breakup</h4>
   
    <React.Fragment>
      <div className='row ms-3 mt-3'>
        <div className='col-6'>
          <p>Room Charges</p>
        </div>
        <div className='col-6'>
        
  <span>₹{selectedroom?.tariff === null || selectedroom?.tariff === ''||selectedroom?.tariff===undefined ? item.room_type[0]?.tariff : selectedroom?.tariff}</span>

        </div>
      </div>

      <Divider variant="middle" />

      <div className='row ms-3 mt-4'>
        <div className='col-6'>
          <p>Total booking amount</p>
        </div>
        <div className='col-6'>
          
          
  <h4 >₹{selectedroom?.tariff === null || selectedroom?.tariff === ''||selectedroom?.tariff===undefined ? item.room_type[0]?.tariff : selectedroom?.tariff}</h4>

        </div>
      </div>
    </React.Fragment>



    <div className='mt-3 ms-4 mb-3'>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={GST}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="GST" />}
    />
    </div>
    <Divider variant="middle mt-3" />
    <div className='mt-3 mb-3'>
      <h4>Payment mode</h4>
    </div>
  <div className='ms-4'>
  <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="hotel" control={<Radio />} label="Pay @ HOTEL" />
    <FormControlLabel value="now" control={<Radio />} label="Pay now" />
    <FormControlLabel value="wallet" control={<Radio />} label="Wallet" />
  </RadioGroup>
</FormControl>
</div>
    <div className='row justify-content-center'>
      <div className='col-8'>
        <button className='btn' onClick={BookingConfirmation}>Confirm Booking</button>
      </div>
       </div>
       
    </CardContent>
    </Card>
   
    </div>
            </div>
    <Divider className='mt-4'></Divider>
    

</Drawer>   
))}


    
    </>
   )
 }
 
 export default Home