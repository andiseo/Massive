import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Inputreview = () => {
  const navigate = useNavigate();
  const idUser = localStorage.getItem('idUser');
  const [review, setReview] = useState('');

  const nav = () => {
    // Assuming you have an API endpoint for submitting reviews
    const apiUrl = 'http://localhost:4000/users/order/submit';

    // Prepare the data to be sent in the request body
    const data = {
      idUser: idUser,
      ulasan: review,
    };

    // Make a POST request using fetch API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Review submitted successfully:', result);

        // Optionally, you can redirect the user after submitting the review
        navigate('/home');
      })
      .catch(error => {
        console.error('Error submitting review:', error);
      });
  };

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
        <form className='bg-white' action="">
        <div className='pick-container rounded-md p-3'>
          <div className='text-center text-white m-2 font-medium'>What about our partner service?</div>
          <input
            className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
            placeholder=''
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button onClick={nav} className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg btn-confirm'>Send review</button>
      </form>
      </div> 
    </div>
  )
}

export default Inputreview