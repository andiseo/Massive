import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Inputreview from '../components/Inputreview'

const Status = () => {
  const[status,setStatus]=useState(1);

  const kondisiStatus = () => {
      setStatus(2)
  }
  
  if(status==1){
    return(
      <>
        <Navbar />
          <div className='flex dbox items-center justify-center mx-auto p-7 rounded-md my-12' style={{width: '1240px', height: '650px', background: 'white'}}>
          <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'flex-start',gap:'10px'}}>
              <img src="images/bimage.png" alt="" style={{ width: 500, height: 300 }} />
              <div className="card-tittle font-medium text-2xl">Move Master<br /></div>
              <div className='flex gap-2'>
              <img src="images/pinmaps.png" alt="" />
              <div className='font-Poppins text-sm'>
                                123 Happy Street Anywhere
              </div>
              </div>
              <div className='text-justify font-Poppins text-base' style={{width: '565px'}}>Professional services for house & apartment moving.<br/>
                Within the city and outside the city.</div>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <div className='flex justify-between items-center font-Poppins'>
                <div>
                    <div>Jack Thompson</div>
                    <div>+62xxxxxxxxxxx</div>
                </div>
                <div className='items-center'> Date : 12/12/2023</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='pick-container rounded-md p-3'>
                  <div className='text-center text-white m-2 font-medium'>Pick Up</div>
                  <div className='pick-box flex justify-between items-center px-5 py-2 bg-white rounded-md gap-10'>
                      <div className='text-justify text-white text-sm'>123 Beautiful Rose Street, Happy Prosperity Village Peaceful Harmony, District Joyful City, 12345 United States</div>
                      <img src="images/pinmaps2.png" alt="" />
                  </div>
              </div>
              <div className='drop-container rounded-md p-3'>
                  <div className='text-center text-white m-2 font-medium'>Drop Of</div>
                  <div className='drop-box flex justify-between items-center px-5 py-2 bg-white rounded-md gap-10'>
                      <div className='text-justify text-white text-sm'>42 Serene Meadow Lane, Tranquil Heights Suburb Serenity Valley, District Harmony City, 54321 United States</div>
                      <img src="images/pinmaps2.png" alt="" />
                  </div>
              </div>
            </div>
            <button className='w-full h-16 mt-2 rounded-md text-white text-lg' onClick={kondisiStatus}  >Confirm</button>
        </div>
        </div>
      <Footer />
      </>
    )
  }

  if(status==2){
    return(
      <>
        <Navbar/>
        <Inputreview/>
        <Footer />
      </>
    )
  }
}

export default Status