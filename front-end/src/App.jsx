// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Login from './Auth/login'
// import Register from './Auth/register'
import Detail from './pages/Detail'
import Booking from './pages/Booking'
import Sign from './pages/Sign'
import SignUp from './pages/SignUp'
import Service from './pages/Service'
import HomeMitra from './Mitra/HomeMitra'

import Dashboard from './pages/Dashboard'


import Customer from './customer/index'
import Patner from './Mitra/index'

import UpdateCustomer from '../src/customer/update'
import InsertCustomer from './customer/input'
import ViewCustomer from './customer/view'
import UpdatePatner from './Mitra/update'
import InputPatner from './Mitra/input'

//Page Account Customer
import Profile from './pages/Profile'
import Status from './pages/Status'
import Order from './Mitra/Order'
import History from './Mitra/History'
//trial
import Trial from './pages/Trial'
import ProfileMitra from './Mitra/ProfileMitra'
import OurAdvantagesSection from './pages/OurAdvantagesSection'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route exact path='/' element={<OurAdvantagesSection/>}/>

          <Route  path="/dashboard" element={<Dashboard/>} />

          {/* <Route  path="/about" element={<About/>} /> */}
          {/* <Route  path="/contact" element={<Contact/>} /> */}
          {/* <Route path="/Auth/login" element={<Login />} />
          <Route path="/Auth/register" element={<Register />} /> */}
          
          {/* <Route path="/Home" element={<Home />}></Route> */}
          <Route path="/Detail" element={<Detail/>}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/Sign' element={<Sign />}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/mitra/' element={<HomeMitra />}></Route>


          <Route path="/customer" element={<Customer />} />
        <Route path="/patner" element={<Patner />} />

        <Route path="/editcustomer" element={<UpdateCustomer />} />
        <Route path="/inputcustomer" element={<InsertCustomer />} />
        <Route path="/viewcutomer" element={<ViewCustomer />} />
        <Route path="/editpatner" element={<UpdatePatner />} />
        <Route path="/inputpatner" element={<InputPatner />} />
        
        <Route path="/ProfileCust" element={<Profile />} />
        <Route path="/status" element={<Status />} />
        <Route path="/mitra/Order" element={<Order />} />
        <Route path="/mitra/history" element={<History />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/mitra/profile" element={<ProfileMitra/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
