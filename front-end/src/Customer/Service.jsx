import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

const Service = () => {
  return (
    <div>
        <Navbar/>
          <div className='flex items-center justify-center'>
            <Carousel/>
          </div>
        <Footer/>
    </div>
  )
}

export default Service
