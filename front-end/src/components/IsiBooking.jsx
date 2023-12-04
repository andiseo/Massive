import React from 'react'

function IsiBooking() {
  return (
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

      <div>
          <form className='mx-auto p-0 w-550 bg-transparent' action="">
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="name" id='name' placeholder='Full Name'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="number" id='contact' placeholder='Contact'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="pick" id='pick' placeholder='Pick Up Address'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="drop" id='drop' placeholder='Drop Of Address'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="date" id='date' placeholder='Date'/>
            <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg' >Book Now</button>
          </form>
        </div>
    </div>
  )
}

export default IsiBooking