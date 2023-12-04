import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cardorder from '../components/Cardorder'

const Order = () => {
  return (
    <div>
      <Navbar />
      <img className='w-full justify-center' src="images/banner.png" alt="" />
      <Cardorder />
      <Cardorder />
      <Footer />
    </div>
  )
}

export default Order