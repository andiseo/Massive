import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'
import NavbarLogin from '../components/NavbarLogin'
import Card from '../components/Card'
import Footer1 from '../components/Footer'


const Home = () => {
  useEffect(() => {
    // Mengambil idUser dari Local Storage
    const idUser = localStorage.getItem('idUser');
    
    // Gunakan idUser sesuai kebutuhan di sini
    console.log('idUser in order.jsx:', idUser);

    // Pastikan untuk membersihkan Local Storage setelah digunakan (jika diperlukan)
    // localStorage.removeItem('idUser');
  }, []); // Gunakan dependensi kosong agar efek hanya dijalankan sekali setelah render pertama

  return (
    <div>
      <NavbarLogin />
      <img className='w-screen justify-center' src="/images/banner.png" alt="banner" />
      <div className="header text-center font-Poppins font-medium text-4xl my-12">Top Partners</div>
      <div className='partner container mx-auto flex justify-center'>
      <Card tittle='Move Master' />
      <Card tittle='Rapid Move'/>
      <Card tittle='Nobel Move'/>
      </div>
      <div className="header text-center font-Poppins font-medium text-4xl my-12">Additional Service</div>
      <div className="content container mx-auto flex justify-center gap-12">
        <div className="text flex flex-col columns-lg gap-5 my-auto">
          <div className="text-header font-Poppins text-3xl">Extra protection of your goods <br /> with wooden packaging.</div>
          <div className="text-body font-Poppins text-xl text-justify w-96">We recruit professionals to improve the efficiency of your time and energy when moving house, no need to worry because we will deliver your goods to a new place safely.</div>
        </div>
        <img className="items-center" style={{width: '500px'}} src="/images/wooden.jpg" alt="" />
      </div>
      <Footer1 />
    </div>
  )
}

export default Home