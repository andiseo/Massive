import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layanan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/partners');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Gagal mengambil data dari API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Layanan">
      <Navbar />
      <div className="flex flex-wrap items-start justify-start h-auto py-5 mx-60">
        {data.map(item => (
          <div key={item.idpartnes} className="item">
            <div className='Card w-72 rounded-md px-3 py-3 mx-5 my-5'>
              <img src="images/imgcard.png" alt="" />
              <div className="card-content">
                <div className="card-body font-Poppins p-0 gap-0 my-4">
                  <p className="card-tittle w-full font-medium text-xl">{item.name}</p>
                  <p className="card-text w-full text-sm mt-2">{item.description}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <button className='font-Poppins px-3 h-8 rounded-md text-white text-sm' >Book Now</button>
                  <div className="price font-Poppins font-medium text-sm">Rp. {item.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Layanan;
