import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Img from '../../images/banner.png'


const MitraProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    service: '',
    price: '',
    loc: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/partners', formData)
      .then(response => {
        console.log('Data terkirim:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'You have successfully made your profile ^^!',
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='flex flex-col justify-center bg-transparent'>
    <img src={Img} alt="" />
    <form className='bg-transparent flex flex-col items-center mx-auto w-1/2 ' onSubmit={handleSubmit}>
      <input
        className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black w-full'
        type="text"
        placeholder='Business Name'
        id='name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black w-full'
        type="text"
        placeholder='Business Description'
        id='description'
        value={formData.description}
        onChange={handleChange}
      />
      <input
        className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black w-full'
        type="text"
        placeholder='Service'
        id='service'
        value={formData.service}
        onChange={handleChange}
      />
      <input
        className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black w-full'
        type="text"
        placeholder='Price'
        id='price'
        value={formData.price}
        onChange={handleChange}
      />
      <input
        className='form h-16 mt-2 p-2 rounded-md bg-gray-200 text-black w-full'
        type="text"
        placeholder='Location'
        id='loc'
        value={formData.loc}
        onChange={handleChange}
      />
      {/* Button to submit the form */}
      <button className='w-full h-16 mt-2 rounded-md text-white text-lg'>Save</button>
    </form>
  </div>  
  );
};

export default MitraProfile;
