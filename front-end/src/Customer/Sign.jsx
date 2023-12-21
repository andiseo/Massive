import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Sign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/users/Sign?username=' + username + '&password=' + password);
      const data = await response.json();

      if (response.ok) {
        // Login successful, you can handle the successful login here
        console.log(data.message);
        swal({
          title: 'Login Successful',
          text: 'You have successfully logged in!',
          icon: 'success',
          button: 'OK',
        });
        localStorage.setItem('idUser', data.data[0].id);
        navigate("/home");
      } else {
        // Login failed, you can handle the failed login here
        console.error(data.message);
        swal({
          title: 'Login Failed',
          text: 'Invalid username or password.',
          icon: 'error',
          button: 'OK',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
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
          <form className='mx-auto p-0 w-1/2 bg-transparent' onSubmit={handleSubmit}>
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="text" id='username' placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
              type="password" id='pass' placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg'>Sign in</button>
            <div className="center text-center text-base mt-2">Don't have an account? <span className='font-medium'><a href="/signup">Sign up</a></span></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sign