import React from 'react'

const Sign = () => {
  return (
    <div className='flex justify-center w-screen'>
      <div className="side-img w-1/2 h-screen">
        <img src="images/sideimg.png" alt="" />
      </div>
      <div className="form w-1/2 my-auto">
        <div>
          <div className="form-header text-center text-2xl"><span className='font-medium' >Sign in</span> your account</div>
          <form className='mx-auto p-0 w-1/2 bg-transparent' action="">
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="username" id='username' placeholder='User name'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
            type="Password" id='pass' placeholder='Password'/>
            <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg' >Sign in</button>
            <div className="center text-center text-base mt-2">Don't have account? <span className='font-medium' >Sign up</span></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sign