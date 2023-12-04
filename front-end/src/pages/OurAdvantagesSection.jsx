// OurAdvantagesSection.jsx

import React from 'react';
import '../assets/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const OurAdvantagesSection = () => {
  return (
  <>
    <Navbar/>
    <div className="advantages-section">
      <h2 className='font-Poppins font-bold'>Our Advantages</h2>
      <div className="advantages-list font-Poppins">
        <div className="advantage-item">
          <img src="/image/img_Moving.png" alt="" />
          <p>Moving House</p>
        </div>
        <div className="advantage-item">
          <img src="/image/Moving_office.png" alt="" />
          <p>Moving office</p>
        </div>
        <div className="advantage-item">
          <img src="/image/insurance.png" alt="" />
         <p>Moving Office</p>
        </div>
      </div>

      <div className="service flex justify-center items-center  font-Poppins">
      <div className="w-full p-6 flex">
        <div className="flex-1">
          <div className="text-2xl font-bold mb-4"><h2>Service Section</h2></div>
          <div className="descriptio text-gray-600 mb-4">
          We specialize in the recruitment of highly skilled professionals 
          who are dedicated to enhancing the overall efficiency of your relocation 
          process. With our expert team on board, you can rest assured that your valuable 
          time and energy will be optimized during the entire house-moving experience. 
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img
            src="/image/Service.png" // Ganti URL gambar sesuai kebutuhan Anda
            alt="Service Image"
            className="max-w-full"
          />
        </div>
      </div>
    </div>

    </div>
    <Footer/>
  </>
  );
};

export default OurAdvantagesSection;
