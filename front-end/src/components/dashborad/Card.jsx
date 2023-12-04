// src/components/CustomerCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div>
      <h2 className='ml-3 text-base text-slate-500 font-medium hover:text-blue-500'>Home / Dashboard</h2>
    <div className='flex'>

    <div className={`w-1/4 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-md shadow-md m-3  rounded-xl bg-contain font-Poppins hover:from-pink-500 hover:to-yellow-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">User</p>
          <p className="text-sm opacity-75">Total 50</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="text-2xl text-white" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">2000</p>
    </div>
    <div className={`w-1/4 p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md shadow-md  m-3 hover:from-pink-500 hover:to-yellow-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Order</p>
          <p className="text-sm opacity-75">Total 50</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="text-2xl text-white" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">2000</p>
    </div>
    <div className={`w-1/4 p-6 bg-gradient-to-r from-pink-600 to-blue-500 rounded-md shadow-md m-3 hover:from-pink-500 hover:to-yellow-500 `}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Patner</p>
          <p className="text-sm opacity-75">Total 50</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="text-2xl text-white" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">2000</p>
    </div>
    <div className={`w-1/4 p-6 bg-gradient-to-r from-blue-300 to-blue-500 rounded-md shadow-md  m-3 hover:from-pink-500 hover:to-yellow-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Waitner</p>
          <p className="text-sm opacity-75">Total 50</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="text-2xl text-white" />
        </div>
      </div>
      <p className="text-3xl font-bold mt-4 text-white">2000</p>
    </div>
    
    </div>
    </div>
    
  );
};

export default Card;
