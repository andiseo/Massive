import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [contact, SetContact] = useState("");
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name,
        email,
        contact,
        username,
        password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
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
          <form onSubmit={saveUser} className='mx-auto p-0 w-1/2 bg-transparent' action="">
            <input 
              value={name}
              onChange={(e) => SetName(e.target.value)} 
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
              type="text" 
              placeholder='Enter Name'/>
            <input 
              value={email}
              onChange={(e) => SetEmail(e.target.value)} 
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
              type="Email" 
              placeholder='Enter Email'/>
            <input
              value={contact}
              onChange={(e) => SetContact(e.target.value)}
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
              type="number" 
              placeholder='Contact'/>
            <input
              value={username}
              onChange={(e) => SetUsername(e.target.value)}
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
              type="username" 
              placeholder='User name'/>
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black' 
              type="password"            
              placeholder='Password'/>
            <button type='submit' className='btn-submit font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg' >Sign Up</button>
            <div className="center text-center text-base mt-2">Have an already account? <span className='font-medium' >Sign in</span></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp