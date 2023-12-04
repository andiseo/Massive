import React from 'react'
import Logo from '../../images/logo.png'
import { useNavigate } from "react-router-dom";
const NavbarMitra = () => {
    const navigate = useNavigate();
    function  nav(){
        navigate("/mitra/profile");
    }
  return (
    <div>
        <div className='Navbar'>
        <div className='container mx-auto'>
            <div className='flex justify-around'>
            <div> 
                <img className='logo w-16' src={Logo} alt="" />
            </div>
            <div className='navbar-nav flex items-center font-Poppins'>
                <a className='mx-4 text-lg' href='/mitra'>Home</a>
                <a className='mx-4 text-lg' href='/mitra/order'>Order</a>
                <a className='mx-4 text-lg' href='/mitra/history'>History</a>
            </div>
            <div className='flex items-center'>
                <button className='font-Poppins px-3 h-8 rounded-md text-white' onClick={nav}>profile</button>
            </div>
            </div>  
        </div>
    </div>
    </div>
  )
}

export default NavbarMitra
