import React, { useEffect } from 'react';
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import IsiBooking from '../components/IsiBooking'


const Booking = () => {
  useEffect(() => {
    // Mengambil idUser dari Local Storage
    const idUser = localStorage.getItem('idUser');
    const idMitra = localStorage.getItem('idMitra');
    // Gunakan idUser sesuai kebutuhan di sini
    console.log('idUser in order.jsx:', idUser);
    console.log('idMitra in order.jsx:', idMitra);
    // Pastikan untuk membersihkan Local Storage setelah digunakan (jika diperlukan)
    // localStorage.removeItem('idUser');
  }, []); // Gunakan dependensi kosong agar efek hanya dijalankan sekali setelah render pertama

  return (
    <div>
      <NavbarLogin />
      <IsiBooking />
      <Footer />
    </div>
  )
}

export default Booking