import React from 'react'
import Footer from '../components/Footer'
import Cardorder from '../components/Cardorder'
import NavbarMitra from '../components/NavbarMitra'

const Order = () => {
  return (
    <div>
      <NavbarMitra />
      <img className='w-full justify-center' src="images/banner.png" alt="" />
      <Cardorder />
      <Cardorder />
      <Footer />
    </div>
  )
}

export default Order