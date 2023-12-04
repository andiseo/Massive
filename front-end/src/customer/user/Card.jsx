import React from 'react'

const Card = () => {
  return (
    <div className='Card w-72 rounded-md px-3 py-3 mx-5'>
      <img src="images/imgcard.png" alt="" />
      <div className="card-content">
        <div className="card-body font-Poppins mt-3">
          <div className="card-tittle font-medium text-xl">Service Name</div>
          <div className="card-text text-base">Professional services for house & apartment moving. Within the city and outside the city.</div>
        </div>
        <div className='flex justify-between mt-3 items-center'>
          <button className='font-Poppins px-3 h-8 rounded-md text-white text-sm' >Book Now</button>
          <div className="price font-Poppins font-medium text-sm">Rp.150.000</div>
        </div>
      </div>
    </div>
  )
}

export default Card