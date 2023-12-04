import React from 'react'
import '../assets/style.css';

function login() {
  return (
    
    <div className="login min-h-screen flex items-center justify-center ">
      <form className=" p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Create your account</h2>
        <div className="mb-4">

          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">

          <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded transition duration-300 hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
     
      </form>
    </div>
  );
    
  
  
}

export default login