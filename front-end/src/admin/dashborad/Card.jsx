// src/components/CustomerCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHandshake,faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div>
      <h2 className='ml-3  text-base text-slate-500 font-medium hover:text-blue-500'>Home / Dashboard</h2>
    <div className='flex'>

    <div className={`w-1/4 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-md shadow-md m-3  rounded-xl bg-contain font-Poppins hover:from-pink-500 hover:to-yellow-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">User</p>
          <a href="/customer" className='text-xs text-gray-500  hover:text-white '>Details</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="text-2xl text-white text-4xl" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">400K</p>
    </div>
    <div className={`w-1/4 p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md shadow-md  m-3 hover:from-pink-500 hover:to-yellow-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Active Order</p>
          <a href="/active" className='text-xs text-gray-500  hover:text-white '>Details</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-white  text-4xl" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">20000K</p>
    </div>
    <div className={`w-1/4 p-6 bg-gradient-to-r from-pink-600 to-blue-500 rounded-md shadow-md m-3 hover:from-pink-500 hover:to-yellow-500 `}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">inactive Order</p>
          <a href="/inactive" className='text-xs text-gray-500  hover:text-white '>Details</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faTimesCircle} className="text-2xl text-white  text-4xl" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">20K</p>
    </div>
    <div className={`w-1/4 p-6 bg-gradient-to-r from-blue-300 to-blue-500 rounded-md shadow-md  m-3 hover:from-pink-500 hover:to-yellow-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Patner</p>
          <a href="/patner" className='text-xs text-gray-500  hover:text-white '>Details</a>
        </div>
        <div className='text-white'>
        <FontAwesomeIcon icon={faHandshake} className="mr-2 text-4xl" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">450K</p>
    </div>
    
    </div>
    </div>
    
  );
};

export default Card;
