import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white p-6 font-[poppins]'>
      <div className='container mx-auto flex flex-col md:flex-row justify-evenly'>
        {/* About Us Section */}
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-2'>About Us</h4>
          <p className='text-sm'>
            Sine Electricals is a leading provider of heavy machinery and electrical <br /> solutions for various industries.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-2'>Quick Links</h4>
          <ul className='space-y-3'>
            <li><Link to="/" className='text-sm hover:underline'>Home</Link></li>
            <li><Link to="/all" className='text-sm hover:underline'>Products</Link></li>
            <li><Link to="/services" className='text-sm hover:underline'>Services</Link></li>
            <li><Link to="/about" className='text-sm hover:underline'>About Us</Link></li>
            <li><Link to="/contact" className='text-sm hover:underline'>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className='font-bold mb-2'>Contact Us</h4>
          <p className='text-sm space-y-3'>
            <span className='block'>📞 +91 9134353998</span>
            <span className='block'>✉️ <a href="mailto:sineelect@gmail.com" className='hover:underline'>sineelect@gmail.com</a></span>
            <span className='block'>📍 A/24 Adityapur Industrial Area Jamshedpur, Jharkhand</span>
          </p>
        </div>
      </div>
      
      <div className='text-center mt-4'>
        <p className='text-sm'>© {new Date().getFullYear()} Sine Electricals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
