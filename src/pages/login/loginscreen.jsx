import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ReactDOM from "react-dom";
import Popup from 'reactjs-popup';
import "./login.css";
import { computeHeadingLevel } from "@testing-library/react";

function Loginscreen() {
  // React States
  const [errorMessages, setErrorMessages] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // User Login info
  const database = [
    {
      username: "user",
      password: "pass"
    },
   
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password ! "
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form > 
        <div className="input-container">
          <label>Username </label>
          <input type="text"  
onChange={(event)=>{console.log(event.target.value,typeof event.target.value)}}
 name="uname" 
 onInput={(event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
}} />
          
          {renderErrorMessage("uname")}
          
         </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass"  />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
  <Button variant="outlined" onClick={handleClickOpen}>
    Submit
  </Button>
</div>
      </form>
    </div>
  );

  return (
    <div className="app">
        <div className="button-container">
         <div className="login-form">
             <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Login successful !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   
  );
}
    


export default App;