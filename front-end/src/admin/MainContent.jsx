// src/components/MainContent.jsx

import React from 'react';
import Card from './dashborad/Card'
import Customer from '../customer/components/listcustomer'



const MainContent = () => {
  return (
    <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-200">
    <Card/>
    <Customer/>
    </main>
  );
};

export default MainContent;
