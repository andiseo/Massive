import React from 'react'
import Review from '../components/Review'
import Dbox from '../components/Dbox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Bprofile from '../components/Bprofile'

const Detail = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Bprofile></Bprofile>
        <Dbox/>
        <div className='flex justify-center text-center mb-12'>
            <div className='flex justify-between items-start' style={{width: '1240px'}}>
                <img src="images/porto1.png" alt="" />
                <img src="images/porto2.png" alt="" />
                <img src="images/porto3.png" alt="" />
            </div>
        </div>
        <Review/>
        <Footer></Footer>
    </div>
  )
}

export default Detail
