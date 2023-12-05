import React from 'react'
import NavbarMitra from '../components/NavbarMitra'
import Footer from '../components/Footer'

const MitraProfile = () => {
  return (
    <div>
      <NavbarMitra />
      <form className='container mx-auto my-14 bg-transparent'>
        <div className='flex justify-center items-center gap-10 mb-8'>
          <div className='rounded-md bg-slate-700 w-1/2 h-72'></div>
          <div className='w-1/2 flex flex-col gap-5'>
            <input className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' type="text" placeholder='Bussines Name' />
            <input className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' type="text" placeholder='Bussines Description' />
          </div>
        </div>
        <div className='flex flex-col gap-5 mb-8'>
          <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' type="text" placeholder='Bussines Name' />
          <div className='flex gap-10'>
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' type="text" placeholder='Bussines Name' />
            <input className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' type="text" placeholder='Bussines Description' />
          </div>
        </div>
        <div className='flex justify-between gap-10'>
          <div className='rounded-md bg-slate-700 w-1/3 h-36'></div>
          <div className='rounded-md bg-slate-700 w-1/3 h-36'></div>
          <div className='rounded-md bg-slate-700 w-1/3 h-36'></div>
        </div>
        <div className='flex justify-center'>
          <button className='w-1/3 h-16 mt-8 rounded-md text-white text-lg' >Save</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default MitraProfile