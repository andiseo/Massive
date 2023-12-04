// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome, faUser,faChartBar,faUsers ,faHandshake } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  
  return (
    <aside className="ml-1 mt-1 mb-1 bg-gradient-to-b rounded-2xl from-blue-500 to-purple-700 text-white w-64 p-4 overflow-y-auto">
        <div className=" w 1/2 flex items-center  bg-white rounded-xl p-2 h-14 drop-shadow-md">
        <img src="/Logo.png" alt="Logo" className="w-14 h-14" />
        <h2 className='text-blue-600 mr-20 font-sm font-Poppins font-bold  text-xl'>Movera</h2>
        <button
         
          className="lg:hidden text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Sidebar Content (Menu Items) */}
      <nav className=" mt-4 mr-14 text-teal-50 ">
        <ul className='mr-10  '>
          <li className="text-xl  mr-29 py-2 w-60   p-4 hover:bg-blue-400  rounded  " >
            <a href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </li>
          <li className="text-xl  mr-29 py-2 w-60   p-4  hover:bg-blue-400  rounded  ">
            <a href="/dashboard">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Dashboard
            </a>
          </li>
          <li className="text-xl  mr-29 py-2 w-60   p-4  hover:bg-blue-400  rounded  ">
            <a href="/customer">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Customer
            </a>
          </li>
          <li className="text-xl  mr-29 py-2 w-60   p-4  hover:bg-blue-400  rounded  ">
            <a href="/patner">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Patner
            </a>
          </li>
        </ul>
      </nav>
      
      
    </aside>
  );
};

export default Sidebar;
