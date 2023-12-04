// src/components/Navbar.jsx
import React from 'react';
import '../assets/style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';







const NavbarAdmin = () => {
  return (
  
    <div className="navbar  flex items-center justify-between">

    <div className="menu flex-grow text-left ">
      <a href="/" className="font-Poppins font-reguler text-lg font-size: 1.125rem; ml-7  ">Pages / Admin</a>
    </div>
    <input
          type="text"
          placeholder="Search..."
          className="py-1 px-4 mr-5 w-40 sm:w-30 md:w-64 rounded-md border-blue-500  border focus:outline-none  focus:border-blue-500 transition-all duration-300"
        />

    
    <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-all duration-300 mr-5" />
    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-all duration-300 mr-5" />
    <FontAwesomeIcon icon={faBell} className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-all duration-300 mr-5" />
    <div className="w-15 h-14 overflow-hidden rounded-full mr-7">
        <img
         src='./Logo.png'
         alt='logo'
          className="w-15 h-14  object-cover mr-15 "
        />
      </div>

     
   
  

   
  </div>
 

  );
};

export default NavbarAdmin;
