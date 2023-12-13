// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Auth from './Customer/auth';
//Customer
import Landing from './Customer/Landing';
import Home from './Customer/Home'
import Detail from './Customer/Detail'
import Booking from './Customer/Booking'
import Service from './Customer/Service'
import Status from './Customer/Status'
import Profile from './Customer/Profile'
import Sign from './Customer/Sign'
import SignUp from './Customer/SignUp'

//Mitra
import MitraProfile from './Mitra/MitraProfile'
import History from './Mitra/History'
import HomeMitra from './Mitra/HomeMitra'
import Order from './Mitra/Order'
import Signmitra from './Mitra/Signmitra'

//Admin

function App() {
  return (
    <Router>
      <div>
        <Routes>
          //Customer
          <Route exact path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/detail' element={<Detail/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/status' element={<Status/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign' element={<Sign/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/auth' element={<Auth/>} />
          //Mitra
          <Route path='/mitra/profile' element={<MitraProfile/>} />
          <Route path='/mitra/home' element={<HomeMitra/>} />
          <Route path='/mitra/history' element={<History/>} />
          <Route path='/mitra/order' element={<Order/>} />
          <Route path='/mitra/sign' element={<Signmitra/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
