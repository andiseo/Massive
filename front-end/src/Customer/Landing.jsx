// Landing.jsx

import React from 'react';
import '../assets/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img from '../../images/banner.png'
import { useNavigate } from 'react-router-dom';


const Landing = () => {
  const navigate = useNavigate();
  function navuser(){
    navigate("/sign");
  }
  function navmitra(){
    navigate("/mitra/sign");
  }
  localStorage.setItem('idUser', undefined);
  return (
  <div>
    <Navbar />
      <div>
        <img className='w-screen' src={Img} alt="" />
        <div className="btn-grup flex justify-center items-center gap-5">
          <button onClick={navuser} className='w-40 h-16 my-6 rounded-md text-white text-lg'>Customer</button>
          <button onClick={navmitra} className='w-40 h-16 my-6 rounded-md text-white text-lg'>Partner</button>
        </div>
        <div className='text-center my-4 text-3xl text-header font-medium'>Our Advantages</div>
        <div className='flex justify-center items-center gap-8 my-14'>
          <div className='flex flex-col gap-2'>
            <img src="/image/img_Moving.png" alt="" />
            <div className='text-center text-lg'>Moving House</div>
          </div>
          <div className='flex flex-col gap-2'>
            <img src="/image/Moving_office.png" alt="" />
            <div className='text-center text-lg'>Moving Office</div>
          </div>
          <div className='flex flex-col gap-2'>
            <img src="/image/insurance.png" alt="" />
            <div className='text-center text-lg'>Moving Insurance</div>
          </div>
        </div>
        <div className='container flex justify-center mx-auto items-center gap-32 my-14'>
          <div className='flex flex-col w-1/2 gap-5'>
            <div className='text-3xl text-start text-header font-medium'>Housewarming service with <br /> profesional</div>
            <div className='text-lg text-justify'>We specialize in the recruitment of highly skilled professionals who are dedicated to enhancing the overall efficiency of your relocation process. With our expert team on board, you can rest assured that your valuable time and energy will be optimized during the entire house-moving experience. </div>
          </div>
          <img src="/image/Service.png" alt="" />
        </div>
        <div className='text-center my-4 text-3xl text-header font-medium'>Join With Us</div>
        <div className='container flex justify-center mx-auto items-center gap-32 my-14'>
          <img src="/images/requaire.png" alt="" />
          <div className='flex flex-col w-1/2 gap-2'>
          <div className='text-3xl text-start text-header font-medium'>Requirements </div>
            <div className='text-lg text-start'>
              <ul>
                <li>Nationality Indonesian</li>
                <li>18-50 Years old</li>
              </ul>
            </div>
            <div className='text-3xl text-start text-header font-medium'>Document Requirements </div>
            <div className='text-lg text-start'>
              <ul>
                <li>Scan of original ID</li>
                <li>General Driver's License A/ B1/ B2/ B2 (within validity period)</li>
                <li>Vehicle documents</li>
                <li>Bank accont</li>
              </ul>
            </div>
            <div className='text-3xl text-start text-header font-medium'>Vehicle requirements</div>
            <div className='text-lg text-start'>
              <ul>
                <li>Pick Up Bak, Pick Up Box, Blind Van, Engkel Bak, Engkel Box</li>
                <li>Maximum vehicle age 10 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  );
};

export default Landing;
