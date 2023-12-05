import React from 'react'
import Footer from '../components/Footer'
import Cardorder from '../components/Cardorder'
import NavbarMitra from '../components/NavbarMitra'

const Order = () => {
  return (
    <div>
      <NavbarMitra />
      <img className='w-full justify-center' src="images/banner.png" alt="" />
      <div className='order-box flex justify-center items-start mx-auto carousel carousel-vertical rounded-box' >
        <Cardorder />
        <Cardorder />
      </div>
      <Footer />
    </div>
  )
}

export default Order