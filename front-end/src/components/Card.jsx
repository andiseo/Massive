import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = (props) => {
  return (
    <div className='Card w-72 rounded-md px-3 py-3 mx-5 my-5'>
      <img src="images/imgcard.png" alt="" />
      <div className="card-content">
        <div className="card-body font-Poppins p-0 gap-0 my-4">
          <div className="card-tittle w-full font-medium text-xl mb-2">{props.tittle}</div>
          <div className="card-text w-full text-sm">Professional services for house & apartment moving. Within the city and outside the city.</div>
        </div>
        <div className='flex justify-between items-center'>
          <button className='font-Poppins px-3 h-8 rounded-md text-white text-sm' >Book Now</button>
          <div className="price font-Poppins font-medium text-sm">Rp.150.000</div>
        </div>
      </div>
    </div>
  )
}

export default Card