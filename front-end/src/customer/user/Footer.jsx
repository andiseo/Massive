// src/components/Footer.jsx
import React from 'react';
import '../assets/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer text-white p-5">
      <div className="footertext container mx-auto flex justify-between font-Poppins">
        <div className="w-1/5 justify-center">
          <img src="/Logo.png" alt="" />
          <p>Get Discount</p>
          <p>Membership</p>
        </div>
        <div className="w-1/5">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p>123 Happy street Anywhere</p>
          <p>Swiftmove@gmail.com</p>
          <p>(+97) 01234567890</p>
        </div>
        <div className="w-1/5">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <p>Login/Register</p>
          <p>My Account</p>
          <p>Forget Password</p>
        </div>
        <div className="w-1/5">
          <h3 className="text-lg font-semibold mb-4">Quick link</h3>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>FAQ</p>
          <p>Contact</p>
          
        </div>
        <div className="w-1/5">
        <FontAwesomeIcon icon={faInstagram} size="2x " className='icon' style={{ marginRight: '25px', marginBottom :'20px' }} />
      <FontAwesomeIcon icon={faTwitter} size="2x" className='icon' style={{ marginRight: '25px', marginBottom :'20px' }} />
      <FontAwesomeIcon icon={faFacebook} size="2x" className='icon' style={{marginBottom:'25px'}}/>
          <form>
            <label htmlFor="email" className="block mb-2">Stay up to date</label>
            <input type="email" placeholder="Your email addres" id="email" name="email" className="w-full p-2 mb-4 rounded"  required />

            <button type="submit" className="submit py-2 px-4">Submit</button>
          </form>
        </div>
      </div>
      <div className="copyright text-center mt-8">
        &copy; 2023 Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
