import React from 'react'

const Inputreview = () => {
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
      <div className='w-3/4'>
        <div className='flex justify-between items-center font-Poppins'>
            <div>
                <div>Jack Thompson</div>
                <div>+62xxxxxxxxxxx</div>
            </div>
            <div className='items-center'> Date : 12/12/2023</div>
        </div>
        <div className='pick-container rounded-md p-3'>
          <div className='text-center text-white m-2 font-medium'>What about our partner service?</div>
            <form className='p-0 w-full' action="">
              <input className='bg-white rounded-md w-full h-16' type="text" />
            </form>        
        </div>
        <button className='btn-confirm w-full h-16 mt-2 rounded-md text-white text-lg' >Confirm</button>
      </div> 
    </div>
  )
}

export default Inputreview