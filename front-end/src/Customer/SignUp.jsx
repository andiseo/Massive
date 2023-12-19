import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert';
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name !== '' && formData.contact !== '' && formData.email !== '' && formData.password !== '' && formData.username !== '') {
      // Jika formulir tidak kosong, kirim data ke server
      axios.post('http://localhost:4000/users', formData)
        .then(response => {
          console.log('Data terkirim:', response.data);
          Swal({
            icon: 'success',
            title: 'Successful',
            text: 'You have successfully made your profile ^^!',
            confirmButtonText: 'OK',
          });
        })
        .catch(error => {
          console.error('Error:', error);
          Swal({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while submitting the form.',
            confirmButtonText: 'OK',
          });
        });
    } else {
      // Jika formulir kosong, tampilkan sweetalert dengan pesan 'Registration Successful'
      Swal({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while submitting the form',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className='flex justify-center w-screen'>
      <div className="side-img w-1/2 h-screen">
        <img src="images/sideimg.png" alt="" />
      </div>
      <div className="form w-1/2 my-auto">
        <div>
          <div className="form-header text-center text-2xl"><span className='font-medium' >Create</span> your account</div>
          <form className='mx-auto p-0 w-1/2 bg-transparent' onSubmit={handleSubmit}>
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="text"
              id='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="email"
              id='email'
              placeholder='Enter Email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="text"
              id='contact'
              placeholder='Enter contact'
              value={formData.contact}
              onChange={handleChange}
            />
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="text"
              id='username'
              placeholder='Enter Username'
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="password"
              id='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
            <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg'>Sign Up</button>
            <div className="center text-center text-base mt-2">Have an already account? <span className='font-medium' ><a href="/sign">Sign in</a></span></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
