import React from 'react'
import { useState } from 'react'
const Userprofile = () => {
  const [profile,setProfile]=useState(1);

  const kondisiProfile = () => {
    if(profile==1){
      setProfile(2)
    }else{
      setProfile(1)
    }
  }
  if(profile===1){
    return (
      <div className='contain flex mx-auto my-10 p-5 justify-center items-center rounded-md'>
        <div className='w-2/4 h-full'>
          <div className='flex flex-col justify-center bg-white items-start gap-2'>
            <button className='btn-profile bg-transparent text-lg font-medium'>My Profile</button>
            <button className='btn-profile bg-transparent text-lg' onClick={kondisiProfile}>Password</button>
            <button className='btn-profile bg-transparent text-lg'>Logout</button>
          </div>
        </div>
        <div className='card-profile p-5 rounded-md flex flex-col justify-between w-full items-center font-Poppins text-base gap-3'>
          <div className='flex w-full justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <img className='w-14' src="./images/profile2.png" alt="" />
              <div>
                <div>Jack Thompson</div>
                <div>+62xxxxxxxxxxx</div>
              </div>
            </div>
            <button className='font-Poppins p-2 h-auto rounded-md text-white text-xs' >Edit Profile</button>
          </div>
          <div className='w-full flex justify-between'>
            <div className='font-medium'>Full Name</div>
            <div>Jack Thompson</div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='font-medium'>Contact</div>
            <div>+62xxxxxxxxxxx</div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='font-medium'>Email</div>
            <div>thompson@gmail.com</div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='font-medium'>user name</div>
            <div>mrthmpson</div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='font-medium'>Password</div>
            <div>*********</div>
          </div>
        </div>
      </div>
    )
  }

  if(profile===2){
    return(
      <>
        <div className='flex justify-center items-center m-20 gap-4'>
          <div className='sidebar-profile flex flex-col justify-center rounded-md w-64 bg-white items-start gap-2 p-3 h-60'>
            <button className='btn-profile bg-transparent text-lg' onClick={kondisiProfile}>My Profile</button>
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
      </>
    )
  }
}

export default Userprofile