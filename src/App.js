import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Routes,Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Insight from './pages/Insights';
import  Payment  from './pages/Payment';
import Settings  from './pages/Settings';

import Bookings from './pages/Bookings';
import Popular from './pages/Popular/Popular';
import SignInSide from './pages/LoginPage';
import FormDialog from './pages/gstmangement';
import Login from './pages/login/login';
import MyComponent from './pages/Modal';
import CardComponent from './pages/Reactdatepicker';
// import Login from './pages/Login';

const App = () => {
  function HomeComponent(){
    return (
      <div>
      <Home></Home>
      <Popular></Popular>
      </div>
    )
  }
  return (
    
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to="/login" />}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
        <Route path='/Book-now' element={<HomeComponent/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Settings' element={<Settings/>}/>
        <Route path='/gstmanagement' element={<FormDialog/>}></Route>
        <Route path='/Insights' element={<Insight/>}/>
        {/* <Route  path='/Login' element={<Login/>}/> */}
        <Route path='/modal' element={<MyComponent/>}/>
        <Route path="/card" element={<CardComponent/>}/>      
      </Routes>
    </Router>
 
   
  
  )
}

export default App
