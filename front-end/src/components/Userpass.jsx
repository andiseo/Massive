import React from 'react'

const Userpass = () => {
  return (
    <div className='flex justify-center items-center m-20 gap-4'>
        <div className='sidebar-profile flex flex-col justify-center rounded-md w-64 bg-white items-start gap-2 p-3 h-60'>
          <button className='btn-profile bg-transparent text-lg'>My Profile</button>
          <button className='btn-profile bg-transparent text-lg font-medium'>Password</button>
          <button className='btn-profile bg-transparent text-lg'>Logout</button>
        </div>
        <div className='content-profile flex flex-col justify-center rounded-md w-1/3 bg-white items-start gap-2 p-3 h-60'>
        <div className='flex justify-between w-full items-center font-Poppins text-xs'>
          <div className='flex gap-2 items-center'>
            <img className='w-8' src="./images/profile2.png" alt="" />
            <div>
                <div>Jack Thompson</div>
                <div>+62xxxxxxxxxxx</div>
            </div>
          </div>
            <button className='font-Poppins p-2 h-auto rounded-md text-white text-xs' >Edit Profile</button>
        </div>
        <form className='w-full flex flex-col justify-center items-center bg-transparent p-0 my-2 gap-2' action="">
            <input className='w-3/4 flex justify-between form-pass p-2 h-14 rounded-md text-white' 
            type="password" id='password' placeholder='Password'/>
            <input className='w-3/4 flex justify-between form-pass p-2 h-14 rounded-md text-white' 
            type="password" id='password' placeholder='Confirm Password'/>
        </form>
        </div>
      </div>
  )
}

export default Userpass