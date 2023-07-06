import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/loader';
import { Box, CircularProgress } from '@mui/material';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [clientname, setClientname] = useState('');
  const [documentid,setdocumentid]=useState('')
  const [loading, setLoading] = useState(false);

  const navigate= useNavigate()

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    setShowOtpField(true);
    setEmail('');
  };

  const handleLoginSubmit = (event) => {
    console.log(event.target)
    
      const data = {
        otp: otp,
        id:documentid
      };

      axios.post('http://localhost:3000/api/otpverification/', data)
        .then(response => {
          // Handle successful response
          console.log(response)
          setIsSignUpMode(false);
          console.log(response.data);
          if(response.data=="Valid OTP")
          {
            navigate('/Book-now')
          }
          
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
    

    setShowOtpField(true);
    setEmail('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const sendmail=(event) =>{
    console.log(event.target)
    setLoading(true);
    axios.post('http://localhost:3000/api/employeedetails/',{"email":email}).then(res=>{
      console.log(res.data)
      setIsSignUpMode(false);
      if(res.data.message == "Email matched successfully")
      {
        setClientname(res.data.data[0].clientname); 
        setdocumentid(res.data.data[0].id);
       
        //  if(res.data.data[0].clientname)
        //  {
        //  }
        axios.post('http://localhost:3000/api/sendmail/',{"mailid":email,"id":res.data.data[0].id})
      .then(response => {
        setShowOtpField(true);
       
        setLoading(false);
      
        // Handle successful response
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
      }
    }).catch(err=>{
       console.log(err);
    })

    

  }

  return (
    <>
   
    <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
    
      <div className="forms-container">
      {loading && 
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
               <CircularProgress />
            </Box>
    }
        <div className="signin-signup">
       
          {!showOtpField ?
          (
            <>
             
            <form  className="sign-in-form" >
              <h2 className="title">Let's Go!</h2>
              {!showOtpField && (
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
              )}
              <input type='button' value="Login" className="btn1 solid" onClick={sendmail}  />
            </form>
            
           
           </> 
          ) : (

            <form action="#" className="sign-in-form">
              <h2 className="title">Enter OTP</h2>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="text" placeholder="OTP" value={otp} onChange={handleOtpChange} />
              </div>
              <button value="Verify OTP" className="btn1 solid" onClick={handleLoginSubmit} >Verify OTP</button>
            </form>
          )}
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn1" value="Sign up" />
          </form>
        </div>
      </div>
 
 

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Drop us your Domain ❤️</p>
            <button onClick={handleSignUpClick} className="btn1 transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in and Start your Travel 💜</p>
            <button onClick={handleSignInClick} className="btn1 transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
}

export default Login;