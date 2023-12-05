import React from 'react'
import Footer1 from '../components/Footer'
import NavbarMitra from '../components/NavbarMitra'
import Img from '../../images/banner.png'
import Img2 from '../../images/Mitra1.png'

const HomeMitra = () => {
  return (
    <div>
      <NavbarMitra />
        <img className='w-screen justify-center' src={Img} alt="" />
        <div className='container flex justify-center mx-auto items-center gap-32 my-14'>
          <div className='flex flex-col w-1/2 gap-5'>
            <div className='text-3xl text-start text-header font-medium'>Scale your bussines with us</div>
            <div className='text-lg text-justify'>Let's forge a mutually beneficial partnership! Register your moving business on our specialized platform. By joining us, you'll expand your market reach, increase exposure, and make it easier for potential customers to discover the exceptional services your business offers. </div>
          </div>
          <img src={Img2} alt="" />
        </div>
      <Footer1 />
    </div>
  )
}

export default HomeMitra
