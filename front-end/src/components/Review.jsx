import React from 'react'

const Review = () => {
  return (
    <div className='flex justify-center text-center mb-12'>
      <div className='review rounded-md p-2' style={{width: '1240px', background: '#DBDBDB)', }}>
        <div className='flex items-center gap-2 m-2'>
            <img className='w-11 h-auto mx-1 mb-1 ' src="images/profile.png" alt="" />
            <p className='text-justify text-black font-Poppins'>Jack Thompson</p>
        </div>
        <div className='flex items-center p-2 bg-white m-3 rounded-md'>
            <p className='text-justify text-black font-Poppins'>The flexible moving package options allowed me to choose services that suited my needs. It's a perfect solution for home relocation, especially for those seeking convenience and high quality.</p>
        </div>
      </div>
    </div>
  )
}

export default Review
