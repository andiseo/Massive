import React from 'react'
import NavbarCustomer from './NavbarCustomer'
import Card from './Card'
import Footer1 from './Footer'


const landing = () => {
  return (
    <div>   
      <NavbarCustomer />
      <img className='w-screen justify-center' src="images/banner.png" alt="banner" />
      <div className="header text-center font-Poppins font-medium text-4xl my-12">Top Partners</div>
      <div className='partner container mx-auto flex justify-center'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className="header text-center font-Poppins font-medium text-4xl my-12">Additional Service</div>
      <div className="content container mx-auto flex justify-center gap-12">
        <div className="text flex flex-col columns-lg gap-5 my-auto">
          <div className="text-header font-Poppins text-3xl">Extra protection of your goods <br /> with wooden packaging.</div>
          <div className="text-body font-Poppins text-xl text-justify w-96">We recruit professionals to improve the efficiency of your time and energy when moving house, no need to worry because we will deliver your goods to a new place safely.</div>
        </div>
        <img className="items-center" style={{width: '500px'}} src="images/wooden.jpg" alt="" />
      </div>
      <Footer1 />
    </div>
  )
}

export default landing