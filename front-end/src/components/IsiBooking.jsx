import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function IsiBooking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickAddress: '',
    dropAddress: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengambil idUser dari Local Storage
      const idUser = localStorage.getItem('idUser');
      const idMitra = localStorage.getItem('idMitra');

      // Mengirim permintaan POST ke API
      const response = await axios.post('http://localhost:4000/users/order', {
        idUser,
        idMitra, // Gantilah dengan idMitra yang sesuai
        status: '1', // Gantilah dengan status yang sesuai
        ...formData,
      });

      if (response.status === 200) {
        // Pesanan berhasil dibuat
        swal({
          title: 'Order Successful',
          text: 'Your order has been placed successfully!',
          icon: 'success',
          button: 'OK',
        });

        // Redirect ke halaman status
        navigate('/status');
      } else {
        // Gagal membuat pesanan
        swal({
          title: 'Order Failed',
          text: 'Unable to place your order. Please try again.',
          icon: 'error',
          button: 'OK',
        });
      }
    } catch (error) {
      console.error('Error during order creation:', error);
      swal({
        title: 'Order Failed',
        text: 'Unable to place your order. Please try again.',
        icon: 'error',
        button: 'OK',
      });
    }
  };

  return (
    <div className='flex dbox items-center justify-center mx-auto p-7 rounded-md my-12' style={{ width: '1240px', height: '650px', background: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '10px' }}>
        <img src="images/bimage.png" alt="" style={{ width: 500, height: 300 }} />
        <div className="card-tittle font-medium text-2xl">Move Master<br /></div>
        <div className='flex gap-2'>
          <img src="images/pinmaps.png" alt="" />
          <div className='font-Poppins text-sm'>
            Karawang
          </div>
        </div>
        <div className='text-justify font-Poppins text-base' style={{ width: '565px' }}>
          Professional services for house & apartment moving.<br />
          Within the city and outside the city.
        </div>
      </div>

      <div>
        <form className='mx-auto p-0 w-550 bg-transparent' onSubmit={handleSubmit}>
          <input
            className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
            type="text" id='name' placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
            type="number" id='contact' placeholder='Contact'
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
            type="text" id='pickAddress' placeholder='Pick Up Address'
            value={formData.pickAddress}
            onChange={handleChange}
          />
          <input
            className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
            type="text" id='dropAddress' placeholder='Drop Of Address'
            value={formData.dropAddress}
            onChange={handleChange}
          />
          <input
            className='form w-full h-16 mt-2 p-2 rounded-md bg-gray-200 text-black'
            type="date" id='date' placeholder='Date'
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit" className='btn-booking font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg' >Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default IsiBooking;