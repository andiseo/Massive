import React from 'react'
import Navbar from '../components/Navbar'
import Footer1 from '../components/Footer'

const HomeMitra = () => {
  return (
    <div>
        <Navbar />
            <img className='w-screen justify-center' src="images/banner.png" alt="banner" >
            </img>
            <div className="content container mx-auto flex justify-center gap-12">
                <div className="text flex flex-col columns-lg gap-5 my-auto">
                <div className="text-header font-Poppins text-3xl " style={{fontWeight:'bold',fontSize:'27px'}}>Scale your business with us</div>
                <div className="text-body font-Poppins text-xl text-justify w-96 " style={{heigth:'500px',fontSize:'17px'}}>Let's forge a mutually beneficial partnership! Register your moving business on our specialized platform. By joining us, you'll expand your market reach, increase exposure, and make it easier for potential customers to discover the exceptional services your business offers.</div>
                </div>
                <img className="items-center" style={{width: '500px',margin:'30px'}} src="images/Mitra1.png" alt="" />
            </div>
        <Footer1 />
    </div>
  )
}

export default HomeMitra
