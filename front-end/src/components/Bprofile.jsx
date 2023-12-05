import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bprofile = () => {
  const navigate = useNavigate();
  function navbooking(){
    navigate("/booking");
  }
  return (
    <div className='bprofile flex justify-between items-center mt-12 mx-auto' style={{width: '1240px'}}> 
      <img src='images/bimage.png' alt='Business Image' />
      <div className='my-auto' style={{width: '587px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', gap:'10px'}}>
        <div className='font-medium font-Poppins text-3xl'>Move Master</div>
        <div className='flex gap-2'>
          <img src="images/pinmaps.png" alt='Map Pin' />
          <div className='font-Poppins text-sm'>
            123 Happy Street Anywhere
          </div>
        </div>
        <div className='text-justify font-Poppins text-base' style={{width: '565px'}}>
          Professional services for house & apartment moving. Within the city and outside the city.
        </div>
        <button onClick={navbooking} className='font-Poppins px-3 w-40 h-11 rounded-md text-white text-lg'>
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Bprofile
