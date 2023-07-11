import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/loader';
import { Box, CircularProgress } from '@mui/material';

const sendMail = (email, setClientname, setDocumentId) => {
  axios.post('http://localhost:3000/api/employeedetails/', { email })
    .then(res => {
      console.log(res.data);
      if (res.data.message === "Email matched successfully") {
        setClientname(res.data.data[0].clientname);
        setDocumentId(res.data.data[0].id);
        axios.post('http://localhost:3000/api/sendmail/', { mailid: email, id: res.data.data[0].id })
          .then(response => {
            // Handle successful response
            console.log(response.data);
          })
          .catch(error => {
            // Handle error
            console.error(error);
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

function Login() {
  const [showOtpField, setShowOtpField] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [clientname, setClientname] = useState('');
  const [documentid, setDocumentId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setShowOtpField(true);
    setEmail('');
  };

  const handleLoginSubmit = (event) => {
    const data = {
      otp: otp,
      id: documentid
    };

    axios.post('http://localhost:3000/api/otpverification/', data)
      .then(response => {
        // Handle successful response
        console.log(response);
        setShowOtpField(true);
        console.log(response.data);
        if (response.data === "Valid OTP") {
          navigate('/Book-now');
        }
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  
  return (
    <>
      <div className={`container1 ${showOtpField ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            {!showOtpField ? (
              <form className="sign-in-form">
                <h2 className="title">Let's Go!</h2>
                {!showOtpField && (
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                  </div>
                )}
                <input type='button' value="Login" className="btn1 solid" onClick={() => sendMail(email, setClientname, setDocumentId)} />
              </form>
            ) : (
              <form action="#" className="sign-in-form">
                <h2 className="title">Enter OTP</h2>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="text" placeholder="OTP" value={otp} onChange={handleOtpChange} />
                </div>
                <input type='button' value="Verify OTP" className="btn1 solid" onClick={handleLoginSubmit} />
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
              <button onClick={handleSignInClick} className="btn1 transparent" id="sign-up-btn">
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
