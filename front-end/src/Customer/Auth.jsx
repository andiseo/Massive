import React, { useState } from 'react';
import axios from 'axios'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


const SignUpForm = ({ toggleForm }) => {
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

    axios.post('http://localhost:4000/users', formData)
      .then(response => {
        console.log('Data terkirim:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have successfully registered!',
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
          </form>
          <div className='flex justify-center mt-2'>
            <button className='bg-transparent' onClick={toggleForm}>
              Already have an account? <span className='font-medium'>Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const navigate = useNavigate();
  
  const handleSignIn = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:4000/users', {
        email: username,
        password: password
      });
  
      if (response.status === 200) {
        console.log('Login berhasil');
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        });
        // Lakukan penanganan jika login berhasil, seperti navigasi ke halaman dashboard atau penyimpanan token
      } else {
        console.log('Login gagal');
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password!',
        });
        // Lakukan penanganan jika login gagal, seperti menampilkan pesan kesalahan
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Something went wrong!',
      });
      // Tangani kesalahan jika ada kesalahan dalam permintaan ke API, seperti menampilkan pesan kesalahan
    }
  };
  


  return (
    <div className='flex justify-center w-screen'>
      <div className="side-img w-1/2 h-screen">
        <img src="images/sideimg.png" alt="" />
      </div>
      <div className="form w-1/2 my-auto">
        <div>
          <div className="form-header text-center text-2xl"><span className='font-medium'>Sign in</span> your account</div>
          <form className='mx-auto p-0 w-1/2 bg-transparent' onSubmit={handleSignIn}>
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="text"
              id='username'
              placeholder='User name'
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="password"
              id='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg'>Sign in</button>
          </form>
          <div className='flex justify-center mt-2'>
            <button className='btn-toggle bg-transparent' onClick={toggleForm}>
              Don't have an account? <span className='font-medium'>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className='bg-transparent text-right mr-56'>
      {isSignIn ? <SignInForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
    </div>
  );
};

export default Auth;
