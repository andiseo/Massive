// src/components/Dashboard.jsx

import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../admin/MainContent';
import NavbarAdmin from '../admin/NavbarAdmin';


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-Poppins">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavbarAdmin />
        <MainContent />
     


      </div>
     
    </div>
  );
};

export default Dashboard;
